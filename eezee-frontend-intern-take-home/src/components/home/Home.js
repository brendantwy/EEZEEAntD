import { Layout } from 'antd';
import Navbar from '../navbar/Navbar';
import Toolbar from '../toolbar/Toolbar';


const { Content } = Layout;

export default function Home() {
    return (
        <Layout>
            <Navbar className="navbar" />

            <Toolbar className='toolbar' />

        </Layout>
    );
}