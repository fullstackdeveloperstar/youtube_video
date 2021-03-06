//############ PLEASE update .min.js version of this script after updating this file !!!!


/*==================================================

  Cookie functions

  ==================================================*/

function setCookie(name, value, expires, path, domain, secure) {

    document.cookie= name + "=" + escape(value) +

        ((expires) ? "; expires=" + expires.toGMTString() : "") +

        ((path) ? "; path=" + path : "") +

        ((domain) ? "; domain=" + domain : "") +

        ((secure) ? "; secure" : "");

}

function getCookie(name) {

    var dc = document.cookie;

    var prefix = name + "=";

    var begin = dc.indexOf("; " + prefix);

    if (begin == -1) {

        begin = dc.indexOf(prefix);

        if (begin != 0) return null;

    } else {

        begin += 2;

    }

    var end = document.cookie.indexOf(";", begin);

    if (end == -1) {

        end = dc.length;

    }

    return unescape(dc.substring(begin + prefix.length, end));

}

function deleteCookie(name, path, domain) {

    if (getCookie(name)) {

        document.cookie = name + "=" +

            ((path) ? "; path=" + path : "") +

            ((domain) ? "; domain=" + domain : "") +

            "; expires=Thu, 01-Jan-70 00:00:01 GMT";

    }

}



function getElementsByClass(searchClass,node,tag) {

	var classElements = new Array();

	if ( node == null )

		node = document;

	if ( tag == null )

		tag = '*';

	var els = node.getElementsByTagName(tag);

	var elsLen = els.length;

	var pattern = new RegExp("(^|\\\\s)"+searchClass+"(\\\\s|$)");

	for (i = 0, j = 0; i < elsLen; i++) {

		if ( pattern.test(els[i].className) ) {

			classElements[j] = els[i];

			j++;

		}

	}

	return classElements;

}

function countLinks(){

	var links = document.getElementById('links');

    var plinks = getElementsByClass("plinks");

    return plinks.length;

}

function addLink()

{

	var linksCount = countLinks();

	var doc = document;

	var f = doc.getElementById('links');

	el = doc.createElement("p");

	el = f.appendChild(el);

	el.className = "plinks";

	el = doc.createElement("div");

	el = f.appendChild(el); 

	el.className = "settingTitle";

	el.innerText = "Link Title";

	el = doc.createElement("input");

	el = f.appendChild(el);

	el.id = "ad_link_title["+linksCount+"]";

	el.name = "ad_link_title["+linksCount+"]";

	el.type = "text";

	el.className = "input";

	el = doc.createElement("div");

	el = f.appendChild(el);

	el.className = "settingTitle";

	el.innerText = "Link URL";

	el = doc.createElement("input");

	el = f.appendChild(el);

	el.id = "ad_link_url["+linksCount+"]";

	el.name = "ad_link_url["+linksCount+"]";

	el.type = "text";

	el.className = "input";

	el = doc.createElement("br");

	el = f.appendChild(el);

	el = doc.createElement("br");

	el = f.appendChild(el);

}

function setThemes(tpl){

	ajaxGet('ajax/dropdown.themes.php?tpl=','ajax_themes', tpl, false);

}

function setThemeScreenshot(tpl){

	var img = document.getElementById("theme_screenshot");

	var screenshot = "../templates/"+tpl+"/screenshot.jpg";

	img.src = screenshot;

}

function setSkinThumb(div_id,skin){

	var skin_thumb = document.getElementById(div_id);

	skin_thumb.src = "../player/skins/thumbs/"+skin+".png";

}

function togglePlayerColors(div_id,colorsEnabled) {

	var colors = document.getElementById(div_id);

	if(colorsEnabled == "true") {

		colors.style.display = "block";

	}else{

		colors.style.display = "none";

	}

	

}

