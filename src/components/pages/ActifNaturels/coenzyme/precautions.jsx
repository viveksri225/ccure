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
        tag: 'Femme enceinte',
    },

    {
        link: '#',
        tag: 'RESOURCES',
    },

    {
        link: '#',
        tag: 'Enfant',
    },

    {
        link: '#',
        tag: "En cas d'hyertension",
    },

    {
        link: '#',
        tag: "En cas d'intervention chirurgicale",
    },

];


class Precautions extends Component {
 
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