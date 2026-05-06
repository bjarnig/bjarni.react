import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://bjarni-gunnarsson.net';
const DEFAULT_IMAGE =
  'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/gdle_blurbvarx_pink.png';

function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
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
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
