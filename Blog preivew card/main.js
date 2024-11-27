// Get modal element
var modal = document.getElementById("contactModal");

// Get the button to close the modal
var closeDialogBtn = document.getElementById("closeDialogBtn");

// Display the modal when the page loads
window.onload = function() {
  modal.style.display = "flex";  // Show the modal
}

// When the user clicks on <span> (x), close the modal
closeDialogBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
