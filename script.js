(function () {
  const PHONE = "+16822730964";

  function openSMS() {
    const msg =
      "DFW Emergency Roadside — I need help.\n" +
      "Location:\n" +
      "Vehicle (year/make/model):\n" +
      "Issue (lockout/jump/flat):\n" +
      "Notes:";
    const url = `sms:${PHONE}?&body=${encodeURIComponent(msg)}`;
    window.location.href = url;
  }

  function copyTemplate() {
    const tpl =
`DFW Emergency Roadside — Help Request
Location:
Vehicle (year/make/model):
Issue (lockout/jump/flat):
Notes:`;
    navigator.clipboard.writeText(tpl).then(() => {
      const btn = document.getElementById("copyInfo");
      if (btn) {
        const old = btn.textContent;
        btn.textContent = "Copied ✅";
        setTimeout(() => (btn.textContent = old), 1400);
      }
    }).catch(() => {
      alert("Couldn’t copy — please copy manually:\n\n" + tpl);
    });
  }

  // OPTIONAL: Google Ads conversion (requires gtag snippet in <head>)
  function fireCallConversion(label) {
    if (typeof window.gtag !== "function") return;
    // Replace 'AW-XXXXXXXXX/XXXXXXXXXXX' with your real conversion ID/label
    // window.gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXX' });

    // Helpful for debugging in dev tools
    window.gtag('event', 'call_click', { event_category: 'engagement', event_label: label });
  }

  // Attach to every call button
  document.querySelectorAll(".call-btn").forEach((el) => {
    el.addEventListener("click", () => {
      const label = el.getAttribute("data-call") || "call";
      fireCallConversion(label);
    });
  });

  document.getElementById("textBtn")?.addEventListener("click", openSMS);
  document.getElementById("textBtn2")?.addEventListener("click", openSMS);
  document.getElementById("stickyTextBtn")?.addEventListener("click", openSMS);
  document.getElementById("copyInfo")?.addEventListener("click", copyTemplate);
})();
