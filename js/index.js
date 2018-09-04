var voteId=getQueryVariable('getQueryVariable')?getQueryVariable('getQueryVariable'):89;

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
          console.log('获取空白问卷的response:',response.data);
          _this.voteTitle=response.data.quesInfoByQuesId.title;

          if(response.data.isAnwserQues||response.data.quesInfoByQuesId.delFlag==1){
              window.location.href="./end.html?title="+_this.voteTitle+'&id='+voteId;
          }else{
              _this.res = response.data.quesInfoByQuesId;
              var voteName=document.getElementById('voteName');
              voteName.innerHTML=_this.res.title;
              // console.log(voteName);
          }
      });
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

    setTimeout(function () {
        form.render(); //更新全部layUI
    },30)
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
  var explain = new Explain();
  explain.init();
});
