import { Row, Col, Badge, Button, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoOnWhite } from '../../assets/images/LogoOnWhite.svg';
import Icon, { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import "../styles/Toolbar.css"

export default function Toolbar(props) {

    return (
        <>
            <Row align='middle' className='navbarbase'>
                <Col span={4} offset={5}>
                    <LogoOnWhite className='logo' />
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
                    />
                </Col>
                <Col span={4} offset={3}>
                    <Badge
                        style={{ backgroundColor: '#2A64DB' }}
                        count={0}
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