// JavaScript Document
$(document).ready(function(e) {
	/*soso 焦点获取*/
	$(".soso .txt").focus(function(){
		$(this).val("");
		
		})
	$(".soso .txt").blur(function(){
		$(this).val("请输入搜索关键词");
		
		})
	
	/*首屏主幻灯片展示*/
	m_Timer();
   function m_Timer(){
	    var m_timer=setInterval(autoplay,3000);
	var index=0;
	function autoplay(){
		index++;
		if(index>5){
			index=0;
			}
		$("#m-slide ul li").eq(index).fadeIn().siblings().hide();
		$("#m-slide ol li").eq(index).addClass("current").siblings().removeClass("current");
	  }

		$("#m-slide ol li").hover(function(){
			clearInterval(m_timer);	
			$("#m-slide ul li").eq($(this).index()).fadeIn().siblings().hide();
			$("#m-slide ol li").eq($(this).index()).addClass("current").siblings().removeClass("current");
				
				
			},function(){
				
				index=$(this).index();
				clearInterval(m_timer);
				m_timer=setInterval(autoplay,3000);
				
				
				});
	$("#m-slide ul li").hover(function(){
		clearInterval(m_timer);
		
		},function(){
			clearInterval(m_timer);
			m_timer=setInterval(autoplay,3000);
			
			
			})
   
	   }
//#menu左侧导航
$("#menu .li-con").hide();
$("#menu li").hover(function(){
	$(this).addClass("current").children("span").hide();
	$("#menu .li-con").eq($(this).index()).show();
	
	
	},function(){
		$(this).removeClass("current").children("span").show();;
		
		$("#menu .li-con").eq($(this).index()).hide();
		})
$("#menu .li-con").hover(function(){
		$(this).show();
		$("#menu li").eq($(this).index()-1).addClass("current");
		
	},function(){
		$(this).hide();
		$("#menu li").eq($(this).index()-1).removeClass("current");
		
		
		})
//msroll左右产品展示图效果

	
	var index=0;
	$(".mscroll .page-r").click(function(){
		index++;
		if(index>3){
			index=0;
			}
		$(".mscroll ul").stop().animate({
			left:-index*207
			
			});
	})
	$(".mscroll .page-l").click(function(){
		index--;
		if(index<0){
			index=3;
			$(".mscroll ul").stop().animate({
				left:-621
				})
			
			}
		$(".mscroll ul").animate({
			left:-index*207
			
			});
	})
/*图片晃动效果*/
img_h("#life-win dl",-10,200);
img_h(".layout03 .item a",-15,200);
function img_h(name,l_num,sp){
	$(name).hover(function(){
	$(this).find("img").stop().animate({
		marginLeft:l_num+"px"
		
		},sp)
	
	},function(){
		$(this).find("img").stop().animate({
		marginLeft:0
		
		},sp)
		
		})
	
	
	}
/*图片高光凸显效果*/
pic_focus();
function pic_focus(){
	$(".layout03 .item a").hover(function(){
		$(this).siblings("a").stop().fadeTo("200",0.7);
		$(this).parent(".item").siblings().children("a").stop().fadeTo("200",0.7);
		},function(){
			
		$(this).siblings("a").stop().fadeTo("200",1);
		$(this).parent(".item").siblings().children("a").stop().fadeTo("200",1);
			
			})
	
	
	}



/*layout中小scroll*/
s_focus(".layout01 .mi .scroll ul li",".layout01 .mi .scroll ol li");
s_focus(".layout02 .mi .scroll ul li",".layout02 .mi .scroll ol li");
s_focus(".layout03 .mi .scroll ul li",".layout04 .mi .scroll ol li");
s_focus(".layout04 .mi .scroll ul li",".layout04 .mi .scroll ol li");
s_focus(".layout05 .mi .scroll ul li",".layout04 .mi .scroll ol li");
s_focus(".layout06 .mi .scroll ul li",".layout04 .mi .scroll ol li");
s_focus(".layout07 .mi .scroll ul li",".layout04 .mi .scroll ol li");
s_focus(".layout08 .mi .scroll ul li",".layout04 .mi .scroll ol li");

function s_focus(ul_li,ol_li){
	var m_timer=setInterval(autoplay,2000);
	var index=0;
	function autoplay(){
		index++;
		if(index>4){
			index=0;
			}
		$(ul_li).eq(index).fadeIn().siblings().fadeOut();
		$(ol_li).eq(index).addClass("current").siblings().removeClass("current"         );
		}	
	
	$(".scroll").hover(function(){
		clearInterval(m_timer);
		
		},function(){
			clearInterval(m_timer);
			m_timer=setInterval(autoplay,2000);
			});
			
		$(ol_li).hover(function(){
		
		$(ul_li).eq($(this).index()).fadeIn().siblings().fadeOut();
		$(this).addClass("current").siblings().removeClass("current");
		
		})
		}
//楼层右侧图片切换效果
$(".layout01 .right ol li").mouseover(function(){
	 var $key=$(this).index();
	 $(this).parent().siblings("ul").find("li").eq($key).show().siblings("li").hide();
	 $(this).addClass("current").siblings("li").removeClass("current");

	})

//便民li滑动效果
$(".bianming ul li").mouseover(function(){
	$(".bianming dt span").stop().animate({
		left:$(this).index()*77
		
		});
		$(".bianming").children("dd").eq($(this).index()).show().siblings("dd").hide();
		
	
	});
//楼层mi滑动效果
$(".mi-t li").mouseover(function(){
	$(this).parent().siblings("span").stop().animate({left:$(this).index()*158});
	var $key=$(this).index();
	$(this).parent().parent(".mi-t").siblings(".content").eq($key).show().siblings(".content").hide();
	
	})
//8楼右侧滑动效果
$("#lay08_r .title li").mouseover(function(){
		$("#lay08_r span").stop().animate({left:$(this).index()*40});
		var $key=$(this).index();
		$(".list").eq($key).show().siblings(".list").hide();
	
	
	})






});