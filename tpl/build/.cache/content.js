/*TMODJS:{"version":1079,"md5":"df0d32261b11f600dc5d5a1314022bea"}*/
template('content',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$out='';$out+='<form class="layui-form" action=""> ';
$each(questionList,function(item,index){
$out+='  ';
if(item.type=='1'&&item.multiSelect=='0'){
$out+=' <div class="layui-form-item"> <label class="layui-form-label"> <span class="required">';
$out+=$escape(!!item.required?'* ':'&nbsp;&nbsp;');
$out+='</span> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='（单选';
$out+=$escape(!item.required?'，非必答':'');
$out+='） </label> <div class="layui-input-block"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="';
$out+=$escape(!!option.url?'box':'');
$out+='"> ';
if(!!option.url){
$out+=' <img src="';
$out+=$escape(option.url);
$out+='" alt=""> ';
}
$out+=' ';
if(!!option.defaultSelect){
$out+=' <input type="radio" req="';
$out+=$escape(item.required);
$out+='" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'请说明（非必填）':'');
$out+='" checked> ';
}else{
$out+=' <input type="radio" req="';
$out+=$escape(item.required);
$out+='" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'请说明（非必填）':'');
$out+='"> ';
}
$out+=' ';
if(!!option.questionPart){
$out+=' <input type="text" name="';
$out+=$escape(item.id);
$out+='" value="" placeholder="" autocomplete="off" class="layui-input inline-block option-input ';
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'ml-36':'');
$out+='"> ';
}
$out+=' </div> ';
});
$out+=' </div> </div> ';
}
$out+='  ';
if(item.type=='1'&&item.multiSelect=='1'){
$out+=' <div class="layui-form-item"> <label class="layui-form-label"> <span class="required">';
$out+=$escape(!!item.required?'* ':'&nbsp;&nbsp;');
$out+='</span> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='（多选';
$out+=$escape(!item.required?'，非必答':'');
$out+='） </label> <div class="layui-input-block"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="';
$out+=$escape(!!option.url?'box2':'');
$out+='"> ';
if(!!option.url){
$out+=' <img src="';
$out+=$escape(option.url);
$out+='" alt=""> ';
}
$out+=' ';
if(!!option.defaultSelect){
$out+=' <input type="checkbox" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'请说明（非必填）':'');
$out+='" lay-skin="primary" checked> ';
}else{
$out+=' <input type="checkbox" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'请说明（非必填）':'');
$out+='" lay-skin="primary"> ';
}
$out+=' ';
if(!!option.questionPart){
$out+=' <input type="text" name="';
$out+=$escape(item.id);
$out+='" value="" placeholder="" autocomplete="off" class="layui-input inline-block option-input ';
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'ml-36':'');
$out+='"> ';
}
$out+=' </div> ';
});
$out+=' </div> </div> ';
}
$out+='  ';
if(item.type=='2'&&item.multiSelect=='0'){
$out+=' <div class="layui-form-item"> <label class="layui-form-label"> <span class="required">';
$out+=$escape(!!item.required?'* ':'&nbsp;&nbsp;');
$out+='</span> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+=$escape(!item.required?'（非必答）':'');
$out+=' </label> ';
if(item.questionPartList.length==1){
$out+=' ';
$each(item.questionPartList,function(option,index){
$out+=' <textarea name="';
$out+=$escape(option.id);
$out+='" placeholder="" rows="3" class="layui-textarea" required lay-verify="';
$out+=$escape(!!option.mustSelect?'required':'');
$out+='" lay-verType="alert"></textarea> ';
});
$out+=' ';
}else{
$out+=' <div class="layui-input-block fill-blanks"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="fill-blanks-box"> ';
if(!!option.mustSelect){
$out+=' <span class="required">*</span> ';
}else{
$out+=' &nbsp; ';
}
$out+=' <span>';
$out+=$escape(option.content);
$out+=$escape(!option.mustSelect?'（非必填）':'');
$out+='：</span><input type="text" name="';
$out+=$escape(option.id);
$out+='" required lay-verify="';
$out+=$escape(!!option.mustSelect?'required':'');
$out+='" lay-verType="alert" placeholder="" autocomplete="off" class="layui-input"> </div> ';
});
$out+=' </div> ';
}
$out+=' </div> ';
}
$out+=' ';
});
$out+=' <div class="layui-form-item"> <div class="layui-input-block"> <button class="button layui-btn" lay-submit lay-filter="*">提交</button> </div> </div> </form> ';
return new String($out);
});