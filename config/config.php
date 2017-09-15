<?php 
#### PLEASE DO NOT EDIT THIS FILE MANUALLY ####
#### If you want to edit the configuration, do it by logging in to the admin interface ####
#### Editing manually may cause this file to be corrupted and the site will not load as a result ####
		
### Main Settings ###
// Website Name
$config["website_name"] = "My Video Site";
// Website Slogan
$config["website_slogan"] = "Powerfull YouTube API PHP Video Script";
// Website Url with slash		  
$config["website_url"] = "http://www.apnieyesp.com/"; 
// Website Description
$config["meta_description"] = "Watch tons of videos";
// Website Keywords
$config["meta_keywords"] = "tube3, youtube, videos, funny videos, youtube api, youtube script";
### Player Settings ###
// [true / false] if false, will play in a regular flash player 
$config["youtube_player"] = false; 
// [true / false] -> only if using custom player			 	 
$config["enable_player_playlist"] = false; 
$config["enable_home_player"] = true;
$config["cplayer_skin"] = "dangdang";
$config["player_custom_plugins_home"] = "&playlist=right&playlistsize=310&controlbar=over&autostart=true&repeat=list&stretching=fill";
$config["player_custom_plugins_detail"] = "&controlbar=over&autostart=true&repeat=list&stretching=fill";
$config["player_custom_plugins_detail_playlist"] = "&playlist=bottom&playlistsize=200&controlbar=over&autostart=true&repeat=list&stretching=fill";
// [true / false]
$config["enable_player_colors"] = true;  
						
### Cache Settings ###
$config["xml_cache_enable"] = true;
// Cache XML Directory Path with slash
$config["xml_cache_dir"] = "cache/xml/";		  
// Cache HTML Directory Path with slash
$config["html_cache_dir"] = "cache/html/";
$config["logs_cache_dir"] = "cache/logs/";
$config["categories_cache_timeout"] = 86400;	
$config["xml_cache_timeout"] = 86400;
// [1 to 50] how often cache tags on every page load
$config["tags_cache_timeout"] = 86400; 
// [1 to 50] how often cache stats on every page load			 
$config["stats_cache_timeout"] = 900; 
// [1 to 50] how often cache new videos for a specific tag, 1 will cache on every page load						 
$config["rss_cache_timeout"] = 86400;  
  
### Display Settings ###
// [on / off] 
$config["default_filter_value"] = "on";
$config["web_default_language"] = "en";
$config["list_per_page"] = 16;
$config["list_on_home_page"] = 16;
$config["list_on_feed_page"] = 16;
$config["user_uploaded_list_per_page"] = 6;
$config["user_favorites_list_per_page"] = 4;
$config["related_videos_position"] = "sidebar";
$config["active_template"] = "sunny-day";
$config["active_theme"] = "";
$config["view_setting"] = "grid";
$config["sort_videos_by"] = "relevance";

### Tags Settings ###
$config["tag_cloud_enabled"] = true; 
// Maximum tags to display						 
$config["tags_max_display"] = 30; 
//tags font size settings
$config["tag_max_size"] = 150;
$config["tag_min_size"] = 90;
### Comments ###
$config["local_comments_enabled"] = true;
$config["local_comments_per_page"] = 10;
$config["youtube_comments_enabled"] = true;
### Links ###
$config["links_enabled"] = true;
$config["website_logo"] = "avadalogo.png";

### Longtail video ads ###
$config["longtail_enabled"] = false;
$config["longtail_channel"] = "";
$config["longtail_js"] = "";
### Tracking Code ###
$config["header_code"] = "";
$config["footer_code"] = "";
$config["video_upload_enabled"] = "false";
$config["yt_username"] = "";
$config["yt_password"] = "";
$config["yt_dev_key"] =  "AIzaSyCvFIWeFMEs0mQE919Fwj0qw_Ofs3XKHEs";
$config["video_language_specific"] =  "all";
$config["default_category_id"] =  "";
$config["dropdown_limit"] =  "10";
$config["keyword_filter_enabled"] = "false";
$config["content_filter_enabled"] = "";
$config["keyword_filter_match"] = "exact";
$config["virtual_keyboard_enabled"] = "false";
$config["virtual_keyboard_default_language"] = "0";
$config["virtual_keyboard_layout_code"] = "ALBANIAN";
$config["skysa_bar_enabled"] = "false";
$config["skysa_bar_code"] = "";
$config["debug_mode_enabled"] = "false";
$config["shoutbox_enabled"] = "false";
$config["shoutbox_code"] = "";
$config["meebo_enabled"] = "";
$config["meebo_opening_header"] = "";
$config["meebo_closing_footer"] = "";
$config["search_term"] = "";
$config["search_log_enabled"] = "true";
$config["empty_categories_notification_enabled"] = "false";
$config["facebook_enabled"] = "true";
$config["facebook_connections"] = "";
$config["facebook_stream"] = "true";
$config["facebook_page_url"] = "http://www.facebook.com/cnewsworld";
$config["wibiya_enabled"] = "false";
$config["wibiya_code"] = "";
$config["flickr_enabled"] = "false";
$config["num_flickr_display"] = "12";
$config["flickr_auto_keyword"] = "1";
$config["rd_flickr_type"] = "user_id";
$config["flickr_search_mode"] = "exact";
$config["flickr_key"] = "";
$config["flickr_api_key"] = "";
$config["flickr_secret"] = "";
$config["twitter_enabled"] =  "true";
$config["rd_twitter_type"] =  "author";
$config["twitter_key"] =  "cnewsworld";
$config["twitter_search_mode"] =  "exact";
$config["num_twitter_display"] = "5";

?>