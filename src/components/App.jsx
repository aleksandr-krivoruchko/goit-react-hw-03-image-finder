import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from "./SearchBar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./LoadMore/Button";


export class App extends Component {
state = {
	searchValue: "",
}


	handleFormSubmit = (value) => {
		this.setState({searchValue: value})
	}

	render(){
		  return (
			<>
			<Searchbar onSubmit={this.handleFormSubmit}/>
			<ImageGallery searchValue={this.state.searchValue}/>
			<Button />
			<ToastContainer position="top-left" autoClose={3000}/>
			</>
  );
	}
};
