import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <Layout>
    <div id="root"></div>
    {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/home.js"></script>
    ): (
        <script type="module" src="/public/static/home.js"></script>
    )}   
  </Layout>
  );
}
//     <h1 className="text-4xl font-bold">hello</h1>

