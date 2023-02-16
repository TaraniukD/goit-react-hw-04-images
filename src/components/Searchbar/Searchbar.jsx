import { useState } from "react";
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export function Searchbar({onSubmit}) {
  
  const [name, setName] = useState('');
 
   const searchImage = e => {
        setName( e.currentTarget.value.toLowerCase() );
    };

   const imageSubmit = e => {
        e.preventDefault();

        if (name.trim() === '') {
            Notiflix.Notify.info('Enter the name of the image!');
            return;
        }

      onSubmit(name);
        setName('');
        
    };

    return (
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={imageSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={name}
              onChange={searchImage}
            />
              <button type="submit" className="SearchForm-button">
              <span className="Button-label">Search</span>
            </button>
          </form>
        </header>
            )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};