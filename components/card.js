import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../theme';

export default function Card(Title, Detail) {
  return (
    <TouchableOpacity style={styles.cardWrapper}>
      <View style={styles.headingWrapper}>
        <Text style={styles.paragraph}>{Title}</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.detail}>{Detail}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: theme.colors.base,
    height: 100,
    width: 120,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 4,
    },
  },
  headingWrapper: {
    padding: 4,
    height: 60,
  },
  detail: {
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.85,
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    elevation: 2,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
