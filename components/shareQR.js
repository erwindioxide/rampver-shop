// create component parent div

const shareQR = document.createElement('div');

//create link and modal
shareQR.innerHTML = `
<div class="mt-3 mb-3">
<a href="" class="text-info" data-toggle="modal" data-target="#shareQRModal">Share via QR Code</a>
</div>

<div class="modal fade" id="shareQRModal" role="dialog">
<div class="modal-dialog" role="document">
		<div class="modal-content">
				<div class="modal-header d-flex align-items-center">
						<h5 class="text-left claimHeader">
								Share this page via QR Code!
						</h5>
						<h5 class="text-secondary font-weight-bold text-right ml-auto p-2" data-dismiss="modal">
								X
						</h5>
				</div>
				<div class="modal-body">
						<div role="document">
								<div class="mx-auto text-center">
										<h5 class="claimHeader mb-3" id="QRName">
										</h5>
										<div class="mb-3">
												<img id="categoryQR" class="mx-auto rounded border-secondary border px-3 py-3" />
												<br />
										</div>
								</div>
						</div>
				</div>
		</div>
</div>
	`;

//append component to host page
document.getElementById('shareQR').appendChild(shareQR);

//generate QR Code using API
let qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=124735&data=' + encodeURI(window.location.href);
document.getElementById('categoryQR').setAttribute('src', qrUrl);
document.getElementById('QRName').innerHTML = document.title;