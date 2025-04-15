import {ChangeEvent, useEffect, useState} from "react";
import store from "../../store/store.ts";
// Именованный импорт конкретных функций
import { debounce, words } from 'lodash';

const Form = () => {
  const [text, setText] = useState('')
  const {changeText, changeIsSpacesRemove}=store
  const [isLimit, setIsLimit] = useState(false)
  const [limit, setLimit] = useState<null|number>(null)
  const [isError, setIsError] = useState(false)
  const [readingTime, setReadingTime] = useState("0 minutes")

  const changeTime=(str: string)=>{
    const wordsLength= words(str).length

    if (str==""){
      setReadingTime("0 minutes")
    }else if (wordsLength<50){
      setReadingTime("<1 minute")
    }else {
      setReadingTime(`${Math.round(wordsLength/50)} minutes`)
    }
  }

  const handleChangeText=debounce((value: string) => {
    changeText(value||null)
    changeTime(value)
  }, 500)

  const handleInputText=(event:  ChangeEvent<HTMLTextAreaElement>) => {
    const value= event.target.value

    if (!limit || value.length<=limit){
      setText(value)
      handleChangeText(value)
      setIsError(false)
    }else
      setIsError(true)
  }

  const handleTogleLimit=(event: ChangeEvent<HTMLInputElement>) => {
    const checked=event.target.checked
    setIsLimit(checked)

    !checked && setLimit(null)
  }

  const handleInputLimit=(event: ChangeEvent<HTMLInputElement>) => {
    const value= event.target.value
    setLimit(value? Number(value):null)
  }
  useEffect(() => {
    setIsError(!(!limit || text.length<=limit))
  }, [limit]);

  return (
      <div>
        <textarea value={text} onInput={handleInputText} className="form-control bg-light" placeholder="Start typing here… (or paste your text)" rows={6} />
        {isError &&
            <p className="error mt-1">Limit reached! Your text exceeds {limit} characters.</p>
        }
        <div className="row justify-content-between mt-3 ps-2">
          <div className="row col-12 col-md-6">
            <div className="form-check col-12 col-md-auto">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={event => changeIsSpacesRemove(event.target.checked)}/>
              <label className="form-check-label" htmlFor="inlineCheckbox1">Exclude spaces</label>
            </div>
            <div className="form-check col-auto">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={handleTogleLimit}/>
              <label className="form-check-label" htmlFor="inlineCheckbox2">Set character limit</label>
            </div>

            {
              isLimit &&
                <div className="col-3">
                   <input type="number" onInput={handleInputLimit} className="form-control bg-light"/>
                </div>
            }
          </div>
          <p className="col-6 text-md-end">Approx. reading time (Avg. 50WPM): {readingTime}</p>
        </div>
      </div>
  );
};

export default Form;
