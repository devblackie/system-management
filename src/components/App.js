import React from 'react';
// import styles from '../styles';
import Expenditure from "./Expenditure";
import Navbar from "./Navbar";
import Records from "./Records";
import Sales from "./Sales";
import Feeding from "./Feeding";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/ependiture" element={<Expenditure /> } />
            <Route exact path="/records" element={<Records />} />
            <Route exact path="/sales" element={<Sales />} />
            <Route exact path="/feeding" element={<Feeding />} />
          </Routes>
        </div>
  );
}
