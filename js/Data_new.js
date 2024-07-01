function showdata() {
    $("#Data_Des").show();
    $('#Data_Left_Panel').css("display", "flex");
    $('#Data_options').css("display", "flex");
    $("#Scanner_Left_Panel, #Scanner_options, #Cal_Left_Panel, #Calculator_options, #Risk_Cal_Body, #Risk_Cal_Des, #SIP_Cal_Des, #SIP_Cal_Body, #PIVOT_Cal_Des, #PIVOT_Cal_Body, #EMI_Cal_Des, #EMI_Cal_Body, #Income_Tax_Cal_Des, #Income_Tax_Cal_Body, #PIVOT_Cal_Body_1, #CAGR_Cal_Body, #CAGR_Cal_Des").hide();
    $(".RiskCalculatorDiscription, .CAGRCalculatorDiscription, .ReverseCAGRCalculatorDiscription, .SIPCalculatorDiscription, .PivotPointCalculatorDiscription, .EMICalculatorDiscription, .IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").show();
    $("#DeliveryScannerDiscription").hide();
    $('.Highest_Delivery_Menu, .Delivery_Spike_Menu').hide();
    
    if (counter >= 19) {
        counter = -1;
        console.log(counter);
    }
    
    if (callcount_for_FII_DII_Data > 0) {
        return;
    } else {
        fetch_data();
    }
}

fetch_data = () => {
    $.ajax({
        method: 'GET',
        url: 'https://nayansamudra.github.io/scanner_Final_Update.github.io/API/fetch_fii_dii_data.txt',
        success: function(response) {
            response = JSON.parse(response);
            myArrayone = response;
            In_Market_appendData();
            FII_NET_appendData();
            DII_NET_appendData();
            
            var table1 = document.getElementById('FII/DII_Data');
            var tableRows = response.map(data => `
                <tr>
                    <td>${moment(data[0] * 1000).format('DD-MM-YYYY')}</td>
                    <td>${data[1]}</td>
                    <td>${data[2]}</td>
                    <td>${data[3]}</td>
                    <td>${(parseFloat(data[3]) + parseFloat(data[6])).toFixed(2)}</td>
                    <td>${data[6]}</td>
                    <td>${data[4]}</td>
                    <td>${data[5]}</td>
                </tr>`).join('');
            
            table1.innerHTML = tableRows;

            $("#ChartDatatable_1").DataTable({
                "columnDefs": [
                    { targets: [0, 1, 2, 3, 5, 6, 7], className: 'dt-body-center' },
                    { targets: [4], className: 'dt-body-center' }
                ],
                "autoWidth": false,
                "rowCallback": function(row, data) {
                    const color = data[3] > 0 ? 'green' : 'red';
                    $('td:eq(3)', row).html(`<span style=color:${color}>${data[3]}</span>`);
                    $('td:eq(5)', row).html(`<span style=color:${color}>${data[5]}</span>`);
                    const backgroundColor = data[4] > 0 ? 'green' : 'red';
                    $('td:eq(4)', row).html(`<span><div style=color:white;background-color:${backgroundColor};border-radius:5px;>${data[4]}</div></span>`);
                },
                paging: false,
                info: false,
                ordering: false,
                searching: false,
            });
        }
    });
    callcount_for_FII_DII_Data++;
};

function In_Market_appendData() {
    var arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [];
    for (var i = 19; i >= 0; i--) {
        arr2.push(moment(myArrayone[i][0] * 1000).format('DD-MM-YYYY'));
        arr3.push(parseFloat((parseFloat(myArrayone[i][3]) + parseFloat(myArrayone[i][6])).toFixed(2)));
        arr4.push(Math.abs(myArrayone[i][3]));
        arr5.push(Math.abs(myArrayone[i][6]));
    }

    for (var i = 0; i < 20; i++) {
        arr6.push(arr4[i] > arr5[i] ? 'F' : 'D');
    }


    In_Market_chart.updateOptions({
        series: [{
            name: 'FII + DII Net',
            data: arr3
        }],
        xaxis: {
            type: 'category',
            categories: arr2,
        },
        dataLabels: {
            enabled: true,
            formatter: function() {
                counter++;
                return counter >= 20 ? arr6[counter - 20] : arr6[counter];
            },
            offsetY: -25,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            },
        },
        responsive: [{
            breakpoint: 800,
            options: {
                series: [{
                    name: 'FII + DII Net',
                    data: arr3
                }],
                xaxis: {
                    type: 'category',
                    categories: arr2,
                },
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        counter++;
                        console.log(arr6[counter], counter);
                        return counter >= 20 ? arr6[counter - 20] : arr6[counter];
                    },
                    offsetY: -25,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Outfit, sans-serif',
                        colors: ["#304758"]
                    },
                },
            }
        }]
    });
}

