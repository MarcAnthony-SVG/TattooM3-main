import Layout from '../components/Layout';
import Profile from '../components/User/ProfileInfo';
import Likes from '../components/User/Likes';
// import Dislikes from '../components/User/Dislikes';

function ProfilePage() {
  return (
    <Layout>
      <main>
        <section className="upperSection">
          <Profile></Profile>
        </section>
        <section className="lowerSection">
          <Likes></Likes>
          {/* <Dislikes></Dislikes> */}
        </section>
      </main>
      <style jsx>{`
        main {
          background-color: silver;
          border: 1px solid black;
          
        }
        .upperSection {
          background-color: grey;
          color: black;
          position: relative;
          left: 25%;
          width: 50%;
        }
        .lowerSection {
          background-color: rgb(220, 220, 220);
          display: flex;
          position: relative;
          left: 25%;
          width: 50%;
        }
        @media (max-width: 730px) {
          .upperSection {
            background-color: red;
            color: black;
            left: 0;
            width: 100%;
          }
          .lowerSection {
            display: flex;
            position: relative;
            left: 0%;
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}

export default ProfilePage;
