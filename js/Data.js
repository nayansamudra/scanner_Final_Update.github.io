function showdata() {
    $("#Data_Des").show();
    $('#Data_Left_Panel').css("display", "flex");
    $('#Data_options').css("display", "flex");
    // $("#Data_Des").show();
    $("#Scanner_Left_Panel").hide();
    $("#Data_Left_Panel").show();
    $("#Scanner_options").hide();
    $("#Data_options").show();
    $("#Cal_Left_Panel").hide();
    $("#Calculator_options").hide();
    $("#Risk_Cal_Body").hide();
    $("#Risk_Cal_Des").hide();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $("#CAGR_Cal_Body").hide();
    $("#CAGR_Cal_Des").hide();
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").show();
    $("#DeliveryScannerDiscription").hide();
    $('.Highest_Delivery_Menu').hide();
    $('.Delivery_Spike_Menu').hide();
    if (counter >= 19) {
        counter = -1
        console.log(counter)
    }
    if (callcount_for_FII_DII_Data > 0) { return }
    else { fetch_data(); }
}

fetch_data = () => {
    $.ajax({
        method: 'GET',
        url: 'https://nayansamudra.github.io/scanner_Final_Update.github.io/API/fetch_fii_dii_data.txt',
        success: function (response) {
            response = JSON.parse(response)
            myArrayone = response
            In_Market_appendData();
            FII_NET_appendData();
            DII_NET_appendData();
            var table1 = document.getElementById('FII/DII_Data')
            for (var j = 0; j < response.length; j++) {
                var row = `<tr>
                <td>${moment(response[j][0] * 1000).format('DD-MM-YYYY')}</td>
                <td>${response[j][1]}</td>
                <td>${response[j][2]}</td>
                <td>${response[j][3]}</td>
                <td>${parseFloat(parseFloat(response[j][3]) + parseFloat(response[j][6])).toFixed(2)}</td>
                <td>${response[j][6]}</td>
                <td>${response[j][4]}</td>
                <td>${response[j][5]}</td>
                                    </tr>`
                table1.innerHTML += row
            }
            $("#ChartDatatable_1").DataTable({
                "columnDefs": [{ targets: [0, 1, 2, 3, 5, 6, 7], className: 'dt-body-center' },
                { targets: [4], className: 'dt-body-center' }],
                "autoWidth": false,
                "rowCallback": function (row, data) {
                    if (data[3] > 0) {
                        $('td:eq(3)', row).html('<span style=color:green>' + data[3] + '</span>');
                    }
                    else {
                        $('td:eq(3)', row).html('<span style=color:red>' + data[3] + '</span>');
                    }
                    if (data[5] > 0) {
                        $('td:eq(5)', row).html('<span style=color:green>' + data[5] + '</span>');
                    }
                    else {
                        $('td:eq(5)', row).html('<span style=color:red>' + data[5] + '</span>');
                    }
                    if (data[4] > 0) {
                        $('td:eq(4)', row).html('<span><div style=color:white;background-color:green;border-radius:5px;>' + data[4] + '</div></span>');
                    }
                    else {
                        $('td:eq(4)', row).html('<span><div style=color:white;background-color:red;border-radius:5px;>' + data[4] + '</div></span>');
                    }
                },
                paging: false,
                info: false,
                ordering: false,
                searching: false,
            });
        }
    })
    callcount_for_FII_DII_Data = callcount_for_FII_DII_Data + 1;
}

function In_Market_appendData() {
    var arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [];
    var arr2 = chart.w.globals.series.slice()
    while (arr2.length > 0) {
        arr2.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr2.push(moment(myArrayone[i][0] * 1000).format('DD-MM-YYYY'))
    }
    var arr3 = chart.w.globals.series.slice()
    while (arr3.length > 0) {
        arr3.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr3.push(parseFloat(parseFloat(myArrayone[i][3]) + parseFloat(myArrayone[i][6])).toFixed(2))
    }
    var arr4 = chart.w.globals.series.slice()
    while (arr4.length > 0) {
        arr4.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr4.push(Math.abs(myArrayone[i][3]))
    }
    var arr5 = chart.w.globals.series.slice()
    while (arr5.length > 0) {
        arr5.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr5.push(Math.abs(myArrayone[i][6]))
    }
    var arr6 = chart.w.globals.series.slice()
    for (var i = 0; i < 20; i++) {
        if (arr4[i] > arr5[i]) {
            arr6.push('F');
        }
        else {
            arr6.push('D');
        }
    }

    In_Market_chart.updateOptions({
        series: [
            {
                name: 'FII + DII Net',
                data: arr3
            }
        ],
        xaxis: {
            type: 'category',
            categories: arr2,
        },
        dataLabels: {
            enabled: true,
            formatter: function () {
                counter += 1;
                console.log(arr6[counter], counter)
                if (counter >= 20) { return arr6[counter - 20] }
                return arr6[counter]
            },
            offsetY: -25,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            },
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    series: [
                        {
                            name: 'FII + DII Net',
                            data: arr3

                        }
                    ],
                    xaxis: {
                        type: 'category',
                        categories: arr2,
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            counter += 1;
                            console.log(arr6[counter], counter)
                            if (counter >= 20) { return arr6[counter - 20] }
                            return arr6[counter]
                        },
                        offsetY: -25,
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Outfit, sans-serif',
                            colors: ["#304758"]
                        },
                    },
                }
            }
        ]
    })
};

