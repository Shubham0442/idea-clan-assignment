import React from "react";
import {
  FaCode,
  FaReact,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGem,
  FaJava
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const CourseIcon = ({ course_name }) => {
  const regex =
    /(JavaScript|React|Angular|Vue|Java|HTML|Python|CSS|Node\.js|Express|Django|MongoDB|MySQL|Flask|Ruby on Rails)/gi;
  const match = regex?.exec(course_name);

  if (match) {
    const language = match[0]?.toLowerCase();

    switch (language) {
      case "javascript":
        return <IoLogoJavascript fontSize="30px" />;
      case "react":
        return <FaReact fontSize="30px" />;
      case "java":
        return <FaJava fontSize="30px" />;
      case "angular":
        return <FaAngular fontSize="30px" />;
      case "vue":
        return <FaVuejs fontSize="30px" />;
      case "html":
        return <FaHtml5 fontSize="30px" />;
      case "css":
        return <FaCss3Alt fontSize="30px" />;
      case "node.js":
      case "express":
        return <FaNodeJs fontSize="30px" />;
      case "django":
      case "flask":
        return <FaPython fontSize="30px" />;
      case "python":
        return <FaPython fontSize="30px" />;
      case "ruby on rails":
        return <FaGem fontSize="30px" />;
      default:
        return <FaCode fontSize="30px" />;
    }
  } else return <FaCode fontSize="30px" />;
};

export default CourseIcon;
