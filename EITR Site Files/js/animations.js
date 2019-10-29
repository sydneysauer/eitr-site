

// Picture slideshow for members
let i = 0;
let names = ["jake", "pete", "seth", "matt", "alex"];
let roles = ["vocals", "bass", "guitar", "drums", "keys/vocals"]
let bios = ["Jake Conder currently works as a troll. He resides underneath the Olmsted Falls bridge waiting for squirrels, cats, and occasionally small dogs to walk over. Jake shares custody of his 2 daughters with his ex-wife, Nancy Reagan. Jake’s singing is said to induce panic in children as he sings at 85 dB and 17,400 hz.", "Peter Vandrasik, more commonly known as “The Pewt Nasty” has served 16 years in prison for slapping the president at his first bass recital. He has recently escaped andnfhtjrkmdmmnnnmnnnmn............", "Seth Bennett sold his soul to Abella Danger at the crossroads in the Mississippi Delta. This gave him the power in his hands. After 20 years of endless masturbating, he learned guitar.", "Matt Fox is the mastermind behind the beloved 2000s Nickelodeon TV Show, \"Catscratch\", his drumming is inspired by his anger at the failure of \“G-Force\” at the box office.", "Alexander Scalzo-Brown doesn’t exist, he also plays the piano."];

$(document).ready(function() {
	$("#rowMeetTheBand").click(function() {
		i+=1;
		$("#member-pic").css("background-image","url(\"img/" + names[i%names.length] + ".jpg\")");
		$("#member-name").text(names[i%names.length]);
		$("#member-role").text(roles[i%names.length]);
		$("#member-bio").text(bios[i%names.length]);
	});
});