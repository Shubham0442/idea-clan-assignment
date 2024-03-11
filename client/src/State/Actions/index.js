export { login, register, logout, updateUserDetails } from "./authActions";

export {
  addNewCourse,
  getAllCourses,
  updateCourse,
  removeCourse,
  filterCategory,
  filterType
} from "./courseActions";

export { getAllStudents, updateStudentRole } from "./studentActions";

export { getMyCourses, addMyCourse, removeMyCourse } from "./myCourseActions";

export {
  getAllContent,
  getStudentContent,
  updateContent,
  removeContent,
  addNewContent
} from "./contentActions";
