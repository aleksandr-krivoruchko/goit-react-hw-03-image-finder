import { Component } from "react";
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import * as Scroll from 'react-scroll';

import { Loader } from "../Loader/Loader";
import { Button } from "../LoadMore/Button";
import { ImageGallery } from "../ImageGallery/ImageGallery";

const API_KEY = "25188312-8cdfcf53729040d6ed9110eb8";
const URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

export class Pictures extends Component {
	static propTypes = {
      searchValue: PropTypes.string.isRequired,
	}

 state = {
	pictures: [],
	error: null,
	status: "idle",
	page: 1,
	total: 0,
	left: 0
 }

 fetchImages = (value) => {
	 return fetch(`${URL}?q=${value}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject(new Error(`Нет результатов поиска по запросу ${this.props.searchValue}`))
	})
 }


componentDidUpdate(prevProps, prevState){
	const {page, pictures} = this.state;
	const {searchValue} = this.props;

if(prevProps.searchValue !== searchValue){
this.setState({status: "pending"})

	this.fetchImages(searchValue)
	.then(({hits, totalHits}) => {
		if (hits.length !== 0) {
				this.setState({pictures: hits, total: totalHits, status:"resolved"})
		} else {
				this.setState({pictures: [], status:"resolved"});
				toast.error(`Нет результатов поиска по запросу ${searchValue}`)
		}})
	.catch(error => this.setState({error, status:"resolved"}))
}

if (prevState.page !== page) {
	this.setState({status: "pending"})

	this.fetchImages(searchValue)
	.then(({hits}) => this.setState({pictures: [...pictures, ...hits], status:"resolved"}))
	.catch(error => this.setState({error, status:"resolved"}))
}
}

 
handleBtnLoadMore = () => {

this.setState((prev) => {
return {page: prev.page + 1}
})

const scroll = Scroll.animateScroll;
scroll.scrollToBottom();
}


render(){
	const {pictures, error, status, page, total} = this.state;
	const limit = (total - page * PER_PAGE) + PER_PAGE;

	if (status === "idle" || pictures.length === 0) {
		return <h2 className="text">Введите запрос в поле поиска</h2>
	}
		if (status === "pending") {
		return <Loader/>
	}
		if (status === "rejected") {
		return <h2>{error.message}</h2>
	}
		if (status === "resolved") {

	if (limit < 0) {
		toast.info(`Это все картинки ${total}шт. по вашему запросу`);
	}

		return (<>
					<ImageGallery pictures={pictures}/>
					{limit > PER_PAGE && <Button onClick={this.handleBtnLoadMore}/>}
				</>
	)
	}
}  
}

