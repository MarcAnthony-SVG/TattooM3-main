import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const ProfileInfo = () => {
  const { data: session, status } = useSession();
  const profilePic = !session
    ? 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'
    : session.user.image;
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const date = () => {
    const today = new Date();
    let todayString = today.toUTCString().split(' ');

    const [Dayofweek, Num, Month] = todayString;
    console.log(`${Month}` + `${Num}`);
  };
  return (
    <div>
      <header>
        <img
          src="https://mcdn.wallpapersafari.com/medium/32/3/S1jatp.jpg"
          alt="Background-Image"
        />
        <figure>
          {!session ? (
            <Image
              loader={imageLoader}
              alt="UserImage"
              src={profilePic}
              width={200}
              height={200}
            ></Image>
          ) : (
            <img src={profilePic} alt="Background-Image" />
          )}
        </figure>
        <section className="header-bottom">
          {!session ? <h1>User Name</h1> : <h1>{session.user.name}</h1>}
          <section>
            <h4>
              Last Visted:<span>{date()}</span>
            </h4>
            <h4>
              location:<span> San Antonio</span>
            </h4>
          </section>
        </section>
      </header>

      <article>
        <h4>Bio</h4>
        <p>
          Welcome to my profile, I'm a software engineer and tattoo enthusiast!{' '}
        </p>
      </article>
      <style jsx>{`
        .profile-container {
          color: black;
          display: flex;
        }
        h1 {
          color: white;
        }
        .image-section {
          border: 4px solid blue;
          margin-right: 10%;
        }
        .inline-container {
          display: flex;
          justify-content: space-around;
        }
        .column-container {
        }
        article {
          display: flex;
          background-color: rgb(220, 220, 220);
          flex-direction: column;
        }
        figure > img {
          width: 12em;
        }
      `}</style>
    </div>
  );
};
export default ProfileInfo;
