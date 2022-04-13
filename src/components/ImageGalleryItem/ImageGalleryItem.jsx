import { GalleryItem, Image } from "./ImageGalleryItemStyle";

export function ImageGalleryItem({id, webformatURL}) {
	return (
		<GalleryItem class="gallery-item" id={id}>
  <Image src={webformatURL} alt="qweqwewqe" />
</GalleryItem>
	);
}