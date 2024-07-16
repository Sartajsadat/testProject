import { Component } from '@angular/core';
import { ExcelExportService } from './excel-export.services';
import { PdfExportService } from './pdf-export.services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(
    private excelExportService: ExcelExportService,
    private pdfExportService: PdfExportService
  ) {}

  data = [
    { name: 'Sami Zadran', age: 30, department: 'HR' },
    { name: 'Ahmad', age: 25, department: 'Finance' },
    { name: 'Sartaj Sadat', age: 35, department: 'IT' },
    { name: 'M khan', age: 35, department: 'IT' },
    { name: 'Zakhil', age: 35, department: 'IT' }
  ];

  exportToExcel(): void {
    this.excelExportService.exportAsExcelFile(this.data, 'sample');
  }

  exportToPdf(): void {
    this.pdfExportService.exportAsPdfFile(this.data, 'sample');
  }
}