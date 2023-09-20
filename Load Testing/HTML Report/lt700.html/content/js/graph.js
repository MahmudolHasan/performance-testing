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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1151.0, "minX": 0.0, "maxY": 17080.0, "series": [{"data": [[0.0, 1151.0], [0.1, 1151.0], [0.2, 1165.0], [0.3, 1172.0], [0.4, 1172.0], [0.5, 1174.0], [0.6, 1176.0], [0.7, 1176.0], [0.8, 1181.0], [0.9, 1181.0], [1.0, 1181.0], [1.1, 1181.0], [1.2, 1182.0], [1.3, 1182.0], [1.4, 1182.0], [1.5, 1183.0], [1.6, 1185.0], [1.7, 1185.0], [1.8, 1187.0], [1.9, 1187.0], [2.0, 1187.0], [2.1, 1187.0], [2.2, 1188.0], [2.3, 1188.0], [2.4, 1188.0], [2.5, 1188.0], [2.6, 1189.0], [2.7, 1189.0], [2.8, 1189.0], [2.9, 1189.0], [3.0, 1190.0], [3.1, 1190.0], [3.2, 1191.0], [3.3, 1193.0], [3.4, 1193.0], [3.5, 1193.0], [3.6, 1194.0], [3.7, 1194.0], [3.8, 1196.0], [3.9, 1197.0], [4.0, 1197.0], [4.1, 1197.0], [4.2, 1198.0], [4.3, 1198.0], [4.4, 1198.0], [4.5, 1199.0], [4.6, 1200.0], [4.7, 1200.0], [4.8, 1200.0], [4.9, 1201.0], [5.0, 1202.0], [5.1, 1202.0], [5.2, 1202.0], [5.3, 1202.0], [5.4, 1202.0], [5.5, 1204.0], [5.6, 1204.0], [5.7, 1204.0], [5.8, 1204.0], [5.9, 1205.0], [6.0, 1205.0], [6.1, 1205.0], [6.2, 1205.0], [6.3, 1205.0], [6.4, 1205.0], [6.5, 1206.0], [6.6, 1206.0], [6.7, 1206.0], [6.8, 1206.0], [6.9, 1207.0], [7.0, 1207.0], [7.1, 1207.0], [7.2, 1208.0], [7.3, 1208.0], [7.4, 1208.0], [7.5, 1208.0], [7.6, 1209.0], [7.7, 1209.0], [7.8, 1209.0], [7.9, 1211.0], [8.0, 1211.0], [8.1, 1211.0], [8.2, 1212.0], [8.3, 1213.0], [8.4, 1213.0], [8.5, 1214.0], [8.6, 1215.0], [8.7, 1215.0], [8.8, 1216.0], [8.9, 1218.0], [9.0, 1218.0], [9.1, 1218.0], [9.2, 1218.0], [9.3, 1219.0], [9.4, 1219.0], [9.5, 1221.0], [9.6, 1221.0], [9.7, 1221.0], [9.8, 1222.0], [9.9, 1222.0], [10.0, 1223.0], [10.1, 1223.0], [10.2, 1223.0], [10.3, 1223.0], [10.4, 1223.0], [10.5, 1223.0], [10.6, 1223.0], [10.7, 1223.0], [10.8, 1223.0], [10.9, 1224.0], [11.0, 1225.0], [11.1, 1225.0], [11.2, 1226.0], [11.3, 1227.0], [11.4, 1227.0], [11.5, 1227.0], [11.6, 1227.0], [11.7, 1227.0], [11.8, 1227.0], [11.9, 1228.0], [12.0, 1228.0], [12.1, 1228.0], [12.2, 1228.0], [12.3, 1229.0], [12.4, 1229.0], [12.5, 1230.0], [12.6, 1230.0], [12.7, 1230.0], [12.8, 1230.0], [12.9, 1230.0], [13.0, 1231.0], [13.1, 1231.0], [13.2, 1232.0], [13.3, 1232.0], [13.4, 1232.0], [13.5, 1233.0], [13.6, 1233.0], [13.7, 1233.0], [13.8, 1234.0], [13.9, 1234.0], [14.0, 1234.0], [14.1, 1234.0], [14.2, 1236.0], [14.3, 1236.0], [14.4, 1236.0], [14.5, 1236.0], [14.6, 1237.0], [14.7, 1237.0], [14.8, 1237.0], [14.9, 1237.0], [15.0, 1237.0], [15.1, 1237.0], [15.2, 1237.0], [15.3, 1237.0], [15.4, 1237.0], [15.5, 1237.0], [15.6, 1238.0], [15.7, 1238.0], [15.8, 1238.0], [15.9, 1239.0], [16.0, 1240.0], [16.1, 1240.0], [16.2, 1240.0], [16.3, 1240.0], [16.4, 1240.0], [16.5, 1240.0], [16.6, 1241.0], [16.7, 1241.0], [16.8, 1241.0], [16.9, 1242.0], [17.0, 1243.0], [17.1, 1243.0], [17.2, 1243.0], [17.3, 1243.0], [17.4, 1243.0], [17.5, 1244.0], [17.6, 1245.0], [17.7, 1245.0], [17.8, 1246.0], [17.9, 1246.0], [18.0, 1248.0], [18.1, 1248.0], [18.2, 1250.0], [18.3, 1250.0], [18.4, 1250.0], [18.5, 1250.0], [18.6, 1250.0], [18.7, 1250.0], [18.8, 1250.0], [18.9, 1251.0], [19.0, 1251.0], [19.1, 1251.0], [19.2, 1252.0], [19.3, 1252.0], [19.4, 1252.0], [19.5, 1253.0], [19.6, 1253.0], [19.7, 1253.0], [19.8, 1254.0], [19.9, 1254.0], [20.0, 1254.0], [20.1, 1254.0], [20.2, 1255.0], [20.3, 1255.0], [20.4, 1255.0], [20.5, 1256.0], [20.6, 1256.0], [20.7, 1256.0], [20.8, 1257.0], [20.9, 1257.0], [21.0, 1258.0], [21.1, 1258.0], [21.2, 1258.0], [21.3, 1258.0], [21.4, 1258.0], [21.5, 1258.0], [21.6, 1258.0], [21.7, 1258.0], [21.8, 1260.0], [21.9, 1260.0], [22.0, 1261.0], [22.1, 1261.0], [22.2, 1261.0], [22.3, 1262.0], [22.4, 1262.0], [22.5, 1263.0], [22.6, 1264.0], [22.7, 1264.0], [22.8, 1264.0], [22.9, 1264.0], [23.0, 1264.0], [23.1, 1264.0], [23.2, 1266.0], [23.3, 1266.0], [23.4, 1266.0], [23.5, 1266.0], [23.6, 1267.0], [23.7, 1267.0], [23.8, 1267.0], [23.9, 1268.0], [24.0, 1269.0], [24.1, 1269.0], [24.2, 1270.0], [24.3, 1270.0], [24.4, 1270.0], [24.5, 1270.0], [24.6, 1270.0], [24.7, 1270.0], [24.8, 1270.0], [24.9, 1271.0], [25.0, 1272.0], [25.1, 1272.0], [25.2, 1272.0], [25.3, 1274.0], [25.4, 1274.0], [25.5, 1274.0], [25.6, 1275.0], [25.7, 1275.0], [25.8, 1275.0], [25.9, 1276.0], [26.0, 1276.0], [26.1, 1276.0], [26.2, 1277.0], [26.3, 1277.0], [26.4, 1277.0], [26.5, 1278.0], [26.6, 1278.0], [26.7, 1278.0], [26.8, 1279.0], [26.9, 1279.0], [27.0, 1279.0], [27.1, 1279.0], [27.2, 1280.0], [27.3, 1280.0], [27.4, 1280.0], [27.5, 1280.0], [27.6, 1281.0], [27.7, 1281.0], [27.8, 1281.0], [27.9, 1282.0], [28.0, 1283.0], [28.1, 1283.0], [28.2, 1283.0], [28.3, 1283.0], [28.4, 1283.0], [28.5, 1284.0], [28.6, 1285.0], [28.7, 1285.0], [28.8, 1285.0], [28.9, 1285.0], [29.0, 1285.0], [29.1, 1285.0], [29.2, 1286.0], [29.3, 1286.0], [29.4, 1286.0], [29.5, 1286.0], [29.6, 1287.0], [29.7, 1287.0], [29.8, 1287.0], [29.9, 1287.0], [30.0, 1287.0], [30.1, 1287.0], [30.2, 1287.0], [30.3, 1288.0], [30.4, 1288.0], [30.5, 1288.0], [30.6, 1288.0], [30.7, 1288.0], [30.8, 1290.0], [30.9, 1290.0], [31.0, 1291.0], [31.1, 1291.0], [31.2, 1292.0], [31.3, 1293.0], [31.4, 1293.0], [31.5, 1294.0], [31.6, 1294.0], [31.7, 1294.0], [31.8, 1294.0], [31.9, 1295.0], [32.0, 1296.0], [32.1, 1296.0], [32.2, 1297.0], [32.3, 1297.0], [32.4, 1297.0], [32.5, 1298.0], [32.6, 1299.0], [32.7, 1299.0], [32.8, 1299.0], [32.9, 1300.0], [33.0, 1300.0], [33.1, 1300.0], [33.2, 1301.0], [33.3, 1301.0], [33.4, 1301.0], [33.5, 1302.0], [33.6, 1302.0], [33.7, 1302.0], [33.8, 1303.0], [33.9, 1304.0], [34.0, 1304.0], [34.1, 1304.0], [34.2, 1305.0], [34.3, 1305.0], [34.4, 1305.0], [34.5, 1305.0], [34.6, 1306.0], [34.7, 1306.0], [34.8, 1306.0], [34.9, 1306.0], [35.0, 1307.0], [35.1, 1307.0], [35.2, 1307.0], [35.3, 1308.0], [35.4, 1308.0], [35.5, 1310.0], [35.6, 1310.0], [35.7, 1310.0], [35.8, 1312.0], [35.9, 1312.0], [36.0, 1313.0], [36.1, 1313.0], [36.2, 1313.0], [36.3, 1314.0], [36.4, 1314.0], [36.5, 1315.0], [36.6, 1316.0], [36.7, 1316.0], [36.8, 1317.0], [36.9, 1317.0], [37.0, 1318.0], [37.1, 1318.0], [37.2, 1318.0], [37.3, 1318.0], [37.4, 1318.0], [37.5, 1319.0], [37.6, 1319.0], [37.7, 1319.0], [37.8, 1320.0], [37.9, 1320.0], [38.0, 1321.0], [38.1, 1321.0], [38.2, 1321.0], [38.3, 1321.0], [38.4, 1321.0], [38.5, 1321.0], [38.6, 1321.0], [38.7, 1321.0], [38.8, 1322.0], [38.9, 1322.0], [39.0, 1323.0], [39.1, 1323.0], [39.2, 1323.0], [39.3, 1324.0], [39.4, 1324.0], [39.5, 1324.0], [39.6, 1325.0], [39.7, 1325.0], [39.8, 1326.0], [39.9, 1328.0], [40.0, 1328.0], [40.1, 1328.0], [40.2, 1328.0], [40.3, 1328.0], [40.4, 1328.0], [40.5, 1328.0], [40.6, 1329.0], [40.7, 1329.0], [40.8, 1330.0], [40.9, 1330.0], [41.0, 1331.0], [41.1, 1331.0], [41.2, 1331.0], [41.3, 1331.0], [41.4, 1331.0], [41.5, 1332.0], [41.6, 1333.0], [41.7, 1333.0], [41.8, 1333.0], [41.9, 1334.0], [42.0, 1334.0], [42.1, 1334.0], [42.2, 1334.0], [42.3, 1336.0], [42.4, 1336.0], [42.5, 1339.0], [42.6, 1339.0], [42.7, 1339.0], [42.8, 1339.0], [42.9, 1340.0], [43.0, 1340.0], [43.1, 1340.0], [43.2, 1341.0], [43.3, 1342.0], [43.4, 1342.0], [43.5, 1342.0], [43.6, 1342.0], [43.7, 1342.0], [43.8, 1342.0], [43.9, 1343.0], [44.0, 1343.0], [44.1, 1343.0], [44.2, 1343.0], [44.3, 1343.0], [44.4, 1343.0], [44.5, 1344.0], [44.6, 1344.0], [44.7, 1344.0], [44.8, 1345.0], [44.9, 1345.0], [45.0, 1345.0], [45.1, 1345.0], [45.2, 1346.0], [45.3, 1346.0], [45.4, 1346.0], [45.5, 1346.0], [45.6, 1346.0], [45.7, 1346.0], [45.8, 1346.0], [45.9, 1347.0], [46.0, 1348.0], [46.1, 1348.0], [46.2, 1350.0], [46.3, 1351.0], [46.4, 1351.0], [46.5, 1352.0], [46.6, 1352.0], [46.7, 1352.0], [46.8, 1352.0], [46.9, 1354.0], [47.0, 1354.0], [47.1, 1354.0], [47.2, 1355.0], [47.3, 1355.0], [47.4, 1355.0], [47.5, 1355.0], [47.6, 1357.0], [47.7, 1357.0], [47.8, 1357.0], [47.9, 1357.0], [48.0, 1357.0], [48.1, 1358.0], [48.2, 1360.0], [48.3, 1360.0], [48.4, 1360.0], [48.5, 1360.0], [48.6, 1360.0], [48.7, 1360.0], [48.8, 1361.0], [48.9, 1361.0], [49.0, 1361.0], [49.1, 1361.0], [49.2, 1362.0], [49.3, 1362.0], [49.4, 1362.0], [49.5, 1362.0], [49.6, 1363.0], [49.7, 1363.0], [49.8, 1364.0], [49.9, 1364.0], [50.0, 1364.0], [50.1, 1364.0], [50.2, 1364.0], [50.3, 1365.0], [50.4, 1365.0], [50.5, 1365.0], [50.6, 1366.0], [50.7, 1366.0], [50.8, 1369.0], [50.9, 1370.0], [51.0, 1370.0], [51.1, 1372.0], [51.2, 1372.0], [51.3, 1372.0], [51.4, 1372.0], [51.5, 1372.0], [51.6, 1373.0], [51.7, 1373.0], [51.8, 1377.0], [51.9, 1378.0], [52.0, 1378.0], [52.1, 1379.0], [52.2, 1379.0], [52.3, 1380.0], [52.4, 1380.0], [52.5, 1381.0], [52.6, 1382.0], [52.7, 1382.0], [52.8, 1383.0], [52.9, 1384.0], [53.0, 1384.0], [53.1, 1384.0], [53.2, 1387.0], [53.3, 1389.0], [53.4, 1389.0], [53.5, 1390.0], [53.6, 1390.0], [53.7, 1390.0], [53.8, 1390.0], [53.9, 1390.0], [54.0, 1390.0], [54.1, 1390.0], [54.2, 1391.0], [54.3, 1391.0], [54.4, 1391.0], [54.5, 1393.0], [54.6, 1394.0], [54.7, 1394.0], [54.8, 1395.0], [54.9, 1395.0], [55.0, 1395.0], [55.1, 1396.0], [55.2, 1396.0], [55.3, 1397.0], [55.4, 1397.0], [55.5, 1397.0], [55.6, 1397.0], [55.7, 1397.0], [55.8, 1398.0], [55.9, 1399.0], [56.0, 1399.0], [56.1, 1399.0], [56.2, 1400.0], [56.3, 1400.0], [56.4, 1400.0], [56.5, 1400.0], [56.6, 1401.0], [56.7, 1401.0], [56.8, 1401.0], [56.9, 1401.0], [57.0, 1401.0], [57.1, 1402.0], [57.2, 1402.0], [57.3, 1404.0], [57.4, 1404.0], [57.5, 1404.0], [57.6, 1405.0], [57.7, 1405.0], [57.8, 1406.0], [57.9, 1406.0], [58.0, 1406.0], [58.1, 1407.0], [58.2, 1409.0], [58.3, 1410.0], [58.4, 1410.0], [58.5, 1411.0], [58.6, 1412.0], [58.7, 1412.0], [58.8, 1412.0], [58.9, 1412.0], [59.0, 1412.0], [59.1, 1413.0], [59.2, 1414.0], [59.3, 1415.0], [59.4, 1415.0], [59.5, 1417.0], [59.6, 1418.0], [59.7, 1418.0], [59.8, 1418.0], [59.9, 1418.0], [60.0, 1418.0], [60.1, 1418.0], [60.2, 1419.0], [60.3, 1420.0], [60.4, 1420.0], [60.5, 1421.0], [60.6, 1421.0], [60.7, 1421.0], [60.8, 1422.0], [60.9, 1422.0], [61.0, 1422.0], [61.1, 1424.0], [61.2, 1426.0], [61.3, 1428.0], [61.4, 1428.0], [61.5, 1430.0], [61.6, 1431.0], [61.7, 1431.0], [61.8, 1431.0], [61.9, 1433.0], [62.0, 1433.0], [62.1, 1433.0], [62.2, 1433.0], [62.3, 1433.0], [62.4, 1433.0], [62.5, 1435.0], [62.6, 1436.0], [62.7, 1436.0], [62.8, 1439.0], [62.9, 1440.0], [63.0, 1440.0], [63.1, 1440.0], [63.2, 1441.0], [63.3, 1442.0], [63.4, 1442.0], [63.5, 1447.0], [63.6, 1450.0], [63.7, 1450.0], [63.8, 1452.0], [63.9, 1452.0], [64.0, 1452.0], [64.1, 1452.0], [64.2, 1452.0], [64.3, 1452.0], [64.4, 1452.0], [64.5, 1454.0], [64.6, 1459.0], [64.7, 1459.0], [64.8, 1459.0], [64.9, 1459.0], [65.0, 1459.0], [65.1, 1461.0], [65.2, 1462.0], [65.3, 1462.0], [65.4, 1462.0], [65.5, 1463.0], [65.6, 1465.0], [65.7, 1465.0], [65.8, 1467.0], [65.9, 1468.0], [66.0, 1468.0], [66.1, 1471.0], [66.2, 1472.0], [66.3, 1474.0], [66.4, 1474.0], [66.5, 1477.0], [66.6, 1480.0], [66.7, 1480.0], [66.8, 1483.0], [66.9, 1487.0], [67.0, 1487.0], [67.1, 1496.0], [67.2, 1497.0], [67.3, 1497.0], [67.4, 1497.0], [67.5, 1512.0], [67.6, 1516.0], [67.7, 1516.0], [67.8, 1518.0], [67.9, 1522.0], [68.0, 1522.0], [68.1, 1543.0], [68.2, 1545.0], [68.3, 1545.0], [68.4, 1545.0], [68.5, 1546.0], [68.6, 1547.0], [68.7, 1547.0], [68.8, 1550.0], [68.9, 1551.0], [69.0, 1551.0], [69.1, 1553.0], [69.2, 1553.0], [69.3, 1557.0], [69.4, 1557.0], [69.5, 1560.0], [69.6, 1563.0], [69.7, 1563.0], [69.8, 1563.0], [69.9, 1564.0], [70.0, 1564.0], [70.1, 1570.0], [70.2, 1572.0], [70.3, 1579.0], [70.4, 1579.0], [70.5, 1582.0], [70.6, 1582.0], [70.7, 1582.0], [70.8, 1586.0], [70.9, 1598.0], [71.0, 1598.0], [71.1, 1598.0], [71.2, 1603.0], [71.3, 1613.0], [71.4, 1613.0], [71.5, 1616.0], [71.6, 1632.0], [71.7, 1632.0], [71.8, 1635.0], [71.9, 1635.0], [72.0, 1635.0], [72.1, 1640.0], [72.2, 1646.0], [72.3, 1658.0], [72.4, 1658.0], [72.5, 1662.0], [72.6, 1671.0], [72.7, 1671.0], [72.8, 1759.0], [72.9, 1770.0], [73.0, 1796.0], [73.1, 1796.0], [73.2, 1813.0], [73.3, 1897.0], [73.4, 1897.0], [73.5, 1939.0], [73.6, 1946.0], [73.7, 1946.0], [73.8, 1954.0], [73.9, 1971.0], [74.0, 2019.0], [74.1, 2019.0], [74.2, 2035.0], [74.3, 2046.0], [74.4, 2046.0], [74.5, 2051.0], [74.6, 2055.0], [74.7, 2055.0], [74.8, 2063.0], [74.9, 2066.0], [75.0, 2070.0], [75.1, 2070.0], [75.2, 2081.0], [75.3, 2083.0], [75.4, 2083.0], [75.5, 2117.0], [75.6, 2123.0], [75.7, 2123.0], [75.8, 2133.0], [75.9, 2133.0], [76.0, 2139.0], [76.1, 2139.0], [76.2, 2141.0], [76.3, 2144.0], [76.4, 2144.0], [76.5, 2151.0], [76.6, 2188.0], [76.7, 2188.0], [76.8, 2190.0], [76.9, 2192.0], [77.0, 2206.0], [77.1, 2206.0], [77.2, 2208.0], [77.3, 2213.0], [77.4, 2213.0], [77.5, 2213.0], [77.6, 2215.0], [77.7, 2215.0], [77.8, 2217.0], [77.9, 2222.0], [78.0, 2229.0], [78.1, 2229.0], [78.2, 2243.0], [78.3, 2243.0], [78.4, 2243.0], [78.5, 2243.0], [78.6, 2249.0], [78.7, 2249.0], [78.8, 2251.0], [78.9, 2251.0], [79.0, 2252.0], [79.1, 2252.0], [79.2, 2260.0], [79.3, 2263.0], [79.4, 2263.0], [79.5, 2270.0], [79.6, 2273.0], [79.7, 2273.0], [79.8, 2287.0], [79.9, 2288.0], [80.0, 2297.0], [80.1, 2297.0], [80.2, 2299.0], [80.3, 2300.0], [80.4, 2300.0], [80.5, 2301.0], [80.6, 2305.0], [80.7, 2305.0], [80.8, 2317.0], [80.9, 2318.0], [81.0, 2321.0], [81.1, 2321.0], [81.2, 2326.0], [81.3, 2326.0], [81.4, 2326.0], [81.5, 2329.0], [81.6, 2331.0], [81.7, 2331.0], [81.8, 2334.0], [81.9, 2355.0], [82.0, 2358.0], [82.1, 2358.0], [82.2, 2360.0], [82.3, 2371.0], [82.4, 2371.0], [82.5, 2376.0], [82.6, 2395.0], [82.7, 2395.0], [82.8, 2403.0], [82.9, 2426.0], [83.0, 2431.0], [83.1, 2431.0], [83.2, 2431.0], [83.3, 2433.0], [83.4, 2433.0], [83.5, 2435.0], [83.6, 2438.0], [83.7, 2438.0], [83.8, 2450.0], [83.9, 2461.0], [84.0, 2469.0], [84.1, 2469.0], [84.2, 2470.0], [84.3, 2478.0], [84.4, 2478.0], [84.5, 2479.0], [84.6, 2497.0], [84.7, 2497.0], [84.8, 2500.0], [84.9, 2502.0], [85.0, 2511.0], [85.1, 2511.0], [85.2, 2513.0], [85.3, 2529.0], [85.4, 2529.0], [85.5, 2535.0], [85.6, 2582.0], [85.7, 2582.0], [85.8, 2689.0], [85.9, 2694.0], [86.0, 2705.0], [86.1, 2705.0], [86.2, 2719.0], [86.3, 2757.0], [86.4, 2757.0], [86.5, 2807.0], [86.6, 2808.0], [86.7, 2808.0], [86.8, 2814.0], [86.9, 2819.0], [87.0, 2891.0], [87.1, 2891.0], [87.2, 2931.0], [87.3, 2946.0], [87.4, 2946.0], [87.5, 2979.0], [87.6, 2987.0], [87.7, 2987.0], [87.8, 2996.0], [87.9, 3010.0], [88.0, 3020.0], [88.1, 3020.0], [88.2, 3023.0], [88.3, 3031.0], [88.4, 3031.0], [88.5, 3040.0], [88.6, 3042.0], [88.7, 3042.0], [88.8, 3057.0], [88.9, 3088.0], [89.0, 3105.0], [89.1, 3105.0], [89.2, 3108.0], [89.3, 3112.0], [89.4, 3112.0], [89.5, 3158.0], [89.6, 3166.0], [89.7, 3166.0], [89.8, 3172.0], [89.9, 3173.0], [90.0, 3182.0], [90.1, 3182.0], [90.2, 3186.0], [90.3, 3196.0], [90.4, 3196.0], [90.5, 3223.0], [90.6, 3239.0], [90.7, 3239.0], [90.8, 3240.0], [90.9, 3253.0], [91.0, 3254.0], [91.1, 3254.0], [91.2, 3254.0], [91.3, 3273.0], [91.4, 3273.0], [91.5, 3273.0], [91.6, 3298.0], [91.7, 3298.0], [91.8, 3303.0], [91.9, 3325.0], [92.0, 3351.0], [92.1, 3351.0], [92.2, 3385.0], [92.3, 3408.0], [92.4, 3408.0], [92.5, 3431.0], [92.6, 3507.0], [92.7, 3507.0], [92.8, 3555.0], [92.9, 3686.0], [93.0, 3721.0], [93.1, 3721.0], [93.2, 3731.0], [93.3, 3799.0], [93.4, 3799.0], [93.5, 3854.0], [93.6, 3856.0], [93.7, 3856.0], [93.8, 3877.0], [93.9, 3994.0], [94.0, 4039.0], [94.1, 4039.0], [94.2, 4060.0], [94.3, 4100.0], [94.4, 4100.0], [94.5, 4180.0], [94.6, 4224.0], [94.7, 4224.0], [94.8, 4241.0], [94.9, 4257.0], [95.0, 4272.0], [95.1, 4272.0], [95.2, 4299.0], [95.3, 4336.0], [95.4, 4336.0], [95.5, 4355.0], [95.6, 4390.0], [95.7, 4390.0], [95.8, 4400.0], [95.9, 4408.0], [96.0, 4423.0], [96.1, 4423.0], [96.2, 4448.0], [96.3, 4454.0], [96.4, 4454.0], [96.5, 4550.0], [96.6, 4600.0], [96.7, 4600.0], [96.8, 4803.0], [96.9, 4811.0], [97.0, 5044.0], [97.1, 5044.0], [97.2, 5064.0], [97.3, 5175.0], [97.4, 5175.0], [97.5, 5290.0], [97.6, 5366.0], [97.7, 5366.0], [97.8, 5382.0], [97.9, 5387.0], [98.0, 5450.0], [98.1, 5450.0], [98.2, 5528.0], [98.3, 6143.0], [98.4, 6143.0], [98.5, 6344.0], [98.6, 7080.0], [98.7, 7080.0], [98.8, 7505.0], [98.9, 8371.0], [99.0, 9848.0], [99.1, 9848.0], [99.2, 10239.0], [99.3, 10404.0], [99.4, 10404.0], [99.5, 11442.0], [99.6, 13497.0], [99.7, 13497.0], [99.8, 15851.0], [99.9, 17080.0]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 198.0, "series": [{"data": [[1100.0, 32.0], [1200.0, 198.0], [1300.0, 163.0], [1400.0, 79.0], [1500.0, 26.0], [1600.0, 11.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 4.0], [2000.0, 10.0], [2100.0, 11.0], [2300.0, 17.0], [2200.0, 23.0], [2400.0, 14.0], [2500.0, 7.0], [2600.0, 2.0], [2800.0, 5.0], [2700.0, 3.0], [2900.0, 5.0], [3000.0, 8.0], [3100.0, 10.0], [3200.0, 9.0], [3300.0, 4.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 1.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 5.0], [4100.0, 2.0], [4300.0, 3.0], [4400.0, 5.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 2.0], [5000.0, 2.0], [5100.0, 1.0], [5300.0, 3.0], [5200.0, 1.0], [5500.0, 1.0], [5400.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [7000.0, 1.0], [7500.0, 1.0], [8300.0, 1.0], [9800.0, 1.0], [10200.0, 1.0], [10400.0, 1.0], [11400.0, 1.0], [13400.0, 1.0], [15800.0, 1.0], [17000.0, 1.0]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 228.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 472.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 472.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 228.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.324324324324325, "minX": 1.69512774E12, "maxY": 14.126829268292685, "series": [{"data": [[1.6951278E12, 13.698337292161526], [1.69512774E12, 11.324324324324325], [1.69512786E12, 14.126829268292685]], "isOverall": false, "label": "Booking", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512786E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1315.8000000000006, "minX": 1.0, "maxY": 11442.0, "series": [{"data": [[33.0, 4406.5], [32.0, 2305.0], [2.0, 10404.0], [35.0, 5387.0], [34.0, 3275.0], [37.0, 2810.5], [36.0, 3860.5], [3.0, 4448.0], [4.0, 2979.0], [5.0, 8371.0], [6.0, 2070.0], [7.0, 1426.0], [8.0, 1382.5454545454545], [9.0, 1315.8000000000006], [10.0, 1571.75925925926], [11.0, 1615.2375000000004], [12.0, 1687.0444444444447], [13.0, 1762.7272727272727], [14.0, 1719.3035714285713], [15.0, 2066.365853658537], [16.0, 2077.483870967742], [1.0, 11442.0], [17.0, 2405.1612903225814], [18.0, 2309.8928571428564], [19.0, 2342.764705882353], [20.0, 2595.5714285714284], [21.0, 1971.0], [22.0, 2950.8], [23.0, 1835.5], [24.0, 4232.0], [25.0, 2289.6666666666665], [26.0, 2746.3333333333335], [27.0, 1513.5], [28.0, 6760.0], [29.0, 4349.0], [30.0, 4400.0], [31.0, 1317.0]], "isOverall": false, "label": "Authentication (Post)", "isController": false}, {"data": [[13.572857142857144, 1899.6628571428553]], "isOverall": false, "label": "Authentication (Post)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 37.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 334.23333333333335, "minX": 1.69512774E12, "maxY": 2048.866666666667, "series": [{"data": [[1.6951278E12, 1901.5166666666667], [1.69512774E12, 334.23333333333335], [1.69512786E12, 925.9166666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6951278E12, 2048.866666666667], [1.69512774E12, 360.1333333333333], [1.69512786E12, 997.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512786E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1429.8918918918916, "minX": 1.69512774E12, "maxY": 2141.409756097561, "series": [{"data": [[1.6951278E12, 1864.5201900237525], [1.69512774E12, 1429.8918918918916], [1.69512786E12, 2141.409756097561]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512786E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1429.6351351351354, "minX": 1.69512774E12, "maxY": 2141.3853658536586, "series": [{"data": [[1.6951278E12, 1864.4536817102135], [1.69512774E12, 1429.6351351351354], [1.69512786E12, 2141.3853658536586]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512786E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1090.4864864864871, "minX": 1.69512774E12, "maxY": 1474.8551068883612, "series": [{"data": [[1.6951278E12, 1474.8551068883612], [1.69512774E12, 1090.4864864864871], [1.69512786E12, 1334.8048780487807]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512786E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1151.0, "minX": 1.69512774E12, "maxY": 17080.0, "series": [{"data": [[1.6951278E12, 17080.0], [1.69512774E12, 3223.0], [1.69512786E12, 13497.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6951278E12, 3081.8], [1.69512774E12, 2137.0], [1.69512786E12, 4313.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6951278E12, 9239.039999999924], [1.69512774E12, 3223.0], [1.69512786E12, 11379.719999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6951278E12, 3850.299999999999], [1.69512774E12, 2252.0], [1.69512786E12, 5354.399999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6951278E12, 1165.0], [1.69512774E12, 1151.0], [1.69512786E12, 1181.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6951278E12, 1389.0], [1.69512774E12, 1229.0], [1.69512786E12, 1364.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512786E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1241.5, "minX": 1.0, "maxY": 7210.5, "series": [{"data": [[8.0, 1417.5], [2.0, 2129.0], [9.0, 1415.0], [10.0, 1373.5], [11.0, 1424.5], [3.0, 1366.5], [14.0, 2326.0], [16.0, 1412.0], [4.0, 1241.5], [1.0, 7210.5], [5.0, 1328.0], [22.0, 2870.5], [6.0, 1322.0], [7.0, 1322.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1241.5, "minX": 1.0, "maxY": 7210.5, "series": [{"data": [[8.0, 1417.5], [2.0, 2129.0], [9.0, 1415.0], [10.0, 1373.5], [11.0, 1424.5], [3.0, 1366.5], [14.0, 2326.0], [16.0, 1412.0], [4.0, 1241.5], [1.0, 7210.5], [5.0, 1328.0], [22.0, 2870.5], [6.0, 1322.0], [7.0, 1321.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.45, "minX": 1.69512774E12, "maxY": 7.0, "series": [{"data": [[1.6951278E12, 7.0], [1.69512774E12, 1.45], [1.69512786E12, 3.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512786E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.69512774E12, "maxY": 7.016666666666667, "series": [{"data": [[1.6951278E12, 7.016666666666667], [1.69512774E12, 1.2333333333333334], [1.69512786E12, 3.4166666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512786E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.69512774E12, "maxY": 7.016666666666667, "series": [{"data": [[1.6951278E12, 7.016666666666667], [1.69512774E12, 1.2333333333333334], [1.69512786E12, 3.4166666666666665]], "isOverall": false, "label": "Authentication (Post)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512786E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.69512774E12, "maxY": 7.016666666666667, "series": [{"data": [[1.6951278E12, 7.016666666666667], [1.69512774E12, 1.2333333333333334], [1.69512786E12, 3.4166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512786E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

