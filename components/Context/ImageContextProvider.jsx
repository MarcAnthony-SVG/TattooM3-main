import React, { useState } from 'react';
import ImageContext from './ImageContext';

const ImageProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [likedImages, setLikedImages] = useState([]);
  // const [profile, setProfile] = useState(!profile);

  //   const deleteCard = (id) => {
  //     let newResults = [...searchResults];
  //     newResults = newResults.filter((card) => {
  //       return card.id !== id;
  //     });
  //     console.log('STYLE - Clicked Delete');
  //     setSearchResults(newResults);
  //   };
  //   const likePhoto = (id) => {
  //     let newResults = [...searchResults];
  //     newResults = newResults.map((card) => {
  //       if (card.id === id) {
  //         card.likes += 1;
  //       }
  //       return card;
  //     });
  //     setSearchResults(newResults);
  //     heartPhoto(id);
  //   };
  //   const heartPhoto = (id) => {
  //     let newResults = [...userSearchResults];
  //     const likedPhotos = [];
  //     newResults = newResults.map((card) => {
  //       if (card.id === id) {
  //         likedPhotos.push(card);
  //       }
  //     });
  //     setLikedImages(likedPhotos);
  //   };

  return (
    <ImageContext.Provider
      value={{
        likedImages,
        setLikedImages,
        searchResults,
        setSearchResults,
        // profile,
        // setProfile,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
export default ImageProvider;
