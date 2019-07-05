import React, { Component } from 'react';
import { Card, Col, Row, Layout, Menu, Button, } from 'antd';
import { Link } from 'react-router-dom';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
import Sidebar from './sidebar';
import Header from './header';
const imgPath = '../../../../../src/assets/images';
 
const precautionsList = [

    {
        link: '#',
        tag: 'Antioxydant',
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },

    {
        link: '#',
        tag: 'Bioénergisant',
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),

    },

    {
        link: '#',
        tag: 'Analgésique',
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },

    {
        link: '#',
        tag: "Anti-âge",
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },

    {
        link: '#',
        tag: "Neurologique",
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },

    {
        link: '#',
        tag: "Effet cardiovasculaire",
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },
    {
        link: '#',
        tag: "Immunostimulant",
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },

    {
        link: '#',
        tag: "Anticancer",
        image: (
            <span>
                <img src={`${imgPath}/icons/proprietes-icon.png`} alt="" />
            </span>
        ),
    },

];


class Precautions extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
    
        return (
            <div id="biocore" className="p-2">
                <Row gutter={16}>
                    <Col span={24} >
                        <Card bordered className="green-border">
                           <Header />
                            <div className="mt-3">
                                <Row>
                                    <Col span={5}>
                                       <Sidebar />
                                    </Col>
                                    <Col span={19}>
                                        <Layout className="actif">
                                            <div className="content-main">
                                                <ul className="list">
                                                    {
                                                        precautionsList.map(list =>
                                                            <li key={list.id}>
                                                                <a href={list.link}>
                                                                    {list.tag}
                                                                </a>
                                                                {list.image}
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </Layout>
                                    </Col>
                                </Row>

                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Precautions;