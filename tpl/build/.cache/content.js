/*TMODJS:{"version":979,"md5":"898ae4f0d1c60f95d9ea3754b7defa32"}*/
template('content',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$out='';$out+='<form class="layui-form" action=""> ';
$each(questionList,function(item,index){
$out+='  ';
if(item.type=='1'&&item.multiSelect=='0'){
$out+=' <div class="layui-form-item"> <label class="layui-form-label">';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='(单选)</label> <div class="layui-input-block"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="';
$out+=$escape(!!option.url?'box':'');
$out+='"> ';
if(!!option.url){
$out+=' <img src="';
$out+=$escape(option.url);
$out+='" alt=""> ';
}
$out+=' <input type="radio" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+='"> </div> ';
});
$out+=' </div> </div> ';
}
$out+='  ';
if(item.type=='1'&&item.multiSelect=='1'){
$out+=' ';
}
$out+='  ';
if(item.type=='2'&&item.multiSelect=='0'){
$out+=' ';
}
$out+=' ';
});
$out+=' <div class="layui-form-item"> <div class="layui-input-block"> <button class="button layui-btn" lay-submit lay-filter="*">提交</button> </div> </div> </form> ';
return new String($out);
});