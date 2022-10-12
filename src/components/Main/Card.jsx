const Card = (data) => {
  console.log("ne geldi", data);
  const { title, image, desc } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{data.title}</h1>
      </div>

      <img src={data.image} alt="" />
      <div className="card-over">{desc}</div>
    </div>
  );
};

export default Card;
