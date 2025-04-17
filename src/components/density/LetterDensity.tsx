import {useEffect, useState} from 'react';
import store from "../../store/store.ts";
import {observer} from "mobx-react-lite";
import _ from "lodash"
import ProgressCount from "./ProgressCount.tsx";

const LetterDensity = () => {
  const {text }=store
  const [allCount, setAllCount] = useState(0)
  const [listCount, setListCount] = useState<{letter: string, count: number}[]>([])
  const [isShowAll, setIsShowAll] = useState(false)

  useEffect(() => {
    if (!text) return

    const letters = text
        .toUpperCase()
        .split('')
        .filter(char => /[A-Z-А-Яё]/.test(char));

    const lettersCount=_.map(_.countBy(letters), (count, letter) => ({ letter, count }))

    setAllCount(letters.length)
    setListCount(_.orderBy(lettersCount, ["count"], ["desc"]));
  }, [text]);

  return (
      <div>
        <h2 className="mb-3">Letter Density</h2>
        {
          text?
              <>
                {

                  listCount.slice(0, !isShowAll? 5:undefined)
                      .map(item=>(
                      <ProgressCount item={item.letter} count={item.count} allCount={allCount}/>
                  ))
                }
                {
                  listCount.length > 5 &&
                    <button
                        type="button"
                        className="mt-2 btn btn-light bg-body"
                        onClick={() => setIsShowAll(prevState => !prevState)}
                    >
                      {
                        !isShowAll? <>See more &#9660;</> :<>Show less &#9650;</>
                      }
                    </button>
                }
              </>
              :
              <p>No characters found. Start typing to see letter density.</p>
        }
      </div>
  );
};

export default observer(LetterDensity);
