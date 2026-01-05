document.querySelector('#categories').addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
        // window.location.href = "/" + e.target.id
        console.log(e.target.id);
    }
    /* 
    this is a simple example of event delegation, here we have attached an
    onclick event on the unordered list insted of attaching events to each
    of those list items inside ul.

    by the concept of event bubbling, we know that the events bubble up when 
    triggered.

    by using 'e.target.id' of the events we can get the element on which the click event is
    triggred. then manupulate accordingly.

    below is a better use case of event delegation
    */
})

document.querySelector('#inputED').addEventListener('input', (e)=>{
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }

    if(e.target.dataset.lowercase != undefined){
        e.target.value = e.target.value.toLowerCase();
    }
})

/*
    Here, for each of the input fields we have an additional data attributes
    which will convert the input fields to uppercase and lowercase dynamically.

    tough we are using an "input Event" on the parent element which is div#inputED
    in this case. we can still manupulate child elements using 'e'

    this is Event Delegation.

    Pro's: 
    -->No need to write and attach individual events to each of the elements
    which saves memory and performace is not affected.
    
    -->less code

    --> DOM Manupulation

    Con's:
    --> There are events that are not bubbled up. like 'blur' Event
    --> cant use e.stopPropagation as it stops the event propafation of the next child
    elements
*/
