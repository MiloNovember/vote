/*TMODJS:{"version":53,"md5":"5a6138a0deecdcac2b48216128d30dd6"}*/
template('result',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,questionList=$data.questionList,item=$data.item,index=$data.index,$escape=$utils.$escape,option=$data.option,$index=$data.$index,$out='';$out+=' ';
$each(questionList,function(item,index){
$out+=' <div class="result-item"> <div class="item-title">  <h3>';
$out+=$escape(index+1);
$out+='.';
$out+=$escape(item.title);
$out+='（单选）</h3> </div> <ul> ';
$each(item.questionPartList,function(option,$index){
$out+=' <li> <p>';
$out+=$escape(option.content);
$out+='</p> <div class="bar-box"> <div class="box-left"> <div class="layui-progress layui-progress-big" lay-showPercent="yes"> <div class="layui-progress-bar" lay-percent="';
$out+=$escape(option.count);
$out+='%"></div> </div> </div> <div class="box-right">小计： <span>';
$out+=$escape(option.count);
$out+='%</span> </div> <div class="clear"></div> </div> <div class="clear"></div> </li> ';
});
$out+=' </ul> </div> ';
});
return new String($out);
});