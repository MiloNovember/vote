/*TMODJS:{"version":92,"md5":"b04a86bd9119dcfa8f20ce988e256f06"}*/
template('result',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$index=$data.$index,$out='';$each(questionList,function(item,index){
$out+=' <div class="result-item"> <span class="required">';
$out+=$escape(!!item.required?'*':'&nbsp;&nbsp;');
$out+='</span> <label> ';
$out+=$escape(index+1);
$out+='、';
$out+=$escape(item.title);
$out+='（';
$out+=$escape(!!item.multiSelect?'多选':'单选');
$out+='） </label> <ul> ';
$each(item.questionPartList,function(option,$index){
$out+=' <li> <span class="result-title">';
$out+=$escape(option.content);
$out+='</span> <div class="layui-progress progress-ie9"> <div class="layui-progress-bar" lay-percent="';
$out+=$escape(option.persentage);
$out+='"></div> </div> <span class="progress-num">';
$out+=$escape(option.persentage);
$out+='%</span> <span class="sum">小计：';
$out+=$escape(option.count);
$out+='</span> </li> ';
});
$out+=' </ul> </div> ';
});
return new String($out);
});