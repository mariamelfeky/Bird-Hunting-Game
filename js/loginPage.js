
 // Mariam Elfeky
 // save username in localStorage
$(function () {
  $(":submit").on("click", function () {
    userName = $(":text").val();
    localStorage.setItem("name",userName);
  })
})//load

