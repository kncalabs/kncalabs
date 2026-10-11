import React from "react";
import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const b = siteConfig.business;
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KNCA Labs",
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/favicon.svg`,
    "description": siteConfig.description,
    "foundingDate": "2023-04-28",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": b.address,
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteConfig.contact.email,
      "telephone": b.phone || undefined,
      "contactType": "customer support"
    }
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KNCA Labs",
    "url": siteConfig.url,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": "KNCA Labs"
    }
  };

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KNCA — AI Content Automation Platform (Pre-Launch)",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "softwareVersion": "Pre-Launch Development",
    "description": siteConfig.description
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
    </>
  );
}
