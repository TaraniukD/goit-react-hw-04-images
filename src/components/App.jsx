import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { fetchImages } from "Api/Api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";

import './styles.css';

export function App () {
  const [ name, setName ] = useState('');
  const [ images, setImages ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ totalHits, setTotalHits ] = useState(0);
  const [ loading, setLoading ] = useState(false);

   useEffect(() => {
    if (!name) {
      return;
    }

    setLoading(true);

      const apiData = async () => {
        const { totalHits, hits } = await fetchImages(name, page);
        
        if (totalHits === 0) {
        Notiflix.Notify.info('No image with that name:(');
        setLoading(false);
        return;
      }

      setImages(prevState => page === 1 ? hits : [...prevState, ...hits]);
      setTotalHits(prevState => page === 1 ? totalHits - hits.length :  prevState - hits.length);
      setLoading(false);
      };

      apiData().catch((error) => {
      Notiflix.Notify.warning(`Something went wrong! ${error}`);
    });
  }, [name, page])

 const handleFormSubmit = name => {
    setName(name);
    setPage(1);
  }

 const loadMore = () => {
    setPage(prevState => prevState + 1)
  };

    return (
      <div className="Conteiner">
        <Searchbar onSubmit={handleFormSubmit}/>
        {loading && <Loader />} 
        {name ? 
        <ImageGallery images={images}/> :
        <p className="ImageGallery-text">Enter the name of the picture to search!</p>}
        {totalHits > 0 && <Button loadMore={loadMore}/>}
      </div>
    );
};
