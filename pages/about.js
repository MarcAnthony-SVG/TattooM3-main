import Layout from '../components/Layout';
import Image from 'next/image';
const About = () => {
  return (
    <Layout>
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        About
      </h1>
      <img alt="About Page Background"
        style={{
          zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: '90%',
        }}
        src="../images/Tattooing_Background.jpg"
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: 'auto',
          height: '791px',
          justifyContent: 'center',
        }}
      >
        {/* <Image
          className="backgroundImageBlur"
          layout="fill"
          objectFit="cover"
          src="/images/Tattooing_Background.jpg"
        /> */}
        <article className="about-container">
          <h2>WELCOME TO TATTOO M3!</h2>
          <p>
            ESTABLISHED IN 2020 TATTOO M3 was a project created to connect
            tattoo new comers, those curious about tattoos and tattoo enthusiast
            with inspirations as well as tattoo artist in their area.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default About;
