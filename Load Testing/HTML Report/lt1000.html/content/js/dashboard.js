/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 98.65, "KoPercent": 1.35};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.5355833333333333, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.017, 500, 1500, "Authentication (Post)"], "isController": false}, {"data": [0.826, 500, 1500, "Fetch_Updated booking id info (Get)"], "isController": false}, {"data": [0.01, 500, 1500, "All Booking Ids (Get)"], "isController": false}, {"data": [0.8275, 500, 1500, "Get_Created booking ID info (Get)"], "isController": false}, {"data": [0.722, 500, 1500, "Create new booking id (Post)"], "isController": false}, {"data": [0.811, 500, 1500, "Update  booking id (PUT)"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 6000, 81, 1.35, 8374.581833333314, 0, 345173, 947.0, 19224.900000000012, 50609.44999999998, 106134.6799999993, 17.102592753061362, 130.4914994546767, 5.3257484967533575], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Authentication (Post)", 1000, 6, 0.6, 14365.882999999994, 1116, 329802, 5645.5, 27985.499999999996, 63610.299999999996, 137114.14, 2.8513017618193586, 0.7949395898259851, 0.8081881189106888], "isController": false}, {"data": ["Fetch_Updated booking id info (Get)", 1000, 15, 1.5, 857.6049999999993, 0, 54455, 391.0, 1321.2999999999997, 2046.8999999999985, 7540.760000000003, 2.8897057123702523, 1.2515078394103845, 0.6197346401304992], "isController": false}, {"data": ["All Booking Ids (Get)", 1000, 13, 1.3, 31898.601999999984, 94, 345173, 14809.5, 82483.0, 92802.94999999998, 317430.0600000007, 2.870882078518625, 125.58782431995981, 0.6031123277470753], "isController": false}, {"data": ["Get_Created booking ID info (Get)", 1000, 15, 1.5, 1227.7049999999997, 0, 315407, 399.5, 1380.4999999999995, 2129.8499999999985, 7221.700000000003, 2.8812880510103236, 1.243137919875701, 0.6179293641429464], "isController": false}, {"data": ["Create new booking id (Post)", 1000, 14, 1.4, 971.4370000000002, 0, 32492, 468.5, 1612.6999999999998, 2665.099999999995, 5596.580000000002, 2.877383192629295, 1.318206795012344, 1.3519289392454925], "isController": false}, {"data": ["Update  booking id (PUT)", 1000, 18, 1.8, 926.259000000002, 0, 61171, 399.0, 1368.5, 2010.249999999999, 6959.940000000006, 2.8856947454384376, 1.248643498024742, 1.37388941332383], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 58, 71.60493827160494, 0.9666666666666667], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 14, 17.28395061728395, 0.23333333333333334], "isController": false}, {"data": ["Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: No such host is known (restful-booker.herokuapp.com)", 2, 2.4691358024691357, 0.03333333333333333], "isController": false}, {"data": ["403/Forbidden", 3, 3.7037037037037037, 0.05], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: restful-booker.herokuapp.com:443 failed to respond", 3, 3.7037037037037037, 0.05], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, 1.2345679012345678, 0.016666666666666666], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 6000, 81, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 58, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 14, "403/Forbidden", 3, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: restful-booker.herokuapp.com:443 failed to respond", 3, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: No such host is known (restful-booker.herokuapp.com)", 2], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Authentication (Post)", 1000, 6, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 3, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: restful-booker.herokuapp.com:443 failed to respond", 3, "", "", "", "", "", ""], "isController": false}, {"data": ["Fetch_Updated booking id info (Get)", 1000, 15, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 15, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["All Booking Ids (Get)", 1000, 13, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 10, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 3, "", "", "", "", "", ""], "isController": false}, {"data": ["Get_Created booking ID info (Get)", 1000, 15, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 13, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 1, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: No such host is known (restful-booker.herokuapp.com)", 1, "", "", "", ""], "isController": false}, {"data": ["Create new booking id (Post)", 1000, 14, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 12, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: No such host is known (restful-booker.herokuapp.com)", 1, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, "", "", "", ""], "isController": false}, {"data": ["Update  booking id (PUT)", 1000, 18, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: restful-booker.herokuapp.com", 15, "403/Forbidden", 3, "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
