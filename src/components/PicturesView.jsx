import { Component } from "react";
import PropTypes from 'prop-types';
import { Loader } from "../Loader/Loader";

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyle } from "./ImageGalleryStyle.styled";

const API_KEY = "25188312-8cdfcf53729040d6ed9110eb8";
const URL = "https://pixabay.com/api/";


export class PicturesView extends Component {
 static propTypes = {
	   pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  )
 };

 state = {
	pictures: [],
	error: null,
	status: "idle"
 }


componentDidUpdate(prevProps){
if(prevProps.searchValue !== this.props.searchValue){

this.setState({status: "pending"})

		fetch(`${URL}?q=${this.props.searchValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
	.then(response => {
	// Ловим ошибку 404 и выводим сообщение о ней, остальные поймает catch
		if(response.ok){
			return response.json();
		}
		return Promise.reject(new Error(`Нет результатов поиска по запросу ${this.props.searchValue}`))
	})
	.then(data => this.setState({pictures: data.hits, status:"resolved"}))
	.catch(error => this.setState({error, status:"resolved"}))
}
}
 

render(){
	const {pictures, error, status} = this.state;

	if (status === "idle" || this.state.pictures.length === 0) {
		return <h2 className="text">Ничего не найдено. Введите запрос в поле поиска</h2>
	}
		if (status === "pending") {
		return <Loader/>
	}
		if (status === "rejected") {
		return <h2>{error.message}</h2>
	}
		if (status === "resolved") {
		return <ImageGalleryStyle>
    {pictures.map(({id, webformatURL, tags}) => (
		 <ImageGalleryItem key={id} id={id} src={webformatURL} alt={tags}/>
	 ))}
	</ImageGalleryStyle>
	}
}
}

