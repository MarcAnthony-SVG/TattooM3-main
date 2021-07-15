import React, { useState, useEffect, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import ImageContext from '../Context/ImageContext.jsx';

import Cards from '../Cards';

const STYLES_CARD_SEARCH = gql`
  query SearchByStyle($search: String) {
    searched_PB_By_Style(style: $search) {
      id
      tags
      largeImageURL
      likes
      user
    }
  }
`;

const StyleDisplay = ({ searchPhrase }) => {
  const { loading, data, error } = useQuery(STYLES_CARD_SEARCH, {
    variables: { search: `${searchPhrase} tattoos` },
  });
  const {
    likedImages,
    setLikedImages,
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
      console.log('data style', data);
      setSearchResults(results);
    }
  }, [data]);
  const deleteCard = (id) => {
    let newResults = [...searchResults];
    newResults = newResults.filter((card) => {
      return card.id !== id;
    });
    console.log('STYLE - Clicked Delete');
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
    const likedPhotos = [];
    newResults = newResults.map((card) => {
      if (card.id === id) {
        likedPhotos.push(card);
        // setProfile(!profile);
      }
    });
    setLikedImages(likedPhotos);
  };

  return (
    <div className="card">
      {searchResults.map(({ user, likes, largeImageURL, id }) => (
        <Cards
          userName={user}
          likes={likes}
          id={id}
          pic={largeImageURL}
          likePhoto={likePhoto}
          deleteCard={deleteCard}
          // profile={profile}
          addToProfile={addToProfile}
        ></Cards>
      ))}
      <style jsx>{`
        .card {
          display: contents;
        }
      `}</style>
    </div>
  );
};
export default StyleDisplay;
