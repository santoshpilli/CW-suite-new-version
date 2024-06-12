import React from 'react';
import Layout from "../hoc/Layout";

const CustomPages = ({ type, slug }) => {
    const CustomComponent = React.lazy(() => import(`../custom${slug}`));

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <CustomComponent />
            </Layout>
        </React.Suspense>
    );
}

export default CustomPages;