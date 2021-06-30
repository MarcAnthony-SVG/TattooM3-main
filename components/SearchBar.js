import { withApollo } from '../libs/Apollo';
import UserSearch from './NavBar/UserSearch';
import StyleSearch from './NavBar/StyleSearch';

const SearchBar = ({ setUserSearch, userSearch, setTattooSearch, setPage }) => {
  return (
    <div className="search-container">
      <div className="form-style">
        <UserSearch
          userSearch={userSearch}
          setPage={setPage}
          setUserSearch={setUserSearch}
        ></UserSearch>
      </div>
      <div className="form-style">
        <StyleSearch
          setTattooSearch={setTattooSearch}
          setPage={setPage}
        ></StyleSearch>
      </div>
      <style jsx>{`
        .search-container {
          display: flex;
          border: solid 1px black;
          position: relative;
          left: 2%;
          width: 90%;
          height: 40px;
        }
        .form-style {
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default withApollo(SearchBar);
