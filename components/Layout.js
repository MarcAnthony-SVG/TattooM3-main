// eslint-disable-next-line jsx-a11y/rule-name
import Nav from './NavBar/NavBar';
import SignIn from './Auth/SignIn';
const Layout = ({ children }) => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
      <source
        className="tattooing"
        src="../public/tattooing.mp4"
        type="video/mp4"
      />
      <header>
        <Nav />
        <SignIn />
      </header>
      <main>{children}</main>
      <style jsx>{`
        header {
          background-color: silver;
          width:100%
          display: inline-flex;
          flex-direction: row;
          flex-wrap:wrap;
        }
        
      `}</style>
    </div>
  );
};

export default Layout;
