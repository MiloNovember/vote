var nav_url = 'http://10.3.38.235/';
var getNav_url = 'http://10.3.38.235:8081';
var getData_url = 'http://10.3.39.153:8085';


function show() {
    document.getElementById("channel-list").style.display = "block";
};

function hide() {
    document.getElementById("channel-list").style.display = "none";
};


(function () {
    var _this = this;
    return $
        .ajax({
            type: "GET",
            dataType: "json",
            url: getNav_url + "/api/front/category/getCategoryList"
        })
        .then(function (response) {
            // console.log(response);
            if (!!response && !!response.data) {
                var res = response.data;
                var str='';
                for (var i = 0; i < res.length; i++) {
                    str += '<li><a target="__blank" href="'+nav_url+res[i].url+'">'+res[i].title+'</a></li>'
                }

                $('#navItem').html(str);
            }
        });
})();




//取查询字符串
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    //console.log(vars);
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

//兼容addEventListener函数
function myAddEventListener(ele,event,fn){
    if(ele.addEventListener){
        ele.addEventListener(event,fn,false);
    }else{
        ele.attachEvent('on'+event,fn.bind(ele));
    }
}

//兼容removeEventListener函数
function myRemoveEventListener(ele,event,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(event,fn,false);
    }else{
        ele.detachEvent('on'+event,fn.bind(ele));
    }
}