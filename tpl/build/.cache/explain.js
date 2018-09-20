/*TMODJS:{"version":18,"md5":"5ff8207422f6edeab9c10423858b90d4"}*/
template('explain',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,investigateTitle=$data.investigateTitle,$string=$utils.$string,description=$data.description,$out='';$out+='<div class="vote-title"> <h2 id="investigate-title" class="ellipsis" title="';
$out+=$escape(investigateTitle);
$out+='">';
$out+=$escape(investigateTitle);
$out+='</h2> </div> <div id="description" class="description"> <p>';
$out+=$string(description);
$out+='</p> </div> <div class="line"></div>';
return new String($out);
});