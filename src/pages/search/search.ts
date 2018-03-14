import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as echarts from 'echarts';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage implements AfterViewInit{
  @ViewChild("chart")
  chartDiv: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  
  ngAfterViewInit(): void {
    this.draw();
  }

  draw() {
    var myChart = echarts.init(this.chartDiv.nativeElement);

    var option = {
      title: {
        text: 'ECharts 示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    myChart.setOption(option);
  }

}
