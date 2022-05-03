import { Layout, Row, Col, Typography } from 'antd';
import { ReactComponent as SgFlag } from '../../assets/images/SgFlag.svg';
import { PhoneOutlined } from '@ant-design/icons';
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <Row className='nav' >
            <Row justify="space-around" align="middle" className='container'>
                <Col className='country'>
                    <SgFlag className='flag' />
                    <Typography className='countryname'>Singapore</Typography>
                </Col>
                <Col className='contact'>
                    <PhoneOutlined />
                    <Typography className='phonenum'>+65 6797 9688</Typography>
                </Col>
            </Row>
        </Row >
    );
}

