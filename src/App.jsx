import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from "./assets/components/loading";
import AppRoutes from "./assets/routes/routes";
import Cursor from "./assets/components/Cursor"
export default function App() {
  return (
    <Router>
      <AppRoutes />
      <Cursor />
      <Loader enabled={true}/> 
    </Router>
  );
}