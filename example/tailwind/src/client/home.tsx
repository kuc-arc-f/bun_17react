import React from 'react'
import ReactDOM from 'react-dom/client'
//import {Link } from 'react-router-dom';
//console.log("#about.tsx");
import Head from '../components/Head'
//
function Page(){
  return(
  <div>
    <Head />
    <h1 className="text-4xl font-bold">Home</h1>
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
