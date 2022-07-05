import {Routes, Navigate, Route, Link} from 'react-router-dom'
import HOME from './components/Home.js'
import USERS from './components/Users.js'
import CONTACT from './components/Contactus.js'
import TECHNOLOGIES from './components/Technologies.js'
import HTML from './components/Html.js'
import JAVASCRIPT from './components/Javascript.js'
import REACT from './components/React.js'
import REGISTRATION from './components/Registration.js'
import CARDS from './components/Cards.js'
import './App.css'
import { Button } from 'bootstrap'


function App() {
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Basic App</Link>
                    <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                        </div>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"
                                    to='/users'>USERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"
                                to='/contactus'>CONTACT</Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link className = 'nav-link active'
                                to = '/registration'>REGISTRATION</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"
                                    to='/technologies'>TECHNOLOGIES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active"
                                    to='/cards'>CARDS</Link>
                            </li>
                        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<HOME/>}/>
        <Route path='/users' element={<USERS/>}/>
        <Route path='/contactus' element={<CONTACT/>}/>
        <Route path = '/registration' element = {<REGISTRATION/>}/>
        <Route path='/technologies' element={<TECHNOLOGIES/>}>
        <Route path='html' element={<HTML/>}/>
        {/* <Route path = '' element = {<Navigate replace to = 'html'/>}/> */}
        <Route path='react' element={<REACT/>}/>
        <Route path = 'Javascript' element = {<JAVASCRIPT/>}/>
        </Route>
        <Route path='/cards' element={<CARDS/>}/>
    </Routes>
    </div>
    )
}
export default App;

// import File1 from './components/Todosfile1.js';
//     function App(){ 
//         return(
//             <div className = "container">
//         <File1 />
//     </div>
//    )
// } 
// export default App;

// import React from 'react'
// import Registration from './components/Registration'
// import './App.css'

// function App() {
//     return (
//         <div className = 'container'>
//             <Registration/>
//         </div>
//     )
// }

// export default App
