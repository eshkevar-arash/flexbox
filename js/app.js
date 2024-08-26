$('.header .header-top-responsive .nav-responsive .menu .responsive-header-icon').click(function (){
    var tag=$(this)
    tag.parents('.menu').toggleClass('active')
    if (tag.parents('.menu').hasClass('active')){
        $('.res-menu-list').animate({'left':0},300)
        $('.responsive-header-icon').removeClass('fa-bars')
        $('.responsive-header-icon').addClass('fa-times')

    }else {
        $('.res-menu-list').animate({'left':'-16rem'},300)
        $('.responsive-header-icon').removeClass('fa-times')
        $('.responsive-header-icon').addClass('fa-bars')
    }

})
alert(true==1)