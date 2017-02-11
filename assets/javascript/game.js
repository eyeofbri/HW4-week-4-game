var characters = [
	// upper row
	{ name: "Bobba Fett", planet: "Kamino", hp:150, ap:28, counter:45 },
	{ name: "Chewbacca", planet: "Kashyyyk", hp:160, ap:30, counter:48 },
	{ name: "Darth Sidious", planet: "Coruscant", hp:170, ap:32, counter:51 },
	{ name: "Darth Vader", planet: "Deathstar", hp:180, ap:34, counter:54 },
	// lower row
	{ name: "Luke Skywalker", planet: "Degobah", hp:110, ap:29, counter:33 },
	{ name: "Padme Amidala", planet: "Naboo", hp:120, ap:31, counter:36 },
	{ name: "Leia Organa", planet: "Alderaan", hp:130, ap:33, counter:39 },
	{ name: "Obi Wan", planet: "Tatooine", hp:140, ap:36, counter:42 }
];


$(document).ready(function() {
	
	adjustVisibleStats();

    $(".charCard").on("click", function() {
        // var rand = Math.floor((Math.random() * 1000) + 1);
        // $("#random-number").text(rand);

		var clickedName = $(this).attr("data-content");
        clickAI(clickedName);
    });

    
});


function clickAI(characterName){

    var select_H_classes = document.getElementById("characterSelect_H").classList;
    if (select_H_classes.contains("p1_Selector")) { 
    	//YOU ARE PLAYER ONE
    	$("#p1" ).find( "p" ).eq( 1 ).html(characterName);
    	shakeThings( "p1" );

    	//replace img
    	characterName = characterName.replace(/\s+/g, '');
    	var imgLink = "./assets/images/characters/"+characterName+".png";
    	$("#p1" ).find( "img" ).attr('src',imgLink);

    	//show confirm button
    	var confirmB_P1 = $("#p1" ).find( "#confirmButton" ).attr("class","");

    	confirmB_P1.on("click", function() {
	        console.log("Player1 Selected!");
	        player1_selected = true;
	        confirmB_P1.attr("class","hide");
      	});
    }
    if (select_H_classes.contains("p2_Selector")) {
    	//YOU ARE PLAYER TWO 
    	$("#p2" ).find( "p" ).eq( 1 ).html(characterName);
    	shakeThings( "p2" );

    	//replace img
    	characterName = characterName.replace(/\s+/g, '');
    	var imgLink = "./assets/images/characters/"+characterName+".png";
    	$("#p2" ).find( "img" ).attr('src',imgLink);
		
		var confirmB_p2 = $("#p2" ).find( "#confirmButton" ).attr("class","");
		confirmB_p2.on("click", function() {
	        console.log("Player2 Selected!");
	        player2_selected = true;
	        confirmB_P2.attr("class","hide");
      	});
    }
}


function adjustVisibleStats() {
	var cards = $(".charCard_inner");
	for (var i = 0; i < cards.length; i++) {
		$(".charCard_inner:eq("+i+")" ).children(".charStat_HP").html( characters[i].hp );
		$(".charCard_inner:eq("+i+")" ).children(".charStat_AP").html( characters[i].ap );
		$(".charCard_inner:eq("+i+")" ).children(".charStat_CAP").html( characters[i].counter );

		$(".charCard_inner:eq("+i+")" ).children(".charStat_HP").width( (characters[i].hp-80 +"%") );
		$(".charCard_inner:eq("+i+")" ).children(".charStat_AP").width( (characters[i].ap +"%") );
		$(".charCard_inner:eq("+i+")" ).children(".charStat_CAP").width( (characters[i].counter +"%") );

	}
}


//////////////////////////
// REUGLAR GAME FUCNTIONS
/////////////////////////


function shakeThings(el) {
    var thingToShake = document.getElementById(el);

    if(el =="p1" || el =="p2" ){
    	thingToShake = document.getElementById(el).children[1];
    	shakeThings(el + "_extra");
    }
    if(el =="p1_extra" || el =="p2_extra" ){
    	thingToShake = document.getElementById(el.substring(0,2)).children[0];
    }

    var elClasses = thingToShake.classList;
    if (elClasses.contains("shake")) { 
    	elClasses.remove("shake"); 
    }
	thingToShake.classList.add("shake");
	setTimeout(function(){ elClasses.remove("shake"); }, 500);
}