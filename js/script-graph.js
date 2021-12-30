google.charts.load('current', { 'packages': ['corechart'] });

// Appel du dessin du graphique des admissions
google.charts.setOnLoadCallback(drawAdmChart);

// Appel du dessin du graphique des filieres
google.charts.setOnLoadCallback(drawFilChart);

// Appel du dessin du graphique des poursuites
google.charts.setOnLoadCallback(drawPouChart);

// Admissions
function drawAdmChart() {

	// Données d'admissions
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Filieres');
	data.addColumn('number', 'Pourcentage');
	data.addRows([
		['Générale', 65],
		['Technologique', 50],
		['Professionnelle', 10]
	]);

	// Options d'admissions
	var options = {
		width: '100%',
		backgroundColor: 'transparent',
		colors: ['#BDC3C7', '#5a5e6b', '#27AE60']
	};

	// Dessin d'admissions
	var chart = new google.visualization.PieChart(document.getElementById('Adm_chart_div'));
	chart.draw(data, options);
}

// Filieres
function drawFilChart() {

	// Données des filieres
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Filieres');
	data.addColumn('number', 'Pourcentage');
	data.addRows([
		['Parcours A', 85],
		['Parcours B', 10],
		['Parcours C', 30]
	]);

	// Options des filieres
	var options = {
		width: '100%',
		backgroundColor: 'transparent',
		colors: ['#BDC3C7', '#5a5e6b', '#27AE60']
	};

	// Dessin des filieres
	var chart = new google.visualization.PieChart(document.getElementById('Fil_chart_div'));
	chart.draw(data, options);
}

// Poursuites
function drawPouChart() {

	// Données des poursuites
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Poursuites');
	data.addColumn('number', 'Pourcentage');
	data.addRows([
		['Professionnelle', 40],
		['Universitaire', 38],
		['École privée/publique', 47],
	]);

	// Options des poursuites
	var options = {
		width: '100%',
		backgroundColor: 'transparent',
		colors: ['#BDC3C7', '#5a5e6b', '#27AE60']
	};

	// Dessin des filieres
	var chart = new google.visualization.PieChart(document.getElementById('Pou_chart_div'));
	chart.draw(data, options);
}