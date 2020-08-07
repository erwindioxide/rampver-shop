window.cookieconsent.initialise({
    container: document.getElementById('cookieconsent'),
    palette: {
        popup: {
            background: '#124735'
        },
        button: {
            background: '#e0e0e0'
        }
    },
    revokable: false,
    onStatusChange: function (status) {
        console.log(this.hasConsented() ? 'enable cookies' : 'disable cookies');
    },
    position: 'bottom-left',
    theme: 'edgeless',
    domain: 'https://rampver.com',
    secure: true,
    content: {
        header: 'Cookies used on the website!',
        message: 'This website uses cookies to improve your experience.',
        dismiss: 'Got it!',
        allow: 'Allow cookies',
        deny: 'Decline',
        link: 'Learn more',
        href: 'https://rampver.com/privacy',
        close: '&#x274c;',
        policy: 'Cookie Policy',
        target: '_blank'
    }
});