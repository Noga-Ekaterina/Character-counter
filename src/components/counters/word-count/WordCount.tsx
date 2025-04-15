import "./word-count.scss"
import {observer} from "mobx-react-lite";
import store from "../../../store/store.ts";
import Card from "../card/Card.tsx";
import {words} from "lodash";

const WordCount = () => {
  const {text}=store
  const count= text? words(text).length:0

  return <Card count={count} signature="Word count" className="word-count"/>
};

export default observer(WordCount);