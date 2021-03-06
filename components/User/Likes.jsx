import { useContext, useEffect, useState } from 'react';
import ImageContext from '../Context/ImageContext';
import Cards from '../Cards';

const Likes = () => {
  const { likedImages, setLikedImages } = useContext(ImageContext);
  // const [likes, setLikes] = useState(0);
  const remove = (id) => {
    let newResults = [...likedImages];
    newResults = newResults.filter((card) => {
      return card.id !== id;
    });
    console.log('USER - Removed a photo from their list');
    setLikedImages(newResults);
  };
  return (
    <div>
      <h3>Likes {likedImages.length}</h3>
      <section className="likes-container">
        {likedImages.map(({ user, likes, largeImageURL, id }) => (
          <Cards
            userName={user}
            likes={likes}
            id={id}
            pic={largeImageURL}
            //   likePhoto={likePhoto}
            remove={remove}
            //   heartPhoto={heartPhoto}
          ></Cards>
        ))}
      </section>
      <style jsx>{`
        .likes-container {
          background-color: white;
          color: black;
          border: 3px solid black;
          height: 29em;
          // width: 39em;
          border-radius: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          overflow: auto;
        }
        div {
          flex: 1 1 100px;
          background-color: white;
          color: black;
          border: 3px solid black;
        }
      `}</style>
    </div>
  );
};
export default Likes;
