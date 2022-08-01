let localteam = JSON.parse(localStorage.getItem("teamarray"));
let localPlayers = JSON.parse(localStorage.getItem("playerarray"));

$("#addteamform").submit(function(e) {
    
    e.preventdefaut();
    
    let inp_val = $("#inp1").val();
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }

    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,
        
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),
    }
   
   localTeam.push(addData);
   localStorage.setItem("teamArray", JSON.stringify(localTeam)); 

   location.href = `./teams.html?name=${addData.sName}`;
})

        // <!-- {
        //     "id": 7,
        //     "teamFullName": "Sunrises Hyderabad",
        //     "sName": "SRH",
        //     "fullSname":"SRH (Sunrises Hyderabad)" ,
        //     "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
        //     "WonCount": 1,
        // }, -->