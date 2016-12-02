/*async breaks my smooth scroll to....*/
/*function f1 is defined around everything so that I can async all js and then run all this code after page loads in*/
function f1() {

	$(function() {
		$(".dropdown").hover(
			function() {
				$('.dropdown-menu', this).stop(true, true).fadeIn("fast");
				$(this).toggleClass('open');
				$('b', this).toggleClass("caret caret-up");
			},
			function() {
				$('.dropdown-menu', this).stop(true, true).fadeOut("fast");
				$(this).toggleClass('open');
				$('b', this).toggleClass("caret caret-up");
			});
	});
	/*end nav dropdown*/

	/*tool tip*/
	$("[data-toggle=tooltip]").tooltip();
	/*end tooltip*/

	/*tabs*/
	$('.nav-tabs a').click(function(e) {
			e.preventDefault()
			$(this).tab('show')
		})
		/*end tabs*/


	/*lazysizes*/
	$(document).on('lazybeforesizes', function(e) {
		/*use width of parent node instead of the image width itself*/
		/*e.detail.width = $(e.target).closest(':not(picture)').innerWidth() || e.detail.width;*/

	});

	window.lazySizesConfig = window.lazySizesConfig || {};
	window.lazySizesConfig.loadMode = 2;
	window.lazySizesConfig.preloadAfterLoad = true;
	window.lazySizesConfig.expand = 9;
	window.lazySizesConfig.customMedia = {
		'sm': '(max-width: 767px)',
		'md': '(max-width: 991px)',
		'lg': '(max-width: 1200px)'
	};

	/*ISOTOPE with Lazysizes*/
	$(document).ready(function() {
		$('#grid-container').each(function() {

			var $isotope = $('.isotope-box');

			$isotope.isotope({
				layoutMode: 'masonry',
				/* set itemSelector so .grid-sizer is not used in layout*/
				itemSelector: '.grid-item',
				/* use element for option*/
				masonry: {
					columnWidth: '.grid-sizer'
				},
				percentPosition: true
					/* slow transition*/
					/*transitionDuration: '.4s'*/
			});

			$isotope[0].addEventListener('load', (function() {
				var runs;
				var update = function() {

					$isotope.isotope('layout');
					runs = false;

				};
				return function() {
					if (!runs) {
						runs = true;
						/*timeout will affect the load of images*/
						setTimeout(update, 0);
					}
				};
			}()), true);
		});
	});
	/*end lazysizes*/

	/*DYNAMICALLY load youtube videos*/
	/*Find all the YouTube video embedded on a page*/
	var videos = document.getElementsByClassName("youtube");

	for (var i = 0; i < videos.length; i++) {

		var youtube = videos[i];

		/*Based on the YouTube ID, we can easily find the thumbnail image*/
		var img = document.createElement("img");
		/*img.setAttribute("src", "http://i.ytimg.com/vi/" + youtube.id + "/hqdefault.jpg");*/
		img.setAttribute("class", "thumb");
		img.setAttribute("width", "100%");


		/*Overlay the Play icon to make it look like a video player*/
		var circle = document.createElement("div");
		circle.setAttribute("class", "circle");
		youtube.appendChild(img);
		youtube.appendChild(circle);

		/*Attach an onclick event to the YouTube Thumbnail*/
		youtube.onclick = function() {

			/*Create an iFrame with autoplay set to true*/
			var iframe = document.createElement("iframe");
			iframe.setAttribute("src",
				"https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0");


			/*Replace the YouTube thumbnail with YouTube HTML5 Player*/
			this.parentNode.replaceChild(iframe, this);

		};
	}


	/*fancybox*/
	$(document).ready(function() {
		$(".fancybox").fancybox({
			/*Use Alt atribute*/
			beforeShow: function() {
				var alt = this.element.find('img').attr('alt');

				this.inner.find('img').attr('alt', alt);

				this.title = alt;
				/* Disable right click */
				$.fancybox.wrap.bind("contextmenu", function(e) {
					return false;
				});
			},

			/*For all options go to http://fancyapps.com/fancybox/*/
			padding: 4,
			fitToView: true,
			autoSize: true,
			closeClick: true,
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				title: {
					type: 'outside'
				},
				overlay: {
					css: {
						'background': 'rgba(0, 0, 0, 0.9)'
					},
					locked: false
				}

			},
			mouseWheel: false,
			nextEffect: 'fade',
			prevEffect: 'fade'
		});
	});
	/*end fancybox*/

	/*HASH*/
	jQuery(function() {
		jQuery('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					jQuery('html,body').animate({
						scrollTop: target.offset().top - 58
					}, 1000);
					return false;
				}
			}
		});
	});
	/*end hash*/
	/*BACK TO TOP*/
	function checkOffset() {
		if ($('#back-to-top').offset().top + $('#back-to-top').height() >= $('.footer').offset().top - 10)
			$('#back-to-top').css('position', 'absolute');
		if ($(document).scrollTop() + window.innerHeight < $('.footer').offset().top)
			$('#back-to-top').css('position', 'fixed'); /*restore when you scroll up*/
	}
	$(document).scroll(function() {
		checkOffset();
	});
	$('#back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('#back-to-top').stop().fadeIn(250);
		} else {
			$('#back-to-top').stop().fadeOut(250);
		}
	});
	/*end BACK TO TOP*/

	/*ASYNC CSS FILES*/
	/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
	(function(w) {
		"use strict";
		/* exported loadCSS */
		var loadCSS = function(href, before, media) {
			/*Arguments explained:*/
			/*`href` [REQUIRED] is the URL for your CSS file.*/
			/*`before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
			By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.*/
			/* `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'*/
			var doc = w.document;
			var ss = doc.createElement("link");
			var ref;
			if (before) {
				ref = before;
			} else {
				var refs = (doc.body || doc.getElementsByTagName("head")[0]).childNodes;
				ref = refs[refs.length - 1];
			}

			var sheets = doc.styleSheets;
			ss.rel = "stylesheet";
			ss.href = href;
			/*temporarily set media to something inapplicable to ensure it'll fetch without blocking render*/
			ss.media = "only x";

			/*wait until body is defined before injecting link. This ensures a non-blocking load in IE11.*/
			function ready(cb) {
				if (doc.body) {
					return cb();
				}
				setTimeout(function() {
					ready(cb);
				});
			}
			/*Inject link*/
			/*Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs*/
			/*Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/*/
			ready(function() {
				ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));
			});
			/*A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.*/
			var onloadcssdefined = function(cb) {
				var resolvedHref = ss.href;
				var i = sheets.length;
				while (i--) {
					if (sheets[i].href === resolvedHref) {
						return cb();
					}
				}
				setTimeout(function() {
					onloadcssdefined(cb);
				});
			};

			function loadCB() {
				if (ss.addEventListener) {
					ss.removeEventListener("load", loadCB);
				}
				ss.media = media || "all";
			}

			/*once loaded, set link's media back to `all` so that the stylesheet applies once it loads*/
			if (ss.addEventListener) {
				ss.addEventListener("load", loadCB);
			}
			ss.onloadcssdefined = onloadcssdefined;
			onloadcssdefined(loadCB);
			return ss;
		};
		/* commonjs*/
		if (typeof exports !== "undefined") {
			exports.loadCSS = loadCSS;
		} else {
			w.loadCSS = loadCSS;
		}
	}(typeof global !== "undefined" ? global : this));

	/*css preload*/
	/*! CSS rel=preload polyfill. Depends on loadCSS function. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT  */
	(function(w) {
		/*rel=preload support test*/
		if (!w.loadCSS) {
			return;
		}
		var rp = loadCSS.relpreload = {};
		rp.support = function() {
			try {
				return w.document.createElement("link").relList.supports("preload");
			} catch (e) {
				return false;
			}
		};

		/*loop preload links and fetch using loadCSS*/
		rp.poly = function() {
			var links = w.document.getElementsByTagName("link");
			for (var i = 0; i < links.length; i++) {
				var link = links[i];
				if (link.rel === "preload" && link.getAttribute("as") === "style") {
					w.loadCSS(link.href, link);
					link.rel = null;
				}
			}
		};

		/*if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS*/
		if (!rp.support()) {
			rp.poly();
			var run = w.setInterval(rp.poly, 300);
			if (w.addEventListener) {
				w.addEventListener("load", function() {
					w.clearInterval(run);
				});
			}
			if (w.attachEvent) {
				w.attachEvent("onload", function() {
					w.clearInterval(run);
				})
			}
		}
	}(this));
	/*end ASYNC CSS FILES*/
	/*TYPE KIT*/
	(function(d) {
		var config = {
				kitId: 'jjq4uhk',
				scriptTimeout: 3000,
				async: true
			},
			h = d.documentElement,
			t = setTimeout(function() {
				h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
			}, config.scriptTimeout),
			tk = d.createElement("script"),
			f = false,
			s = d.getElementsByTagName("script")[0],
			a;
		h.className += " wf-loading";
		tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
		tk.async = true;
		tk.onload = tk.onreadystatechange = function() {
			a = this.readyState;
			if (f || a && a != "complete" && a != "loaded") return;
			f = true;
			clearTimeout(t);
			try {
				Typekit.load(config)
			} catch (e) {}
		};
		s.parentNode.insertBefore(tk, s)
	})(document);
	/*end TYPEKIT*/

	/*CLIPBOARD*/
	var clipboard = new Clipboard('.copyclip');
	clipboard.on('success', function(e) {
		e.clearSelection();
		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);
		/*$(e.trigger).attr('title', 'Copied').tooltip('fixTitle').tooltip('show');*/

	});

	clipboard.on('error', function(e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
	});;
	/*end CLIPBAORD*/


}

/*runs everything after page loads*/
window.onload = f1;
