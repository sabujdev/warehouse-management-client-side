import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="question">
      <div className="qus">
        <h1>What is the purpose of jwt and how does it work?</h1>
        <p>
          JWT is created with a secret key and that secret key is private to you
          which means you will never reveal that to the public or inject inside
          the JWT token. When you receive a JWT from the client, you can verify
          that JWT with this that secret key stored on the server.
        </p>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
      </div>
      <div className="qus">
        <h1>Differences between sql and nosql databases?</h1>
        <div>
          <h3>SQL</h3>
          <li>These databases have fixed or static or predefined schema</li>
          <li>These databases are not suited for hierarchical data storage.</li>
          <li>These databases are best suited for complex queries</li>
          <li>Vertically Scalable</li>
          <li>Follows ACID property</li>
        </div>
        <div>
          <h3>NoSQL</h3>
          <li>Non-relational or distributed database system.</li>
          <li>They have dynamic schema.</li>
          <li>
            These databases are best suited for hierarchical data storage.
          </li>
          <li>These databases are not so good for complex queries.</li>
          <li>Follows CAP(consistency, availability, partition tolerance)</li>
          <li> Horizontally scalable</li>
        </div>
      </div>

      <div className="qus">
        <h1> When should you use nodejs and when should you use mongodb</h1>
        <p>
          Node. js is primarily used for non-blocking, event-driven servers, due
          to its single-threaded nature. It's used for traditional web sites and
          back-end API services, but was designed with real-time, push-based
          architectures in mind.
          <br />
          You're using cloud computing. MongoDB is ideal for cloud computing.
          Cloud-based storage needs to easily distribute data across multiple
          servers, which suits MongoDB's nature perfectly. You need your data
          fast and easily accessible SQL. NoSQL databases like MongoDB are a
          good choice when your data is document-centric and doesn't fit well
          into the schema of a relational database, when you need to accommodate
          massive scale, when you are rapidly prototyping, and a few other use
          cases
        </p>
      </div>
      <div className="qus">
        <h1>Difference between javascript and nodejs?</h1>
        <div>
          <h3>JavaScript</h3>
          <li>
            Javascript is a programming language that is used for writing
            scripts on the website.{" "}
          </li>
          <li>Javascript can only be run in the browsers.</li>
          <li>It is basically used on the client-side.</li>
          <li>
            Javascript is capable enough to add HTML and play with the DOM.{" "}
          </li>
          <li>
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox.
          </li>
          <li>Javascript is used in frontend development.</li>
        </div>
        <div>
          <h3>nodeJs</h3>
          <li>NodeJS is a Javascript runtime environment.</li>
          <li>
            We can run Javascript outside the browser with the help of NodeJS.
          </li>
          <li>It is mostly used on the server-side.</li>
          <li>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.
          </li>
          <li>Nodejs is written in C, C++ and Javascript.</li>
          <li>Nodejs does not have capability to add HTML tags.</li>
        </div>
      </div>
    </div>
  );
};

export default Blog;
