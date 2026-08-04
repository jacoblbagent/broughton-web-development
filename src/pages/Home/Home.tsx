import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
import "./Home.css";
import "../../cms-mobile.css";

const towns = [
  "Brevard",
  "Hendersonville",
  "Asheville",
  "Matthews",
  "Pisgah Forest",
  "Fletcher",
  "Mills River",
  "Etowah",
  "Rosman",
  "Lake Toxaway",
  "Penrose",
];

const palette = ["#0d9488", "#16a34a", "#2563eb", "#7c3aed"];

const problemQuotes = [
  "I just want a simple website that looks good on phones, loads fast, and lets me update my own hours. I don't need a marketing agency or a monthly retainer.",
  "Every quote I got was $8,000+ with a bunch of stuff I didn't need. I just wanted something clean that works.",
  "My site was built five years ago and it shows. It's slow, broken on phones, and I can't update anything myself.",
  "I called three agencies and all of them tried to sell me on SEO packages and social media management. I just want a website.",
  "I've been putting this off for two years because it felt overwhelming. Turns out it didn't have to be.",
  "My current site was built by a friend of a friend years ago and now I can't even log in to make changes.",
  "I lost a customer who said our site looked 'unprofessional' on their phone. That stung.",
  "Every time Google updates something, my site drops to page four. I don't understand why my site is invisible.",
  "I asked my nephew to build my site. He did his best, but it's not something I can manage on my own.",
  "I spent $5,000 on a site two years ago and I still can't update my own menu without emailing the developer.",
  "The last developer ghosted me after launch. I'm scared of getting burned again.",
  "My photos look great on Instagram but tiny and blurry on my own website. Makes no sense.",
  "I've had three different people touch my website and it looks like a Frankenstein project.",
  "Every agency wants me to commit to a 12-month contract. What if I just want a site and not a subscription?",
  "I'm still getting leads from Yelp and Facebook instead of my own website. Something's wrong with that picture.",
];

// --- Wireframe mockups ---
const accent = "var(--color-accent)";
const accentMuted = "color-mix(in srgb, var(--color-accent) 25%, transparent)";
const accentDim = "color-mix(in srgb, var(--color-accent) 12%, transparent)";
const warmTint = "color-mix(in srgb, #d97706 20%, transparent)";
const greenTint = "color-mix(in srgb, #16a34a 20%, transparent)";
const blueTint = "color-mix(in srgb, #2563eb 20%, transparent)";
const purpleTint = "color-mix(in srgb, #7c3aed 20%, transparent)";

function CafeWireframe() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="3" fill="var(--color-surface)" />
      {/* Logo + nav */}
      <rect width="320" height="22" fill={accent} opacity="0.9" />
      <rect x="10" y="5" width="32" height="10" rx="2" fill="var(--color-bg)" opacity="0.9" />
      <rect x="200" y="7" width="24" height="5" rx="1.5" fill="var(--color-bg)" opacity="0.5" />
      <rect x="228" y="7" width="24" height="5" rx="1.5" fill="var(--color-bg)" opacity="0.5" />
      <rect x="256" y="7" width="24" height="5" rx="1.5" fill="var(--color-bg)" opacity="0.5" />
      <rect x="286" y="5" width="24" height="10" rx="3" fill="var(--color-bg)" opacity="0.7" />
      {/* Hero banner */}
      <rect x="0" y="22" width="320" height="70" fill={warmTint} />
      <rect x="30" y="36" width="120" height="7" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="30" y="48" width="90" height="4" rx="1.5" fill="var(--color-border)" opacity="0.6" />
      <rect x="30" y="60" width="70" height="10" rx="3" fill={accentMuted} />
      <rect x="230" y="34" width="80" height="46" rx="3" fill="color-mix(in srgb, #92400e 30%, transparent)" />
      {/* Tabs */}
      <rect x="0" y="92" width="320" height="14" fill="var(--color-bg)" />
      <rect x="10" y="95" width="40" height="6" rx="2" fill={accentMuted} />
      <rect x="58" y="95" width="40" height="6" rx="2" fill="var(--color-border)" />
      <rect x="106" y="95" width="50" height="6" rx="2" fill="var(--color-border)" />
      {/* Menu cards row */}
      <rect x="8" y="112" width="98" height="56" rx="3" fill={accentDim} />
      <rect x="12" y="116" width="90" height="26" rx="2" fill="color-mix(in srgb, var(--color-text-secondary) 10%, transparent)" />
      <rect x="12" y="148" width="40" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="12" y="156" width="24" height="4" rx="2" fill="var(--color-border)" />
      <rect x="50" y="154" width="20" height="6" rx="2" fill={accentMuted} />
      <rect x="112" y="112" width="98" height="56" rx="3" fill={accentDim} />
      <rect x="116" y="116" width="90" height="26" rx="2" fill="color-mix(in srgb, var(--color-text-secondary) 10%, transparent)" />
      <rect x="116" y="148" width="40" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="116" y="156" width="24" height="4" rx="2" fill="var(--color-border)" />
      <rect x="154" y="154" width="20" height="6" rx="2" fill={accentMuted} />
      <rect x="216" y="112" width="98" height="56" rx="3" fill={accentDim} />
      <rect x="220" y="116" width="90" height="26" rx="2" fill="color-mix(in srgb, var(--color-text-secondary) 10%, transparent)" />
      <rect x="220" y="148" width="40" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="220" y="156" width="24" height="4" rx="2" fill="var(--color-border)" />
      <rect x="258" y="154" width="20" height="6" rx="2" fill={accentMuted} />
      {/* Accordion */}
      <rect x="8" y="174" width="304" height="8" rx="2" fill={accentDim} />
      <rect x="16" y="176" width="60" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="298" y="175" width="8" height="5" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      {/* Footer */}
      <rect width="320" height="8" y="192" fill={accent} opacity="0.6" />
    </svg>
  );
}