function revertDefaults(configName) {





	if(configName == "player-colors") {



		

		var default_player_backcolor = document.getElementById("default_player_backcolor").value;

		var default_player_frontcolor = document.getElementById("default_player_frontcolor").value;

		var default_player_lightcolor = document.getElementById("default_player_lightcolor").value;

		var default_player_screencolor = document.getElementById("default_player_screencolor").value;

		

		document.getElementById("player_backcolor").value = default_player_backcolor;

		document.getElementById("player_frontcolor").value = default_player_frontcolor;

		document.getElementById("player_lightcolor").value = default_player_lightcolor;

		document.getElementById("player_screencolor").value = default_player_screencolor;

		

		document.getElementById("player_backcolor").style.backgroundColor = '#'+default_player_backcolor;

		document.getElementById("player_frontcolor").style.backgroundColor = '#'+default_player_frontcolor;

		document.getElementById("player_lightcolor").style.backgroundColor = '#'+default_player_lightcolor;

		document.getElementById("player_screencolor").style.backgroundColor = '#'+default_player_screencolor;

		

		//$('#txtBoxID').css('background-color', '#ffff00');

		/*player_backcolor.value = default_player_backcolor.value;

		putOBJxColor6('player_backcolor','player_backcolor_sample',player_backcolor.value);



		player_frontcolor.value = default_player_frontcolor.value;

		putOBJxColor6('player_frontcolor','player_frontcolor_sample',player_frontcolor.value);



		player_lightcolor.value = default_player_lightcolor.value;

		putOBJxColor6('player_lightcolor','player_lightcolor_sample',player_lightcolor.value);



		player_screencolor.value = default_player_screencolor.value;

		putOBJxColor6('player_screencolor','player_screencolor_sample',player_screencolor.value);*/



	}else if(configName == "player-plugins-home") {



		var player_custom_plugins_home = document.getElementById("player_custom_plugins_home");

		var default_player_custom_plugins_home = document.getElementById("default_player_custom_plugins_home");

		player_custom_plugins_home.value = default_player_custom_plugins_home.value;



	}else if(configName == "player-plugins-detail") {



		var player_custom_plugins_detail = document.getElementById("player_custom_plugins_detail");

		var default_player_custom_plugins_detail = document.getElementById("default_player_custom_plugins_detail");

		player_custom_plugins_detail.value = default_player_custom_plugins_detail.value;



	}else if(configName == "player-plugins-detail-playlist") {



		var player_custom_plugins_detail_playlist = document.getElementById("player_custom_plugins_detail_playlist");

		var default_player_custom_plugins_detail_playlist = document.getElementById("default_player_custom_plugins_detail_playlist");

		player_custom_plugins_detail_playlist.value = default_player_custom_plugins_detail_playlist.value;

	}

}

function checkUpdates(){

	var ajaxVersionInfo = document.getElementById("ajaxVersionInfo");

	ajaxVersionInfo.innerHTML = '<div class="error">Checking version...</div>';

	ajaxGet('ajax/check_updates.php','ajaxVersionInfo', false, false);

}



function setSampleColor(color_id, sample_id, str_){

		str_ = str_.toLowerCase();

    	var length;

		if(str_.charAt(0) == '#')

			str_ = str_.slice(1,str_.length);



    	length = str_.length;

    	// the user enter less than 6 characters

    	if (length != 6){

        		alert ("You must enter 6 values");

        		return false;

      	}

        	

      	counter = 0;

      	// while we haven't test all value

      	while (counter < length){

           str_coupe = str_.charAt(counter) 

            		

           // isNan test if the value is a number

           if (isNaN(str_coupe))

           {

           			// we translate the letter into Unicode

                str_pas_num = str_.charCodeAt(counter)

                			

                if ( (str_pas_num < 97) || (str_pas_num > 102))

                {

                    alert("Invalid HexaDecimal Value");				

                    return false;

                } 

           }

           counter = counter + 1;

       }

	   if(str_.charAt(0) != '#')

			str_ = '#' + str_;



	   str_ = str_.toUpperCase();

       putOBJxColor6(color_id,sample_id,str_);

}		


