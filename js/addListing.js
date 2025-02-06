
$(document).ready(function() {
    $('#categorySelect').select2({
        placeholder: "Choose Category",
        allowClear: true, 
        dropdownAutoWidth: true, 
        width: '100%', 
    });
});




function triggerUpload(index) {
    document.querySelectorAll(".file-input")[index].click();
}

function previewImage(event, index) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let uploadBox = document.querySelectorAll(".upload-box")[index];
            uploadBox.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    }
}
