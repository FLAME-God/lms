import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Home from './Pages/Home';
import Course from './Pages/Course';
import CourseDetails from './Pages/CourseDetails';
import Signin from './sections/auth/Signin';
import Login from './sections/auth/Login';
import TeacherSignin from './sections/auth/TeacherSignin';
import CheckOut from './Pages/CheckOut';
import Layout from './Pages/TeacherDashboard/Layout';
import DahBoard from './Pages/TeacherDashboard/DahBoard';
import AddCourse from './Pages/TeacherDashboard/AddCourse';
import ListCourse from './Pages/TeacherDashboard/ListCourse';
import ProtectedRoute from './util/ProtectedRoute';
import AllTeacher from './Pages/AllTeacher';
import TeacherDetails from './Pages/TeacherDetails';


function App() {
  const isTeacherPath = location.pathname.includes("dashboard")


  return (
    <>

      {!isTeacherPath && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/teacher' element={<TeacherSignin />} />

        <Route path='/dashboard'>
          <Route element={<Layout />}>
            <Route index element={<DahBoard />} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='list-course' element={<ListCourse />} />
          </Route>
        </Route>

        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path='/:name/purchase/:id' element={<CheckOut />} />

        <Route path='/allTeacher' element={<AllTeacher/>}/>
        <Route path='/allTeacher/:id' element={<TeacherDetails/>}/>


      </Routes>
      {!isTeacherPath && <Footer />}

    </>
  );
}

export default App
