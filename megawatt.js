var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

var mgw = 62;
var forgen = 62;
var figen = 124

while(currentGen <= 4){
  totalMW = mgw;
  console.log("Generator #" + currentGen + " is on, adding " + forgen + " MW," + " for a total of " + totalMW + " MW!");
	currentGen++;
  mgw +=forgen;
}

for(var newcurrent = currentGen + 0;	newcurrent <= totalGen;	newcurrent++){
  totalMW +=figen;
	console.log("Generator #" + newcurrent + " is on, adding " + figen + " MW," + " for a total of " + totalMW + " MW!");
}

