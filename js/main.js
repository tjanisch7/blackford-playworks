var juniorCoaches = [
	{
		name: "Carly",
		bio: "My name is Carly, and i'm in the 4th grade! I love being a junior coach. One of my favorite games to play during recess is 4-square. I also love help putting away all of the balls because I like to make sure things don't get lost!"
	},
	{
		name: "Mikey",
		bio: "Hi, i'm Mikey. Some of my favorite games to play at recess are kickball, wall-ball, 4-square, and tag. One of the things I love about junior coaching is being able to help teach kids new games that they have never played before."
	},
	{
		name: "Neyat",
		bio: "I'm Neyat! I love being a junior coach. This is my second year being one, and one of the things I love about it is that it allows me to play with so many different people and make new friends. Games I love to play are 4-square, kickball, tag, and basketball."
	}
];

function juniorCarly() {
	document.getElementById('junior1').textContent = juniorCoaches[0].name;
	document.getElementById('info1').textContent = juniorCoaches[0].bio;
}

function juniorMikey() {
	document.getElementById('junior2').textContent = juniorCoaches[1].name;
	document.getElementById('info2').textContent = juniorCoaches[1].bio;
}

function juniorNeyat() {
	document.getElementById('junior3').textContent = juniorCoaches[2].name;
	document.getElementById('info3').textContent = juniorCoaches[2].bio;
}



