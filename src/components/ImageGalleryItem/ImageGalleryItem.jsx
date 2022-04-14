import PropTypes from 'prop-types';
import { GalleryItem, Image } from "./ImageGalleryItemStyle.styled";

export function ImageGalleryItem({id, src, alt}) {
	return (
		<GalleryItem id={id}>
  <Image src={src} alt={alt} />
</GalleryItem>
	);
}

ImageGalleryItem.propTypes = {
   id: PropTypes.number.isRequired,
   src: PropTypes.string.isRequired,
   alt: PropTypes.string,
};