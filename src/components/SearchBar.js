import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// onEndEditing is called when green check box is clicked on mobile phone
const SearchBar = ({term, onTermChange, onTermSubmit }) => { // from SErachScreen component
  return (
	<View style={styles.backgroundStyle}>
	  <Feather name="search" style={styles.iconStyle}/>
	  <TextInput
		style={styles.inputStyle}
		value={term}
		onChangeText={newTerm => onTermChange(newTerm)} //onChangeText is built in
		placeholder='Search'
		autoCapitalize='none'
		onEndEditing={() => onTermSubmit() }
		autoCorrect={false}
	  />
	</View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
	backgroundColor: '#F0EEEE',
	height: 50,
	borderRadius: 5,
	marginHorizontal: 15,
	flexDirection: 'row',
  },
  inputStyle: {
	flex: 1,
	fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
	alignSelf: 'center',
	marginHorizontal: 15,
  }
});

export default SearchBar;
