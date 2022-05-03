import { Layout, Row, Col } from 'antd';
import Navbar from '../navbar/Navbar';

const { Header, Content } = Layout;

export default function Home() {
    return (
        <Layout className='layout'>
            <Header>
                <Row>
                    <Navbar clasName='navbar' />
                </Row>
            </Header>
            <Content>
            </Content>
        </Layout>
    )
}