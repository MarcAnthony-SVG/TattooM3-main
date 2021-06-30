import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
const USER_CARD_SEARCH = gql`
  query Query($search: String) {
    searched_PB_By_Style(style: $search) {
      id
      tags
      largeImageURL
      likes
      user
    }
  }
`;
const UserSearch = ({ setUserSearch, userSearch, setPage }) => {
  const [phrase, setPhrase] = useState('');
  const { loading, error, data } = useQuery(USER_CARD_SEARCH, {
    variables: { search: `${userSearch}` },
  });
  if (error) return `Error! ${error.message}`;
  if (loading) return 'Loading...';
  console.log('Testing Tattoo Style', `${userSearch}`);
  const userData = data.searched_PB_By_Style;
  console.log(userData);

  const handleSubmit = (e) => {
    setUserSearch(phrase);
    setPage('UserDisplay');
    e.preventDefault();
  };
  const onChange = (e) => {
    setPhrase(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            onChange={(e) => onChange(e)}
            type="text"
            name="name"
            value={phrase}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};
export default UserSearch;
