// create component parent div
const fundDropdown = document.createElement('div');

// set component class

// dropdown
fundDropdown.innerHTML = `
<label class="claimHeader">🔎 Browse Mutual Funds: </label>
<button class="btn btn-block border dropdown-toggle text-left" type="button" id="dropdownMenuButton"
		data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Select Mutual Fund Category
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="z-index: 10">
		<a class="dropdown-item" href="../funds/recommended.html">✔️ Rampver's Recommended Funds</a>
		<a class="dropdown-item" href="../funds/all.html">All Mutual Funds</a>
		<a class="dropdown-item" href="../funds/index.html">Index Funds</a>
		<a class="dropdown-item" href="../funds/dollar.html">Dollar Funds</a>
		<hr />
		<small class="dropdown-item text-secondary font-italic">By Investor Risk Profile</small>
		<a class="dropdown-item" href="../funds/aggressive.html">For Aggressive Investor (Equity Funds)</a>
		<a class="dropdown-item" href="../funds/moderate.html">For Moderate Investor (Balanced Funds)</a>
		<a class="dropdown-item" href="../funds/conservative.html">For Conservative Investor (Bond Funds)</a>
		<hr />
		<small class="dropdown-item text-secondary font-italic">By Investment House</small>
		<a class="dropdown-item" href="../funds/soldivo.html">Soldivo Funds (SOLDIVO)</a>
		<a class="dropdown-item" href="../funds/atram.html">ATR Asset Management (ATRAM)</a>
		<a class="dropdown-item" href="../funds/pemi.html">Philequity Management (PEMI)</a>
		<a class="dropdown-item" href="../funds/slamci.html">Sun Life Asset Management (SLAMCI)</a>
		<a class="dropdown-item" href="../funds/fami.html">First Metro Asset Management (FAMI)</a>
		<a class="dropdown-item" href="../funds/pami.html">Philam Asset Management (PAMI)</a>
</div>
  `;

//append component to host page
document.getElementById('fundDropdown').appendChild(fundDropdown);