import { Watch } from  'react-loader-spinner'
import { LoaderStyle } from "./LoaderStyle.styled";

export function Loader() {
	return (
		<LoaderStyle className="loader">
		<h3 className='text'>Загрузка...</h3>
	<Watch
    height="30"
    width="30"
    color='blue'
    ariaLabel='loading'
  />
		</LoaderStyle>
		

	);
}