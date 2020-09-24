import { Component, OnInit, OnDestroy } from '@angular/core';
import { ECharts, EChartOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar2',
  templateUrl: './bar2.component.html',
  styleUrls: ['./bar2.component.scss'],
})
export class Bar2Component implements OnInit, OnDestroy {
  barChart: ECharts;

  ngOnInit(): void {
    // based on prepared DOM, initialize echarts instance
    this.barChart = echarts.init(<HTMLDivElement>document.getElementById('bar2-chart'));

    // Option:
    const options: EChartOption = {
      backgroundColor: '#FFFFFF', //(R,G,B) = (RED, GREEN, BLUE)
      title: {
        text: 'Bar chart example',
        left: 100,
        top: 10,
      },
      //need this to show legend
      legend: {},
      tooltip: {
        // lúc hover sẽ trigger theo 'axis', 'item'
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['x1', 'x2', 'x3', 'x4', 'x5'],
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#ddd',
          },
        },
        axisLabel: {
          fontSize: 10,
          color: '#666',
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#ddd',
          },
        },
        axisLabel: {
          fontSize: 10,
          color: '#666',
        },
      },
      // ===================== DataSets = Y axis value ===============
      series: [
        {
          name: 'DataSets0',
          type: 'bar',
          data: [20, 20, 36, 12, 15],
        },
        {
          name: 'DataSets1',
          type: 'bar',
          data: [8, 5, 25, 10, 10],
        },
        {
          name: 'DataSet1',
          type: 'bar',
          data: [15, 10, 20, 20, 25],
        },
      ],
      //===============  color of DataSets ================
      color: ['#693391', '#E7016E', '#109EDC'],
    };

    // use configuration item and data specified to show chart
    this.barChart.setOption(options);

    //========================== Reponsive ===================
    // Đây là chuẩn của Browser để bắt sự kiện thay đổi size
    // Lưu ý callback function ko cần tham số cũng đc => ta phải chủ độ đo size của Element của ta
    // annotation để lúc compile ko check type
    // @ts-ignore
    this.resizeObserver = new ResizeObserver(() => {
      //
      this.barChart.resize();
    });

    this.resizeObserver.observe(document.getElementById('bar2-chart-parent'));
    //
  }
  resizeObserver: any;
  ngOnDestroy(): void {
    // bị báo lỗi nên comment lại
    // this.resizeObserver?.unobserve(<Element>document.getElementById('bar2-chart-parent'));
  }
}
