import axios from 'axios';

const homeOptions = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/home',
  headers: {
    'x-rapidapi-key': '8b7f91d14amsh81a38a918b8dc2cp1f7834jsn1012c2719d04',
    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(homeOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
