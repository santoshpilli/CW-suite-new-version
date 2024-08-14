import React from 'react';

const Contact = ({ type, slug }) => {
    const ContactComponent = React.lazy(() => import(`../contact${slug}`));
    console.log('slug========>', slug)

    return (
        <React.Suspense fallback={<div>Loading...</div>}>

            <ContactComponent />

        </React.Suspense>
    );
}

export default Contact;