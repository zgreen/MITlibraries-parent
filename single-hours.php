<?php
/**
 * Template Name: Single Hours Template
 */

get_header();

$hours = get_field('description');

?>

<?php 
	echo '<div id=hours>'.$hours.'</div>';
?>

<?php get_footer(); ?>