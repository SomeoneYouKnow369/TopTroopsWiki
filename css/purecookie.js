document.addEventListener("DOMContentLoaded", function () {
    const purecookieDesc = "By using this website, you automatically accept that we use cookies.";
    const purecookieButton = "Continue";

    function cookieConsent() {
        if (!localStorage.getItem('purecookieDismiss')) {
            console.log("Showing cookie consent");  // Log to confirm execution

            // Create container for cookie consent
            const consentContainer = document.createElement('div');
            consentContainer.id = 'cookieConsentContainer';
            consentContainer.className = 'cookieConsentContainer';

            // Description text
            const descDiv = document.createElement('div');
            descDiv.className = 'cookieDesc';
            descDiv.textContent = purecookieDesc;

            // Button
            const button = document.createElement('div');
            button.className = 'cookieButton';
            button.id = 'cookieButton';
            button.textContent = purecookieButton;
            button.addEventListener("click", purecookieDismiss);

            // Append elements
            consentContainer.appendChild(descDiv);
            consentContainer.appendChild(button);
            document.body.appendChild(consentContainer);
        } else {
            console.log("Cookie consent already dismissed");
        }
    }

    function purecookieDismiss() {
        const consentContainer = document.getElementById('cookieConsentContainer');
        if (consentContainer) consentContainer.style.display = 'none';
        localStorage.setItem('purecookieDismiss', 'true');
    }

    cookieConsent(); // Initialize the cookie consent banner
});
