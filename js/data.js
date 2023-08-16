function getData1(){
    var xAxisData = [1,2,3,4,5,6];
    var serieData = [];
    serieData.push({ 'name': 1, 'value':10})
    serieData.push({ 'name': 2, 'value':20})
    serieData.push({ 'name': 3, 'value':15})
    serieData.push({ 'name': 4, 'value':50})
    serieData.push({ 'name': 5, 'value':40})
    serieData.push({ 'name': 6, 'value':10})
    return {
        xAxis:xAxisData,
        series:serieData
    }
}

function getData2(){
    var xAxisData = [1,2,3,4,5,6];
    var serieData1 = [];
    serieData1.push({ 'name': 1, 'value':101})
    serieData1.push({ 'name': 2, 'value':220})
    serieData1.push({ 'name': 3, 'value':15})
    serieData1.push({ 'name': 4, 'value':250})
    serieData1.push({ 'name': 5, 'value':404})
    serieData1.push({ 'name': 6, 'value':120})
    var serieData2 = [];
    serieData2.push({ 'name': 1, 'value':120})
    serieData2.push({ 'name': 2, 'value':24})
    serieData2.push({ 'name': 3, 'value':15})
    serieData2.push({ 'name': 4, 'value':55})
    serieData2.push({ 'name': 5, 'value':40})
    serieData2.push({ 'name': 6, 'value':19})
    return {
        xAxis:xAxisData,
        series:serieData1,
        series2:serieData2
    }
}

function getData3(){
    var xAxisData = [1,2,3,4,5,6];
    var serieData1 = [];
    serieData1.push({ 'name': 1, 'value':101})
    serieData1.push({ 'name': 2, 'value':220})
    serieData1.push({ 'name': 3, 'value':15})
    serieData1.push({ 'name': 4, 'value':250})
    serieData1.push({ 'name': 5, 'value':404})
    serieData1.push({ 'name': 6, 'value':120})
    var serieData2 = [];
    serieData2.push({ 'name': 1, 'value':120})
    serieData2.push({ 'name': 2, 'value':24})
    serieData2.push({ 'name': 3, 'value':15})
    serieData2.push({ 'name': 4, 'value':55})
    serieData2.push({ 'name': 5, 'value':40})
    serieData2.push({ 'name': 6, 'value':19})
    var serieData3 = [];
    serieData3.push({ 'name': 1, 'value':110})
    serieData3.push({ 'name': 2, 'value':202})
    serieData3.push({ 'name': 3, 'value':125})
    serieData3.push({ 'name': 4, 'value':540})
    serieData3.push({ 'name': 5, 'value':401})
    serieData3.push({ 'name': 6, 'value':140})
    return {
        xAxis:xAxisData,
        series:serieData1,
        series2:serieData2,
        series3:serieData3
    }
}

function getPieData1() {
    var dataValue = [
        {value: 335, name: '东沙湖所'},
        {value: 310, name: '湖东所'},
        {value: 234, name: '湖西所'},
        {value: 135, name: '娄葑所'},
        {value: 400, name: '胜浦所'},
        {value: 335, name: '唯亭所'},
        {value: 310, name: '斜塘所'},
        {value: 234, name: '半岛所'},
        {value: 135, name: '永安桥所'},
        {value: 548, name: '综保所'}
    ];
    return dataValue;
}