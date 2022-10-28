import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound'; 
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contact';
import Login from '../src/components/Login/Login';
import Register from './components/Register/Register'; 
import Footer from '../src/components/Footer/Footer';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ChangePassword from './components/ChangePassword/ChangePassword';
import UpdateName from './components/UpdateName/UpdateName';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CompleteProfile from './components/CompleteProfile/CompleteProfile';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path = '/' element={<Shop/>}/>
            <Route exact path = '/home' element={<Shop/>}/>
            <Route exact path = '/shop' element={<Shop/>}/>
            <Route exact path = '/review' element={<OrderReview/>}/>
            <Route exact path = '/inventory' element={<Inventory/>}/>
            {/* <Route exact path = '/placeorder' element={<PlaceOrder/>}/> */}
            <Route exact path = '/about' element = {<About></About>}> </Route>
            <Route exact path = '/contact' element = {<Contact></Contact>}> </Route>
            <Route exact path = '/login' element = {<Login></Login>}> </Route>
            <Route exact path = '/register' element = {<Register></Register>}> </Route>
            <Route exact path = '/forgotpassword' element = {<ForgotPassword></ForgotPassword>}> </Route>
            <Route exact path = '/completeprofile' element = {
              <PrivateRoute>
                <CompleteProfile></CompleteProfile>
              </PrivateRoute>
            }> </Route>
            <Route exact path = '/changepassword' element = {
              <PrivateRoute>
                <ChangePassword></ChangePassword>
              </PrivateRoute>
            }> </Route>
            <Route exact path = '/updatename' element = {
              <PrivateRoute>
                <UpdateName></UpdateName>
              </PrivateRoute>
            }> </Route>
            <Route exact path = '/placeorder' element = {
              <PrivateRoute>
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
            }> </Route>
          <Route exact path = '*' element={<NotFound/>}/>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
