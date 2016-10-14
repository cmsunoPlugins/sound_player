<?php
session_start(); 
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])!='xmlhttprequest') {sleep(2);exit;} // ajax request
if(!isset($_POST['unox']) || $_POST['unox']!=$_SESSION['unox']) {sleep(2);exit;} // appel depuis uno.php
?>
<?php
include('../../config.php');
include('lang/lang.php');
// ********************* actions *************************************************************************
if (isset($_POST['action']))
	{
	switch ($_POST['action'])
		{
		// ********************************************************************************************
		case 'plugin': ?>
		<div class="blocForm">
			<h2><?php echo T_("Sound Player");?></h2>
			<div style="float:right;width:128px;height:auto;margin:0 30px 10px;">
				<a href="http://www.schillmania.com/projects/soundmanager2/" target="_blank">
					<img src="uno/plugins/sound_player/soundmanager2.png" alt="SoundManager2" title="SoundManager2" />
					<br />SoundManager2
				</a>
			</div>
			<p><?php echo T_("This plugin allows you to adds one or more music player into the page content.");?></p>
			<p><?php echo T_("It is used with the button") .'<img src="uno/plugins/sound_player/soundPlayer/icons/soundPlayer.png" style="border:1px solid #aaa;padding:3px;margin:0 6px -5px;border-radius:2px;" />' . T_("added to the text editor when the plugin is enabled.");?></p>
			<p><?php echo T_("The file should be in mp3.");?></p>
			<div style="clear:both;"></div>
		</div>
		<?php break;
		// ********************************************************************************************
		}
	clearstatcache();
	exit;
	}
?>
