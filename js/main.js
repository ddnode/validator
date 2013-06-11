$(function(){

    $('div.demo_html').each(function(){
        var html = this.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;");
        html = '<h6>HTML</h6><pre class="prettyprint html">' + html + '</pre>';
        $(this).after(html);
    });
    
    //高亮代码
    prettyPrint();
    
    //添加示例脚本
    $('<script>').text(
        $('pre.js').map(function(){
            return $(this).text();
        }).get().join('')
    ).appendTo('body');
    
});