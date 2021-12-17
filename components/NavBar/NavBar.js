import Link from 'next/link';
import ImageContext from '../Context/ImageContext';

const Nav = () => {
  // const { data: session } = useSession();
  // const {imageLiked} = conscontext = useContext(contextValue)
  return (
    <nav>
      <ul className="navigationBar">
        <li>
          <Link href="/">
            <a className="navBar-button">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="navBar-button">About</a>
          </Link>
        </li>
        <li>
          <Link href="/ImageGallery">
            <a className="navBar-button">Image Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className="navBar-button">Profile</a>
          </Link>
        </li>
      </ul>
      {/* <ul className="rightNavSection">
        {!session && (
          <li>
            <a className="navBar-button" onClick={() => signIn()}>
              Sign in
            </a>
            <p>Not signed in</p>
          </li>
        )}
        {session && (
          <li>
            <a className="navBar-button" onClick={() => signOut()}>
              Sign out
            </a>
            <p>Signed in as {session.user.email}</p>
          </li>
        )}
      </ul> */}

      <style jsx>{`
        .navBar-button {
          transition-duration: 0.4s;
          border: 1px solid black;
          padding: 1em 3em;
          border-radius: 3px;
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          top: -10px;
        }
        .navBar-button:hover {
          background-color: grey;
          color: white;
        }
        nav {
          flex-grow: 1;
          display: flex;
          text-align: center;
          padding: 1px;
          font-weight: 900;
        }
        // .likes {
        //   color: red;
        //   margin-left: 10px;
        //   padding: 0px 3px 0px 3px;
        //   border: 1px solid black;
        //   border-radius: 40px;
        // }
        ul {
          display: inline-flex;
        }
        nav > ul {
          padding: 2px;
        }
        ul > li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: black;
          padding: 10px 10px 10px 10px;
          text-decoration: none;
          font-size: 13px;
        }
        p {
          padding: 1em 3em;
          position: relative;
          display: flex;
          align-items: center;
          top: -10px;
        }
        @media (max-width: 730px) {
          ul {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .navBar-button {
            width: 100%;
          }
          ul > li {
            padding: 0px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
