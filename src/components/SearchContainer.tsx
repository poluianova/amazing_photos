import '../App.css';

interface ISearchContainer {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOrientationChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  keyword: string;
}

const SearchContainer = ({
  handleInputChange,
  handleSubmit,
  keyword,
  handleColorChange,
  handleOrientationChange,
}: ISearchContainer) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={keyword}
            onChange={handleInputChange}
            placeholder="Type the keyword here"
          />

          <select name="color" onChange={handleColorChange}>
            <option value="">Any color</option>
            <option value="black_and_white">Black and white</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
            <option value="magenta">Magenta</option>
            <option value="green">Green</option>
            <option value="teal">Teal</option>
            <option value="blue">Blue</option>
          </select>
          <select name="orientation" onChange={handleOrientationChange}>
            <option value="">Any orientation</option>
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
            <option value="squarish">Squarish</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchContainer;
