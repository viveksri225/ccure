import React, { Component } from 'react';
import SidebarList  from '../../../Atom/SidebarList/SidebarList';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
const imgPath = '../../../../../src/assets/images';

const List = [
    {
        link: '/actif/description',
        name: 'Description',
        image: (<img src={`${imgPath}/icons/description-icon.png`} alt="Protocoles" />),
    },

    {
        link: '/actif/proprietes',
        name: 'Propriétés',
        image: (<img src={`${imgPath}/icons/propriétés-icon.png`} alt="Protocoles" />),
    },
    {
        link: '/actif/usages',
        name: 'Usages',
        image: (<img src={`${imgPath}/icons/usages-icon.png`} alt="Protocoles" />),
    },
    {
        link: '/actif/precautions',
        name: 'Précautions',
        image: (<img src={`${imgPath}/icons/précautions-icon.png`} alt="Protocoles" />),
    },
    {
        link: '/actif/effets-secondaires',
        name: 'Effets secondaires',
        image: (<img src={`${imgPath}/icons/effets-secondaires-icon.png`} alt="Protocoles" />),
    },
    {
        link: '/actif/interactions',
        name: 'Intéractions',
        image: (<img src={`${imgPath}/icons/intéractions-icon.png`} alt="Protocoles" />),
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