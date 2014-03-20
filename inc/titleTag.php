<?php
	if (!is_child_theme()) {
		wp_title( '|', true, 'right' );
	}
	else {
		if(is_home()){
			echo bloginfo("name"); echo " | "; echo bloginfo("description");
		}
		else {
			wp_title( '|', true, 'right' );
		}
	}
?>