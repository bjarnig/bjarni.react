import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://bjarni-gunnarsson.net';
const DEFAULT_IMAGE =
  'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/gdle_blurbvarx_pink.png';

function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = 'Bjarni Gunnarsson',
  noindex = false,
  type = 'website',
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes('Bjarni Gunnarsson')
    ? title
    : `${title} | Bjarni Gunnarsson`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Bjarni Gunnarsson" />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}

export default SEO;
