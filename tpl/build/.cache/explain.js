/*TMODJS:{"version":13,"md5":"6a1a073136663dae23cd60db994469a8"}*/
template('explain',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,investigateTitle=$data.investigateTitle,$string=$utils.$string,description=$data.description,$out='';$out+='<div class="vote-title"> <h2 id="investigate-title">';
$out+=$escape(investigateTitle);
$out+='</h2> </div> <div id="description" class="description"> <p>';
$out+=$string(description);
$out+='</p> </div> <div class="line"></div>';
return new String($out);
});