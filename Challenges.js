
//document.querySelector('#score-0').textContent=dice;
/*
var element = document.querySelector("#current-0")
if (element) {
    element.innerHTML = dice
}
document.querySelector('#score-0').innerHTML='<em>'dice'<em>';
*/

/* how to moodify css*/
/*document.querySelector('.dice').style.display='none';
var activeplayer=0;
var value=0;
var score1=document.getElementById('score-0');
var score2=document.getElementById('score-1');
 var current1= document.getElementById('current-0');
var current2=document.getElementById('current-1');
//var score=document.getElementById('score-'+activeplayer);
//var scorenumber=parseInt(score.textContent,10);
var scorenumber;
scorenumber=[0,0];
//var scorenumber2=0;

score1.textContent=0;
score2.textContent=0;
current1.textContent=0;
current2.textContent=0;
var dicedom=document.querySelector('.dice');
var isEnter=document.querySelector('.winningScore');*/
//.required=true;
//if(isEnter.value===""){
//document.querySelector('.btn-roll').disabled=true;	

	
var last,activeplayer,value,score1,score2,scorenumber,dicedom,dicedom1,isEnter,dice,dice1;
	
//}
newgame();

document.querySelector('.btn-roll').disabled=false;
document.querySelector('.btn-roll').addEventListener("click",function(){
	//isEnter.required=true;

//var dice=0;
	if(isEnter.value===""){
		promptEnterScore();
	}
	
	
	
	
	else{
	
dice=Math.floor(Math.random(0,6)*6)+1;
dice1=Math.floor(Math.random(0,6)*6)+1;
	
	

	dicedom.style.display='block';	
	dicedom1.style.display='block';
	dicedom.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-"+dice+".png";
	dicedom1.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-"+dice1+".png";
		
		
	if(dice===6 && dice1===6){
		scorenumber[activeplayer]=0;
		document.getElementById('score-'+activeplayer).textContent=0;
		document.getElementById('current-'+activeplayer).textContent=0;	
		console.log("hii");
		nextplayer();
		}
	else if(dice!==1 && dice1!==1){
		value+=dice+dice1;
		document.getElementById('current-'+activeplayer).textContent=value;
		if(value>=isEnter.value){
	
winner();
}
	}
		
	else{
		
		
		//next player
		document.getElementById('score-'+activeplayer).textContent=0;
		document.getElementById('current-'+activeplayer).textContent=0;
		dicedom.style.display='block';
		dicedom1.style.display='block';
		//dicedom.style.display='none';
		scorenumber[activeplayer]=0;
		value=0
		nextplayer();
		//dicedom.style.display='none';
		//scorenumber[activeplayer]=0;
 
		//document.getElementById('score-'+activeplayer).textContent=0;
		
		//value=0;
				
	}
//last=dice;
} 
/*if(value>=isEnter.value){
	
winner();
}*/
}
													 


													 
													 
													 
													 
);



	
document.querySelector('.btn-hold').disabled=false;

document.querySelector('.btn-hold').addEventListener("click",function(){
	console.log(isEnter.value);
	
	if(isEnter.value===""){
		promptEnterScore();
	}
	else{
		errormesage();
	dicedom.style.display='none';
	dicedom1.style.display='none';
	
	/*if(activeplayer===0){
		scorenumber1+=value;
		document.getElementById('score-0').textContent=scorenumber1
	}
	else{
		scorenumber2+=value;
			document.getElementById('score-1').textContent=scorenumber2;
	}*/
	//console.log(value);
	scorenumber[activeplayer]+=value;
	//console.log("after"+value);
	//console.log(scorenumber[activeplayer]);
	
	document.querySelector('#score-' +activeplayer).textContent=scorenumber[activeplayer];
	console.log(document.getElementById('score-'+activeplayer).textContent);
	
	if(scorenumber[activeplayer]>=isEnter.value){
		
		/*var s="WINNER!";
		document.getElementById('score-'+activeplayer).textContent=s
		;
		//document.getElementById('score-'+activeplayer).style.fontSize="xx-large";
		document.getElementById('score-'+activeplayer).style.fontStyle="bold";
		document.getElementById('score-'+activeplayer).style.color="red";

		document.querySelector('.btn-hold').disabled=true;
		document.querySelector('.btn-roll').disabled=true;
		*/
		winner();
		
	}
	
	nextplayer();

	
	
}
});


function nextplayer(){
	
	//document.getElementById('current-'+activeplayer).textContent=0;
		//document.getElementById('score-'+activeplayer).textContent=0;
		
	
		if(activeplayer===0){
			document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');
			document.getElementById('current-'+activeplayer).textContent=0;
			//document.getElementById('score-'+activeplayer).textContent=0;
			activeplayer=1;
			document.querySelector('.player-1-panel').classList.add('active');
		
		}
		else if(activeplayer===1){
		document.querySelector('.player-1-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');
		    document.getElementById('current-'+activeplayer).textContent=0;
			//document.getElementById('score-'+activeplayer).textContent=0;
			activeplayer=0;
			document.querySelector('.player-0-panel').classList.add('active');
		
		}
	/*dicedom.style.display='none';
	dicedom1.style.display='none';*/
	
	value=0;
	
	
	
}

//button class="btn-new"
document.querySelector('.btn-new').addEventListener("click",function(){
	newgame();
	isEnter.value="";
	
	
	
});

function newgame(){
	
document.querySelector('.dice').style.display='none';
document.querySelector('.dice2').style.display='none';	
 activeplayer=0;
 value=0;
 score1=document.getElementById('score-0');
 score2=document.getElementById('score-1');
 var current1= document.getElementById('current-0');
var current2=document.getElementById('current-1');
//var score=document.getElementById('score-'+activeplayer);
//var scorenumber=parseInt(score.textContent,10);
//var scorenumber;
scorenumber=[0,0];
//var scorenumber2=0;

score1.textContent=0;
score2.textContent=0;
current1.textContent=0;
current2.textContent=0;
 dicedom=document.querySelector('.dice');
 dicedom1=document.querySelector('.dice2');
 isEnter=document.querySelector('.winningScore');
		document.querySelector('.btn-hold').disabled=false;
		document.querySelector('.btn-roll').disabled=false;
	
	
	
}

function promptEnterScore(){
	alert("Please enter winning score");
	
	
}
function errormesage(){
	if(isEnter.value===0){
	isEnter.value="this is invalid name";
	}
	
}

function winner(){
	document.getElementById('score-'+activeplayer).textContent="Winner!";
	  document.getElementById('score-'+activeplayer).style.fontStyle="bold";
		document.getElementById('score-'+activeplayer).style.color="red";

		document.querySelector('.btn-hold').disabled=true;
		document.querySelector('.btn-roll').disabled=true;
}

/*
document.getElementById('current-'+activeplayer).textContent=0;
		document.getElementById('score-'+activeplayer).textContent=0;
		
	
		if(activeplayer===0){
			document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');
			activeplayer=1;
			document.querySelector('.player-1-panel').classList.add('active');
			
		}
		else if(activeplayer===1){
		document.querySelector('.player-1-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');
			activeplayer=0;
			document.querySelector('.player-0-panel').classList.add('active');
		}





*/
