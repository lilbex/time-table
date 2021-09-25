import React from 'react';
import HomePage from './pages/home/Home'
import {CreatePage} from './pages/create_page/CreatePage'
import {AddClass} from './pages/add_class/AddClass'
import {AddSubject} from './pages/add_subject/AddSubject'
import {AddTeacher} from './pages/add_teacher/AddTeacher'
import {Authentication} from './pages/login/Authentication'
import {LoginNav} from './components/navbar/LoginNav'


function App() {
  return (
    <>
    <LoginNav />
    <Authentication />
      </>
  );
}

export default App;
