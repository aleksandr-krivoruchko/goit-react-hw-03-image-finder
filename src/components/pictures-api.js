const API_KEY = "25188312-8cdfcf53729040d6ed9110eb8";
const URL = "https://pixabay.com/api/";
const PER_PAGE = 12;


export function fetch (value) {
	
	return (fetch(`${URL}?q=${value}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&${PER_PAGE}`)
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject(new Error(`Нет результатов поиска по запросу ${this.props.searchValue}`))
	}))
}

