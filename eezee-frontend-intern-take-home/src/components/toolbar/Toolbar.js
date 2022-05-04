import { Row, Col, Badge, Button, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoOnWhite } from '../../assets/images/LogoOnWhite.svg';
import Icon, { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import "../styles/Toolbar.css"

export default function Toolbar(props) {

    return (
        <>
            <Row align='middle' className='navbarbase'>
                <Col span={1} offset={2}>
                    <LogoOnWhite className='logo' />
                </Col>
                <Col span={1} offset={3}>
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
                <Col offset={14}>
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
                <Col offset={2} span={3}>
                    <a href=''>View All Brands</a>
                </Col>
            </Row>
        </>
    )
}