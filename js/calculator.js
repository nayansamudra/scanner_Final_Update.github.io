showcagrcal = () => {
    $("#CAGR_Cal_Des").show();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $("#CAGR_Cal_Des").css("display", "flex");
    $("#Risk_Cal_Des").hide();
    $("#Risk_Cal_Body").hide();
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").show();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
    $("#CAGR_Cal_Body").show(10, function () {
        $("#CAGRCalCAGRLaptop").prop("checked", true);
        $("#CAGRCalCAGRMobile").prop("checked", true);
        displaycagrform()
    })
}

showsipcal = () => {
    $("#CAGR_Cal_Des").hide();
    $("#CAGR_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $('#SIP_Cal_Des').show();
    $("#SIP_Cal_Des").css("display", "flex");
    $("#Risk_Cal_Des").hide();
    $("#Risk_Cal_Body").hide();
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").show();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
    $("#SIP_Cal_Body").show();
}

showpivotcal = () => {
    $("#Risk_Cal_Des").hide();
    $("#Risk_Cal_Body").hide();
    $("#CAGR_Cal_Des").hide();
    $("#CAGR_Cal_Body").hide();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $('#PIVOT_Cal_Des').show();
    $("#PIVOT_Cal_Body").show();
    $("#PIVOT_Cal_Body_1").show();
    $("#PIVOT_Cal_Des").css("display", "flex");
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").show();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

showemical = () => {
    $("#Risk_Cal_Des").hide();
    $("#Risk_Cal_Body").hide();
    $("#CAGR_Cal_Des").hide();
    $("#CAGR_Cal_Body").hide();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#EMI_Cal_Des').show();
    $("#EMI_Cal_Body").show();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $("#EMI_Cal_Des").css("display", "flex");
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").show();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

showincometaxcal = () => {
    $("#Risk_Cal_Des").hide();
    $("#Risk_Cal_Body").hide();
    $("#CAGR_Cal_Des").hide();
    $("#CAGR_Cal_Body").hide();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').show();
    $("#Income_Tax_Cal_Body").show(10, function () {
        $("#Assessment_Year_1").prop("checked", true);
        $("#Age_category_1").prop("checked", true);
        $("#metro_city_1").prop("checked", true);
    });
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $("#Income_Tax_Cal_Des").css("display", "flex");
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").show();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
    // $("#inlineRadio1").text( (new Date).getFullYear() + " - "+ (parseInt((new Date).getFullYear())+1));                 //2022 - 2023
    // $("#inlineRadio2").text( (parseInt((new Date).getFullYear())-1) + " - "+ (new Date).getFullYear());                 //2021 - 2022
    // $("#inlineRadio3").text( (parseInt((new Date).getFullYear())-2) + " - "+ (parseInt((new Date).getFullYear())-1));   //2020 - 2021

    $("#inlineRadio1").text(moment().year() + " - " + (parseInt(moment().year()) + 1));                 //2022 - 2023
    $("#inlineRadio2").text((parseInt(moment().year()) - 1) + " - " + moment().year());                 //2021 - 2022
    $("#inlineRadio3").text((parseInt(moment().year()) - 2) + " - " + (parseInt(moment().year()) - 1));   //2020 - 2021

}

function showcalculator() {
    $("#Data_Des").hide();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $("#Scanner_Left_Panel").hide();
    $("#Data_Left_Panel").hide();
    $("#Scanner_options").hide();
    $("#Data_options").hide();
    $("#Cal_Left_Panel").show(1,function(){
        $('#Cal_Left_Panel').css("display", "flex");
        $('#Calculator_options').css("display", "flex");
        $('#Risk_Cal_Des').css("display", "flex");
    });
    $("#Calculator_options").show();
    $("#Risk_Cal_Body").show(10, function () {
        $("#RiskCalEquityLaptop").prop("checked", true);
        $("#RiskCalEquityMobile").prop("checked", true);
        displayequityform();
    });
    $("#Risk_Cal_Des").show();
    $(".Highest_Delivery_Menu").hide();
    $(".Delivery_Spike_Menu").hide();
    $(".RiskCalculatorDiscription").show();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

function showriskcal() {
    $("#Risk_Cal_Des").show();
    $("#Risk_Cal_Body").show(10, function () {
        $("#RiskCalEquityLaptop").prop("checked", true);
        $("#RiskCalEquityMobile").prop("checked", true);
        displayequityform();
    });
    $("#CAGR_Cal_Des").hide();
    $("#CAGR_Cal_Body").hide();
    $('#SIP_Cal_Des').hide();
    $("#SIP_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $(".RiskCalculatorDiscription").show();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

function displayequityform() {
    $("#EquityForm").show();
    $("#FOForm").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".RiskCalculatorDiscription").show();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

function displayfandoform() {
    $("#FOForm").show();
    $("#FOForm").css("display", "flex");
    $("#EquityForm").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".RiskCalculatorDiscription").show();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

function displaycagrform() {
    $('#CAGRForm').show();
    $('#ReverseCAGRForm').hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").show();
    $(".RiskCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

function displayreversecagrform() {
    $('#CAGRForm').hide();
    $('#ReverseCAGRForm').show();
    $(".ReverseCAGRCalculatorDiscription").show();
    $(".CAGRCalculatorDiscription").hide();
    $(".RiskCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").hide();
}

function findEquity() {
    $(".form1").text("");
    var num1 = document.getElementById("ac").value;
    var num2 = document.getElementById("rpt").value;
    var num3 = document.getElementById("sir").value;
    if (num1 == "" && num2 == "" && num3 == "") { $(".form1").text("Enter all fields"); return }
    if (num1 == "" && num2 == "") { $("#acccap").text("Enter Account Capital"); $("#riskpertrade").text("Enter Risk Per Trade"); return }
    if (num1 == "" && num3 == "") { $("#acccap").text("Enter Account Capital"); $("#stoplossinrupees").text("Enter Stoploss in Rupees"); return }
    if (num2 == "" && num3 == "") { $("#riskpertrade").text("Enter Risk Per Trade"); $("#stoplossinrupees").text("Enter Stoploss in Rupees"); return }
    if (num1 == "") { $("#acccap").text("Enter Account Capital"); return }
    if (num2 == "") { $("#riskpertrade").text("Enter Risk Per Trade"); return }
    if (num3 == "") { $("#stoplossinrupees").text("Enter Stoploss in Rupees"); return }
    var totalquantity = (parseFloat(num1) * parseFloat(num2)) / (100 * parseFloat(num3));
    console.log(totalquantity)
    $("#Totalquantity1").text(parseInt(totalquantity));
    var amtatrisk = (parseInt(totalquantity) * parseFloat(num3));
    console.log(amtatrisk)
    $("#Amountatrisk1").text(parseFloat(amtatrisk));
}

function clearEquity() {
    $("#ac").val("");
    $("#rpt").val("");
    $("#sir").val("");
    $(".form1").text("");
    $("#Totalquantity1").text("");
    $("#Amountatrisk1").text("");
}

function findFO() {
    $(".form1").text("");
    var Capital = document.getElementById("ac1").value;
    var Risk = document.getElementById("rpt1").value;
    var LotSize = document.getElementById("ls1").value;
    var Stoploss = document.getElementById("sir1").value;
    if (Capital == "" && Risk == "" && LotSize == "" && Stoploss == "") { $(".form1").text("Enter all fields"); return }
    if (Capital == "" && Risk == "" && LotSize == "") { $("#acccap1").text("Enter Account Capital"); $("#riskpertrade1").text("Enter Risk Per Trade"); $("#lotsize1").text("Enter Lot Size"); return }
    if (Capital == "" && Risk == "" && Stoploss == "") { $("#acccap1").text("Enter Account Capital"); $("#riskpertrade1").text("Enter Risk Per Trade"); $("#stoplossinrupees1").text("Enter Stoploss in Rupees"); return }
    if (Capital == "" && LotSize == "" && Stoploss == "") { $("#acccap1").text("Enter Account Capital"); $("#lotsize1").text("Enter Lot Size"); $("#stoplossinrupees1").text("Enter Stoploss in Rupees"); return }
    if (Risk == "" && LotSize == "" && Stoploss == "") { $("#riskpertrade1").text("Enter Risk Per Trade"); $("#lotsize1").text("Enter Lot Size"); $("#stoplossinrupees1").text("Enter Stoploss in Rupees"); return }
    if (Capital == "" && Risk == "") { $("#acccap1").text("Enter Account Capital"); $("#riskpertrade1").text("Enter Risk Per Trade"); return }
    if (Capital == "" && LotSize == "") { $("#acccap1").text("Enter Account Capital"); $("#lotsize1").text("Enter Lot Size"); return }
    if (Capital == "" && Stoploss == "") { $("#acccap1").text("Enter Account Capital"); $("#stoplossinrupees").text("Enter Stoploss in Rupees"); return }
    if (Risk == "" && LotSize == "") { $("#riskpertrade").text("Enter Risk Per Trade"); $("#lotsize1").text("Enter Lot Size"); return }
    if (Risk == "" && Stoploss == "") { $("#riskpertrade").text("Enter Risk Per Trade"); $("#stoplossinrupees").text("Enter Stoploss in Rupees"); return }
    if (LotSize == "" && Stoploss == "") { $("#lotsize1").text("Enter Lot Size"); $("#stoplossinrupees").text("Enter Stoploss in Rupees"); return }
    if (Capital == "") { $("#acccap1").text("Enter Account Capital"); return }
    if (Risk == "") { $("#riskpertrade1").text("Enter Risk Per Trade"); return }
    if (LotSize == "") { $("#lotsize1").text("Enter Lot Size"); return }
    if (Stoploss == "") { $("#stoplossinrupees1").text("Enter Stoploss in Rupees"); return }
    var MaximumRisk = (parseFloat(Capital) * parseFloat(Risk)) / 100;
    var RiskPerLot = parseFloat(Stoploss) * parseFloat(LotSize);
    var NoofLots = parseInt(parseFloat(MaximumRisk) / parseFloat(RiskPerLot));
    var TotalQuantity = parseInt(NoofLots) * parseFloat(LotSize);
    var AmtatRisk = parseFloat(TotalQuantity) * parseFloat(Stoploss);
    $("#Totalquantity2").text(parseFloat(TotalQuantity));
    $("#Nooflots2").text(parseInt(NoofLots));
    $("#Amountatrisk2").text(parseFloat(AmtatRisk));
}

function clearFO() {
    $("#ac1").val("");
    $("#rpt1").val("");
    $("#sir1").val("");
    $("#ls1").val("");
    $(".form1").text("");
    $("#Totalquantity2").text("");
    $("#Nooflots2").text("");
    $("#Amountatrisk2").text("");
}

function findCAGR() {
    $("#CAGRchart").show();
    $(".form1").text("");
    var num1 = document.getElementById("ia").value;
    var num2 = document.getElementById("fa").value;
    var num3 = document.getElementById("dur").value;
    if (num1 == "" && num2 == "" && num3 == "") { $(".form1").text("Enter all fields"); return }
    if (num1 == "" && num2 == "") { $("#initialamount").text("Enter Initial Amount"); $("#finalamount").text("Enter Final Amount"); return }
    if (num1 == "" && num3 == "") { $("#initialamount").text("Enter Initial Amount"); $("#duration").text("Enter Duration"); return }
    if (num2 == "" && num3 == "") { $("#finalamount").text("Enter Final Amount"); $("#duration").text("Enter Duration"); return }
    if (num1 == "") { $("#initialamount").text("Enter Initial Amount"); return }
    if (num2 == "") { $("#finalamount").text("Enter Final Amount"); return }
    if (num3 == "") { $("#duration").text("Enter Duration"); return }
    var cagr = parseFloat((Math.pow(num2 / num1, 1 / num3) - 1) * 100).toFixed(1);
    $("#CAGRanswer").text(cagr + "%");
    var IA = (num1) / (num1 + num2) * 100;
    var FA = (num2) / (num1 + num2) * 100;
    return [IA, FA, cagr]
}

function removeData() {
    var arr = chart.w.globals.series.slice()
    while (arr.length > 0) {
        arr.pop()
    }
    return arr;
}

function appendData(data) {
    var arr = chart.w.globals.series.slice()
    while (arr.length > 0) {
        arr.pop()
    }
    arr.push(data[0], data[1])
    chart.updateOptions({
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: ["Initial Amount", "Final Amount"],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            fontSize: '20px',
                            fontWeight: 'bolder',
                            color: 'black',
                            label: 'CAGR',
                            formatter: () => data[2] + '%'
                        }
                    }
                }
            }
        }
    });
    return arr;
}

function removeData1() {
    var arr1 = chart.w.globals.series.slice()
    while (arr1.length > 0) {
        arr1.pop()
    }
    return arr1;
}

function appendData1(data1) {
    var arr1 = chart.w.globals.series.slice()
    while (arr1.length > 0) {
        arr1.pop()
    }
    arr1.push(data1[0], data1[1])
    chart1.updateOptions({
        tooltip: {
            enabled: false,
            followCursor: false,
            intersect: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: ['Initial Amount', 'Final Amount'],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        color: 'black',
                        fontSize: '30px',
                        total: {
                            show: true,
                            color: 'black',
                            fontSize: '30px',
                            label: data1[2] + 'X',
                            formatter: () => '',
                        }
                    }
                }
            }
        }
    });
    return arr1;
}

