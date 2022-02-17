import { withApollo } from '../libs/Apollo';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <h1 className="main-title">Tattoo M3</h1>
        <video
          className="video-container"
          controls
          loop
          autoPlay
          src={require('../public/Pexels.mp4')}
        >
          <track default></track>
        </video>
      </main>
      <style jsx>{`
        .home {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .main-title {
          z-index: 1;
          font-size: 4rem;
          font-family: Permanent Marker;
          color: aliceblue;
        }
        .video-container {
          width: 100%;
        }
        video {
          width: 100%;
          height: 92.2%;
          object-fit: fill;
          position: absolute;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
