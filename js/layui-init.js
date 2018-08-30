// layUI模块化引入
var form = null

layui.use(['layer', 'form'], function(){
    var layer = layui.layer
    form = layui.form

    form.on('submit(*)', function(data){
        console.log(data);
        // console.log(JSON.stringify(data.field));
        return false;
    });

    form.on('radio', function(data){
        console.log(data);
    });
});



