// 退出登录
function backToLogin() {window.location.href='login.html';}
// 添加tab
setTimeout(function () {addTab('柱状图','echarts/bar.html')},5);
function addTab(title,url){
    var title=$.trim(title);
    var isExist = $("#tabTitle").tabs('exists', title);
    // var height=$('body').height();
    // height=height+'px';
    if (isExist){
        $('#tabTitle').tabs('select', title);
    } else {
        var content = '<iframe id="'+title+'"  scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;overflow-x:hidden; overflow-y:auto;"></iframe>';
        console.log($("#tabTitle").parent().height());
        $('#tabTitle').tabs('add',{
            title:title, content:content, closable:true,
            width:$("#tabTitle").parent().width(),
            height:$("#tabTitle").parent().height(),
            onSelect:function(title){alert(title+' is selected');}
        });
    }
}
//监听窗口高度变化
$(window).resize(function () {
    var navBarWidth0=$(".navBar").css('width');
    if($(".sideLeft").attr("data-flag")==1){$("#demo").css({ 'width':'100%', 'padding-left':'220px'});}else{$("#demo").css({'width':'100%', 'padding-left':'56px'});}
    var maxh=$('body').height();
    $('.scrollHeight').height(maxh-71);$(".navBar").height(maxh-71);$("#demo").height(maxh-71);
    $('.treebox').height(maxh-116);
    scrollsXY(".scrollXY");
    setTimeout(function () {$('#tabTitle').tabs('resize');},10);
});
$(function(){
    //窗口初始化
    if($(".sideLeft").attr("data-flag")==1){$("#demo").css({ 'width':'100%', 'padding-left':'220px'});}else{$("#demo").css({'width':'100%', 'padding-left':'56px'});}
    var height=$('body').height();
    $('.scrollHeight').height(height-71);$(".navBar").height(height-71);$("#demo").height(height-71);
    // $('.firMenu').height(height-116);
    $('.scrollXY').height(height-116);
    scrollsXY(".scrollXY");
    // 左侧菜单滑动
    $('.showMenu,.hiddenMenu').click(function () {
        var father = $(this).parent();
        if (father.attr("data-flag")==0) {
            $('.showMenu').toggle();$('.hiddenMenu').toggle();
            $("#demo").css({ 'width':'100%','padding-left':'220px' });
            $(".navBar").animate({width:'220px'},50);
            setTimeout(function () {$('#tabTitle').tabs('resize');},10);
            father.attr("data-flag",1);
            setTimeout(function(){$(".firChild").css("textOverflow","ellipsis");},600);
        }else{
            $('.showMenu').toggle();$('.hiddenMenu').toggle();
            $("#demo").css({ 'width':'100%','padding-left':'56px'});
            $(".navBar").animate({width:'56px'},50);
            setTimeout(function () {$('#tabTitle').tabs('resize');},10);
            father.attr("data-flag",0);
            setTimeout(function(){$(".firChild").css("textOverflow","inherit");},10);
            // 所有三级菜单关闭
            $(".thirMenu,.secMenu,.fourMenu").removeClass("on open");
            $(".thirMenu,.secMenu,.fourMenu").slideUp();
            $(".firMenu").find('p').removeClass("on open");
        }
        setTimeout(function () {scrollsXY(".scrollXY")},300);
    });
    // 点击一级菜单
    $(document).on('click','.firChild',function(event){
        event.stopPropagation();
        if ($(".sideLeft").attr("data-flag")==1) {
            $(this).parent('li').siblings().removeClass("open");
            $(this).parent('li').siblings().find('p').removeClass("open");
            if($(this).hasClass('on')){
                //已打开
                $(this).removeClass("on");$(this).addClass("open");
                $(this).parent('li').addClass("open");
                $(this).next(".secMenu").find(".secChild").removeClass("on");
                $(this).next(".secMenu").find(".thirChild").removeClass("on");
                $(this).next(".secMenu").slideUp();
                $(this).next(".secMenu").find(".thirMenu").slideUp();
                $(this).next(".secMenu").find(".fourMenu").slideUp();
                setTimeout(function () {scrollsXY(".scrollXY")},300);
            }else{
                //未打开
                $(this).addClass("on open");
                $(this).parent('li').addClass("open");
                // $(this).next(".secMenu").slideDown(40);
                $(this).next(".secMenu").show();
                scrollsXY(".scrollXY");
                // setTimeout(function () {scrollsXY(".scrollXY")},1);
            }
            if(typeof($(this).attr("data-url"))=="undefined"){console.log("没有链接")
            }else{
                var url=$(this).attr("data-url");var title=$(this).text();
                addTab(title,url);
            }
            try{callbackOnMenuClick($(this).children());}catch(e){}

        }else {
            //左侧菜单展开
            $('.showMenu').toggle();$('.hiddenMenu').toggle();
            $("#demo").css({ 'width':'100%','padding-left':'220px' });
            $('#tabTitle').tabs('resize');
            setTimeout(function () { $('#tabTitle').tabs('resize'); },5);
            $(".sideLeft").attr("data-flag",1);
            $(".navBar").animate({width:"220px"},100);
            setTimeout(function(){$(".firChild").css("textOverflow","ellipsis");},200);
            $(this).parent('li').siblings().removeClass("open");
            $(this).parent('li').siblings().find('p').removeClass("open");
            if($(this).hasClass('on')){
                //已打开
                $(this).removeClass("on");$(this).addClass("open");
                $(this).parent('li').addClass("open");
                $(this).next(".secMenu").find(".secChild").removeClass("on");
                $(this).next(".secMenu").find(".thirChild").removeClass("on");
                $(this).next(".secMenu").slideUp();
                $(this).next(".secMenu").find(".thirMenu").slideUp();
                $(this).next(".secMenu").find(".fourMenu").slideUp();
                setTimeout(function () {scrollsXY(".scrollXY")},300);
            }else{
                //未打开
                // $(this).parent('li').siblings().removeClass("open");
                // $(this).parent('li').siblings().find('p').removeClass("open");
                $(this).addClass("on open");
                $(this).parent('li').addClass("open");
                // $(this).next(".secMenu").slideDown(10);
                $(this).next(".secMenu").show();
                scrollsXY(".scrollXY");
                // setTimeout(function () {scrollsXY(".scrollXY")},0);
            }
            if(typeof($(this).attr("data-url"))=="undefined"){console.log("没有链接")
            }else{
                var url=$(this).attr("data-url");var title=$(this).text();
                addTab(title,url);
            }

        }
    });
    // 点击二级菜单
    $(document).on('click','.secChild',function(event){
        event.stopPropagation();
        $(this).parent('li').siblings().find('p').removeClass("open");
        $(this).parent('li').parent('ul').prev().addClass("open");
        $(this).parent('li').parent('ul').prev().parent('li').siblings().removeClass("open");
        $(this).parent('li').parent('ul').prev().parent('li').siblings().find('p').removeClass("open");
        if($(this).hasClass('on')){
            $(this).removeClass("on");$(this).addClass("open");
            $(this).next(".thirMenu").find(".thirChild").removeClass("on");
            $(this).next(".thirMenu").find(".fourChild").removeClass("on");
            $(this).next(".thirMenu").slideUp();
            $(this).next(".thirMenu").find(".fourMenu").slideUp();
            setTimeout(function () {scrollsXY(".scrollXY")},400);
        }else{
            $(this).addClass("on open");
            // $(this).next(".thirMenu").slideDown();
            $(this).next(".thirMenu").show();
            scrollsXY(".scrollXY");
            // setTimeout(function () {scrollsXY(".scrollXY")},0);
        }

        if(typeof($(this).attr("data-url"))=="undefined"){console.log("没有链接")
        }else{
            var url=$(this).attr("data-url");var title=$(this).text();
            addTab(title,url);
        }
        try{callbackOnMenuClick($(this));}catch(e){}
    });
    // 点击三级菜单
    $(document).on('click','.thirChild',function(event){
        event.stopPropagation();
        $(this).parent('li').siblings().find('p').removeClass("open");
        $(this).parent('li').parent('ul').prev().addClass("open");//二级
        $(this).parent('li').parent('ul').prev().parent('li').parent('ul').prev().addClass("open");//一级
        $(this).parent('li').parent('ul').prev().parent('li').parent('ul').prev().parent('li').siblings().find('p').removeClass("open");//其他一级
        $(this).parent('li').parent('ul').prev().parent('li').siblings().removeClass("open");
        $(this).parent('li').parent('ul').prev().parent('li').siblings().find('p').removeClass("open");
        if($(this).hasClass('on')){
            $(this).removeClass("on");$(this).addClass("open");
            $(this).next(".fourMenu").find(".fourChild").removeClass("on");
            $(this).next(".fourMenu").slideUp();
            setTimeout(function () {scrollsXY(".scrollXY")},400);
        }else{
            $(this).addClass("on open");
            // $(this).next(".fourMenu").slideDown();
            $(this).next(".fourMenu").show();
            scrollsXY(".scrollXY");
            // setTimeout(function () {scrollsXY(".scrollXY")},400);
        }

        if(typeof($(this).attr("data-url"))=="undefined"){console.log("没有链接")
        }else{
            var url=$(this).attr("data-url");var title=$(this).text();
            addTab(title,url);
        }
        try{callbackOnMenuClick($(this));}catch(e){}
    });
    // 点击四级菜单
    $(document).on('click','.fourChild',function(event){
        event.stopPropagation();
        $(this).parent('li').siblings().find('p').removeClass("open");
        $(this).parent('li').parent('ul').prev().addClass("open");//三级
        $(this).parent('li').parent('ul').prev().parent('li').parent('ul').prev().addClass("open");//二级
        $(this).parent('li').parent('ul').prev().parent('li').parent('ul').prev().parent('li').siblings().find('p').removeClass("open");//其他二级
        $(this).parent('li').parent('ul').prev().parent('li').parent('ul').prev().parent('li').parent('ul').prev().addClass("open");//一级
        $(this).parent('li').parent('ul').prev().parent('li').parent('ul').prev().parent('li').parent('ul').prev().parent('li').siblings().find('p').removeClass("open");//其他一级
        $(this).parent('li').parent('ul').prev().parent('li').siblings().removeClass("open");//其他三级
        $(this).parent('li').parent('ul').prev().parent('li').siblings().find('p').removeClass("open");
        $(this).addClass("on");$(this).addClass("open");
        setTimeout(function () {scrollsXY(".scrollXY")},400);
        if(typeof($(this).attr("data-url"))=="undefined"){console.log("没有链接")
        }else{
            var url=$(this).attr("data-url");var title=$(this).text();
            addTab(title,url);
        }
        try{callbackOnMenuClick($(this));}catch(e){}
    });
});
// 全屏按钮
$(document).ready(function(){
    function fullScreen(el) {
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen, wscript;
        if(typeof rfs != "undefined" && rfs) {
            document.querySelector(".fullBtn").style.display="none";//隐藏
            document.querySelector(".exBtn").style.display="block";//显示
            rfs.call(el);
            return;
        }
        if(typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if(wscript) {wscript.SendKeys("{F11}");}
        }
    }
    function exitFullScreen(el) {
        var el= document,
            cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen, wscript;
        if (typeof cfs != "undefined" && cfs) {
            document.querySelector(".fullBtn").style.display="block";//隐藏
            document.querySelector(".exBtn").style.display="none";//显示
            cfs.call(el);
            return;
        }
        if (typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {wscript.SendKeys("{F11}");}
        }
    }
    var content = document.getElementById('contain');
    $(document).on('click','.fullBtn',function(){fullScreen(content);});
    $(document).on('click','.exBtn',function(){exitFullScreen();});

    // end全屏
});
function scrollsXY(box){		//XY轴滚动最终版
    var b=$('.navBar').width()-$('.firMenu').width()+1;
    var pointY=0,top=0;
    $(box).each(function(){
        var box=$(this);
        var H=box.height()-0;
        var cententH=$('.firMenu').height();
        var btnH=H/cententH*H;
        var go_top=box.scrollTop()/cententH*H;
        var scrollY='<div class="scroll_box" boxH="'+H+'" cententH="'+cententH+'" move="false">';
        scrollY+='<div class="scroll_btn" tops="'+go_top+'">';
        scrollY+='<div style="background-color:#282e39;position:absolute;width:50%;left:24%;height:100%;border-radius:4px"></div>';
        scrollY+='</div></div>';
        box.parent().css({"position":"relative"});
        box.siblings(".scroll_box").remove();
        box.before(scrollY);
        if(H/cententH<1){box.siblings(".scroll_box").show();}else{box.siblings(".scroll_box").hide();}
        box.siblings(".scroll_box").css({
            "width":b+"px", "position":"absolute", "top":"45px", "right":0, "z-index":9, "background-color":"#404b5c", "height":H, "border-bottom":"solid 0 #fff"
        });
        box.siblings(".scroll_box").children(".scroll_btn").css({
            "width":"100%", "position":"relative", "cursor":"pointer", "height":btnH, "margin-top":go_top
        });
        $(".scroll_btn").hover(function(){
            $(this).children().css({"background-color":"#696979",});
        },function(){
            $(this).children().css({"background-color":"#282e39",});
            move=$(this).parent().attr("move","false");
            addscroll(box);
        });
        addscroll(box);
        $(".scroll_btn").mousedown(function(e){
            pointY = e.pageY;	//这里可以得到鼠标Y坐标top=$(this).attr("tops")*1;
            $(this).parent().attr("move","true");$(this).focus();
        });
        $(".scroll_btn").mousemove(function(e){
            e.stopPropagation();
            if($(this).parent().attr("move")=="true"){
                var moveY =e.pageY-pointY;
                var boxH=$(this).parent().attr("boxH");
                var cententH=$(this).parent().attr("cententH");
                var btnH=boxH/cententH*boxH;
                $(this).siblings().unbind();
                $(this).css({"margin-top":top+moveY});
                $(this).attr("tops",top+moveY);
                $(this).parent().siblings().scrollTop((top+moveY)/boxH*cententH);
                if(top+moveY>boxH-btnH){$(this).css({"margin-top":boxH-btnH});$(this).attr("tops",boxH-btnH);}
                else if(top+moveY<0){$(this).css({"margin-top":0});$(this).attr("tops",0);}
            }
        });
        $(".scroll_btn").mouseup(function(e){
            $(this).parent().attr("move","false");addscroll(box);
        });
    });

    function addscroll(box){
        box.scroll(function(){
            var Y=$(this).scrollTop();
            var boxH=$(this).siblings(".scroll_box").attr("boxH");
            var cententH=$(this).siblings(".scroll_box").attr("cententH");
            $(this).siblings(".scroll_box").children(".scroll_btn").css({"margin-top":Y/cententH*boxH});
            $(this).siblings(".scroll_box").children(".scroll_btn").attr("tops",Y/cententH*boxH);
        });
    }
}
// function getSrc() {
//     var src=$('iframe');
//     console.log(src);
//     return src;
// }