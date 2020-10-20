


layui.use(['layer', 'form'], function(){
    //var layer = layui.layer,form = layui.form;
    layer.confirm('今天捕鱼重要嘛？', {
        btn: ['重要','奇葩'] //按钮
      }, function(){
        layer.msg('的确很重要', {icon: 1});
      }, function(){
        layer.msg('也可以这样', {
          time: 20000, //20s后自动关闭
          btn: ['明白了', '知道了']
        });
      });
  });


