// notes
// I want to create a lottery number generator
// using the current crudd app they can input any numbers that they want
// this could also be a getter setter function
// would randomly assign the numbers

// need to use the assign mechanism to assign to particular divs

// othwrwise if no argument is set then run a random number generator.

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?


  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val('');
    $('.input-value').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  $('.container-data').on('click', '.display-data-item', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

  // creating a button for each of the squares ( whiteballs from 1 to 69 powerball goes to 29)
 var results = $("#results");
  results.click(function() {
    results.empty();
     var properResults = [];
    var rand = 0;
    var contains = false;
    for (i = 1; i < 2; i++) {
        do 
        {
         (rand = Math.floor((Math.random() * 69) + 1));
          contains = properResults.indexOf(rand) > -1;
        } while(contains)
        results.append("<br />", rand, "<br />");
        properResults.push(rand);
    }
    
  });


  var results2 = $("#results2");
  results2.click(function() {
    results2.empty();
     var properResults = [];
    var rand = 0;
    var contains = false;
    for (i = 1; i < 2; i++) {
        do 
        {
         (rand = Math.floor((Math.random() * 69) + 1));
          contains = properResults.indexOf(rand) > -1;
        } while(contains)
        results2.append("<br />", rand, "<br />");
        properResults.push(rand);
    }
    
  });
  
    var results3 = $("#results3");
  results3.click(function() {
    results3.empty();
     var properResults = [];
    var rand = 0;
    var contains = false;
    for (i = 1; i < 2; i++) {
        do 
        {
         (rand = Math.floor((Math.random() * 69) + 1));
          contains = properResults.indexOf(rand) > -1;
        } while(contains)
        results3.append("<br />", rand, "<br />");
        properResults.push(rand);
    }
    
  });
  
     var results4 = $("#results4");
  results4.click(function() {
    results4.empty();
     var properResults = [];
    var rand = 0;
    var contains = false;
    for (i = 1; i < 2; i++) {
        do 
        {
         (rand = Math.floor((Math.random() * 69) + 1));
          contains = properResults.indexOf(rand) > -1;
        } while(contains)
        results4.append("<br />", rand, "<br />");
        properResults.push(rand);
    }
    
  });
  
      var results5 = $("#results5");
  results5.click(function() {
    results5.empty();
     var properResults = [];
    var rand = 0;
    var contains = false;
    for (i = 1; i < 2; i++) {
        do 
        {
         (rand = Math.floor((Math.random() * 69) + 1));
          contains = properResults.indexOf(rand) > -1;
        } while(contains)
        results5.append("<br />", rand, "<br />");
        properResults.push(rand);
    }
    
  });

        var results6 = $("#results6");
  results6.click(function() {
    results6.empty();
     var properResults = [];
    var rand = 0;
    var contains = false;
    for (i = 1; i < 2; i++) {
        do 
        {
         (rand = Math.floor((Math.random() * 69) + 1));
          contains = properResults.indexOf(rand) > -1;
        } while(contains)
        results6.append("<br />", rand, "<br />");
        properResults.push(rand);
    }
    
  });

});