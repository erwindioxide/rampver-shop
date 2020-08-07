setTimeout(function (colors) {
    let typelink = document.querySelectorAll('.typelink');
    let tag = document.querySelectorAll('.indiv-tag');
    typelink.forEach(function (el) {
        if (el.innerHTML == 'Equity Fund') {
            el.setAttribute('href', '../funds/aggressive.html');
        } else if (el.innerHTML == 'Equity Index Fund') {
            el.setAttribute('href', '../funds/index.html');
        } else if (el.innerHTML == 'Balanced Fund') {
            el.setAttribute('href', '../funds/moderate.html');
        } else if (el.innerHTML == 'Unitized Balanced Fund') {
            el.setAttribute('href', '../funds/moderate.html');
        } else if (el.innerHTML == 'Bond Fund') {
            el.setAttribute('href', '../funds/conservative.html');
        } else if (el.innerHTML == 'Money Market Fund') {
            el.setAttribute('href', '../funds/conservative.html');
        } else {
            el.setAttribute('href', '../funds/recommended.html');
        }
    });
    tag.forEach(function (element) {
        if (element.innerHTML == 'Recommended') {
            element.innerHTML = 'Recommended';
            element.classList.add('tag-recommended');
        } else if (element.innerHTML == 'Index') {
            element.innerHTML = 'Index';
            element.classList.add('tag-index');
        } else if (element.innerHTML == 'Dollar') {
            element.classList.add('tag-dollar');
            element.innerHTML = 'Dollar';
        } else {
            element.classList.add('d-none');
            element.innerHTML = "";
        }
    });
}, 3500);