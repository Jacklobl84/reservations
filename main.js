var reservations = {
    'Bob': { claimed: false },
    'ted': { claimed: true }
}
var name = prompt('Please enter the name for your reservation');
name = name.toLowerCase();
var claimReservation = function () {
    if (reservations[name]) {
        if (reservations[name]["claimed"]) {
            alert('I am sorry ' + name + ', your reservation is already claimed');
        } else {
            alert('Welcome ' + name);
        }
    } else {
       reservations [name] = { claimed: "true" };
       alert(name + ' you now have a reservation');
   }
}
claimReservation();