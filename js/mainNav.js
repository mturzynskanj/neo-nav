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
        $currentOpenedElement=null;

      function cacheDOM(){
              $topNavLinks = $('.top-level-nav').find('li a'),
              $toolboxSubNav = $('.top-level-toolbox'),
              $userProfile = $('.user-profile'),
              $lowerNav=$('.low-level-nav'),
              $referralDetailsTrigger = $('.low-level-nav').find('.action-target'),
              $referralDetails=$('.referral-details');

      }



    /* binding dom events */

    var eventBinder = function () {
        $topNavLinks.on('click',function(e){
            e.preventDefault();
            console.log('current opened element',$currentOpenedElement);
            var that=this,
                hrefAttr = $(this).attr('href');
            /*
            if ( $userProfile.hasClass('opened') ) {
                 $userProfile.removeClass('opened');
            }
            */

            if($currentOpenedElement != null && $currentOpenedElement !== $toolboxSubNav){
                $currentOpenedElement.removeClass('opened');
                $currentOpenedElement=null;
                if(hrefAttr.indexOf('#toolbox')==0){
                    $toolboxSubNav.toggleClass('opened');
                    $currentOpenedElement=$toolboxSubNav;
                }else{
                    $toolboxSubNav.removeClass('opened');
                }
            }else{
                if(hrefAttr.indexOf('#toolbox')==0){
                    $toolboxSubNav.toggleClass('opened');
                    $currentOpenedElement=$toolboxSubNav;
                }else{
                    $toolboxSubNav.removeClass('opened');
                }
            }
        });

        $userProfile.on('click',function(e){
            console.log('$currentOpenedElement',$currentOpenedElement);
            console.log(typeof($currentOpenedElement));
            console.log(typeof($(this)));



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




    };

    return{
        init: function () {
             cacheDOM();
             eventBinder();


            /*
            controller.setupValidationRules();
            controller.validateForm();
            view.setupGA();
            */
        }
    }
})(jQuery);
jQuery('document').ready(function () {
    SHAREIIN.mainNavigation.init();
});

