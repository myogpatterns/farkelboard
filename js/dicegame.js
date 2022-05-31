/* dicegame.js by Tim Martino, 2013
version2.0, 2016
*/

function player(_name,_roll,_recent) {
	this.name=_name;
	this.rollScore=_roll;
	this.recentScore=_recent;
	this.totalScore=0;
	//this.pScores = [];
	this.addRecentScore = function (rollScore) {
		this.recentScore.push(rollScore);  //adds rollScore to end of array
		//console.log(player.name+ "'s recent score list is " + this.recentScore);
		
		this.totalScore += rollScore;  //adds rollScore to totalScore
		console.log(player.name + "'s totalscore is " + this.totalScore);		
	};		
}



var player1 = new player("player1",0,[0]);
var player2 = new player("player2",0,[0]);
var player3 = new player("player3",0,[0]);
var player4 = new player("player4",0,[0]);

var whosTurn = "";

var resetRollScore = function () {
	rollScore = 0;
	$("#currentscore").html("<h4>Score...</h4>"); //replaces cancelled rollscore with Roll!, resets rollscore	
};

$(document).ready( function() {
	
	/*$(".topmenu").click( function () {   //dropdown toggle for menu
		$('.dropdown-toggle').dropdown();
	});*/
	
	
	
	
	
	$("#player1").click( function () { //selects player 1
		$("#player1").css("border-bottom", "3px solid #1ABC9C");
		$("#player2").css("border-bottom", "1px solid #34495E");
		$("#player3").css("border-bottom", "1px solid #34495E");
		$("#player4").css("border-bottom", "1px solid #34495E");
		whosTurn = player1.name;
		resetRollScore();
	});	
	$("#player2").click( function () { //selects player 2
		$("#player1").css("border-bottom", "1px solid #34495E");
		$("#player2").css("border-bottom", "3px solid #1ABC9C");
		$("#player3").css("border-bottom", "1px solid #34495E");
		$("#player4").css("border-bottom", "1px solid #34495E");
		whosTurn = player2.name;
		resetRollScore();
	});
	$("#player3").click( function () { //selects player 3
		$("#player1").css("border-bottom", "1px solid #34495E");
		$("#player2").css("border-bottom", "1px solid #34495E");
		$("#player3").css("border-bottom", "3px solid #1ABC9C");
		$("#player4").css("border-bottom", "1px solid #34495E");
		whosTurn = player3.name;
		resetRollScore();
	});
	$("#player4").click( function () { //selects player 4
		$("#player1").css("border-bottom", "1px solid #34495E");
		$("#player2").css("border-bottom", "1px solid #34495E");
		$("#player3").css("border-bottom", "1px solid #34495E");
		$("#player4").css("border-bottom", "3px solid #1ABC9C");
		whosTurn = player4.name;
		resetRollScore();
	});
	
	
	//building calculator
	rollScore=0;
	
	$("input[type='button']").click(function() {
		
		switch(this.id) {
			case 'b50':
				rollScore+=50;
				break;
			case 'b100':
				rollScore+=100;
				break;
			case 'b300':
				rollScore+=300;
				break;
			case 'b1000':
				rollScore+=1000;
				break;
			case 'b1500':
				rollScore+=1500;
				break;
			}
	
		$("#currentscore").html("<h4>" + rollScore + "</h4>");	//replaces Roll! with rollScore
				
	}); //calculator
	
	$("#cancel").click( function (){
		resetRollScore();
	});
	
	$("#submit").click( function (){
		
		if (whosTurn === 'player1') {
			player1.addRecentScore(rollScore); //sends rollscore to player 1 object
			$("#player1 .totalscore").html("<h4>" + player1.totalScore + "</h4>"); //writes total score for player
			resetRollScore();
			for (i=2; i>=0; i--) {  //checks for last 3 inputs to player1.recentScore
				var scr = player1.recentScore.length-(i+1);
				if (scr>=0) {		//avoids undefined array index
					$("#player1 li#li"+i).html(player1.recentScore[scr]);  //writes last 3 scores
				}
			}
			
			} else if (whosTurn === 'player2') {
				player2.addRecentScore(rollScore);
				$("#player2 .totalscore").html("<h4>" + player2.totalScore + "</h4>");
				resetRollScore();
				for (i=2; i>=0; i--) {  //checks for last 3 inputs to player2.recentScore
					var scr2 = player2.recentScore.length-(i+1);
					if (scr2>=0) {		//avoids undefined array index
						$("#player2 li#li"+i).html(player2.recentScore[scr2]);  //writes last 3 scores
					}
				}
						
			} else if (whosTurn === 'player3') {
				player3.addRecentScore(rollScore);
				$("#player3 .totalscore").html("<h4>" + player3.totalScore + "</h4>");
				resetRollScore();
				for (i=2; i>=0; i--) {  //checks for last 3 inputs to player2.recentScore
					var scr3 = player3.recentScore.length-(i+1);
					if (scr3>=0) {		//avoids undefined array index
						$("#player3 li#li"+i).html(player3.recentScore[scr3]);  //writes last 3 scores
					}
				}
						
			} else if (whosTurn === 'player4') {
				player4.addRecentScore(rollScore);
				$("#player4 .totalscore").html("<h4>" + player4.totalScore + "</h4>");
				resetRollScore();
				for (i=2; i>=0; i--) {  //checks for last 3 inputs to player2.recentScore
					var scr4 = player4.recentScore.length-(i+1);
					if (scr4>=0) {		//avoids undefined array index
						$("#player4 li#li"+i).html(player4.recentScore[scr4]);  //writes last 3 scores
					}
				}
			}	else {
				alert("No player selected! Click a player before adding scores.");}
	});
});

