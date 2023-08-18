import React from "react";

const Blog = () => {
  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <div className="mt-1 mb-1 collapse collapse-arrow bg-indigo-200 rounded-none">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">What is Cors?</div>
        <div className="collapse-content">
          <p className="font-light">
            CORS stands for Cross-Origin Resource Sharing. It's a security
            feature implemented in web browsers to control how web pages in one
            domain can request and interact with resources (like data or
            scripts) from another domain. It helps prevent potential security
            risks that can arise from unauthorized cross-origin requests.
          </p>
        </div>
      </div>
      <div className="mb-1 collapse collapse-arrow bg-indigo-200 rounded-none ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Why you use firebase? And What are the alternatives?
        </div>
        <div className="collapse-content">
          <p className="font-light">
            Firebase is a popular platform by Google for building web and mobile
            applications quickly. It offers various tools like real-time
            databases, authentication, hosting, and more.
          </p>
          <p className="font-light">
            Alternatives: AWS Amplify,Microsoft Azure,Heroku,Parse, etc{" "}
          </p>
        </div>
      </div>
      <div className="mb-1 collapse collapse-arrow bg-indigo-200 rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How does the PrivateRoute Work?
        </div>
        <div className="collapse-content">
          <p className="font-light">
            A PrivateRoute is typically a component used in web applications,
            often with frameworks like React, to control access to certain
            routes based on user authentication.
          </p>
        </div>
      </div>
      <div className="mb-1 collapse collapse-arrow bg-indigo-200 rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p className="font-light">
            Node.js is an open-source, server-side JavaScript runtime
            environment that allows you to build scalable and efficient network
            applications. It uses an event-driven, non-blocking I/O model, which
            makes it well-suited for handling asynchronous operations and
            building real-time applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
