import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {
  constructor() {}

  exportAsPdfFile(data: any[], pdfFileName: string): void {
    const doc = new jsPDF();
    
    doc.text('Sample Data', 10, 10);

    let y = 20;
    data.forEach((item, index) => {
      doc.text(`${index + 1}. Name: ${item.name}, Age: ${item.age}, Department: ${item.department}`, 10, y);
      y += 10;
    });

    const pdfOutput = doc.output('blob');
    saveAs(pdfOutput, `${pdfFileName}.pdf`);
  }
}
export class ExportDataComponent {
    // Component logic here
  }