import { connect } from "react-redux";
import React from "react"
import {BrowserRouter as Router,Switch,Route,useHistory} from "react-router-dom";
import './App.css';
import Bookmark from "./pages/Bookmark";
import Chat from "./pages/Chat";
import Explore from "./pages/Explore";
import Home from './pages/Home';
import Likes from "./pages/Likes";
import Stories from "./pages/Stories";
import Auth from "./pages/Auth";
function App({user}) {
  



  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>

  

    <Route exact path="/chats">
    <Chat/>
    </Route>

    <Route exact path="/explore">
    <Explore/>
    </Route>

    <Route exact path="/likes">
    <Likes/>
    </Route>

    <Route exact path="/bookmark">
    <Bookmark/>
    </Route>

    {/* <Route exact path="/upload">
    <Upload scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route>
    <Route exact path="/about">
    <About scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route> */}

   

  

   

    <Route
           exact
            path="/story/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <Stories id={id && id} />;
            }}
           
          />


<Route
           exact
            path="/auth/:type"
            render={(props) => {
              const type= props.match.params.type;
              return <Auth type={type && type} />;
            }}
           
          />
    

       
         
          

   
   
  </Switch>
</div>
</Router>
  );
}


const mapStateToProps = (state) => ({
  user:state.appReducer.user
})
export default connect(mapStateToProps,null)(App);
