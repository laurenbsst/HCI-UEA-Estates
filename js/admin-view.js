function hideTechnicianIcon() {
    document.getElementById("exclamation-icon-1").style.display = 'none';
}
function hidePriorityIcon() {
    document.getElementById("exclamation-icon-2").style.display = 'none';
}

function hideMainIcon() {

    var selected_technician = $('#technician-dropdown').val();
    var selected_priority = $('#priority-dropdown').val();

    if(selected_technician === null & selected_priority === null){
        alert('You have not made any changes!');
    }
    else if(selected_technician === null){
        alert('Please select a technician.')
    }
    else if(selected_priority === null){
        alert('Please select a priority.')
    }
    else {
        document.getElementById("fault-card-1").style.display = 'none';

        var card = document.getElementById("fault-card-1");
        var modal = document.getElementById("fault-card-modal");
        var subtitle = document.getElementById("unaddressed-faults");

        document.querySelector('.faults-with-technician').appendChild(card);
        subtitle.innerHTML = "5 unaddressed faults";
        card.style.display = 'block';
        document.getElementById("main-icon").style.display = 'none';
        $(modal).modal('hide');
    }
}
$(document).on("click", "#fault-card-1", function () {
    var faultType = $("#fault-1-type").text();
    var faultLocation = $("#fault-1-location").text();
    var faultInfo = $("#fault-1-additional-info").text();
    var faultTime = $("#fault-1-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-2", function () {
    var faultType = $("#fault-2-type").text();
    var faultLocation = $("#fault-2-location").text();
    var faultInfo = $("#fault-2-additional-info").text();
    var faultTime = $("#fault-2-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-3", function () {
    var faultType = $("#fault-3-type").text();
    var faultLocation = $("#fault-3-location").text();
    var faultInfo = $("#fault-3-additional-info").text();
    var faultTime = $("#fault-3-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-4", function () {
    var faultType = $("#fault-4-type").text();
    var faultLocation = $("#fault-4-location").text();
    var faultInfo = $("#fault-4-additional-info").text();
    var faultTime = $("#fault-4-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-5", function () {
    var faultType = $("#fault-5-type").text();
    var faultLocation = $("#fault-5-location").text();
    var faultInfo = $("#fault-5-additional-info").text();
    var faultTime = $("#fault-5-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-6", function () {
    var faultType = $("#fault-6-type").text();
    var faultLocation = $("#fault-6-location").text();
    var faultInfo = $("#fault-6-additional-info").text();
    var faultTime = $("#fault-6-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-7", function () {
    var faultType = $("#fault-7-type").text();
    var faultLocation = $("#fault-7-location").text();
    var faultInfo = $("#fault-7-additional-info").text();
    var faultTime = $("#fault-7-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-8", function () {
    var faultType = $("#fault-8-type").text();
    var faultLocation = $("#fault-8-location").text();
    var faultInfo = $("#fault-8-additional-info").text();
    var faultTime = $("#fault-8-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});
$(document).on("click", "#fault-card-9", function () {
    var faultType = $("#fault-9-type").text();
    var faultLocation = $("#fault-9-location").text();
    var faultInfo = $("#fault-9-additional-info").text();
    var faultTime = $("#fault-9-time").text();
    $("#modal-card-title").text(faultType);
    $("#modal-fault-location").text(faultLocation);
    $("#modal-fault-additional-info").text(faultInfo);
    $("#modal-fault-time").text(faultTime);
});