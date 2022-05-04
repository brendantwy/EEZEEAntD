
import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Layout, Row, Col, Card, Carousel, Form, Divider, Button, Input } from 'antd';
import Navbar from '../navbar/Navbar';
import Toolbar from '../toolbar/Toolbar';
import { ProductData } from '../../assets/Data/ProductData';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import '../styles/Product.css'

const { Content } = Layout;

export function Product(props) {
    const { productId } = useParams()
    const [selected, setSelected] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const thisProduct = ProductData.find(prod => prod.id === productId)

    const ref = useRef()

    const goTo = slide => {
        ref.current.goTo(slide, true)
    }

    function addQuantity() {
        setQuantity(quantity + 1)
    }

    function minusQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (<Layout>
        <Navbar />
        <Toolbar />
        <Row style={{ height: '30px', background: '#FFFFFF' }}>
        </Row>
        <Content>
            <Row gutter={14} style={{ paddingTop: '16px', paddingBottom: '41px' }}>
                <Col offset={5} span={9}>
                    <Card title={
                        <>
                            <h1>{thisProduct.title}</h1>
                        </>
                    } style={{ height: '748px', width: '748px' }}>
                        <h5>
                            Model:<a href=''>{thisProduct.model}</a>
                        </h5>
                        <h5>
                            Brand:<a href=''>{thisProduct.brand}</a>
                        </h5>

                        <Carousel ref={ref} dots={false}>
                            {thisProduct.pictures.map(pics => {
                                return (
                                    <div style={{ display: 'flex', height: '350px' }}>
                                        <img alt='' src={pics} style={{ margin: 'auto', height: '350px', width: '710px' }} />
                                    </div>
                                )
                            })
                            }
                        </Carousel>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {thisProduct.pictures.map((pics, index) => {
                                return (
                                    <img
                                        alt=''
                                        src={pics}
                                        className={
                                            selected === index ? 'btnSelected' : 'btnNorm'
                                        }
                                        onClick={() => {
                                            goTo(index)
                                            setSelected(index)
                                        }}
                                    />
                                )
                            })}
                        </div>
                        <Card.Meta title={thisProduct.title} description={thisProduct.description} />
                    </Card>
                </Col>
                <Col span={5} offset={1}>
                    <Card style={{ width: '440px', height: '306px' }}><h1 style={{ color: '#2A64DB', fontSize: 35 }}>
                        <sup>S$</sup>{thisProduct.price}
                    </h1>
                        <Divider dashed />
                        <Form>
                            <Form.Item label='Quantity'>
                                <Input.Group compact>
                                    <Button
                                        style={{ verticalAlign: 'middle' }}
                                        onClick={() => minusQuantity()}
                                        icon={<MinusOutlined style={{ color: '#2A64DB' }} />}
                                    ></Button>
                                    <Input
                                        style={{ textAlign: 'center', width: '20%' }}
                                        value={quantity}
                                    />
                                    <Button
                                        style={{ verticalAlign: 'middle' }}
                                        onClick={() => addQuantity()}
                                        icon={<PlusOutlined style={{ color: '#2A64DB' }} />}
                                    ></Button>
                                </Input.Group>
                            </Form.Item>
                        </Form>
                        <Row>
                            <Button
                                type='primary'
                                onClick={() => {

                                }}
                                style={{ width: '100%', backgroundColor: '#2A64DB' }}
                            >
                                Add to Cart
                            </Button>
                        </Row>
                        <Row style={{ paddingTop: 10 }}>
                            <Button style={{ width: '100%', color: '#1890ff' }}>
                                Add to Favourites
                            </Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Content>
    </Layout>);
}