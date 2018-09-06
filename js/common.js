var nav_url = 'http://10.3.38.235/';
var getNav_url = 'http://10.3.38.235:8081';
var getData_url = 'http://10.3.39.153:8085';

function show() {
    document.getElementById("channel-list").style.display = "block";
}

function hide() {
    document.getElementById("channel-list").style.display = "none";
}

// 兼容ie8 bind的问题
(function () {
    if(!Function.prototype.bind){
        Function.prototype.bind = function(){
            if(typeof this !== 'function'){
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }
            var _this = this;
            var obj = arguments[0];
            var ags = Array.prototype.slice.call(arguments,1);
            return function(){
                _this.apply(obj,ags);
            };
        };
    }
})();

(function () {
    $.support.cors = true
    return $
        .ajax({
            type: "GET",
            dataType: "json",
            url: getNav_url + "/api/front/category/getCategoryList",
            error: function(err) {
                // console.log(err);
            }
        })
        .then(function (response) {
            // console.log(response);
            if (!!response && !!response.data) {
                var res = response.data;
                for (var i = 0; i < res.length; i++) {
                    $("#navItem").append('<li><a target="__blank" href="'+nav_url+res[i].url+'">'+res[i].title+'</a></li>')
                }
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