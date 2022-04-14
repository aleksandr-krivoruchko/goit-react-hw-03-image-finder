import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { SearchbarStyle, SearchForm, SearchFormBtn, SearchFormInput} from "./SearchbarStyle.styled";
import { Component } from "react";
import PropTypes from 'prop-types';


export class Searchbar extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	}

	state = {
		searchValue: "",
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		if(this.state.searchValue.trim() === ""){
			toast.warn('Enter correct value!!!');
			return
		}
		this.props.onSubmit(this.state.searchValue);
		this.setState({searchValue: ""})
	}


handleChange = (e) => {
	const {value} = e.currentTarget;

	this.setState({
		searchValue: value.toLowerCase(),
	})
}

	render(){

		return (
	<SearchbarStyle>
		<SearchForm onSubmit={this.handleSubmit}>
			<SearchFormBtn type="submit">
				<VscSearch size="20"/>
			</SearchFormBtn>

			<SearchFormInput
			value={this.state.searchValue}
			onChange={this.handleChange}
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
}