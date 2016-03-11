$(document).ready(function() {

var index = window.location.pathname.split('/')[1];
$('nav li' + index).addClass('active');

});