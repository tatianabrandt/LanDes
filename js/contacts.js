function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("form");
  y = x[0].getElementsByTagName("input");
  for (i = 0; i < y.length - 2; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid == true) {
    document.getElementById("feedbackForm").submit();
    return false;
  } else {
    return false;
  }
}
