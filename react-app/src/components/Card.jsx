import "../styles/Card.css"; 

export default function Card({ title, description, bgColor }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
