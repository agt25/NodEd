import React from 'react'; 

// Angle Down Account Icon https://iconify.design/icon-sets/fa/angle-down.html
// npm install --save-dev @iconify/react @iconify-icons/fa
import { Icon, InlineIcon } from '@iconify/react';


// Search Icon npm install --save-dev @iconify/react @iconify-icons/flat-ui
import searchIcon from '@iconify-icons/flat-ui/search';

// New Note Button npm install --save-dev @iconify/react @iconify-icons/fa-solid
import plusIcon from '@iconify-icons/fa-solid/plus';

// Import lightning bolt icons; source: https://icons8.com/icons/set/lightning-bolt
import bolt from './graphics/bolt.png';
import boltPink from './graphics/bolt-pink.png';
import boltGrey from './graphics/bolt-grey.png';

// Import style
import './Sidenavbar.scss';

// Import animated logo
import vid from './graphics/animated.mp4';

// Imports and Exports Sidenavbar.js
class SidenavbarComponent extends React.Component {
    constructor() {
      super();
      
    }

    // Return the Side Nav Bar
    render() {
    return (
        <div className="sideNavBar">
            <div className="sideNavBar-top">
                
                { /* Top Profile and Logo */ }
                <div className="sideNavBar-profile">
                    <div className="profile-title">
                     <video width="120px" autoPlay loop muted>
                        <source src={vid} type="video/mp4"/>
                    </video>
                    </div>
                </div>
                
                { /* Search Box */}
                <div className="sideNavBar-search">
                    <div className="search-box">
                        <Icon icon={searchIcon} flip="horizontal" className="search-icon" />
                        <input placeholder="Search" />
                    </div> 
                </div>
                
                { /* Pinned Folders and All Other Nav Menu Items*/}
                <div className="sideNavBar-Menu-item">
                    <ul className="pinned-folders">
                        <li> 
                            <img src={bolt} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">CS50</div>
                        </li>
                        <li> 
                            <img src={bolt} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">CS50-W</div>
                        </li>
                        <li> 
                            <img src={bolt} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">CS50-AI</div>
                        </li>
                        <li> 
                            <img src={bolt} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">CS50-G</div>
                        </li>
                        </ul>
                        
                        {/* Second Half of Folders */}
                        <ul id="all-fold">
                        <li id="all-notes-item"> 
                            <img src={boltPink} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">All Notes</div>
                        </li>
                        <li id="all-folders"> 
                            <img src={boltPink} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">Folders</div>
                        </li>
                        <li id="all-tags"> 
                            <img src={boltPink} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">Tags</div>
                        </li>
                        </ul>
                        {/* Create New Folder Button */}
                        <div className="sideNavBar-createNote">
                        <div className="createNote-btn">
                        <Icon icon={plusIcon} className="icon" fontSize="20px" color="wheat" />
                                <div className="title">
                                    New Folder
                                </div>
                        </div>
                        </div>
                        
                        {/* Trash Button */}
                        <ul id="trash">
                        <li id="trash-item"> 
                            <img src={boltGrey} alt="Lightning Bolt Icon" className="bolt-icon" />
                            <div className="menu-li-name">Trash</div>
                        </li>
                    </ul>
                </div>
                </div> 
                <div>{this.props.children}</div>          
        </div>
                
              
    
    )
}
}

export default SidenavbarComponent;