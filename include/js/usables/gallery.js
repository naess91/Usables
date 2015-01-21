//simple image gallery

$(document).ready(function() {
	$("#gallery li img").click(function(){
		$('#main-img').attr('src',$(this).attr('src'));
	});
	var imageSwap = [];
	 $("#gallery li img").each(function(){
		imgUrl = this.src;
		imageSwap.push(imgUrl);
	});
	$(imageSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}