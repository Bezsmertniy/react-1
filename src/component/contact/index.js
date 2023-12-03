import "./index.css";

export default function Contact({
  name,
  src,
  responseRate,
  responseTime,
  info,
  phone,
}) {
  return (
    <div className="title">
      <div className="title__header">
        <img src={src} alt={name} width={80} height={80} className="image" />

        <div className="title__content">
          <h1 className="title__text">Господар – {name}</h1>
          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>

            <span className="title__sub-value">{responseTime}</span>

            <span className="title__sub-value">
              {responseRate}% response speed
            </span>
          </div>
        </div>
      </div>
      <div className="title__info">{info}</div>
    </div>
  );
}
