var voteId=getQueryVariable('getQueryVariable')?getQueryVariable('getQueryVariable'):89;
var explain = null
function Explain() {}
Explain.prototype = {
  res: {},
  voteTitle:'',
  cssScr:document.getElementById('css-src'),
  init: function() {
    var _this = this;
    this.getData().then(function() {
      _this.renderExplain();
      _this.renderQuestion();
      _this.getCss();
    });
  },
  getData: function() {
    var _this = this;
    return $
      .ajax({
        type: "GET",
        jsonp: "callback",
        dataType: "jsonp",
        url: getData_url+"/vote/vote/api/getQuesInfoByQuesId",
        data:{
            questionnaireId: voteId
        }
      })
      .then(function(response) {
          var result = response.data.quesInfoByQuesId
          // console.log('获取空白问卷的response:',response.data);
          _this.voteTitle = result.title;

          var notAnswer = $.cookie(voteId);
          if (notAnswer == 2) {
              window.location.href="./end.html?title="+_this.voteTitle+'&id='+voteId+'&colour=2';
          }

          if(response.data.isAnwserQues||result.delFlag==1){
              window.location.href="./stop.html?title="+_this.voteTitle+'&id='+voteId+'&colour=2';
          }else{
              _this.res = result;
              document.title = _this.res.title
              if (!result.moreAnswer) {
                  $.cookie(voteId, '1');
              }
          }
      })
  },
  renderExplain: function() {
    var investigateTitle = this.res.title; //调查问卷大标题
    var description = this.res.description; //调查描述
    var html = template("explain", {
      investigateTitle: investigateTitle,
      description: description
    });
    $("#explain").html(html);
  },
  renderQuestion: function() {
    var questionList = this.res.questionList;
    var html = template("content", {
      questionList: questionList
    });
    $(".content").html(html);


    layui.use('form', function() {
        var form = layui.form
        form.render(); //更新全部layUI

        $(".content").on("change","input[type=text]", function(ev) {
            $(this).removeClass("layui-form-danger");
        });
    });
  },
  getCss:function(){
    if(this.res.colour==5){
      this.cssScr.href="./src/yellow.css";
    }else if(this.res.colour==4){
      this.cssScr.href="./src/green.css";
    }else if(this.res.colour==3){
      this.cssScr.href="./src/blue.css";
    }else if(this.res.colour==2){
      this.cssScr.href="./src/red.css";
    }else{
      this.cssScr.href="./src/gray.css";
    }
  }
};

$(function() {
  explain = new Explain();
  explain.init();
});
