<?php
	include('globals/globals.php');

	$template_id = "TOC";
	$page_title = "My Javascript Lessons";
	
	include("globals/head.php");
	include("globals/masthead.php");
?>
<article>
	<h2>Exercises</h2>
	<ol>
		<li><a href="/exercises/show_hide.html">Show/Hide</a></li>
		<li>
			<ul>
				<li><a href="/exercises/countdown.html">Countdown to Black Friday</a></li>
				<li><a href="/exercises/countdown-ac.html">Countdown to Black Friday (Alex's Version)</a></li>
			</ul>
		</li>
		<li>
			<ul>
				<li><a href="/exercises/fibonacci.html">Fibonacci Sequence</a></li>
				<li><a href="/exercises/fibonacci-ac.html">Fibonacci Sequence (Alex's Version)</a></li>
			</ul>
		</li>
		<li><a href="/exercises/slider.html">Slider</a></li>
	</ol>

	<h2>Notes from DOM Scripting</h2>
	<ol>
		<li><a href="notes/chapter2.html">Chapter 2</a></li>
		<li><a href="notes/chapter3.html">Chapter 3</a></li>
		<li><a href="/notes/chapter4.html">Chapter 4</a></li>
	</ol>
</article>
<?php
	include("globals/footer.php");
?>
