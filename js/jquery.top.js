$('<div></div>')
		.attr('id','scrolltotop')
		.hide()
		.css({'z-index':'1000','position':'fixed','bottom':'25px','right':'40px','cursor':'pointer','width':'40px','height':'40px','background':'#6a8a46'})
		.appendTo('body')
		.click(function(){
			$('html,body').animate({scrollTop: 0}, 'slow');
		});
	$('<div></div>')
		.css({'width':'6px','height':'6px','transform':'rotate(-135deg)','border':'solid #ffffff','border-width':'0 3px 3px 0','padding':'3px','margin-top':'16px','margin-left':'14px'})
		.appendTo('#scrolltotop');
	$(window).scroll(function(){
		if($(window).scrollTop()<250){
			$('#scrolltotop').fadeOut();
		}else{
			$('#scrolltotop').fadeIn();
		}
	});