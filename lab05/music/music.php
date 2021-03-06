<!DOCTYPE html>
<html lang="en">

	<head>
		<title>Music Library</title>
		<meta charset="utf-8" />
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/5/music.jpg" type="image/jpeg" rel="shortcut icon" />
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/labResources/music.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		<h1>My Music Page</h1>
		
		<!-- Ex 1: Number of Songs (Variables) -->
		<?php
			$song_count = 5678;
		?> 
		<p>
			I love music.
			I have <?= $song_count?> total songs,
			which is over <?= (int) ($song_count/10) ?> hours of music!
		</p>

		<!-- Ex 2: Top Music News (Loops) -->
		<!-- Ex 3: Query Variable -->
		<?php 
			$newspages = $_GET["newspages"]; 
			if (isset($newspages)) {
				
			}
		?>
		<div class="section">
			<h2>Billboard News</h2>
			<ol>
				<?php 
					$newspages = $_GET["newspages"];
					if (!(isset($newspages))) { 
						$newspages = 5;
					}

					for ($news_page = 11 ; $news_page > 11 - $newspages; $news_page--) { ?>
						<li><a href="https://www.billboard.com/archive/article/2019<?= $news_page?>">2019-<?= $news_page?></a></li>
					<?php } ?>
			</ol>
		</div>

		<!-- Ex 4: Favorite Artists (Arrays) -->
		<!-- Ex 5: Favorite Artists from a File (Files) -->
		<div class="section">
			<h2>My Favorite Artists</h2>
			
			<ol>
				<?php 
					$favorite_artists = file("favorite.txt");
					for ($i = 0 ; $i < count($favorite_artists) ; $i++) { ?>
						<li><a href="http://en.wikipedia.org/wiki/<?=$favorite_artists[$i]?>"><?=$favorite_artists[$i]?></a></li>
				<?php } ?> 
			</ol>
		</div>
		
		<!-- Ex 6: Music (Multiple Files) -->
		<!-- Ex 7: MP3 Formatting -->
		<div class="section">
			<h2>My Music and Playlists</h2>

			<ul id="musiclist">
				<?php 
					$musics = glob("lab5/musicPHP/songs/*.mp3");

					for ($i = count($musics) - 1 ; $i > 0 ; $i--) {
						for ($j = 0 ; $j < $i ; $j++) {
							if (filesize($musics[$j]) < filesize($musics[$j+1])) {
								$temp = $musics[$j];
								$musics[$j] = $musics[$j+1];
								$musics[$j+1] = $temp;
							}
						}
					}

					foreach ($musics as $music) { ?>
						<li class="mp3item">
							<a href="<?=$musics?>"><?=basename($music)?></a> (<?=(int) (filesize($music)/1000)?> KB)
						</li>
					<?php } ?>

				<!-- Exercise 8: Playlists (Files) -->

				<?php
					$m3us = glob("lab5/musicPHP/songs/*.m3u");
					foreach ($m3us as $m3u) { ?>
						<li class="playlistitem"><?=basename($m3u)?>:
							<ul>
								<?php 
									$mp3_array = array();
									foreach (file($m3u) as $line) {
									if (strpos($line, "#") === false) {
										$mp3_array[] = $line;
									}
								}
								shuffle($mp3_array) ?>
								<?php foreach($mp3_array as $mp3_array_item) { ?>
									<li><?= $mp3_array_item ?></li>
								<?php } ?>
							</ul>
					<?php } ?>
			</ul>
		</div>

		<div>
			<a href="https://validator.w3.org/check/referer">
				<img src="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/w3c-html.png" alt="Valid HTML5" />
			</a>
			<a href="https://jigsaw.w3.org/css-validator/check/referer">
				<img src="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/w3c-css.png" alt="Valid CSS" />
			</a>
		</div>
	</body>
</html>
