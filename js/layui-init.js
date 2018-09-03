// layUI模块化引入
var form = null

layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    form = layui.form


    //自定义验证规则
    form.verify({
        test: function(value){
            if(value.length < 5){
                return '标题也太短了吧';
            }
        }
        ,telephone: [/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/, '请输入正确的手机号码']
        ,cn: [/^[\u2E80-\u9FFF]+$/, '请输入汉字']
        ,postCode: [/^[1-9][0-9]{6}$/, '请输入正确邮编']
        ,english: [
            /[a-zA-Z]/
            ,'请输入英文字母'
        ]
    });

    /*点击提交后的回调*/
    form.on('submit(*)', function(data){
        /*单选题*/
        var questions = $('.layui-form-item.single-selection-req')
        // 遍历所有单选题
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
                console.log(question);
                // 修改label的颜色
                $(question).find('label').css({color:"red"})
                // 监听当点击dom时，还原label颜色
                addEventListener(question, 'click', function (ev) {
                    $(this).find('label').css({color:"#222"})
                    removeEventListener(this, 'click')
                })
            }
        }


        // console.log(data);
        // console.log(JSON.stringify(data.field));
        return false;
    });

    form.on('radio', function(data){
        // console.log(data);
    });
});

//兼容addEventListener函数
function addEventListener(ele,event,fn){
    if(ele.addEventListener){
        ele.addEventListener(event,fn,false);
    }else{
        ele.attachEvent('on'+event,fn.bind(ele));
    }
}

//兼容removeEventListener函数
function removeEventListener(ele,event,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(event,fn,false);
    }else{
        ele.detachEvent('on'+event,fn.bind(ele));
    }
}



