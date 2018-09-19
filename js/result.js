var voteId = getQueryVariable('id') ? getQueryVariable('id') : 1;

function Explain() {
}

Explain.prototype = {
    res: {},
    init: function () {
        var _this = this;
        this.getCss();
        this.getData()
            .then(function () {
                _this.renderQuestion();
                _this.getTitle();
                _this.layUI();
            });
    },
    getData: function () {
        var _this = this;
        return $
            .ajax({
                type: "GET",
                jsonp: "callback",
                dataType: "jsonp",
                url: getData_url + "/vote/api/checkAnwsers",
                data: {
                    questionType: 1,
                    questionnaireId: voteId
                }
            })
            .then(function (response) {
                if (response.code == 0) {
                    _this.res = response.data;
                    console.log(response.data);
                }
            })
    },
    renderQuestion: function () {
        var questionList = this.res;
        var html = template("result", {
            questionList: questionList
        });
        $(".result-content").html(html);

        var arr = $(".result-item")

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var lis = $(item).find("li")
            for (var j = 0; j < lis.length; j++) {
                var li = lis[j];
                if (j%2===0) {
                    $(li).css({backgroundColor:"#f7f7f7"})  /*dcdcdc*/
                }else {
                    $(li).css({backgroundColor:"#fff"})
                }
            }
        }
    },
    layUI: function () {
        layui.use('element', function () {
            var element = layui.element;
        });
    },
    getTitle: function () {
        var title = getQueryVariable('title');
        var titleVal = document.title = document.getElementById('investigate-title').innerHTML = decodeURIComponent(title)
        $('#investigate-title').attr('title', titleVal)
    },
    getCss: function () {
        var colour = getQueryVariable('colour') ? getQueryVariable('colour') : 2;
        // 改变主题色
        var name;
        if (colour == 5) {
            name = 'yellow'
        } else if (colour == 4) {
            name = 'green'
        } else if (colour == 3) {
            name = 'blue'
        } else if (colour == 2) {
            name = 'red'
        } else if (colour == 1) {
            name = 'gray'
        }
        $("#css-src").attr("href", "./src/" + name + ".css");
    }
};

$(function () {
    var explain = new Explain();
    explain.init();
});