function removeData2() {
    var arr2 = chart.w.globals.series.slice()
    while (arr2.length > 0) {
        arr2.pop()
    }
    return arr2;
}

function appendData2(data2) {
    var arr2 = chart.w.globals.series.slice()
    while (arr2.length > 0) {
        arr2.pop()
    }
    console.log(arr2)
    arr2.push(data2[0], data2[1])
    console.log(arr2)
    chart_SIP.updateOptions({
        tooltip: {
            enabled: false,
            followCursor: false,
            intersect: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        // hover: {mode: null},
        dataLabels: {
            enabled: false,
        },
        labels: ['Invested Amount', 'Estimate Returns'],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        color: 'black',
                        fontSize: '30px',
                        total: {
                            show: true,
                            color: 'black',
                            fontSize: '30px',
                            // label: data1[2] + 'X',
                            formatter: () => '',
                        }
                    }
                }
            }
        }
    });
    return arr2;
}

function removeData3() {
    var arr3 = chart.w.globals.series.slice()
    while (arr3.length > 0) {
        arr3.pop()
    }
    return arr3;
}

function appendData3(data3) {
    var arr3 = chart.w.globals.series.slice()
    while (arr3.length > 0) {
        arr3.pop()
    }
    console.log(arr3)
    arr3.push(data3[0], data3[1])
    console.log(arr3)
    chart_EMI.updateOptions({
        tooltip: {
            enabled: false,
            followCursor: false,
            intersect: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        // hover: {mode: null},
        dataLabels: {
            enabled: false,
        },
        labels: ['Principal Amount', 'Interest Amount'],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        color: 'black',
                        fontSize: '30px',
                        total: {
                            show: true,
                            color: 'black',
                            fontSize: '30px',
                            // label: data1[2] + 'X',
                            formatter: () => '',
                        }
                    }
                }
            }
        }
    });
    return arr3;
}

function clearCAGR() {
    $("#ia").val("");
    $("#fa").val("");
    $("#dur").val("");
    $(".form1").text("");
    $("#CAGRanswer").text("");
    $("#CAGRchart").hide();
}

function findReverseCAGR() {
    $("#ReverseCAGRchart").show();
    $(".form1").text("");
    var num1a = document.getElementById("ia1").value;
    var num2a = document.getElementById("cagr1").value;
    var num3a = document.getElementById("dur1").value;
    if (num1a == "" && num2a == "" && num3a == "") { $(".form1").text("Enter all fields"); return }
    if (num1a == "" && num2a == "") { $("#initialamount1").text("Enter Initial Amount"); $("#cagr_1").text("Enter CAGR %"); return }
    if (num1a == "" && num3a == "") { $("#initialamount1").text("Enter Initial Amount"); $("#duration1").text("Enter Duration"); return }
    if (num2a == "" && num3a == "") { $("#cagr_1").text("Enter CAGR %"); $("#duration1").text("Enter Duration"); return }
    if (num1a == "") { $("#initialamount1").text("Enter Initial Amount"); return }
    if (num2a == "") { $("#cagr_1").text("Enter CAGR %"); return }
    if (num3a == "") { $("#duration1").text("Enter Duration"); return }
    var ans1 = num1a * Math.pow((parseFloat(num2a) / 100) + 1, num3a);
    var ans2 = parseFloat(ans1 / num1a).toFixed(1);
    $("#ReverseCAGRanswer").text("₹" + parseInt(ans1));
    var IA1 = (num1a) / (num1a + ans1) * 100;
    var FA1 = (ans1) / (num1a + ans1) * 100;
    return [IA1, FA1, ans2]
}

function clearReverseCAGR() {
    $("#ia1").val("");
    $("#cagr1").val("");
    $("#dur1").val("");
    $(".form1").text("");
    $("#ReverseCAGRanswer").text("");
    $("#ReverseCAGRchart").hide();
}

