import {observable, action} from 'mobx';

class AppStore {
  @observable title = 'Temperature Converter';
  @observable celcius = 30;
  @observable cel = 0;
  @observable feh = 0;
  @observable fahren = 0;
  @action onChangeTemp = val => {
    this.celcius = val;
    this.feh = (this.celcius * 9) / 5 + 32;
  };
  @action onChangeFeh = val => {
    this.fahren = val;
    this.cel = ((this.fahren - 32) * 5) / 9;
  };
}

export default AppStore;
