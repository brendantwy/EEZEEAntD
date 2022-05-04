import { Layout, Row, Col, Card, AutoComplete, Typography } from 'antd';
import Navbar from '../navbar/Navbar';
import Toolbar from '../toolbar/Toolbar';
import { ReactComponent as Banner } from "../../assets/Images/Common/Banner.svg";
import { RightOutlined } from '@ant-design/icons'
import { featured } from '../../assets/Data/FeaturedBrands';
import { popular } from '../../assets/Data/PopularProducts';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const { Content } = Layout;
const { Meta } = Card;

export default function Home() {
    const navigate = useNavigate();

    return (
        <Layout >
            <Navbar className="navbar" />
            <Toolbar className='toolbar' />
            <Content className='content'>
                <Row style={{ paddingTop: '20px' }}>
                    <Col offset={5} span={14}>
                        <Banner />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '68px' }}>
                    <Col offset={5} span={14}>
                        <Typography.Title level={2} strong>
                            Featured Brands
                        </Typography.Title>
                    </Col>
                </Row>
                <Row>
                    <Col offset={5} span={14}>
                        <Typography.Text type='secondary'>
                            Browse the full catalog of brands today
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Link>
                            View All{<RightOutlined />}
                        </Typography.Link>
                    </Col>
                </Row>
                <div style={{ paddingLeft: '400px' }}>
                    <Row gutter={10}>
                        {featured.map(brand => {
                            return (
                                <Col>
                                    <Card style={{ textAlign: 'center', width: '193px' }}
                                        cover={
                                            <div style={{ height: "100px", width: '191px', display: 'flex' }}>
                                                <img alt="" src={brand.path} style={{ margin: 'auto' }} />
                                            </div>
                                        }
                                        bordered={false}
                                    >
                                        <Meta title={brand.title} description="321 Products" />
                                    </Card>
                                </Col>
                            );
                        }
                        )}
                    </Row>
                </div>
                <Row style={{ paddingTop: '68px' }}>
                    <Col offset={5} span={14}>
                        <Typography.Title level={2} strong>
                            Our Most Popular Products
                        </Typography.Title>
                    </Col>
                </Row>
                <Row>
                    <Col offset={5} span={14}>
                        <Typography.Text type='secondary'>
                            Trusted by the best companies in Asia
                        </Typography.Text>
                    </Col>
                </Row>
                <div style={{ paddingLeft: '400px', paddingBottom: '87.5px' }}>
                    <Row gutter={10}>
                        {popular.map(product => {
                            return (
                                <div key={product.id}>
                                    <Col>
                                        <Link to={`/product/${product.id}`}>
                                            <Card style={{ textAlign: 'left', width: '193px', height: '333px' }}
                                                cover={
                                                    <div style={{ height: "175px", width: '175px', display: 'flex' }}>
                                                        <img alt="" src={product.path} style={{ height: "175px", width: '175px' }} />
                                                    </div>
                                                }
                                                bordered={false}
                                            >
                                                <Meta title={<div style={{ color: '#2A64DB', float: 'left' }}><sup>S$</sup>{product.price}</div>} description={<b>{product.description}</b>} />
                                            </Card>
                                        </Link>
                                    </Col>
                                </div>
                            );
                        }
                        )}
                    </Row>
                </div>
            </Content>
        </Layout >
    );
}