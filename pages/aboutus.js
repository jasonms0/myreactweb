import "../static/less/aboutus.less"
import "../static/css/font.css"
import "../static/css/font2.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Head from 'next/head'
import { Breadcrumb, Card } from 'antd';
import Link from 'next/link'

const { Meta } = Card;

class Aboutus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            key: 'home'
        }
    }

    render() {
        return (
            <div className="bg">
                <Nav current={this.state.key}></Nav>
                <Head>
                    <title>瑞艾客特</title>
                </Head>
                <div className="context">
                    <img src="../static/images/aboutimg.png" />
                    <div className="location">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link href="/">
                                    <a className="font2">官网首页</a>
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a className="font2">关于我们</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="title1 font1">我们的优势</div>
                    <div className="adv">
                        <Card
                            hoverable
                            style={{ width: 189 }}
                            cover={<img alt="example" src="../static/images/adv1.png" />}
                        >
                            <Meta title="路线规划" description="厦门及周边景点旅行线路规划、我们不走平凡路！" />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 189 }}
                            cover={<img alt="example" src="../static/images/adv2.png" />}
                        >
                            <Meta title="专属定制" description="私人专属定制境外旅游，为不平凡的你创造不平凡的世界！" />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 189 }}
                            cover={<img alt="example" src="../static/images/adv3.png" />}
                        >
                            <Meta title="旅游住宿" description="厦门特色民宿、星级酒店全方位介绍，不同的选择，不一样的享受！" />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 189 }}
                            cover={<img alt="example" src="../static/images/adv4.png" />}
                        >
                            <Meta title="餐饮娱乐" description="地道小食、海鲜排挡、私房佳肴，带您品味舌尖上的美味！" />
                        </Card>
                    </div>
                    <div className="title2 font1">企业简介</div>
                    <div className="company">
                        <img src="../static/images/company.png" />
                        <div className="com-content">
                            <h1 className="font1">瑞艾客特旅行</h1>
                            <p>瑞艾客特旅行成立于2019年，由一群热爱生活、热爱旅游的驴友创办。现今社会，人们忙于生活</p>
                        </div>
                    </div>
                    <div className="title2 font1">企业环境</div>
                    <div className="environment">
                        <img src="../static/images/env1.png" />
                        <img src="../static/images/env2.png" />
                        <img src="../static/images/env3.png" />
                        <img src="../static/images/env4.png" />
                        <img src="../static/images/env5.png" />
                        <img src="../static/images/env6.png" />
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}


export default Aboutus