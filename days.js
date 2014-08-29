function daysCountdown (target) {

	var targetEpoch = target.getTime();
	
	var today = new Date();
	
	var todayEpoch = today.getTime();
	
	var difference = (targetEpoch - todayEpoch);
	
	var totalDays = difference / (1000*60*60*24);

			var daysLeft = Math.floor(totalDays);
					
			var hoursLeft = Math.floor(((totalDays - daysLeft)* 24));
					
			var minutesLeft= Math.floor((totalDays - ((daysLeft) + (hoursLeft / 24))) * (24*60));
					
			var secondsLeft= Math.floor((totalDays - ((daysLeft) + (hoursLeft / 24) + (minutesLeft / (24*60)))) * (24*60*60));



var answer = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

var dayAns = 0;
var hourAns = 0;
var minuteAns = 0;
var secondAns = 0;


	//days
	if (answer[0] == 0 ) {
		
		dayAns=""; 

		$('#shell').width(570);

		$('#timer').width(540);
		
		}
	else if ( answer[0] == 1) {
	
		dayAns = " 1 day";
		
		}
	else {
	
		dayAns = daysLeft +  " " +  "days";
		
		}
		
	//hours
	if (answer[1] == 0 && answer[0] == 0 ) {
		
		hourAns=""; 

		$('#shell').width(470);

		$('#timer').width(440);
		
		}
	else if ( answer[1] == 1) {
	
		hourAns = " 1 hour";
		
		}
	else {
	
		hourAns = hoursLeft +  " " +  "hours";
		
		}
		
	//minutes
	if (answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		minuteAns=""; 

		$('#shell').width(370);

		$('#timer').width(340);
		
		}
	else if ( answer[2] == 1) {
	
		minuteAns = " 1 minute";
		
		}
	else {
	
		minuteAns = minutesLeft +  " " +  "minutes";
		
		}
		
	//seconds
	if (answer[3] == 0 && answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		secondAns="All your hardwork and patience has paid off. Welcome to Olin my friends."; 

		$('#shell').width(1020);

		$('#timer').width(990);
		
		}
	else if ( answer[3] == 1) {
	
		secondAns = " 1 second";
		
		}

	else {
	
		secondAns = secondsLeft +  " " +  "seconds";
		
		}
		
	if (answer[3] < 0 || answer[2] < 0 || answer[1] < 0 || answer[0] < 0  ) {
	
		$('#shell').width(1130);

		$('#timer').width(1100);
		
	var end = "All your hardwork and patience has paid off. Welcome to Olin my friends.";
	
	}
	else {
	
	var end = dayAns + " " + hourAns + " " + minuteAns + " " + secondAns;
		
		}
	
	$("#timer").html(end);
	
}
