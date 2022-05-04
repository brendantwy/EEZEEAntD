import { Layout, Row, Col, Typography } from 'antd';
import { ReactComponent as SgFlag } from '../../assets/images/SgFlag.svg';
import { PhoneOutlined } from '@ant-design/icons';
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <Row className='nav' align="middle" >
            {/* <Row  className='container'> */}
            <Col span={2} offset={7}>
                <SgFlag className='flag' />
                Singapore
            </Col>
            <Col >
                <PhoneOutlined />
                <Typography.Text style={{ marginLeft: '10px' }}>+65 6797 9688</Typography.Text>
            </Col>
        </Row >
    );
}

