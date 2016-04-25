/**
 * Plugin soundPlayer
 * Copyright (c) <2016> <Jacques Malgrange contacter@boiteasite.fr>
 * License MIT
 */
var soundMem=['',''];
if(typeof soundPlayerUrl==='undefined') var soundPlayerUrl='/';

CKEDITOR.plugins.add('soundPlayer',{
	icons:'soundPlayer',
	lang: 'en,fr',
	init:function(editor){
		var lang=editor.lang.soundPlayer;
		editor.addContentsCss(this.path+'soundPlayer.css' );
		editor.addCommand('soundPlayerDialog',new CKEDITOR.dialogCommand('soundPlayerDialog'));
		editor.ui.addButton('soundPlayer',{
			label:lang.description,
			command:'soundPlayerDialog',
			toolbar:'cmsuno'
		});
		editor.on('doubleclick',function(evt){
			var el=evt.data.element;
			if(!el.isReadOnly()&&el.is('div')&&el.getAttribute('class').search('soundPlayer')!=-1){
				soundMem=[el.firstChild.getAttribute('href'),el.getAttribute('class')];
				evt.data.dialog='soundPlayerDialog';
			}
		});
		CKEDITOR.dialog.add('soundPlayerDialog',this.path+'dialogs/soundPlayer.js');
	}
});
