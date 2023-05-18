import React from 'react';
import useTitle from '../hooks/useTitle';
import NavBar from '../Shared/NavBar';

const Blog = () => {
    useTitle('blog');
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-slate-100 rounded-xl py-14 px-20 mt-20'>
                <p className='text-2xl font-bold '>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>Answer: An access token is a credential we can use for accessing resources, on the other hand a refresh token we can use to obtain a new access token. Access tokens are stored in memory, but refresh need to store tokens securely, often we store in an HTTP-only cookie. It is important to maintain security guidelines when handling and storing these tokens on the client-side</p>

                <p className='text-2xl font-bold mt-4'>Question: Compare SQL and NoSQL databases?</p>
                <p>Answer: SQL databases are structured, tabular databases and complex relationships. NoSQL databases, on the other hand, are flexible, scalable databases that store data in various formats. <br />
                    SQL Databases: <br />

                    <li>Structured, tabular data</li>
                    <li>Rigid schema and predefined relationships</li>
                    <li>Suitable for complex querying and data consistency</li>


                    NoSQL Databases:
                    <li>Non-tabular, flexible data</li>
                    <li>Suitable for unstructured or semi-structured data and agile development</li>
                    <li>High throughput and scalability</li>
                </p>

                <p className='text-2xl font-bold mt-4'>Question 3: </p>
                <p>Answer: Express.js is a flexible web application framework for Node.js which simplifies handling HTTP requests, routing, and middleware integration.

                    Nest.js is a newer framework for building server-side applications with Node.js. It is progressive and built on top of Express.js and provides a structured approach, leveraging TypeScript and architectural patterns for modularity and scalability.</p>

                <p className='text-2xl font-bold mt-4'>Question 4: What is MongoDB aggregate and how does it work?</p>
                <p>Answer: MongoDB's aggregation is a feature that allows us to perform complex data manipulations and computations on documents stored in a collection. As like other database systems, MongoDB allows us to perform a variety of aggregation operations. These allow to process data records in a variety of ways, such as grouping data, sorting data into a specific order, or restructuring returned documents, as well as filtering data as one might with a query.</p>
            </div>
        </div>
    );
};

export default Blog;