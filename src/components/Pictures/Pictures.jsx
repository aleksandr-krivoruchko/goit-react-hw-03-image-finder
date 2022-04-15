import { Component } from "react";
import { Loader } from "../Loader/Loader";
import { Button } from "../LoadMore/Button";
import { ImageGallery } from "../ImageGallery/ImageGallery";

const API_KEY = "25188312-8cdfcf53729040d6ed9110eb8";
const URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

export class Pictures extends Component {

 state = {
	pictures: [],
	error: null,
	status: "idle",
	page: 1,
	total: 100,
	visible: 12
 }

 fetchImages = (value) => {
	 return fetch(`${URL}?q=${value}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject(new Error(`Нет результатов поиска по запросу ${this.props.searchValue}`))
	})
 }



componentDidUpdate(prevProps){
if(prevProps.searchValue !== this.props.searchValue){

this.setState({status: "pending"})

	this.fetchImages(this.props.searchValue)
	.then(data => this.setState({pictures: data.hits, total: data.totalHits, status:"resolved"}))
	.catch(error => this.setState({error, status:"resolved"}))
}
}
 
handleBtnLoadMore = (e) => {
this.setState((prev) => {
return {visible: prev.visible + 12}
})
}

render(){
	const {pictures, error, status} = this.state;

	if (status === "idle" || pictures.length === 0) {
		return <h2 className="text">Ничего не найдено. Введите запрос в поле поиска</h2>
	}
		if (status === "pending") {
		return <Loader/>
	}
		if (status === "rejected") {
		return <h2>{error.message}</h2>
	}
		if (status === "resolved") {
		return (<>
			<ImageGallery pictures={pictures}/>
			<Button onClick={this.handleBtnLoadMore}/>
				</>
	)
	}
}  
}

