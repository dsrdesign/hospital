import { Component, OnInit, ViewChild } from '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,


  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexFill,
  ApexStroke
} from "ng-apexcharts";
import { DashboardService } from '../../services/dashboard.services';
import { PatientService } from 'src/app/features/patients/services/patient.service';
import { ConsultationService } from 'src/app/features/consultations/services/consultation.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  title: ApexTitleSubtitle | any;

  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;
  public chartOption: Partial<ChartOptions>;

  public nameDoctor!: string | any
  public AllNumPatient!: number
  public AllNumConsultationConfirm!: number
  public AllNumConsultationPending!: number




  constructor(
    private _patientServices: PatientService,
    private _consultationServices: ConsultationService,
    private _dashboardService: DashboardService){

    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 250,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };

    this.chartOption = {
      series: [67],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: function(val: string) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["Patients Consultes"]
    };
  }

  ngOnInit(): void {
    this.nameDoctor = localStorage.getItem('@NAMEDOCTOR')

    this._patientServices.getPatients().subscribe(res => {
      this.AllNumPatient = res.data.length
    })

    this._consultationServices.getConsultation("Confirm").subscribe( res =>{
      this.AllNumConsultationConfirm = res.data.length
    })

    this._consultationServices.getConsultation("En attente").subscribe( res =>{
      this.AllNumConsultationPending = res.data.length
    })
  }

}
