import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../services/report.service';
import {TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  fromDate: string;
  toDate: string;

  constructor(private  reportService: ReportService) { }

  ngOnInit() {
  }

  generateReport() {
  }

}