function FII_NET_appendData() {
    var arr2 = [], arr3 = [];
    for (var i = 19; i >= 0; i--) {
        arr2.push(moment(myArrayone[i][0] * 1000).format('DD-MM-YYYY'));
        arr3.push(myArrayone[i][3]);
    }

    FII_NET_chart.updateOptions({
        series: [{
            name: 'FII Net',
            data: arr3
        }],
        xaxis: {
            type: 'category',
            categories: arr2,
        },
        responsive: [{
            breakpoint: 800,
            options: {
                series: [{
                    name: 'FII Net',
                    data: arr3
                }],
                xaxis: {
                    type: 'category',
                    categories: arr2,
                },
            }
        }]
    });
}

function DII_NET_appendData() {
    var arr2 = [], arr3 = [];
    for (var i = 19; i >= 0; i--) {
        arr2.push(moment(myArrayone[i][0] * 1000).format('DD-MM-YYYY'));
        arr3.push(myArrayone[i][6]);
    }

    DII_NET_chart.updateOptions({
        series: [{
            name: 'DII Net',
            data: arr3
        }],
        xaxis: {
            type: 'category',
            categories: arr2,
        },
        responsive: [{
            breakpoint: 800,
            options: {
                series: [{
                    name: 'DII Net',
                    data: arr3
                }],
                xaxis: {
                    type: 'category',
                    categories: arr2,
                },
            }
        }]
    });
}

$(document).ready(function() {
    callcount_for_FII_DII_Data = 0;
    counter = -1;
    myArrayone = [[0, 0], [0, 0]];

    var options_ds3 = {
        series: [],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            toolbar: { show: false },
            type: 'bar',
            height: 350,
        },
        title: {
            text: 'DII Net Value',
            fontFamily: 'Outfit, sans-serif',
            align: 'center'
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: { position: 'top' },
                colors: {
                    ranges: [{ from: 0, to: 20000, color: '#008000' }, { from: -20000, to: 0, color: '#FF0000' }]
                },
                columnWidth: '75%',
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function() { return ''; },
            offsetY: -20,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            }
        },
        yaxis: {
            labels: { formatter: function(y) { return y.toFixed(2); } }
        },
        responsive: [{ breakpoint: 800, options: { series: [] } }]
    };
    DII_NET_chart = new ApexCharts(document.querySelector("#Datachart_3"), options_ds3);
    DII_NET_chart.render();

    var options_ds2 = {
        series: [],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            toolbar: { show: false },
            type: 'bar',
            height: 350,
        },
        title: {
            text: 'FII Net Value',
            fontFamily: 'Outfit, sans-serif',
            align: 'center'
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: { position: 'top' },
                colors: {
                    ranges: [{ from: 0, to: 20000, color: '#008000' }, { from: -20000, to: 0, color: '#FF0000' }]
                },
                columnWidth: '75%',
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function() { return ''; },
            offsetY: -20,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            }
        },
        yaxis: {
            labels: { formatter: function(y) { return y.toFixed(2); } }
        },
        responsive: [{ breakpoint: 800, options: { series: [] } }]
    };
    FII_NET_chart = new ApexCharts(document.querySelector("#Datachart_2"), options_ds2);
    FII_NET_chart.render();

    var options_ds1 = {
        series: [],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            toolbar: { show: false },
            type: 'bar',
            height: 350,
        },
        title: {
            text: 'In Market',
            fontFamily: 'Outfit, sans-serif',
            align: 'center'
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: { position: 'top' },
                colors: {
                    ranges: [{ from: 0, to: 20000, color: '#008000' }, { from: -20000, to: 0, color: '#FF0000' }]
                },
                columnWidth: '75%',
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function() { return ''; },
            offsetY: -20,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            }
        },
        yaxis: {
            labels: { formatter: function(y) { return y.toFixed(2); } }
        },
        responsive: [{ breakpoint: 800, options: { series: [] } }]
    };
    In_Market_chart = new ApexCharts(document.querySelector("#Datachart_1"), options_ds1);
    In_Market_chart.render();
});
