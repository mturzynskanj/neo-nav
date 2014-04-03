(function($){
	var NeoNav = {
		topNav : function( links, toolbox, editCont ) {
			links.on('click', function(e) {
				var that = $(this),
					tAttr = that.find('a').attr('href');
					e.preventDefault();

					links.removeClass('active');
					that.addClass('active');

				if ( editCont.is(':visible') ) {
					editCont.slideUp(200);
				}


				var navDrop = function(elem, showSelector){
					if ( tAttr.indexOf(elem) === 0 ){
						showSelector.slideToggle(200);
					} else {
						showSelector.slideUp(200);
					}
				};

				//if the elem has this attr show this var
				navDrop('#toolbox', toolbox);
			})
		},

		profile : function( clickArea, showCont, toolCont ){
			clickArea.on('click', function(){
				var that = $(this);
					
					if ( toolCont.is(':visible') ) {
						toolCont.slideUp(200);
					}

					showCont.slideToggle(200);

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
			var toolNav = $('.top-level-toolbox').find('ul');
			var editCont = $('.edit-user-profile');

			//this constructor setsup initial selectors
			var topLinks = new NeoNav.topNav( mainNav, toolNav, editCont);
			var editProfile = new NeoNav.profile($('.user-profile'), editCont, toolNav );
		}
	};

	NeoNav.init();



})(jQuery);
