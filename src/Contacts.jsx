import React from 'react'

function Contacts() {

    const contacts = {
        address: 'Los Angeles, Beverly Hills, 103',
        phoneNumber: '+7888777666',
        email: 'adventures@gmail.com'
    }

    return (
        <div>
            <h3>Contacts</h3>
            <p>Address: {contacts.address}</p>
            <p>Phone number: {contacts.phoneNumber}</p>
            <p>Email: {contacts.email}</p>
        </div>
    );
}

export default Contacts;