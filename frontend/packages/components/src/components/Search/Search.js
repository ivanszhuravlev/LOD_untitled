import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    searchBar: {
      fontSize: 24,
      width: '100%',
      height: 50,
      borderColor: '#DDDDDD',
      borderWidth: '1px',
      borderRadius: '10px',
      backgroundColor: 'white',
      padding: '10px',
    },
  });

export const Search = () => {
    return (
        <TextInput
        //   onChangeText={/* (search) => this.setState({search}) */}
          placeholder="Поиск идей и задач"
          style={styles.searchBar}
        />
    );
}