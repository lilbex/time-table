import { Suspense } from 'react'
import { Route, Switch } from "react-router-dom";
import MyLoader from '../utils/Loader';
import HomePage from '../pages/home/Home'
import {CreatePage} from '../pages/create_page/CreatePage'
import {AddClass} from '../pages/add_class/AddClass'
import {AddSubject} from '../pages/add_subject/AddSubject'
// import {AddTeacher} from '../pages/add_teacher/AddTeacher'
import {Authentication} from '../pages/login/Authentication'


const Root = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <Switch>
      {/* <ProtectedRoute exact path='/dashboard/instructor' component={InstructorDashboard} /> */}
      <Route exact path='/' component = {HomePage}/>
      <Route exact path='/create' component = {CreatePage}/>
      <Route exact path='/class' component = {AddClass}/>
      <Route exact path='/subject' component = {AddSubject}/>
      <Route exact path='/login' component = {Authentication}/>
    </Switch>
  </Suspense>
)

export default Root
