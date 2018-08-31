var voteId=getQueryVariable('getQueryVariable')?getQueryVariable('getQueryVariable'):1;

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
      _this.checkbox();
      _this.getCss();
      _this.clickSubmit();
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
            questionnaireId: 86//voteId
        }
      })
      .then(function(response) {
          console.log('response:',response.data);
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
    console.log(investigateTitle);
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
    // var ids=[];
    // $('.votesItem[id]','.content').each(function(key,item){
    //   return ids.push(item.id);
    // })
    // for(var i=0; i<ids.length; i++){
    //   this.singleElection(ids[i]);
    // }

    setTimeout(function () {
        form.render(); //更新全部layUI
    },30)
  },
  singleElection: function(id) {
    var items = document.getElementById(id);
    var aLi = items.getElementsByTagName("i");
    for (var i = 0; i < aLi.length; i++) {
      aLi[i].onclick = function() {
        for (var j = 0; j < aLi.length; j++) {
          aLi[j].classList.remove("icon-yuan");
          aLi[j].children[0].classList.remove("sele");
          if(!!this.nextElementSibling.nextElementSibling){
            this.nextElementSibling.nextElementSibling.classList.remove('sele')
            }
        }
        this.classList.add("icon-yuan");
        this.children[0].classList.add('sele');
        if(!!this.nextElementSibling.nextElementSibling){
            this.nextElementSibling.nextElementSibling.classList.add('sele')
        }
      };
    }
    
  },
  checkbox: function() {
    $(".checkbox_li .fuck .sb").click(function() {
    $(this).next().toggleClass('sele');
    $(this).prev().children().toggleClass('sele');
      $(".checkbox_li")
        .eq($(".checkbox_li .fuck .sb").index(this))
        .toggleClass("on");
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
      this.cssScr.href="./src/red.css";
    }
  },
  clickSubmit:function(){
      /*var _this=this;
      var dataArr=[];
      $('#btn').click(function(){
        var validate = true;
        $('.required1').each(function(key, item){
            validate = validate && ($(item).find('.sele').length>0);
          });//保证必答题都答了
            var mustwrit=$('.required1 .items .required').length==$('.required1 .items .ww').length;//
            console.log(validate, mustwrit);
            
            if(validate&&mustwrit){
                $('.sele').each(function(key,item){
                    //console.log(item);
                    dataArr.push({
                        "questionnaireId":voteId,
                        "questionPartId": $(item).attr('data-questionPartId'),
                        "questionId": $(item).attr('data-questionId'),
                        "answerContent": $(item).val()
                    })
                });
                console.log(dataArr);
                // $.ajax({
                //     type:'POST',
                //     contentType:'application/json',
                //     url:getData_url+'/vote/api/submitQuestionnaire',
                //     data:JSON.stringify(dataArr),
                //     error: function(err) {
                //         console.log(err);
                //     }
                // }).done(function(response){
                //     console.log(response);
                //     window.location.href='./end.html?title='+_this.voteTitle+'&id='+voteId;
                // })
            }else{
                layer.open({
                    title: '提示'
                    ,content: '请您按要求完成问卷'
                });
                console.log(dataArr);
            }

            //   console.log(dataArr);
      })*/
  }

};

$(function() {
  var explain = new Explain();
  explain.init();
});





//填空验证
function yanzheng(verification,mustSelect, target){
  if(mustSelect=="1"){
      if(verification=='1'){
      var reg=/^1(3|4|5|7|8)\d{9}$/;
      var reg2=/0\d{2,3}-\d{7,8}/;
      if(!reg.test(target.value)&&!reg2.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='2'){
      var reg=/^[1-9][0-9]{6}$/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='3'){
      var reg=/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='4'){
      var reg=/^[\u2E80-\u9FFF]+$/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='5'){
      var reg=/[a-zA-Z]/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='6'){
      var reg=/^[0-9]+$/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='7'){
      var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else if(verification=='8'){
      var reg=/^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
      if(!reg.test(target.value)){
          target.style.border="1px solid red";
          target.style.outline='none';
          target.previousElementSibling.previousElementSibling.classList.remove('ww');
      }else{
          target.style.border="";
          target.style.outline='';
          target.previousElementSibling.previousElementSibling.classList.add('ww');
      }
  }else{
      return false;
  }
}

}

