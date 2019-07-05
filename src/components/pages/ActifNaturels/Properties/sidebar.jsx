import React, { Component } from 'react';
import SidebarList  from '../../../Atom/SidebarList/SidebarList';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
const imgPath = '../../../../../src/assets/images';

const List = [
    {
        link: '#',
        name: 'Actifs naturels',
        image: (<img src={`${imgPath}/icons/actif_naturels.png`} alt="Protocoles" width="32" />),
    },
    {
        link: '#',
        name: 'Recherche clinique',
        image: (<img src={`${imgPath}/icons/axe_sante.png`} alt="Protocoles" width="32" />),
    },
    {
        link: '#',
        name: 'Axe Santé',
        image: (<img src={`${imgPath}/icons/recherche_clinique.png`} alt="Protocoles" width="32" />),
    },


    
 ];

 
class Sidebar extends Component {

    render() {
        return (
            <SidebarList MenuList={ List } />
        );
    }
}

export default Sidebar;