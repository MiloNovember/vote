/*TMODJS:{"version":1011,"md5":"d0e1e39034c2a8dc92b6ca10de335968"}*/
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
$out+='(单选) </label> <div class="layui-input-block"> ';
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
$out+=' <div class="layui-form-item"> <label class="layui-form-label"> <span class="required">';
$out+=$escape(!!item.required?'* ':'&nbsp;&nbsp;');
$out+='</span> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='(多选) </label> <div class="layui-input-block"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="';
$out+=$escape(!!option.url?'box2':'');
$out+='"> ';
if(!!option.url){
$out+=' <img src="';
$out+=$escape(option.url);
$out+='" alt=""> ';
}
$out+=' <input type="checkbox" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+='" lay-skin="primary"> </div> ';
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
$out+=' </label> <div class="layui-input-block fill-blanks"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="fill-blanks-box"> ';
if(!!option.mustSelect){
$out+=' <span class="required">*</span> ';
}else{
$out+=' &nbsp; ';
}
$out+=' <span>';
$out+=$escape(option.content);
$out+='：</span><input type="text" name="title" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input"> </div> ';
});
$out+=' </div> </div> ';
}
$out+=' ';
});
$out+=' <div class="layui-form-item"> <div class="layui-input-block"> <button class="button layui-btn" lay-submit lay-filter="*">提交</button> </div> </div> </form> ';
return new String($out);
});