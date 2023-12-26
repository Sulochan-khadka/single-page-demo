import React from 'react';
import './hero.css';
import img from '../assets/desktop_announcement_hero.png';
import blog_img1 from '../assets/JNJ_IM_Doctors-Talking.jpg';
import blog_img2 from '../assets/JNJ_IM_Man-Smiling.jpg';
import YouTube from 'react-youtube';

const Hero = () => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // YouTube video parameters (optional)
      autoplay: 0, // Autoplay the video
    },
  };
  const videoId = 'YX7M-j8_RzI';
  return (
    <div className='hero-container'>
      <div className='head-part'>
        <div className='non-image'>
          <div className='text'>Janssen is now</div>
          <div className='stress-word'>
            Johnson & Johnson <div className='text'>Innovative Medicine</div>
          </div>
          <div className='text'>Leading where medicine is going</div>
          <div className='text' style={{ paddingBottom: '0px' }}>
            New identity. Same purpose.
          </div>
        </div>
        <div className='picture-part'>
          <img src={img} alt='image' />
        </div>
      </div>
      <div className='video-container'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className='blog-container'>
        <div className='blog'>
          <div className='image-container'>
            <img src={blog_img1} alt='image1' />
          </div>
          <div>
            <div className='blog-heading'>Who We Are</div>
            <div className='blog-subheading'>
              The Janssen Pharmaceutical Companies of Johnson & Johnson is now
              J&J Innovative Medicine. We’ve been part of Johnson & Johnson and
              now our identity better conveys that. Our new brand truly reflects
              the best of who we are and what we do to lead where medicine is
              going.
            </div>
            <div className='blog-text'>
              Our diverse portfolio spans multiple therapeutic areas — Oncology,
              Immunology, Neuroscience, Cardiovascular, Pulmonary Hypertension,
              and Retina.
            </div>
            <div className='blog-text'>
              We are continuously working to develop treatments, aspiring to
              find cures, pioneering the path from lab to life, and championing
              patients every step of the way.
            </div>
          </div>
        </div>
        <div className='blog'>
          <div className='image-container'>
            <img src={blog_img2} alt='image2' />
          </div>
          <div>
            <div>
              <div className='blog-heading'>Inspired by Patients</div>
              <div className='blog-text'>
                We never lose sight of the people we serve, or the possibilities
                science provides. Continued listening and learning fuel the
                development and delivery of transformational medicines for the
                future.
              </div>
              <div className='blog-text'>
                We understand the impact of living with illness. That’s why we
                connect with patient groups, health experts and governments to
                improve how patients access and experience our innovations. We
                work tirelessly to deliver therapies that can change and save
                lives.
              </div>
            </div>

            <div>
              <div className='blog-heading'>
                Transforming the Future of Health
              </div>
              <div className='blog-text'>
                We innovate with purpose to lead where medicine is going.
                Innovation requires thinking differently so we continue to
                reimagine the entire research, development and delivery process.
              </div>
              <div className='blog-text'>
                Cutting-edge technologies and expert insight help us understand
                and address the serious health problems of today and unlock the
                potential medicines of tomorrow. We pursue new pathways,
                collaborate closely with healthcare professionals, and decipher
                data to help people live fuller lives.
              </div>
            </div>
            <div>
              <div className='blog-heading'>Commitment to Access</div>
              <div className='blog-text'>
                Medicines can only help if people can get them. Every step of
                our journey means nothing if our medicine does not reach its
                final destination. We help navigate increasingly complex
                healthcare systems and continue to work to enable local patient
                access to transformational medical innovation now and in the
                future. Healthcare providers, government, regulators and payers
                help us understand access needs so we can create new tools and
                programs to improve how patients access and experience our
                innovations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
