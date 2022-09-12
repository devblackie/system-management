import React from 'react';
// import styles from '../styles';
import Expenditure from "./components/Expenditure";
import Navbar from "./components/Navbar";
import Records from "./components/Records";
import Sales from "./components/Sales";
import Feeding from "./components/Feeding";
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
