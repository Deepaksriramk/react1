import Course from "./course";
import HTML from '';
import CSS from '';
import JS from '';
import JSX from '';
import ANGULAR from '';
import { useState ,useEffect} from "react";

function CourseList() {

  const [courses, setCourse] = useState();

  function handleDelete(id) {
    const filteredCourses = courses.filter(
      (course) => course.id !== Number(id)
    );
    setCourse(filteredCourses);
  }
  useEffect(()=> {console.log("indise course use effect")});

  const sortedCourses = [...courses].sort(
    (x, y) => x.price - y.price
  );

  const courseList = sortedCourses.map((course) => (
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