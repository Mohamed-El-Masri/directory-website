$(document).ready(function() {
    $('#categorySelect').select2({
        placeholder: "Choose Category",
        allowClear: true, 
        dropdownAutoWidth: true, 
        width: '100%', 
    });
});

$(document).ready(function() {
    $('#mostRelated').select2({
        placeholder: "Most Related",
        allowClear: true, 
        dropdownAutoWidth: true, 
        width: '70%', 
    });
});


document.querySelector('input[type="range"]').addEventListener('input', function(e) {
    document.getElementById('radius-value').textContent = e.target.value;
});

function changeSort(element) {
    document.getElementById("selectedSort").textContent = element.textContent;

    // إزالة التحديد السابق
    document.querySelectorAll(".dropdown-item").forEach(item => item.classList.remove("active"));
    
    // تحديد العنصر الحالي
    element.classList.add("active");
}
