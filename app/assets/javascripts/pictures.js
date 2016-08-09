$(document).ready(function(){
  // disable auto discover
  
 if ($('#new_picture').length) {
  Dropzone.autoDiscover = false;
  var dropzone = new Dropzone ("#new_picture", {
    maxFilesize: 256, // Set the maximum file size to 256 MB
    paramName: "picture[image]", // Rails expects the file upload to be something like model[field_name]
    addRemoveLinks: false // Don't show remove links on dropzone itself.
  }); 

  dropzone.on("success", function(file) {
    this.removeFile(file)
    $.getScript("/pictures")
  })
}
});