import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Layout, Menu, Button, } from 'antd';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
const imgPath = '../../../../../src/assets/images';
 

class Header extends Component {

render() {

        return (
            <div className="layout-header">
                <Row>
                    <Col span={4}>
                        <Link to="/actif">
                            <Button type="primary" className="retour-btn" shape="round" icon="arrow-left" >Retour</Button>
                        </Link>
                    </Col>
                    <Col span={14}>
                        <div className="layout-header-middle">
                            <img src={`${imgPath}/ubiquinol.png`} height="70%" alt="" />
                            <div className="middle-cnt">
                                <h2>Coenzyme Q10</h2>
                                <p>Ubiquinol</p>
                                <a href="#/" className="btn">Pseudo-vitamine</a>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="layout-header-right">Voir Produits<span><img src={`${imgPath}/produits-icon.png`} height="70%" alt="" /></span></div>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default Header;