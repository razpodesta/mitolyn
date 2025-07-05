// src/config/site.ts
import { type Metadata } from "next";

export const siteConfig = {
  // --- GLOBAL METADATA (SEO) ---
  title: "Mitolyn Official - Reignite Your Cellular Furnaces",
  description:
    "Tired of frustrating diets? Discover the science-backed method to reactivate your metabolism and transform your life.",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),

  // --- LAYOUT CONTENT ---
  layout: {
    scrollingBannerText:
      "CHANGE YOUR LIFE TODAY. VISIBLE RESULTS OR YOUR MONEY BACK.",
    headerButtonText: "ORDER NOW ➔",
    footer: {
      copyright: `© ${new Date().getFullYear()} Mitolyn. All rights reserved.`,
      links: [
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Customer Support", href: "/support" },
      ],
      disclaimer:
        "Statements on this website have not been evaluated by the Food and Drug Administration (FDA). The products presented here are not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before use. The information on this site is for educational purposes only.",
    },
  },

  affiliateLink: process.env.NEXT_PUBLIC_AFFILIATE_LINK || "/#order-fallback",

  // --- BRIDGE PAGE CONTENT ---
  bridgePage: {
    hero: {
      title: "Have you ever felt frustrated trying to lose weight?",
      subtitle:
        "Discover the simple, industry-ignored method that targets the true root cause of a slow metabolism.",
    },
    thumbSection: {
      imageUrl: "/images/mitolyn-thumb.jpg",
      altText: "Watch the presentation on the Mitolyn method",
      ctaButtonText: "WATCH THE VIDEO NOW!",
    },
    proofSection: {
      title: "A Science-Backed Approach",
      body: "Our methodology is based on research from world-renowned institutions studying metabolic health and cellular function for real, lasting results.",
      socialProof: {
        logos: [
          {
            src: "/images/seals/logo-harvard.png",
            alt: "Based on Harvard Research",
          },
          { src: "/images/seals/logo-yale.png", alt: "Based on Yale Research" },
          { src: "/images/seals/logo-gmp.png", alt: "GMP Certified" },
        ],
      },
    },
  },

  // --- REVIEW PAGE CONTENT (RESTORED AND TRANSLATED) ---
  reviewPage: {
    intro: {
      openingQuestion: "Have you ever felt frustrated trying to lose weight?",
      paragraphs: [
        "Complicated diets and exhausting exercise routines don't always work. But what if there was a natural, scientifically-studied way to support your metabolism?",
        "Researchers from Harvard and the University of Illinois have discovered that optimizing mitochondrial function could be the key to more efficient fat burning.",
        "Our method has already helped thousands of people regain their confidence and well-being, without radical changes to their daily lives.",
      ],
      benefits: [
        "Boost your metabolism naturally",
        "Feel more energetic and healthy",
        "Achieve sustainable results, without crazy diets",
      ],
      closingStatement:
        "The weight loss industry often complicates what can be simple. We believe in a clear, accessible approach.",
      cta: {
        question: "Want to know how it works?",
        buttonText: "Click Now and Discover Your Transformation!",
      },
    },
    // Future sections for the Review Page will be added here
  },
};

// ... (siteMetadata se mantiene igual)
export const siteMetadata: Metadata = {
  /* ... */
};
