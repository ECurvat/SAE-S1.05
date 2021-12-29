google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Poursuite',11],
        ['Insertion',5],
        
    ]);

    var options = {
        // title: 'Après la formation',
        with:'100%',
        height:'100%',
        backgroundColor: 'transparent'
    };
    

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }