"use client";
import { useEffect, useState } from "react";
import { courses } from "../../../../Interfaces/GlobalInterfaces";

export default function Courses() {
  const [courses, setCourses] = useState<courses[]>();

  const GetCourses = async () => {
    const response = await fetch("http://localhost:3001/get/courses");
    const data: courses[] = await response.json();
    setCourses(data);
    console.log("Kurser här: ", courses);
  };

  useEffect(() => {
    GetCourses();
  }, []);

  return <div>Kurser</div>;
}
