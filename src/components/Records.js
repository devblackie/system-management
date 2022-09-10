import React from 'react';
import DataGrid from "react-data-grid";




const columns = [
  { key: "id", name: "SOW ID" },
  { key: "block", name: "LOCATION" },
  { key: "farrowing", name:"Expected Farrowing Date"},
  { key: "actual", name:"Actual Farrowing Date"},
  { key: "no_born", name: "No. Born"},
  { key: "no_born_alive", name: "No. Born Alive"},
  { key: "birth_weight", name: "Litter Birth Weight"},
  { key: "litter_id", name: "Litter ID"},
  { key: "expected_weaning-date", name: "Expected Weaning Date"},
  { key: "actual_weaning_date", name: "Actual Weaning Date"},
  { key: "next_breeding_cycle", name: "Next Breeding Cycle"},
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