import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Cards from '../Cards';

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
  // const { loading, error, data } = useQuery(USER_CARD_SEARCH, {
  //   variables: { search: `${searchPhrase}` },
  // });
  // if (error) return `Error! ${error.message}`;
  // if (loading) return 'Loading...';
  // console.log('Testing Tattoo Style', `${searchPhrase}`);
  // let userData = data.searched_PB_By_Style;
  // console.log(userData);
  // const deleteCard = (id) => {
  //   console.log('UserDisplay clicked', id);
  //   const newResults = [...userData];
  //   let filtedResults = newResults.filter((card) => {
  //     return card.id !== id;
  //   });
  //   userData = filtedResults;

  //   return userData;
  // };
  const { loading, data, error } = useQuery(USER_CARD_SEARCH, {
    variables: { search: `${searchPhrase}` },
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // do some checking here to ensure data exist
    if (data) {
      let results = data.searched_PB_By_Style;
      // mutate data if you need to
      setSearchResults(results);
    }
  }, [data]);
  const deleteCard = (id) => {
    const newResults = [...searchResults];
    newResults = newResults.filter((card) => {
      return card.id !== id;
    });
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
  };
  return (
    <>
      {/* <div className="Image-Gallery-Container"> */}
      <div className="card">
        {searchResults.map(({ user, likes, largeImageURL, id }) => (
          <Cards
            deleteCard={deleteCard}
            userName={user}
            likes={likes}
            likePhoto={likePhoto}
            id={id}
            pic={largeImageURL}
          ></Cards>
        ))}
      </div>
      {/* </div> */}
      <style jsx>{`
        .card {
          display: contents;
        }
      `}</style>
    </>
  );
};
export default UserDisplay;
