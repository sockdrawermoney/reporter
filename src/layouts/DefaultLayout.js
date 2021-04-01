import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const DefaultLayout = (props) => {
  const { pageTitle, children } = props;
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="chrome-1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Submit C4 contest findings" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:image"
          content="https://code423n4/images/C4-banner.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="/c4.png" />
        <body />
      </Helmet>
      <main>{children}</main>
    </HelmetProvider>
  );
};

export default DefaultLayout;
