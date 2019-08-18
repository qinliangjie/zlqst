// css引入
import '../css/pc-index.css'
import '../css/index.scss'
import '../css/animate.min.css'




$('.top_body').mousemove(function (e) {
    var x = e.originalEvent.x || e.originalEvent.layerX || 0;
    var y = e.originalEvent.y || e.originalEvent.layerY || 0;
    var $page = $('.top_body');
    var $role = $page.find('.figure');
    $role.css({
      webkitTransform: 'translate3d(' + (x * 0.01) + 'px, ' + (y * 0.01) + 'px, 0px)',
      transform: 'translate3d(' + (x * 0.01) + 'px, ' + (y * 0.01) + 'px, 0px)'
    });
  });
function testAnim(x) {
      x.removeClass('fadeInRight animated').addClass('fadeInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('fadeInRight animated');
    });
};
$('.hero_n_s').on('click',function(){
	if($(this).hasClass('thor')){
		$('.hero_n_s').removeClass('odin_active loki_active hela_active');
		if($(this).hasClass('thor_active')){

		}else{
			$('.hreo_img').removeClass('active');
			$(this).addClass('thor_active')
			$('.thor_img').addClass('active');
			testAnim($('.thor_img'))
		}
	}
	if($(this).hasClass('odin')){
		$('.hero_n_s').removeClass('thor_active loki_active hela_active');

		if($(this).hasClass('odin_active')){

		}else{
			$('.hreo_img').removeClass('active');
			$(this).addClass('odin_active');
			$('.odin_img').addClass('active');
			testAnim($('.odin_img'))
		}
	}
	if($(this).hasClass('loki')){
		$('.hero_n_s').removeClass('odin_active thor_active hela_active');
		if($(this).hasClass('loki_active')){

		}else{
			$('.hreo_img').removeClass('active');
			$(this).addClass('loki_active');
			$('.loki_img').addClass('active');
			testAnim($('.loki_img'))
		}
	}
	if($(this).hasClass('hela')){
		$('.hero_n_s').removeClass('odin_active thor_active loki_active');
		if($(this).hasClass('hela_active')){

		}else{
			$('.hreo_img').removeClass('active');
			$(this).addClass('hela_active');
			$('.hela_img').addClass('active');
			testAnim($('.hela_img'))
		}
	}
})