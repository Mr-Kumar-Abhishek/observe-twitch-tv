var streams = ['freecodecamp','test_channel', 'ESL_SC2'];

function construct_url(stream){
	var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + stream + '?callback=?';
	return url;
}

function get_data(d_stream){
	$.getJSON(construct_url(d_stream), function(data){
		console.log(data);
	});
}


function get_all_data(arr) {
	arr.forEach(function(element){
		get_data(element);
	});
}

$(get_all_data(streams));
