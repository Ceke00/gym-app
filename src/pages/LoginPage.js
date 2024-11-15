import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../custom.scss";
import "../components/login.scss";

function LoginPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="md-col-8 me-auto ms-auto">
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
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <a href="#">
              <p className="text-white linkSignup">
                Not a member already? - become a member here
              </p>
            </a>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
