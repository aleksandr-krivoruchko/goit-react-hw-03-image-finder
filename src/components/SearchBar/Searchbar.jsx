import { SearchbarStyle, SearchForm, SearchFormBtn, SearchFormLabel, SearchFormInput} from "./SearchbarStyle.styled";


export const Searchbar = () => {
	return (
		<SearchbarStyle>
  <SearchForm>
    <SearchFormBtn type="submit">
      <SearchFormLabel class="button-label">O^O</SearchFormLabel>
    </SearchFormBtn>

    <SearchFormInput
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchbarStyle>
	);
}