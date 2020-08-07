// create component parent div
const foot = document.createElement('footer');

// set component class

//create component
foot.innerHTML = `
<p class="text-white text-center">Rampver Financials &copy; 2020</p>

	`;

//append component to host page
document.getElementById('footer').appendChild(foot);