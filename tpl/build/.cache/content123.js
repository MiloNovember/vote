/*TMODJS:{"version":1,"md5":"b6af614e895e7342fc54b7bc28e2c519"}*/
template('content123',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$out='';$each(questionList,function(item,index){
$out+=' <div class="layui-form-item"> <label class="layui-form-label">';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='(单选)</label> <div class="layui-input-block"> ';
$each(item.questionPartList,function(option,index){
$out+=' <input type="radio" name="';
$out+=$escape(item.id);
$out+='" value="';
$out+=$escape(option.id);
$out+='" title="';
$out+=$escape(option.content);
$out+='"> ';
});
$out+=' </div> </div> ';
});
$out+=' ';
return new String($out);
});