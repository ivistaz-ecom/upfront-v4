'use client';

import React from 'react';
import Posts from './ImpactStoriesPost'; // Adjust the import path accordingly

const Page = ({ params }) => {
    const { slug } = params; // Access params directly without `await`

    return (
        <div>
            <Posts slug={slug} />
        </div>
    );
};

export default Page;
