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