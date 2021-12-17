import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
// const USER_CARD_SEARCH = gql`
//   query Query($search: String) {
//     searched_PB_By_Style(style: $search) {
//       id
//       tags
//       largeImageURL
//       likes
//       user
//     }
//   }
// `;
const UserSearch = ({ setUserSearch, userSearch, setPage }) => {
  const [phrase, setPhrase] = useState('');
  // const { loading, error, data } = useQuery(USER_CARD_SEARCH, {
  //   variables: { search: `${userSearch}` },
  // });
  // if (error) return `Error! ${error.message}`;
  // if (loading) return 'Loading...';
  // console.log('Testing Tattoo Style', `${userSearch}`);
  // const userData = data.searched_PB_By_Style;
  // console.log(userData);

  const handleSubmit = (e) => {
    setUserSearch(phrase);
    setPage('UserDisplay');
    e.preventDefault();
  };
  const onChange = (e) => {
    setPhrase(e.target.value);
  };
  return (
    <>
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
      <style jsx>{`
        form {
          // background-color: red;
        }
        @media (max-width: 730px) {
          form {
            // background-color: blue;
            display: flex;
            flex-direction: column;
          }
          input {
            width:100%;
          }
        }
      `}</style>
    </>
  );
};
export default UserSearch;
