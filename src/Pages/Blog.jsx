import React from 'react';
import useTitle from '../hooks/useTitle';
import NavBar from '../Shared/NavBar';

const Blog = () => {
    useTitle('blog');
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-slate-100 rounded-xl py-14 px-20 mt-20 mb-10'>
                <p className='text-2xl font-bold '>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>Answer: An access token is a credential we can use for accessing resources, like JWT is an access token I used in my car-doctor project. On the other hand a refresh token we can use to obtain a new access token, like after login we got another refresh token. Access tokens are stored in memory, but refresh need to store tokens securely, often we store in an HTTP-only cookie but it is not much secure. It is important to maintain security guidelines when handling and storing these tokens on the client-side</p>

                <p className='text-2xl font-bold mt-4'>Question: Compare SQL and NoSQL databases?</p>
                <p>Answer: SQL databases are structured, tabular databases and complex relationships, MySQL. NoSQL databases, on the other hand, are flexible, scalable databases that store data in various formats. Like, MongDB is a NoSQL database. <br />
                    SQL Databases: <br />
                    <li>Structured, tabular data</li>
                    <li>Rigid schema and predefined relationships</li>
                    <li>Suitable for complex querying and data consistency</li>
                    NoSQL Databases:
                    <li>Non-tabular, flexible data</li>
                    <li>Suitable for unstructured or semi-structured data and agile development</li>
                    <li>High throughput and scalability</li>
                </p>

                <p className='text-2xl font-bold mt-4'>Question 3: What is express js? What is Nest JS?</p>
                <p>Answer: Express.js is a flexible web application framework for Node.js which easy handling HTTP requests, routing, and middleware integration. Like we are using easily and handling connection with MongoDB frequently.

                    Nest.js is a new framework for building server-side applications with also Node.js. It provides a structured approach, but it is famous for its scalability and modularity.</p>

                <p className='text-2xl font-bold mt-4'>Question 4: What is MongoDB aggregate and how does it work?</p>
                <p>Answer: We may carry out intricate data manipulations and computations on the documents kept in a collection using MongoDB's aggregation function. MongoDB enables us to carry out a number of aggregation procedures, just like other database systems. These enable the processing of data records in various ways, including grouping data, sorting data into a certain order, or reorganizing returned documents, as well as filtering data as one does with a query.</p>
            </div>
        </div>
    );
};

export default Blog;