import React from 'react';
import useTitle from '../hooks/useTitle';
import NavBar from '../Shared/NavBar';

const Blog = () => {
    useTitle('blog');
    return (
        <div>
            <NavBar></NavBar>
        </div>
    );
};

export default Blog;