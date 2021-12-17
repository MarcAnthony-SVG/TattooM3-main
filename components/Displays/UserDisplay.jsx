import React, { useState, useEffect, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import Cards from '../Cards';
import ImageContext from '../Context/ImageContext.jsx';

const USER_CARD_SEARCH = gql`
  query SearchByUserInput($search: String) {
    searched_PB_By_Style(style: $search) {
      id
      tags
      largeImageURL
      likes
      user
    }
  }
`;

const UserDisplay = ({ searchPhrase }) => {
  const { loading, data, error } = useQuery(USER_CARD_SEARCH, {
    variables: { search: `${searchPhrase}` },
  });
  const {
    likedImages,
    setLikedImages,
    userSearchResults,
    setUserSearchResults,
    searchResults,
    setSearchResults,
    profile,
    setProfile,
  } = useContext(ImageContext);

  useEffect(() => {
    // do some checking here to ensure data exist
    if (data) {
      let results = data.searched_PB_By_Style;
      // mutate data if you need to
      setSearchResults(results);
    }
  }, [data]);
  const deleteCard = (id) => {
    let newResults = [...searchResults];
    newResults = newResults.filter((card) => {
      return card.id !== id;
    });
    console.log('USER - Clicked Delete');
    setSearchResults(newResults);
  };
  const likePhoto = (id) => {
    let newResults = [...searchResults];
    newResults = newResults.map((card) => {
      if (card.id === id) {
        card.likes += 1;
      }
      return card;
    });
    setSearchResults(newResults);
    addToProfile(id);
  };
  const addToProfile = (id) => {
    let newResults = [...searchResults];
    newResults = newResults.map((card) => {
      if (card.id === id) {
        setLikedImages((prevValues) => [...prevValues, card]);
      }
    });
  };
  return (
    <>
      <p>Results:{searchResults ? <span>{searchResults.length}</span>: <span>0</span>}</p>
      <div className="card">
        {searchResults.map(({ user, likes, largeImageURL, id }) => (
          <Cards
            userName={user}
            likes={likes}
            id={id}
            pic={largeImageURL}
            likePhoto={likePhoto}
            deleteCard={deleteCard}
            profile={profile}
            addToProfile={addToProfile}
          ></Cards>
        ))}
      </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};
export default UserDisplay;
