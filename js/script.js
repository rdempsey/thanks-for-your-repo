/* Author: Robert Dempsey

*/

// pre-submit callback 
function showRequest(formData, jqForm, options) { 
  // formData is an array; here we use $.param to convert it to a string to display it 
  // but the form plugin does this for you automatically when it submits the data 
  var queryString = $.param(formData); 

  // Split the query string to get the individual values
  var vars = queryString.split("&");
  var gru = vars[0];
  var th = vars[1];

  // Get the value for the Github repo
  var gru_vars = gru.split("=")
  var githubRepoUrl = gru_vars[1]

  // Get the value for the Twitter handle
  var th_vars = th.split("=")
  var twitterHandle = th_vars[1]

  //Show an alert with the Twitter image link
  alert("Here's the code you want to put into your README: \n\n" +
      "<a href=\"http://twitter.com/home/?status=Thanks @" + twitterHandle + " for " + githubRepoUrl + "\"><img src=\"http://placehold.it/100x50\" alt=\"Say Thanks\" /></a>"
  ); 

  // here we could return false to prevent the form from being submitted; 
  // returning anything other than false will allow the form submit to continue 
  return false; 
}