function ServiceWireframe() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="3" fill="var(--color-surface)" />
      {/* Nav with button */}
      <rect x="0" y="0" width="320" height="20" fill="var(--color-bg)" />
      <rect x="10" y="5" width="36" height="8" rx="2" fill={accent} />
      <rect x="200" y="6" width="22" height="5" rx="1.5" fill="var(--color-border)" />
      <rect x="226" y="6" width="22" height="5" rx="1.5" fill="var(--color-border)" />
      <rect x="252" y="6" width="22" height="5" rx="1.5" fill="var(--color-border)" />
      <rect x="284" y="4" width="28" height="10" rx="3" fill={accentMuted} />
      {/* Hero banner */}
      <rect x="0" y="20" width="320" height="60" fill={blueTint} />
      <rect x="30" y="30" width="100" height="7" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="30" y="42" width="140" height="4" rx="1.5" fill="var(--color-border)" opacity="0.5" />
      <rect x="30" y="56" width="70" height="10" rx="3" fill={accentMuted} />
      <rect x="230" y="32" width="60" height="8" rx="2" fill={accentMuted} />
      <rect x="230" y="44" width="50" height="4" rx="1.5" fill="var(--color-border)" opacity="0.5" />
      {/* Feature cards with icons */}
      <rect x="8" y="88" width="98" height="40" rx="3" fill={accentDim} />
      <circle cx="24" cy="100" r="7" fill={accentMuted} />
      <rect x="38" y="96" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="38" y="104" width="56" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="112" y="88" width="98" height="40" rx="3" fill={accentDim} />
      <circle cx="128" cy="100" r="7" fill={accentMuted} />
      <rect x="142" y="96" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="142" y="104" width="56" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="216" y="88" width="98" height="40" rx="3" fill={accentDim} />
      <circle cx="232" cy="100" r="7" fill={accentMuted} />
      <rect x="246" y="96" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="246" y="104" width="56" height="3" rx="1.5" fill="var(--color-border)" />
      {/* Testimonial */}
      <rect x="8" y="134" width="304" height="22" rx="3" fill={accentDim} />
      <rect x="60" y="140" width="200" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="80" y="148" width="140" height="3" rx="1.5" fill="var(--color-border)" />
      {/* CTA banner */}
      <rect x="0" y="162" width="320" height="24" fill={accentDim} />
      <rect x="80" y="170" width="60" height="5" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="200" y="168" width="50" height="10" rx="3" fill={accentMuted} />
      {/* Footer */}
      <rect width="320" height="8" y="192" fill="var(--color-border)" opacity="0.3" />
    </svg>
  );
}

function RetailWireframe() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="3" fill="var(--color-surface)" />
      {/* Top bar: logo + search + cart + account */}
      <rect x="0" y="0" width="320" height="22" fill={accent} opacity="0.85" />
      <rect x="10" y="5" width="30" height="8" rx="2" fill="var(--color-bg)" opacity="0.9" />
      <rect x="80" y="6" width="60" height="6" rx="3" fill="var(--color-bg)" opacity="0.25" />
      <circle cx="160" cy="9" r="2" fill="var(--color-bg)" opacity="0.3" />
      <rect x="268" y="5" width="10" height="10" rx="2" fill="var(--color-bg)" opacity="0.5" />
      <rect x="286" y="5" width="10" height="10" rx="2" fill="var(--color-bg)" opacity="0.5" />
      <rect x="304" y="5" width="8" height="10" rx="2" fill="var(--color-bg)" opacity="0.5" />
      {/* Secondary nav */}
      <rect x="0" y="22" width="320" height="8" fill="var(--color-bg)" />
      <rect x="20" y="24" width="30" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="56" y="24" width="30" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="92" y="24" width="30" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="128" y="24" width="50" height="3" rx="1.5" fill="var(--color-border)" />
      {/* Category filters */}
      <rect x="8" y="34" width="28" height="14" rx="3" fill={accentMuted} />
      <rect x="40" y="34" width="28" height="14" rx="3" fill={accentDim} />
      <rect x="72" y="34" width="28" height="14" rx="3" fill={accentDim} />
      <rect x="104" y="34" width="28" height="14" rx="3" fill={accentDim} />
      {/* Product cards */}
      <rect x="8" y="54" width="98" height="106" rx="3" fill={accentDim} />
      <rect x="12" y="58" width="90" height="50" rx="3" fill={greenTint} />
      <rect x="12" y="114" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="12" y="122" width="24" height="3" rx="1.5" fill="var(--color-border)" />
      {/* Stars */}
      <rect x="12" y="130" width="44" height="3" rx="1.5" fill={accentMuted} />
      <rect x="12" y="138" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="12" y="148" width="90" height="8" rx="2" fill={accentMuted} opacity="0.4" />
      {/* Sale badge */}
      <rect x="76" y="54" width="22" height="10" rx="2" fill={accentMuted} />
      <rect x="112" y="54" width="98" height="106" rx="3" fill={accentDim} />
      <rect x="116" y="58" width="90" height="50" rx="3" fill={warmTint} />
      <rect x="116" y="114" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="116" y="122" width="24" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="116" y="130" width="44" height="3" rx="1.5" fill={accentMuted} />
      <rect x="116" y="138" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="116" y="148" width="90" height="8" rx="2" fill={accentMuted} opacity="0.4" />
      <rect x="216" y="54" width="98" height="106" rx="3" fill={accentDim} />
      <rect x="220" y="58" width="90" height="50" rx="3" fill={blueTint} />
      <rect x="220" y="114" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="220" y="122" width="24" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="220" y="130" width="44" height="3" rx="1.5" fill={accentMuted} />
      <rect x="220" y="138" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="220" y="148" width="90" height="8" rx="2" fill={accentMuted} opacity="0.4" />
      {/* Footer */}
      <rect width="320" height="6" y="194" fill="var(--color-border)" opacity="0.25" />
    </svg>
  );
}

