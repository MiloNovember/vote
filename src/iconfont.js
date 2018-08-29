(function(window){var svgSprite='<svg><symbol id="icon-fangxingtingzhi" viewBox="0 0 1024 1024"><path d="M373.4303 356.6428c0-3.9311 1.4991-7.8623 4.4995-10.8605 2.9993-2.9993 6.9304-4.4995 10.8605-4.4995h277.504c3.9311 0 7.8623 1.4991 10.8605 4.4995 2.9993 2.9993 4.4995 6.9304 4.4995 10.8605v277.504c0 3.9311-1.5002 7.8623-4.4995 10.8605s-6.9304 4.4995-10.8605 4.4995h-277.504c-3.9311 0-7.8623-1.5002-10.8605-4.4995-2.9993-2.9993-4.4995-6.9304-4.4995-10.8605V356.642816z"  ></path><path d="M975.5423 89.4095c0-23.2038-18.8109-42.0147-42.0147-42.0147H121.556992c-23.2038 0-42.0147 18.8109-42.0147 42.0147v811.971584c0 23.2028 18.8109 42.0137 42.0147 42.0137h811.969536c23.2018 0 42.0127-18.8109 42.0127-42.0137L975.5423 89.4095 975.5423 89.4095zM891.5743 845.4226c0 7.7353-6.27 14.0052-14.0052 14.0052H177.51551999999998c-7.7353 0-14.0052-6.27-14.0052-14.0052V145.368064c0-7.7353 6.27-14.0052 14.0052-14.0052h700.053504c7.7353 0 14.0052 6.27 14.0052 14.0052V845.422592z"  ></path></symbol><symbol id="icon-circle-outline" viewBox="0 0 1024 1024"><path d="M512 111.702058c-221.079164 0-400.297942 179.219801-400.297942 400.297942s179.218778 400.297942 400.297942 400.297942c221.078141 0 400.297942-179.219801 400.297942-400.297942S733.078141 111.702058 512 111.702058zM512 866.048595c-195.535395 0-354.048595-158.5132-354.048595-354.048595 0-195.535395 158.5132-354.048595 354.048595-354.048595 195.535395 0 354.048595 158.5132 354.048595 354.048595C866.048595 707.535395 707.535395 866.048595 512 866.048595z"  ></path></symbol><symbol id="icon-choiceO" viewBox="0 0 1024 1024"><path d="M511.889995 128.745223c-201.839984 0-365.489158 163.614381-365.489158 365.490182 0 201.839984 163.649174 365.490182 365.489158 365.490182 201.876824 0 365.490182-163.650197 365.490182-365.490182C877.380176 292.358581 713.767841 128.745223 511.889995 128.745223zM511.889995 658.704247c-90.836845 0-164.469865-73.633021-164.469865-164.469865s73.633021-164.470889 164.469865-164.470889c90.838891 0 164.470889 73.634044 164.470889 164.470889S602.728886 658.704247 511.889995 658.704247z"  ></path></symbol><symbol id="icon-yuan" viewBox="0 0 1024 1024"><path d="M508.8 32c-265.6 0-480 214.4-480 480s214.4 480 480 480 480-214.4 480-480-216-480-480-480z m0 667.2c-104 0-187.2-83.2-187.2-187.2s83.2-187.2 187.2-187.2S694.4 409.6 694.4 512s-83.2 187.2-185.6 187.2z" fill="#5D5D5D" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)