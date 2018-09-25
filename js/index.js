var voteId = getQueryVariable('getQueryVariable') ? getQueryVariable('getQueryVariable') : '';
var explain = null
function Explain() {
}

Explain.prototype = {
    res: {},
    voteTitle: '',
    cssScr: document.getElementById('css-src'),
    init: function () {
        var _this = this;
        this.getData().then(function () {
            _this.renderExplain();
            _this.renderQuestion();
            _this.getCss();
        });
    },
    getData: function () {
        var _this = this;
        return $
            .ajax({
                type: "GET",
                jsonp: "callback",
                dataType: "jsonp",
                url: getData_url + "/vote/api/getQuesInfoByQuesId",
                data: {
                    questionnaireId: voteId
                }
            })
            .then(function (response) {
                var result = response.data.quesInfoByQuesId
                // console.log('获取空白问卷的response:',response.data);
                _this.voteTitle = result.title;

                //保存是否允许查看结果
                $.cookie('isCheckAnswer', result.checkAnswer)

                var notAnswer = $.cookie(voteId);
                if (notAnswer == 2) {
                    window.location.href = "./end.html?title=" + _this.voteTitle + '&id=' + voteId + '&colour=' + result.colour;
                }

                if (response.data.isAnwserQues || result.delFlag == 1) {
                    window.location.href = "./stop.html?title=" + _this.voteTitle + '&id=' + voteId + '&colour=' + result.colour;
                } else {
                    _this.res = result;
                    document.title = _this.res.title
                    if (!result.moreAnswer) {
                        $.cookie(voteId, '1');
                    }

                    // 是否匿名，如果必须登录，进页面先弹一次登录框
                    if (!result.anonymity) {
                        $('#username').click()
                        $(window).scrollTop(0);
                    }
                }
            })
    },
    renderExplain: function () {
        var investigateTitle = this.res.title; //调查问卷大标题
        var description = this.res.description; //调查描述
        var html = template("explain", {
            investigateTitle: investigateTitle,
            description: description
        });
        $("#explain").html(html);
    },
    renderQuestion: function () {
        var questionList = this.res.questionList;
        var html = template("content", {
            questionList: questionList
        });
        $(".content").html(html);


        layui.use('form', function () {
            var form = layui.form
            form.render(); //更新全部layUI

            $(".content").on("change", "input[type=text]", function (ev) {
                $(this).removeClass("layui-form-danger");
            });

            $('input[type=text]:disabled').each(function (index,ele) {
                var verify = $(ele).attr('lay-verify')
                var id = $(ele).attr('id')
                $.cookie('lay-verify-'+id, verify, { expires: 1 })
                $(ele).attr('lay-verify', '')
            })


            /*监听单选与多选，后面有填空的，只有选中才可以填写，如果未选中不可填写并清空值*/
            $('.layui-form-radio').on('click', function (ev) {
                var notChecked = $("input[type=radio]").not("input:checked");
                var input = $(this).prev()
                var id = input.attr('questionPartId')

                for (var i = 0; i < notChecked.length; i++) {
                    var notEl = notChecked[i];
                    var notArr = $(notEl).next().next().find('input[type=text]')
                    if (notArr.length > 0) {
                        $(notArr[0]).attr('disabled', 'disabled').val('').attr('lay-verify', '')
                    }
                }

                $('#'+id).removeAttr('disabled').attr('lay-verify', $.cookie('lay-verify-'+id))
            })

            $('.layui-form-checkbox').on('click', function (ev) {
                var input = $(this).prev()
                var id
                if ($(input[0]).attr('checked')) {
                    id = input.attr('questionPartId')
                    $('#'+id).removeAttr('disabled').attr('lay-verify', $.cookie('lay-verify-'+id))
                }else {
                    id = input.attr('questionPartId')
                    $('#'+id).attr('disabled', 'disabled').val('').attr('lay-verify', '')
                }
            })

        });
    },
    getCss: function () {
        if (this.res.colour == 5) {
            this.cssScr.href = "./src/yellow.css";
        } else if (this.res.colour == 4) {
            this.cssScr.href = "./src/green.css";
        } else if (this.res.colour == 3) {
            this.cssScr.href = "./src/blue.css";
        } else if (this.res.colour == 2) {
            this.cssScr.href = "./src/red.css";
        } else {
            this.cssScr.href = "./src/gray.css";
        }
    }
};

$(function () {
    explain = new Explain();
    explain.init();
});
