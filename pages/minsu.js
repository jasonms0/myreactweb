import { Carousel, Radio, Rate } from 'antd'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router';
import "../static/css/minsu.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Head from 'next/head'
import { Breadcrumb } from 'antd';
import Link from 'next/link'
var mingid=9;
class Minsu extends React.Component {
    constructor() {
        super();
        this.state = {
            key: 'live',
            dotPosition: 'top',
            show: []
        };
    }

    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    async componentDidMount() {
        // 获取广告数据
        mingid = this.props.router.query.id
        console.log(this.props.data);
        this.setState((state) => ({
            show: [...this.props.data.message]
        }), () => {
            console.log(this.state, "lllllllllllllll")
        })
    }
    getcontent = () => {

    }
    render() {
        const { dotPosition } = this.state;

        return (
            <div className="bg2">
            <Nav current={this.state.key}></Nav>
            <Head>
                <title>瑞艾客特</title>
            </Head>
            <div className="container-hotel">

                <img src="../static/images/aboutimg.png" />
                <div className="location">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link href="/live">
                                <a className="font2">旅游住宿</a>
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a className="font2">民宿体验</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/* {this.state.show.length && this.state.show[0].lunbo1} */}

                <div className="content">
                    <div className="pic">
                        {/* <img src="../static/3.png" /> */}
                        <Carousel autoplay className="pic-carousel">
                            <div>
                                <img src={this.state.show.length && this.state.show[0].lunbo1} />
                            </div>
                            <div>
                                <img src={this.state.show.length && this.state.show[0].lunbo2} />
                            </div>
                            <div>
                                <img src={this.state.show.length && this.state.show[0].lunbo3} />
                            </div>

                        </Carousel>
                    </div>
                    {/* <div className="hotel-content">
        <h1><b>凯宾斯基大酒店</b></h1>
        <Rate disabled defaultValue={4} />
        <p><b>凯宾斯基酒店是世界上历史悠久的豪华酒店集团，最初建立于1897年。酒店集团则创建于德国，现旗下酒店遍布欧洲、中东、非洲、美洲和亚洲，在北京、柏林、布达佩斯、伊斯坦布尔、德累斯顿和圣莫里茨等34个目的地拥有76家豪华酒店和度假村。</b></p>
        <p><b>凯宾斯基拥有历史悠久的地标性项目、城市生活方式酒店、豪华度假村，以及酒店式公寓，每家酒店均秉承凯宾斯基品牌的传统，让客人感受目的地文化风情。</b></p>
        <p><b>凯宾斯基大酒店传承了凯宾斯基品牌欧洲风尚精髓，同时又完美地融入当地传统文化，散发出独特的魅力。</b></p>
    </div> */}
                </div>

                <div className="facilities">
                    <p>配套设施</p>
                    {/* {this.state.show.length && this.state.show[0].content1} */}

                    <div dangerouslySetInnerHTML={{ __html: this.state.show.length && this.state.show[0].content1 }}>
                    </div>

                    {/* <div>
                    <div>
                        <dl>
                            <dt>基础设施</dt>
                            <dd>电视机</dd>
                            <dd>空调</dd>
                            <dd>洗衣机</dd>
                            <dd>冰箱</dd>
                            <dd>暖气</dd>
                            <dd>电吹风</dd>
                            <dd>电热水壶</dd>
                            <dd>拖鞋</dd>
                            <dd>晾衣架</dd>
                            <dd>打扫工具</dd>
                            <dd>落地窗</dd>
                            <dd>高档沙发</dd>
                            <dd>有窗户</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>卫浴设施</dt>
                            <dd>独立卫浴</dd>
                            <dd>全天热水</dd>
                            <dd>洗浴用品</dd>
                            <dd>牙具</dd>
                            <dd>毛巾</dd>
                            <dd>卫生纸</dd>
                            <dd>浴巾</dd>
                            <dd>香皂</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>厨房设施</dt>
                            <dd>刀具</dd>
                            <dd>菜板</dd>
                            <dd>洗涤用具</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>安全设施</dt>
                            <dd>门禁系统</dd>
                            <dd>灭火器</dd>
                            <dd>智能门锁</dd>
                            <dd>火灾报警器</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>周边（500米）</dt>
                            <dd>超市</dd>
                            <dd>菜市场</dd>
                            <dd>饭店</dd>
                            <dd>药店</dd>
                            <dd>提款机</dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>特色及其他</dt>
                            <dd>行李寄存免费</dd>
                            <dd>24小时前台</dd>
                            <dd>专职行李员</dd>
                        </dl>
                    </div>
                </div> */}
                </div>

                <div className="policy">
                    <p>入住须知</p>
                    {/* {this.state.show.length && this.state.show[0].content2} */}
                    <div dangerouslySetInnerHTML={{ __html: this.state.show.length && this.state.show[0].content2 }}>
                    </div>
                    {/* <div>
                <div className="policy-first">
                    <div className="policy-title">
                        入住和离店
        </div>
                    <div className="policy-content">
                        入住时间：12：00以后
                        &nbsp; &nbsp;
                        入住时间：12：00以后
        </div>
                </div>
                <div className="policy-first">
                    <div className="policy-title">
                        接待时间
        </div>
                    <div className="policy-content">
                        00:00 -- 24:00
        </div>
                </div>
                <div className="policy-first">
                    <div className="policy-title">
                        发票
        </div>
                    <div className="policy-content">
                        可开发票
        </div>
                </div>
                <div className="policy-first">
                    <div className="policy-title">
                        押金
        </div>
                    <div className="policy-content">
                        无需押金
        </div>
                </div>
                <div className="policy-first">
                    <div className="policy-title">
                        房屋守则
        </div>
                    <div className="policy-content">
                        <ul>
                            <li>接待儿童</li>
                            <li>接待老人</li>
                            <li>抽烟</li>
                            <li>带宠物</li>
                            <li>做饭</li>
                            <li>聚会</li>
                            <li>商业拍摄</li>
                            <li>额外加床</li>
                            <li>额外加人</li>
                            <li>接待外宾</li>
                        </ul>
                    </div>
                </div>
            </div> */}

                </div>
                </div>
                <Footer></Footer>
            </div>
        )

    }
}

Minsu.getInitialProps = async function () {
    const res = await fetch('http://formywei.club:9191/api/getlivedetail/1/' + mingid);
    const data = await res.json();
    console.log(data);
    return { data }
}

export default withRouter(Minsu);