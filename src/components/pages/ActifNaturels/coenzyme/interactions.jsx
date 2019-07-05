import React, { Component } from 'react';
import { Card, Col, Row, Layout, Menu, Button, } from 'antd';
import { Link } from 'react-router-dom';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
import Sidebar from './sidebar';
import Header from './header';
const imgPath = '../../../../../src/assets/images';
 const medicamentsList = [
    {
        link: '#',
        tag: 'Anticancéreux',
    },

    {
        link: '#',
        tag: 'Antihypertenseur',
    },

    {
        link: '#',
        tag: 'Anticoagulant',
    },
];

const actifsList = [
    {
        link: '#',
        tag: "Gomme arabique",
    },

    {
        link: '#',
        tag: "Bêta carotène",
    },
    {
        link: '#',
        tag: "Oméga 3",
    },
];


class Interactions extends Component {
 
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
                                                    <div className="header mb-2">
                                                        <img src={`${imgPath}/icons/pill.png`} alt="pill" />
                                                        <span className="ml-05 sider-text" >Médicaments</span>
                                                    </div>
                                                    <div className="ml-3">
                                                        {
                                                            medicamentsList.map(list =>
                                                                <li key={list.tag}>
                                                                    <a href={list.link}>
                                                                        {list.tag}
                                                                    </a>
                                                                </li>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="header mb-2">
                                                        <img src={`${imgPath}/icons/actif-icon.png`} alt="actif-icon" />
                                                        <span className="ml-05 sider-text" >Actifs</span>
                                                    </div>
                                                    <div className="ml-3">
                                                        {
                                                            actifsList.map(list =>
                                                                <li key={list.tag}>
                                                                    <a href={list.link}>
                                                                        {list.tag}
                                                                    </a>
                                                                </li>
                                                            )
                                                        }
                                                    </div>
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

export default Interactions;