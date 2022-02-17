const Button = ({ clickEvent, id }) => {
  let name = '';
  if (!clickEvent) {
    name = '';
  } else if (clickEvent.name === 'likePhoto') {
    name = 'Like';
  } else if (clickEvent.name === 'addToProfile') {
    name = 'Add To Profile';
  } else if (clickEvent.name === 'remove') {
    name = 'Remove';
  } else if (clickEvent.name === 'deleteCard') {
    name = 'Delete';
  }
  return <button onClick={() => clickEvent(id)}>{`${name}`}</button>;
};
export default Button;
