import { useForm } from 'react-hook-form';

const StyleSearch = ({ setTattooSearch, setPage }) => {
  const tattooStyles = [
    { value: 'Traditional', label: 'Traditional' },
    { value: 'Realism ', label: 'Realism' },
    { value: 'Watercolor', label: 'Watercolor' },
    { value: ' Tribal', label: 'Tribal' },
    { value: 'New School ', label: 'New School' },
    { value: ' Neo Traditional', label: 'Neo Traditional' },
    { value: 'Japanese ', label: 'Japanese' },
    { value: ' Illustrative', label: 'Illustrative' },
    { value: ' Chicano', label: 'Chicano' },
    { value: 'Abstract ', label: 'Abstract' },
    { value: 'Trash Polka ', label: 'Trash Polka' },
    { value: 'Blackwork', label: 'Blackwork' },
    { value: ' Greywash', label: 'Greywash' },
    { value: ' Negative Space', label: 'Negative Space' },
    { value: 'Silhouette ', label: 'Silhouette' },
    { value: 'Brushstroke ', label: 'Brushstroke' },
    { value: ' Dotwork', label: 'Dotwork' },
    { value: ' Pointillism', label: 'Pointillism' },
    { value: ' Geometric', label: 'Geometric' },
    { value: 'Polygon ', label: 'Polygon' },
    { value: ' Ornamental', label: 'Ornamental' },
    { value: 'Glitch ', label: 'Glitch' },
    { value: 'Graffiti ', label: 'Graffiti' },
  ];
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ style }) => {
    console.log('FORMS', style);
    setPage('StyleDisplay');
    setTattooSearch(style);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Choose a style: </label>
        <select ref={register} name="style">
          {tattooStyles.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <input value="Search" type="submit" tattoostyle="Submit" />
      </form>
      <style jsx>{``}</style>
    </div>
  );
};
export default StyleSearch;
