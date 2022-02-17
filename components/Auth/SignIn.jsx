import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignIn = () => {
  const { data: session, status } = useSession();
  return (
    <nav>
      <ul className="rightNavSection">
        {!session ? (
          <li>
            <button className="auth-button" onClick={() => signIn()}>
              <a>Sign in</a>
            </button>
          </li>
        ) : (
          <li>
            <button className="auth-button" onClick={() => signOut()}>
              <a>Sign out</a>
            </button>
          </li>
        )}
      </ul>
      {!session ? (
        <p>Not signed in</p>
      ) : (
        <p>Signed in as {session.user.email}</p>
      )}
      <style jsx>{`
        nav {
         position:relative;
         top:-10px;
         display:inline-flex;
         width:31em;
         align-items:center;
         gap:4%;
          }
      .auth-button {
        transition-duration: 0.4s;
        border: 1px solid black;
        padding: 1em 3em;
        border-radius: 3px;
        display: flex;
        width: 100%;      
      }
      .auth-button:hover {
        background-color: grey; 
        color: white;
      }
      button {
        color: black;
        font-size: 13px;
        }
      .rightNavSection > li{
          display: flex;
        }  
      nav > ul {
          padding 3px;
        }  
      a{
          width:70px
        }
        }
      `}</style>
    </nav>
  );
};
export default SignIn;
