import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcelService } from './excel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employees: any[] = [];

  constructor(private http: HttpClient, private excelService: ExcelService) {}
  ngOnInit(): void {
    this.getJSON().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/employees.json');
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.employees, 'employeeData');
  }
}
