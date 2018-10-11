window.onload = function() {
	$.ajax({
		url: '/users/list',
		type: 'GET',
		dataType: 'json',
		success: function(data){
			console.log(data);
		}
	});
}