/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {observer, inject} from 'mobx-react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import Header from '../components/header';
import Details from '../components/details';
import theme from '../theme';
import Card from '../components/card';

@inject('store')
@observer
class Todo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   covidData: this.props.store,
    // };
    console.log(this.props.store.covidDataSample[0].data.global_deaths);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />

        <ScrollView style={styles.wrapper}>
          <View style={styles.innerPadded}>
            <Details />
            <Text style={styles.location}>Srilanka</Text>
            <View style={styles.cardContainer}>
              {Card(
                'Total Cases',
                this.props.store.covidData.data.local_total_cases,
              )}
              {Card(
                'Total Deaths',
                this.props.store.covidData.data.local_deaths,
              )}
              {Card(
                'Total Recovered',
                this.props.store.covidDataSample[0].data.local_recovered,
              )}
            </View>
            <Text style={styles.location}>Global</Text>
            <View style={styles.cardContainer}>
              {Card(
                'Total Cases',
                this.props.store.covidData.data.global_total_cases,
              )}
              {Card(
                'Total Deaths',
                this.props.store.covidData.data.global_deaths,
              )}
              {Card(
                'Total Recovered',
                this.props.store.covidDataSample[0].data.global_recovered,
              )}
            </View>
            <Text style={styles.informationProvider}>
              Information Provided By : - Health Promotion Bureau Srilanka
            </Text>
            <Text style={styles.ownerInformation}>
              Designed By : Shanthakumar Kishanth
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerPadded: {
    marginVertical: 40,
  },
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    marginVertical: -55,
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
    margin: 5,
    color: 'blue',
  },
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  location: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: theme.fontStyles.bold,
    margin: 10,
    padding: 5,
  },
  informationProvider: {
    marginVertical: 10,
    opacity: 0.7,
  },
  ownerInformation: {
    alignSelf: 'center',
    opacity: 0.6,
  },
});

export default Todo;
