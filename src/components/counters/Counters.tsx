import TotalCharacters from "./total-characters/TotalCharacters.tsx";
import WordCount from "./word-count/WordCount.tsx";
import SentenceCount from "./sentence-count/SentenceCount.tsx";

const Counters = () => {
  return (
      <div className="row gap-3 gap-md-0 mt-4 mb-5">
        <TotalCharacters/>
        <WordCount/>
        <SentenceCount/>
      </div>
  );
};

export default Counters;
