// import Course from "./course";
// import HTML from './assets/HTML.WEBP';
// import CSS from './assets/CSS.WEBP';
// import JS from './assets/JS.WEBP';
// import JSX from './assets/JSX.WEBP';
// import ANGULAR from './assets/ANGULAR.WEBP';
// import { useState } from "react";

// function CourseList() {

//   const [courses,setcourse] = useState([
//     {
//       id:1,
//       name: "HTML full course",
//       price: 1213,
//       rating: "⭐ 4.0",
//       image: HTML
//     },
//     {
//       id:2,
//       name: "CSS full course",
//       price: 1243,
//       rating: "⭐ 4.0",
//       image: CSS
//     },
//     {
//       id:3,
//       name: "JS full course",
//       price: 1223,
//       rating: "⭐ 4.0",
//       image: JS
//     },
//     {
//       id:4,
//       name: "JSX full course",
//       price: 1263,
//       rating: "⭐ 4.0",
//       image: JSX
//     },
//     {
//       id:5,
//       name: "ANGULAR full course",
//       price: 1273,
//       rating: "⭐ 4.0",
//       image: ANGULAR
//     }
//   ]);
//    function handleDelete(id) {
//   const filteredCourses = courses.filter((course) => course.id !== Number(id));
//   setCourse(filteredCourses);
// }
//   const sortedCourses = [...courses].sort((x, y) => y.price - x.price);


// const courseLISt = filtercourse.map((course) => (
//         course.name && <Course
//           key={course.id}
//           name={course.name}
//           image={course.image}
//           price={course.price}
//           rating={course.rating}
//           delete={handledelete}
//           id={course.id}
//         />
//       ))
//   return (
//     <>
//       {courseLISt}

//     </>
//   );
// }

// export default CourseList;
import Course from "./course";
import HTML from './assets/HTML.WEBP';
import CSS from './assets/CSS.WEBP';
import JS from './assets/JS.WEBP';
import JSX from './assets/JSX.WEBP';
import ANGULAR from './assets/ANGULAR.WEBP';
import { useState } from "react";

function CourseList() {

  const [courses, setcourse] = useState([
    { id: 1, name: "HTML full course", price: 1213, rating: "⭐ 4.0", image: HTML },
    { id: 2, name: "CSS full course", price: 1243, rating: "⭐ 4.0", image: CSS },
    { id: 3, name: "JS full course", price: 1223, rating: "⭐ 4.0", image: JS },
    { id: 4, name: "JSX full course", price: 1263, rating: "⭐ 4.0", image: JSX },
    { id: 5, name: "ANGULAR full course", price: 1273, rating: "⭐ 4.0", image: ANGULAR }
  ]);

  function handleDelete(id) {
  console.log("Deleting ID:", id);
  const filteredCourses = courses.filter((course) => course.id !== id);
  setcourse(filteredCourses);
}
  // create a copy before sorting
  const sortedCourses = [...courses].sort((x, y) => y.price - x.price);

  const courseList = courses.map((course) => (
    <Course
      key={course.id}
      name={course.name}
      image={course.image}
      price={course.price}
      rating={course.rating}
      delete={handleDelete}
      id={course.id}
    />
  ));

  return <>{courseList}</>;
}

export default CourseList;