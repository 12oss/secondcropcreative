<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<!-- PINTEREST-->
<meta name="p:domain_verify" content="d9dee012459ce944586afe1a29fc7fac"/>

<!--<link rel="stylesheet" href="/global/css/font-awesome.min.css">-->
<!--<link rel="stylesheet" type="text/css" href="/global/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/global/css/full-width.css">
<link rel="stylesheet" type="text/css" href="/global/css/prism.css">
<link rel="stylesheet" type="text/css" href="/global/css/before-after.css">
<link rel="stylesheet" type="text/css" href="/global/css/fonts.css">
<link rel="stylesheet" type="text/css" href="/global/css/extras.css">
<link rel="stylesheet" type="text/css" href="/global/css/masonry.css">-->
<link rel="stylesheet" type="text/css" href="/global/build/css/min/critical.min.css">
<!-- minified css is declared (deferred) in footer-->
<!--<link rel="stylesheet" type="text/css" href="/global/build/css/min/secondcrop.min.css">-->

	<!--favicons test-->
	<link rel="shortcut icon" href="/global/css/images/favicons/apple-touch-icon-152x152.png" />
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/global/css/images/favicons/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/global/css/images/favicons/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/global/css/images/favicons/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/global/css/images/favicons/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/global/css/images/favicons/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/global/css/images/favicons/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/global/css/images/favicons/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/global/css/images/favicons/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="/global/css/images/favicons/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="/global/css/images/favicons/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/global/css/images/favicons/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/global/css/images/favicons/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/global/css/images/favicons/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="&nbsp;" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="/global/css/images/favicons/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="/global/css/images/favicons/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="/global/css/images/favicons/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="/global/css/images/favicons/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="/global/css/images/favicons/mstile-310x310.png" />
	<!--end favicons test-->
	<script>
	//Loads Typekit after page load
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
	</script>


	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<!--html and body tag are closed in the footer file-->
<div class="container-fluid">
<!-- this container-fluid class is closed in the index.php file right after inclusion of the footer - so that the footer always sits on bottom-->
<div>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid max-1080"> 
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button data-target="#main-nav" data-toggle="collapse" class="navbar-toggle collapsed" type="button"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				<a href="/" class="navbar-brand">
					<!--<img src="/global/css/images/wordmark-alt-w.png" alt="Second Crop Creative" title="Second Crop Creative"/>-->
					<img src="/global/css/images/wordmark-alt-w.svg" alt="Second Crop Creative" title="Second Crop Creative" width="100%" />
				</a>
			</div>
			
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div id="main-nav" class="collapse navbar-collapse navbar-right proxima-nova-light">
				<ul class="nav navbar-nav" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
					<li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">About <span class="caret"></span></a>
						<ul class="dropdown-menu dropdown-menu-right dropdown-inverse" role="menu">
							<li itemprop="name"><a itemprop="url" href="/about/">About</a></li>
							<li itemprop="name"><a itemprop="url" href="/contact/">Contact</a></li>
							<li itemprop="name"><a itemprop="url" href="/blog/">Blog</a></li>
						</ul>
					</li>
					<li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Services <span class="caret"></span></a>
						<ul class="dropdown-menu dropdown-menu-right dropdown-inverse" role="menu">
							<li itemprop="name"><a itemprop="url" href="/photo-services/">Photography</a></li>
							<li itemprop="name"><a itemprop="url" href="/video-services/">Video</a></li>
							<li itemprop="name"><a itemprop="url" href="/design-services/">Design</a></li>
						</ul>
					</li>
					<li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Portfolio <span class="caret"></span></a>
						<ul class="dropdown-menu dropdown-menu-right dropdown-inverse" role="menu">
							<li><a href="/photography/">Photography</a></li>
							<li><a href="/video/">Video</a></li>
							<li><a href="/design/">Design</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse --> 
		</div>
		<!-- /.container-fluid --> 
	</nav>
</div>


