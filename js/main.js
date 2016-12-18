var streams = ['freecodecamp','test_channel', 'ESL_SC2', 'brunofin', 'comster404', 'OgamingSC2', 'cretetion', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas' ];

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
	$(".show").append("<div class='row'><div class='col-xs-4'><h4>Channel</h4></div><div class='col-xs-4'><h4>Streaming</h4></div><div class='col-xs-4'><h4>Account Status</h4></div></div>");
	arr.forEach(function(element){
		get_data(element);
	});
}

function print_html(json_data, d_stream){
	if(json_data.stream == null || json_data.stream == undefined){
		$(".show").append("<div class='row offline'><div class='col-xs-4'><p><a href='#'>" + d_stream + "</a></p></div><div class='col-xs-4 col-xs-offset-4'><p>offline</p></div>" );
	}
	else {
		$(".show").append("<div class='row online'><div class='col-xs-4'><p><a target='_blank' href='" + json_data.stream.channel.url +"'>" + d_stream + "</a></p></div><div class='col-xs-4'><p>" + json_data.stream.channel.game + "</p></div><div class='col-xs-4'><p>online</p></div>" );
	}
}
	
$(get_all_data(streams));

$("#read-all").click(function(){
	$("#reading-all").addClass("active");
	$(".online").show();
	$(".offline").show();
	$("#reading-online").removeClass("active");
	$("#reading-offline").removeClass("active");
});

$("#read-online").click(function(){
	$("#reading-online").addClass("active");
	$(".online").show();
	$(".offline").hide();
	$("#reading-offline").removeClass("active");
	$("#reading-all").removeClass("active");
});

$("#read-offline").click(function(){
	$("#reading-offline").addClass("active");
	$(".online").hide();
	$(".offline").show();
	$("#reading-online").removeClass("active");
	$("#reading-all").removeClass("active");
});

