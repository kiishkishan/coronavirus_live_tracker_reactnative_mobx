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
import {observable, computed, action} from 'mobx';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

@inject('store')
@observer
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // did all this for direct usage of store
  // @computed get shortFire() {
  //   return this.fireMessage.substring(0, 5);
  // }
  // @observable fire = [];
  // @observable fireMessage = 'Have You Seen A Bush Fire';

  // @observable temparature = 30;
  // @computed get Ferh() {
  //   return (this.temparature * 9) / 5 + 32;
  // }

  // @action onChangeTemp = val => {
  //   this.temparature = val;
  // };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         data: responseJson,
  //       });
  //     })
  //     .catch(error => console.log(error)); //to catch the errors if any
  // }
  // FlatListItemSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 0.5,
  //         width: '100%',
  //         backgroundColor: 'rgba(0,0,0,0.5)',
  //       }}
  //     />
  //   );
  // };
  // renderItem = data => (
  //   <TouchableOpacity style={styles.list}>
  //     <Text style={styles.lightText}>{data.item.name}</Text>
  //     <Text style={styles.lightText}>{data.item.email}</Text>
  //     <Text style={styles.lightText}>{data.item.company.name}</Text>
  //   </TouchableOpacity>
  // );

  render() {
    const {textStyle, textStyleHeading} = styles;
    return (
      <View style={{flex: 1, width: '80%', alignSelf: 'center'}}>
        <View style={{flex: 2}}>
          <Text style={textStyleHeading}>{this.props.store.title}</Text>
        </View>
        <View style={{flex: 5, backgroundColor: 'lightgreen', padding: 15}}>
          {/* <Text style={textStyle}>{this.shortFire}</Text> */}
          <Input
            placeholder="Enter Fahrenheit"
            onChangeText={this.props.store.onChangeFeh}
            label="Fahrenhait"
          />
          <Test fireMessage={this.props.store.cel} />
        </View>
        <View style={{flex: 1}} />
        <View style={{flex: 5, backgroundColor: 'lightblue', padding: 15}}>
          <Input
            placeholder="Enter Celcius"
            onChangeText={this.props.store.onChangeTemp}
            label="Enter Celcius"
          />
          <Text style={textStyle}>Fahrenhait : {this.props.store.feh}</Text>
        </View>
        {/* <ScrollView>
          <FlatList
            data={this.state.data}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={item => this.renderItem(item)}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView> */}
      </View>
    );
  }
}

const Test = observer(({fireMessage}) => (
  <Text style={styles.textStyle}>Celcius : {fireMessage}</Text>
));

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    margin: 5,
    color: 'blue',
  },
  textStyleHeading: {
    fontSize: 22,
    margin: 5,
    color: 'red',
    fontFamily: 'roboto',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export default Example;
