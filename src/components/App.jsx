import { Component } from "react";
import { Searchbar } from "./SearchBar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ToastContainer } from 'react-toastify';


const API_KEY = "25188312-8cdfcf53729040d6ed9110eb8";
const URL = "https://pixabay.com/api/";

export class App extends Component {
state = {
	searchValue: "",
	pictures: [],
}

componentDidMount() {
	fetch(`https://pixabay.com/api/?q=car&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
	.then(response => response.json())
	.then(data => this.setState({pictures: data.hits}))
}


	handleFormSubmit = (value) => {
		this.setState({searchValue: value})
	}

	render(){
		  return (
			<>
			<Searchbar onSubmit={this.handleFormSubmit}/>
			<ImageGallery pictures={this.state.pictures}/>
			<ToastContainer/>
			</>
  );
	}
};
