function validatorFN() {
    let x = document.getElementById('fullname');
    x.value = x.value.replace(/^\s+/g, '');
    output = x.value.split(' ').join('');
    xoutput = output.search('=');
    if (xoutput != -1) {
        document.getElementById('errMsgFullName').classList.remove('d-none');
        document.getElementById('trigger').classList.add('d-none');
    } else {
        document.getElementById('trigger').classList.remove('d-none');
        document.getElementById('errMsgFullName').classList.add('d-none');
    }
}

function validatorEmail() {
    let x = document.getElementById('email');
    x.value = x.value.toLowerCase().replace(/^\s+/g, '');
    output = x.value.split(' ').join('');
    xoutput = output.search('=');
    if (xoutput != -1) {
        document.getElementById('errMsgEmail').classList.remove('d-none');
        document.getElementById('trigger').classList.add('d-none');
    } else {
        document.getElementById('trigger').classList.remove('d-none');
        document.getElementById('errMsgEmail').classList.add('d-none');
    }
}

function validatorLocation() {
    let x = document.getElementById('location');
    x.value = x.value.replace(/^\s+/g, '');
    output = x.value.split(' ').join('');
    xoutput = output.search('=');
    if (xoutput != -1) {
        document.getElementById('errMsgLocation').classList.remove('d-none');
        document.getElementById('trigger').classList.add('d-none');
    } else {
        document.getElementById('trigger').classList.remove('d-none');
        document.getElementById('errMsgLocation').classList.add('d-none');
    }
}

function validatorMessage() {
    let x = document.getElementById('message');
    x.value = x.value.replace(/^\s+/g, '');
    output = x.value.split(' ').join('');
    xoutput = output.search('=');
    if (xoutput != -1) {
        document.getElementById('errMsgMessage').classList.remove('d-none');
        document.getElementById('trigger').classList.add('d-none');
    } else {
        document.getElementById('trigger').classList.remove('d-none');
        document.getElementById('errMsgMessage').classList.add('d-none');
    }
}