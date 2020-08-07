// create component parent div
const shareQR_indivFund = document.createElement('div');

// set component class
shareQR_indivFund.className = 'mb-3';

//create link and modal
shareQR_indivFund.innerHTML = `
<a href="" class="text-info mb-3" data-toggle="modal" data-target="#shareQR">Share this fund via QR Code</a>

<div class="modal fade" id="shareQR" role="dialog">
	<div class="modal-dialog" role="document">
			<div class="modal-content">
					<div class="modal-header d-flex align-items-center">
							<h5 class="text-left claimHeader">
									Share this Fund via QR Code!
							</h5>
							<h5 class="text-secondary font-weight-bold text-right ml-auto p-2"
									data-dismiss="modal">
									X
							</h5>
					</div>
					<div class="modal-body">
							<div role="document">
									<div class="mx-auto text-center">
											<h5 class="claimHeader mb-3" id="QRName"></h5>
											<div class="mb-3">
													<img id="fundQR"
															class="mx-auto rounded border-secondary border px-3 py-3" />
													<br />
											</div>
									</div>
							</div>
					</div>
			</div>
	</div>
</div>
	`;

//append component to host page
document.getElementById('shareQR_indivFund').appendChild(shareQR_indivFund);