function findSIP() {
    $("#SIPchart").show();
    $(".form1").text("");
    var num1 = document.getElementById("mi").value;
    var num2 = document.getElementById("err").value;
    var num3 = document.getElementById("tp").value;
    var n = parseInt(num3) * 12;
    var interest = (parseFloat(num2) / 100) / 12;
    if (num1 == "" && num2 == "" && num3 == "") { $(".form1").text("Enter all fields"); return }
    if (num1 == "" && num2 == "") { $("#Monthly_Investment").text("Enter Monthly Investment"); $("#Expected_Return_Rate").text("Enter Expected Return Rate"); return }
    if (num1 == "" && num3 == "") { $("#Monthly_Investment").text("Enter Monthly Investment"); $("#Time_Period_Years").text("Enter Time Period (Years)"); return }
    if (num2 == "" && num3 == "") { $("#Expected_Return_Rate").text("Enter Expected Return Rate"); $("#Time_Period_Years").text("Enter Time Period (Years)"); return }
    if (num1 == "") { $("#Monthly_Investment").text("Enter Monthly Investment"); return }
    if (num2 == "") { $("#Expected_Return_Rate").text("Enter Expected Return Rate"); return }
    if (num3 == "") { $("#Time_Period_Years").text("Enter Time Period (Years)"); return }
    var Invested_Amt = parseInt(parseInt(num1) * parseInt(num3) * 12);
    $("#Invested_Amount").text(Invested_Amt.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    var Total_Value = parseFloat(num1) * ((Math.pow((1 + interest), n) - 1) / interest) * (1 + interest)
    $("#Total_Value").text(Total_Value.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    var Estimate_Returns = Total_Value - Invested_Amt
    $("#Estimate_Returns").text(Estimate_Returns.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    return [Invested_Amt, Estimate_Returns]
}

function clearSIP() {
    $("#mi").val("");
    $("#err").val("");
    $("#tp").val("");
    $(".form1").text("");
    $("#Invested_Amount").text("");
    $("#Estimate_Returns").text("");
    $("#Total_Value").text("");
    $("#SIPchart").hide();
}

function findEMI() {
    $("#EMIchart").show();
    $(".form1").text("");
    var Loan_Amount = document.getElementById("Loan_Amount").value;
    var Rate_of_Interest = document.getElementById("Rate_of_Interest").value;
    var Loan_Tenure = document.getElementById("Loan_Tenure").value;
    var r = parseFloat(Rate_of_Interest) / 1200;
    var number_of_months = parseInt(Loan_Tenure) * 12;
    if (Loan_Amount == "" && Rate_of_Interest == "" && Loan_Tenure == "") { $(".form1").text("Enter all fields"); return }
    if (Loan_Amount == "" && Rate_of_Interest == "") { $("#la").text("Enter Loan Amount"); $("#roi").text("Enter Rate of Interest"); return }
    if (Loan_Amount == "" && Loan_Tenure == "") { $("#la").text("Enter Loan Amount"); $("#lt").text("Enter Loan Tenure"); return }
    if (Rate_of_Interest == "" && Loan_Tenure == "") { $("#roi").text("Enter Rate of Interest"); $("#lt").text("Enter Loan Tenure"); return }
    if (Loan_Amount == "") { $("#la").text("Enter Loan Amount"); return }
    if (Rate_of_Interest == "") { $("#roi").text("Enter Rate of Interest"); return }
    if (Loan_Tenure == "") { $("#lt").text("Enter Loan Tenure"); return }
    var Monthly_EMI = parseFloat(Loan_Amount) * parseFloat(r) * [(Math.pow((1 + r), number_of_months)) / (Math.pow((1 + r), number_of_months) - 1)]
    $("#Monthly_EMI").text(Monthly_EMI.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    var Principal_Amount = parseFloat(Loan_Amount)
    $("#Principal_Amount").text(Principal_Amount.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    var Total_Interest = (Monthly_EMI * number_of_months) - Principal_Amount
    $("#Total_Interest").text(Total_Interest.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    var Total_Amount = (Monthly_EMI * number_of_months)
    $("#Total_Amount").text(Total_Amount.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    }));
    return [Principal_Amount, Total_Interest]
}

function clearEMI() {
    $("#Loan_Amount").val("");
    $("#Rate_of_Interest").val("");
    $("#Loan_Tenure").val("");
    $(".form1").text("");
    $("#Monthly_EMI").text("");
    $("#Principal_Amount").text("");
    $("#Total_Interest").text("");
    $("#Total_Amount").text("");
    $("#EMIchart").hide();
}

function calpivot() {

    var o = document.getElementById('open_price').value;
    var h = document.getElementById('high_price').value;
    var l = document.getElementById('low_price').value;
    var c = document.getElementById('close_price').value;

    if (o == '' || h == '' || l == '' || c == '') { return }

    var O = parseFloat(document.getElementById('open_price').value);
    var H = parseFloat(document.getElementById('high_price').value);
    var L = parseFloat(document.getElementById('low_price').value);
    var C = parseFloat(document.getElementById('close_price').value);

    var Floor_Pivot = (H + L + C) / 3
    $('#floor_pp').text(Floor_Pivot.toFixed(2))
    var Floor_R1 = (2 * Floor_Pivot) - L
    $('#floor_r1').text(Floor_R1.toFixed(2))
    var Floor_R2 = Floor_Pivot + H - L
    $('#floor_r2').text(Floor_R2.toFixed(2))
    var Floor_R3 = H + 2 * (Floor_Pivot - L)
    $('#floor_r3').text(Floor_R3.toFixed(2))
    var Floor_S1 = (2 * Floor_Pivot) - H
    $('#floor_s1').text(Floor_S1.toFixed(2))
    var Floor_S2 = Floor_Pivot - H + L
    $('#floor_s2').text(Floor_S2.toFixed(2))
    var Floor_S3 = L - 2 * (H - Floor_Pivot)
    $('#floor_s3').text(Floor_S3.toFixed(2))

    var Woodie_Pivot = (H + L + 2 * C) / 4
    $('#woodie_pp').text(Woodie_Pivot.toFixed(2));
    var Woodie_R1 = (2 * Woodie_Pivot) - L
    $('#woodie_r1').text(Woodie_R1.toFixed(2));
    var Woodie_R2 = Woodie_Pivot + H - L
    $('#woodie_r2').text(Woodie_R2.toFixed(2));
    var Woodie_S1 = (2 * Woodie_Pivot) - H
    $('#woodie_s1').text(Woodie_S1.toFixed(2));
    var Woodie_S2 = Woodie_Pivot - H + L
    $('#woodie_s2').text(Woodie_S2.toFixed(2));

    var camarilla_R4 = (H - L) * 1.1 / 2 + C
    $('#camarilla_r4').text(camarilla_R4.toFixed(2))
    var camarilla_R3 = (H - L) * 1.1 / 4 + C
    $('#camarilla_r3').text(camarilla_R3.toFixed(2))
    var camarilla_R2 = (H - L) * 1.1 / 6 + C
    $('#camarilla_r2').text(camarilla_R2.toFixed(2))
    var camarilla_R1 = (H - L) * 1.1 / 12 + C
    $('#camarilla_r1').text(camarilla_R1.toFixed(2))
    var camarilla_S1 = C - (H - L) * 1.1 / 12
    $('#camarilla_s1').text(camarilla_S1.toFixed(2))
    var camarilla_S2 = C - (H - L) * 1.1 / 6
    $('#camarilla_s2').text(camarilla_S2.toFixed(2))
    var camarilla_S3 = C - (H - L) * 1.1 / 4
    $('#camarilla_s3').text(camarilla_S3.toFixed(2))
    var camarilla_S4 = C - (H - L) * 1.1 / 2
    $('#camarilla_s4').text(camarilla_S4.toFixed(2))

    if (C < O) { var X = H + (2 * L) + C }
    else if (C > O) { var X = (2 * H) + L + C }
    else if (C == O) { var X = H + L + (2 * C) }
    var Demark_R1 = (X / 2) - L
    $('#demark_r1').text(Demark_R1.toFixed(2))
    var Demark_S1 = (X / 2) - H
    $('#demark_s1').text(Demark_S1.toFixed(2))

    var Fibonacci_PP = (H + L + C) / 3
    $('#fibonacci_pp').text(Fibonacci_PP.toFixed(2))
    var Fibonacci_R3 = Fibonacci_PP + ((H - L) * 1.000)
    $('#fibonacci_r3').text(Fibonacci_R3.toFixed(2))
    var Fibonacci_R2 = Fibonacci_PP + ((H - L) * 0.618)
    $('#fibonacci_r2').text(Fibonacci_R2.toFixed(2))
    var Fibonacci_R1 = Fibonacci_PP + ((H - L) * 0.382)
    $('#fibonacci_r1').text(Fibonacci_R1.toFixed(2))
    var Fibonacci_S1 = Fibonacci_PP - ((H - L) * 0.382)
    $('#fibonacci_s1').text(Fibonacci_S1.toFixed(2))
    var Fibonacci_S2 = Fibonacci_PP - ((H - L) * 0.618)
    $('#fibonacci_s2').text(Fibonacci_S2.toFixed(2))
    var Fibonacci_S3 = Fibonacci_PP - ((H - L) * 1.000)
    $('#fibonacci_s3').text(Fibonacci_S3.toFixed(2))
}

function calpivot_for_mobile() {

    var o = document.getElementById('open_price_1').value;
    var h = document.getElementById('high_price_1').value;
    var l = document.getElementById('low_price_1').value;
    var c = document.getElementById('close_price_1').value;

    if (o == '' || h == '' || l == '' || c == '') { return }

    var O = parseFloat(document.getElementById('open_price_1').value);
    var H = parseFloat(document.getElementById('high_price_1').value);
    var L = parseFloat(document.getElementById('low_price_1').value);
    var C = parseFloat(document.getElementById('close_price_1').value);

    var Floor_Pivot = (H + L + C) / 3
    $('#floor_pp').text(Floor_Pivot.toFixed(2))
    var Floor_R1 = (2 * Floor_Pivot) - L
    $('#floor_r1').text(Floor_R1.toFixed(2))
    var Floor_R2 = Floor_Pivot + H - L
    $('#floor_r2').text(Floor_R2.toFixed(2))
    var Floor_R3 = H + 2 * (Floor_Pivot - L)
    $('#floor_r3').text(Floor_R3.toFixed(2))
    var Floor_S1 = (2 * Floor_Pivot) - H
    $('#floor_s1').text(Floor_S1.toFixed(2))
    var Floor_S2 = Floor_Pivot - H + L
    $('#floor_s2').text(Floor_S2.toFixed(2))
    var Floor_S3 = L - 2 * (H - Floor_Pivot)
    $('#floor_s3').text(Floor_S3.toFixed(2))

    var Woodie_Pivot = (H + L + 2 * C) / 4
    $('#woodie_pp').text(Woodie_Pivot.toFixed(2));
    var Woodie_R1 = (2 * Woodie_Pivot) - L
    $('#woodie_r1').text(Woodie_R1.toFixed(2));
    var Woodie_R2 = Woodie_Pivot + H - L
    $('#woodie_r2').text(Woodie_R2.toFixed(2));
    var Woodie_S1 = (2 * Woodie_Pivot) - H
    $('#woodie_s1').text(Woodie_S1.toFixed(2));
    var Woodie_S2 = Woodie_Pivot - H + L
    $('#woodie_s2').text(Woodie_S2.toFixed(2));

    var camarilla_R4 = (H - L) * 1.1 / 2 + C
    $('#camarilla_r4').text(camarilla_R4.toFixed(2))
    var camarilla_R3 = (H - L) * 1.1 / 4 + C
    $('#camarilla_r3').text(camarilla_R3.toFixed(2))
    var camarilla_R2 = (H - L) * 1.1 / 6 + C
    $('#camarilla_r2').text(camarilla_R2.toFixed(2))
    var camarilla_R1 = (H - L) * 1.1 / 12 + C
    $('#camarilla_r1').text(camarilla_R1.toFixed(2))
    var camarilla_S1 = C - (H - L) * 1.1 / 12
    $('#camarilla_s1').text(camarilla_S1.toFixed(2))
    var camarilla_S2 = C - (H - L) * 1.1 / 6
    $('#camarilla_s2').text(camarilla_S2.toFixed(2))
    var camarilla_S3 = C - (H - L) * 1.1 / 4
    $('#camarilla_s3').text(camarilla_S3.toFixed(2))
    var camarilla_S4 = C - (H - L) * 1.1 / 2
    $('#camarilla_s4').text(camarilla_S4.toFixed(2))

    if (C < O) { var X = H + (2 * L) + C }
    else if (C > O) { var X = (2 * H) + L + C }
    else if (C == O) { var X = H + L + (2 * C) }
    var Demark_R1 = (X / 2) - L
    $('#demark_r1').text(Demark_R1.toFixed(2))
    var Demark_S1 = (X / 2) - H
    $('#demark_s1').text(Demark_S1.toFixed(2))

    var Fibonacci_PP = (H + L + C) / 3
    $('#fibonacci_pp').text(Fibonacci_PP.toFixed(2))
    var Fibonacci_R3 = Fibonacci_PP + ((H - L) * 1.000)
    $('#fibonacci_r3').text(Fibonacci_R3.toFixed(2))
    var Fibonacci_R2 = Fibonacci_PP + ((H - L) * 0.618)
    $('#fibonacci_r2').text(Fibonacci_R2.toFixed(2))
    var Fibonacci_R1 = Fibonacci_PP + ((H - L) * 0.382)
    $('#fibonacci_r1').text(Fibonacci_R1.toFixed(2))
    var Fibonacci_S1 = Fibonacci_PP - ((H - L) * 0.382)
    $('#fibonacci_s1').text(Fibonacci_S1.toFixed(2))
    var Fibonacci_S2 = Fibonacci_PP - ((H - L) * 0.618)
    $('#fibonacci_s2').text(Fibonacci_S2.toFixed(2))
    var Fibonacci_S3 = Fibonacci_PP - ((H - L) * 1.000)
    $('#fibonacci_s3').text(Fibonacci_S3.toFixed(2))
}

function calincometax() {
    var Gross_salary_income = document.getElementById("Gross_salary_income").value;
    var income_other_sources = document.getElementById("income_other_sources").value;
    var income_interest = document.getElementById("income_interest").value;
    var rental_income = document.getElementById("rental_income").value;
    var home_loan_self_occupied = document.getElementById("home_loan_self_occupied").value;
    var home_loan_let_out = document.getElementById("home_loan_let_out").value;
    var input_nps = document.getElementById("input_nps").value;
    var basic_deduction = document.getElementById("basic_deduction").value;
    var Medical_Insurance = document.getElementById('Medical_Insurance').value;
    var Donation_charity = document.getElementById("Donation_charity").value;
    var Educational_Loan = document.getElementById("Educational_Loan").value;
    var Int_Saving_Account = document.getElementById("Int_Saving_Account").value;
    var Basic_Salary = document.getElementById("Basic_Salary").value;
    var Dearness_allowance = document.getElementById("Dearness_allowance").value;
    var HRA_Received = document.getElementById("HRA_Received").value;
    var Total_Rent_Paid = document.getElementById("Total_Rent_Paid").value;
    if (input_nps > 50000) {
        input_nps = 50000
        $(`#input_nps`).val(50000)
    }
    if (basic_deduction > 150000) {
        basic_deduction = 150000
        $(`#basic_deduction`).val(150000)
    }
    if (Gross_salary_income == '') { Gross_salary_income = 0 }
    if (income_other_sources == '') { income_other_sources = 0 }
    if (income_interest == '') { income_interest = 0 }
    if (rental_income == '') { rental_income = 0 }
    if (home_loan_self_occupied == '') { home_loan_self_occupied = 0 }
    if (home_loan_let_out == '') { home_loan_let_out = 0 }
    if (input_nps == '') { input_nps = 0 }
    if (basic_deduction == '') { basic_deduction = 0 }
    if (Medical_Insurance == '') { Medical_Insurance = 0 }
    if (Donation_charity == '') { Donation_charity = 0 }
    if (Educational_Loan == '') { Educational_Loan = 0 }
    if (Int_Saving_Account == '') { Int_Saving_Account = 0 }
    if (Basic_Salary == '') { Basic_Salary = 0 }
    if (Dearness_allowance == '') { Dearness_allowance = 0 }
    if (HRA_Received == '') { HRA_Received = 0 }
    if (Total_Rent_Paid == '') { Total_Rent_Paid = 0 }
    if ($("#Assessment_Year_1").is(":checked") || $("#Assessment_Year_2").is(":checked")) {
        $('#answer').show();
        $('#answer_1').hide();
        if ($("#Age_category_1").is(":checked")) {
            var Gross_Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
                (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out);
            var Gross_Deduction = parseFloat(basic_deduction) + parseFloat(input_nps) + parseFloat(Medical_Insurance)
                + parseFloat(Donation_charity) + parseFloat(Educational_Loan) + parseFloat(Int_Saving_Account);
            var Net_Total_Income = parseFloat(Gross_Total_Income) - parseFloat(Gross_Deduction) - 50000
            var HRA_Exemption_1 = parseFloat(HRA_Received)
            console.log("Gross_Total_Income = " + Gross_Total_Income)
            console.log("Gross_Deduction = " + Gross_Deduction)
            console.log("Net_Total_Income = " + Net_Total_Income)
            console.log("HRA_Exemption_1 = " + HRA_Exemption_1)
            if ($("#metro_city_1").is(":checked")) {
                var HRA_Exemption_2 = (50 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 1st")
            } else if ($("#metro_city_2").is(":checked")) {
                var HRA_Exemption_2 = (40 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 2nd")
            }
            console.log("HRA_Exemption_2 = " + HRA_Exemption_2)

            var HRA_Exemption_3 = parseFloat(Total_Rent_Paid) - (10 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
            if (HRA_Exemption_3 < 0) { HRA_Exemption_3 = 0 }
            console.log("HRA_Exemption_3 = " + HRA_Exemption_3)
            if (HRA_Exemption_1 <= HRA_Exemption_2 && HRA_Exemption_1 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_1)
            }
            else if (HRA_Exemption_2 <= HRA_Exemption_1 && HRA_Exemption_2 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_2)
            }
            else if (HRA_Exemption_3 <= HRA_Exemption_1 && HRA_Exemption_3 <= HRA_Exemption_2) {
                var HRA_Exemption = parseFloat(HRA_Exemption_3)
            }
            console.log("HRA_Exemption = " + HRA_Exemption)
            var Net_Taxable_Income = parseFloat(Net_Total_Income) - parseFloat(HRA_Exemption);
            console.log("Net_Taxable_Income = " + Net_Taxable_Income)
            if (Net_Taxable_Income <= 500000) { $(`#total_tax_old_regime`).text('₹0'); }
            else {
                if (Net_Taxable_Income <= 250000) {
                    $(`#total_tax_old_regime`).text('₹0')
                }
                else if (Net_Taxable_Income > 250000 && Net_Taxable_Income <= 500000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 250000) * (5 / 100)
                    var cess = (parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 500000 && Net_Taxable_Income <= 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 500000) * (20 / 100)
                    var cess = (12500 + parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = 12500 + parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 1000000) * (30 / 100)
                    if (Net_Taxable_Income > 5000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (10 / 100)
                    }
                    else if (Net_Taxable_Income > 10000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (15 / 100)
                    }
                    else if (Net_Taxable_Income > 20000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (25 / 100)
                    }
                    else if (Net_Taxable_Income > 50000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (37 / 100)
                    }
                    else {
                        var surcharge = 0;
                    }
                    var cess = (12500 + 100000 + parseFloat(Tax) + parseFloat(surcharge)) * (4 / 100)
                    var Total_Tax = 12500 + 100000 + parseFloat(Tax) + parseFloat(surcharge) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                    console.log("surcharge = " + surcharge)
                }
                console.log("Tax = " + Tax)
                console.log("CESS = " + cess)
                console.log("Total Tax = " + Total_Tax)
            }
        }
        else if ($("#Age_category_2").is(":checked")) {
            var Gross_Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
                (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out);
            var Gross_Deduction = parseFloat(basic_deduction) + parseFloat(input_nps) + parseFloat(Medical_Insurance)
                + parseFloat(Donation_charity) + parseFloat(Educational_Loan) + parseFloat(Int_Saving_Account);
            var Net_Total_Income = parseFloat(Gross_Total_Income) - parseFloat(Gross_Deduction) - 50000
            var HRA_Exemption_1 = parseFloat(HRA_Received)
            console.log("Gross_Total_Income = " + Gross_Total_Income)
            console.log("Gross_Deduction = " + Gross_Deduction)
            console.log("Net_Total_Income = " + Net_Total_Income)
            console.log("HRA_Exemption_1 = " + HRA_Exemption_1)
            if ($("#metro_city_1").is(":checked")) {
                var HRA_Exemption_2 = (50 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 1st")
            } else if ($("#metro_city_2").is(":checked")) {
                var HRA_Exemption_2 = (40 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 2nd")
            }
            console.log("HRA_Exemption_2 = " + HRA_Exemption_2)

            var HRA_Exemption_3 = parseFloat(Total_Rent_Paid) - (10 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
            if (HRA_Exemption_3 < 0) { HRA_Exemption_3 = 0 }
            console.log("HRA_Exemption_3 = " + HRA_Exemption_3)
            if (HRA_Exemption_1 <= HRA_Exemption_2 && HRA_Exemption_1 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_1)
            }
            else if (HRA_Exemption_2 <= HRA_Exemption_1 && HRA_Exemption_2 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_2)
            }
            else if (HRA_Exemption_3 <= HRA_Exemption_1 && HRA_Exemption_3 <= HRA_Exemption_2) {
                var HRA_Exemption = parseFloat(HRA_Exemption_3)
            }
            console.log("HRA_Exemption = " + HRA_Exemption)
            var Net_Taxable_Income = parseFloat(Net_Total_Income) - parseFloat(HRA_Exemption);
            console.log("Net_Taxable_Income = " + Net_Taxable_Income)
            if (Net_Taxable_Income <= 500000) { $(`#total_tax_old_regime`).text('₹0'); }
            else {
                if (Net_Taxable_Income <= 300000) {
                    $(`#total_tax_old_regime`).text('₹0')
                }
                else if (Net_Taxable_Income > 300000 && Net_Taxable_Income <= 500000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 300000) * (5 / 100)
                    var cess = (parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 500000 && Net_Taxable_Income <= 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 500000) * (20 / 100)
                    var cess = (10000 + parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = 10000 + parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 1000000) * (30 / 100)
                    if (Net_Taxable_Income > 5000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (10 / 100)
                    }
                    else if (Net_Taxable_Income > 10000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (15 / 100)
                    }
                    else if (Net_Taxable_Income > 20000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (25 / 100)
                    }
                    else if (Net_Taxable_Income > 50000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (37 / 100)
                    }
                    else {
                        var surcharge = 0;
                    }
                    var cess = (10000 + 100000 + parseFloat(Tax) + parseFloat(surcharge)) * (4 / 100)
                    var Total_Tax = 10000 + 100000 + parseFloat(Tax) + parseFloat(surcharge) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                    console.log("surcharge = " + surcharge)
                }
                console.log("Tax = " + Tax)
                console.log("CESS = " + cess)
                console.log("Total Tax = " + Total_Tax)
            }
        }
        else if ($("#Age_category_3").is(":checked")) {
            var Gross_Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
                (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out);
            var Gross_Deduction = parseFloat(basic_deduction) + parseFloat(input_nps) + parseFloat(Medical_Insurance)
                + parseFloat(Donation_charity) + parseFloat(Educational_Loan) + parseFloat(Int_Saving_Account);
            var Net_Total_Income = parseFloat(Gross_Total_Income) - parseFloat(Gross_Deduction) - 50000
            var HRA_Exemption_1 = parseFloat(HRA_Received)
            console.log("Gross_Total_Income = " + Gross_Total_Income)
            console.log("Gross_Deduction = " + Gross_Deduction)
            console.log("Net_Total_Income = " + Net_Total_Income)
            console.log("HRA_Exemption_1 = " + HRA_Exemption_1)
            if ($("#metro_city_1").is(":checked")) {
                var HRA_Exemption_2 = (50 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2,"u r on 1st")
            } else if ($("#metro_city_2").is(":checked")) {
                var HRA_Exemption_2 = (40 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2,"u r on 2nd")
            }
            console.log("HRA_Exemption_2 = " + HRA_Exemption_2)
            var HRA_Exemption_3 = parseFloat(Total_Rent_Paid) - (10 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
            if (HRA_Exemption_3 < 0) { HRA_Exemption_3 = 0 }
            console.log("HRA_Exemption_3 = " + HRA_Exemption_3)
            if (HRA_Exemption_1 <= HRA_Exemption_2 && HRA_Exemption_1 <= HRA_Exemption_3){
                var HRA_Exemption = parseFloat(HRA_Exemption_1)
            }
            else if (HRA_Exemption_2 <= HRA_Exemption_1 && HRA_Exemption_2 <= HRA_Exemption_3){
                var HRA_Exemption = parseFloat(HRA_Exemption_2)
            }
            else if (HRA_Exemption_3 <= HRA_Exemption_1 && HRA_Exemption_3 <= HRA_Exemption_2){
                var HRA_Exemption = parseFloat(HRA_Exemption_3)
            }
            console.log("HRA_Exemption = " + HRA_Exemption);
            var Net_Taxable_Income = parseFloat(Net_Total_Income) - parseFloat(HRA_Exemption);  
            console.log("Net_Taxable_Income = " + Net_Taxable_Income);
            if (Net_Taxable_Income <= 500000) { $(`#total_tax_old_regime`).text('₹0'); }
            else {
                if (Net_Taxable_Income <= 500000) {
                    $(`#total_tax_old_regime`).text('₹0')
                }
                else if (Net_Taxable_Income > 500000 && Net_Taxable_Income <= 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 500000) * (20 / 100)
                    var cess = (parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 1000000) * (30 / 100)
                    if(Net_Taxable_Income > 5000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (10/100)
                    }
                    else if(Net_Taxable_Income > 10000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (15/100)
                    }
                    else if(Net_Taxable_Income > 20000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (25/100)
                    }
                    else if(Net_Taxable_Income > 50000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (37/100)
                    }
                    else{
                        var surcharge = 0;
                    }
                    var cess = (100000 + parseFloat(Tax) + parseFloat(surcharge)) * (4/100)
                    var Total_Tax = 100000 + parseFloat(Tax) + parseFloat(surcharge) + parseFloat(cess)
                    $(`#total_tax_old_regime`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                    console.log("surcharge = "+surcharge)
                }
                console.log("Tax = "+Tax)
                console.log("CESS = "+cess)
                console.log("Total Tax = "+Total_Tax)
            }
        }
        //For New Tax Regime
        var Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
            (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out) - parseFloat(input_nps);
        console.log(Total_Income)
        if (Total_Income <= 500000) { $(`#total_tax_new_regime`).text('₹0'); }
        else {
            if (Total_Income <= 250000) {
                $(`#total_tax_new_regime`).text('₹0')
            }
            else if (Total_Income > 250000 && Total_Income <= 500000) {
                var Tax = (Total_Income - 250000) * (5 / 100)
                var cess = (Tax) * (4 / 100)
                var Total_Tax = Tax + cess
                $(`#total_tax_new_regime`).text(Total_Tax.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                }))
            }
            else if (Total_Income > 500000 && Total_Income <= 750000) {
                var Tax = (Total_Income - 500000) * (10 / 100)
                var cess = (12500 + Tax) * (4 / 100)
                var Total_Tax = 12500 + Tax + cess
                $(`#total_tax_new_regime`).text(Total_Tax.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                }))
            }
            else if (Total_Income > 750000 && Total_Income <= 1000000) {
                var Tax = (Total_Income - 750000) * (15 / 100)
                var cess = (12500 + 25000 + Tax) * (4 / 100)
                var Total_Tax = 12500 + 25000 + Tax + cess
                $(`#total_tax_new_regime`).text(Total_Tax.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                }))
            }
            else if (Total_Income > 1000000 && Total_Income <= 1250000) {
                var Tax = (Total_Income - 1000000) * (20 / 100)
                var cess = (12500 + 25000 + 37500 + Tax) * (4 / 100)
                var Total_Tax = 12500 + 25000 + 37500 + Tax + cess
                $(`#total_tax_new_regime`).text(Total_Tax.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                }))
            }
            else if (Total_Income > 1250000 && Total_Income <= 1500000) {
                var Tax = (Total_Income - 1250000) * (25 / 100)
                var cess = (12500 + 25000 + 37500 + 50000 + Tax) * (4 / 100)
                var Total_Tax = 12500 + 25000 + 37500 + 50000 + Tax + cess
                $(`#total_tax_new_regime`).text(Total_Tax.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                }))
            }
            else if (Total_Income > 1500000) {
                var Tax = (Total_Income - 1500000) * (30 / 100)
                var cess = (12500 + 25000 + 37500 + 50000 + 62500 + Tax) * (4 / 100)
                var Total_Tax = 12500 + 25000 + 37500 + 50000 + 62500 + Tax + cess
                $(`#total_tax_new_regime`).text(Total_Tax.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                }))
            }
        }
    }
    else if ($("#Assessment_Year_3").is(":checked")) {
        $('#answer_1').show();
        $('#answer').hide();
        if ($("#Age_category_1").is(":checked")) {
            var Gross_Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
                (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out);
            var Gross_Deduction = parseFloat(basic_deduction) + parseFloat(input_nps) + parseFloat(Medical_Insurance)
                + parseFloat(Donation_charity) + parseFloat(Educational_Loan) + parseFloat(Int_Saving_Account);
            var Net_Total_Income = parseFloat(Gross_Total_Income) - parseFloat(Gross_Deduction) - 50000
            var HRA_Exemption_1 = parseFloat(HRA_Received)
            console.log("Gross_Total_Income = " + Gross_Total_Income)
            console.log("Gross_Deduction = " + Gross_Deduction)
            console.log("Net_Total_Income = " + Net_Total_Income)
            console.log("HRA_Exemption_1 = " + HRA_Exemption_1)
            if ($("#metro_city_1").is(":checked")) {
                var HRA_Exemption_2 = (50 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 1st")
            } else if ($("#metro_city_2").is(":checked")) {
                var HRA_Exemption_2 = (40 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 2nd")
            }
            console.log("HRA_Exemption_2 = " + HRA_Exemption_2)

            var HRA_Exemption_3 = parseFloat(Total_Rent_Paid) - (10 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
            if (HRA_Exemption_3 < 0) { HRA_Exemption_3 = 0 }
            console.log("HRA_Exemption_3 = " + HRA_Exemption_3)
            if (HRA_Exemption_1 <= HRA_Exemption_2 && HRA_Exemption_1 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_1)
            }
            else if (HRA_Exemption_2 <= HRA_Exemption_1 && HRA_Exemption_2 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_2)
            }
            else if (HRA_Exemption_3 <= HRA_Exemption_1 && HRA_Exemption_3 <= HRA_Exemption_2) {
                var HRA_Exemption = parseFloat(HRA_Exemption_3)
            }
            console.log("HRA_Exemption = " + HRA_Exemption)
            var Net_Taxable_Income = parseFloat(Net_Total_Income) - parseFloat(HRA_Exemption);
            console.log("Net_Taxable_Income = " + Net_Taxable_Income)
            if (Net_Taxable_Income <= 500000) { $(`#total_tax_1`).text('₹0'); }
            else {
                if (Net_Taxable_Income <= 250000) {
                    $(`#total_tax_1`).text('₹0')
                }
                else if (Net_Taxable_Income > 250000 && Net_Taxable_Income <= 500000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 250000) * (5 / 100)
                    var cess = (parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 500000 && Net_Taxable_Income <= 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 500000) * (20 / 100)
                    var cess = (12500 + parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = 12500 + parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 1000000) * (30 / 100)
                    if (Net_Taxable_Income > 5000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (10 / 100)
                    }
                    else if (Net_Taxable_Income > 10000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (15 / 100)
                    }
                    else if (Net_Taxable_Income > 20000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (25 / 100)
                    }
                    else if (Net_Taxable_Income > 50000000) {
                        var surcharge = (12500 + 100000 + parseFloat(Tax)) * (37 / 100)
                    }
                    else {
                        var surcharge = 0;
                    }
                    var cess = (12500 + 100000 + parseFloat(Tax) + parseFloat(surcharge)) * (4 / 100)
                    var Total_Tax = 12500 + 100000 + parseFloat(Tax) + parseFloat(surcharge) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                    console.log("surcharge = " + surcharge)
                }
                console.log("Tax = " + Tax)
                console.log("CESS = " + cess)
                console.log("Total Tax = " + Total_Tax)
            }
        }
        else if ($("#Age_category_2").is(":checked")) {
            var Gross_Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
                (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out);
            var Gross_Deduction = parseFloat(basic_deduction) + parseFloat(input_nps) + parseFloat(Medical_Insurance)
                + parseFloat(Donation_charity) + parseFloat(Educational_Loan) + parseFloat(Int_Saving_Account);
            var Net_Total_Income = parseFloat(Gross_Total_Income) - parseFloat(Gross_Deduction) - 50000
            var HRA_Exemption_1 = parseFloat(HRA_Received)
            console.log("Gross_Total_Income = " + Gross_Total_Income)
            console.log("Gross_Deduction = " + Gross_Deduction)
            console.log("Net_Total_Income = " + Net_Total_Income)
            console.log("HRA_Exemption_1 = " + HRA_Exemption_1)
            if ($("#metro_city_1").is(":checked")) {
                var HRA_Exemption_2 = (50 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 1st")
            } else if ($("#metro_city_2").is(":checked")) {
                var HRA_Exemption_2 = (40 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2, "u r on 2nd")
            }
            console.log("HRA_Exemption_2 = " + HRA_Exemption_2)

            var HRA_Exemption_3 = parseFloat(Total_Rent_Paid) - (10 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
            if (HRA_Exemption_3 < 0) { HRA_Exemption_3 = 0 }
            console.log("HRA_Exemption_3 = " + HRA_Exemption_3)
            if (HRA_Exemption_1 <= HRA_Exemption_2 && HRA_Exemption_1 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_1)
            }
            else if (HRA_Exemption_2 <= HRA_Exemption_1 && HRA_Exemption_2 <= HRA_Exemption_3) {
                var HRA_Exemption = parseFloat(HRA_Exemption_2)
            }
            else if (HRA_Exemption_3 <= HRA_Exemption_1 && HRA_Exemption_3 <= HRA_Exemption_2) {
                var HRA_Exemption = parseFloat(HRA_Exemption_3)
            }
            console.log("HRA_Exemption = " + HRA_Exemption)
            var Net_Taxable_Income = parseFloat(Net_Total_Income) - parseFloat(HRA_Exemption);
            console.log("Net_Taxable_Income = " + Net_Taxable_Income)
            if (Net_Taxable_Income <= 500000) { $(`#total_tax_1`).text('₹0'); }
            else {
                if (Net_Taxable_Income <= 300000) {
                    $(`#total_tax_1`).text('₹0')
                }
                else if (Net_Taxable_Income > 300000 && Net_Taxable_Income <= 500000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 300000) * (5 / 100)
                    var cess = (parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 500000 && Net_Taxable_Income <= 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 500000) * (20 / 100)
                    var cess = (10000 + parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = 10000 + parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 1000000) * (30 / 100)
                    if (Net_Taxable_Income > 5000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (10 / 100)
                    }
                    else if (Net_Taxable_Income > 10000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (15 / 100)
                    }
                    else if (Net_Taxable_Income > 20000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (25 / 100)
                    }
                    else if (Net_Taxable_Income > 50000000) {
                        var surcharge = (10000 + 100000 + parseFloat(Tax)) * (37 / 100)
                    }
                    else {
                        var surcharge = 0;
                    }
                    var cess = (10000 + 100000 + parseFloat(Tax) + parseFloat(surcharge)) * (4 / 100)
                    var Total_Tax = 10000 + 100000 + parseFloat(Tax) + parseFloat(surcharge) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                    console.log("surcharge = " + surcharge)
                }
                console.log("Tax = " + Tax)
                console.log("CESS = " + cess)
                console.log("Total Tax = " + Total_Tax)
            }
        }
        else if ($("#Age_category_3").is(":checked")) {
            var Gross_Total_Income = parseFloat(Gross_salary_income) + parseFloat(income_other_sources) + parseFloat(income_interest) +
                (parseFloat(rental_income) * (70 / 100)) - parseFloat(home_loan_self_occupied) - parseFloat(home_loan_let_out);
            var Gross_Deduction = parseFloat(basic_deduction) + parseFloat(input_nps) + parseFloat(Medical_Insurance)
                + parseFloat(Donation_charity) + parseFloat(Educational_Loan) + parseFloat(Int_Saving_Account);
            var Net_Total_Income = parseFloat(Gross_Total_Income) - parseFloat(Gross_Deduction) - 50000
            var HRA_Exemption_1 = parseFloat(HRA_Received)
            console.log("Gross_Total_Income = " + Gross_Total_Income)
            console.log("Gross_Deduction = " + Gross_Deduction)
            console.log("Net_Total_Income = " + Net_Total_Income)
            console.log("HRA_Exemption_1 = " + HRA_Exemption_1)
            if ($("#metro_city_1").is(":checked")) {
                var HRA_Exemption_2 = (50 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2,"u r on 1st")
            } else if ($("#metro_city_2").is(":checked")) {
                var HRA_Exemption_2 = (40 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
                console.log(HRA_Exemption_2,"u r on 2nd")
            }
            console.log("HRA_Exemption_2 = " + HRA_Exemption_2)
            var HRA_Exemption_3 = parseFloat(Total_Rent_Paid) - (10 / 100 * (parseFloat(Basic_Salary) + parseFloat(Dearness_allowance)))
            if (HRA_Exemption_3 < 0) { HRA_Exemption_3 = 0 }
            console.log("HRA_Exemption_3 = " + HRA_Exemption_3)
            if (HRA_Exemption_1 <= HRA_Exemption_2 && HRA_Exemption_1 <= HRA_Exemption_3){
                var HRA_Exemption = parseFloat(HRA_Exemption_1)
            }
            else if (HRA_Exemption_2 <= HRA_Exemption_1 && HRA_Exemption_2 <= HRA_Exemption_3){
                var HRA_Exemption = parseFloat(HRA_Exemption_2)
            }
            else if (HRA_Exemption_3 <= HRA_Exemption_1 && HRA_Exemption_3 <= HRA_Exemption_2){
                var HRA_Exemption = parseFloat(HRA_Exemption_3)
            }
            console.log("HRA_Exemption = " + HRA_Exemption);
            var Net_Taxable_Income = parseFloat(Net_Total_Income) - parseFloat(HRA_Exemption);  
            console.log("Net_Taxable_Income = " + Net_Taxable_Income);
            if (Net_Taxable_Income <= 500000) { $(`#total_tax_1`).text('₹0'); }
            else {
                if (Net_Taxable_Income <= 500000) {
                    $(`#total_tax_1`).text('₹0')
                }
                else if (Net_Taxable_Income > 500000 && Net_Taxable_Income <= 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 500000) * (20 / 100)
                    var cess = (parseFloat(Tax)) * (4 / 100)
                    var Total_Tax = parseFloat(Tax) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                }
                else if (Net_Taxable_Income > 1000000) {
                    var Tax = (parseFloat(Net_Taxable_Income) - 1000000) * (30 / 100)
                    if(Net_Taxable_Income > 5000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (10/100)
                    }
                    else if(Net_Taxable_Income > 10000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (15/100)
                    }
                    else if(Net_Taxable_Income > 20000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (25/100)
                    }
                    else if(Net_Taxable_Income > 50000000){
                        var surcharge = (100000 + parseFloat(Tax)) * (37/100)
                    }
                    else{
                        var surcharge = 0;
                    }
                    var cess = (100000 + parseFloat(Tax) + parseFloat(surcharge)) * (4/100)
                    var Total_Tax = 100000 + parseFloat(Tax) + parseFloat(surcharge) + parseFloat(cess)
                    $(`#total_tax_1`).text(Total_Tax.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    }))
                    console.log("surcharge = "+surcharge)
                }
                console.log("Tax = "+Tax)
                console.log("CESS = "+cess)
                console.log("Total Tax = "+Total_Tax)
            }
        }
    }
}

