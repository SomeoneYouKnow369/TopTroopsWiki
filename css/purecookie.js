// --- Config --- //
var purecookieDesc = "By using this website, you automatically accept that we use cookies."; // Description
var purecookieButton = "Continue"; // Button text
// ---        --- //

function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function cookieConsent() {
  if (!localStorage.getItem('purecookieDismiss')) {
    let container = document.createElement('div');
    container.className = "cookieConsentContainer";
    container.id = "cookieConsentContainer";

    let desc = document.createElement('div');
    desc.className = "cookieDesc";
    desc.innerText = purecookieDesc;

    let button = document.createElement('div');
    button.className = "cookieButton";
    button.innerText = purecookieButton;
    button.onclick = purecookieDismiss;

    container.appendChild(desc);
    container.appendChild(button);
    document.body.appendChild(container);

    pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() { 
  pureFadeOut("cookieConsentContainer");
  localStorage.setItem('purecookieDismiss', 'true'); // Save consent
}

window.onload = function() { cookieConsent(); };

