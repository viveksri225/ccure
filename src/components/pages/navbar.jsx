import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Row, Col, Dropdown, Icon } from 'antd';

const imgPath = '../../../src/assets/images';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            current: 'BioCore',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }

    renderSubMenuItem() {
        return (
            <Menu>
                <Menu.Item>
                    <Link to="/actif">BioCore</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/protocoles">Protocoles</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">Logout</Link>
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        const { location: { pathname } } = this.props;

        return (
            <Menu mode="horizontal" id="nav" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Row type="flex" justify="space-around">
                    <Col span={4}>
                        <Link to="/accueil">
                            <img src={`${imgPath}/logo.png`} alt="logo" />
                        </Link>
                    </Col>
                    <Col span={8}>
                        {pathname === "/accueil" &&
                            <span className="nav-title">Bonjour Patricia, bienvenue dans votre espace</span>
                        }
                        {(pathname !== "/accueil" && pathname !== "/") &&
                            <Row type="flex" justify="space-around">
                                <Menu.Item key="BioCore">
                                    <Link to="/actif">
                                        <span className="nav-item">BioCore</span>
                                        <span className="label">gratuit</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="Protocoles">
                                    <Link to="#/">
                                        <span className="nav-item">Protocoles</span>
                                        <span className="label">Essentiel</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="Analyses">
                                    <Link to="#/">
                                        <span className="nav-item">Analyses données</span>
                                        <span className="label">Elixir</span>
                                    </Link>
                                </Menu.Item>
                            </Row>
                        }
                    </Col>
                    <Col span={4}>
                        {pathname !== "/" &&
                            <Row type="flex" justify="space-around">
                                <Menu.Item key="questions">
                                    <img src={`${imgPath}/icons/questions.png`} alt="questions" />
                                </Menu.Item>
                                <Menu.Item key="notifications">
                                    <img src={`${imgPath}/icons/notifications.png`} alt="notifications" />
                                </Menu.Item>
                                <Menu.Item key="person">
                                    <Dropdown overlay={this.renderSubMenuItem()}>
                                        <span>
                                            <img src={`${imgPath}/icons/person.png`} alt="person" />
                                            <Icon type="down" />
                                        </span>
                                    </Dropdown>
                                </Menu.Item>
                            </Row>
                        }
                    </Col>
                </Row>
            </Menu >
        );
    }
}

Navbar.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired
};

export default withRouter(Navbar);
