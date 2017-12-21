/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1ex_r8XFU8VKiTquIUoRww_xeUieDHJyyc7n7D_4Tt_M&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K label A "Company Name", B "Token Created Name", C "Date When ICO Closed(Finished)", D "Token Type Raised(ETH, BTC, EOS...)", E "ETH raised", F "ETH price at ICO end", G "BTC raised", H "BTC price at ICO end", I "Other token raised USD value or token value", J "ETH value in USD at ICO end", K "BTC value in USD at ICO end"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    // for google table charts
    // google.charts.load('current');   // Don't need to specify chart libraries!
    //   google.charts.setOnLoadCallback(drawVisualization);
    //   function drawVisualization() {
    //     google.visualization.drawChart({
    //      "containerId": "visualization_div",
    //      "dataSourceUrl": "https://spreadsheets.google.com/a/google.com/tq?key=1ex_r8XFU8VKiTquIUoRww_xeUieDHJyyc7n7D_4Tt_M&pub=1",
    //      "query":'SELECT A, B, C, D, E, F, G, H, I, J, K label A "Company Name", B "Token Created Name", C "Date When ICO Closed(Finished)", D "Token Type Raised(ETH, BTC, EOS...)", E "ETH raised", F "ETH price at ICO end", G "BTC raised", H "BTC price at ICO end", I "Other token raised USD value or token value", J "ETH value in USD at ICO end", K "BTC value in USD at ICO end"',
    //      "chartType": "Table",
    //      "options": {
    //         "alternatingRowStyle": true,
    //         "showRowNumber" : true,
	//     "page": 'enable',
    //         "pageSize": 20,
    //         "pagingSymbols": {
    //         "prev": 'prev',
    //         "next": 'next'
    //     },
    //     pagingButtonsConfiguration: 'auto'

    //      }
    //    });
    //   }
    // google.charts.setOnLoadCallback(drawVisualization);
    visualization.draw(data, {
        legend: 'bottom',
        "alternatingRowStyle": true,
            // "showRowNumber" : true,
	    "page": 'enable',
            "pageSize": 10,
            "pagingSymbols": {
            "prev": 'prev',
            "next": 'next'
            }
    });
    // setTimeout(function(){
    //     paginateTable(10);
    //     $('#pagination-selector').show()
    // }, 2000)
}
google.setOnLoadCallback(drawVisualization);
