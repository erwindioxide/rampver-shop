'<div class="row mt-4 mutualfunds"> { {
	#
	each this
}
} <
div class = "col-lg-4 col-md-6 mb-3" >
	<
	div class = "card h-100" >
	<
	div class = "text-center" >
	<
	img data - src = "{{imageurl}}"
alt = "{{fundname}}"
class = "previewimg lazyload"
class = "mt-3" >
	<
	/div> <
h5 class = "text-center mb-2 claimHeader mt-3 mx-2" > < a href = "./fund-details.html?fundmanagercode={{fundmanagercode}}&id={{id}}"
class = "claimHeader" > {
		{
			fundname
		}
	} < /a></h5 >
	<
	div class = "my-1 mx-3 mt-2" >
	<
	div class = "d-flex justify-content-between"
id = "taglevel" >
	<
	small class = "claimHeader mt-1" > < a href = ""
class = "claimHeader typelink" > {
		{
			type
		}
	} < /a></small >
	<
	div class = "d-flex mb-2"
id = "tags" >
	<
	small > < a class = "indiv-tag btn text-white px-2 py-1"
href = "./recommended.html" > {
		{
			recommended
		}
	} < /a></small >
	<
	small > < a class = "indiv-tag btn text-white px-2 py-1 ml-1"
href = "./indexfunds.html" > {
		{
			index
		}
	} < /a></small >
	<
	small > < a class = "indiv-tag btn text-white px-2 py-1 ml-1"
href = "./dollar.html" > {
		{
			dollar
		}
	} < /a></small >
	<
	/div> < /
	div > <
	div class = "mt-2" > < /div> <
small class = "mt-2" > 🛡️For {
	{
		riskprofile
	}
} - type investors. < /small> <
br >
	<
	small > ✔️Min.initial investment is {
		{
			initial
		}
	}. < /small> <
br >
	<
	small > ✔️Min.additional investment is {
		{
			additional
		}
	}. < /small> <
br >
	<
	div class = "mt-2" > < /div> <
small class = "claimHeader mt-3" > This fund is
for you
if : < /small> <
br >
	<
	p class = "text-justify mt-2" >
	<
	small style = "text-align: justify" > {
		{
			ffy1
		}
	} < /small> < /
	p > <
	div class = "text-center mb-3 mt-3" >
	<
	button class = "btn px-4 font-weight-bold claimHeader border"
data - toggle = "modal"
data - target = "#viewMore{{fundmanagercode}}{{id}}" > Preview < /button> <
a class = "ml-4 btn px-4 text-white font-weight-bold rfbtn"
href = "./fund-details.html?fundmanagercode={{fundmanagercode}}&id={{id}}" > See More < /a> < /
	div > <
	/div> < /
	div > <
	/div>


	<
	div class = "modal fade"
id = "viewMore{{fundmanagercode}}{{id}}"
role = "dialog" >
	<
	div class = "modal-dialog"
role = "document" >
	<
	div class = "modal-content" >
	<
	div class = "modal-header d-flex align-items-center" >
	<
	h5 class = "text-left claimHeader" > {
		{
			fundname
		}
	} < /h5> <
h5 class = "text-secondary font-weight-bold text-right ml-auto p-2"
data - dismiss = "modal" > X < /h5> < /
	div > <
	div class = "modal-body" >
	<
	div role = "document" >
	<
	div class = "modal-body" >
	<
	div class = "mb-3" >
	<
	div class = "text-center" >
	<
	img data - src = "{{imageurl}}"
class = "mt-2 previewimg rounded lazyload" >
	<
	/div> <
div class = "my-2 mx-3" >
	<
	br >
	<
	div >
	<
	div class = "d-flex mb-3"
id = "tagModal" >
	<
	small > < a class = "indiv-tag btn text-white px-2 py-1"
href = "./recommended.html" > {
		{
			recommended
		}
	} < /a></small >
	<
	small > < a class = "indiv-tag btn text-white px-2 py-1 ml-1"
href = "./indexfunds.html" > {
		{
			index
		}
	} < /a></small >
	<
	small > < a class = "indiv-tag btn text-white px-2 py-1 ml-1"
href = "./dollar.html" > {
		{
			dollar
		}
	} < /a></small >
	<
	/div> <
p class = "claimHeader" > < a href = ""
class = "claimHeader typelink" > {
		{
			type
		}
	} < /a></p >
	<
	p class = "claimHeader" > {
		{
			fundmanagername
		}
	} < /p> <
hr >
	<
	small > 🛡️For {
		{
			riskprofile
		}
	} - type investors. < /small> <
br >
	<
	small > 🕒Recommended time horizon is {
		{
			timehorizon
		}
	}. < /small> <
br >
	<
	small > ✔️Minimum initial investment is {
		{
			initial
		}
	}. < /small> <
br >
	<
	small > ✔️Minimum additional investment is {
		{
			additional
		}
	}. < /small> <
br >
	<
	small class = "claimHeader" > 📝Fund Description < /small> <
hr >
	<
	p class = "text-justify mt-2" >
	<
	small class = "text-justify" > {
		{
			introduction
		}
	} < /small> < /
	p > <
	br >
	<
	small class = "claimHeader" > 📑This fund is
for you
if : < /small> <
hr >
	<
	ul >
	<
	li >
	<
	p class = "text-justify mt-2" >
	<
	small style = "text-align: justify" > {
		{
			ffy1
		}
	} < /small> < /
	p > <
	/li> <
li >
	<
	p class = "text-justify mt-2" >
	<
	small style = "text-align: justify" > {
		{
			ffy2
		}
	} < /small> < /
	p > <
	/li> <
li >
	<
	p class = "text-justify mt-2" >
	<
	small style = "text-align: justify" > {
		{
			ffy3
		}
	} < /small> < /
	p > <
	/li> < /
	ul > <
	/div> < /
	div > <
	/div> < /
	div > <
	/div> < /
	div > <
	/div> < /
	div > <
	/div> { {
		/each}}'