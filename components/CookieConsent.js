import CookieConsent from "react-cookie-consent";

const CookieConsentBanner = () => (
  <CookieConsent
    location="bottom"
    buttonText="Elfogadom"
    cookieName="myAwesomeCookieName"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
  >
    Ez a weboldal sütiket használ a jobb felhasználói élmény érdekében.
  </CookieConsent>
);

export default CookieConsentBanner;
