/*TMODJS:{"version":96,"md5":"33cc5ba67ab3e5b76f7d227b901d99e6"}*/
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
$out+=$escape(option.persentage+'%');
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