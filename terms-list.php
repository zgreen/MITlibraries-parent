<?php
/**
 * Template Name: Terms List
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
<?php 
	$args = array(
								'post_type' => 'hours',
								'meta_query' => array(
									array(
												'key' => 'is_term',
												'value' => 1,
												'compare' => '='
									)
								),
								'posts_per_page' => -1,
								'orderby' => 'menu_order',
								'order' => 'ASC'
							);							
							$termList = new WP_Query( $args );
?>
<?php while ( $termList->have_posts() ) : $termList->the_post(); ?>
	<div>
		<?php the_title(); the_meta(); ?>
	</div>

<?php endwhile; // end of the loop. ?>