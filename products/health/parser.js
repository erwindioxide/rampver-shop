// parse url for data
function getUrlVars() {
	let vars = {};
	let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
		m,
		key,
		value
	) {
		vars[key] = value;
	});
	if (vars == {}) {
		window.location.href = './404.html';
	} else {
		return vars;
	}
}

let provider = getUrlVars()['provider'].toLowerCase();
let providerBig = getUrlVars()['provider'];
let id = getUrlVars()['id'];
let api = String('https://api.steinhq.com/v1/storages/5edb21f083c30d0425e2c456/' + provider + '?search={"id":"' + id + '"}');

// assign api data to HTML IDs
function dataFill(json) {
	document.getElementById("productName").innerHTML = json[0].productName;
	document.getElementById("imageUrl").src = json[0].imageUrl;
	document.getElementById("ageRange").innerHTML = json[0].ageRange;
	document.getElementById("issueAge").innerHTML = json[0].issueAge;
	document.getElementById("validity").innerHTML = json[0].validity;
	document.getElementById("category").innerHTML = json[0].category;
	document.getElementById("usageFreq").innerHTML = json[0].usageFreq;
	document.getElementById("coverageType").innerHTML = json[0].coverageType;
	document.getElementById("description").innerHTML = json[0].description;
	document.getElementById("access").innerHTML = json[0].access;
	document.getElementById("hospitalNetwork").href = json[0].hospitalNetwork;
	document.getElementById("roomAndBoard").innerHTML = json[0].roomAndBoard;
	document.getElementById("policyType").innerHTML = json[0].policyType;
	document.getElementById("policyDelivery").innerHTML = json[0].policyDelivery;
	document.getElementById("transferability").innerHTML = json[0].transferability;

	// covType hide
	let covType = json[0].coverage;
	if (covType == "Not Applicable") {
		document.getElementById("covTypeCont").classList.add("d-none");
	} else {
		document.getElementById("coverage").innerHTML = json[0].coverage;
	};

	// split and feed mainBenefit list
	let benefits = json[0].mainBenefits;
	let benefitList = benefits.split(";");
	for (let i = 0; i < benefitList.length; i++) {
		let li = document.createElement('li');
		li.className = "mb-1 text-left";
		li.textContent = benefitList[i];
		document.getElementById('benefits').appendChild(li);
	};

	// split and feed dentalPackage list
	let dental = json[0].dentalPackage;
	let dentalList = dental.split(";");
	if (dentalList[0] == "Not Applicable") {
		document.getElementById('dentalCont').classList.add("d-none");
	} else {
		for (let i = 0; i < dentalList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = dentalList[i];
			document.getElementById('dentalPackage').appendChild(li);
		};
	};

	// split and feed accidentalBenefit list
	let acc = json[0].accidentalBenefit;
	let accList = acc.split(";");
	if (accList[0] == "Not Applicable") {
		document.getElementById('accidentalCont').classList.add("d-none")
	} else {
		for (let i = 0; i < accList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = accList[i];
			document.getElementById('accidentalBenefit').appendChild(li);
		};
	};

	//add-to-cart
	document.getElementById("sticky").setAttribute("data-img", json[0].imageUrl);
	document.getElementById("sticky").setAttribute("data-name", json[0].productName);
	document.getElementById("sticky").setAttribute("data-price", json[0].price);

}

// fill data
let output = fetch(api)
	.then((response) => response.json())
	.then((json) => {
		// this.dataFill(json);
		this.dataFill(json);
		console.log(json);
	})