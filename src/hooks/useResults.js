import { useEffect, useState } from 'react';
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
	console.log("sup");
	try {
	  const response = await yelp.get('/search', {
		params: {
		  limit: 50,
		  term: searchTerm,
		  location: 'san jose',
		} //params get appended as query params after the ?
	  });
	  setResults(response.data.businesses); //response.data is an axios property that returns object from yelp api
	  setErrorMessage('');
	} catch (err) {
	  console.log(err);
	  setErrorMessage("something went wrong")
	}
  };

  useEffect(() => {
	searchApi('pasta')
  }, []); // this empty array ensures this function call on top level is only called once when the components renders and not multiple times.

  return [searchApi, results, errorMessage]
}
