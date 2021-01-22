import React, {useEffect} from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './container/home';
import SignIn from './container/signin';
import SignUp from './container/signup';
import PrivateRoute from './components/HOC/PrivateRoute'
import {useDispatch, useSelector} from 'react-redux'
import {isUserLoggedIn} from './actions'
import Products from './container/Products'
import Orders from './container/Orders'
import Patients from './container/Pateint'
import Doctors from './container/Doctor'
import Catergory from './container/Catergory'
import Lab from './container/Lab'
import {getAllCatergory} from './actions/catergory.action'
import {getInitialData} from './actions/initialData.action'
import {getDoctor} from './actions/doctor.action'
import {getPatient} from './actions/patient.action'
import {getStartData} from './actions/startData.action'
import Medicines from './container/Medicines'
function App() {
  const auth =useSelector(state=>state.auth)
     
  const dispatch = useDispatch();

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData());
    dispatch(getDoctor());
    dispatch(getPatient());
    dispatch(getStartData());
  }, []);
  return (
    <div className="App">
        <Switch>
          <PrivateRoute path='/' exact component={Home} />
          <PrivateRoute path='/catergory' component={Catergory}/>
          <PrivateRoute path='/orders' component={Orders} />
          <PrivateRoute path='/medicine' component={Medicines} />
          <PrivateRoute path='/products' component={Products} />
          <PrivateRoute path='/patients' component={Patients} />
          <PrivateRoute path='/doctors' component={Doctors} />
          <PrivateRoute path='/lab' component={Lab} />

          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp}/>

          
        </Switch>
    </div>
  );
}

export default App;
