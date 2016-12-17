var streams = ['freecodecamp','test_channel', 'ESL_SC2'];

function construct_url(stream){
	var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + stream + '?callback=?';
	return url;
}

function get_data(d_stream){
	$.getJSON(construct_url(d_stream), function(data){
		console.log(data);
		print_html(data);
	});
}


function get_all_data(arr) {
	arr.forEach(function(element){
		get_data(element);
	});
}

function print_html(json_data){
	if(json_data.stream == null || json_data.stream == undefined){
		print_start("offline");
		print_end();
	}
	else {
		print_start("online");
		print_end();
	}	
}

function print_start(status){
	console.log("printing, yeah");
	$(".show").append("<div id='#"+ status +"' class='col-xs-12 col-md-6' >");
}

function print_end(){
	$(".show").append("</div>");
}

$(get_all_data(streams));
