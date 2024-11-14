(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

window.addEventListener("orientationchange", () => {
    location.reload(true)
});

// color padding-top
document.addEventListener("DOMContentLoaded", function() {
    function isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function isMacOS() {
        return navigator.platform === 'MacIntel' && !navigator.userAgent.includes('Mobile');
    }

    let bannerTeam = document.querySelector('.banner__team');
    let bannerDate = document.querySelector('.banner__date');
    let bannerTime = document.querySelector('.banner__time');
    let bannerInfoTop = document.querySelector('.banner__info-top');

    if (!isIOS() && !isMacOS() && bannerInfoTop && bannerDate && bannerTime && bannerTeam) {
        bannerTeam.classList.add('noios-padding');
        bannerDate.classList.add('noios-padding');
        bannerTime.classList.add('noios-padding');
        bannerInfoTop.classList.add('noios-padding');
    }
});