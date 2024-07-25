import React from 'react';

const CustomPages = ({ type, slug }) => {
    const CustomComponent = React.lazy(() => import(`../custom${slug}`));

    return (
        <React.Suspense fallback={<div>Loading...</div>}>

            <CustomComponent />

        </React.Suspense>
    );
}

export default CustomPages;