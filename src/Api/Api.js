import axios from 'axios';

const urlSettings = new URLSearchParams({
  key: '32102465-275d51e71b27b4572d9937886',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${urlSettings}`);
  const data = response.data;

  return data;
};