function FII_NET_appendData() {
    var arr2 = chart.w.globals.series.slice()
    while (arr2.length > 0) {
        arr2.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr2.push(moment(myArrayone[i][0] * 1000).format('DD-MM-YYYY'))
    }
    var arr3 = chart.w.globals.series.slice()
    while (arr3.length > 0) {
        arr3.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr3.push(myArrayone[i][3])
    }
    FII_NET_chart.updateOptions({
        series: [
            {
                name: 'FII Net Value',
                data: arr3
            }
        ],
        xaxis: {
            type: 'category',
            categories: arr2,
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    series: [
                        {
                            name: 'FII Net Value',
                            data: arr3

                        }
                    ],
                    xaxis: {
                        type: 'category',
                        categories: arr2
                    },
                }
            }
        ]
    })
};

function DII_NET_appendData() {
    var arr2 = chart.w.globals.series.slice()
    while (arr2.length > 0) {
        arr2.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr2.push(moment(myArrayone[i][0] * 1000).format('DD-MM-YYYY'))
    }
    var arr3 = chart.w.globals.series.slice()
    while (arr3.length > 0) {
        arr3.pop()
    }
    for (var i = 19; i >= 0; i--) {
        arr3.push(myArrayone[i][6])
    }
    DII_NET_chart.updateOptions({
        series: [
            {
                name: 'DII Net Value',
                data: arr3
            }
        ],
        xaxis: {
            type: 'category',
            categories: arr2
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    series: [
                        {
                            name: 'DII Net Value',
                            data: arr3

                        }
                    ],
                    xaxis: {
                        type: 'category',
                        categories: arr2
                    },
                }
            }
        ]
    })
};

$(document).ready(function () {
    callcount_for_FII_DII_Data = 0;
    counter = -1
    myArrayone = [[0, 0], [0, 0]]
    if (counter >= 40) {
        counter = -1
        console.log(counter)
    }

    var options_ds3 = {
        series: [],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            toolbar: {
                show: false,
            },
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
                dataLabels: {
                    position: 'top',
                },
                colors: {
                    ranges: [{
                        from: 0,
                        to: 20000,
                        color: '#008000'
                    }, {
                        from: -20000,
                        to: 0,
                        color: '#FF0000'
                    }]
                },
                columnWidth: '75%',
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return '';
            },
            offsetY: -20,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            }
        },
        yaxis: {
            labels: {
                formatter: function (y) {
                    return y.toFixed(2);
                }
            }
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    series: []
                }
            }
        ]
    };
    DII_NET_chart = new ApexCharts(document.querySelector("#Datachart_3"), options_ds3);
    DII_NET_chart.render();

    var options_ds2 = {
        series: [],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            toolbar: {
                show: false,
            },
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
                dataLabels: {
                    position: 'top',
                },
                colors: {
                    ranges: [{
                        from: 0,
                        to: 20000,
                        color: '#008000'
                    }, {
                        from: -20000,
                        to: 0,
                        color: '#FF0000'
                    }]
                },
                columnWidth: '75%',
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return '';
            },
            offsetY: -20,
            style: {
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                colors: ["#304758"]
            }
        },
        yaxis: {
            labels: {
                formatter: function (y) {
                    return y.toFixed(2);
                }
            }
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    series: []
                }
            }
        ]
    };
    FII_NET_chart = new ApexCharts(document.querySelector("#Datachart_2"), options_ds2);
    FII_NET_chart.render();

    var options_ds1 = {
        series: [],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            id: 'chart1',
            toolbar: {
                show: false,
            },
            type: 'bar',
            height: 350,
        },
        title: {
            text: 'FII + DII Net',
            align: 'center',
            fontFamily: 'Outfit, sans-serif',
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
                colors: {
                    ranges: [{
                        from: 0,
                        to: 20000,
                        color: '#008000'
                    }, {
                        from: -20000,
                        to: 0,
                        color: '#FF0000'
                    }]
                },
                columnWidth: '75%',
            }
        },

        yaxis: {
            labels: {
                formatter: function (y) {
                    return y.toFixed(2);
                }
            }
        },
        responsive: [
            {
                breakpoint: 800,
                options: {
                    series: []
                }
            }
        ]
    };
    In_Market_chart = new ApexCharts(document.querySelector("#Datachart_1"), options_ds1);
    In_Market_chart.render();

    if ($(document).width() < 768) {
        counter_for_datatable = 0
        $("#ChartDatatable_1 tbody  tr").each(function () {
            $(this).find("td:first").text(moment(myArrayone[counter_for_datatable][0] * 1000).format('DD/MM/YY'));
            if (counter_for_datatable < myArrayone.length) {
                counter_for_datatable += 1
                console.log(counter_for_datatable)
            }
        });
    }
    else if ($(document).width() >= 768) {
        counter_for_datatable = 0
        $("#ChartDatatable_1 tbody tr").each(function () {
            $(this).find("td:first").text(moment(myArrayone[counter_for_datatable][0] * 1000).format('DD-MM-YYYY'));
            if (counter_for_datatable < myArrayone.length) {
                counter_for_datatable += 1
                console.log(counter_for_datatable)
            }
        });
    }
    $(window).resize(function () {
        if ($(document).width() < 768) {
            counter_for_datatable = 0
            $("#ChartDatatable_1 tbody  tr").each(function () {
                $(this).find("td:first").text(moment(myArrayone[counter_for_datatable][0] * 1000).format('DD/MM/YY'));
                if (counter_for_datatable < myArrayone.length) {
                    counter_for_datatable += 1
                    console.log(counter_for_datatable)
                }
            });
        }
        else if ($(document).width() >= 768) {
            counter_for_datatable = 0
            $("#ChartDatatable_1 tbody tr").each(function () {
                $(this).find("td:first").text(moment(myArrayone[counter_for_datatable][0] * 1000).format('DD-MM-YYYY'));
                if (counter_for_datatable < myArrayone.length) {
                    counter_for_datatable += 1
                    console.log(counter_for_datatable)
                }
            });
        }
    });
})
