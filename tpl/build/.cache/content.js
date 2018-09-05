/*TMODJS:{"version":1158,"md5":"65921cc6193af4a2d1c66dc7d55c2061"}*/
template('content',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$out='';$out+='<form class="layui-form" action=""> ';
$each(questionList,function(item,index){
$out+='  ';
if(item.type=='1'){
$out+=' <div class="layui-form-item ';
$out+=$escape(!!item.required?'selection-req':'');
$out+='"> <label class="layui-form-label"> <span class="required">';
$out+=$escape(!!item.required?'* ':'&nbsp;&nbsp;');
$out+='</span> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='（';
$out+=$escape(item.multiSelect=='0'?'单选':'多选');
$out+=$escape(!item.required?'，非必答':'');
$out+='） </label> <div class="layui-input-block"> ';
$each(item.questionPartList,function(option,index){
$out+=' <div class="';
$out+=$escape(!!option.url?'box':'ml-36');
$out+='"> ';
if(!!option.url){
$out+=' <img src="';
$out+=$escape(option.url);
$out+='" alt=""> ';
}
$out+=' ';
if(!!option.defaultSelect){
$out+=' <input type="';
$out+=$escape(item.multiSelect=='0'?'radio':'checkbox');
$out+='" name="';
$out+=$escape(item.id);
$out+='" questionId="';
$out+=$escape(item.id);
$out+='" questionPartId="';
$out+=$escape(option.id);
$out+='" isFitb="';
$out+=$escape(!!option.questionPart?1:0);
$out+='" title="';
$out+=$escape(option.content);
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'请说明（非必填）':'');
$out+='" lay-skin="primary" checked> ';
}else{
$out+=' <input type="';
$out+=$escape(item.multiSelect=='0'?'radio':'checkbox');
$out+='" name="';
$out+=$escape(item.id);
$out+='" questionId="';
$out+=$escape(item.id);
$out+='" questionPartId="';
$out+=$escape(option.id);
$out+='" isFitb="';
$out+=$escape(!!option.questionPart?1:0);
$out+='" title="';
$out+=$escape(option.content);
$out+=$escape(!!option.questionPart&&!!option.mustSelect?'请说明（非必填）':'');
$out+='" lay-skin="primary"> ';
}
$out+=' ';
if(!!option.questionPart){
$out+=' ';
if(!option.questionPart.lineNum){
$out+=' <div class="input-wrapper"> <input type="text" maxlength="';
$out+=$escape(option.questionPart.maximum);
$out+='" id="';
$out+=$escape(option.id);
$out+='" value="" required lay-verify="';
$out+=$escape(!!option.questionPart.mustSelect?'required':'');
$out+='|';
$out+=$escape(option.questionPart.verification==1?'telephone':option.questionPart.verification==2?'postCode':option.questionPart.verification==3?'identityCheck':option.questionPart.verification==4?'cn':option.questionPart.verification==5?'english':option.questionPart.verification==6?'num':option.questionPart.verification==7?'eMail':option.questionPart.verification==8?'Url':'');
$out+='" lay-verType="alert" placeholder="';
$out+=$escape(option.questionPart.content);
$out+='" autocomplete="off" class="layui-input ';
$out+=$escape(option.questionPart.maximum>20?'is-long':'');
$out+=' option-input ';
$out+=$escape(!!option.mustSelect?'ml-36':'');
$out+='"> </div> ';
}else{
$out+=' <textarea maxlength="';
$out+=$escape(option.questionPart.maximum);
$out+='" rows="2" id="';
$out+=$escape(option.id);
$out+='" required lay-verify="';
$out+=$escape(!!option.questionPart.mustSelect?'required':'');
$out+='|';
$out+=$escape(option.questionPart.verification==1?'telephone':option.questionPart.verification==2?'postCode':option.questionPart.verification==3?'identityCheck':option.questionPart.verification==4?'cn':option.questionPart.verification==5?'english':option.questionPart.verification==6?'num':option.questionPart.verification==7?'eMail':option.questionPart.verification==8?'Url':'');
$out+='" lay-verType="alert" placeholder="';
$out+=$escape(option.questionPart.content);
$out+='" class="layui-textarea ';
$out+=$escape(option.questionPart.maximum>20?'is-long':'');
$out+=' option-textarea ';
$out+=$escape(!!option.mustSelect?'ml-36':'');
$out+='"></textarea> ';
}
$out+=' ';
}
$out+=' </div> ';
});
$out+=' </div> </div> ';
}
$out+='  ';
if(item.type=='2'&&item.multiSelect=='0'){
$out+=' <div class="layui-form-item fill-in-the-blank"> <label class="layui-form-label"> <span class="required">';
$out+=$escape(!!item.required?'* ':'&nbsp;&nbsp;');
$out+='</span> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+=$escape(!item.required?'（非必答）':'');
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
$out+=$escape(!option.mustSelect?'（非必填）':'');
$out+='：</span> ';
if(!!option.lineNum){
$out+=' <textarea questionId="';
$out+=$escape(item.id);
$out+='" questionPartId="';
$out+=$escape(option.id);
$out+='" placeholder="" rows="3" class="layui-textarea" maxlength="';
$out+=$escape(option.maximum);
$out+='" required lay-verify="';
$out+=$escape(!!option.mustSelect?'required':'');
$out+='|';
$out+=$escape(option.verification==1?'telephone':option.verification==2?'postCode':option.verification==3?'identityCheck':option.verification==4?'cn':option.verification==5?'english':option.verification==6?'num':option.verification==7?'eMail':option.verification==8?'Url':'');
$out+='" lay-verType="alert"></textarea> ';
}else{
$out+=' <div class="input-wrapper"> <input type="text" name="';
$out+=$escape(option.id);
$out+='" questionId="';
$out+=$escape(item.id);
$out+='" questionPartId="';
$out+=$escape(option.id);
$out+='" maxlength="';
$out+=$escape(option.maximum);
$out+='" required lay-verify="';
$out+=$escape(!!option.mustSelect?'required':'');
$out+='|';
$out+=$escape(option.verification==1?'telephone':option.verification==2?'postCode':option.verification==3?'identityCheck':option.verification==4?'cn':option.verification==5?'english':option.verification==6?'num':option.verification==7?'eMail':option.verification==8?'Url':'');
$out+='" lay-verType="alert" placeholder="" autocomplete="off" class="layui-input"> </div> ';
}
$out+=' </div> ';
});
$out+=' </div> </div> ';
}
$out+=' ';
});
$out+=' <div class="layui-form-item"> <div class="layui-input-block"> <button class="button layui-btn" lay-submit lay-filter="*">提交</button> </div> </div> </form> ';
return new String($out);
});