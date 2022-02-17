import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import React, { useState } from 'react';
import { withApollo } from '../libs/Apollo';
import StyleDisplay from '../components/Displays/StyleDisplay';
import UserDisplay from '../components/Displays/UserDisplay';

const ImageGallery = () => {
  const [userSearch, setUserSearch] = useState();
  const [tattooSearch, setTattooSearch] = useState();
  const [page, setPage] = useState();
  return (
    <Layout>
      <main className="imageGalleryContainer">
        <h1>Image Gallery</h1>
        <SearchBar
          setUserSearch={setUserSearch}
          userSearch={userSearch}
          setPage={setPage}
          setTattooSearch={setTattooSearch}
        ></SearchBar>
        <section>
          {page === 'StyleDisplay' ? (
            <StyleDisplay searchPhrase={tattooSearch}></StyleDisplay>
          ) : (
            <UserDisplay searchPhrase={userSearch}></UserDisplay>
          )}
        </section>
      </main>
      <style jsx>{`
        .imageGalleryContainer {
          background-color: white;
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        h1 {
          font-size: 350%;
        }

        section {
          display: flex;
          flex-wrap: wrap;
          margin: 43px;
        }
      `}</style>
    </Layout>
  );
};
export default withApollo(ImageGallery);
