import { Component, OnInit } from '@angular/core';
import { DashboradService } from '../dashborad.service';
import { GoogleChartComponent } from 'angular-google-charts'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dashbordData: any;
constructor( private dashboradService:DashboradService ){}
  ngOnInit() {
    this.dashboradService.getdashbordData().subscribe(res=>{
      this.dashbordData = res;
      console.log(this.dashbordData);
    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities'
    };

    // var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    // chart.draw(data, options);
  }

}
