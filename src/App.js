import './App.css';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './components/CoursePage';
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import NavBar from './components/NavBar';
import TeachersPage from './components/TeacherPage';
import StudentPage from './components/StudentPage';
import Homee from './Homee';

function App() {
  return (
  
      <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Homee />} />
        <Route exact path='/courses' element={<CoursePage />} />
        <Route exact path='/students' element={<StudentPage />} />
        <Route exact path='/teachers' element={<TeachersPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
      </div>

  );
}

export default App;