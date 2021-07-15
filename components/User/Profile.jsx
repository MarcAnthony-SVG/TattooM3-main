import Image from 'next/image';
const pic =
  'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';
const Profile = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="profile-container">
      <section className="image-section">
        <Image
          loader={imageLoader}
          alt="UserImage"
          src={pic}
          width={300}
          height={300}
        ></Image>
      </section>
      <section className="user-info-section">
        <h1>Name</h1>
        <div className="inline-container">
          <div className="column-container">
            <h4>Last Visted</h4>
            <p>Oct 2021</p>
          </div>
          <div className="column-container">
            <h4>Location</h4>
            <p>San Antonio</p>
          </div>
        </div>
        <article>
          <h4>Bio</h4>
          <p>Welcome to my profile, I'm a software engineer and tattoo enthusiast! </p>
        </article>
      </section>
      <style jsx>{`
        .profile-container {
          color: black;
          display: flex;
        }
        h1 {
          color: black;
        }
        .image-section {
          border: 4px solid blue;
          margin-right: 10%;
        }
        .user-info-section {
          flex: 50%;
          border: 4px solid black;
          background: linear-gradient(to top, #808080 2%, #c0c0c0 94%);
          border-radius: 10px;
        }
        .inline-container {
          display: flex;
          justify-content: space-around;
        }
        .column-container {
        }
        article {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};
export default Profile;
