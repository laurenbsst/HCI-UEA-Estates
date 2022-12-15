function validateForm(){
    var typeOfFaultField = document.getElementById('type-of-fault');
    var otherFaultTypeInput = document.getElementById('other-fault');

    if(typeOfFaultField.value === 'Other'){
        if(otherFaultTypeInput.value === ""){
            alert('You selected the fault type "other", but did not enter more details. Please enter more details in the second field.');
        }
    }

    alert('Fault report successfully submitted!');

    return false;
};