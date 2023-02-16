import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export function Modal ({ largeImageURL, tags, toggleModal }) { 

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

   const handleKeyDown = e => {
        if (e.code === 'Escape') {
            toggleModal();
          }
    }

   const handleBackdropClock = e => {
        if (e.currentTarget === e.target) {
            toggleModal();
        }
    }

        return createPortal(
        <div className="Overlay" onClick={handleBackdropClock}>
        <div className="Modal">
            <img src={largeImageURL} alt={tags} className="ModalImg"/>
        </div>
        </div>,
        modalRoot
        );
    }


Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired
};