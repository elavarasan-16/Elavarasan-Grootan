var count = 0;
function getBotResponse(input) {
    //rock paper scissors
	count = count+1;
	if(count==1)
		return "Your Data of Birth";
	else if(count==2)
		return "Your Favourite food";
	else if(count==3)
		return "Your Nick name";
	else if(count==4)
		return "Your school name";
	else if(count==5)
		return "Your friend name";	
}