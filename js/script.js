//* ヘッダー固定した時にアンカーリンクで要素が隠れない *//
$(function(){
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHeight = 0; //固定位置の高さ
		var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

//* スクロールすると画像が表示 *//
$(function() {
	$('.fade, .fade_pc, .fade_sp, .fadeBT, .fadeBT_pc, .fadeBT_sp, .fadeLR, .fadeLR_pc, .fadeLR_sp, .fadeRL, .fadeRL_pc, .fadeRL_sp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv');
		}
		/* ループする場合
		else{
			$(this).stop().removeClass('mv');
		}
		*/
	});
	$('.ef-zoom').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	console.log(isInView);
	if(isInView){
		$(this).stop().addClass('zoom');
	}
	else{
		$(this).stop().removeClass('zoom');
	}
});
});
