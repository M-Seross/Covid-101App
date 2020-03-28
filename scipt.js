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

//Event listner for clicking buttons
$("#newsBtn").on("click",function()
{
    //API Key for news article
    apiKey = "a819d6578c28488eadd2b1297db47b15";
    //API key to be added to API link
    var queryURL = "https://newsapi.org/v2/top-headlines?q=coronavirus&country=au&apiKey="+apiKey;
    //Pull request for API          
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
    {
        var array = response.articles;
        //Loop to iterate through all the artiles
        for (var i=0;i<array.length;i++)
        {   
            currentResult = array[i];
            //Create new div 
            newDiv = $("<div>");
            //Assign the response results into title, author, publish date, link, image
            title = currentResult.title;
            author = currentResult.author;
            //When no author is specified, displays not specified
            if (!author)
            {
                author = "No Author Specified";
            }
            publishDate = currentResult.publishedAt;
            link = currentResult.url;
            image = currentResult.urlToImage;
            //Update all the response into HTML and append
            var p1 = $("<p>").text("Title: " + title);
            var p2 = $("<p>").text("Author: " + author);
            var p3 = $("<p>").text("Publish Date: " + publishDate.split("T")[0]);
            var p4 = $("<a>").text(link).attr("href",link);
            //Adding image thumbnail
            var anchor = $("<img>");
            anchor.attr("src",image);
            //Append all above to newly created div 
            newDiv.append(p1);
            newDiv.append(p2);
            newDiv.append(p3);
            newDiv.append(p4);
            newDiv.append(anchor);
            //Append this new div onto HTML
            $(".latestInfo").append(newDiv);
        }
        

    })
})
