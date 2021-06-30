import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import React, { useState } from 'react';
import { withApollo } from '../libs/Apollo';
import { gql, useQuery } from '@apollo/client';
import StyleDisplay from '../components/Displays/StyleDisplay';
import UserDisplay from '../components/Displays/UserDisplay';

// const STYLES_CARD_SEARCH = gql`
//   query SearchByStyle($search: String) {
//     searched_PB_By_Style(style: $search) {
//       id
//       tags
//       largeImageURL
//       likes
//       user
//     }
//   }
// `;

const ImageGallery = () => {
  // const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log('IMAGE_GALLERY', data);
    setTattooSearch(data);
  };
  const [userSearch, setUserSearch] = useState();
  const [tattooSearch, setTattooSearch] = useState();
  const [page, setPage] = useState();

  function getTattooStyle(e) {
    setTattooSearch(e);
    onSubmit(e.style);
  }

  // const { loading, error, data } = useQuery(STYLES_CARD_SEARCH, {
  //   variables: { search: `${tattooSearch}` },
  // });
  // if (error) return `Error! ${error.message}`;
  // if (loading) return 'Loading...';
  // console.log('Testing Tattoo Style', `tattoo ${tattooSearch}`);
  // const userData = data.searched_PB_By_Style;
  // console.log(userData);

  return (
    <Layout>
      <div className="Image-Gallery-Container">
        <h1 id="image-gallery">Image Gallery</h1>
        <SearchBar
          setUserSearch={setUserSearch}
          userSearch={userSearch}
          setPage={setPage}
          // tattooSearch={tattooSearch}
          onChange={getTattooStyle}
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