function EventWireframe() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="3" fill="var(--color-surface)" />
      {/* Nav */}
      <rect x="0" y="0" width="320" height="20" fill={purpleTint} />
      <rect x="10" y="5" width="34" height="8" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="200" y="6" width="22" height="5" rx="1.5" fill="var(--color-border)" />
      <rect x="226" y="6" width="22" height="5" rx="1.5" fill="var(--color-border)" />
      <rect x="252" y="6" width="22" height="5" rx="1.5" fill="var(--color-border)" />
      <rect x="284" y="4" width="28" height="10" rx="3" fill={accentMuted} />
      {/* Hero banner with date badge */}
      <rect x="0" y="20" width="320" height="54" fill={purpleTint} />
      <rect x="20" y="30" width="100" height="6" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="20" y="40" width="160" height="4" rx="1.5" fill="var(--color-border)" opacity="0.5" />
      <rect x="20" y="56" width="60" height="8" rx="2" fill={accentMuted} />
      <rect x="250" y="26" width="22" height="22" rx="3" fill={accentMuted} opacity="0.5" />
      <rect x="256" y="32" width="10" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="256" y="38" width="10" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      {/* Upcoming events heading */}
      <rect x="10" y="80" width="60" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="10" y="88" width="80" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="280" y="82" width="30" height="6" rx="2" fill={accentMuted} />
      {/* Event cards */}
      <rect x="8" y="98" width="98" height="68" rx="3" fill={accentDim} />
      <rect x="14" y="104" width="28" height="12" rx="2" fill={accentMuted} />
      <rect x="18" y="106" width="20" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="14" y="122" width="60" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="14" y="130" width="44" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="14" y="150" width="60" height="6" rx="2" fill={accentMuted} />
      <rect x="112" y="98" width="98" height="68" rx="3" fill={accentDim} />
      <rect x="118" y="104" width="28" height="12" rx="2" fill={accentMuted} />
      <rect x="122" y="106" width="20" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="118" y="122" width="60" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="118" y="130" width="44" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="118" y="150" width="60" height="6" rx="2" fill={accentMuted} />
      <rect x="216" y="98" width="98" height="68" rx="3" fill={accentDim} />
      <rect x="222" y="104" width="28" height="12" rx="2" fill={accentMuted} />
      <rect x="226" y="106" width="20" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="222" y="122" width="60" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="222" y="130" width="44" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="222" y="150" width="60" height="6" rx="2" fill={accentMuted} />
      {/* Accordion FAQ */}
      <rect x="8" y="172" width="304" height="8" rx="2" fill={accentDim} />
      <rect x="16" y="174" width="80" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="298" y="173" width="8" height="5" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="8" y="183" width="304" height="8" rx="2" fill={accentDim} />
      <rect x="16" y="185" width="80" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="298" y="184" width="8" height="5" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      {/* Footer */}
      <rect width="320" height="5" y="195" fill="var(--color-border)" opacity="0.25" />
    </svg>
  );
}

function DashboardWireframe() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="3" fill="var(--color-surface)" />
      {/* Sidebar */}
      <rect x="0" y="0" width="34" height="200" fill={accent} opacity="0.85" />
      <rect x="8" y="8" width="18" height="6" rx="2" fill="var(--color-bg)" opacity="0.9" />
      <rect x="7" y="40" width="20" height="20" rx="4" fill="var(--color-bg)" opacity="0.15" />
      <rect x="7" y="68" width="20" height="20" rx="4" fill="var(--color-bg)" opacity="0.3" />
      <rect x="7" y="96" width="20" height="20" rx="4" fill="var(--color-bg)" opacity="0.15" />
      <rect x="7" y="124" width="20" height="20" rx="4" fill="var(--color-bg)" opacity="0.15" />
      <rect x="7" y="152" width="20" height="20" rx="4" fill="var(--color-bg)" opacity="0.15" />
      {/* Top header */}
      <rect x="34" y="0" width="286" height="24" fill="var(--color-bg)" />
      <rect x="44" y="8" width="80" height="6" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="190" y="6" width="50" height="10" rx="3" fill={accentDim} />
      <circle cx="262" cy="10" r="4" fill={accentMuted} />
      <circle cx="278" cy="10" r="4" fill="var(--color-border)" />
      <rect x="294" y="6" width="16" height="8" rx="3" fill={accentMuted} opacity="0.3" />
      {/* Stat cards */}
      <rect x="42" y="32" width="60" height="34" rx="3" fill={accentDim} />
      <rect x="48" y="36" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="48" y="46" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="48" y="56" width="14" height="3" rx="1.5" fill={greenTint} opacity="0.6" />
      <rect x="108" y="32" width="60" height="34" rx="3" fill={greenTint} />
      <rect x="114" y="36" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="114" y="46" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="114" y="56" width="14" height="3" rx="1.5" fill={accentDim} opacity="0.6" />
      <rect x="174" y="32" width="60" height="34" rx="3" fill={warmTint} />
      <rect x="180" y="36" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="180" y="46" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="180" y="56" width="14" height="3" rx="1.5" fill={accentDim} opacity="0.6" />
      <rect x="240" y="32" width="72" height="34" rx="3" fill={blueTint} />
      <rect x="246" y="36" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="246" y="46" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="246" y="56" width="14" height="3" rx="1.5" fill={accentDim} opacity="0.6" />
      {/* Tabs */}
      <rect x="42" y="74" width="50" height="14" rx="3" fill={accentMuted} />
      <rect x="98" y="74" width="50" height="14" rx="3" fill={accentDim} />
      <rect x="154" y="74" width="50" height="14" rx="3" fill={accentDim} />
      {/* Table */}
      <rect x="42" y="94" width="270" height="90" rx="3" fill={accentDim} />
      <rect x="46" y="98" width="262" height="12" rx="2" fill={accentMuted} />
      <rect x="52" y="101" width="30" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="100" y="101" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="160" y="101" width="50" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="240" y="101" width="30" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="52" y="118" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="100" y="118" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="160" y="118" width="50" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="252" y="116" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="52" y="130" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="100" y="130" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="160" y="130" width="50" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="252" y="128" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="52" y="142" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="100" y="142" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="160" y="142" width="50" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="252" y="140" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="52" y="154" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="100" y="154" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="160" y="154" width="50" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="252" y="152" width="30" height="6" rx="2" fill={accentMuted} />
      <rect x="52" y="166" width="20" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="100" y="166" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="160" y="166" width="50" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="252" y="164" width="30" height="6" rx="2" fill={accentMuted} />
      {/* Pagination */}
      <rect x="160" y="188" width="6" height="6" rx="1.5" fill={accentMuted} />
      <rect x="172" y="188" width="6" height="6" rx="1.5" fill="var(--color-border)" />
      <rect x="184" y="188" width="6" height="6" rx="1.5" fill="var(--color-border)" />
      <rect x="196" y="188" width="6" height="6" rx="1.5" fill="var(--color-border)" />
    </svg>
  );
}

