
import { useState, useEffect } from 'react';
import { Layout, Row, Col, Card, AutoComplete, Typography } from 'antd';
import Navbar from '../navbar/Navbar';
import Toolbar from '../toolbar/Toolbar';

const { Content } = Layout;

export function Product(props) {
    const [title, setTitle] = useState(props.title)

    return (<Layout>
        <Navbar />
        <Toolbar />
        <Row style={{ height: '30px', background: '#FFFFFF' }}>
        </Row>
        <Content>

        </Content>
    </Layout>)
        ;
}