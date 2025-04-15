import "./sentence-count.scss"
import {observer} from "mobx-react-lite";
import store from "../../../store/store.ts";
import Card from "../card/Card.tsx";
import _ from "lodash"

const SentenceCount = () => {
  const {text }=store

  function countSentences(text: string) {
    // Разделяем текст по .!?, включая множественные разделители
    const sentences = _.split(text, /[.!?]+/g);
    // Фильтруем непустые предложения (без пробелов)
    const nonEmpty = _.filter(sentences, sentence => !_.isEmpty(_.trim(sentence)));
    // Возвращаем количество
    return _.size(nonEmpty);
  }

  return <Card count={text? countSentences(text):0} signature="Sentence count" className="sentence-count"/>
};

export default observer(SentenceCount);