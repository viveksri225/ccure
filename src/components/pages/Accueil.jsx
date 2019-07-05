import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';
import '../../assets/styles/Accueil.css';

const imgPath = '../../../src/assets/images';

class Accueil extends Component {
  render() {
    return (
      <div id="accueil" className="p-2">
        <Row gutter={16}>
          <Col span={15}>
            <Card bordered className="card1">
              <span className="heading ml-3">Accéder à vos modules</span>
              <Row className="pt-3 text-center" type="flex" justify="space-between">
                <Col span={8}>
                  <Link to="/actif">
                    <img src={`${imgPath}/accueil/BioCore.png`} alt="BioCore" />
                    <p className="title pt-1">BioCore</p>
                    <p className="desc">Gratuit</p>
                  </Link>
                </Col>
                <Col span={8}>
                  <Link to="#/">
                    <img src={`${imgPath}/accueil/Protocoles.png`} alt="Protocoles" />
                    <p className="title pt-1">Protocoles</p>
                    <p className="desc">Abonnement Essentiel</p>
                  </Link>
                </Col>
                <Col span={8}>
                  <Link to="#/">
                    <img src={`${imgPath}/accueil/AnalysesDonnees.png`} alt="AnalysesDonnees" />
                    <p className="title pt-1">Analyses données</p>
                    <p className="desc">Abonnement Elixir</p>
                  </Link>
                </Col>
              </Row>

              <span className="heading ml-3">Vos laboratoires</span>
              <Row className="pt-3 text-center" type="flex" justify="space-between">
                <Col span={8}>
                  <img src={`${imgPath}/accueil/Laboratory_1.png`} alt="Laboratory_1" />
                  <p className="desc pt-1">Santarel</p>
                </Col>
                <Col span={8}>
                  <img src={`${imgPath}/accueil/Laboratory_2.png`} alt="Laboratory_2" />
                  <p className="desc pt-1">Algotonic</p>
                </Col>
                <Col span={8}>
                  <img src={`${imgPath}/accueil/AddNew.png`} alt="AddNew" />
                  <p className="desc pt-1">Intégrer un labo</p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={9}>
            <Card bordered className="card2">
              <span className="heading">Actualités</span>
              <span className="label ml-1">Sponsorisée</span>
              <Card className="inner-card1 mt-2">
                <Row>
                  <Col span={14}>
                    <p className="title">CANDIBIOTIC®</p>
                    <p className="desc">COPMED</p>
                    <p className="desc red">NOUVELLE FORMULE SANS PROBIOTIQUES</p>
                  </Col>
                  <Col span={10}>
                    <img src={`${imgPath}/accueil/actualites_1.png`} alt="actualites_1" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Button type="primary" size="large">En Savoir plus</Button>
                  </Col>
                </Row>
              </Card>
              <Card className="inner-card2 mt-2">
                <Row>
                  <Col span={24}>
                    <p className="title">VITAMINAT ÉVOLUE  EN VITAMINAT +</p>
                  </Col>
                </Row>
                <Row>
                  <Col span={10}>
                    <p className="desc">Lescuyer</p>
                  </Col>
                  <Col span={14}>
                    <img src={`${imgPath}/accueil/actualites_2.png`} alt="actualites_2" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Button type="primary" size="large">En Savoir plus</Button>
                  </Col>
                </Row>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Accueil;