function BlogWireframe() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="3" fill="var(--color-surface)" />
      {/* Header: logo + nav + search */}
      <rect x="0" y="0" width="320" height="22" fill="var(--color-bg)" />
      <rect x="10" y="6" width="28" height="7" rx="2" fill={accent} />
      <rect x="200" y="7" width="22" height="4" rx="1.5" fill="var(--color-border)" />
      <rect x="226" y="7" width="22" height="4" rx="1.5" fill="var(--color-border)" />
      <rect x="252" y="7" width="22" height="4" rx="1.5" fill="var(--color-border)" />
      <rect x="286" y="5" width="10" height="10" rx="2" fill="var(--color-border)" />
      <rect x="302" y="5" width="10" height="10" rx="2" fill="var(--color-border)" />
      {/* Featured hero post */}
      <rect x="0" y="22" width="224" height="80" rx="0" fill={blueTint} />
      <rect x="12" y="28" width="80" height="6" rx="2" fill="var(--color-text-secondary)" opacity="0.5" />
      <rect x="12" y="38" width="60" height="3" rx="1.5" fill="var(--color-border)" opacity="0.5" />
      <rect x="12" y="60" width="140" height="5" rx="2" fill="var(--color-text-secondary)" opacity="0.4" />
      <rect x="12" y="70" width="100" height="3" rx="1.5" fill="var(--color-border)" opacity="0.4" />
      <rect x="12" y="82" width="50" height="8" rx="2" fill={accentMuted} />
      {/* Sidebar: search + categories */}
      <rect x="232" y="22" width="88" height="80" rx="3" fill={accentDim} />
      <rect x="240" y="30" width="72" height="10" rx="3" fill="var(--color-border)" />
      <rect x="240" y="48" width="40" height="4" rx="2" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="240" y="58" width="60" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="240" y="66" width="60" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="240" y="74" width="60" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="240" y="82" width="60" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="240" y="90" width="60" height="3" rx="1.5" fill="var(--color-border)" />
      {/* Post cards */}
      <rect x="8" y="110" width="150" height="56" rx="3" fill={accentDim} />
      <rect x="12" y="114" width="142" height="26" rx="2" fill="color-mix(in srgb, var(--color-text-secondary) 8%, transparent)" />
      <rect x="12" y="146" width="50" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="12" y="154" width="30" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="64" y="152" width="24" height="6" rx="2" fill={accentMuted} />
      <rect x="164" y="110" width="148" height="56" rx="3" fill={accentDim} />
      <rect x="168" y="114" width="140" height="26" rx="2" fill="color-mix(in srgb, var(--color-text-secondary) 8%, transparent)" />
      <rect x="168" y="146" width="50" height="3" rx="1.5" fill="var(--color-text-secondary)" opacity="0.3" />
      <rect x="168" y="154" width="30" height="3" rx="1.5" fill="var(--color-border)" />
      <rect x="220" y="152" width="24" height="6" rx="2" fill={accentMuted} />
      {/* Tags */}
      <rect x="8" y="172" width="40" height="10" rx="3" fill={accentDim} />
      <rect x="52" y="172" width="40" height="10" rx="3" fill={accentDim} />
      <rect x="96" y="172" width="50" height="10" rx="3" fill={accentDim} />
      <rect x="150" y="172" width="50" height="10" rx="3" fill={accentDim} />
      {/* Pagination */}
      <rect x="230" y="174" width="6" height="6" rx="1.5" fill={accentMuted} />
      <rect x="242" y="174" width="6" height="6" rx="1.5" fill="var(--color-border)" />
      <rect x="254" y="174" width="6" height="6" rx="1.5" fill="var(--color-border)" />
      {/* Footer */}
      <rect width="320" height="8" y="192" fill="var(--color-border)" opacity="0.2" />
    </svg>
  );
}
const wireframes = [
  { id: "cafe", render: CafeWireframe },
  { id: "service", render: ServiceWireframe },
  { id: "retail", render: RetailWireframe },
  { id: "event", render: EventWireframe },
  { id: "dashboard", render: DashboardWireframe },
  { id: "blog", render: BlogWireframe },
];

