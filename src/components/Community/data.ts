import student from "@/assets/Images/student.png";
import teacher from "@/assets/Images/teacher.png";
import success from "@/assets/Images/success.png";
import { StaticImageData } from "next/image";

export type myType = {
  title: string;
  path: StaticImageData;
  quantity: string;
  card_color: string;
};

export const myData: myType[] = [
  {
    title: "Students Enrolled",
    path: student,
    quantity: "40k+",
    card_color: "bg-teal-500",
  },
  {
    title: "Skilled Instructors",
    path: teacher,
    quantity: "100+",
    card_color: "bg-blue-500",
  },
  {
    title: "Success Stories",
    path: success,
    quantity: "1000+",
    card_color: "bg-yellow-500",
  },
];
