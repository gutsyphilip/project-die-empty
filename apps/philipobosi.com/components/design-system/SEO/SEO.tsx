import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";


const SEO = (props: any) => {
  const SITE_URL = "https://philipobosi.com";
  const { meta, img, title, description, slug, lang = "en" } = props;
  const metaDescription = description || "Creating...";
  const metaImage = `${SITE_URL}${img}`;
  const url = `${SITE_URL}/articles/${slug}`;

  return (
    <Head>    
      <title>{title}</title>
      <meta name="description" content={metaDescription} />  

      <meta name="og:title" content={title} />  
      <meta name="og:description" content={metaDescription}/>  
      <meta name="og:image" content={metaImage} />   
      <meta name="og:url" content={url} />  

      <meta name="twitter:card" content="summary_large_image" />  
      <meta name="twitter:title" content={title} />  
      <meta name="twitter:description" content={metaDescription}/>  
      <meta name="twitter:image" content={metaImage} />  
      <meta name="twitter:creator" content="@gutsyphilip" />  
      <meta name="twitter:url" content={url} />  
    </Head>

  );
};

SEO.defaultProps = {
  meta: [],
  title: "",
  slug: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
