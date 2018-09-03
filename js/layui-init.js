// layUI模块化引入
var form = null

layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    form = layui.form

    /*点击提交后的回调*/
    form.on('submit(*)', function(data){
        var questions = $('.layui-form-item')
        // console.log(questions);

        /*单选题*/
        questions.each(function(key,item){
            if ($(item).hasClass('single-selection-req')) {
                console.log($(item))
            }
        });


        // console.log(data);
        // console.log(JSON.stringify(data.field));
        return false;
    });

    form.on('radio', function(data){
        console.log(data.elem.attributes);
    });
});



