var loop;        //loop counter
var random;        //holds random numbers
 
function make_array(size){
  this.length = size;
        for (a=0; a<size; a++) this[a]="";
}
 
function generator(){
        hold = new make_array(document.lottery.max_number.value);
        document.lottery.numbers.value = "";    //clear numbers box
        //now we need to generate some numbers------------------
        for(loop=0;loop<document.lottery.balls_drawn.value;loop++){
                random = Math.round(Math.random()*(document.lottery.max_number.value-1));
                random++;        //ie. number between 0+1 (=1) and max_value-1+1 (=max_value)
                if(hold[random]==1){
                        loop--;                //if number already chosen, go back one step in the loop
                        continue;                //and start again (so no duplicate numbers)
                }
                if(hold[random]!=1){
                        hold[random]=1;        //if not already flagged, then flag the number in the 'hold' list
                }
        } 
        //now we need to display the numbers----------------
        for(loop=0;loop<=document.lottery.max_number.value;loop++){
                if(hold[loop]==1)        //ie. if 'loop' is flagged
                document.lottery.numbers.value = document.lottery.numbers.value + loop + ", ";        //display on 'numbers' text field, seperated by commas
        }
}


var loop1;        
var random1;        
 
function make_array1(size){
  this.length = size;
        for (a=0; a<size; a++) this[a]="";
}
 
function generator1(){
        hold = new make_array(document.lottery.max_number2.value);
 
        document.lottery.numbers1.value = "";    
        for(loop1=0;loop1<document.lottery.balls_drawn2.value;loop1++){
                random1 = Math.round(Math.random()*(document.lottery.max_number2.value-1));
                random1++;       
 
                if(hold[random1]==1){
                        loop1--;                
                        continue;                
                }
                if(hold[random1]!=1){
                    hold[random1]=1;        
                }
        } 
        for(loop1=0;loop1<=document.lottery.max_number2.value;loop1++){
                if(hold[loop1]==1)       
                document.lottery.numbers1.value = document.lottery.numbers1.value + loop1 + ", ";       
        }
}

function clearField(){
    return 0;
}
