import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import theme from '../theme';

export default function Details() {
  return (
    <View style={styles.details}>
      <Text style={styles.paragraph}>
        Coronavirus disease (COVID-19) is any of various RNA-containing
        spherical viruses of the family Coronaviridae, including several that
        cause acute respiratory illnesses.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
  },
  paragraph: {
    textAlign: 'center',
    color: theme.colors.base,
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.85,
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    elevation: 2,
  },
});
