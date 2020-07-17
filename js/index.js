//banner
$(".index_banner").slick({
    autoplay: true, 
    arrows: false,
    dots:false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true
        }
      }
    ]
});
$(".index_banner").init(function(slick){
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active');
});
$(".index_banner").on("afterChange",function(slick,currentSlide){
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active');
    var _index = $('.index_banner').slick('slickCurrentSlide');
    $('.section1 .number span').eq(_index).addClass('active').siblings().removeClass('active');
    //添加首页文字
    $.get("index.json",{},function (data) {
        $(".block_txt").html("<h1>海宇</h1>\n" +
            "               <h3>"+ data[_index].h3 +"</h3>\n" +
            "               <p>"+ data[_index].p1 +"</p>\n" +
            "               <p>"+ data[_index].p2 +"</p>\n")
    },"json");
});
$(".section1 .number span").click(function(){
    var _index = $(this).index();
    $(".index_banner").slick("slickGoTo",_index);
    $(this).addClass("active").siblings().removeClass("active")
});
$(".section1 .prev").click(function(){
  $(".index_banner").slick("slickPrev");
});
$(".section1 .next").click(function(){
  $(".index_banner").slick("slickNext");
});
//导航
//超过一定高度导航添加类名
var nav=$("header"); //得到导航对象  
var win=$(window); //得到窗口对象  
var sc=$(document);//得到document文档对象。  
win.scroll(function(){  
  if(sc.scrollTop()>=100){  
    nav.addClass("on");   
  }else{  
   nav.removeClass("on");  
  }  
}) ;
//全屏滚动
$('#index_main').fullpage({
	'navigation': true,
	slidesNavigation: true,
	controlArrows: false,
	continuousHorizontal:true,
	scrollingSpeed:1000,
	showActiveTooltip :true, 
	anchors: ['zero', 'one', 'two', 'three','four','five','six'],
	loopHorizontal: true,
	afterLoad: function(anchorLink, index){
		if(index == 1){
			$('header').removeClass('on');
            $("#nav1 img").attr("src","img/nav_bar.png");
		}
		if(index == 2){
			$('header').addClass('on');
			$('.section2 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
			$('.section2 h2').addClass('animated fadeInUp').css('animation-delay', '.1s');
			$('.section2 p').addClass('animated fadeInDown').css('animation-delay', '.1s');
            $(".tit01 img").addClass('animated fadeInDown').css('animation-delay', '.1s');
			$("#nav1 img").attr("src","img/nav_bar1.png");
		}
		if(index == 3){
			$('header').addClass('on');
			$('.section3 h3').addClass('animated fadeInLeftBig').css('animation-delay', '.1s');
            $('.section3 h2').addClass('animated fadeInUp').css('animation-delay', '.1s');
            $('.section3 p').addClass('animated fadeInLeftBig').css('animation-delay', '.1s');
            $("#nav1 img").attr("src","img/nav_bar1.png");
        }
		if(index == 4){
			$('header').addClass('on');
			$('.section4 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
            $('.section4 h2').addClass('animated fadeInUp').css('animation-delay', '.1s');
            $("#nav1 img").attr("src","img/nav_bar1.png");
        }
        if(index == 5){
            $('header').addClass('on');
            $('.section5 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
            $('.section5 h2').addClass('animated fadeInUp').css('animation-delay', '.1s');
            $('.section5 img').addClass('animated fadeInLeftBig').css('animation-delay', '.1s');
            $("#nav1 img").attr("src","img/nav_bar1.png");
        }
        if(index == 6){
            $('header').addClass('on');
            $('.section6 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
            $('.section6 h2').addClass('animated fadeInUp').css('animation-delay', '.1s');
        }
	},
	onLeave: function(index, direction){
	}
});
//点击导航条
$("#nav1").click(function () {
    $("#nav1").hide();
    $(".aside").show();
});
//鼠标移除侧边导航栏
$(".aside").bind("mouseleave",function () {
    $("#nav1").show();
    $(".aside").hide();
});
//添加首页文字
$.get("index.json",{},function (data) {
    $(".block_txt").html("<h1>海宇</h1>\n" +
        "               <h3>"+ data[0].h3 +"</h3>\n" +
        "               <p>"+ data[0].p1 +"</p>\n" +
        "               <p>"+ data[0].p2 +"</p>\n")
},"json");
//业务介绍翻页
//鼠标移入
$.get("index.json",{},function (data) {
    $(".businesscon").on("mouseenter",".tit03",function () {
        var index = $(this).index();
        var arr = data[3].arr;
        $(".tit04:eq("+ index +")").hide();
        $(".tit03:eq("+ index +") img").hide();
        $(this).css({
            background:arr[index],
            backgroundSize:"100%"
        });
        $('.tit03').addClass('animated rotateInX');
        $(this).addClass("animated picrotate");
        $(".tit4:eq("+ index +")").show();
    });
},"json");
$(".businesscon").on("mouseleave",".tit03",function () {
    var index = $(this).index();
    $(this).css("background","#fff");
    $(".tit04:eq("+ index +")").show();
    $(".tit03:eq("+ index +") img").show();
    $(".tit4:eq("+ index +")").hide();
});
//固定联系方式
$(".pic").on("mouseenter",".imgs",function () {
    $(this).stop(true,true).animate({
        left: "120px"
    },1500);
    $(this).parent().addClass("picbg");
    $(this).prev().show().stop(true,true).animate({
        left:"10px"
    },1500)
});
$(".pic").on("mouseleave",".lis",function () {
    var index = $(this).index();
    $(this).find("img").stop(true,true).animate({
        left: "10px"
    },1500,function () {
        $(".lis:eq("+ index +")").removeClass("picbg");
    });
    $(this).find("span").stop(true,true).animate({
        left:"-110px"
    },1500);
});
//产品展示
var html = "";
var html01 = "";
$.get("index.json",{},function (data) {
    var arr = data[5].products;
    for (var i = 0; i < arr.length; i++) {
        html += "<div class=\"tit05\">\n" +
            "\t\t\t\t\t\t\t\t<img src='"+ arr[i].images +"' alt=\"p_one\" class=\"tit5img\">\n" +
            "\t\t\t\t\t\t\t\t<div class=\"tit5\">\n" +
            "\t\t\t\t\t\t\t\t\t<h5><a href=\"javascript:;\">"+ arr[i].title+"</a></h5>\n" +
            "\t\t\t\t\t\t\t\t\t<span></span>\n" +
            "\t\t\t\t\t\t\t\t\t<p>"+ arr[i].contents +"</p>\n" +
            "\t\t\t\t\t\t\t\t</div>\n" +
            "\t\t\t\t\t\t\t</div>";
    }
    $(".productcon").append(html);
},"json");
$(".productcon").on("mouseover",".tit05",function () {
        var index = $(this).index();
        $(".tit5:eq("+ index +")").show();
    });
$(".productcon").on("mouseleave",".tit05",function () {
        var index = $(this).index();
        $(".tit5:eq("+ index +")").hide();
    });
$(".productcon").on("click","h5",function () {
    var index = $(this).parent().parent(".tit05").index();
    $.get("index.json",{},function (data) {
        var arr = data[5].products;
        $(".displaybg").html("<div class=\"showpic\">\n" +
            "\t\t\t\t\t\t<img src='"+ arr[index].images + "' alt=\"\">\n" +
            "\t\t\t\t\t\t<h5 class=\"dis_h5\">"+ arr[index].title+ "</h5>\n" +
            "\t\t\t\t\t\t<p class=\"dis_p\">"+ arr[index].contents01 +"</p>\n" +
            "\t\t\t\t\t</div>");
    },"json");
        $(".displaybg").append(html01);
        $(".displaybg").show();
        $("#close").show();
});
$("#close").click(function () {
    $(".displaybg").hide();
    $(this).hide();
});