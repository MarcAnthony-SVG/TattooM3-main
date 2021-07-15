import { useContext, useEffect, useState } from 'react';
import ImageContext from '../Context/ImageContext';
import Cards from '../Cards';

const Likes = () => {
  const { likedImages } = useContext(ImageContext);
  // const [likes, setLikes] = useState(0);
  
  return (
    <div className="likes-container" >
      Likes {likedImages.length}
      {likedImages.map(({ user, likes, largeImageURL, id }) => (
        <Cards
          userName={user}
          likes={likes}
          id={id}
          pic={largeImageURL}
          //   likePhoto={likePhoto}
          //   deleteCard={deleteCard}
          //   heartPhoto={heartPhoto}
        ></Cards>
      ))}
      <style jsx>{`
        .likes-container {
          background-color: white;
          color: black;
          border: 3px solid black;
          height: 57vh;
          width: 50%;
          border-radius: 10px;
          display: flex;
          flex-wrap: wrap;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};
export default Likes;
