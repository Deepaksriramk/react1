import { useEffect, useState } from "react";

function Course({ name, image, price, rating, handleDelete, id }) {
  const [purchased, setPurchased] = useState(false);
useEffect(()=>{
  console.log("inside course called");
});
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <h5>{rating}</h5>

      <button
        onClick={() => {
          if (!purchased) {
            const result = confirm("Do you want to buy this course?");
            if (result) {
              alert(name + " course purchased");
              setPurchased(true);
            } else {
              alert("You clicked No");
            }
          } else {
            alert("Already purchased!");
          }
        }}
      >
        Buy Now
      </button>

      <button onClick={() => handleDelete(id)}>
        Delete
      </button>

      <p>{purchased ? "Purchased" : "Get it now"}</p>
    </div>
  );
}

export default Course;