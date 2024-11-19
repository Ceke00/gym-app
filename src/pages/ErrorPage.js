import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <Container className="my-5">
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>
        Back to{" "}
        <Link className="text-light link-offset-2 link" to="/">
          Home Page
        </Link>{" "}
      </p>
    </Container>
  );
}

export default ErrorPage
