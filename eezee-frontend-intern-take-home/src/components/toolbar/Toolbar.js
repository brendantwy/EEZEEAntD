import { Row, Col, Badge, Button, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoOnWhite } from '../../assets/Images/Common/LogoOnWhite.svg';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../styles/Toolbar.css";

export default function Toolbar(props) {
    if (!sessionStorage.getItem('cart')) {
        sessionStorage.setItem('cart', 0)
    }
    const [count, setCount] = useState(JSON.parse(sessionStorage.cart));
    useEffect(() => {
        const item = sessionStorage.getItem('cart')
        if (item) {
            setCount(item)
        }
    }, [props.event])
    return (
        <>
            <Row align='middle' className='navbarbase'>
                <Col span={2} offset={5}>
                    <Link to={`/`}>
                        <LogoOnWhite className='logo' />
                    </Link>
                </Col>
                <Col offset={1}>
                    <Input
                        className='searchbar'
                        style={{ borderRadius: '25px' }}
                        allowClear
                        suffix={
                            <Button
                                style={{ background: '#2A64DB' }}
                                type='primary'
                                shape='circle'
                                icon={<SearchOutlined />}
                            />
                        }
                        placeholder='Search Products Here'
                    />
                </Col>
                <Col offset={6}>
                    <Badge
                        style={{ backgroundColor: '#2A64DB' }}
                        count={count}
                        showZero
                    >
                        <ShoppingCartOutlined style={{ fontSize: '32px' }} />
                    </Badge>
                </Col>
            </Row>
            <Row className='viewallbrands'>
                <Col offset={5} span={5}>
                    <a href=''>View All Brands</a>
                </Col>
            </Row>
        </>
    )
}