// structured-data.js
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hillsview Productions",
    "url": "https://hillsviewproduction.com",
    "logo": "https://hillsviewproduction.com/assets/img/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+255653520829",
      "contactType": "Customer Service"
    }
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
  