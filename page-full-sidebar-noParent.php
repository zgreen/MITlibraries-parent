<?php
/**
 * Template Name: 2/3 Width w/ Sidebar, No Parent Breadcrumb
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
 
$pageRoot = getRoot($post);
$section = get_post($pageRoot);
$isRoot = $section->ID == $post->ID;


get_header(); ?>

		<?php get_template_part('inc/breadcrumbs', 'noChild'); ?>

		<?php while ( have_posts() ) : the_post(); ?>
		
		<div id="stage" class="inner row group" role="main">
	
			<div class="title span12 group">
				<?php if ($isRoot): ?>
				<h1><?php echo $section->post_title; ?></h1>
				<?php else: ?>
				<h1><a href="<?php echo get_permalink($section->ID) ?>"><?php echo $section->post_title; ?></a></h1>
				<?php endif; ?>
			</div>
			
			<div id="content" class="span12" group>
				<?php get_template_part( 'content', 'pagefull' ); ?>
			</div>
		
		</div>
		
		<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>