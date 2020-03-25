import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import theme from '../theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={require('../assets/front.jpg')}
        style={styles.imageContainer}>
        <Text style={styles.title}> Covid19 Live Tracker </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '25%',
  },
  imageContainer: {width: '100%', height: '100%'},
  title: {
    textAlign: 'center',
    color: '#E1E5EE',
    fontSize: 26,
    marginVertical: 30,
    fontWeight: 'bold',
    textShadowColor: theme.colors.black,
    letterSpacing: 1,
    elevation: 5,
  },
});
