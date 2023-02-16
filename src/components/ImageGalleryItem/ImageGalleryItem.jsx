import { useState } from "react";
import PropTypes from 'prop-types';
import { Modal } from "components/Modal/Modal";

export function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
    
  const [showModal, setShowModal] = useState(false);
   
  const  toggleModal = () => {
        setShowModal( !showModal)
      }

        return (
          
        <li className="ImageGalleryItem">
            <img 
            src={webformatURL}
            alt={tags} 
            className="ImageGalleryItem-image" 
            onClick={toggleModal}
            />

            {showModal && 
            <Modal 
            largeImageURL={largeImageURL} 
            tags={tags} 
            toggleModal={toggleModal}/>
            }
        </li>
        )
}

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired
};