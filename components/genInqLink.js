// create component parent div
const genInqLink = document.createElement('div');

// create the sticky btn and modal component
genInqLink.innerHTML = `
<div class="text-center">
<a href="" class="mx-auto btn btn-lg rfbtn text-white my-3" data-toggle="modal" data-target="#inquireform">Start Investing!</a>
</div>
  <div class="modal fade" id="inquireform" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header d-flex align-items-center">
        <h4 class="text-left claimHeader">Start investing in Mutual Funds!</h4>
        <h5 class="text-secondary font-weight-bold text-right ml-auto p-2" data-dismiss="modal">
          X
        </h5>
      </div>
      <div class="modal-body">
        <p class="text-secondary font-italic">
          Get in touch and we'll help you step-by-step.
        </p>
        <div role="document">
          <form action="https://rampver.com//mfinquiry-needhelp/#wpcf7-f12057-o1" method="post">
            <div style="display: none;">
              <input type="hidden" name="_wpcf7" value="12057" />
              <input type="hidden" name="_wpcf7_version" value="5.1.6" />
              <input type="hidden" name="_wpcf7_locale" value="en_US" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f12057-o1" />
              <input type="hidden" name="_wpcf7_container_post" value="0" />
            </div>
            <input type="hidden" name="urlGet" id="urlGet" />
            <div class="form-group">
              <label for="salutation" class="claimHeader">Salutation*</label>
              <select class="form-control" id="salutation" name="salutation" required>
                <option>-</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="M.">M.</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fullname" class="claimHeader">Full Name*</label>
              <input type="text" class="form-control" name="fullname" required placeholder="Full Name" id="fullname"
                onkeyup="validatorFN()" />
              <small class="d-none text-danger font-italic" id="errMsgFullName">Invalid input.</small>
            </div>
            <div class="form-group">
              <label for="email" class="claimHeader">Email Address*</label>
              <input type="email" class="form-control" name="email" required placeholder="Email Address" id="email"
                onkeyup="validatorEmail()" />
              <small class="d-none text-danger font-italic" id="errMsgEmail">Invalid input.</small>
            </div>
            <div class="form-group">
              <label for="contact" class="claimHeader">Contact Number*</label>
              <input type="number" class="form-control" required placeholder="Contact Number" name="contact"
                id="contact" />
            </div>
            <div class="form-group">
              <label for="birthday" class="claimHeader">Birthday</label>
              <input type="date" class="form-control" name="birthday" />
            </div>
            <div class="form-group">
              <label for="location" class="claimHeader">Location</label>
              <input type="text" class="form-control" placeholder="Location" name="location" id="location"
                onkeyup="validatorLocation()" />
              <small class="d-none text-danger font-italic" id="errMsgLocation">Invalid input.</small>
            </div>
            <div class="form-group">
              <label for="rampverclient" class="claimHeader">Are you currently Rampver Financials client?</label>
              <select name="rampverclient" id="rampverclient" class="form-control">
                <option value="No">No, I am not a Rampver client, yet.</option>
                <option value="Yes">Yes, I am a Rampver client.</option>
                <option value="Not Sure">I am not sure.</option>
              </select>
            </div>
            <div class="form-group">
              <label for="referral" class="claimHeader">How did you know about Rampver Financials?</label>
              <select name="referral" id="referral" class="form-control">
                <option value="--">-</option>
                <option value="FB/ Social Media">Facebook/ Social Media</option>
                <option value="IMG">IMG - International Marketimg Group
                </option>
                <option value="Youtube">Youtube Videos</option>
                <option value="Website">Rampver Website</option>
                <option value="Blogs/Articles">Blogs/Articles</option>
                <option value="Talks/Conferences/Live Events">Talks/Conferences/Live Events</option>
                <option value="Google Search">Google Search</option>
                <option value="Friend/Family Referral">Friend/Family Referral</option>
                <option value="Advertisements">Advertisements</option>
                <option value="Flyers/Printed Materials">Flyers/Printed Materials </option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div class="form-group">
              <label class="claimHeader" for="modeofcontact">What is your preferred mode of contact?
              </label>
              <select name="modeofcontact" id="modeofcontact" class="form-control">
                <option>-</option>
                <option value="Email">Email</option>
                <option value="SMS/Text Message">SMS/Text Message</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Messenger/Viber/ Whatsapp">Messenger/Viber/ Whatsapp</option>
                <option value="Personal Meeting">Personal Meeting</option>
              </select>
            </div>
            <div class="form-group">
              <label class="claimHeader" for="question">Any questions for us?
              </label>
              <br />
              <textarea type="text" name="question" class="form-control" cols="30" rows="5" placeholder="Your Message"
                id="message" onkeyup="validatorMessage()"></textarea>
              <small class="d-none text-danger font-italic" id="errMsgMessage">Invalid input.</small>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="consent" id="consent" required />
              <small class="text-secondary font-italic form-check-label" for="consent">
                I agree to receive regular updates, promotions, and
                recommendations regarding investments, insurance,
                healthcare, and personal finance from Rampver Financials.
                Visit
                <a href="rampver.com/privacy">rampver.com/privacy</a>
                for more info.
              </small>
            </div>
            <div class="text-center mt-4 mb-4">
              <input type="submit" id="trigger" value="I want to invest!"
                class="text-white btn rfbtn font-weight-bold btn-lg" onclick="submitDetails()" />
              <br />
              <img src="../img/pulse-load.gif" class="d-none" id="pulse-load" style="width: 12%" alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;

//append component to host page
document.getElementById('genInqLink').appendChild(genInqLink);

function submitDetails() {
	document.getElementById('pulse-load').classList.remove('d-none');
	setTimeout(function submitDetails() {
		document.getElementById('pulse-load').classList.add('d-none');
	}, 15000);
}