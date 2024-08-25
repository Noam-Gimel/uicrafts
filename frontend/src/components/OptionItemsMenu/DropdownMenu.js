import React, { useState } from 'react';
import './DropdownMenu.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { ScrollPanel } from 'primereact/scrollpanel';


const SingleInput = () => {
    return (
        <div className='sub-item-wrapper'>
            <input type="text" placeholder="Input 1" />
        </div>
    );
};

const DoubleInput = () => {
    return (
        <div className='sub-item-wrapper'>
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 7" />
            <input type="text" placeholder="Input 8" />
            <input type="text" placeholder="Input 9" />
        </div>
    );
};

const TripleInput = () => {
    return (
        <div className='sub-item-wrapper'>
            <input type="text" placeholder="Input 1" />
            <input type="text" placeholder="Input 2" />
            <input type="text" placeholder="Input 3" />
        </div>
    );
};

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [activeComponent, setActiveComponent] = useState(null);

    const menuItems = [
        { name: 'Item 1', component: <SingleInput /> },
        { name: 'Item 2', component: <DoubleInput /> },
        { name: 'Item 3', component: <TripleInput /> },
        { name: 'Item 4', component: <TripleInput /> },
        { name: 'Item 5', component: <TripleInput /> },
        { name: 'Item 6', component: <TripleInput /> },
        { name: 'Item 7', component: <TripleInput /> },
        { name: 'Item 8', component: <TripleInput /> },
        { name: 'Item 9', component: <TripleInput /> }
    ];

    const handleItemClick = (item) => {
        setActiveComponent(item.component);
        setActiveMenu('sub');
    };

    const handleBackClick = () => {
        setActiveMenu('main');
        setActiveComponent(null);
    };

    return (
            <div className="dropdown-menu">
                {activeMenu === 'main' ? (
                    <div className='menu-content'>
                        <ul className="menu-items">
                            {menuItems.map((item, index) => (
                                <li key={index} onClick={() => handleItemClick(item)}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className='back-header-wrapper'>
                            <div className="back-button" onClick={handleBackClick}>
                                <i className='pi pi-angle-left' /> Back
                            </div>
                        </div>
                        <div className='sub-menu-content'>
                            <div className="sub-items-menu-contaier">
                                {activeComponent}
                            </div>
                        </div>
                    </>

                )}
            </div>
        
    );
};

export default DropdownMenu;
