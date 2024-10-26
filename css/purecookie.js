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
};
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
};

function cookieConsent() {
  if (('purecookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieDesc">' + purecookieDesc + ' </div><div class="cookieButton" onClick="purecookieDismiss();">' + purecookieButton + '</div></div>';
	pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() { 
  pureFadeOut("cookieConsentContainer");
}

window.onload = function() { cookieConsent(); };
