// create component parent div
const navbar = document.createElement('div');

//create component
navbar.innerHTML = `
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
<div class="container-fluid d-flex">
		<div class="navbar-brand" href="#">
			<a href="../index.html">	<img src="../../img/rf-logo.png"/></a>
		</div>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto order-2">
						<li class="nav-item">
								<a class="nav-link" href="../">Home</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="https://rampver.com/why-rampver/">About us</a>
						</li>

						<li class="nav-item">
								<a class="nav-link" href="../inquire/mutual-funds.html?id=1">Inquire now!</a>
						</li>

						<li class="nav-item">
								<a class="nav-link" href="https://rampver.com/seedbox/" target="_blank">Invest Online!</a>
						</li>

						<li class="dropdown nav-item" style="z-index: 5;">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Mutual Funds<b class="caret"></b></a>
						<ul class="dropdown-menu mt-0" style="background-color: #124735; !important; border:none;">
						<li class="nav-item nav-link"><a href="../funds/aggressive.html">For Aggressive Investor</a></li>
						<li class="nav-item nav-link"><a href="../funds/moderate.html">For Moderately-Aggressive Investor</a></li>
						<li class="nav-item nav-link"><a href="../funds/conservative.html">For Conservative Investor</a></li>
						<li class="nav-item nav-link"><a href="../risk-profiler/quiz.html">Discover your Risk Profile</a></li>
						</ul>
						</li>

						<li class="dropdown nav-item" style="z-index: 5;">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Online Tools<b class="caret"></b></a>
						<ul class="dropdown-menu mt-0" style="background-color: #124735; !important; border:none;">
						<li class="nav-link"><a href="../risk-profiler/quiz.html">Investor Risk Profiler Quiz</a></li>
						<li class="nav-link"><a href="../graph/projector.html">Investment Projection Tool</a></li>
						</ul>
						</li>
						<li class="dropdown nav-item" style="z-index: 5;">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Learning<b class="caret"></b></a>
						<ul class="dropdown-menu mt-0" style="background-color: #124735; !important; border:none;">
						<li class="nav-link"><a href="https://medium.com/rampver-reads" target="_blank">Rampver Reads</a></li>
						<li class="nav-link"><a href="https://rampver.com/radio" target="_blank">Rampver Radio</a></li>
						<li class="nav-link"><a href="../inquire/ebook.html?id=1">Free E-Book!</a></li>
						</ul>
						</li>

						<li class="dropdown nav-item" style="z-index: 5;">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">Support<b class="caret"></b></a>
						<ul class="dropdown-menu" style="background-color: #124735; !important; border:none;">
						<li class="nav-link"><a href="../support/daily-navps.html">NAVPS</a></li>
						<li class="nav-link"><a href="../support/forms.html">Forms and Guidelines</a></li>
						<li class="nav-link"><a href="../support/ffs.html">Fund Fact Sheets</a></li>
						<li class="nav-link"><a href="../support/scheduler.html">Schedule a Call</a></li>
						<li class="nav-link"><a href="../support/soa-request.html">SOA Request</a></li>
						<li class="nav-link"><a href="../support/all-search.html">Search Fund</a></li>
						</ul>
						</li>

						<li class="nav-item">
								<a class="nav-link" href="https://rampver.com/privacy/" target="_blank">Privacy</a>
						</li>
		</div>
</div>
</nav>
	`;

//append component to host page
document.getElementById('navbarSet').appendChild(navbar);