const businessNames = [
  "Cafes & Coffee Shops",
  "Restaurants",
  "Breweries & Taprooms",
  "Bakeries",
  "Retail Stores",
  "Salons & Spas",
  "Contractors & Trades",
  "Artists & Galleries",
  "Outdoor Guides",
  "Real Estate",
  "Medical & Wellness",
  "Churches & Non-Profits",
  "Bike Shops",
  "Bed & Breakfasts",
  "Wineries & Vineyards",
  "Fitness & Yoga",
  "Pet Services",
  "Food Trucks & Catering",
  "Antique & Vintage Shops",
  "Photography & Media",
  "Florists & Garden Centers",
  "Bookstores",
  "Music & Entertainment",
  "Auto Repair & Detailing",
  "Landscaping & Lawn Care",
  "Cleaning Services",
  "Massage & Holistic Health",
  "Childcare & Daycares",
  "Tutoring & Music Lessons",
  "Event Planning",
  "Distilleries & Cideries",
  "Hardware & Supply Stores",
  "Soap & Candle Makers",
  "Pottery & Ceramics Studios",
  "Leatherworkers & Saddlers",
  "Luthiers & Instrument Makers",
  "Fly Fishing Guides",
  "Gem Mining & Prospecting",
  "Blacksmiths & Metal Forging",
  "Wool & Fiber Arts",
  "Apiaries & Honey Farms",
  "Mushroom Farms & Foraging",
  "Axe Throwing Venues",
  "Stained Glass Studios",
  "Chainsaw Carving",
  "Mobile Saunas",
  "Fermentation Shops",
];

const testimonials = [
  {
    quote:
      "Our old site was from 2018 and it showed. Jacob rebuilt it in a week and now we can actually update our menu ourselves. Our phone orders went up noticeably after the launch.",
    name: "Sarah M.",
    role: "Owner, Mountain Harvest Cafe · Brevard, NC",
  },
  {
    quote:
      "I'd been putting off a new website for two years because every quote I got was $8,000+ with a ton of stuff I didn't need. Jacob listened to what I actually wanted and delivered it for a fraction of that.",
    name: "Rick T.",
    role: "Owner, Pisgah Repair Co. · Brevard, NC",
  },
  {
    quote:
      "What stood out was how easy the process was. We talked once, he showed me a draft a couple days later, and after one round of changes it was live. No endless meetings, no jargon, just a great website.",
    name: "Anette L.",
    role: "Owner, Brevard Pet Supply · Brevard, NC",
  },
];

const steps = [
  {
    num: "01",
    title: "Talk",
    desc: "We have a conversation about your business, what you need, and what your current site is missing. No pressure, no pitch.",
  },
  {
    num: "02",
    title: "Build",
    desc: "I build your site. You get a preview link to see progress and give feedback. Changes are fast — no waiting weeks for revisions.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Your site goes live at your domain. I make sure everything works and show you how to make basic updates yourself if you want.",
  },
];

function TownCycler() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % towns.length);
        setFade(true);
      }, 250);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`cycler ${fade ? "cycler-in" : "cycler-out"}`}
      aria-label={towns[index]}
    >
      {towns[index]}
    </span>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

const mobileFieldLabel: Record<string, string> = {
  headline: "Hero headline",
  tagline: "Hero tagline",
  cta: "CTA button",
  about: "About section",
  hours: "Hours",
  phone: "Phone",
  brand: "Business name",
};

