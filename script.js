/* ==========================================================================
   Malaysia Sports Hub — script.js
   Sticky header · Mobile menu · Smooth scroll · Back to top · Reveal · Forms
   Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initYear();
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initReveal();
    initNewsletter();
    initContactForm();
  });

  /* Current year in footer(s) */
  function initYear() {
    var nodes = document.querySelectorAll("[data-year]");
    var year = new Date().getFullYear();
    nodes.forEach(function (n) { n.textContent = year; });
  }

  /* Add shadow to header once the page scrolls */
  function initStickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Accessible mobile navigation toggle */
  function initMobileMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("primary-nav");
    if (!toggle || !menu) return;

    var close = function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Close on link click */
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    /* Close when resizing back to desktop */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) close();
    });
  }

  /* Smooth scroll for in-page anchors */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  }

  /* Back-to-top button */
  function initBackToTop() {
    var btn = document.querySelector(".to-top");
    if (!btn) return;
    var onScroll = function () {
      btn.classList.toggle("is-visible", window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Reveal on scroll via IntersectionObserver */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { obs.observe(el); });
  }

  /* Newsletter (client-side only, no backend) */
  function initNewsletter() {
    var form = document.querySelector("[data-newsletter]");
    if (!form) return;
    var note = form.querySelector(".form-note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      if (!email || !isEmail(email.value)) {
        if (note) note.textContent = "Please enter a valid email address.";
        return;
      }
      form.reset();
      if (note) note.textContent = "Thanks for subscribing! Please check your inbox to confirm.";
    });
  }

  /* Contact form (client-side validation, no backend) */
  function initContactForm() {
    var form = document.querySelector("[data-contact]");
    if (!form) return;
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      if (!name.value.trim() || !isEmail(email.value) || message.value.trim().length < 10) {
        if (status) {
          status.textContent = "Please complete all fields with a valid email and a message of at least 10 characters.";
          status.className = "form-status err";
        }
        return;
      }
      form.reset();
      if (status) {
        status.textContent = "Thank you! Your message has been received. We will respond within 2 business days.";
        status.className = "form-status ok";
      }
    });
  }

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  }
})();
