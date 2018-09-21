var logins = 'http://10.3.38.235';
var INDEX_SITESEARCH_PREFIX = 'http://10.3.38.235';//首页站内检索
var tokens = sessionStorage.getItem("token") || "";
var userId = null
var userName = null
//头部用户名显示 username
//遮罩层 mask
//登录最外层大盒子 sign-in
//登录按钮 sign-btn
//密码input password
//用户名input sign-name
//错误提示 login-err
//'请联系管理员'  remind
//忘记密码 forget
//个人中心下拉菜单 ps-nav
//退出登录按钮 sign-out

//初始化
$('#username').html("Hi，你好");
$.support.cors = true;
(function () {
    $.ajax({
        type: "get",
        // dataType:'text',
        // crossDomain:true,
        url: logins + "/api/front/auth/getUserInfo",
        contentType: "application/json",
        headers: {
            Authorization: tokens,
            "X-Requested-With": "XMLHttpRequest"
        },
        error: function (err) {
            console.log('err:',JSON.stringify(err))
        }
    }).done(function (response) {
        // alert(JSON.stringify(response));
        // console.log('response:',response);
        if (response.code == 0) {
            //alert('qq');
            var res = response.data;
            userId = res.iuser.id
            userName = res.iuser.name
            $('#username').html(res.iuser.name)
                .unbind('click')
                .mouseover(showPersonNav)
                .mouseout(hiddenPersonNav)
            $('#ps-nav').mouseover(showPersonNav).mouseout(hiddenPersonNav)
        }

    });
})();

//弹出层
(function () {
    $('#username').click(function (e) {
        $('#mask').css('display', 'block')
        $('#sign-in').css('display', 'block')
    }).one("click",function(){
        loginInit()
        maskInit()
        return false;
    });
})();

function maskInit() {
    $('#mask').click(function () {
        $('#mask').css('display', 'none')
        $('#sign-in').css('display', 'none')
    })
}

//登录
function loginInit () {
    $('#sign-btn').click(function () {
        var data = {
            password: $('#password').val(),
            sysCode: "cms",
            username: $('#sign-name').val()
        };
        $.ajax({
            type: "post",
            url: logins + "/api/front/auth/login",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            error: function (err) {
                console.log(err);
                // var err = err.responseJSON.message;
                //alert(JSON.stringify(err));
                $('#login-err').html('账号或密码不正确').css('display', 'block')
            }
        }).done(function (response) {
            // alert(JSON.stringify(response));
            var res = response.data;
            userId = res.id
            userName = res.name
            $('#mask').css('display', 'none')
            $('#sign-in').css('display', 'none')
            $('#username').html(res.name)
                .unbind('click')
                .mouseover(showPersonNav)
                .mouseout(hiddenPersonNav)
            $('#ps-nav').mouseover(showPersonNav).mouseout(hiddenPersonNav)
            sessionStorage.setItem("token", res.token);
            //window.location.reload();
        });
    })


    //忘记密码
    $('#forget').click(function () {
        $('#remind').css('display', 'block')
        setTimeout(function () {
            $('#remind').css('display', 'none')
        }, 3000);
    })
};

// //文字滚动
// jQuery(".txtMarquee-left").slide({
//   mainCell: ".grzx-bd ul",
//   autoPlay: true,
//   effect: "leftMarquee",
//   vis: 0,
//   interTime: 50
// });

//导航是否隐藏
function show() {
    $('#channel-list').css('display', 'block')
}

function hide() {
    $('#channel-list').css('display', 'none')
}

function showPersonNav() {
    $('#ps-nav').css('display', 'block')
};

function hiddenPersonNav() {
    $('#ps-nav').css('display', 'none')
};


//退出登录
;(function () {
    $('#sign-out').click(function () {
        $.ajax({
            type: 'get',
            url: logins + '/api/front/auth/logout',
            contentType: 'application/json',
            headers: {
                Authorization: tokens,
                'X-Requested-With': 'XMLHttpRequest'
            },
            error: function (err) {
                console.log("logout err:",err);
            }
        }).done(function (respones) {
            var res = respones.data;
            $('#username').html('Hi，你好')
            sessionStorage.removeItem("token");
            window.location.reload();
        });
    });

    $('#person').click(function () {
        jumpPerson()
    })
})();


//去往个人中心
function jumpPerson() {
    $.ajax({
        url: logins + '/api/front/auth/getUserCenterId',
        type: 'GET',
        dataType: 'json'
    }).done(function (res) {
        if (!!res && res.code == 0) {
            window.location.href = INDEX_SITESEARCH_PREFIX + '/sites/category/' + res.data.id + '/index.html';
        }
    })

};