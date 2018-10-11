window.onload = function() {
	$.ajax({
		url: '/users/list',
		type: 'GET',
		dataType: 'json',
		success: function(data){
			// const list = document.querySelector('.list')
			// data.map((e, i) => {
			// 	const item = document.createElement('div');
			// 	item.innerText = `${e.name} - ${e.type}`;
			// 	list.appendChild(item);
			// })
			console.log(data);
			$.each(data, (i, e) => {
				const $item = $('<div class="item"></div>').text(`${e.name} - ${e.type}`);
				$('.list').append($item);
			})
		}
	});
}