import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
    <html>
    <head>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>welcome</title>
    </head>
    <body>
      <main>
        <div id="root"></div>
      </main>
      {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/entry-client.js"></script>
      ): (
        <script type="module" src="/public/static/entry-client.js"></script>
      )}  
    </body>
  </html>
  );
}
/*
<div id="root"></div>
    <h1>hello</h1>
    <div id="root"></div>
    {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/home.js"></script>
    ): (
        <script type="module" src="/public/static/home.js"></script>
    )}   
*/

