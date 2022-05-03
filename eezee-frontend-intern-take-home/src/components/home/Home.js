import { Layout, Row, Col } from 'antd';
import Navbar from '../navbar/Navbar';
const { Header, Content } = Layout;

export default function Home() {
    return (
        <Layout>
            <Navbar className="navbar" />
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Content</div>
            </Content>
        </Layout>
    );
}