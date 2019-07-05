import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button, Layout, Menu, Input, Icon } from 'antd';
import '../../../../assets/styles/BioCore.css';
import Sidebar from './sidebar';


const imgPath = '../../../../../src/assets/images';

class Actif extends Component {
    render() {
        return (

            <div id="biocore" className="p-2">
                <Row gutter={16}>
                    <Col span={24} >
                        <Card bordered className="green-border">
                            <div className="mt-3">
                                <Row>
                                    <Col span={5}>
                                        <Sidebar />
                                    </Col>
                                    <Col span={19}>
                                        <Layout className="actif">
                                            <div className="content-main">
                                                <div className="sub-menu">
                                                    <ul className="tab">
                                                        <li className="active">
                                                            <a href="#"><img src={`${imgPath}/icons/properties.png`} alt="properties" />Propriétés</a>
                                                            <div className="filter">
                                                                <Row>
                                                                    <Col span={12}>
                                                                        <div className="search-bar">
                                                                            <Input
                                                                                size="large"
                                                                                placeholder="Rechercher par nom"
                                                                                suffix={<img src={`${imgPath}/icons/search.png`} alt="search" />}
                                                                            />
                                                                        </div>
                                                                        <div className="filter-list">
                                                                            <a href="#" className="select">Antidiabétique</a>
                                                                            <a href="#">Anticancer</a>
                                                                            <a href="#">Anticoagulant</a>
                                                                        </div>
                                                                    </Col>
                                                                    <Col span={12}>
                                                                        <div className="select-list">
                                                                            <h6>Propriétés ajoutées</h6>
                                                                            <a href="#"><Icon type="close" />Anti-inflammatoire</a>
                                                                        </div>
                                                                    </Col>

                                                                </Row>

                                                            </div>
                                                        </li>
                                                        <li><a href="#"><img src={`${imgPath}/icons/forme.png`} alt="forme" />Forme</a></li>
                                                    </ul>

                                                    <div className="search-bar">
                                                        <Input
                                                            size="large"
                                                            placeholder="Rechercher par nom"
                                                            suffix={<img src={`${imgPath}/icons/search.png`} alt="search" />}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="boxs-content">
                                                    <ul>
                                                        <li>
                                                            <h4>
                                                                <img src={`${imgPath}/actif/Acetylcarnitine.png`} alt="Acetylcarnitine" />
                                                                Acétyl-L-carnitine
                                                                </h4>
                                                            <Button type="primary" shape="round" className="btn-f615c3">Pseudo-vitamine</Button>
                                                            <span className="more"> <img src={`${imgPath}/icons/btn-circle.png`} alt="btn-circle" /></span>
                                                        </li>

                                                        <li>
                                                            <h4>
                                                                <img src={`${imgPath}/actif/actee_a_grappes_noires.png`} alt="actee_a_grappes_noires" />
                                                                Actée à grappes noires
                                                                </h4>
                                                            <Button type="primary" shape="round" className="btn-0ad31c">Plantes</Button>
                                                            <span className="more"> <img src={`${imgPath}/icons/btn-circle.png`} alt="btn-circle" /></span>
                                                        </li>


                                                        <li>
                                                            <h4>
                                                                <img src={`${imgPath}/actif/B12.png`} alt="B12" />
                                                                Vitamine B12
                                                                </h4>
                                                            <Button type="primary" shape="round" className="btn-bd7bf0">Vitamines</Button>
                                                            <span className="more"> <img src={`${imgPath}/icons/btn-circle.png`} alt="btn-circle" /></span>
                                                        </li>


                                                        <li><Link to="/actif/description">
                                                            <h4>
                                                                <img src={`${imgPath}/actif/Coenzyme_q10.png`} alt="Coenzyme_q10" />
                                                                Coenzyme Q10
                                                                </h4>
                                                            <Button type="primary" shape="round" className="btn-f615c3">Pseudo-vitamine</Button>
                                                            <span className="more"> <img src={`${imgPath}/icons/btn-circle.png`} alt="btn-circle" /></span>
                                                        </Link> </li>

                                                        <li>
                                                            <h4>
                                                                <img src={`${imgPath}/actif/Ginkgo_Biloba.png`} alt="Ginkgo_Biloba" />
                                                                Ginkgo Biloba
                                                                </h4>
                                                            <Button type="primary" shape="round" className="btn-0ad31c">Plantes</Button>
                                                            <span className="more"> <img src={`${imgPath}/icons/btn-circle.png`} alt="btn-circle" /></span>
                                                        </li>

                                                        <li>
                                                            <h4>
                                                                <img src={`${imgPath}/actif/Zinc.png`} alt="Zinc" />
                                                                Zinc
                                                                </h4>
                                                            <Button type="primary" shape="round" className="btn-fdc8d8">
                                                                <span className="fontsize-14">Minéraux et oligo-éléments</span>
                                                            </Button>
                                                            <span className="more"> <img src={`${imgPath}/icons/btn-circle.png`} alt="btn-circle" /></span>
                                                        </li>


                                                    </ul>
                                                </div>


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

export default Actif;