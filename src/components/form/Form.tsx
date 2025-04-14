import {useState} from "react";

const Form = () => {
  const [isLimit, setIsLimit] = useState(false)
  const [limit, setLimit] = useState<null|number>(null)
  return (
      <div>
        <textarea className="form-control bg-light" placeholder="Start typing here… (or paste your text)" rows={6}/>
        <div className="row justify-content-between mt-3 ps-2">
          <div className="row col-12 col-md-6">
            <div className="form-check col-12 col-md-auto">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineCheckbox1">Exclude spaces</label>
            </div>
            <div className="form-check col-auto">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={event => setIsLimit(event.target.checked)}/>
              <label className="form-check-label" htmlFor="inlineCheckbox2">Set character limit</label>
            </div>

            {
              isLimit &&
                <div className="col-2">
                   <input type="number" className="form-control bg-light"/>
                </div>
            }
          </div>
          <p className="col-6 text-md-end">Approx. reading time(Avg. 50WPM): 0 minutes</p>
        </div>
      </div>
  );
};

export default Form;
