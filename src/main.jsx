// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {RouterProvider, createBrowserRouter, createRoutesFromElements, /* routerProvider */ } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from "./components//About/About.jsx";
// import Contact from './components/Contact/Contant.jsx'

// //  Hint : create browser path both are activte 

// // const router = createBrowserRouter ([{
// //      path: '/',
// // element: <Layout/>,
// // children: [{
// //   path: "",
// //   element: <Home/>
// // },{
// //   path: "About",
// //   element: <About/>
// // },{
// //   path: "Contact",
// //   element : <Contact/>
// // }]
// // }
// // ])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <router path="/" element={<Layout/>}>
//       <router path="./" element={<Home/>} />
//       <router path="./About" element={<About/>} />
//       <router path="./Contact" element={<Contact/>} />
//     </router>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )
////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './components/Home/Home.jsx';
// import About from './components/About/About.jsx';
// import Contact from './components/Contact/Contant.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="About" element={<About />} />
//         <Route path="Contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );






import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx";
import Contact from './components/Contact/Contant.jsx';
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ]
  }
];


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);