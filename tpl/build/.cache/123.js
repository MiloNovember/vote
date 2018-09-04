/*TMODJS:{"version":1,"md5":"146928fffda15d2219139386919c6815"}*/
template('123',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$out='';$out+='<div class="layui-form"> ';
$each(questionList,function(item,index){
$out+=' <div class="layui-form-item">  ';
if(item.type=='1'&&item.multiSelect=='0'){
$out+=' <div class="votesItem ';
$out+=$escape('required'+item.required);
$out+='" id="';
$out+=$escape('items'+index);
$out+='"> <div class="survey-title"> ';
if(!!item.required){
$out+=' <span class="required">*</span> ';
}
$out+=' <h3>';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='(单选)</h3> <!--style="';
$out+=$escape((item.required)?'color:red;':'');
$out+='"--> </div> <ul id="items" class="items"> ';
$each(item.questionPartList,function(option,index){
$out+='  ';
if(!option.url){
$out+='  ';
if(!option.questionPart){
$out+=' <li class="radio_li"> <i class="icon iconfont icon-circle-outline ';
$out+=$escape(option.defaultSelect?'icon-yuan':'');
$out+='"> <input class="radio ';
$out+=$escape(option.defaultSelect?'sele':'');
$out+='" type="radio" name="one" value="1" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> <label>';
$out+=$escape(option.content);
$out+='</label> </li> ';
}else{
$out+='  <li class="radio_li"> ';
if(!option.defaultSelect){
$out+=' <i class="icon iconfont icon-circle-outline"> <input class="radio" type="radio" name="" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> ';
}else{
$out+=' <i class="icon iconfont icon-circle-outline icon-yuan"> <input class="radio sele" type="radio" name="" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> ';
}
$out+=' ';
if(!!option.mustSelect){
$out+='<span style="opacity:0" class="required">*</span>';
}
$out+='<label>';
$out+=$escape(option.content);
$out+=$escape(option.questionPart.content);
$out+='：</label><input onblur="yanzheng(';
$out+=$escape(option.questionPart.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)" class="only sele" type="text" value="" data-questionPartId=';
$out+=$escape(option.questionPart.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </li> ';
}
$out+=' ';
}
$out+='  ';
if(!!option.url){
$out+='  ';
if(!option.questionPart){
$out+=' <li class="radio_li radio_photo"> <img src="';
$out+=$escape(option.url);
$out+='"> <div class="img_warp"> ';
if(!option.defaultSelect){
$out+=' <i class="icon iconfont icon-circle-outline"> <input class="radio" type="radio" name="" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> ';
}else{
$out+=' <i class="icon iconfont icon-circle-outline icon-yuan"> <input class="radio sele" type="radio" name="" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> ';
}
$out+=' <label>';
$out+=$escape(option.content);
$out+='</label> </div> </li> ';
}else{
$out+='  <li class="radio_li radio_photo"> <img src="';
$out+=$escape(option.url);
$out+='"> <div class="img_warp"> ';
if(!option.defaultSelect){
$out+=' <i class="icon iconfont icon-circle-outline"> <input class="radio" type="radio" name="" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> ';
}else{
$out+=' <i class="icon iconfont icon-circle-outline icon-yuan"> <input class="radio sele" type="radio" name="" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </i> ';
}
$out+=' ';
if(!!option.mustSelect){
$out+='<span style="opacity:0" class="required">*</span>';
}
$out+='<label>';
$out+=$escape(option.content);
$out+=$escape(option.questionPart.content);
$out+='：</label><input onblur="yanzheng(';
$out+=$escape(option.questionPart.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)" class="only sele" type="text" value="" data-questionPartId=';
$out+=$escape(option.questionPart.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </div> </li> ';
}
$out+=' ';
}
$out+=' ';
});
$out+=' </ul> </div> ';
}
$out+='  ';
if(item.type=='1'&&item.multiSelect=='1'){
$out+=' <div class="votesItem ';
$out+=$escape('required'+item.required);
$out+='"> <div class="survey-title"> ';
if(!!item.required){
$out+=' <span class="required">*</span> ';
}
$out+=' <h3 data-questionId=';
$out+=$escape(item.id);
$out+='>';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='(多选)</h3> </div> <ul class="items"> ';
$each(item.questionPartList,function(option,index){
$out+='  ';
if(!!option.url){
$out+='  ';
if(!option.questionPart){
$out+=' ';
if(!option.defaultSelect){
$out+=' <li class="checkbox_li fl"> <img src="';
$out+=$escape(option.url);
$out+='"> <div class="fuck"> <span class="checkbox_warp"> <input type="checkbox" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> <label class="sb">川菜</label> </div> </li> ';
}else{
$out+=' <li class="checkbox_li fl on"> <img src="';
$out+=$escape(option.url);
$out+='"> <div class="fuck"> <span class="checkbox_warp"> <input class=\'sele\' type="checkbox" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> <label class="sb">川菜</label> </div> </li> ';
}
$out+=' ';
}else{
$out+='  ';
if(!option.defaultSelect){
$out+=' <li class="checkbox_li fl"> <img src="';
$out+=$escape(option.url);
$out+='"> <div class="fuck"> <span class="checkbox_warp"> <input type="checkbox" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> ';
if(!!option.mustSelect){
$out+='<span style="opacity:0" class="required">*</span>';
}
$out+='<label class="sb">其他 请说明(非必填)：</label> <input onblur="yanzheng(';
$out+=$escape(option.questionPart.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)" type="text" class="only sele" value="" data-questionPartId=';
$out+=$escape(option.questionPart.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+='/> </div> </li> ';
}else{
$out+=' <li class="checkbox_li on fl"> <img src="';
$out+=$escape(option.url);
$out+='"> <div class="fuck"> <span class="checkbox_warp"> <input type="checkbox" class="sele" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> ';
if(!!option.mustSelect){
$out+='<span style="opacity:0" class="required">*</span>';
}
$out+='<label class="sb">其他 请说明：</label> <input onblur="yanzheng(';
$out+=$escape(option.questionPart.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)" type="text" class="only sele" value="" data-questionPartId=';
$out+=$escape(option.questionPart.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </div> </li> ';
}
$out+=' ';
}
$out+=' ';
}
$out+='  ';
if(!option.url){
$out+='  ';
if(!option.questionPart){
$out+=' ';
if(!option.defaultSelect){
$out+=' <li class="checkbox_li"> <span class="checkbox_warp"> <input type="checkbox" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> <label>川菜</label> </li> ';
}else{
$out+=' <li class="checkbox_li on"> <span class="checkbox_warp"> <input type="checkbox" class=\'sele\' name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> <label>川菜</label> </li> ';
}
$out+=' ';
}else{
$out+='  ';
if(!option.defaultSelect){
$out+=' <li class="checkbox_li"> <span class="checkbox_warp"> <input type="checkbox" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> ';
if(!!option.mustSelect){
$out+='<span style="opacity:0" class="required">*</span>';
}
$out+='<label>';
$out+=$escape(option.content);
$out+=$escape(option.questionPart.content);
$out+='：</label> <input onblur="yanzheng(';
$out+=$escape(option.questionPart.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)" class="only sele" type="text" value="" data-questionPartId=';
$out+=$escape(option.questionPart.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' />  </li> ';
}else{
$out+=' <li class="checkbox_li on"> <span class="checkbox_warp"> <input type="checkbox" class="sele" name="double" value="" data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' /> </span> ';
if(!!option.mustSelect){
$out+='<span style="opacity:0" class="required">*</span>';
}
$out+='<label>';
$out+=$escape(option.content);
$out+=$escape(option.questionPart.content);
$out+='：</label> <input onblur="yanzheng(';
$out+=$escape(option.questionPart.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)" class="only sele" type="text" value="" data-questionPartId=';
$out+=$escape(option.questionPart.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' />  </li> ';
}
$out+=' ';
}
$out+=' ';
}
$out+=' ';
});
$out+=' </ul> </div> ';
}
$out+='  ';
if(item.type=='2'&&item.multiSelect=='0'){
$out+=' <div class="votesItem ';
$out+=$escape('required'+item.required);
$out+='"> <div class="survey-title"> ';
if(!!item.required){
$out+=' <span class="required">*</span> ';
}
$out+=' <h3>';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='</h3> </div> ';
if(item.questionPartList.length=='1'){
$out+=' ';
$each(item.questionPartList,function(option,index){
$out+=' <textarea data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' rows="3" value="" class="sele"></textarea> ';
});
$out+=' ';
}else{
$out+=' <ul class="items blank"> ';
$each(item.questionPartList,function(option,index){
$out+=' <li> ';
if(!!option.mustSelect){
$out+=' <span class="required">*</span> ';
}
$out+=' <label>';
$out+=$escape(option.content);
$out+=': </label> ';
if(option.maximum>20){
$out+=' <input data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' onblur=\'yanzheng(';
$out+=$escape(option.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)\' class="radio sele" type="text" value="" /> ';
}else{
$out+=' <input data-questionPartId=';
$out+=$escape(option.id);
$out+=' data-questionId=';
$out+=$escape(item.id);
$out+=' class="only radio sele" onblur=\'yanzheng(';
$out+=$escape(option.verification);
$out+=',';
$out+=$escape(option.mustSelect);
$out+=', this)\' type="text" value="" /> ';
}
$out+=' </li> ';
});
$out+=' </ul> ';
}
$out+=' </div> ';
}
$out+=' </div> ';
});
$out+=' </div> ';
return new String($out);
});