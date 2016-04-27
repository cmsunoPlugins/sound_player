<?php
if(!isset($_SESSION['cmsuno'])) exit();
?>
<?php
	if(strpos($Ucontent,'soundPlayer')!==false)
		{
		$Uhead .= '<script type="text/javascript" src="uno/plugins/sound_player/soundPlayer/soundmanager2/soundmanager2-jsmin.js"></script>'."\r\n";
		if(strpos($Ucontent,'ui360')!==false)
			{
			$Uhead .= '<link rel="stylesheet" type="text/css" href="uno/plugins/sound_player/soundPlayer/soundmanager2/360player.css" />'."\r\n";
			$Ufoot .= '<script type="text/javascript" src="uno/plugins/sound_player/soundPlayer/soundmanager2/berniecode-animator-min.js"></script>'."\r\n";
			$Ufoot .= '<script type="text/javascript" src="uno/plugins/sound_player/soundPlayer/soundmanager2/360player-min.js"></script>'."\r\n";
			}
		if(strpos($Ucontent,'sm2_button')!==false)
			{
			$Uhead .= '<link rel="stylesheet" type="text/css" href="uno/plugins/sound_player/soundPlayer/soundmanager2/mp3-player-button.css" />'."\r\n";
			$Ufoot .= '<script type="text/javascript" src="uno/plugins/sound_player/soundPlayer/soundmanager2/mp3-player-button-min.js"></script>'."\r\n";
			}
		if(strpos($Ucontent,'inline-playable')!==false)
			{
			$Uhead .= '<link rel="stylesheet" type="text/css" href="uno/plugins/sound_player/soundPlayer/soundmanager2/inlineplayer.css" />'."\r\n";
			$Ufoot .= '<script type="text/javascript" src="uno/plugins/sound_player/soundPlayer/soundmanager2/inlineplayer-min.js"></script>'."\r\n";
			}
		if(strpos($Ucontent,'sm2-bar-ui')!==false)
			{
			$Uhead .= '<link rel="stylesheet" type="text/css" href="uno/plugins/sound_player/soundPlayer/soundmanager2/bar-ui.css" />'."\r\n";
			$Ufoot .= '<script type="text/javascript" src="uno/plugins/sound_player/soundPlayer/soundmanager2/bar-ui-min.js"></script>'."\r\n";
			}
		$q = file_get_contents('data/'.$Ubusy.'/site.json');
		$a = json_decode($q,true);
		if(isset($a['url']))
			{
			$url = parse_url($a['url']);
			$path = $url['path'];
			}
		else $path = '/';
		$Uscript .= 'soundManager.setup({url:\''.$path.'/uno/plugins/sound_player/soundPlayer/soundmanager2/swf/\'});';
		}
?>
