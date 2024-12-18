import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"; 
import "../custom.scss";
import "../components/login.scss";
import { Helmet } from 'react-helmet';
function LoginPage() {
  return (
    <>
        <Helmet><title>login Page Home Fitness</title></Helmet>
    <div className="container">
      <div className="row">
        <div className="md-col-8 me-auto ms-auto p-5">
          <h2>Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a password" />
            </Form.Group>

            <Link to="/signup" className="link link-offset-2 text-light">
              {" "}
              {/* Use Link to route to Signup.js */}
              <p className="linkSignup">
                Not a member already? Become a member here
              </p>
            </Link>

            <Link to="/userpage">
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
