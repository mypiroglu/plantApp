import axios from 'axios';

// API'ye istek atmak için fonksiyon
const fetchCategories = async () => {
  try {
    const response = await axios.get(
      'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories',
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
