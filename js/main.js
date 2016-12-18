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
	arr.forEach(function(element){
		get_data(element);
	});
}

function print_html(json_data, d_stream){
	if(json_data.stream == null || json_data.stream == undefined){
		$(".show").append("<div class='row'><div id='offline' class='col-xs-4'><h4><a href='#'>" + d_stream + "</a></h1></div><div class='col-xs-4 col-xs-offset-4'><h4>offline</h4></div>" );
	}
	else {
		$(".show").append("<div class='row'><div id='online' class='col-xs-4'><h4><a href='#'>" + d_stream + "</a></h1></div><div class='col-xs-4'><h4>" + json_data.stream.channel.game + "</h4></div><div class='col-xs-4'><h4>online</h4></div>" );
	}
}
	
$(get_all_data(streams));
