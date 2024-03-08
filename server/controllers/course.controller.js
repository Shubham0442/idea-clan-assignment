const { Router } = require("express");
const { Course } = require("../models/course.model");
const { authorization } = require("../middlewares/authorization");

const courseController = Router();

courseController.post("/new", authorization(["admin"]), async (req, res) => {
  try {
    const course = Course.findOne({ course_name });

    if (course) {
      res.status(409).send({ message: "Course already exist!" });
    } else {
      const newCourse = new Course(req.body);
      await newCourse.save();
      res.status(201).send({ message: "Course Created Successfully!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong. Please Try Again" });
  }
});

courseController.get("/getall", async (req, res) => {
  try {
    const allCourses = await Course.find();
    res.status(200).send({ allCourses });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong. Please Try Again" });
  }
});

courseController.patch(
  "/update/:courseId",
  authorization["admin"],
  async (req, res) => {
    try {
      const { courseId } = req.params;

      await Course.ByIdAndUpdate({ _id: courseId }, { ...req.body });
      res.status(200).send({ message: "Updated Course Details Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong. Please Try Again" });
    }
  }
);

courseController.patch(
  "/remove/:courseId",
  authorization["admin"],
  async (req, res) => {
    try {
      const { courseId } = req.params;
      await Course.findByIdAndDelete({ _id: courseId });
      res.status(200).send({ message: "Course Removed Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Something went wrong. Please Try Again" });
    }
  }
);
