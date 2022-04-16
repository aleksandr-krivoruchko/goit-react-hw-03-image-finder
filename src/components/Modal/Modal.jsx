import React from 'react';
import ReactDOM from 'react-dom';
// import { Component } from "react";

import { Overlay, ModalStyle} from "./Modal.styled";


export const Modal = ({src, alt, closeModal}) => {
  return ReactDOM.createPortal(

		<Overlay class="overlay" onClick={closeModal}>
			<ModalStyle class="modal">
				<img src={src} alt={alt} />
			</ModalStyle>
		</Overlay>,

    document.getElementById("popup-root")
  );
};

// export class Modal extends Component {
// 	componentDidMount(){
// 	document.addEventListener("keydown", this.closeModalOnEsc)
// }
// componentWillUnmount(){
// 	document.removeEventListener("keydown", this.closeModalOnEsc)
// }

// render(){
// 	const {src,alt,closeModal,closeModalOnEsc} = this.props;
// 	  return ReactDOM.createPortal(

// 		<Overlay class="overlay" onClick={closeModal} onKeyDown={closeModalOnEsc}>
// 			<ModalStyle class="modal">
// 				<img src={src} alt={alt} />
// 			</ModalStyle>
// 		</Overlay>,

//     document.getElementById("popup-root")
//   );

// }
// }