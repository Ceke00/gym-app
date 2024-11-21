import React from 'react';
import './VideoSection.scss';  

function VideoSection() {
  const videoData = [
    {
      name: 'YOGA',
      description: 'Harmony of body, mind, and spirit through mindful practice.',
      videoUrl: 'https://youtu.be/djLCTwi3PmU?si=ZPCvNxngfJTaBBBZ',
      thumbnailUrl: 'https://www.kacie.fr/wp-content/uploads/2016/10/imagesYoga-13.jpg',
    },
    {
      name: 'Personal Training',
      description: 'Customized fitness plans for optimal health and performance.',
      videoUrl: 'https://youtu.be/djLCTwi3PmU?si=ZPCvNxngfJTaBBBZ',
      thumbnailUrl: 'https://www.stonnington.vic.gov.au/files/assets/active-ston/gym/landing-page-thumbnail-images-380x250/personal-training.jpg?w=1080',
    },
    {
      name: 'Group Classes',
      description: 'Energizing workouts in a supportive, motivating community environment.',
      videoUrl: 'https://youtu.be/djLCTwi3PmU?si=ZPCvNxngfJTaBBBZ',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.cmuSFo2E9stQD-AVeaVjVQHaE8?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Nutrition Plans',
      description: 'Balanced diets fostering collective health success.',
      videoUrl: 'https://youtu.be/djLCTwi3PmU?si=ZPCvNxngfJTaBBBZ',
      thumbnailUrl: 'https://www.journeylife.tv/wp-content/uploads/2019/08/image-copyright-7.jpg',
    },
    {
      name: 'Online Coaching',
      description: 'Flexible, expert-led workouts tailored to you. Try it',
      videoUrl: 'https://youtu.be/djLCTwi3PmU?si=ZPCvNxngfJTaBBBZ',
      thumbnailUrl: 'https://www.skillsuccess.com/wp-content/uploads/2017/11/online-coaching-business-2-1.jpg',
    },
    {
      name: 'Special Needs',
      description: 'Tailored support ensuring accessibility and inclusivit for all',
      videoUrl: 'https://youtu.be/djLCTwi3PmU?si=ZPCvNxngfJTaBBBZ',
      thumbnailUrl: 'https://www.thoughtco.com/thmb/3BgsDZ_VWmwacSWAHlasiYE-GDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/group-of-special-needs-girls-with-instructor-in-gym-520779162-b97b8319a0f64fbaa351e694662682af.jpg',
    },
  ];

  return (
    <section className="video-section">
      <h2 className="text-center">Your Videos</h2>
      <div className="container">
        <div className="row">
          {videoData.map((video, index) => (
            <div className="col-md-4" key={index}>
              <div className="card video-card">
                <div className="card-body">
                  <h3 className="card-title">{video.name}</h3>
                  <p className="card-text">"{video.description}"</p>
                  <div className="video-container">
                    {/* YouTube Thumbnail */}
                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.name} thumbnail`}
                        className="img-fluid rounded"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
