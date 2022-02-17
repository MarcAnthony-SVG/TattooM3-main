import { Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Button from './Button';
//React Spring______________________________________________________________________________________________________________________________________________
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Cards = ({
  userName,
  id,
  pic,
  likes,
  deleteCard,
  remove,
  likePhoto,
  addToProfile,
}) => {
  const [dprops, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  //_________________________________________________________________________________________________________________________________________________________
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: dprops.xys.interpolate(trans),
        height: '18em',
        width: '13em',
        margin: '13px',
        border: '1px solid silver',
      }}
    >
      <div className="card-container">
        <h3>{userName}</h3>
        {/* <div className="photo" key={id}></div> */}
        {/* <Image
          loader={imageLoader}
          alt="Mountains"
          src={pic}
          width={500}
          height={500}
        ></Image> */}
        <img
          alt="tattoo"
          src={pic}
          width="206vw"
          height="140vh"
          margin="13px"
        ></img>
        <p style={{ borderTop: '1px solid black' }}>
          Likes<span>#{likes}</span>
        </p>
        <div className="text-container">
          {deleteCard ? (
            <Button clickEvent={deleteCard} id={id}></Button>
          ) : (
            <Button clickEvent={remove} id={id}></Button>
          )}
          {likePhoto ? <Button clickEvent={likePhoto} id={id}></Button> : <></>}
          {addToProfile ? (
            <Button clickEvent={addToProfile} id={id}></Button>
          ) : (
            <></>
          )}
          {/* {deleteCard ? (
            <button onClick={() => deleteCard(id)}>Delete</button>
          ) : (
            <button onClick={() => remove(id)}>Remove</button>
          )}

          {likePhoto ? (
            <button onClick={() => likePhoto(id)}>Like</button>
          ) : (
            <button onClick={() => likePhoto(id)}>Share</button>
          )}
          {addToProfile ? (
            <button onClick={() => addToProfile(id)}>Add To Profile</button>
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <style jsx>{`
        .card-container {
          width: 100%;
        }
        .text-container {
          display: flex;
        }
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          height: 3vh;
          border-bottom: 1px solid black;
        }
        p {
          bordertop: '1px solid black';
        }
        .photo {
          width: auto;
        }
      `}</style>
    </animated.div>
  );
};

export default Cards;
