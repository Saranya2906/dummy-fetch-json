document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            Table(data.users);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
});

function Table(users) {
    const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    
    users.forEach(user => {
        let row = tableBody.insertRow();
        
        let Id = row.insertCell(0);
        Id.textContent = user.id;

        let FirstName = row.insertCell(1);
        FirstName.textContent = user.firstName;

        let LastName = row.insertCell(2);
        LastName.textContent = user.lastName;

        let BirthDate = row.insertCell(3);
        BirthDate.textContent = user.birthDate;

        let Email = row.insertCell(4);
        Email.textContent = user.email;

        let PostalCode = row.insertCell(5);
        PostalCode.textContent = user.address ? user.address.postalCode : 'N/A';
    
        let Address = row.insertCell(6);
        if (user.address) {
            Address.textContent = `${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}`;
        } else {
            Address.textContent = 'N/A';
        }
    });
}