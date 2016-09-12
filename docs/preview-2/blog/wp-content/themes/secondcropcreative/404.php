<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Second_Crop_Creative
 * @since Second Crop Creative 1.0
 */

get_header(); ?>

	<div id="primary" class="creative-content content-area">
		<main id="main" class="row max-1080 site-main">
			<div class="col-xs-12">

				<section class="error-404 not-found">
					<div class="row max-850 table-row">
						<div class="table-center copy-container-center">
							<h1>Opps, page not found!</h1>
							<h2>You performed an illegal procedure &ndash; don't let it happen again. Let us help you find the goods.</h2>
							<img alt="404" src="/images/404.gif">
							<div class="proxima-nova-bold txt-uppercase">
								<a type="button" class="btn btn-link" href="/photo-services">Photography</a>
								<a type="button" class="btn btn-link" href="/video-services">Video</a>
								<a type="button" class="btn btn-link" href="/design-services">Design</a>
								<a type="button" class="btn btn-link" href="/blog">Blog</a>
							</div>
						</div>
					</div>
				</section><!-- .error-404 -->
			</div><!--.col-xs-12-->
		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>