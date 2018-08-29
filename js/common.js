var nav_url = 'http://10.3.38.235/';
var getNav_url = 'http://10.3.38.235:8081';
var getData_url = 'http://10.3.39.153:8081';


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
            if (!!response && !!response.data) {
                var res = response.data;
                var str='';
                for (var i = 0; i < res.length; i++) {
                    str += `<li><a target="__blank" href="${nav_url+res[i].url}">${res[i].title}</a></li>`
                }
                console.log()
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