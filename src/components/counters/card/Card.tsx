import "./counter-card.scss"
interface Props{
  count: number
  signature: string
  className: string
}

const Card = ({count, signature, className}: Props) => {
  return (
      <div className="col-12 col-md-4" data-bs-theme="light">
        <div className={`card py-1 border-0 counter-card ${className}`}>
          <div className="card-body position-relative z-2">
            <h2 className="card-title display-2 fw-bold">{count}</h2>
            <p className="card-text fw-bold">{signature}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
