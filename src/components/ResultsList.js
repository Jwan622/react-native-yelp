import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail"
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null
  } // don't show anything unless data. this allows teh section headres to not appear unles ssomething is loading.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length} </Text>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', {id: item.id})
              } // you can pass two arguments to navigate, second argument is available as navigation.getParam('id')
            >
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          )
        }}
      />
	</View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  }
});

export default withNavigation(ResultsList); // this is so we don't have to pass navigiatino from a parent