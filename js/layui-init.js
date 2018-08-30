// layUI模块化引入
layui.use(['layer', 'form'], function(){
    var layer = layui.layer,
        form = layui.form

    form.on('submit', function(data){
        console.log(data);
        return false;
    });

    form.on('radio', function(data){
        console.log(data);
    });
});