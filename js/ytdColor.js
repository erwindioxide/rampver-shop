setTimeout(function (elements) {
	let ytd = document.querySelectorAll('.ytd');
	ytd.forEach(function (element) {
		if (element.innerHTML > 0) {
			element.classList.add('text-rampver');
		} else if (element.innerHTML < 0) {
			element.classList.add('text-danger');
		} else if (element.innerHTML == 0) {
			element.classList.add('text-danger');
		} else {
			""
		}
	});
}, 3500);