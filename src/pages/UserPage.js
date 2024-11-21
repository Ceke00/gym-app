import React from 'react';
import { Container } from 'react-bootstrap';
import VideoSection from "../components/VideoSection";
import "./UserPage.scss";
import { Helmet } from 'react-helmet';
function UserPage() {
  return (
    <>
        <Helmet><title>User Page Home Fitness</title></Helmet>
      {/* Header Section */}
      <header id="bg-image-userpage">
        <Container fluid="lg">
          <h1>Welcome to Your User Page!</h1>
        </Container>
      </header>

      
      <VideoSection />
    </>
  );
}

export default UserPage;
