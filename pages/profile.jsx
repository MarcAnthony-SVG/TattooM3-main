import Layout from '../components/Layout';
import Profile from '../components/User/Profile';
import Likes from '../components/User/Likes';
import Dislikes from '../components/User/Dislikes';

function Liked() {
  return (
    <Layout>
      <section className="liked-modal">
        <Profile></Profile>
        <div className="container">
          <Likes></Likes>
          <Dislikes></Dislikes>
        </div>
      </section>
      <style jsx>{`
        .liked-modal {
          background-color: red;
          height: 93.5vh;
          color: black;
        }
        .container {
          display: flex;
        }
      `}</style>
    </Layout>
  );
}

export default Liked;
