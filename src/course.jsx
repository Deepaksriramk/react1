function Course({ name, image, price, rating }) {
  return (
      <>
        <div className="card">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <h4>{price}</h4>
          <h5>{rating}</h5>
          <button onClick={() => {
            const result = confirm("Do you want to buy this course?");
            if (result) {
              alert(name+"course purcheased");
            } else {
              alert("You clicked No");
            }
          }}>
            Buy Now
          </button>
        </div>
      </>
  );
}

export default Course;