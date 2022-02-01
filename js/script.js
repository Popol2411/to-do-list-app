function newItem() {    //function newItem will be activated with click on the "Add" button (id button)

  let li = $('<li></li>');    //list is defined as li
  let inputValue = $('#input').val();   //variable inputValue is defined by the val (value) function on the #input class
  li.append(inputValue); //the inputValue is added to the li (list of items)

  if (inputValue === '') {  //when the inputValue is empty,
    alert("Please add a list item"); //the alert will be displayed as a pop-up
  } else {
    $('#list').append(li);    //otherwise the li item will be added to the #list
  }

function crossOut() {   //function crossOut will change the li class to "strike" which in css will add the text-decoration "line through"
  li.toggleClass('strike');
}

  li.on('dblclick', function crossOut() {   //eventListner (li.on) double click will call the function crossOut and change back (toggle) the li class,
                                            //like a on/off switch for the strike class
    li.toggleClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');  //crossOutButton variable
  crossOutButton.append(document.createTextNode('X')); //the text "X" is created
  li.append(crossOutButton);    //and added to the li element


function deleteListItem() {   //deleteListItem function
  li.addClass('delete');      //adds the style class 'delete' (item is not visible anymore)
}

  crossOutButton.on('click', deleteListItem);   //on click on the crossOutButton the function deleteListItem is activated

  $('#list').sortable(); //list is sortable via mouse click

}
