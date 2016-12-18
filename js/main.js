var streams = ['freecodecamp','test_channel', 'ESL_SC2'];

function construct_url(stream){
	var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + stream + '?callback=?';
	return url;
}

function get_data(d_stream){
	$.getJSON(construct_url(d_stream), function(data){
		console.log(data);		
		print_html(data, d_stream);
	});
}


function get_all_data(arr) {
	$(".show").append("<div class='row'><div class='col-xs-4'><h4>Channel</h4></div><div class='col-xs-4'><h4>Game Played</h4></div><div class='col-xs-4'><h4> online/offline</h4></div></div>");
	arr.forEach(function(element){
		get_data(element);
	});
}

function print_html(json_data, d_stream){
	if(json_data.stream == null || json_data.stream == undefined){
		$(".show").append("<div class='row'><div id='offline' class='col-xs-4'><p><a href='#'>" + d_stream + "</a></p></div><div class='col-xs-4 col-xs-offset-4'><p>offline</p></div>" );
	}
	else {
		$(".show").append("<div class='row'><div id='online' class='col-xs-4'><p><a href='#'>" + d_stream + "</a></p></div><div class='col-xs-4'><p>" + json_data.stream.channel.game + "</p></div><div class='col-xs-4'><p>online</p></div>" );
	}
}
	
$(get_all_data(streams));