export default function Home() {
  const [cmsHeadline, setCmsHeadline] = useState(
    "Fresh coffee, every day."
  );
  const [cmsTagline, setCmsTagline] = useState(
    "Locally roasted & brewed in the heart of Brevard."
  );
  const [cmsCta, setCmsCta] = useState("View our menu");
  const [cmsAbout, setCmsAbout] = useState(
    "We're a small independent cafe serving specialty coffee, fresh pastries, and good conversation. Stop by for your morning cup or stay a while."
  );
  const [cmsHours, setCmsHours] = useState("7:00 AM - 3:00 PM");
  const [cmsPhone, setCmsPhone] = useState("(828) 555-0142");
  const [previewBrand, setPreviewBrand] = useState("Mountain Peak Cafe");
  const [previewUrl, setPreviewUrl] = useState("mountainpeakcafe.com");
  const [mobileEditField, setMobileEditField] = useState<string | null>(null);
  const [mobileEditValue, setMobileEditValue] = useState("");
  const [mobileEditorFocused, setMobileEditorFocused] = useState(false);
  const [businessRefreshKey, setBusinessRefreshKey] = useState(0);
  const [businessSpinning, setBusinessSpinning] = useState(false);
  const [problemQuoteIdx, setProblemQuoteIdx] = useState(0);
  const [problemQuoteFading, setProblemQuoteFading] = useState(false);
  const [centerIdx, setCenterIdx] = useState(0);
  const [wireframeFading, setWireframeFading] = useState(false);

  const headlineRef = useRef<HTMLInputElement>(null);
  const taglineRef = useRef<HTMLInputElement>(null);
  const ctaRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const businesses = useMemo(() => {
    const shuffled = [...businessNames].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12).map((name) => ({
      name,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));
  }, [businessRefreshKey]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProblemQuoteFading(true);
      setTimeout(() => {
        setProblemQuoteIdx((i) => (i + 1) % problemQuotes.length);
        setProblemQuoteFading(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWireframeFading(true);
      setTimeout(() => {
        setCenterIdx((i) => (i + 1) % wireframes.length);
        setWireframeFading(false);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const presets: Record<string, {
    headline: string; tagline: string; cta: string; about: string; hours: string; phone: string; brand: string; url: string
  }> = {
    cafe: {
      headline: "Fresh coffee, every day.",
      tagline: "Locally roasted & brewed in the heart of Brevard.",
      cta: "View our menu",
      about: "We're a small independent cafe serving specialty coffee, fresh pastries, and good conversation. Stop by for your morning cup or stay a while.",
      hours: "7:00 AM - 3:00 PM",
      phone: "(828) 555-0142",
      brand: "Mountain Peak Cafe",
      url: "mountainpeakcafe.com",
    },
    restaurant: {
      headline: "Farm-to-table dining, close to home.",
      tagline: "Seasonal ingredients, handcrafted plates, and a warm atmosphere.",
      cta: "Reserve a table",
      about: "We source locally from WNC farms to bring you dishes that change with the seasons. Whether it's date night or a family dinner, come experience food worth slowing down for.",
      hours: "5:00 PM - 9:30 PM",
      phone: "(828) 555-0187",
      brand: "The Farm Table",
      url: "thefarmtablewnc.com",
    },
    bike: {
      headline: "Your next ride starts here.",
      tagline: "Sales, service & gear for every trail and road around Brevard.",
      cta: "Shop bikes",
      about: "From full-suspension mountain bikes to road and gravel, we've got the bikes and the expertise to keep you rolling. Tune-ups, repairs, and custom builds — all done in-house.",
      hours: "9:00 AM - 6:00 PM",
      phone: "(828) 555-0203",
      brand: "Pisgah Cycles",
      url: "pisgahcycles.com",
    },
    mechanic: {
      headline: "Honest work. Fair price.",
      tagline: "Brakes, oil, tires, and anything else your car needs.",
      cta: "Schedule an appointment",
      about: "Family-owned auto repair serving Brevard and Transylvania County for over 15 years. No upsells, no unnecessary repairs — just solid work that gets you back on the road safely.",
      hours: "8:00 AM - 5:00 PM",
      phone: "(828) 555-0164",
      brand: "Brevard Auto Repair",
      url: "brevardautorepair.com",
    },
    barber: {
      headline: "Look sharp, feel sharp.",
      tagline: "Classic cuts, hot towel shaves, and beard trims for every style.",
      cta: "Book an appointment",
      about: "Step into a real barbershop. We do traditional scissor cuts, modern fades, and straight-razor shaves in a relaxed, no-appointment-necessary shop. Walk-ins always welcome.",
      hours: "9:00 AM - 6:00 PM",
      phone: "(828) 555-0312",
      brand: "Brevard Barbers",
      url: "brevardbarbers.com",
    },
    bakery: {
      headline: "Fresh from the oven, daily.",
      tagline: "Handmade breads, pastries, and cakes baked in small batches.",
      cta: "View today's menu",
      about: "We start before sunrise so everything on our shelves is baked fresh that morning. Sourdough, croissants, muffins, and custom cakes — made from scratch with local ingredients.",
      hours: "7:00 AM - 2:00 PM",
      phone: "(828) 555-0278",
      brand: "The Daily Loaf",
      url: "dailyloafbrevard.com",
    },
    lawncare: {
      headline: "A yard you're proud of.",
      tagline: "Mowing, trimming, mulching — weekly or one-time, we've got you covered.",
      cta: "Get a free quote",
      about: "We take care of the mowing, edging, weeding, and blowing so you can enjoy your yard instead of working in it. Serving Brevard and surrounding areas with reliable same-day-week service.",
      hours: "7:00 AM - 5:00 PM",
      phone: "(828) 555-0095",
      brand: "Pisgah Lawn Care",
      url: "pisgahlawncare.com",
    },
    petgrooming: {
      headline: "Happy pets, happy people.",
      tagline: "Full-service grooming, baths, and nail trims for dogs and cats.",
      cta: "Book a groom",
      about: "Your pet deserves the best. We offer gentle, patient grooming in a low-stress environment — from full haircuts and deshedding treatments to nail trims and ear cleaning.",
      hours: "8:00 AM - 4:00 PM",
      phone: "(828) 555-0221",
      brand: "Happy Paws Grooming",
      url: "happypawsbrevard.com",
    },
  };

  function loadPreset(key: keyof typeof presets) {
    const p = presets[key];
    setCmsHeadline(p.headline);
    setCmsTagline(p.tagline);
    setCmsCta(p.cta);
    setCmsAbout(p.about);
    setCmsHours(p.hours);
    setCmsPhone(p.phone);
    setPreviewBrand(p.brand);
    setPreviewUrl(p.url);
  }

  function openMobileEditor(field: string, value: string) {
    if (window.innerWidth >= 768) return;
    setMobileEditField(field);
    setMobileEditValue(value);
  }

  function applyMobileEdit() {
    if (!mobileEditField) return;
    switch (mobileEditField) {
      case "headline": setCmsHeadline(mobileEditValue); break;
      case "tagline": setCmsTagline(mobileEditValue); break;
      case "cta": setCmsCta(mobileEditValue); break;
      case "about": setCmsAbout(mobileEditValue); break;
      case "hours": setCmsHours(mobileEditValue); break;
      case "phone": setCmsPhone(mobileEditValue); break;
      case "brand": setPreviewBrand(mobileEditValue); break;
    }
    setMobileEditField(null);
  }

  function cancelMobileEdit() {
    setMobileEditField(null);
  }

  return (
    <main className="main page-enter">
      {/* Hero */}
      <Section id="hero">
        <h1 className="hero-tagline">
          Supercharged websites for <span className="accent"><TownCycler /></span> businesses.
        </h1>
        <p className="hero-desc">
          Built by someone with 8+ years of technical and design / UX experience.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="btn">
            Let's talk
          </Link>
          <Link to="/work" className="btn btn-ghost">
            See my work
          </Link>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <h2 className="section-title">About me</h2>
        <div className="about-content">
          <p>
            I'm Jacob Broughton, a software engineer based in{" "}
            <strong>Brevard, NC</strong>. I've built and shipped web
            applications used by over 100,000 people and build websites for
            local businesses on the side using modern technology.
          </p>
          <p>
            <Link to="/about">More about me &rarr;</Link>
          </p>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem">
        <h2 className="section-title">If this sounds familiar&hellip;</h2>
        <p className="section-sub">
          Every time you look into fixing your website, it feels like a
          hassle — or worse, a sales pitch.
        </p>
        <blockquote className={`problem-quote${problemQuoteFading ? " fade-out" : ""}`}>
          &ldquo;{problemQuotes[problemQuoteIdx]}&rdquo;
        </blockquote>
      </Section>

      {/* Which businesses? */}
      <Section id="businesses">
        <h2 className="section-title">Which businesses?</h2>
        <p className="section-sub">
          From Main Street cafes to mountain guide services — if you serve
          customers in WNC, I can build a site that fits your business.
        </p>
        <div className="business-toolbar">
          <button className="business-refresh" onClick={() => {
            setBusinessSpinning(true);
            setBusinessRefreshKey((k) => k + 1);
            setTimeout(() => setBusinessSpinning(false), 600);
          }}>
            <span className={`business-refresh-icon${businessSpinning ? " spin" : ""}`}>↻</span> Refresh
          </button>
        </div>
        <div className="business-masonry">
          {businesses.map((b: { name: string; color: string }) => {
              const isCool = b.color === "#7c3aed" || b.color === "#2563eb";
              return (
                <div key={b.name} className="business-item" data-cool={isCool ? "" : undefined} style={{ "--business-color": b.color } as React.CSSProperties}>
                  {b.name}
                </div>
              );
            })}
        </div>
      </Section>

      {/* What I build — wireframe showcase */}
      <Section id="services">
        <h2 className="section-title">What I build</h2>
        <p className="section-sub">
          I work with all kinds of local businesses. Here are some of the
          website layouts I create.
        </p>
        <div className="wireframe-showcase">
          {(() => {
            const N = wireframes.length;
            const slots = [
              { offset: (centerIdx - 1 + N) % N, x: -80, r: -5, z: 1 },
              { offset: centerIdx, x: 0, r: 0, z: 3 },
              { offset: (centerIdx + 1) % N, x: 80, r: 5, z: 2 },
            ];
            return slots.map((slot) => {
              const w = wireframes[slot.offset];
              const Frame = w.render;
              return (
                <div
                  key={slot.offset}
                  className={`wireframe-card${wireframeFading ? " fade-out" : ""}`}
                  style={{
                    zIndex: slot.z,
                    transform: `translateX(calc(-50% + ${slot.x}px)) translateY(-50%) rotate(${slot.r}deg)`,
                  }}
                >
                  <div className="wireframe-frame">
                    <Frame />
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </Section>

      {/* CMS */}
      <Section id="cms">
        <h2 className="section-title">You're in control</h2>
        <p className="section-sub">
          Every site comes with a dedicated content manager. No WordPress, no
          bloated dashboards &mdash; just the fields that matter for your
          business. Edit your content, hit save, and see it go live instantly.
        </p>

        <div className="cms-presets">
          <span className="cms-presets-label">Presets:</span>
          <button className="cms-preset-btn" onClick={() => loadPreset("cafe")}>Cafe</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("restaurant")}>Restaurant</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("bike")}>Bike shop</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("mechanic")}>Mechanic</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("barber")}>Barber</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("bakery")}>Bakery</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("lawncare")}>Lawn care</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("petgrooming")}>Pet grooming</button>
        </div>

        <div className="cms-layout">
          {/* Preview — first so it stacks on top on mobile */}
          <div className="cms-preview">
            <div className="cms-preview-bar">
              <div className="cms-preview-dots">
                <span /><span /><span />
              </div>
              <span className="cms-preview-url">{previewUrl}</span>
            </div>
            <div className="cms-preview-page">
              <nav className="cms-preview-nav">
                <span className="cms-preview-brand" data-cms-field="brand" onClick={() => openMobileEditor("brand", previewBrand)}>{previewBrand}</span>
                <div className="cms-preview-navlinks">
                  <span>Menu</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </nav>
              <section className="cms-preview-hero">
                <h3 className="cms-preview-headline" data-cms-field="headline" onClick={() => openMobileEditor("headline", cmsHeadline)}>{cmsHeadline}</h3>
                <p className="cms-preview-tagline" data-cms-field="tagline" onClick={() => openMobileEditor("tagline", cmsTagline)}>{cmsTagline}</p>
                <span className="cms-preview-cta" data-cms-field="cta" onClick={() => openMobileEditor("cta", cmsCta)}>{cmsCta}</span>
              </section>
              <section className="cms-preview-section">
                <h4>About us</h4>
                <p className="cms-preview-text" data-cms-field="about" onClick={() => openMobileEditor("about", cmsAbout)}>{cmsAbout}</p>
              </section>
              <footer className="cms-preview-foot">
                <span data-cms-field="hours" onClick={() => openMobileEditor("hours", cmsHours)}>Hours: {cmsHours}</span>
                <span data-cms-field="phone" onClick={() => openMobileEditor("phone", cmsPhone)}>Phone: {cmsPhone}</span>
              </footer>
            </div>
          </div>

          {/* Arrow between preview and editor */}
          {mobileEditField && (
            <div className="cms-mobile-arrow-wrap">
              <span className={`cms-mobile-arrow${mobileEditorFocused ? " up" : ""}`}>
                <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="6" y1="0" x2="6" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 8L6 14L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="cms-mobile-arrow-text">tap to edit</span>
            </div>
          )}

          {/* Mobile editor — above preview, separated from page content */}
          <div className={`cms-mobile-editor${mobileEditField ? " open" : ""}`}>
              {mobileEditField && (
                <>
                  <span className="cms-mobile-label">
                    {mobileFieldLabel[mobileEditField] || mobileEditField}
                  </span>
                  {mobileEditField === "about" ? (
                    <textarea
                      className="cms-mobile-input"
                      rows={3}
                      value={mobileEditValue}
                      onChange={(e) => setMobileEditValue(e.target.value)}
                      onFocus={() => setMobileEditorFocused(true)}
                      onBlur={() => setMobileEditorFocused(false)}
                    />
                  ) : (
                    <input
                      className="cms-mobile-input"
                      value={mobileEditValue}
                      onChange={(e) => setMobileEditValue(e.target.value)}
                      onFocus={() => setMobileEditorFocused(true)}
                      onBlur={() => setMobileEditorFocused(false)}
                    />
                  )}
                  <div className="cms-mobile-actions">
                    <button className="cms-mobile-btn cms-mobile-cancel" onClick={cancelMobileEdit}>Cancel</button>
                    <button className="cms-mobile-btn cms-mobile-apply" onClick={applyMobileEdit}>Apply</button>
                  </div>
                </>
              )}
          </div>

          {/* CMS panel — hidden on mobile, full form on desktop */}
          <div className="cms-demo">
            <div className="cms-toolbar">
              <span className="cms-toolbar-title">Page content</span>
              <span className="cms-toolbar-live">Live</span>
            </div>
            <div className="cms-fields">
              <label className="cms-field">
                <span className="cms-label">Hero headline</span>
                <input
                  className="cms-input"
                  ref={headlineRef}
                  value={cmsHeadline}
                  onChange={(e) => setCmsHeadline(e.target.value)}
                />
              </label>
              <label className="cms-field">
                <span className="cms-label">Hero tagline</span>
                <input
                  className="cms-input"
                  ref={taglineRef}
                  value={cmsTagline}
                  onChange={(e) => setCmsTagline(e.target.value)}
                />
              </label>
              <label className="cms-field">
                <span className="cms-label">CTA button</span>
                <input
                  className="cms-input"
                  ref={ctaRef}
                  value={cmsCta}
                  onChange={(e) => setCmsCta(e.target.value)}
                />
              </label>
              <label className="cms-field">
                <span className="cms-label">About section</span>
                <textarea
                  className="cms-input cms-textarea"
                  rows={2}
                  ref={aboutRef}
                  value={cmsAbout}
                  onChange={(e) => setCmsAbout(e.target.value)}
                />
              </label>
              <div className="cms-row">
                <label className="cms-field">
                  <span className="cms-label">Hours</span>
                  <input
                    className="cms-input"
                    ref={hoursRef}
                    value={cmsHours}
                    onChange={(e) => setCmsHours(e.target.value)}
                  />
                </label>
                <label className="cms-field">
                  <span className="cms-label">Phone</span>
                  <input
                    className="cms-input"
                    ref={phoneRef}
                    value={cmsPhone}
                    onChange={(e) => setCmsPhone(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <h2 className="section-title">What clients say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-attribution">
                <span className="testimonial-name">{t.name}</span>
                &ensp;—&ensp;{t.role}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">
          Three simple steps from start to launch. No long contracts, no hidden
          fees.
        </p>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="process-step">
              <div className="step-content">
                <h3><span className="step-number">{s.num}</span>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-q">How much does a website cost?</summary>
            <p className="faq-a">
              It depends on what you need — a simple 3-4 page site is different
              from one with online ordering or a booking system. I'll give you a
              flat price upfront with no surprises. Most small business sites
              start around $1,200 and go up from there.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">How long does it take?</summary>
            <p className="faq-a">
              Most sites go from conversation to live in 2-3 weeks. If you have
              your content ready (photos, text, logos), we can move even faster.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Can I update the site myself after it's done?</summary>
            <p className="faq-a">
              Yes. I build sites you can easily update — change your hours,
              swap out photos, add menu items. If you'd rather not touch it, I
              can handle updates for a small monthly fee.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Do I need hosting or a domain?</summary>
            <p className="faq-a">
              I'll help you set up both. I recommend simple, affordable hosting
              that costs around $10-15/month. If you already have a domain,
              I'll point it to the new site so nothing breaks.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Do you offer SEO or marketing?</summary>
            <p className="faq-a">
              I build sites that are technically SEO-friendly — fast load times,
              clean code, proper meta tags, mobile-ready. What I don't do is
              ongoing SEO campaigns or social media management. If that's what
              you need, I can point you to people who do it well.
            </p>
          </details>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="contact" className="cta-section">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Ready to rebuild?
        </h2>
        <p>
          Send me an email and tell me about your business. I'll reply within a
          day and we can take it from there.
        </p>
        <a href="mailto:jacobbroughtondev@gmail.com" className="btn">
          jacobbroughtondev@gmail.com
        </a>
      </Section>
    </main>
  );
}