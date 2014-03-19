//-------------------------------------------------------------------------
//
//	
//
//**********************************滚动条置顶*********************************
//
//
//
//
//-------------------------------------------------------------------------
$(function() {
	$.fn.manhuatoTop = function(options) {
		var defaults = {			
			showHeight : 150,
			speed : 1000
		};
		var options = $.extend(defaults,options);
		$("body").prepend("<div id='totop'><a></a></div>");
		var $toTop = $(this);
		var $top = $("#totop");
		var $ta = $("#totop a");
		$toTop.scroll(function(){
			var scrolltop=$(this).scrollTop();		
			if(scrolltop>=options.showHeight){				
				$top.show();
			}
			else{
				$top.hide();
			}
		});	
		$ta.hover(function(){ 		
			$(this).addClass("cur");	
		},function(){			
			$(this).removeClass("cur");		
		});	
		$top.click(function(){
			$("html,body").animate({scrollTop: 0}, options.speed);	
		});
	};
});

$(function (){
	$(window).manhuatoTop({
		showHeight : 100,//设置滚动高度时显示
		speed : 500 //返回顶部的速度以毫秒为单位
	});
});
//-------------------------------------------------------------------------







/**
 * 
 */
function toJson(j) {
	return (new Function("return " + j))();
}



//-------------------------------------------------------------------------
//
//	
//
//angular js begin
//
//
//
//-------------------------------------------------------------------------
var imessageApp = angular.module('imessage', []);


//注册服务
imessageApp.factory('scollService', function(){
	var $window = $(window);
	return {
		//
		scrollHeight: function(){
			return $window.height() + $window.scrollTop();
		},
		
		//when scoll height above the selector height, the callback will be trigger
		bindSelector: function(selector, callback){
			var self = this;
			$window.on('scroll', function(evt){
				var o = $(selector).offset();
				if(o && o.top < self.scrollHeight()){
					callback();
				}
			});
		},
		
		//when scoll is change, the callback will be trigger
		bindTop: function(callback){
			$window.on('scroll', function(evt){
				callback(evt);
			});
		}
	};
});