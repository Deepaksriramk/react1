// import { useState } from "react";
// function Course({ name, image, price, rating,handledelete }) {
//   const [purcheased, setpurcheased] = useState(false);
//   // function purcheased(){

//   // }
//   return (
//     <>
//       <div className="card">
//         <img src={image} alt={name} />
//         <h3>{name}</h3>
//         <h4>{price}</h4>
//         <h5>{rating}</h5>
//         <button onClick={() => {
//           if (!purcheased) {
//             const result = confirm("Do you want to buy this course?");
//             if (result) {
//               alert(name + "course purcheased");
//             } else {
//               alert("You clicked No");
//             }
//             setpurcheased(true);
//           }else{
//             alert("already purcheased!")
//           }
//         }}>
//           Buy Now
//         </button>
//         <button onClick={()=>handledelete(key)}>delete</button>
//         <p>{purcheased ? "already purcheased" : "get it now"}</p>
//       </div>
//     </>
//   );
// }

// export default Course;
import { useState } from "react";

function Course({ name, image, price, rating, handledelete, id }) {
  const [purchased, setPurchased] = useState(false);

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

      <button onClick={() => handledelete(id)}>Delete</button>

      <p>{purchased ? "Already purchased" : "Get it now"}</p>
    </div>
  );
}

export default Course;