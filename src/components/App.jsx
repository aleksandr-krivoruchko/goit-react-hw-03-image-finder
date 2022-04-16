import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from "./SearchBar/Searchbar";
import { Pictures } from "./Pictures/Pictures";


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
			<Pictures searchValue={this.state.searchValue}/>
			<ToastContainer position="top-left" autoClose={3000}/>
			</>
  );
	}
};
