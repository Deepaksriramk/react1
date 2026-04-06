function Course({ name, image, price, rating }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{price}</h4>
        <h5>{rating}</h5>
        <button>Buy Now</button>
      </div>
    </>
  );
}

export default Course;