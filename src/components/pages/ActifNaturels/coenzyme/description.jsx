import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Layout, Menu, Button, } from 'antd';
import '../../../../assets/styles/BioCore.css';
import '../../../../assets/styles/custom.scss';
import Sidebar from './sidebar';
import Header from './header';
const imgPath = '../../../../../src/assets/images';
 
class Description extends Component {

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
                                                <div className="box">
                                                    <p>La coenzyme Q10 est une substance similaire à la vitamine. Elle est présente dans tout l’organisme, et plus particulièrement dans le cœur, le foie, les reins et le pancréas. Elle est aussi présente dans certains aliments, dont la viande, le poisson et les fruits de mer. La coenzyme Q10 peut aussi être synthétisée en laboratoire.
</p>
                                                    <p>La coenzyme Q10 est couramment utilisée pour traiter les pathologies du cœur, comme l’insuffisance cardiaque, l’angine de poitrine (douleurs thoraciques) et la pression artérielle élevée. Elle est aussi utilisée pour prévenir les migraines, la maladie de Parkinson et bien d’autres troubles médicaux.
       </p>                         </div>
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

export default Description;