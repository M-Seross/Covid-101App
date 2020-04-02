//JAVASCRIPT CODE
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//<script type="text/javascript" src="./script.js">


//API to grab statistics   
var queryURL = "https://covidapi.info/api/v1/country/AUS/latest"            
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) 
{

    //Assigns the values from pull request and pushes to Statistics HTML
    var output = Object.values(response.result)[0];
    var confirmCases = output.confirmed;
    var confirmDeaths = output.deaths;
    var confirmRecovered = output.recovered;
    //Just normal JQuery
    $("#infected").text(confirmCases);
    $("#deceased").text(confirmDeaths);
    $("#recovered").text(confirmRecovered);
})