import "./total-characters.scss"
import {observer} from "mobx-react-lite";
import store from "../../../store/store.ts";
import Card from "../card/Card.tsx";

const TotalCharacters = () => {
  const {text, isSpacesRemove}=store
  const count= text? isSpacesRemove? text.replace(" ","").length: text.length:0


  return <Card count={count} signature="Total Characters" className="total-characters"/>
};

export default observer(TotalCharacters);