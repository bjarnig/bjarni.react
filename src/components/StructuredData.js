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
        "https://bjarni.bandcamp.com",
        "https://soundcloud.com/bjarni",
        "https://github.com/bjarnig",
        "https://www.discogs.com/artist/5895598-Bjarni-%C3%9E%C3%B3r-Gunnarsson",
        "https://sonology.academia.edu/BjarniGunnarsson",
        "https://www.researchcatalogue.net/profile/?person=427702",
        "http://sonology.org",
        "http://einoma.com",
        "https://soundcloud.com/mgbg",
        "https://www.youtube.com/@bjarni-gunnarsson",
        "https://vimeo.com/blindni",
        "https://www.mixcloud.com/bjarnig/",
        "https://instagram.com/blindni",
        "https://twitter.com/blindni",
        "https://www.facebook.com/xbjarni.gunnarsson",
        "https://www.linkedin.com/in/bjarni-gunnarsson-0b41aa62/"
      ],
      "jobTitle": "Composer and Programmer",
      "worksFor": {
        "@type": "Organization",
        "name": "Institute of Sonology, Royal Conservatory"
      },
      "description": "Composer and programmer exploring generative sound through computational processes. Faculty at Institute of Sonology, The Hague. Creator of process-based music systems and algorithmic composition.",
      "knowsAbout": [
        "Algorithmic Composition",
        "Process-Based Sound",
        "Generative Music",
        "Computational Processes",
        "Machine Learning",
        "Database-Driven Composition",
        "Variational Autoencoders",
        "Live Coding",
        "Electronic Music",
        "Computer Music",
        "Sonic Art",
        "Electroacoustic Music",
        "Acousmatic Music",
        "SuperCollider",
        "Sound Art",
        "Composition",
        "Programming"
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