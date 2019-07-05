import React, { Component } from 'react';
import { Card, Col, Row, Layout, Menu, Button } from 'antd';
import { Slider, Switch } from 'antd';
import Sidebar from './sidebar';
import Header from './header';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
const imgPath = '../../../../../src/assets/images';
 
const usagesList = [
    {
        link: '#',
        tag: 'Carence en coenzyme Q10',
    },

    {
        link: '#',
        tag: 'Fibromyalgie',
    },

    {
        link: '#',
        tag: 'DMLA',
    },
    {
        link: '#',
        tag: 'Neuropathie diabétique',
    },

    {
        link: '#',
        tag: 'Sclérose en plaque',
    },

    {
        link: '#',
        tag: 'Dystrophie musculaire',
    },
    {
        link: '#',
        tag: 'Syndrome MELAS',
    },

    {
        link: '#',
        tag: 'Insuffisance cardiaque',
    },

    {
        link: '#',
        tag: 'Migraines',
    },
];


class Usages extends Component {
 
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
                                                <Row>
                                                    <Col span={9}>
                                                        <ul className="list">
                                                            {
                                                                usagesList.map(list =>
                                                                    <li key={list.id}>
                                                                        <a href={list.link}>
                                                                            {list.tag}
                                                                        </a>
                                                                    </li>
                                                                )
                                                            }
                                                        </ul>
                                                    </Col>
                                                    <Col span={15}>
                                                        <div className="range-slider">
                                                            <ul>
                                                                <li>A</li>
                                                                <li>B</li>
                                                                <li>C</li>
                                                                <li>D</li>
                                                                <li>E</li>
                                                            </ul>
                                                            <Slider defaultValue={30} />
                                                        </div>
                                                        <div className="box">
                                                            <p>La fibromyalgie est une maladie chronique provoquant des douleurs musculaires, articulaires et des migraines en rapport avec un stress oxydatif accru et une diminution du taux de Coenzyme Q10 dans les mitochondries. La supplémentation en coenzyme Q10 réduit les symptômes de la fibromyalgie, incluant les maux de tête, la fatigue et les courbatures en diminuant le stress oxydatif cellulaire.</p>
                                                        </div>
                                                        <div className="info-list">
                                                            <ul>
                                                                <li><a href="#"><img src={`${imgPath}/icons/associees-icon.png`} alt="" />Propriétés associées</a></li>
                                                                <li><a href="#"><img src={`${imgPath}/icons/dosage-icon.png`} alt="" />Dosage</a></li>
                                                                <li><a href="#"><img src={`${imgPath}/icons/references-icon.png`} alt="" />Références</a></li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
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

export default Usages;