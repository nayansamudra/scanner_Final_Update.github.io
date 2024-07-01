function showhighestdelivery() {
    $('#HDLaptop').prop("checked", true);
    $('#HDMobile').prop("checked", true);
    // $("#HDIntroLaptopView").load(location.href + " #HDIntroLaptopView");
    // $("#HDIntroMobileView").load(location.href + " #HDIntroMobileView");
    $('.Highest_Delivery_Menu').show(1, function () {
        $('#highestdeliverynifty500').hide();
        $('#highestdeliveryfando').show();
        // $("#HDniftytimestamp").hide();
        $("#HDfandotimestamp").show();
    });
    $('.Delivery_Spike_Menu').hide();
    $('#Delivery_Scanner_Dropdown_2').css('color', '#888888');
    $("#symbol_delivery_spike").css('color', '#888888');
    $('#Delivery_Scanner_Dropdown_1').css('color', '#324ed4');
    $("#symbol_highest_delivery").css('color', '#324ed4');
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();    
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    // $("#HDniftytimestamp").hide();
    $("#HDfandotimestamp").show();
}

function showhighestdeliverynifty() {
    // $("#HDniftytimestamp").show();
    $("#HDfandotimestamp").hide();
    $('#highestdeliverynifty500').show();
    $('#highestdeliveryfando').hide();
    if (callcount_for_HD_Nifty > 0) { return }
    Highest_Delivery_Nifty_Chart()
}

function showhighestdeliveryfando() {
    // $("#HDniftytimestamp").hide();
    $("#HDfandotimestamp").show();
    $('#highestdeliverynifty500').hide();
    $('#highestdeliveryfando').show();
}

function showdeliveryspikenifty() {
    $('#deliveryspikenifty500').show();
    $('#deliveryspikefando').hide();
    $('#DeliverySpikeTimestamp').show();
    if (callcount_for_DS_Nifty > 0) { return }
    Delivery_Spike_Nifty_Chart()
}

function showdeliveryspikefando() {
    $('#deliveryspikenifty500').hide();
    $('#deliveryspikefando').show();
    $('#DeliverySpikeTimestamp').show();
}

function showdeliveryspike() {
    $('#DSLaptop').prop("checked", true);
    $('#DSMobile').prop("checked", true);
    $('.Highest_Delivery_Menu').hide();
    $('.Delivery_Spike_Menu').show(1, function () {
        $('#deliveryspikenifty500').hide();
        $('#deliveryspikefando').show();
        $('#DeliverySpikeTimestamp').show();
    });
    $('#Delivery_Scanner_Dropdown_2').css('color', '#324ed4');
    $("#symbol_delivery_spike").css('color', '#324ed4');
    $('#Delivery_Scanner_Dropdown_1').css('color', '#888888');
    $("#symbol_highest_delivery").css('color', '#888888');
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").show();
    if (callcount_for_DS_FandO > 0) { return }
    Delivery_Spike_FO_Chart()
}

