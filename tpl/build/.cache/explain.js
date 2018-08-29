/*TMODJS:{"version":14,"md5":"7f32405d3a36d2d0841741146937fea2"}*/
template('explain',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,investigateTitle=$data.investigateTitle,$string=$utils.$string,description=$data.description,$out='';$out+='<div class="vote-title"> <h2 id="investigate-title">';
$out+=$escape(investigateTitle);
$out+='</h2> </div> <div id="description" class="description"> <p>';
$out+=$string(description);
$out+='</p> </div> <div class="line"></div>';
return new String($out);
});