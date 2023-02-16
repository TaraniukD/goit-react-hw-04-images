import {Component} from "react";
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export class Searchbar extends Component {

    state = {
        name: '',
        page: 1,
    };
    
    componentDidUpdate(prevProps, prevState) {
if (prevState.page !== this.state.page || prevState.name !== this.state.name) {
  
}
    }

    searchImage = e => {
        this.setState({name: e.currentTarget.value.toLowerCase()});
    };

    imageSubmit = e => {
        e.preventDefault();

        const  { name } = this.state;
        const { onSubmit } = this.props;

        if (name.trim() === '') {
            Notiflix.Notify.info('Enter the name of the image!');
            return;
        }

        onSubmit(name);
        this.setState({name: ''});
        
    };

render() {
  const { name } = this.state;

    return (
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.imageSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={name}
              onChange={this.searchImage}
            />
              <button type="submit" className="SearchForm-button">
              <span className="Button-label">Search</span>
            </button>
          </form>
        </header>
            )
       }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};