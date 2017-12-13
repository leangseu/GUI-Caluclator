/**
*  Names: 
*   Salem Shaheen, Salem_Shaheen@student.uml.edu
*   Leang Seu, Lang_Seu@student.uml.edu
*   Rushabh Doshi, Rushabh_Doshi@student.uml.edu
*  COMP.4160 GUI I
*  Final Project
*/

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
        inputNumber = parseFloat($(this).val());
        answer += inputNumber;
        addition_values.push(inputNumber);
      });
      var leftSide = addition_values.join(" + ");
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      document.getElementById("addition-answers-div").innerHTML = "";      
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

  //Validation for the subtraction form
  $("#subtraction-form").validate({
    errorClass: "error"
  });

  //Submition function for subtraction form
  $("#subtraction-form").submit(function(event){
    event.preventDefault();
    if($("#subtraction-form").valid()) {
      var subtraction_values = [];
      var answer = 0;
      var inputNumber = 0;
      $("#subtraction-form input[type=number]").each(function(){
        inputNumber = parseFloat($(this).val());
        if(subtraction_values.length < 1) {
          answer = inputNumber;
        }
        else {
          answer -= inputNumber;
        }
        subtraction_values.push(inputNumber);
      });
      var leftSide = subtraction_values.join(" - ");
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      document.getElementById("subtraction-answers-div").innerHTML = "";
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
        inputNumber = parseFloat($(this).val());
        if(multiplication_values.length < 1) {
          answer = inputNumber;
        }
        else {
          answer *= inputNumber;
        }
        multiplication_values.push(inputNumber);
      });
      var leftSide = multiplication_values.join(" * ");
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      document.getElementById("multiplication-answers-div").innerHTML = "";
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
        inputNumber = parseFloat($(this).val());
        if(division_values.length < 1) {
          answer = inputNumber;
        }
        else if(inputNumber != 0) {
          answer /= inputNumber;
        }
        if(inputNumber == 0) {
          answer = "Divide by 0 error. Please check your inputs."
        }
        division_values.push(inputNumber);
      });
      var leftSide = division_values.join(" / ");
      var rightSide =  " = " + answer.toString();
      var fullAnswer = leftSide + rightSide;
      document.getElementById("division-answers-div").innerHTML = "";
      $("#division-answers-div").append('<p>'+fullAnswer+'</p>');
    }
  });
});

// Linear Algebra tabs
$(function(){
  $("#linear-algebra-tabs").tabs();
});

// Scalar Multiplication
// calculations and output
$(function(){
  $("#scalar-mult-form").submit(function(event){
    event.preventDefault();
    if($("#scalar-mult-form").valid()) {
      var matrix = new Array(3);
      var scalar = 0;
      for(i = 0; i < 3; i++) {
        matrix[i] = new Array(3);
      }
      scalar = parseFloat($("#scalar-input").val());
      for(x = 0; x < 3; x++) {
        for(y = 0; y < 3; y++) {
          matrix[x][y] = scalar * parseFloat($("#scalmult" + x + y).val());
        }
      }
      var output_table = document.createElement("TABLE");
      var row1 = document.createElement("TR");
      var row2 = document.createElement("TR");
      var row3 = document.createElement("TR");
      var rows = []
      rows.push(row1);
      rows.push(row2);
      rows.push(row3);
      for(i = 0; i < 3; i++) {
        var r = rows[i];
        for(j = 0; j < 3; j++) {
          var num = document.createTextNode(matrix[i][j])
          var rdata = document.createElement("TD");
          rdata.appendChild(num);
          r.appendChild(rdata);
        }
        output_table.appendChild(r);
      }
      document.getElementById("scalar-mult-output").innerHTML = "";
      $("#scalar-mult-output").append(output_table);
      $("#scalar-mult-output").append('<br/><br/>');
    }
  });
});

// Matrix Transpose 
// calculations and output
$(function(){
  $("#transpose-form").submit(function(event){
    event.preventDefault();
    if($("#transpose-form").valid()) {
      var transposed_matrix = new Array(3);
      for(i = 0; i < 3; i++) {
        transposed_matrix[i] = new Array(3);
      }
      for(j = 0; j < 3; j++) {
        for(k = 0; k < 3; k++) {
          transposed_matrix[j][k] = $("#trans" + k + j).val();
        }
      }
      var output_table = document.createElement("TABLE");
      var row1 = document.createElement("TR");
      var row2 = document.createElement("TR");
      var row3 = document.createElement("TR");
      var rows = []
      rows.push(row1);
      rows.push(row2);
      rows.push(row3);
      for(i = 0; i < 3; i++) {
        var r = rows[i];
        for(j = 0; j < 3; j++) {
          var num = document.createTextNode(transposed_matrix[i][j])
          var rdata = document.createElement("TD");
          rdata.appendChild(num);
          r.appendChild(rdata);
        }
        output_table.appendChild(r);
      }
      document.getElementById("trans-output-div").innerHTML = "";
      $("#trans-output-div").append(output_table);
      $("#trans-output-div").append('<br/><br/>');
    }
  })
});

