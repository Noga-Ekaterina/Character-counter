import {useState} from "react";
import logoLight from "../../assets/logo-light-theme.svg"
import logoDark from "../../assets/logo-dark-theme.svg"
import moon from "../../assets/icon-moon.svg"
import sun from "../../assets/icon-sun.svg"

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const togleTheme=()=>{
    const html= document.documentElement

    if (html.dataset.bsTheme!="dark"){
      html.dataset.bsTheme="dark"
      setIsDark(true)
    }else {
      html.dataset.bsTheme="light"
      setIsDark(false)
    }
  }
  return (
      <div className="row align-items-center justify-content-between pt-3">
        <div className="col-6 col-md-4 col-lg-3">
          <img alt="Logo" src={isDark? logoDark:logoLight} className="img-fluid"/>
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-end">
          <button onClick={togleTheme} className="btn btn-light p-2" type="button">
            <img src={isDark? sun:moon} className="img-fluid"/>
          </button>
        </div>
      </div>
  );
};

export default Header;
