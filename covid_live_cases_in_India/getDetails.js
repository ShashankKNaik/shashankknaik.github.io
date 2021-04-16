$(document).ready(function(){
    var state=$("#state").val();
    $("#state").change(function(){
        state=$("#state").val();
        $.get( "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true", function( data ) {
            for(i=0;i<data.regionData.length;i++){
                if(state===data.regionData[i].region){
                    console.log(data.regionData[i].region);
                    $("#toli").html(data.regionData[i].totalInfected);
                    $("#ni").html(data.regionData[i].newInfected);
                    $("#recov").html(data.regionData[i].recovered);
                    $("#newrec").html(data.regionData[i].newRecovered);
                    $("#dec").html(data.regionData[i].deceased);
                    $("#ndec").html(data.regionData[i].newDeceased);
                    break;
                }
            }
        });
    });

    var req= new XMLHttpRequest();
    req.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            a=JSON.parse(this.responseText);
            $("#ac").html(a["activeCases"]);
            $("#nac").html(a.activeCasesNew);
            $("#rec").html(a.recovered);
            $("#nrec").html(a.recoveredNew);
            $("#cd").html(a.deaths+a.deathsNew);
            $("#tc").html(a.totalCases);
            $("#lastUp").html(a.lastUpdatedAtApify); 
            for(i=0;i<a.regionData.length;i++){
                if(state===a.regionData[i].region){
                    console.log(a.regionData[i].region);
                    $("#toli").html(a.regionData[i].totalInfected);
                    $("#ni").html(a.regionData[i].newInfected);
                    $("#recov").html(a.regionData[i].recovered);
                    $("#newrec").html(a.regionData[i].newRecovered);
                    $("#dec").html(a.regionData[i].deceased);
                    $("#ndec").html(a.regionData[i].newDeceased);
                    break;
                }
            }
        }
    };
    req.open("GET","https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true",true);
    req.send();
})