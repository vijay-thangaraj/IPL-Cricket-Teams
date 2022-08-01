// slider code
var counter = 1;
setinterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4) {
        counter = 1;
    }
},3000);

//slider code ends
//team and palyer data
var palyerdata= [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 2,
        "playerName": "Shubham Gill",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 3,
        "playerName": "Jayant Yadav",
        "from": "GT",
        "price": "2.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "1.30 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 5,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "15.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 6,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 7,
        "playerName": "Shahbaz Ahmed",
        "from": "RCB",
        "price": "1.00 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 8,
        "playerName": "Mohammad Siraj",
        "from": "RCB",
        "price": "5.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 9,
        "playerName": "Dinesh Karthik",
        "from": "RCB",
        "price": "3.00 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 10,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "16.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 12,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Mayank Markande",
        "from": "MI",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/4951.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 14,
        "playerName": "kieron Pollard",
        "from": "MI",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 15,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "14.00 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png',
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 16,
        "playerName": "Robin Uthappa",
        "from": "CSK",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png',
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 17,
        "playerName": "Dwayne Bravo",
        "from": "CSK",
        "price": "10.00Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png',
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 18,
        "playerName": "Shivam Dube",
        "from": "CSK",
        "price": "4.00 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png',
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 19,
        "playerName": "Ambati Rayudu",
        "from": "CSK",
        "price": "3.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png',
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 20,
        "playerName": "Rishabh Pant",
        "from": "Dc",
        "price": "14.00 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png',
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 21,
        "playerName": "Mandeep Singh",
        "from": "DC",
        "price": "4.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 22,
        "playerName": "Lalit Yadav",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 23,
        "playerName": "Prithvi shaw",
        "from": "DC",
        "price": "11.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 24,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 25,
        "playerName": "Karun Nair",
        "from": "RR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 26,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "4.00 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20620.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 27,
        "playerName": "Riyan Parag",
        "from": "RR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 28,
        "playerName": "Devdutt Paddikal",
        "from": "RR",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 29,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "16.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 30,
        "playerName": "Andree Russel",
        "from": "KKR",
        "price": "15.50 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 31,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 32,
        "playerName": "Ashok Sharma",
        "from": "KKR",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 33,
        "playerName": "Rinku Singh",
        "from": "KKR",
        "price": "11.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 34,
        "playerName": "Rahul Tripathi",
        "from": "SRH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 35,
        "playerName": "Ankul Sharma",
        "from": "SRH",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 36,
        "playerName": "Abdul Samad",
        "from": "SrH",
        "price": "6.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 37,
        "playerName": "Nicolas Pooran",
        "from": "SRH",
        "price": "3.00Cr",
        "isPlaying": false,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
        "playerTeam": "Sunrises Hyderabad"
    },
   

];

var teamdata = [
    {
        "id": 0,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname":"MI (Mumbai Indians)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "WonCount": 5,
    },
    {
        "id": 1,
        "teamFullName": "Chenai Super Kings",
        "sName": "CSK",
        "fullSname":"CSK (Chennai Super Kings)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/Logos/Roundbig/CSKroundbig.png",
        "WonCount": 4,
    },
    {
        "id": 2,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname":"RCB (Royal Challengers Bangalore)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 3,
        "teamFullName": "kolkata Knight Riders",
        "sName": "KKR",
        "fullSname":"KKR (Kolkata Knight Riders)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 4,
        "teamFullName": "Delhi Capitals",
        "sName": "DC",
        "fullSname":"DC (Delhi Capitals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 5,
        "teamFullName": "Gujarat Titans",
        "sName": "GT",
        "fullSname":"GT (Gujarat Titans)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "WonCount": 1,
    },
    {
        "id": 6,
        "teamFullName": "Rajasthan Royals",
        "sName": "RR",
        "fullSname":"RR (Rajasthan Royals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
        "WonCount": 1,
    },
    {
        "id": 7,
        "teamFullName": "Sunrises Hyderabad",
        "sName": "SRH",
        "fullSname":"SRH (Sunrises Hyderabad)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
        "WonCount": 2,
    },
];

var addteamclicked=()=>{
    window.open("./addTeam.html","_self")
}
var addPlayerClicked=()=>{
    window.open("./addPlayer.html","_self")
}

let detailofTeam = [];
    let detailOfPlayer = [];
    var teamGrid = document.getElementById("container_teams")
    
    if(localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamData));
    
    if(localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerData));

    detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
    detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));

   
    // search bar code goes here

    var suggestArray=[];
    for(var i=0;i<detailofTeam.length;i++){
        suggestArray.push(detailofTeam[i].sName)
        
    }
    let searchBar = document.querySelector(".search-input");
    let inputBox = searchBar.querySelector("input");
    let suggBox = searchBar.querySelector(".autocom-box");
    let icon = searchBar.querySelector(".icon");
    
    
    
    inputBox.onkeyup = (e)=>{
        if(e.keyCode==13){
            icon.click()
        }
        let userData = e.target.value; 
        let emptyArray = [];
        if(userData){
          
            emptyArray = suggestArray.filter((data)=>{
               
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data)=>{
               
                return data = `<li>${data}</li>`;
            });
            searchBar.classList.add("active"); 
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                
                allList[i].setAttribute("onclick", "currentLi(this)");
            }
        }else{
            searchBar.classList.remove("active");
        }
    }
    function currentLi(element){
        let selectData = element.textContent;
        inputBox.value = selectData;
        icon.onclick = ()=>{
       
            window.open(`./teams.html?name=${element.textContent}`,"_self")
        
        }
        searchBar.classList.remove("active");
    }
    function showSuggestions(list){
        let listData;
        if(!list.length){
            userValue = inputBox.value;
            listData = `<li>${userValue}</li>`;
        }else{
          listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }
    
    // search bar code ends here
    
    // grid cards for teams goes here
    
    var teamMainBox=document.getElementById("container_teams")
    for(var i=0;i<detailofTeam.length;i++){
    teamMainBox.innerHTML+=`
    <div    onclick="makethisinclick('${i}')"    class="minibox">
    <img src="${detailofTeam[i].teamIcon}" class="mainimage" alt=""/> 
    <div class="dataodcard">
      <p class="text1"> ${detailofTeam[i].teamFullName}   </p>
      <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
     
    </div>
    </div>
    `
    
    }
    
    function makethisinclick(res){
        var clickedCard=detailofTeam[res].sName
        
        window.open(`./teams.html?name=${clickedCard}`,"_self")
        
        
    }
    


    


    


                
    