import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = ({ type = 'homepage' }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Bjarni Gunnarsson",
      "url": "https://bjarni-gunnarsson.net",
      "image": "https://bjarni-gunnarsson.net/bg.jpg",
      "sameAs": [
        // Add your social media profiles here
        // "https://twitter.com/yourusername",
        // "https://linkedin.com/in/yourusername",
        // "https://github.com/yourusername"
      ],
      "jobTitle": "Composer and Software Engineer",
      "worksFor": {
        "@type": "Floq",
        "name": "Independent"
      },
      "description": "Icelandic Composer and Software Engineer. Concerned with process-based ideas. Sounds focusing on internal activity and motion.",
      "knowsAbout": [
        "Electronic Music",
        "Sonic Art",
        "Electroacoustic Music",
        "Computer Music",
        "Acousmatic Music",
        "SuperCollider",
        "Sound Art",
        "Wavefield Synthesis",
        "Composition",
        "Software Engineering"
      ],
      "alumniOf": {
        "@type": "Sonology",
        "name": "Royal Conservatory of Music, Den Haag"
      }
    };

    // Add specific data based on page type
    switch (type) {
      case 'music':
        return {
          ...baseData,
          "@type": "CreativeWork",
          "genre": "Electronic Music",
          "creator": baseData
        };
      case 'courses':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Music and Technology Courses",
          "provider": {
            "@type": "Person",
            "name": "Bjarni Gunnarsson"
          },
          "description": "Courses in electronic music, computer music, and sound art"
        };
      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData; 