$(document).on("click", "#fault-card-1", function () {
    var faultType = $("#fault-1-type").text();
    var faultLocation = $("#fault-1-location").text();
    var faultTime = $("#fault-1-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-2", function () {
    var faultType = $("#fault-2-type").text();
    var faultLocation = $("#fault-2-location").text();
    var faultTime = $("#fault-2-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-3", function () {
    var faultType = $("#fault-3-type").text();
    var faultLocation = $("#fault-3-location").text();
    var faultTime = $("#fault-3-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-4", function () {
    var faultType = $("#fault-4-type").text();
    var faultLocation = $("#fault-4-location").text();
    var faultTime = $("#fault-4-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-5", function () {
    var faultType = $("#fault-5-type").text();
    var faultLocation = $("#fault-5-location").text();
    var faultTime = $("#fault-5-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-time").text(faultTime);
});

function hideIcon() {
    document.getElementById("exclamation-icon").style.display = 'none';
}

function hideMainIcon() {

    var selected_value = $('#status-dropdown').val();

    if(selected_value === null){
        alert('You have not made any changes.');
    }
    else if(selected_value === 'In-progress') {
        document.getElementById("fault-card-1").style.display = 'none';

        var inProgressCard = document.createElement("button");
        inProgressCard.className = 'fault-card';

        inProgressCard.innerHTML = "Test";

        var card = document.getElementById("fault-card-1");
      
        document.querySelector('.in-progress-jobs').appendChild(card);
        card.style.display = 'block';
        document.getElementById("main-icon").style.display = 'none';
    }
}