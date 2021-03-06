// layUI模块化引入
layui.use(['layer', 'form'], function () {
    var layer = layui.layer
    var form = layui.form


    //自定义验证规则
    form.verify({
        cn: function (value) {
            var reg = /^[\u2E80-\u9FFF]+$/
            if (value !== '' && !reg.test(value)) {
                return '请输入汉字';
            }
        }
        , telephone: function (value) {
            var reg = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/
            if (value !== '' && !reg.test(value)) {
                return '请输入正确的手机号码';
            }
        }
        , postCode: function (value) {
            var reg = /^[1-9][0-9]{6}$/
            if (value !== '' && !reg.test(value)) {
                return '请输入正确邮编';
            }
        }
        , english: function (value) {
            var reg = /[a-zA-Z]/
            if (value !== '' && !reg.test(value)) {
                return '请输入英文字母';
            }
        }
        , identityCheck: function (value) {
            var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
            if (value !== '' && !reg.test(value)) {
                return '请输入正确的身份证';
            }
        }
        , num: function (value) {
            var reg = /^[0-9]+$/;
            if (value !== '' && !reg.test(value)) {
                return '请输入数字';
            }
        }
        , eMail: function (value) {
            var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if (value !== '' && !reg.test(value)) {
                return '请输入正确的邮箱格式';
            }
        }
        , Url: function (value) {
            var reg = /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
            if (value !== '' && !reg.test(value)) {
                return '请输入正确的网址格式';
            }
        }
    });

    /*点击提交后的回调*/
    form.on('submit(*)', function (data) {
        /*选择题*/
        var questions = $('.layui-form-item.selection-req')
        var isFirst = true
        // 遍历所有选择题
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var inputs = $(question).find(":input")
            var flag = true
            for (var j = 0; j < inputs.length; j++) {
                var input = inputs[j];
                // 如果发现有选中的则flag为false表示不用打印和操作此dom
                if ($(input).is(':checked')) {
                    flag = false
                }
            }
            if (flag) {
                // 打印与操作未选中的dom
                // console.log(question);
                // 修改label的颜色
                $(question).find('label').css({color: "red"})
                // 跳转第一个未选中题目
                if (isFirst) {
                    isFirst = false
                    var t = $(question).offset().top;//  获取需要跳转到标签的top值
                    $(window).scrollTop(t);// 跳转到指定位置
                }
                // 监听当点击dom时，还原label颜色
                myAddEventListener(question, 'click', function (ev) {
                    $(this).find('label').css({color: "#222"})
                    myRemoveEventListener(this, 'click', function () {
                    })
                })
            }
        }

        if (!isFirst) {
            layer.open({
                skin: '提示',
                content: '请您按要求完成问卷'
            });
        } else {
            // 校验是否匿名
            var tokens = sessionStorage.getItem("token") || "";
            // console.log('tokens',tokens);
            /*非匿名投票校验是否登录*/
            if (!explain.res.anonymity && !tokens) {
                $('#username').click()
                $(window).scrollTop(0);
                return false;
            }

            // 获取用户填写数据
            var dataArr = []
            var selection = $('.layui-form input:checked')
            var FillInTheBlanks = $('.layui-form input[type=text]')
            var textAreas = $('textarea')
            /*选择题获取页面数据*/
            $(selection).each(function (key, item) {
                // var answerContent = ''
                // if ($(item).attr('isFitb') === '1') {
                //     var id = $(item).attr('questionPartId')
                //     answerContent = $('#' + id).val()
                // }
                dataArr.push({
                    "questionnaireId": voteId,
                    "questionPartId": $(item).attr('questionPartId'),
                    "questionId": $(item).attr('questionId'),
                    "answerContent": '',
                    "userId": userId,
                    "userName": userName
                })
            });
            /*填空题获取页面数据*/
            $(FillInTheBlanks).each(function (key, item) {
                if ($(item).val() !== '') {
                    dataArr.push({
                        "questionnaireId": voteId,
                        "questionPartId": $(item).attr('questionPartId'),
                        "questionId": $(item).attr('questionId'),
                        "answerContent": $(item).val(),
                        "userId": userId,
                        "userName": userName
                    })
                }
            });
            $(textAreas).each(function (key, item) {
                if ($(item).val() !== '') {
                    dataArr.push({
                        "questionnaireId": voteId,
                        "questionPartId": $(item).attr('questionPartId'),
                        "questionId": $(item).attr('questionId'),
                        "answerContent": $(item).val(),
                        "userId": userId,
                        "userName": userName
                    })
                }
            });
            //console.log(dataArr);
            // 限制至少回答一个问题
            if (dataArr.length < 1) {
                layer.open({
                    skin: '提示',
                    content: '请至少填写一个问题'
                });
            }else {
                $.support.cors = true
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: getData_url + '/vote/api/submitQuestionnaire',
                    data: JSON.stringify(dataArr),
                    error: function (err) {
                        // console.log(err);
                    }
                }).done(function (response) {
                    // console.log(response);
                    if (response.code == 0) {
                        var title = document.title
                        var colour = explain.res.colour
                        var notAnswer = $.cookie(voteId);
                        if (notAnswer == 1) {
                            $.cookie(voteId, '2');
                        }
                        window.location.href = './end.html?title=' + title + '&id=' + voteId + '&colour=' + colour;
                    }
                })
            }
        }

        return false;
    });
});
