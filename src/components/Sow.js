import React from 'react';
import DataGrid from "react-data-grid";



const columns = [
  { key: "id", name: "SOW ID" },
  { key: "farrowing", name: "Expected Furrowing Date" },
  { key: "weaning_date", name:"Projected Weaning Date"},
  { key: "exit_date", name: "Expected Exit Date"},
];

const rows = [
  { id: 0, farrowing: "Example" },
  { id: 1, farrowing: "Demo" },
  { id: 2, title: "React JS" },
  { id: 3, title: "Tutorialspoint" },
  { id: 4, title: "Ath Tripathi" },
  { id: 5, title: "Kiran Kumar Panigrahi" }
];

export default function records() {
 

  return <DataGrid columns={columns} rows={rows} />;

 

}