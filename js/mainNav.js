/**
 * Created by mariaturzynska on 4/6/14.
 */
/**
 * Created by mariat on 12/9/13.
 */
/**
 * Created by mariat on 12/4/13.
 */
/**
 * Created with JetBrains WebStorm.

 */
var SHAREIIN = SHAREIIN || {};
SHAREIIN.mainNavigation = (function ($) {
    'use strict';

    var $topNavLinks,
        $toolboxSubNav,
        $userProfile,
        $lowerNav,
        $lowerNavLinks,
        $referralDetails,
        $referralDetailsTrigger,
        windowScrolled,
        $currentOpenedElement=null;

      function cacheDOM(){
              $topNavLinks = $('.top-level-nav').find('li a'),
              $toolboxSubNav = $('.top-level-toolbox'),
              $userProfile = $('.user-profile'),
              $lowerNav=$('.low-level-nav'),
              $referralDetailsTrigger = $('.low-level-nav').find('.action-target'),
              $referralDetails=$('.referral-details');
      }

      function scrollPageToAnchor(that,initialScroll){

          var target = $(that.hash);
          target = target.length ? target : $('[name=' + that.hash.slice(1) +']');
          if (target.length) {
              $('body, html').animate({
                 scrollTop: target.offset().top - initialScroll
              }, 1000);
              windowScrolled=true;
              return false;
          }
      }

      function scrollToPageTop(){
          if(windowScrolled){
              $('html,body').animate({
                  scrollTop: 75
              }, 1000);
              windowScrolled=false;
          }
      }

    /* binding dom events */

    var eventBinder = function () {
        var initialScroll;
        $topNavLinks.on('click',function(e){
            e.preventDefault();

            var that=this,
                hrefAttr = $(this).attr('href');

            if($currentOpenedElement != null && $currentOpenedElement !== $toolboxSubNav){
                $currentOpenedElement.removeClass('opened');
                $currentOpenedElement=null;
                if(hrefAttr.indexOf('#toolbox')==0){
                    scrollPageToAnchor(this,120);
                    $toolboxSubNav.toggleClass('opened');
                    $currentOpenedElement=$toolboxSubNav;
                }else{
                    $toolboxSubNav.removeClass('opened');
                }
            }else{
                if(hrefAttr.indexOf('#toolbox')==0){
                    scrollPageToAnchor(this,120);
                    $toolboxSubNav.toggleClass('opened');
                    $currentOpenedElement=$toolboxSubNav;
                }else{
                    $toolboxSubNav.removeClass('opened');
                    scrollPageToAnchor(this,120);
                }
            }
        });

        $userProfile.on('click',function(e){

               //scrollToPageTop();

               if($currentOpenedElement !== null && $currentOpenedElement.get(0) !== $(this).get(0)){
                   $currentOpenedElement.removeClass('opened');

                   $(this).toggleClass('opened');
                   $currentOpenedElement=$(this);
                    return;
               }else if($currentOpenedElement !== null && $currentOpenedElement.get(0) === $(this).get(0)){

                   $(this).removeClass('opened');
                   $currentOpenedElement=null;
                   return;
               }else if($currentOpenedElement == null){

                   $(this).toggleClass('opened');
                   $currentOpenedElement=$(this);
                   return;
               }

        });

        $referralDetailsTrigger.on('click',function(e){

            //scrollToPageTop();

            if($currentOpenedElement != null && $currentOpenedElement.get(0) !== $lowerNav.get(0)){
                $currentOpenedElement.removeClass('opened');

                $lowerNav.toggleClass('opened');
                $currentOpenedElement=$lowerNav;
                return;

            }else if($currentOpenedElement != null && $currentOpenedElement.get(0) === $lowerNav.get(0)){
                $lowerNav.removeClass('opened');
                $currentOpenedElement=null;
                return;

            }else if($currentOpenedElement == null){
                $lowerNav.toggleClass('opened');
                $currentOpenedElement=$lowerNav;
                return;
            }

        });

        $referralDetails.on('click',function(e){
              $lowerNav.removeClass('opened');
              $currentOpenedElement=null;
        })
    };

    return{
        init: function () {
             cacheDOM();
             eventBinder();


        }
    }
})(jQuery);
jQuery('document').ready(function () {
    SHAREIIN.mainNavigation.init();
});

/*
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

*/