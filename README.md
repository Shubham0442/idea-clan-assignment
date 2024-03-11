# EduHub - Learning Management System (LMS)
This application is a React-based user interface with a NodeJs based server, consisting of LMS operations for begineer in tech. This application consist of functionality on student and admin side

## Features
- Login And Register
- Add/Edit/Delete/Read Course details on admin side
- Add/Edit/Delete/Read Content related to created course on admin side
- Only all courses are available to student and admin on separate route
- Student and admin can see courses availacan able, courses selected and content related to selected to course
- Students can select maximum 3 courses and content related to selected course
- All courses can be filtered by students and admin

### Technologies Used
- ReactJS - for the frontend.
- Chakra-UI - Open-source UI library for making user interface.
- Redux - Open-source state management library for managing application state.
- MongoDB- for storing data.
- NodeJs and ExpressJs for API development.
- bcrypt - Open-source library for hashing the password
- jsonwebtoken - Open-source library for generating unique token after user login

### Installation
- Clone the repository
```bash
  git clone https://github.com/Shubham0442/idea-clan-assignment
```
#### For frontend:
- Navigate to the frontend folder
```bash
cd client/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm start
```
#### For Backend:
- Navigate to the backend folder
```bash
cd server/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm run dev
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### On Server side

`PORT` - To run application in local

`SECRET` - Secret key for jsonwentoken

`mongodburl` - Mongo Atlus URL

#### On Client side

`REACT_APP_BASE_URL` - base URL of server to run application in local or deployed server URL


### Deployment
- [frontend](https://idea-clan-eduhub.netlify.app/)
- [backend](https://idea-clan-server.onrender.com)