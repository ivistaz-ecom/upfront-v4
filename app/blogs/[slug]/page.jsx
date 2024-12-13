'use client';

import React from 'react';
import Posts from './Blogpost'; // Adjust the import path accordingly

const Page = ({ params }) => {
    const { slug } = params; // params is directly available in the props

    return (
        <div>
            <Posts slug={slug} />
        </div>
    );
};

export default Page;
