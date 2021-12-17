import { withApollo } from '../libs/Apollo';
import UserSearch from './NavBar/UserSearch';
import StyleSearch from './NavBar/StyleSearch';

const SearchBar = ({ setUserSearch, userSearch, setTattooSearch, setPage }) => {
  return (
    <section>
      <article>
        <UserSearch
          userSearch={userSearch}
          setPage={setPage}
          setUserSearch={setUserSearch}
        ></UserSearch>
      </article>
      <article className="form-style">
        <StyleSearch
          setTattooSearch={setTattooSearch}
          setPage={setPage}
        ></StyleSearch>
      </article>
      <style jsx>{`
        section {
          display: flex;
          border: solid 1px black;
          width: 90%;
          height: 10vh;
        }
        article {
          margin: auto;
        }
        
      `}</style>
    </section>
  );
};

export default withApollo(SearchBar);
