import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyle } from "./ImageGalleryStyle.styled";

export function ImageGallery ({pictures}) {
return (
	<ImageGalleryStyle class="gallery">
    {pictures.map(picture => (
		 <ImageGalleryItem key={picture.id} src={`${picture.webformatURL}`}/>
	 ))}
</ImageGalleryStyle>
);
}