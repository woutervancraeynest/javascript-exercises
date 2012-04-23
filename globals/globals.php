<?php 
	//phpinfo();
	define("HTTP_HOST", "http://".$_SERVER["HTTP_HOST"]."/");
	define("INCLUDE_PATH", $_SERVER["DOCUMENT_ROOT"]);

	$page_title = basename($_SERVER['SCRIPT_NAME'], '.php');
	$page_title = str_replace('-', ' ', $page_title);
	$page_title = ucwords($page_title);

	
?>