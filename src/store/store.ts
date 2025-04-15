import { makeAutoObservable } from 'mobx';

class Store {
  text: null|string= null;
  isSpacesRemove= false

  constructor() {
    makeAutoObservable(this);
  }

  changeText =(value: null|string)=>{
    this.text =value
  }

  changeIsSpacesRemove=(value: boolean)=>{
    this.isSpacesRemove= value
  }
}

export default new Store();