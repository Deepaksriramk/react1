import Course from "./course";
import { useState, useEffect } from "react";

function CourseList() {

  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(err => console.error(err));
  }, []);

  function handleDelete(id) {
    const filteredCourses = courses.filter(
      (course) => course.id !== Number(id)
    );
    setCourse(filteredCourses);
  }

  // const sortedCourses = [...courses].sort(
  //   (x, y) => x.price - y.price
  // );

  const courseList = courses.map((course) => (
    course.name && (
      <Course
        key={course.id}
        name={course.name}
        image={course.image}
        price={course.price}
        rating={course.rating}
        handleDelete={handleDelete}
        id={course.id}
      />
    )
  ));

  return <>{courseList}</>;
}

export default CourseList;