// layUI模块化引入
var form = null

layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    form = layui.form

    form.on('submit(*)', function(data){
        var questions = $('.layui-form-item')
        // console.log(questions);

        /*单选题*/
        for (var i = 0; i < questions.length; i++) {
            var item = questions[i];

            console.log($(item).find($('input[type="radio"]')))
        }


        // console.log(data);
        // console.log(JSON.stringify(data.field));
        return false;
    });

    form.on('radio', function(data){
        console.log(data.elem.attributes);
    });
});



