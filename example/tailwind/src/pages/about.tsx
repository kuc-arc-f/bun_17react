import Layout from './Layout';
//
export default function Page(props: any) { 
  return (
    <Layout>
        <div id="root"></div>
        {(process.env.NODE_ENV !== "production") ? (
            <script type="module" src="/static/about.js"></script>
        ): (
            <script type="module" src="/public/static/about.js"></script>
        )}        
    </Layout>
    );
}
/*
*/
