/* agadir trip — vanilla JS: nav, reveal, sticky CTA, booking form → WhatsApp */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var WA_NUMBER = "212649638249";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- sticky mobile CTA ---- */
  var sticky = document.querySelector(".sticky-cta");
  if (sticky) {
    document.body.classList.add("has-sticky-cta");
    var close = sticky.querySelector(".cta-close");
    if (close) {
      close.addEventListener("click", function () {
        sticky.classList.add("dismissed");
        document.body.classList.remove("has-sticky-cta");
      });
    }
  }

  /* ---- booking form ---- */
  var form = document.getElementById("booking-form");
  if (form) {
    var errBox = form.querySelector(".form-error");
    var okBox = document.getElementById("booking-success");
    var mailtoLink = document.getElementById("booking-mailto");

    function val(name) {
      var el = form.elements[name];
      return el ? el.value.trim() : "";
    }

    function buildMessage() {
      var lines = [
        "Hello agadir trip! I'd like to request a booking:",
        "",
        "• Experience: " + val("experience"),
        "• Date: " + val("date"),
        "• Adults: " + (val("adults") || "1") + (val("children") && val("children") !== "0" ? " · Children: " + val("children") : ""),
        "• Hotel / pickup point: " + val("pickup"),
        "• Name: " + val("name")
      ];
      if (val("phone")) lines.push("• My phone/WhatsApp: " + val("phone"));
      if (val("email")) lines.push("• Email: " + val("email"));
      if (val("notes")) lines.push("• Requests: " + val("notes"));
      lines.push("", "Please confirm availability and the final price. Thank you!");
      return lines.join("\n");
    }

    function validate() {
      var required = ["experience", "date", "adults", "pickup", "name"];
      var missing = [];
      required.forEach(function (n) {
        var el = form.elements[n];
        if (el && !el.value.trim()) missing.push(el.closest(".form-field").querySelector("label").textContent.replace("*", "").trim());
      });
      if (missing.length) {
        errBox.textContent = "Please fill in: " + missing.join(", ") + ".";
        errBox.classList.add("show");
        return false;
      }
      errBox.classList.remove("show");
      return true;
    }

    function updateMailto() {
      if (!mailtoLink) return;
      var subject = "Booking request — " + (val("experience") || "Agadir excursion");
      mailtoLink.href = "mailto:agadirtrip@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(buildMessage());
    }

    form.addEventListener("input", updateMailto);
    updateMailto();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(buildMessage());
      window.open(url, "_blank", "noopener");
      if (okBox) {
        okBox.classList.add("show");
        try { okBox.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (err) { /* ignore */ }
      }
    });

    if (mailtoLink) {
      mailtoLink.addEventListener("click", function () {
        if (okBox && validate()) okBox.classList.add("show");
      });
    }

    /* preselect experience from ?experience= */
    try {
      var pre = new URLSearchParams(window.location.search).get("experience");
      if (pre && form.elements.experience) {
        var sel = form.elements.experience;
        for (var i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value === pre) { sel.selectedIndex = i; break; }
        }
        updateMailto();
      }
    } catch (err) { /* older browsers: ignore */ }
  }
})();