function showhidetoggler() {
    $("#navbar_Collapse").toggle();
    $("#navbarCollapse").toggle();
}

function showhidetoggler_for_product() {
    $("#sub_menu_toggler").toggle();
}


$(document).ready(function () {

    $(`#hover_1`).hover(function () {
        $(`#NPS_INFO`).show()
    }, function () {
        $(`#NPS_INFO`).hide()
    })

    counter_for_firefox_CAGR = 1;
    counter_for_firefox_ReverseCAGR = 1;
    callcount_for_headertable = 0;
    $.fn.dataTable.ext.errMode = 'none';
    if ($(window).width() < 750) {
        $("#NPS_DIV").css({ left: 600 })
        $("#Data_Des").hide();
        $("#mobileleftpanel").show();
        $("#mobileleftpanel").css("display", "flex");
        $(".laptopleftpanel").hide();
        $(".top-advertisement").hide();
        $(".descriptionimage").hide();
        $(".card-text").hide();
        $("#LaptopRiskRadioButtonOption").hide();
        $("#MobileRiskRadioButtonOption").show();
        $("#LaptopCAGRRadioButtonOption").hide();
        $("#MobileCAGRRadioButtonOption").show();
        $(".Scanner_opt_mobile").show();
        $(".Scanner_opt_laptop").hide();
        $("#HDIntroLaptopView").hide();
        $("#HDIntroMobileView").show();
        $("#DSIntroLaptopView").hide();
        $("#DSIntroMobileView").show();
        $(".Data_opt_mobile").show();
        $(".Data_opt_laptop").hide();
        $("#LaptopFooter").hide();
        $("#MobileFooter").show();
    }
    else {
        $("#LaptopRiskRadioButtonOption").show();
        $("#MobileRiskRadioButtonOption").hide();
        $("#LaptopCAGRRadioButtonOption").show();
        $("#MobileCAGRRadioButtonOption").hide();
        $("#mobileleftpanel").hide();
        $(".laptopleftpanel").show();
        $(".Scanner_opt_mobile").hide();
        $(".Scanner_opt_laptop").show();
        $(".Data_opt_mobile").hide();
        $(".Data_opt_laptop").show();
        $("#HDIntroLaptopView").show();
        $("#HDIntroMobileView").hide();
        $("#DSIntroLaptopView").show();
        $("#DSIntroMobileView").hide();
        $("#LaptopFooter").show();
        $("#MobileFooter").hide();
    }

    $(window).resize(function () {
        if ($(window).width() < 750) {
            // $("#Data_Des").hide();
            counter = -1
            if (counter >= 40) {
                counter = -1
                console.log(counter)
            }
            $("#mobileleftpanel").show();
            $(".laptopleftpanel").hide();
            $(".top-advertisement").hide();
            $(".descriptionimage").hide();
            $(".card-text").hide();
            $("#LaptopRiskRadioButtonOption").hide();
            $("#MobileRiskRadioButtonOption").show();
            $("#LaptopCAGRRadioButtonOption").hide();
            $("#MobileCAGRRadioButtonOption").show();
            $(".Scanner_opt_mobile").show();
            $(".Scanner_opt_laptop").hide();
            $("#HDIntroLaptopView").hide();
            $("#HDIntroMobileView").show();
            $("#DSIntroLaptopView").hide();
            $("#DSIntroMobileView").show();
            $(".Data_opt_mobile").show();
            $(".Data_opt_laptop").hide();
            $("#LaptopFooter").hide();
            $("#MobileFooter").show();
        }
        else if ($(window).width() >= 750){
            counter = -1
            if (counter >= 40) {
                counter = -1
                console.log(counter)
            }
            $("#LaptopRiskRadioButtonOption").show();
            $("#MobileRiskRadioButtonOption").hide();
            $("#LaptopCAGRRadioButtonOption").show();
            $("#MobileCAGRRadioButtonOption").hide();
            $("#mobileleftpanel").hide();
            $(".laptopleftpanel").show();
            $(".Scanner_opt_mobile").hide();
            $(".Scanner_opt_laptop").show();
            $(".Data_opt_mobile").hide();
            $(".Data_opt_laptop").show();
            $("#HDIntroLaptopView").show();
            $("#HDIntroMobileView").hide();
            $("#DSIntroLaptopView").show();
            $("#DSIntroMobileView").hide();
            $("#LaptopFooter").show();
            $("#MobileFooter").hide();
        }

        if ($(window).width() > 835) {
            // $("#Data_Des").hide();
            $(".top-advertisement").show();
            $(".descriptionimage").show();
            $(".card-text").show();
        }
    });

    // Risk Cal Hide 
    $(".RiskCalculatorDiscription").hide();
    $("#Risk_Cal_Body").hide();
    $("#Risk_Cal_Des").hide();
    $("#Cal_Left_Panel").hide();
    $("#Calculator_options").hide();

    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    // $("#DeliveryScannerDiscription").hide();
    $("#DeliveryScannerDiscription").show();

    $("#FII_DII_Discription").hide();
    $("#CAGR_Cal_Des").hide();
    $('#SIP_Cal_Des').hide();
    $("#CAGR_Cal_Body").hide();
    $("#SIP_Cal_Body").hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    // $("#EquityForm").show();
    $("#EquityForm").hide();
    
    $("#FOForm").hide();
    $("#Data_Des").hide();
    // $("#Scanner_Left_Panel").hide();
    $("#Scanner_Left_Panel").show();

    $("#Data_Left_Panel").hide();
    // $("#Scanner_options").hide();
    $("#Scanner_options").show(1, function () {
        $('#Scanner_Left_Panel').css("display", "flex");
        $('#Scanner_options').css("display", "flex");
        // $('.Highest_Delivery_Menu').hide();
        $('.Highest_Delivery_Menu').show(1, function () {
            $('#highestdeliverynifty500').hide();
            $('#highestdeliveryfando').show();
            $("#HDniftytimestamp").hide();
            $("#HDfandotimestamp").show();
            if (callcount_for_HD_FandO > 0) { return }
            Highest_Delivery_FO_Chart()
        });
        $('.Delivery_Spike_Menu').hide();
        $('#Delivery_Scanner_Dropdown_2').css('color', '#888888');
        $("#symbol_delivery_spike").css('color', '#888888');
        $('#Delivery_Scanner_Dropdown_1').css('color', '#324ed4');
        $("#symbol_highest_delivery").css('color', '#324ed4');
        $("#Risk_Cal_Body").hide();
        $("#Risk_Cal_Des").hide();
        $("#CAGR_Cal_Body").hide();
        $("#CAGR_Cal_Des").hide();
    });

    $("#Data_options").hide();
    // $(".Highest_Delivery_Menu").hide();
    $(".Highest_Delivery_Menu").show(1, function () {
        $('#highestdeliverynifty500').hide();
        $('#highestdeliveryfando').show();
        $("#HDniftytimestamp").hide();
        $("#HDfandotimestamp").show();
        if (callcount_for_HD_FandO > 0) { return }
        Highest_Delivery_FO_Chart()
    });

    $(".Delivery_Spike_Menu").hide();
    $('.dropdown_hover').hide();
    $('.dropdown_hover_1').hide();

    // var x = $("#CAGRchart").offset();
    // console.log(x)
    var y = $("#CAGRchart").position();
    console.log(y)
    $('#TransparentCAGRchart').css(y);
    var z = $("#TransparentCAGRchart").position();
    console.log(z)
    var y1 = $("#ReverseCAGRchart").position();
    console.log(y1)
    $('#TransparentCAGRchart1').css(y1);
    var z1 = $("#TransparentCAGRchart1").position();
    console.log(z1)


    document.querySelector("#add").addEventListener("click", function () {
        chart.updateSeries(appendData(findCAGR()))
    })
    document.querySelector("#remove").addEventListener("click", function () {
        chart.updateSeries(removeData())
    })
    document.querySelector("#add1").addEventListener("click", function () {
        chart1.updateSeries(appendData1(findReverseCAGR()))
    })
    document.querySelector("#remove1").addEventListener("click", function () {
        chart1.updateSeries(removeData1())
    })
    document.querySelector("#Calsip").addEventListener("click", function () {
        chart_SIP.updateSeries(appendData2(findSIP()))
    })
    document.querySelector("#Clearsip").addEventListener("click", function () {
        chart_SIP.updateSeries(removeData2())
    })
    document.querySelector("#Calemi").addEventListener("click", function () {
        chart_EMI.updateSeries(appendData3(findEMI()))
    })
    document.querySelector("#Clearemi").addEventListener("click", function () {
        chart_EMI.updateSeries(removeData3())
    })


    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        document.querySelector("#add").addEventListener("click", function () {
            chart.updateSeries(appendData(findCAGR()))
            if (counter_for_firefox_CAGR > 2) { return }
            chart.updateSeries(appendData(findCAGR()))
            chart.updateSeries(appendData(findCAGR()))
        })
        counter_for_firefox_CAGR = counter_for_firefox_CAGR + 1;

        document.querySelector("#add1").addEventListener("click", function () {
            chart1.updateSeries(appendData1(findReverseCAGR()))
            if (counter_for_firefox_ReverseCAGR > 2) { return }
            chart1.updateSeries(appendData1(findReverseCAGR()))
            chart1.updateSeries(appendData1(findReverseCAGR()))
        })
        counter_for_firefox_ReverseCAGR = counter_for_firefox_ReverseCAGR + 1;
        $('#LaptopCAGRRadioButtonOption').click(function () {
            clearCAGR()
            clearReverseCAGR()
        })
        $('#MobileCAGRRadioButtonOption').click(function () {
            clearCAGR()
            clearReverseCAGR()
        })
    }

    var options_cagr = {
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        chart: {
            type: 'donut',
            height: '300px'
        },
        series: [],
        labels: [],
        dataLabels: {
            enabled: false
        },

        states: {

            hover: {
                filter: {
                    type: 'none',
                }
            },

        },
        legend: {
            show: true,
            position: 'bottom',
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: false,

                donut: {

                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'CAGR',
                            formatter: () => ans + '%'
                        }
                    }
                }
            }
        }

    }
    chart = new ApexCharts(document.querySelector("#CAGRchart"), options_cagr);
    chart.render();

    var option_reverse_cagr = {
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        chart: {
            type: 'donut',
            height: '300px',

        },
        series: [],
        labels: [],
        dataLabels: {
            enabled: false
        },

        states: {

            hover: {
                filter: {
                    type: 'none',
                }
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,

                        total: {
                            show: true,
                            label: '',
                        }
                    }
                }
            }
        }
    }
    chart1 = new ApexCharts(document.querySelector("#ReverseCAGRchart"), option_reverse_cagr);
    chart1.render();


    var option_sip = {
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        hover: { mode: null },
        chart: {
            type: 'donut',
            height: '250px',

        },
        series: [],
        labels: [],
        dataLabels: {
            enabled: false
        },

        states: {
            hover: {
                mode: null,
                filter: {
                    type: 'none',
                }
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: '',
                        }
                    }
                }
            }
        }
    }
    chart_SIP = new ApexCharts(document.querySelector("#SIPchart"), option_sip);
    chart_SIP.render();


    var option_emi = {
        tooltip: {
            enabled: false,
            onDatasetHover: {
                highlightDataSeries: false,
            },
        },
        hover: { mode: null },
        chart: {
            type: 'donut',
            height: '250px',

        },
        series: [],
        labels: [],
        dataLabels: {
            enabled: false
        },

        states: {
            hover: {
                mode: null,
                filter: {
                    type: 'none',
                }
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: '',
                        }
                    }
                }
            }
        }
    }
    chart_EMI = new ApexCharts(document.querySelector("#EMIchart"), option_emi);
    chart_EMI.render();


    jQuery(".dropdown_hover div").click(function (event) {
        event.preventDefault();
        var text = jQuery(this).text(); // 'this' refers to the h3 element that you clicked.. not the div with the class .results;
        $('#select_time_interval').text(text)
    });

    jQuery(".dropdown_hover_1 div").click(function (event) {
        event.preventDefault();
        var text_1 = jQuery(this).text(); // 'this' refers to the h3 element that you clicked.. not the div with the class .results;
        $('#select_symbol').text(text_1)
    });

    $('.Time_Interval').click(function () {
        $('.dropdown_hover').toggle();
    })

    $('.Symbol').click(function () {
        $('.dropdown_hover_1').toggle();
    })
});