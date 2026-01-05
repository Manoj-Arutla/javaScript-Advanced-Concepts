//Event Bubbling! --> by default the useCapture argument is set to false
//hence events are always bubbled up if the third argument is not set to true.

/*
document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log("grandParent clicked");
},false)

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log("Parent clicked");
},false)

document.querySelector('#child').addEventListener('click', ()=>{
    console.log("child clicked");
},false)
*/

//Event Capturing!
//here the third argument useCapture is set to true which triggers Event Capturing!

document.querySelector('#grandParent').addEventListener('click', ()=>{
    console.log("grandParent clicked");
},true)

document.querySelector('#parent').addEventListener('click', (e)=>{
    console.log("Parent clicked");
    e.stopPropagation()
},true)

document.querySelector('#child').addEventListener('click', ()=>{
    console.log("child clicked");
},false)

/*
here we can alternate the usecapture argument with true or false to change
the event propagation as desired

--> however the values are, the event capturing and event bubbling will take
place as if in a cyclic order.
--> first order is Event Capturing. all the true arguments get captured from 
top to bottom.
--> then Event bubbling starts to bubble of events with arguments false.

-->!!!Important!!!
we have event handler 'e' inside of the addEventListener's callback.
use 'e' to stop the events propagation

to stop event propagation, use:

--->  "e.stopPropagation()"
this will stop the events propagation no matter if it's the Event capturing or
Event bubbling!

*/