import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar"
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
// this component needs to make the api call so it needs to send a callback to child to change the state here as user types in searchBar
// term should change every time user types in searchBar because of teh callback.

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
		return results.filter(result => {
			return result.price === price;
		})
	};

  // if you wrap this in a view, it won't scroll down vertically because View extends past the screen
  return (
		<>
			<SearchBar
				term={term}
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice('$')}
					title="Cost Effective"
				/>
				<ResultsList
					results={filterResultsByPrice('$$')}
					title="Bit Pricier"
				/>
				<ResultsList
					results={filterResultsByPrice('$$$')}
					title="Big Spender"
				/>
			</ScrollView>
		</>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;