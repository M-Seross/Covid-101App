//JAVASCRIPT CODE
//<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//<script type="text/javascript" src="./script.js">
getStats("AUS");
//Event Listener for button COVID-19
 //Event Listener

function getStats(countryCode,countryName){
    var queryURL = "https://covidapi.info/api/v1/country/"+countryCode+"/latest"           
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
    {   
        var output = Object.values(response.result)[0];
        var confirmCases = output.confirmed;
        var confirmDeaths = output.deaths;
        var confirmRecovered = output.recovered;
        $("#infected").text(confirmCases);
        $("#deceased").text(confirmDeaths);
        $("#recovered").text(confirmRecovered);
        $(".countryBtn").text(countryName);
    })
}

$(".dropdown-item").on("click",function(){
    var countrySelect =  $(this).attr("data-country");
    var countryName = $(this).attr('value-country')
    getStats(countrySelect,countryName);
})