/**
 * Plugin soundPlayer
 * Copyright (c) <2016> <Jacques Malgrange contacter@boiteasite.fr>
 * License MIT
 */
CKEDITOR.dialog.add('soundPlayerDialog',function(editor){
	var lang=editor.lang.soundPlayer,a,b,dia;
	var soundButton=function(s){
		if(s.type==lang.typePlayer1)out='<div class="soundPlayer ui360"><a href="'+s.src+'" title="'+s.title+'">&nbsp;</a></div>';
		else if(s.type==lang.typePlayer2)out='<div class="soundPlayer mp3bt"><a class="sm2_button" href="'+s.src+'" title="'+s.title+'">&nbsp;</a></div>';
		else if(s.type==lang.typePlayer3)out='<div class="soundPlayer inlbt"><a class="inline-playable" href="'+s.src+'">'+s.nom+'</a></div>';
		return out;
	};
	return{
		title:lang.title,
		minWidth:250,
		minHeight:200,
		contents:[{
			id:'soundPlayer0',
			label:'',
			title:'',
			expand:false,
			padding:0,
			elements:[
			{
				type:'select',
				id:'type',
				label:lang.typePlayer,
				labelStyle:'line-height:1.6em;',
				style:'display:inline;',
				items:[[lang.typePlayer1],[lang.typePlayer2],[lang.typePlayer3]],
				onChange:function(){
					a=this.getValue();
					b=document.getElementById("soundPlayerImg").style;
					if(a==lang.typePlayer1)b.backgroundImage='url("'+soundPlayerUrl+'icons/player360.png")';
					else if(a==lang.typePlayer2)b.backgroundImage='url("'+soundPlayerUrl+'icons/mp3button.png")';
					else if(a==lang.typePlayer3)b.backgroundImage='url("'+soundPlayerUrl+'icons/inlineplayer.png")';
				},
				commit:function(){soundData.type=this.getValue();}
			},{
				type:'html',
				id:'typeImg',
				style:'float:right;margin-top:-40px;height:64px;width:64px;background:transparent url('+soundPlayerUrl+'icons/player360.png) no-repeat scroll center;',
				html:'<div id="soundPlayerImg">&nbsp;</div><div style="clear:both;">&nbsp;</div>'
			},{
				type:'text',
				id:'src0',
				label:lang.title,
				commit:function(){
					soundData.src=this.getValue();
					a=soundData.src.split('/');
					soundData.title=a[a.length-1];
					soundData.nom=a[a.length-1].substr(0,a[a.length-1].length-4);
					}
			},{
				type:'button',
				id:'buttonsrc',
				//hidden:'true',
				style:'display:inline-block;margin-top:10px;',
				filebrowser:
					{
					action:'Browse',
					target:'src0',
					url:editor.config.filebrowserAudioBrowseUrl || editor.config.filebrowserBrowseUrl,
					onSelect:function(fileUrl,data){
						this.getDialog().getContentElement('soundPlayer0','src0').setValue(fileUrl);
						return false;
						}
					},
				label:editor.lang.common.browseServer
			}]
		}],
		onOk:function(){
			this.commitContent();
			b=soundButton(soundData);
			editor.insertHtml(b);
			return;
		},
		onShow:function(){
			dia=CKEDITOR.dialog.getCurrent();
			dia.getContentElement('soundPlayer0','src0').setValue(soundMem[0]);
			b=document.getElementById("soundPlayerImg").style;
			if(soundMem[1].search('ui360')!=-1){
				dia.getContentElement('soundPlayer0','type').setValue(lang.typePlayer1);
				b.backgroundImage='url("'+soundPlayerUrl+'icons/player360.png")';
			}
			else if(soundMem[1].search('mp3bt')!=-1){
				dia.getContentElement('soundPlayer0','type').setValue(lang.typePlayer2);
				b.backgroundImage='url("'+soundPlayerUrl+'icons/mp3button.png")';
			}
			else if(soundMem[1].search('iplay')!=-1){
				dia.getContentElement('soundPlayer0','type').setValue(lang.typePlayer3);
				b.backgroundImage='url("'+soundPlayerUrl+'icons/inlineplayer.png")';
			}
			soundData={};
			return;
		}
	};
});
//
//var tag=document.getElementsByTagName('span'),v;
//for(v in tag){if((' '+tag[v].className+' ').indexOf(' cke_button__ckpaypal_icon ')>-1)tag[v].onclick=function(){ckpayMem=['','','','',''];};}
