var voteId=getQueryVariable('id')?getQueryVariable('id'):'';
function Explain() {}
Explain.prototype = {
  res: {},
  init: function() {
    var _this = this;
    this.getData().then(function() {
        //alert(123);
      _this.renderQuestion();
      _this.getTitle();
      _this.layui();
    });
  },
  getData: function() {
    var _this = this;
    return $
      .ajax({
        type: "GET",
        jsonp: "callback",
        dataType: "jsonp",
        url: getData_url+"/vote/api/checkAnwsers",
        data:{
            questionType:1,
            questionnaireId:voteId
        }
      })
      .then(function(response) {
          _this.res=response.data;
          console.log(response.data);
        
      })
  },
  renderQuestion: function() {
    var questionList = this.res;
    console.log(questionList);
    var html = template("result", {
      questionList: questionList
    });
    $(".reselt-content").html(html);
    

  },
  layui:function(){
    layui.use('element', function () {
        var element = layui.element;
    });
  },
  getTitle:function(){
      var title=getQueryVariable('title');
      var investigateTitle=document.getElementById('investigate-title');
      var voteName=document.getElementById('vote-name');
      investigateTitle.innerHTML=decodeURIComponent(title);
      voteName.innerHTML=investigateTitle.innerHTML;

  }
  
};

$(function() {
  var explain = new Explain();
  explain.init();
});





