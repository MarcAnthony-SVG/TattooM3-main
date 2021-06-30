import Nav from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <source className='tattooing' src="../public/tattooing.mp4" type="video/mp4"/>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
