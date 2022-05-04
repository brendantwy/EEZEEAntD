import { Layout, Row, Col, Card, AutoComplete } from 'antd';
import Navbar from '../navbar/Navbar';
import Toolbar from '../toolbar/Toolbar';
import { ReactComponent as Banner } from "../../assets/images/Banner.svg";
import { RightOutlined } from '@ant-design/icons'
import { hello } from '../../assets/json/FeaturedBrands';

const { Content } = Layout;
const { Meta } = Card;

export default function Home() {
    return (
        <Layout>
            <Navbar className="navbar" />

            <Toolbar className='toolbar' />
            <Content>
                <Row style={{ paddingTop: '17px' }}>
                    <Col span={1} offset={2}>
                        <Banner />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '65px' }}>
                    <Col>
                        <Card
                            title={
                                <>
                                    <h1>
                                        <b>Featured Brands</b>
                                    </h1>
                                    <h5> Browse the full catalog of brands today</h5>
                                </>}

                            style={{ height: '158', backgroundColor: '#EFEFF0' }}

                            extra={
                                <a href=''>
                                    View All
                                    <RightOutlined />
                                </a>
                            }

                        >
                            <Row gutter={8}>
                                {hello.map(brand => {

                                    return (
                                        <Col span={4}>
                                            <Card style={{ textAlign: 'center', width: '193px' }}
                                                cover={<div style={{ height: "100px", width: '191px', display: 'flex' }}><img alt="example" src={brand.path} style={{ margin: 'auto' }} /></div>}>
                                                {/* <div 
                                                    style={{
                                                    }}
                                                >
                                                    <img
                                                        alt=''
                                                        src={brand.path}
                                                    />
                                                </div> */}
                                                <Meta title={brand.title} description="321 Products" />
                                            </Card>
                                        </Col>
                                    );
                                }
                                )}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}