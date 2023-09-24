const guestArray = ["shaban", "fozia", "zobada", "shaista"];
const guestWhoCantMakeIt = "zobada"
console.log(`${guestWhoCantMakeIt}can't make it to the dinner.`)
const index = guestArray.indexOf(guestWhoCantMakeIt)
if
 (index !==-1){
const newguest= "ali"
guestArray[index]="ali" 
for(let i=0;i<2;i++){
    console.log(`Asslam o alikun,\n dear ${guestArray} ,I just here tha ${guestWhoCantMakeIt} can not make dinner. So, I'm inviting you to come and prepare this dinner. I would be very thankful for your collaboration and looking forward to your presence.\n\nBest regards.`)
 }
}else{
     console.log(`${guestWhoCantMakeIt}was not found in guest list.`)
}






















