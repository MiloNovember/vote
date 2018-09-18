/*TMODJS:{"version":15,"md5":"d462cdc13bad69a98f432c2d3b23c013"}*/
template('explain',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,investigateTitle=$data.investigateTitle,$string=$utils.$string,description=$data.description,$out='';$out+='<div class="vote-title"> <h2 id="investigate-title" class="ellipsis">';
$out+=$escape(investigateTitle);
$out+='</h2> </div> <div id="description" class="description"> <p>';
$out+=$string(description);
$out+='</p> </div> <div class="line"></div>';
return new String($out);
});