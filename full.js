
var months = [31,28,31,30,31,30,31,31,30,31,30,31]; // months January-December

var leaps = [31,29,31,30,31,30,31,31,30,31,30,31]; // months January-December Special

function finalCountdown (target) {
	
	var numDay = target.getDate();
	
	var targetEpoch = target.getTime();
	
	var today = new Date();
	
	var todayEpoch = today.getTime();
	
	var difference = (targetEpoch - todayEpoch);
	
	var total = 0;
		
	var days = 0;
	
	var ho = today.getFullYear();
	
	var hum = target.getFullYear();

	var end = target.getMonth();
	
	var beg = today.getMonth();
	
	var monthsLeft = 0;
	
	var yearsLeft = 0;
	
	var counter = difference / (1000*60*60*24);

	
	if ( ho == hum ) {
		
		if ( (hum % 4) != 0 ){
			
			for (i=beg;i<=end;i++) {
				
				var total = days + months[i];
				
				days = total;
				
				}
				
				var total = Math.floor(total - ((months[target.getMonth()] - numDay ) + numDay) );
								
				if (Math.floor(difference / (1000*60*60*24)) >= total ) {
				
				var monthsLeft = end - beg;
				
				}
				
				else {
				
				var monthsLeft = end - beg - 1;
				
				total = total - months[today.getMonth()];
												
				}
				
			
		}
		
		else {
		
					
			for (i=beg;i<=end;i++) {
				
				var total = days + leaps[i];
				
				days = total;
				
				}
				
				var total = Math.floor(total - ((leaps[target.getMonth()] - numDay ) + numDay) );

				
				if (Math.floor(difference / (1000*60*60*24)) >= total ) {
				
				var monthsLeft = end - beg;
				
				}
				
				else {
				
				var monthsLeft = end - beg - 1;
				
				total = total - leaps[today.getMonth()];
												
				}
					
		
		}
	}
			
	else {
	
	var trueDays = Math.floor(difference / (1000*60*60*24));
	
	var adjust = 0;
		
		for ( i=(ho+1);i<=hum;i++) {
		
			if ( (i % 4) == 0 && counter >= 366 ) {
					
				var counter = counter - 366;
					
				yearsLeft = yearsLeft + 1;
				
				adjust = adjust + 366;
				
			}		
					
			else if ((i % 4) != 0 && counter >= 365 ) {
				
				var counter = counter - 365;
					
				yearsLeft = yearsLeft + 1;
				
				adjust = adjust + 365;
				
			}	

			else {
			
			var counter = counter;
			
			yearsLeft = yearsLeft;
			
			}
			
		}
		
		var trueDays = trueDays - adjust;
		
		if ( end > beg) {
		
			if ( (hum % 4) != 0 ){
			
				for (i=beg;i<=end;i++) {
				
					var total = days + months[i];
				
					days = total;
				
				}
					var total = Math.floor(total - ((months[target.getMonth()] - numDay ) + numDay) );

				
						if (trueDays >= total ) {
				
						var monthsLeft = end - beg;
				
						}
				
						else {
				
						var monthsLeft = end - beg - 1;
				
						total = total - months[today.getMonth()];
													
						}
				
			}
		
			else {
		
					
				for (i=beg;i<=end;i++) {
				
					var total = days + leaps[i];
				
					days = total;
				}
				
					var total = Math.floor(total - ((leaps[target.getMonth()] - numDay ) + numDay) );

				
						if (trueDays >= total ) {
				
						var monthsLeft = end - beg;
				
						}
				
						else {
					
						var monthsLeft = end - beg - 1;
				
						total = total - leaps[today.getMonth()];
												
						}
						
		
			}
		
		
		}	
		
		else { //for situations where the end month is "before" or equal to this month
		
			if ( (hum % 4) != 0 && ((hum - 1) % 4 != 0)){
			
				for (i=end;i<=beg;i++) {
				
					var total = days + months[i];
				
					days = total;
				
				}
					var total = Math.floor(total - ((months[target.getMonth()] - numDay ) + numDay) );				


					var total = 365 - total;
	
						if (trueDays >= total ) {
				
						var monthsLeft = (12 - beg) + end;
				
						}
				
						else {
				
						var monthsLeft = (12 - beg) + end - 1;
				
						total = total - months[today.getMonth()];
													
						}
						
				var total = total;
				
			}
			
			else {
		
					
				for (i=end;i<=beg;i++) {
				
					var total = days + leaps[i];
				
					days = total;
				}
					
					var total = Math.floor(total - ((leaps[target.getMonth()] - numDay ) + numDay) );
										
					var total = 366 - total;
							
						if (trueDays >= total ) {
				
						var monthsLeft = (12 - beg) + end;
				
						}
				
						else {
					
						var monthsLeft = (12 - beg) + end - 1;
				
						total = total - leaps[today.getMonth()];
												
						}
						
					var total = total;
						
			}
			
		}
	
	}

	var weeksLeft = 0;
		
	var daysLeft = 0;
	
	var hoursLeft = 0;
	
	var minutesLeft = 0;
	
	var secondsLeft = 0;
	
	var totalDays = counter;
	
		if ( monthsLeft >= 1) {
		
			var weeksLeft = Math.floor((totalDays - total) / 7);
			
			var daysLeft = Math.floor((totalDays - (total + (weeksLeft*7))));
			
			var hoursLeft = Math.floor((totalDays - (total + (weeksLeft*7) + daysLeft)) * 24);

			var minutesLeft= Math.floor((totalDays - (total + (weeksLeft*7) + daysLeft + (hoursLeft / 24))) * (24*60));

			var secondsLeft= Math.floor((totalDays - (total + (weeksLeft*7) + daysLeft + (hoursLeft / 24) + (minutesLeft / (24*60)))) * (24*60*60));
		
		}
		
		else{
		
					var weeksLeft = Math.floor(totalDays / 7);
							
					var daysLeft = Math.floor(totalDays - (weeksLeft*7));
							
					var hoursLeft = Math.floor(((totalDays - ((weeksLeft*7) + (daysLeft)))* 24));
							
					var minutesLeft= Math.floor((totalDays - ((weeksLeft*7) + (daysLeft) + (hoursLeft / 24))) * (24*60));
					
					var secondsLeft= Math.floor((totalDays - ((weeksLeft*7) + (daysLeft) + (hoursLeft / 24) + (minutesLeft / (24*60)))) * (24*60*60));

		}
		

var answer = [yearsLeft, monthsLeft, weeksLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft];

var yearAns = 0;
var monthAns = 0;
var weekAns = 0;
var dayAns = 0;
var hourAns = 0;
var minuteAns = 0;
var secondAns = 0;


	//years
	if (answer[0] == 0) {
	
		yearAns="";
		
		$('#shell').width(870);

		$('#timer').width(840);

		}
	else if ( answer[0] == 1) {
	
		yearAns = " 1 year";
		
		}
	else {
	
		yearAns = yearsLeft +  " " +  "years";
		
		}
		
	//months
	if (answer[1] == 0 && answer[0] == 0 ) {
		
		monthAns="";

		$('#shell').width(770);

		$('#timer').width(740);

		}
	else if ( answer[1] == 1) {
	
		monthAns = " 1 month";
		
		}
	else {
	
		monthAns = monthsLeft +  " " +  "months";
		
		}
		
	//weeks
	if (answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		weekAns=""; 

		$('#shell').width(670);

		$('#timer').width(640);
		
		}
	else if ( answer[2] == 1) {
	
		weekAns = " 1 week";
		
		}
	else {
	
		weekAns = weeksLeft +  " " +  "weeks";
		
		}
		
	//days
	if (answer[3] == 0 && answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		dayAns=""; 

		$('#shell').width(570);

		$('#timer').width(540);
		
		}
	else if ( answer[3] == 1) {
	
		dayAns = " 1 day";
		
		}
	else {
	
		dayAns = daysLeft +  " " +  "days";
		
		}
		
	//hours
	if (answer[4] == 0 && answer[3] == 0 && answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		hourAns=""; 

		$('#shell').width(470);

		$('#timer').width(440);
		
		}
	else if ( answer[4] == 1) {
	
		hourAns = " 1 hour";
		
		}
	else {
	
		hourAns = hoursLeft +  " " +  "hours";
		
		}
		
	//minutes
	if (answer[5] == 0 && answer[4] == 0 && answer[3] == 0 && answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		minuteAns=""; 

		$('#shell').width(370);

		$('#timer').width(340);
		
		}
	else if ( answer[5] == 1) {
	
		minuteAns = " 1 minute";
		
		}
	else {
	
		minuteAns = minutesLeft +  " " +  "minutes";
		
		}
		
	//seconds
	if (answer[6] == 0 && answer[5] == 0 && answer[4] == 0 && answer[3] == 0 && answer[2] == 0 && answer[1] == 0 && answer[0] == 0 ) {
		
		secondAns="All your hardwork and patience has paid off. Welcome to Olin my friends."; 

		$('#shell').width(1020);

		$('#timer').width(990);
		
		}
	else if ( answer[6] == 1) {
	
		secondAns = " 1 second";
		
		}

	else {
	
		secondAns = secondsLeft +  " " +  "seconds";
		
		}
		
	if ( answer[6] < 0 || answer[5] < 0 || answer[4] < 0 || answer[3] < 0 || answer[2] < 0 || answer[1] < 0 || answer[0] < 0  ) {

	
		$('#shell').width(1130);

		$('#timer').width(1100);
		
	var end = "All your hardwork and patience has paid off. Welcome to Olin my friends.";
	
	}
	else {
	
	var end = yearAns + " " + monthAns + " " + weekAns + " " + dayAns + " " + hourAns + " " + minuteAns + " " + secondAns;
		
		}
 		

	
	$("#timer").html(end);
	
	
}