// Matrix Addition
$(function(){
  $("#matadd-form").submit(function(event){
    event.preventDefault();
    if($("#matadd-form").valid()){
      var matrix_A = new Array(3);
      for(i = 0; i < 3; i++) {
        matrix_A[i] = new Array(3);
      }
      var matrix_B = new Array(3);
      for(i = 0; i < 3; i++) {
        matrix_B[i] = new Array(3);
      }
      for(j = 0; j < 3; j++) {
        for(k = 0; k < 3; k++) {
          matrix_A[j][k] = parseFloat($("#addA" + j + k).val());
        }
      }
      for(j = 0; j < 3; j++) {
        for(k = 0; k < 3; k++) {
          matrix_B[j][k] = parseFloat($("#addB" + j + k).val());
        }
      }
      var output_table = document.createElement("TABLE");
      var row1 = document.createElement("TR");
      var row2 = document.createElement("TR");
      var row3 = document.createElement("TR");
      var rows = []
      rows.push(row1);
      rows.push(row2);
      rows.push(row3);
      for(i = 0; i < 3; i++) {
        var r = rows[i];
        for(j = 0; j < 3; j++) {
          var val = parseFloat(matrix_A[i][j]) + parseFloat(matrix_B[i][j])
          var num = document.createTextNode(val);
          var rdata = document.createElement("TD");
          rdata.appendChild(num);
          r.appendChild(rdata);
        }
        output_table.appendChild(r);
      }
      document.getElementById("madd-output-div").innerHTML = "";
      $("#madd-output-div").append(output_table);
      $("#madd-output-div").append('<br/><br/>');
    }
  });
});

// Matrix Multipliction
$(function(){
  $("#mmult-form").submit(function(event){
    event.preventDefault();
    if($("#mmult-form").valid()) {
      elements = new Array(6);
      var matrix_A = new Array(3);
      for(i = 0; i < 3; i++) {
        matrix_A[i] = new Array(3);
      }
      var matrix_B = new Array(3);
      for(i = 0; i < 3; i++) {
        matrix_B[i] = new Array(3);
      }
      var resultMatrix = new Array(3);
      for(i = 0; i < 3; i++) {
        resultMatrix[i] = new Array(3);
      }
      for(j = 0; j < 3; j++) {
        for(k = 0; k < 3; k++) {
          matrix_A[j][k] = parseFloat($("#multA" + j + k).val());
        }
      }
      for(j = 0; j < 3; j++) {
        for(k = 0; k < 3; k++) {
          matrix_B[j][k] = parseFloat($("#multB" + j + k).val());
        }
      }
      matrix_B_transpose = matrix_transpose(matrix_B);
      for(j = 0; j < 3; j++) {
        for(k = 0; k < 3; k++) {
          resultMatrix[j][k] = dot_product(matrix_A[j], matrix_B_transpose[k]);
        }
      }
      var output_table = document.createElement("TABLE");
      var row1 = document.createElement("TR");
      var row2 = document.createElement("TR");
      var row3 = document.createElement("TR");
      var rows = []
      rows.push(row1);
      rows.push(row2);
      rows.push(row3);
      for(i = 0; i < 3; i++) {
        var r = rows[i];
        for(j = 0; j < 3; j++) {
          var val = parseFloat(resultMatrix[i][j]);
          var num = document.createTextNode(val);
          var rdata = document.createElement("TD");
          rdata.appendChild(num);
          r.appendChild(rdata);
        }
        output_table.appendChild(r);
      }
      document.getElementById("mmult-output-div").innerHTML = "";
      $("#mmult-output-div").append(output_table);
      $("#mmult-output-div").append('<br/><br/>');
    }
  });
});

// Dot Product
$(function(){
  $("#dot-product-input").submit(function(event){
    event.preventDefault();
    if($("#dot-product-input").valid()){
      var vector_x = new Array(3);
      var vector_y = new Array(3);
      for(i = 0; i < 3; i++) {
        vector_x[i] = $("#v1" + i).val();
        vector_y[i] = $("#v2" + i).val();
      }
      var answer = 0;
      for(i = 0; i < 3; i++) {
        answer += (vector_x[i] * vector_y[i]);
      }
      document.getElementById("dot-product-result").innerHTML = "";
      document.getElementById("dot-product-result").append('The dot product of the two vectors [' + vector_x.toString() + '] and [' + vector_y.toString() + '] is ' + answer);
    }
  });
});

function dot_product(vector_x, vector_y) {
  var answer = 0;
  for(i = 0; i < 3; i++) {
    answer += (vector_x[i] * vector_y[i]);
  }
  return answer;
}

function matrix_transpose(matrix) {
  transposed_matrix = new Array(3);
  for(i = 0; i < 3; i++) {
    transposed_matrix[i] = new Array(3);
  }
  for(j = 0; j < 3; j++) {
    for(k = 0; k < 3; k++) {
      transposed_matrix[j][k] = matrix[k][j];
    }
  }
  return transposed_matrix;
}