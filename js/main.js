$(document).ready(function(){
  
  $('header .fa-bars').click(function(e){
    e.preventDefault();
    $(this).toggleClass('fa-times');
    $("header .navbar").toggleClass("nav-toggle");
  }) 
  $(window).on("scroll load",function(){
    $("header .fa-bars").removeClass('fa-times');
    $("header .navbar").removeClass("nav-toggle");
    if($(window).scrollTop()>30){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }
    $("section").each(function(){
      let top = $(window).scrollTop();/*전체페이지중 현재 스크롤의 위치*/
      let id =$(this).attr('id');
      let height = $(this).height(); /*자신의 페이지의 크기 top-bottom*/
      let offset = $(this).offset().top-200; /*전체페이지중 자신의 페이지의 위치*/
      
      if(top >= offset && top < height+offset){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#'+ id +'"]').addClass('active');
      }
    })
  })
})