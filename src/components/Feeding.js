import React from 'react';
// import './App.css';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject} from '@syncfusion/ej2-react-grids';

class Feeding extends React.Component {

    render() {
        // Render the EJ2 Grid component. 
        return <GridComponent ref={grid => this.gridInstance = grid} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' ></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer Name' width='150' ></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' ></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' ></ColumnDirective>
            </ColumnsDirective>
            
        </GridComponent>
    }
};

export default Feeding;