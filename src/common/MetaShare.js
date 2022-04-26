import PropTypes from "prop-types";
import React from "react";

const MetaShare = ({ title, ogTitle, ogDescrtiption, image }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescrtiption} />
      <meta
        property="og:image"
        content={`https://novelistgroup.com/upload/${image}`}
      />
      <meta property="fb:app_id" content="662546334827488" />
    </>
  );
};
MetaShare.propTypes = {
  title: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescrtiption: PropTypes.string,
  image: PropTypes.string,
};

export default MetaShare;
