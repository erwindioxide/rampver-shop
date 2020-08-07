// create component parent div
const fbSharerBtn = document.createElement('div');

//create component
fbSharerBtn.innerHTML = `
<a target="_blank"
class="btn text-white ml-3" style="border-radius: 0 !important; background-color: #3b5998" id="fbSharerBtn">
<i class="fab fa-facebook text-white mr-2" style="font-size: 100%;"></i> Share on Facebook</a>
	`;

//append component to host page
document.getElementById('fbSharer').appendChild(fbSharerBtn);

// append dynamic href 
document.getElementById('fbSharerBtn').href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href.split('?')[0];