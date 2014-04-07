(function($){
	var NeoNav = {
		topNav : function( links, toolbox, editCont ) {
			links.on('click', function(e) {
				var that = $(this),
					tAttr = that.find('a').attr('href');
					e.preventDefault();

					links.removeClass('active');
					that.addClass('active');

				if ( editCont.hasClass('opened') ) {
					<!-- editCont.slideUp(200); -->
                    editCont.removeClass('opened');

				}


				var navDrop = function(elem, showSelector){
					if ( tAttr.indexOf(elem) === 0 ){
					  <!-- 	showSelector.slideToggle(200); -->
                        showSelector.toggleClass('opened');
					} else {
					  <!--	showSelector.slideUp(200); -->
                         showSelector.removeClass('opened');
					}
				};

				//if the elem has this attr show this var
				navDrop('#toolbox', toolbox);
			})
		},

        lowerNav:function(links,referralDetails,lowerNav){
            links.on('click',function(e){
                 $('.top-level-nav').find('.opened').removeClass('opened');
                 lowerNav.toggleClass('opened');
            });

        },

		profile : function( clickArea, showCont, toolCont ){
			clickArea.on('click', function(){
				var that = $(this);
					
					if ( toolCont.is(':visible') ) {
					   <!--toolCont.slideUp(200);-->
                        toolCont.removeClass('opened');
					}

				<!--	showCont.slideToggle(200);-->
                        $(this).toggleClass('opened');

			})
		},

		stickyHead : function () {
		    var lastScrollTop, incr = 0,
		     	startsOn = 0,
		     	menuSpace = 10,//50
		     	menuBack = 40,
		     	headMain = $('#main-header');

		    $(window).scroll( function (event) {
		        var st = $(this).scrollTop();
		        
		        if ( st > startsOn ) {
		            if ( st > lastScrollTop ){
		            	incr++;
		            	if ( incr >= menuSpace ){
		            		headMain.addClass('hideH');
		            		incr = menuSpace;
		            	}
		            } else {
		            	incr -= 1;
		            	if (incr <= 10){
		            		headMain.removeClass('hideH');
		            		incr = 0;
		            	}
		            }
		        } else {
		            headMain.removeClass('hideH');
		        }
		        lastScrollTop = st;
		    });
		},

		init : function(){
			var mainNav = $('.top-level-nav').find('li');
			var toolNav = $('.top-level-toolbox');
			var editCont = $('.user-profile');
            var lowerNav=$('.low-level-nav');
            var lowerNavLinks = $('.low-level-nav').find('.action-target');
            var referralDetails=$('.referral-details');

			//this constructor setsup initial selectors
			 new NeoNav.topNav( mainNav, toolNav, editCont);
             new NeoNav.lowerNav(lowerNavLinks,referralDetails,lowerNav);
			 new NeoNav.profile($('.user-profile'), editCont, toolNav );
		}
	};

	NeoNav.init();



})(jQuery);
