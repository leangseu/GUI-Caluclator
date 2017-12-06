$(function() {
  $("#tabs").tabs();
});

$(function() {
  $("#arithmetic-tabs").tabs();
});

// Addition Section Functions
$(function(){
  //Function to add more input fields
  $("#addition #add_more_inputs").click(function() {
    var num_inputs = $("#addition-form div").length + 1;
    $("#addition-form").append(
      '<div class="form-group"><label for="input-'+num_inputs+'">Input no. '+num_inputs+'</label><input type="number" id="input-'+num_inputs+'" name="input-'+num_inputs+'" class="form-control" placeholder="5" required></div>'
    );
  });

  //Function to delete input fields
  $("#addition #delete-input").click(function(){
    var num_inputs = $("#addition-form div").length;
    if(num_inputs > 2)
      $('#addition-form div:last').fadeOut(300, function() { $(this).remove(); });
  });

  //Validation for the addition form
  $("#addition-form").validate({
    errorClass: "error"
  });

  //Submition function for addition form
  $("#addition-form").submit(function(event){
    event.preventDefault();
    if($("#addition-form").valid()) {
      var addition_values = [];
      var answer = 0;
      var inputNumber = 0;
      $("#addition-form input[type=number]").each(function(){
        inputNumber = parseInt($(this).val());
        answer += inputNumber;
        addition_values.push(inputNumber);
      });
      var leftSide = addition_values.toString();
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      $("#addition-answers-div").append('<p>'+fullAnswer+'</p>');
    }
  });
});

// Subtraction Section Functions
$(function(){

  //Function to add more input fields
  $("#subtraction #add_more_inputs").click(function() {
    var num_inputs = $("#subtraction-form div").length + 1;
    $("#subtraction-form").append(
      '<div class="form-group"><label for="input-'+num_inputs+'">Input no. '+num_inputs+'</label><input type="number" id="input-'+num_inputs+'" name="input-'+num_inputs+'" class="form-control" placeholder="5" required></div>'
    );
  });

  //Function to delete input fields
  $("#subtraction #delete-input").click(function(){
    var num_inputs = $("#subtraction-form div").length;
    if(num_inputs > 2)
      $('#subtraction-form div:last').fadeOut(300, function() { $(this).remove(); });
  });

  //Validation for the addition form
  $("#subtraction-form").validate({
    errorClass: "error"
  });

  //Submition function for addition form
  $("#subtraction-form").submit(function(event){
    event.preventDefault();
    if($("#subtraction-form").valid()) {
      var subtraction_values = [];
      var answer = 0;
      var inputNumber = 0;
      $("#subtraction-form input[type=number]").each(function(){
        inputNumber = parseInt($(this).val());
        if(subtraction_values.length < 1) {
          answer = inputNumber;
        }
        else {
          answer -= inputNumber;
        }
        subtraction_values.push(inputNumber);
      });
      var leftSide = subtraction_values.toString();
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      $("#subtraction-answers-div").append('<p>'+fullAnswer+'</p>');
    }
  });
});

// Multiplication Section Functions
$(function(){
  
  //Function to add more input fields
  $("#multiplication #add_more_inputs").click(function() {
    var num_inputs = $("#multiplication-form div").length + 1;
    $("#multiplication-form").append(
      '<div class="form-group"><label for="input-'+num_inputs+'">Input no. '+num_inputs+'</label><input type="number" id="input-'+num_inputs+'" name="input-'+num_inputs+'" class="form-control" placeholder="5" required></div>'
    );
  });

  //Function to delete input fields
  $("#multiplication #delete-input").click(function(){
    var num_inputs = $("#multiplication-form div").length;
    if(num_inputs > 2)
      $('#multiplication-form div:last').fadeOut(300, function() { $(this).remove(); });
  });

  //Validation for the addition form
  $("#multiplication-form").validate({
    errorClass: "error"
  });

  //Submition function for addition form
  $("#multiplication-form").submit(function(event){
    event.preventDefault();
    if($("#multiplication-form").valid()) {
      var multiplication_values = [];
      var answer = 0;
      var inputNumber = 0;
      $("#multiplication-form input[type=number]").each(function(){
        inputNumber = parseInt($(this).val());
        if(multiplication_values.length < 1) {
          answer = inputNumber;
        }
        else {
          answer *= inputNumber;
        }
        multiplication_values.push(inputNumber);
      });
      var leftSide = multiplication_values.toString();
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      $("#multiplication-answers-div").append('<p>'+fullAnswer+'</p>');
    }
  });
});

// Division Section Functions
$(function(){
  
  //Function to add more input fields
  $("#division #add_more_inputs").click(function() {
    var num_inputs = $("#division-form div").length + 1;
    $("#division-form").append(
      '<div class="form-group"><label for="input-'+num_inputs+'">Input no. '+num_inputs+'</label><input type="number" id="input-'+num_inputs+'" name="input-'+num_inputs+'" class="form-control" placeholder="5" required></div>'
    );
  });

  //Function to delete input fields
  $("#division #delete-input").click(function(){
    var num_inputs = $("#division-form div").length;
    if(num_inputs > 2)
      $('#division-form div:last').fadeOut(300, function() { $(this).remove(); });
  });

  //Validation for the addition form
  $("#division-form").validate({
    errorClass: "error"
  });

  //Submition function for addition form
  $("#division-form").submit(function(event){
    event.preventDefault();
    if($("#division-form").valid()) {
      var division_values = [];
      var answer = 0;
      var inputNumber = 0;
      $("#division-form input[type=number]").each(function(){
        inputNumber = parseInt($(this).val());
        if(division_values.length < 1) {
          answer = inputNumber;
        }
        else {
          answer /= inputNumber;
        }
        division_values.push(inputNumber);
      });
      var leftSide = division_values.toString();
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      $("#division-answers-div").append('<p>'+fullAnswer+'</p>');
    }
  });
});