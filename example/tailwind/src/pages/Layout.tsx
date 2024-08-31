import React from 'react';
//
const Layout = ({ children }) => {
  return (
  <html>
    <head>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>welcome</title>
      {(process.env.NODE_ENV !== "production") ? (
          <link href="/static/index.css" rel="stylesheet" />
      ): (
        <link href="/public/static/index.css" rel="stylesheet" />
      )} 
    </head>
    <body>
      <main>{children}</main>
    </body>
  </html>    
  );
};
export default Layout;
/*
<link href="/public/static/index.css" rel="stylesheet" />
<a href="/">[ home ]</a>
{(process.env.NODE_ENV === "develop") ? (
    <script type="module" src="/static/AuthCommon.js"></script>
): (
  <script type="module" src="/public/static/AuthCommon.js"></script>
)}
*/
