import '../App.css';

interface ISearchContainer {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  keyword: string;
}

const SearchContainer = ({
  handleChange,
  handleSubmit,
  keyword,
}: ISearchContainer) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label>
          Find photos by keyword
          <input
            type="text"
            value={keyword}
            onChange={handleChange}
            placeholder="Type the keyword here"
          />
        </label>
        <button type="submit" value="Find photos" />
      </form>
    </div>
  );
};

export default SearchContainer;
