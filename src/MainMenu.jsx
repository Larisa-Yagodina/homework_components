import React from 'react'

function MainMenu() {

    const mainMenu = ['Homepage', 'Services', 'Q&A', 'Contacts'];

    return (
        <div>
            {mainMenu.map(el => <b> {el} </b>)}
        </div>
    );
}

export default MainMenu;
