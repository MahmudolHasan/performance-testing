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
        data: {"result": {"minY": 1124.0, "minX": 0.0, "maxY": 23393.0, "series": [{"data": [[0.0, 1124.0], [0.1, 1124.0], [0.2, 1138.0], [0.3, 1146.0], [0.4, 1148.0], [0.5, 1150.0], [0.6, 1151.0], [0.7, 1151.0], [0.8, 1152.0], [0.9, 1152.0], [1.0, 1152.0], [1.1, 1152.0], [1.2, 1152.0], [1.3, 1153.0], [1.4, 1154.0], [1.5, 1155.0], [1.6, 1155.0], [1.7, 1155.0], [1.8, 1156.0], [1.9, 1158.0], [2.0, 1158.0], [2.1, 1158.0], [2.2, 1162.0], [2.3, 1162.0], [2.4, 1162.0], [2.5, 1162.0], [2.6, 1163.0], [2.7, 1164.0], [2.8, 1164.0], [2.9, 1164.0], [3.0, 1165.0], [3.1, 1165.0], [3.2, 1165.0], [3.3, 1165.0], [3.4, 1165.0], [3.5, 1166.0], [3.6, 1166.0], [3.7, 1166.0], [3.8, 1167.0], [3.9, 1167.0], [4.0, 1167.0], [4.1, 1167.0], [4.2, 1167.0], [4.3, 1168.0], [4.4, 1169.0], [4.5, 1169.0], [4.6, 1169.0], [4.7, 1169.0], [4.8, 1170.0], [4.9, 1170.0], [5.0, 1171.0], [5.1, 1171.0], [5.2, 1171.0], [5.3, 1171.0], [5.4, 1171.0], [5.5, 1171.0], [5.6, 1172.0], [5.7, 1172.0], [5.8, 1173.0], [5.9, 1173.0], [6.0, 1173.0], [6.1, 1173.0], [6.2, 1175.0], [6.3, 1175.0], [6.4, 1175.0], [6.5, 1176.0], [6.6, 1176.0], [6.7, 1176.0], [6.8, 1177.0], [6.9, 1177.0], [7.0, 1178.0], [7.1, 1178.0], [7.2, 1179.0], [7.3, 1179.0], [7.4, 1179.0], [7.5, 1180.0], [7.6, 1180.0], [7.7, 1180.0], [7.8, 1180.0], [7.9, 1180.0], [8.0, 1180.0], [8.1, 1180.0], [8.2, 1180.0], [8.3, 1180.0], [8.4, 1180.0], [8.5, 1181.0], [8.6, 1181.0], [8.7, 1181.0], [8.8, 1182.0], [8.9, 1183.0], [9.0, 1183.0], [9.1, 1183.0], [9.2, 1183.0], [9.3, 1183.0], [9.4, 1183.0], [9.5, 1183.0], [9.6, 1183.0], [9.7, 1183.0], [9.8, 1184.0], [9.9, 1184.0], [10.0, 1184.0], [10.1, 1184.0], [10.2, 1185.0], [10.3, 1186.0], [10.4, 1186.0], [10.5, 1186.0], [10.6, 1186.0], [10.7, 1186.0], [10.8, 1187.0], [10.9, 1187.0], [11.0, 1187.0], [11.1, 1187.0], [11.2, 1187.0], [11.3, 1187.0], [11.4, 1187.0], [11.5, 1187.0], [11.6, 1187.0], [11.7, 1187.0], [11.8, 1188.0], [11.9, 1188.0], [12.0, 1188.0], [12.1, 1188.0], [12.2, 1188.0], [12.3, 1189.0], [12.4, 1189.0], [12.5, 1189.0], [12.6, 1189.0], [12.7, 1190.0], [12.8, 1190.0], [12.9, 1190.0], [13.0, 1190.0], [13.1, 1190.0], [13.2, 1190.0], [13.3, 1191.0], [13.4, 1191.0], [13.5, 1191.0], [13.6, 1191.0], [13.7, 1192.0], [13.8, 1192.0], [13.9, 1193.0], [14.0, 1193.0], [14.1, 1193.0], [14.2, 1194.0], [14.3, 1194.0], [14.4, 1194.0], [14.5, 1194.0], [14.6, 1194.0], [14.7, 1194.0], [14.8, 1195.0], [14.9, 1195.0], [15.0, 1195.0], [15.1, 1195.0], [15.2, 1195.0], [15.3, 1195.0], [15.4, 1195.0], [15.5, 1196.0], [15.6, 1196.0], [15.7, 1196.0], [15.8, 1196.0], [15.9, 1197.0], [16.0, 1198.0], [16.1, 1198.0], [16.2, 1198.0], [16.3, 1198.0], [16.4, 1198.0], [16.5, 1198.0], [16.6, 1198.0], [16.7, 1198.0], [16.8, 1199.0], [16.9, 1199.0], [17.0, 1199.0], [17.1, 1199.0], [17.2, 1199.0], [17.3, 1200.0], [17.4, 1200.0], [17.5, 1200.0], [17.6, 1200.0], [17.7, 1201.0], [17.8, 1202.0], [17.9, 1202.0], [18.0, 1203.0], [18.1, 1203.0], [18.2, 1203.0], [18.3, 1204.0], [18.4, 1204.0], [18.5, 1204.0], [18.6, 1205.0], [18.7, 1205.0], [18.8, 1206.0], [18.9, 1206.0], [19.0, 1207.0], [19.1, 1207.0], [19.2, 1207.0], [19.3, 1207.0], [19.4, 1207.0], [19.5, 1207.0], [19.6, 1208.0], [19.7, 1208.0], [19.8, 1208.0], [19.9, 1209.0], [20.0, 1209.0], [20.1, 1209.0], [20.2, 1209.0], [20.3, 1209.0], [20.4, 1210.0], [20.5, 1210.0], [20.6, 1211.0], [20.7, 1211.0], [20.8, 1211.0], [20.9, 1211.0], [21.0, 1212.0], [21.1, 1212.0], [21.2, 1212.0], [21.3, 1212.0], [21.4, 1212.0], [21.5, 1212.0], [21.6, 1212.0], [21.7, 1213.0], [21.8, 1213.0], [21.9, 1214.0], [22.0, 1214.0], [22.1, 1214.0], [22.2, 1214.0], [22.3, 1215.0], [22.4, 1215.0], [22.5, 1215.0], [22.6, 1215.0], [22.7, 1216.0], [22.8, 1216.0], [22.9, 1216.0], [23.0, 1217.0], [23.1, 1217.0], [23.2, 1217.0], [23.3, 1218.0], [23.4, 1218.0], [23.5, 1220.0], [23.6, 1220.0], [23.7, 1221.0], [23.8, 1221.0], [23.9, 1222.0], [24.0, 1222.0], [24.1, 1222.0], [24.2, 1222.0], [24.3, 1223.0], [24.4, 1223.0], [24.5, 1224.0], [24.6, 1224.0], [24.7, 1224.0], [24.8, 1224.0], [24.9, 1224.0], [25.0, 1225.0], [25.1, 1225.0], [25.2, 1225.0], [25.3, 1225.0], [25.4, 1226.0], [25.5, 1226.0], [25.6, 1226.0], [25.7, 1227.0], [25.8, 1228.0], [25.9, 1228.0], [26.0, 1229.0], [26.1, 1229.0], [26.2, 1229.0], [26.3, 1230.0], [26.4, 1230.0], [26.5, 1231.0], [26.6, 1231.0], [26.7, 1232.0], [26.8, 1232.0], [26.9, 1233.0], [27.0, 1233.0], [27.1, 1233.0], [27.2, 1233.0], [27.3, 1234.0], [27.4, 1234.0], [27.5, 1235.0], [27.6, 1235.0], [27.7, 1235.0], [27.8, 1235.0], [27.9, 1235.0], [28.0, 1237.0], [28.1, 1237.0], [28.2, 1237.0], [28.3, 1238.0], [28.4, 1238.0], [28.5, 1239.0], [28.6, 1239.0], [28.7, 1239.0], [28.8, 1240.0], [28.9, 1241.0], [29.0, 1241.0], [29.1, 1241.0], [29.2, 1241.0], [29.3, 1242.0], [29.4, 1243.0], [29.5, 1243.0], [29.6, 1244.0], [29.7, 1245.0], [29.8, 1246.0], [29.9, 1248.0], [30.0, 1248.0], [30.1, 1248.0], [30.2, 1248.0], [30.3, 1249.0], [30.4, 1249.0], [30.5, 1249.0], [30.6, 1250.0], [30.7, 1250.0], [30.8, 1252.0], [30.9, 1253.0], [31.0, 1253.0], [31.1, 1253.0], [31.2, 1253.0], [31.3, 1254.0], [31.4, 1254.0], [31.5, 1254.0], [31.6, 1256.0], [31.7, 1258.0], [31.8, 1258.0], [31.9, 1259.0], [32.0, 1259.0], [32.1, 1259.0], [32.2, 1260.0], [32.3, 1261.0], [32.4, 1261.0], [32.5, 1262.0], [32.6, 1262.0], [32.7, 1263.0], [32.8, 1263.0], [32.9, 1263.0], [33.0, 1264.0], [33.1, 1264.0], [33.2, 1265.0], [33.3, 1265.0], [33.4, 1265.0], [33.5, 1267.0], [33.6, 1267.0], [33.7, 1268.0], [33.8, 1269.0], [33.9, 1269.0], [34.0, 1269.0], [34.1, 1269.0], [34.2, 1270.0], [34.3, 1270.0], [34.4, 1271.0], [34.5, 1271.0], [34.6, 1272.0], [34.7, 1272.0], [34.8, 1272.0], [34.9, 1273.0], [35.0, 1275.0], [35.1, 1275.0], [35.2, 1275.0], [35.3, 1277.0], [35.4, 1278.0], [35.5, 1278.0], [35.6, 1279.0], [35.7, 1280.0], [35.8, 1280.0], [35.9, 1281.0], [36.0, 1283.0], [36.1, 1283.0], [36.2, 1285.0], [36.3, 1285.0], [36.4, 1286.0], [36.5, 1286.0], [36.6, 1286.0], [36.7, 1287.0], [36.8, 1287.0], [36.9, 1287.0], [37.0, 1287.0], [37.1, 1287.0], [37.2, 1287.0], [37.3, 1287.0], [37.4, 1288.0], [37.5, 1288.0], [37.6, 1288.0], [37.7, 1289.0], [37.8, 1289.0], [37.9, 1291.0], [38.0, 1292.0], [38.1, 1292.0], [38.2, 1293.0], [38.3, 1294.0], [38.4, 1294.0], [38.5, 1294.0], [38.6, 1294.0], [38.7, 1295.0], [38.8, 1295.0], [38.9, 1297.0], [39.0, 1298.0], [39.1, 1298.0], [39.2, 1298.0], [39.3, 1298.0], [39.4, 1299.0], [39.5, 1299.0], [39.6, 1299.0], [39.7, 1300.0], [39.8, 1301.0], [39.9, 1301.0], [40.0, 1301.0], [40.1, 1303.0], [40.2, 1303.0], [40.3, 1303.0], [40.4, 1303.0], [40.5, 1303.0], [40.6, 1304.0], [40.7, 1305.0], [40.8, 1306.0], [40.9, 1306.0], [41.0, 1306.0], [41.1, 1306.0], [41.2, 1306.0], [41.3, 1306.0], [41.4, 1307.0], [41.5, 1307.0], [41.6, 1308.0], [41.7, 1308.0], [41.8, 1308.0], [41.9, 1308.0], [42.0, 1308.0], [42.1, 1309.0], [42.2, 1310.0], [42.3, 1310.0], [42.4, 1311.0], [42.5, 1313.0], [42.6, 1313.0], [42.7, 1314.0], [42.8, 1314.0], [42.9, 1314.0], [43.0, 1314.0], [43.1, 1315.0], [43.2, 1316.0], [43.3, 1316.0], [43.4, 1316.0], [43.5, 1316.0], [43.6, 1317.0], [43.7, 1317.0], [43.8, 1317.0], [43.9, 1317.0], [44.0, 1317.0], [44.1, 1317.0], [44.2, 1318.0], [44.3, 1320.0], [44.4, 1322.0], [44.5, 1323.0], [44.6, 1324.0], [44.7, 1324.0], [44.8, 1326.0], [44.9, 1326.0], [45.0, 1326.0], [45.1, 1326.0], [45.2, 1327.0], [45.3, 1327.0], [45.4, 1328.0], [45.5, 1328.0], [45.6, 1328.0], [45.7, 1329.0], [45.8, 1330.0], [45.9, 1330.0], [46.0, 1330.0], [46.1, 1330.0], [46.2, 1331.0], [46.3, 1332.0], [46.4, 1333.0], [46.5, 1333.0], [46.6, 1334.0], [46.7, 1335.0], [46.8, 1337.0], [46.9, 1338.0], [47.0, 1338.0], [47.1, 1338.0], [47.2, 1338.0], [47.3, 1339.0], [47.4, 1341.0], [47.5, 1341.0], [47.6, 1341.0], [47.7, 1341.0], [47.8, 1341.0], [47.9, 1342.0], [48.0, 1342.0], [48.1, 1345.0], [48.2, 1348.0], [48.3, 1349.0], [48.4, 1349.0], [48.5, 1350.0], [48.6, 1350.0], [48.7, 1351.0], [48.8, 1351.0], [48.9, 1352.0], [49.0, 1352.0], [49.1, 1352.0], [49.2, 1353.0], [49.3, 1353.0], [49.4, 1353.0], [49.5, 1354.0], [49.6, 1354.0], [49.7, 1357.0], [49.8, 1357.0], [49.9, 1360.0], [50.0, 1360.0], [50.1, 1360.0], [50.2, 1360.0], [50.3, 1360.0], [50.4, 1361.0], [50.5, 1361.0], [50.6, 1361.0], [50.7, 1362.0], [50.8, 1362.0], [50.9, 1363.0], [51.0, 1363.0], [51.1, 1363.0], [51.2, 1363.0], [51.3, 1364.0], [51.4, 1364.0], [51.5, 1365.0], [51.6, 1366.0], [51.7, 1367.0], [51.8, 1368.0], [51.9, 1368.0], [52.0, 1368.0], [52.1, 1368.0], [52.2, 1369.0], [52.3, 1369.0], [52.4, 1369.0], [52.5, 1370.0], [52.6, 1371.0], [52.7, 1372.0], [52.8, 1373.0], [52.9, 1374.0], [53.0, 1374.0], [53.1, 1374.0], [53.2, 1375.0], [53.3, 1375.0], [53.4, 1376.0], [53.5, 1376.0], [53.6, 1376.0], [53.7, 1377.0], [53.8, 1377.0], [53.9, 1377.0], [54.0, 1377.0], [54.1, 1378.0], [54.2, 1378.0], [54.3, 1379.0], [54.4, 1379.0], [54.5, 1381.0], [54.6, 1382.0], [54.7, 1384.0], [54.8, 1384.0], [54.9, 1386.0], [55.0, 1386.0], [55.1, 1386.0], [55.2, 1388.0], [55.3, 1389.0], [55.4, 1390.0], [55.5, 1390.0], [55.6, 1391.0], [55.7, 1391.0], [55.8, 1393.0], [55.9, 1393.0], [56.0, 1393.0], [56.1, 1394.0], [56.2, 1394.0], [56.3, 1395.0], [56.4, 1397.0], [56.5, 1397.0], [56.6, 1398.0], [56.7, 1399.0], [56.8, 1399.0], [56.9, 1399.0], [57.0, 1399.0], [57.1, 1400.0], [57.2, 1401.0], [57.3, 1401.0], [57.4, 1402.0], [57.5, 1403.0], [57.6, 1407.0], [57.7, 1407.0], [57.8, 1408.0], [57.9, 1409.0], [58.0, 1409.0], [58.1, 1410.0], [58.2, 1411.0], [58.3, 1412.0], [58.4, 1412.0], [58.5, 1413.0], [58.6, 1413.0], [58.7, 1416.0], [58.8, 1416.0], [58.9, 1417.0], [59.0, 1417.0], [59.1, 1417.0], [59.2, 1418.0], [59.3, 1418.0], [59.4, 1420.0], [59.5, 1421.0], [59.6, 1422.0], [59.7, 1426.0], [59.8, 1426.0], [59.9, 1429.0], [60.0, 1429.0], [60.1, 1429.0], [60.2, 1429.0], [60.3, 1430.0], [60.4, 1430.0], [60.5, 1432.0], [60.6, 1432.0], [60.7, 1433.0], [60.8, 1434.0], [60.9, 1435.0], [61.0, 1435.0], [61.1, 1436.0], [61.2, 1437.0], [61.3, 1437.0], [61.4, 1438.0], [61.5, 1438.0], [61.6, 1440.0], [61.7, 1440.0], [61.8, 1442.0], [61.9, 1442.0], [62.0, 1442.0], [62.1, 1443.0], [62.2, 1445.0], [62.3, 1449.0], [62.4, 1449.0], [62.5, 1449.0], [62.6, 1449.0], [62.7, 1449.0], [62.8, 1451.0], [62.9, 1451.0], [63.0, 1451.0], [63.1, 1453.0], [63.2, 1454.0], [63.3, 1454.0], [63.4, 1455.0], [63.5, 1455.0], [63.6, 1455.0], [63.7, 1455.0], [63.8, 1456.0], [63.9, 1457.0], [64.0, 1457.0], [64.1, 1457.0], [64.2, 1458.0], [64.3, 1458.0], [64.4, 1459.0], [64.5, 1459.0], [64.6, 1460.0], [64.7, 1460.0], [64.8, 1461.0], [64.9, 1462.0], [65.0, 1462.0], [65.1, 1462.0], [65.2, 1463.0], [65.3, 1463.0], [65.4, 1468.0], [65.5, 1469.0], [65.6, 1469.0], [65.7, 1470.0], [65.8, 1471.0], [65.9, 1473.0], [66.0, 1473.0], [66.1, 1474.0], [66.2, 1475.0], [66.3, 1475.0], [66.4, 1475.0], [66.5, 1476.0], [66.6, 1478.0], [66.7, 1479.0], [66.8, 1481.0], [66.9, 1482.0], [67.0, 1482.0], [67.1, 1482.0], [67.2, 1483.0], [67.3, 1483.0], [67.4, 1483.0], [67.5, 1484.0], [67.6, 1486.0], [67.7, 1488.0], [67.8, 1489.0], [67.9, 1490.0], [68.0, 1490.0], [68.1, 1490.0], [68.2, 1492.0], [68.3, 1493.0], [68.4, 1495.0], [68.5, 1496.0], [68.6, 1497.0], [68.7, 1497.0], [68.8, 1497.0], [68.9, 1498.0], [69.0, 1498.0], [69.1, 1499.0], [69.2, 1500.0], [69.3, 1500.0], [69.4, 1502.0], [69.5, 1505.0], [69.6, 1506.0], [69.7, 1506.0], [69.8, 1508.0], [69.9, 1516.0], [70.0, 1516.0], [70.1, 1518.0], [70.2, 1518.0], [70.3, 1518.0], [70.4, 1521.0], [70.5, 1522.0], [70.6, 1524.0], [70.7, 1524.0], [70.8, 1526.0], [70.9, 1527.0], [71.0, 1527.0], [71.1, 1527.0], [71.2, 1527.0], [71.3, 1528.0], [71.4, 1528.0], [71.5, 1533.0], [71.6, 1538.0], [71.7, 1538.0], [71.8, 1540.0], [71.9, 1545.0], [72.0, 1545.0], [72.1, 1545.0], [72.2, 1547.0], [72.3, 1547.0], [72.4, 1551.0], [72.5, 1558.0], [72.6, 1561.0], [72.7, 1563.0], [72.8, 1564.0], [72.9, 1564.0], [73.0, 1564.0], [73.1, 1565.0], [73.2, 1566.0], [73.3, 1572.0], [73.4, 1574.0], [73.5, 1576.0], [73.6, 1577.0], [73.7, 1582.0], [73.8, 1585.0], [73.9, 1587.0], [74.0, 1587.0], [74.1, 1588.0], [74.2, 1590.0], [74.3, 1594.0], [74.4, 1594.0], [74.5, 1595.0], [74.6, 1595.0], [74.7, 1595.0], [74.8, 1607.0], [74.9, 1611.0], [75.0, 1611.0], [75.1, 1619.0], [75.2, 1626.0], [75.3, 1628.0], [75.4, 1633.0], [75.5, 1644.0], [75.6, 1647.0], [75.7, 1649.0], [75.8, 1654.0], [75.9, 1655.0], [76.0, 1655.0], [76.1, 1658.0], [76.2, 1661.0], [76.3, 1667.0], [76.4, 1680.0], [76.5, 1682.0], [76.6, 1684.0], [76.7, 1689.0], [76.8, 1694.0], [76.9, 1694.0], [77.0, 1694.0], [77.1, 1699.0], [77.2, 1706.0], [77.3, 1708.0], [77.4, 1723.0], [77.5, 1733.0], [77.6, 1734.0], [77.7, 1744.0], [77.8, 1758.0], [77.9, 1760.0], [78.0, 1760.0], [78.1, 1793.0], [78.2, 1794.0], [78.3, 1799.0], [78.4, 1818.0], [78.5, 1820.0], [78.6, 1822.0], [78.7, 1845.0], [78.8, 1865.0], [78.9, 1870.0], [79.0, 1870.0], [79.1, 1892.0], [79.2, 1908.0], [79.3, 1920.0], [79.4, 1924.0], [79.5, 1930.0], [79.6, 1937.0], [79.7, 1943.0], [79.8, 1957.0], [79.9, 1960.0], [80.0, 1960.0], [80.1, 1964.0], [80.2, 1972.0], [80.3, 1975.0], [80.4, 1979.0], [80.5, 2016.0], [80.6, 2021.0], [80.7, 2035.0], [80.8, 2038.0], [80.9, 2049.0], [81.0, 2049.0], [81.1, 2050.0], [81.2, 2050.0], [81.3, 2054.0], [81.4, 2056.0], [81.5, 2064.0], [81.6, 2064.0], [81.7, 2066.0], [81.8, 2098.0], [81.9, 2102.0], [82.0, 2102.0], [82.1, 2105.0], [82.2, 2114.0], [82.3, 2122.0], [82.4, 2125.0], [82.5, 2125.0], [82.6, 2140.0], [82.7, 2150.0], [82.8, 2157.0], [82.9, 2168.0], [83.0, 2168.0], [83.1, 2174.0], [83.2, 2174.0], [83.3, 2182.0], [83.4, 2183.0], [83.5, 2183.0], [83.6, 2193.0], [83.7, 2201.0], [83.8, 2210.0], [83.9, 2214.0], [84.0, 2214.0], [84.1, 2215.0], [84.2, 2224.0], [84.3, 2225.0], [84.4, 2235.0], [84.5, 2239.0], [84.6, 2241.0], [84.7, 2249.0], [84.8, 2250.0], [84.9, 2253.0], [85.0, 2253.0], [85.1, 2258.0], [85.2, 2273.0], [85.3, 2274.0], [85.4, 2282.0], [85.5, 2283.0], [85.6, 2285.0], [85.7, 2289.0], [85.8, 2292.0], [85.9, 2298.0], [86.0, 2298.0], [86.1, 2298.0], [86.2, 2304.0], [86.3, 2317.0], [86.4, 2327.0], [86.5, 2327.0], [86.6, 2336.0], [86.7, 2339.0], [86.8, 2341.0], [86.9, 2361.0], [87.0, 2361.0], [87.1, 2375.0], [87.2, 2384.0], [87.3, 2392.0], [87.4, 2411.0], [87.5, 2417.0], [87.6, 2421.0], [87.7, 2423.0], [87.8, 2424.0], [87.9, 2429.0], [88.0, 2429.0], [88.1, 2452.0], [88.2, 2473.0], [88.3, 2478.0], [88.4, 2488.0], [88.5, 2491.0], [88.6, 2502.0], [88.7, 2503.0], [88.8, 2505.0], [88.9, 2506.0], [89.0, 2506.0], [89.1, 2512.0], [89.2, 2538.0], [89.3, 2540.0], [89.4, 2551.0], [89.5, 2577.0], [89.6, 2600.0], [89.7, 2613.0], [89.8, 2614.0], [89.9, 2615.0], [90.0, 2615.0], [90.1, 2626.0], [90.2, 2635.0], [90.3, 2649.0], [90.4, 2666.0], [90.5, 2717.0], [90.6, 2748.0], [90.7, 2770.0], [90.8, 2779.0], [90.9, 2789.0], [91.0, 2789.0], [91.1, 2793.0], [91.2, 2833.0], [91.3, 2833.0], [91.4, 2857.0], [91.5, 2864.0], [91.6, 2868.0], [91.7, 2877.0], [91.8, 2877.0], [91.9, 2899.0], [92.0, 2899.0], [92.1, 2909.0], [92.2, 2912.0], [92.3, 2932.0], [92.4, 2959.0], [92.5, 2960.0], [92.6, 2971.0], [92.7, 3000.0], [92.8, 3002.0], [92.9, 3006.0], [93.0, 3006.0], [93.1, 3019.0], [93.2, 3021.0], [93.3, 3031.0], [93.4, 3037.0], [93.5, 3042.0], [93.6, 3055.0], [93.7, 3063.0], [93.8, 3065.0], [93.9, 3066.0], [94.0, 3066.0], [94.1, 3112.0], [94.2, 3131.0], [94.3, 3139.0], [94.4, 3156.0], [94.5, 3179.0], [94.6, 3186.0], [94.7, 3222.0], [94.8, 3250.0], [94.9, 3267.0], [95.0, 3267.0], [95.1, 3306.0], [95.2, 3311.0], [95.3, 3318.0], [95.4, 3323.0], [95.5, 3335.0], [95.6, 3351.0], [95.7, 3358.0], [95.8, 3360.0], [95.9, 3368.0], [96.0, 3368.0], [96.1, 3502.0], [96.2, 3522.0], [96.3, 3528.0], [96.4, 3576.0], [96.5, 3670.0], [96.6, 3719.0], [96.7, 3738.0], [96.8, 3837.0], [96.9, 3915.0], [97.0, 3915.0], [97.1, 3965.0], [97.2, 4041.0], [97.3, 4053.0], [97.4, 4064.0], [97.5, 4071.0], [97.6, 4072.0], [97.7, 4074.0], [97.8, 4199.0], [97.9, 4334.0], [98.0, 4334.0], [98.1, 4371.0], [98.2, 4434.0], [98.3, 4564.0], [98.4, 4586.0], [98.5, 4628.0], [98.6, 4737.0], [98.7, 4737.0], [98.8, 5078.0], [98.9, 5183.0], [99.0, 5183.0], [99.1, 5319.0], [99.2, 5469.0], [99.3, 6512.0], [99.4, 7038.0], [99.5, 8405.0], [99.6, 9248.0], [99.7, 16583.0], [99.8, 22369.0], [99.9, 23393.0], [100.0, 23393.0]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 202.0, "series": [{"data": [[8400.0, 1.0], [9200.0, 1.0], [16500.0, 1.0], [1100.0, 155.0], [1200.0, 202.0], [1300.0, 156.0], [1400.0, 109.0], [22300.0, 1.0], [23300.0, 1.0], [1500.0, 51.0], [1600.0, 21.0], [1700.0, 11.0], [1800.0, 7.0], [1900.0, 12.0], [2000.0, 13.0], [2100.0, 16.0], [2200.0, 22.0], [2300.0, 11.0], [2400.0, 11.0], [2500.0, 9.0], [2600.0, 8.0], [2700.0, 6.0], [2800.0, 8.0], [2900.0, 6.0], [3000.0, 12.0], [3100.0, 6.0], [3300.0, 9.0], [3200.0, 3.0], [3500.0, 4.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 6.0], [4300.0, 2.0], [4100.0, 1.0], [4500.0, 2.0], [4600.0, 1.0], [4400.0, 1.0], [4700.0, 2.0], [5100.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [6500.0, 1.0], [7000.0, 1.0]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 276.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 624.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 624.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 276.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.61928934010152, "minX": 1.69512804E12, "maxY": 16.14652014652014, "series": [{"data": [[1.69512816E12, 14.61928934010152], [1.69512804E12, 15.980891719745218], [1.6951281E12, 16.14652014652014]], "isOverall": false, "label": "Booking", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1198.2499999999998, "minX": 1.0, "maxY": 6512.0, "series": [{"data": [[2.0, 3358.0], [3.0, 3139.0], [4.0, 2626.0], [5.0, 2770.0], [6.0, 2317.0], [7.0, 3522.0], [8.0, 2215.0], [9.0, 3502.0], [10.0, 1299.0], [11.0, 1198.2499999999998], [12.0, 1314.375], [13.0, 1386.2413793103447], [14.0, 1633.7762237762242], [15.0, 1759.7731092436966], [16.0, 1825.651785714285], [1.0, 6512.0], [17.0, 1627.1818181818187], [18.0, 1978.2857142857138], [19.0, 1766.735294117647], [20.0, 1993.9999999999998], [21.0, 1930.9545454545455], [22.0, 2125.2727272727275], [23.0, 2514.2], [24.0, 2693.166666666667], [25.0, 2693.4375], [26.0, 2190.142857142858], [27.0, 2004.3333333333333], [28.0, 1583.0]], "isOverall": false, "label": "Authentication (Post)", "isController": false}, {"data": [[15.783333333333339, 1719.0555555555547]], "isOverall": false, "label": "Authentication (Post)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 28.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 709.1166666666667, "minX": 1.69512804E12, "maxY": 2657.2, "series": [{"data": [[1.69512816E12, 889.7833333333333], [1.69512804E12, 709.1166666666667], [1.6951281E12, 2466.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69512816E12, 958.7333333333333], [1.69512804E12, 764.0666666666667], [1.6951281E12, 2657.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1648.7197452229302, "minX": 1.69512804E12, "maxY": 1798.89847715736, "series": [{"data": [[1.69512816E12, 1798.89847715736], [1.69512804E12, 1648.7197452229302], [1.6951281E12, 1710.4725274725258]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1648.1910828025473, "minX": 1.69512804E12, "maxY": 1798.883248730964, "series": [{"data": [[1.69512816E12, 1798.883248730964], [1.69512804E12, 1648.1910828025473], [1.6951281E12, 1710.4413919413919]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1255.2356687898089, "minX": 1.69512804E12, "maxY": 1453.106598984773, "series": [{"data": [[1.69512816E12, 1453.106598984773], [1.69512804E12, 1255.2356687898089], [1.6951281E12, 1308.9835164835172]], "isOverall": false, "label": "Authentication (Post)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1124.0, "minX": 1.69512804E12, "maxY": 23393.0, "series": [{"data": [[1.69512816E12, 22369.0], [1.69512804E12, 4371.0], [1.6951281E12, 23393.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69512816E12, 2901.600000000002], [1.69512804E12, 2502.2], [1.6951281E12, 2621.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69512816E12, 16698.72000000006], [1.69512804E12, 3784.619999999987], [1.6951281E12, 4973.379999999988]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69512816E12, 3315.7], [1.69512804E12, 2964.6], [1.6951281E12, 3471.9999999999964]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69512816E12, 1148.0], [1.69512804E12, 1151.0], [1.6951281E12, 1124.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69512816E12, 1299.0], [1.69512804E12, 1481.0], [1.6951281E12, 1346.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1217.5, "minX": 1.0, "maxY": 6512.0, "series": [{"data": [[8.0, 1282.5], [9.0, 1328.5], [10.0, 1387.0], [11.0, 1286.0], [12.0, 1357.0], [3.0, 3139.0], [13.0, 1440.0], [14.0, 1545.5], [15.0, 1236.5], [4.0, 1908.0], [1.0, 6512.0], [17.0, 2021.0], [5.0, 1324.0], [6.0, 1217.5], [7.0, 1386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1217.5, "minX": 1.0, "maxY": 6512.0, "series": [{"data": [[8.0, 1282.5], [9.0, 1328.5], [10.0, 1387.0], [11.0, 1286.0], [12.0, 1357.0], [3.0, 3139.0], [13.0, 1439.0], [14.0, 1545.0], [15.0, 1236.5], [4.0, 1908.0], [1.0, 6512.0], [17.0, 2021.0], [5.0, 1323.0], [6.0, 1217.5], [7.0, 1386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.69512804E12, "maxY": 9.016666666666667, "series": [{"data": [[1.69512816E12, 2.95], [1.69512804E12, 3.033333333333333], [1.6951281E12, 9.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.69512804E12, "maxY": 9.1, "series": [{"data": [[1.69512816E12, 3.283333333333333], [1.69512804E12, 2.6166666666666667], [1.6951281E12, 9.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69512816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.69512804E12, "maxY": 9.1, "series": [{"data": [[1.69512816E12, 3.283333333333333], [1.69512804E12, 2.6166666666666667], [1.6951281E12, 9.1]], "isOverall": false, "label": "Authentication (Post)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6166666666666667, "minX": 1.69512804E12, "maxY": 9.1, "series": [{"data": [[1.69512816E12, 3.283333333333333], [1.69512804E12, 2.6166666666666667], [1.6951281E12, 9.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69512816E12, "title": "Total Transactions Per Second"}},
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

