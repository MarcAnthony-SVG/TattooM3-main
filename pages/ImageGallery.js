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
      <div className="Image-Gallery-Container">
        <h1 id="image-gallery">Image Gallery</h1>
        <SearchBar
          setUserSearch={setUserSearch}
          userSearch={userSearch}
          setPage={setPage}
          setTattooSearch={setTattooSearch}
          className="SearchBar-Container"
        ></SearchBar>
        <div className="Card-Container">
          {page === 'StyleDisplay' ? (
            <StyleDisplay searchPhrase={tattooSearch}></StyleDisplay>
          ) : (
            <UserDisplay searchPhrase={userSearch}></UserDisplay>
          )}
        </div>
      </div>
      <style jsx>{`
        .Image-Gallery-Container {
          background-color: white;
          color: black;
        }
        #image-gallery {
          font-size: 350%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .SearchBar-Container {
          background-color: white;
        }
        .Card-Container {
          display: flex;
          flex-wrap: wrap;
          margin: 43px;
        }
      `}</style>
    </Layout>
  );
};
export default withApollo(ImageGallery);