$(document).ready( function() {
	
	
	var navigation = document.getElementById("navigation-filter");
	navigation.onclick = function (evt) {
		// Event tweaks, since IE wants to go its own way...
		var event = evt || window.event;
		var target = event.target || event.srcElement;
		var kword_id = target.getAttribute("title") + "\n\n";
		
		if ( kword_id > 0 ) {
			//alert('ajax/tools.php?task=delete_keyword&id='+kword_id);
			ajaxGet('ajax/tools.php?task=delete_keyword&id='+kword_id, 'navigation-filter', false, 'block-removing-keyword-filter');
			return false;
		}
	}
	
	$("input#filepc").filestyle({ 
          image: "images/choose-file.gif",
          imageheight : 22,
          imagewidth : 82,
          width : 200
     });
});



	function set_cache_variables(cache_block) {
		if ( cache_block == 'categories_cache' ) {
			var categories_cache_timeout_opt = $('#categories_cache_timeout_opt').val();
			if ( categories_cache_timeout_opt == '' ) {
				$('#categories_cache_timeout').show();
				$('#categories_seconds').show();
				$('#categories_setting_title').show();
			} else {
				$('#categories_cache_timeout').hide();
				$('#categories_seconds').hide();
				$('#categories_setting_title').hide();
			}
		} else if ( cache_block == 'xml_cache' ) {
			var xml_cache_timeout_opt = $('#xml_cache_timeout_opt').val();
			if ( xml_cache_timeout_opt == '' ) {
				$('#xml_cache_timeout').show();
				$('#xml_seconds').show();
				$('#xml_setting_title').show();
			} else {
				$('#xml_cache_timeout').hide();
				$('#xml_seconds').hide();
				$('#xml_setting_title').hide();
			}
		} else if ( cache_block == 'tags_cache' ) {
			var tags_cache_timeout_opt = $('#tags_cache_timeout_opt').val();
			if ( tags_cache_timeout_opt == '' ) {
				$('#tags_cache_timeout').show();
				$('#tags_seconds').show();
				$('#tags_setting_title').show();
			} else {
				$('#tags_cache_timeout').hide();
				$('#tags_seconds').hide();
				$('#tags_setting_title').hide();
			}
		} else if ( cache_block == 'stats_cache' ) {
			var stats_cache_timeout_opt = $('#stats_cache_timeout_opt').val();
			if ( stats_cache_timeout_opt == '' ) {
				$('#stats_cache_timeout').show();
				$('#stats_seconds').show();
				$('#stats_setting_title').show();
			} else {
				$('#stats_cache_timeout').hide();
				$('#stats_seconds').hide();
				$('#stats_setting_title').hide();
			}
		} else if ( cache_block == 'rss_cache' ) {
			var rss_cache_timeout_opt = $('#rss_cache_timeout_opt').val();
			if ( rss_cache_timeout_opt == '' ) {
				$('#rss_cache_timeout').show();
				$('#rss_seconds').show();
				$('#rss_setting_title').show();
			} else {
				$('#rss_cache_timeout').hide();
				$('#rss_seconds').hide();
				$('#rss_setting_title').hide();
			}
		}
	}
	
	function logo_resize()
		{
			var img = document.getElementById( 'mylogo' );

			if ( img == null ) {
			} else {
				if( img.width > 400 )
				{
				  ratio      = 400   / img.width ;
				  img.width  = 400 ;
				  img.height  = ratio * img.height ;
				}
			}
			
		}
	
	function add_new_keyword() {
		document.config.submit();
	}

	
	function show_block_keyword_list() {
		/*$('#block_keyword_list').toggle();
		return false;*/
	}
	
	function rename_folder() {
		$('#install_block').html('Loading ...');
		$.ajax({
		  url: 'ajax/rename.php',
		  success: function(data) {
			$('#install_block').html(data);
		  }
		});
	}
	
	function set_keyword_search_mode() {
		var search_type = $("#twitter_search_mode").val();
		if ( search_type == 'keyword') {
			$('#keyword_search_mode').show();
			$('#twitter_search_mode2').show();
		} else {
			$('#keyword_search_mode').hide();
			$('#twitter_search_mode2').hide();
		}
	}
	
	function set_facebook_app_id() {
		if($('#facebook_comments_enabled').val() == "false")
		{
			$('#facebook_app_id_mode').hide();
			$('#facebook_app_id').hide();
		}
		else
		{
			$('#facebook_app_id_mode').show();
			$('#facebook_app_id').show();
		}
	}
	
	function set_flickr_keyword_search_mode() {
		var search_type = $("#rd_flickr_type").val();
		if ( search_type == 'keyword') {
			$('#flickr_keyword_search_mode').show();
			$('#flickr_search_mode').show();
		} else {
			$('#flickr_keyword_search_mode').hide();
			$('#flickr_search_mode').hide();
		}
	}
	
	function remove_tags() {
		var num_tags	= document.getElementById('txt_num_tags').value;
		
		if ( isNaN(num_tags) || num_tags == '') {
			alert('Please specify with numeric value.');
		} else if ( num_tags <= 0 ) {
			alert('Please specify with positive numeric value.');
		} else {
			ajaxGet('ajax/tools.php?task=remove_tags&num='+num_tags, 'block-tags2-cloud', false, 'block-removing-tags-log' , '' , 60000);// 60 secs timeout 
			
		}
	}
	
	function DeleteAllVideoComments(video_id) {
		ajaxGet('ajax/comments_local.php?vid='+video_id+'&rmcms=1', 'local_comments', false, 'block-loading-remove-all-comments');
	}
	