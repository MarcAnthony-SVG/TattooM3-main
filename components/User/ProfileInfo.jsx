import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
const ProfileInfo = () => {
  const { data: session, status } = useSession();
  const profilePic = !session
    ? 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'
    : session.user.image;
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const date = () => {
    const todaysDate = new Date();
    let todayString = todaysDate.toUTCString().split(' ');
    console.log(todayString);
    const [Dayofweek, Num, Month] = todayString;
    return `${Dayofweek} ${Month} ${Num} `;
    console.log(`${Month}` + `${Num}`);
  };

  return (
    <div>
      <header>
        <img
          src="https://mcdn.wallpapersafari.com/medium/32/3/S1jatp.jpg"
          alt="User-Profile-Background"
        />
        <figure>
          {!session ? (
            <Image
              loader={imageLoader}
              alt="User-Profile-Picture"
              src={profilePic}
              width={200}
              height={200}
            ></Image>
          ) : (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img src={profilePic} alt="User-Profile-Picture" />
          )}
        </figure>
        <section className="header-bottom">
          {!session ? <h1>User Name</h1> : <h1>{session.user.name}</h1>}
          <section>
            {!session ? (
              <>
                <h4>Last Visited:</h4>
                <h4>
                  Location:<span></span>
                </h4>
              </>
            ) : (
              <>
                <h4>Last Visited: {date()}</h4>
                <h4>
                  Location:<span> San Antonio</span>
                </h4>
              </>
            )}
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
        .dontMoveImage {
          transform: rotate(0 deg);
          transform-origin: 0% 0%;
        }
        .moveImage {
          transform: rotate(45deg);
          transform-origin: 20% 40%;
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
