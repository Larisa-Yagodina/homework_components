import React from 'react'

function Services() {

    const services = [
        {place: 'Hawaii', hotel: 'Marriott', term: '8 days'},
        {place: 'Maldives', hotel: 'Four Season', term: '10 days'},
        {place: 'Orlando', hotel: 'Sheraton', term: '7 days'},
    ]

    return (
        <div>
            {services.map(el =>
                <>
                    <p><b>{el.place}</b></p>
                    <li> {el.term} days at the {el.hotel} Hotel</li>
                </>
            )}

        </div>
    );
}

export default Services;