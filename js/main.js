var streams = ['freecodecamp','test_channel'];

console.log(streams);

function construct_url(stream){
	var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + stream + '?callback=?';
	return url;
}

console.log(construct_url(streams[1]));
