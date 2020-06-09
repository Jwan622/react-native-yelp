import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar"
// this component needs to make the api call so it needs to send a callback to child to change the state here as user types in searchBar
// term should change every time user types in searchBar because of teh callback.

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.background}>
	  <SearchBar
		term={term}
		onTermChange={newTerm => setTerm(newTerm)}
		onTermSubmit={() => console.log('term was submitted')}
	  />
	  <Text>Search Screen</Text>
	  <Text>{term}</Text>
	</View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;