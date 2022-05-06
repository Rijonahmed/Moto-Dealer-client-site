import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <h4 className='mt-3'><big>Question: </big>Difference between javascript and nodejs?</h4>
      <table className="table table-bordered">
        <thead className=''>
          <tr>

            <th scope="col">Javascript</th>
            <th scope="col">NodeJS</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td>Javascript is a programming language that is used for writing scripts on the website.
            </td>

            <td>NodeJS is a Javascript runtime environment.
            </td>
          </tr>
          <tr>
            <td>Javascript can only be run in the browsers.</td>
            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
          </tr>
          <tr>
            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
            <td>Nodejs does not have capability to add HTML tags.</td>
          </tr>
          <tr>
            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
          </tr>
          <tr>
            <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
            <td>Nodejs is written in C, C++ and Javascript.</td>
          </tr>

        </tbody>
      </table>

      <h4><big>Question: </big> When should you use nodejs and when should you use mongodb?</h4>
      <p><big className='fw-bold'>Ans: </big> There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>

      <h4 className='mt-3'><big>Question: </big>Differences between sql and nosql databases.?</h4>
      <table className="table table-bordered">
        <thead className=''>
          <tr>

            <th scope="col">SQL</th>
            <th scope="col">NoSQL</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td>These databases have fixed or static or predefined schema.
            </td>

            <td>They have dynamic schema.
            </td>
          </tr>
          <tr>
            <td>These databases are not suited for hierarchical data storage.</td>
            <td>These databases are best suited for hierarchical data storage.</td>
          </tr>
          <tr>
            <td>These databases are best suited for complex queries.</td>
            <td>These databases are not so good for complex queries.</td>
          </tr>
          <tr>
            <td>Follows ACID property. </td>
            <td>Follows CAP(consistency, availability, partition tolerance).  </td>
          </tr>


        </tbody>
      </table>


      <h4><big>Question: </big> What is the purpose of jwt and how does it work?</h4>
      <p><big className='fw-bold'>Ans: </big> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>



    </div>
  );
};

export default Blog;