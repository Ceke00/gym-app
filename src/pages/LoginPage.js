import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"; // Import Link
import "../custom.scss";
import "../components/login.scss";

function LoginPage() {
  return (
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
          
            <Link to="/signup"> {/* Use Link to route to Signup.js */}
              <p className="text-white linkSignup">
                Not a member already? - become a member here
              </p>
            </Link>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
