//
// CMSUno
// Plugin Sound Player
//
UconfigNum++;

var soundPlayerUrl='uno/plugins/sound_player/soundPlayer/';

CKEDITOR.plugins.addExternal('soundPlayer',UconfigFile[UconfigNum-1]+'/../soundPlayer/');
CKEDITOR.editorConfig=function(config){
	config.extraPlugins+=',soundPlayer';
	config.toolbarGroups.push('soundPlayer');
	config.extraAllowedContent+='; div(*)[*]{*}; source(*)[*]{*}';
	if(UconfigFile.length>UconfigNum)config.customConfig=UconfigFile[UconfigNum];
};