function showscanner() {
    $('#HDLaptop').prop("checked", true);
    $('#HDMobile').prop("checked", true);
    $("#Scanner_Left_Panel").show();
    $("#Data_Des").hide();
    $("#SIP_Cal_Body").hide();
    $('#SIP_Cal_Des').hide();
    $('#PIVOT_Cal_Des').hide();
    $("#PIVOT_Cal_Body").hide();
    $("#PIVOT_Cal_Body_1").hide();
    $('#EMI_Cal_Des').hide();
    $("#EMI_Cal_Body").hide();
    $('#Income_Tax_Cal_Des').hide();
    $("#Income_Tax_Cal_Body").hide();
    $("#Data_options").hide();
    $("#Scanner_options").show(1, function () {
        $('#Scanner_Left_Panel').css("display", "flex");
        $('#Scanner_options').css("display", "flex");
        // $('.Highest_Delivery_Menu').hide();
        $('.Highest_Delivery_Menu').show(1, function () {
            $('#highestdeliverynifty500').hide();
            $('#highestdeliveryfando').show();
            // $("#HDniftytimestamp").hide();
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
    $("#Cal_Left_Panel").hide();
    $("#Data_Left_Panel").hide();
    $("#Calculator_options").hide();
    $(".RiskCalculatorDiscription").hide();
    $(".CAGRCalculatorDiscription").hide();
    $(".ReverseCAGRCalculatorDiscription").hide();    
    $(".SIPCalculatorDiscription").hide();
    $(".PivotPointCalculatorDiscription").hide();
    $(".EMICalculatorDiscription").hide();
    $(".IncomeTaxCalculatorDiscription").hide();
    $("#FII_DII_Discription").hide();
    $("#DeliveryScannerDiscription").show();
}

function showdropdown() {
    $("#Delivery_Scanner_Dropdown_Item").show();
    $(".Highest_Delivery_Menu").show();
}

function Highest_Delivery_Nifty_Chart() {
    var table = document.getElementById('HDdataniftyonly')
    $.ajax({
        method: 'GET',
        url: 'https://nayansamudra.github.io/scanner_Final_Update.github.io/API/fetch_hd_data_n500.txt',
        success: function (response) {
            hddatanifty = JSON.parse(response)
            response = JSON.parse(response)
            // $("#HDniftytimestamp").text(moment(hddatanifty[0][4] * 1000).format('ddd MMM DD, YYYY') + " (IST) ");
            hd_data_n500 = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                hd_data_n500.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${response[i][2]}</td>
                <td>${hd_data_n500[i]}</td>
                <td>${response[i][3]}<progress max=100 value=${response[i][3]}></td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#highestdeliverynifty500').DataTable({
                "columnDefs": [
                    { targets: [0, 1, 2], className: 'dt-body-left' },
                    { targets: [3], className: 'dt-body-left' },
                ],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_HD_Nifty = callcount_for_HD_Nifty + 1;
}

function Highest_Delivery_FO_Chart() {
    var table = document.getElementById('HDdatafandoonly')
    $.ajax({
        method: 'GET',
        url: 'https://nayansamudra.github.io/scanner_Final_Update.github.io/API/fetch_hd_data_fno.txt',
        success: function (response) {
            hddatafando = JSON.parse(response)
            response = JSON.parse(response)
            $("#HDfandotimestamp").text(moment(hddatafando[0][4] * 1000).format('ddd MMM DD, YYYY') + " (IST) ");
            hd_data_fno = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                hd_data_fno.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${response[i][2]}</td>
                <td>${hd_data_fno[i]}</td>
                <td>${response[i][3]}<progress max=100 value=${response[i][3]}></td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#highestdeliveryfando').DataTable({
                "columnDefs": [
                    { targets: [0, 1, 2], className: 'dt-body-left' },
                    { targets: [3], className: 'dt-body-left' },],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_HD_FandO = callcount_for_HD_FandO + 1;
}

function Delivery_Spike_Nifty_Chart() {
    var table = document.getElementById('DSdataniftyonly')
    $.ajax({
        method: 'GET',
        url: 'https://nayansamudra.github.io/scanner_Final_Update.github.io/API/fetch_dsp_data_n500.txt',
        success: function (response) {
            response = JSON.parse(response)
            dsp_data_n500 = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                dsp_data_n500.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${dsp_data_n500[i]}</td>
                <td>${response[i][2]}<progress max=100 value=${response[i][2]}> </td>
                <td class=DSNIFTY>${response[i][3]}</td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#deliveryspikenifty500').DataTable({
                "columnDefs": [
                    { targets: [0, 1], className: 'dt-body-left' },
                    { targets: [2, 3], className: 'dt-body-left' },],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_DS_Nifty = callcount_for_DS_Nifty + 1;
}

function Delivery_Spike_FO_Chart() {
    var table = document.getElementById('DSdatafandoonly')
    $.ajax({
        method: 'GET',
        url: 'https://nayansamudra.github.io/scanner_Final_Update.github.io/API/fetch_dsp_data_fno.txt',
        success: function (response) {
            response = JSON.parse(response)
            $("#DeliverySpikeTimestamp").text(moment(response[0][4] * 1000).format('ddd MMM DD, YYYY') + " (IST) ");
            dsp_data_fno = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                dsp_data_fno.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${dsp_data_fno[i]}</td>
                <td>${response[i][2]}<progress max=100 value=${response[i][2]}></td>
                <td class=DSFO>${response[i][3]}</td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#deliveryspikefando').DataTable({
                "columnDefs": [
                    { targets: [0, 1], className: 'dt-body-left' },
                    { targets: [2, 3, 4], className: 'dt-body-left' },],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_DS_FandO = callcount_for_DS_FandO + 1;
}

$(document).ready(function () {
    callcount_for_HD_FandO = 0;
    callcount_for_HD_Nifty = 0;
    callcount_for_DS_FandO = 0;
    callcount_for_DS_Nifty = 0;
})
