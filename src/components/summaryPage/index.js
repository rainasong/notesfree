import React from 'react';
import jsPDF from 'jspdf';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

class SummaryPage extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={}
    };
  
    generatePDF = () => {
      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is the first title.');
  
    //   doc.setFont('helvetica');
    doc.setFont(undefined, 'normal');
       doc.text(20, 60, 'This is the second title.')
  
    //   doc.setFont('helvetica')
    //   doc.setFontType('normal')
    //   doc.text(20, 100, 'This is the thrid title.')      
  
      
      doc.save('demo.pdf')
    }   
    
   render() {
      return (
         <div>
            <DragDropContext>
               <Droppable>
                  { (provided) => ( // input for members
                  // draggable to map for members
            <button onClick={this.generatePDF} type="primary">Download PDF</button> 
                  )}
               </Droppable>
            </DragDropContext>
         </div>
      );
   }
  }

export default SummaryPage;

