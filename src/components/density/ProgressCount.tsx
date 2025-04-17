interface Props{
  item: string
  count: number
  allCount: number
}

const ProgressCount = ({item, count, allCount}: Props ) => {
  const interest= +(count /(allCount/100)).toFixed(2)
  return (
      <div className="row my-2 align-items-center">
        <p className="col-1 mb-0">{item}</p>
        <div
            className="progress col-9 px-0"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={interest}
            aria-valuemin={0}
            aria-valuemax={100}
        >
          <div
              className="progress-bar"
              style={{width: `${interest}%`,background: "var(--c-pink)"}}/>
        </div>
        <p className="col-2 ps-0 mb-0 text-end">{count} ({interest}%)</p>
      </div>
  );
};

export default ProgressCount;
