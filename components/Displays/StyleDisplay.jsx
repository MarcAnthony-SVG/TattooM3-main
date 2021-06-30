import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
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
    <div className="card">
      {searchResults.map(({ user, likes, largeImageURL, id }) => (
        <Cards
          userName={user}
          likes={likes}
          id={id}
          pic={largeImageURL}
          likePhoto={likePhoto}
          deleteCard={deleteCard}
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
