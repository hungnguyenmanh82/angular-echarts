import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartOption, ECharts } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit, OnDestroy {
  barChart: ECharts;

  ngOnInit(): void {
    // based on prepared DOM, initialize echarts instance
    this.barChart = echarts.init(<HTMLDivElement>document.getElementById('bar-chart'));

    // Option:
    const options: EChartOption = {
      backgroundColor: '#FFFFFF', //(R,G,B) = (RED, GREEN, BLUE)
      color: ['#00FF00'],
      title: {
        text: 'Bar chart example',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      // phải khai báo legend để show legend (nếu ko sẽ bị hidden)
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // X axis value
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: '#0000FF', //(R,G,B)
            },
          },
          axisLabel: {},
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#0000FF', //(R,G,B)
            },
          },
          splitLine: {
            lineStyle: {
              color: 'GREY',
            },
          },
          axisLabel: {},
        },
      ],
      series: [
        {
          name: 'Score',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220], // Y axis value
        },
      ],
    };

    // use configuration item and data specified to show chart
    this.barChart.setOption(options);

    //========================== Reponsive ===================
    // Đây là chuẩn của Browser để bắt sự kiện thay đổi size
    // Lưu ý callback function ko cần tham số cũng đc => ta phải chủ độ đo size của Element của ta
    // annotation để lúc compile ko check type
    // @ts-ignore
    this.resizeObserver = new ResizeObserver(() => {
      // xác đinh kích kích thước của <div> ở đây
      this.barChart.resize();
    });

    this.resizeObserver.observe(document.getElementById('bar-chart-parent'));
    //
  }

  resizeObserver: any;
  ngOnDestroy(): void {
    // nếu ko ép kiểu sẽ báo lỗi
    // this.resizeObserver?.unobserve(<Element>document.getElementById('bar-chart-parent'));
  }
}
