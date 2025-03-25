import Card from "./Card";

export default function CardList() {
  const cardsData = [
    { title: "React", description: "A JavaScript library for UI development", bgColor: "lightblue" },
    { title: "Vite", description: "A fast build tool for modern web apps", bgColor: "lightgreen" },
    { title: "JavaScript", description: "The language of the web", bgColor: "lightcoral" },
  ];

  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
