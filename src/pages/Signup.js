import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../custom.scss";
import "../components/login.scss";
import { Helmet } from 'react-helmet';
function Signup() {
  return (
    <>
    <Helmet><title>Signup Page Home Fitness</title></Helmet>
    <div className="container">
      <div className="row">
        <div className="md-col-8 me-auto ms-auto p-5">
          <h2>Signup</h2>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
              
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formBasicPersonnummer">
              <Form.Label>Social security number</Form.Label>
              <Form.Control type="password" placeholder="Enter Social security number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I accept the terms and conditions" />
            </Form.Group>
           
            <Link className="btn btn-primary" to="/userpage">
              Continue
            </Link>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
