import React from 'react'
import ReactDom from 'react-dom'
import fetch from 'isomorphic-unfetch';
import '../static/css/detail.css'
import { Carousel } from 'antd'
import Interest from '../components/Interest'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Breadcrumb } from 'antd';
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router';
var routeid;
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: [],
            msg1: []
        }
    }

    async componentDidMount() {
        const res1 = await fetch(`http://formywei.club:9191/api/getroutedetail/${routeid}`);
        const data1 = await res1.json();
        routeid=this.props.router.query.id
        const message1 = data1.message
        const { message } = this.props.data
        console.log(message1)
        this.setState(() => ({
            msg: [...message],
            msg1: [...message1]
        }), () => {
            this.setState({
                url1: this.state.msg[0].lunbo1,
                url2: this.state.msg[1].lunbo1,
                url3: this.state.msg[2].lunbo1,
                url4: this.state.msg[3].lunbo1,
                url5: this.state.msg[0].rname,
                url6: this.state.msg[1].rname,
                url7: this.state.msg[2].rname,
                url8: this.state.msg[3].rname,
                url9: this.state.msg[0].gonum,
                url10: this.state.msg[1].gonum,
                url11: this.state.msg[2].gonum,
                url12: this.state.msg[3].gonum,

                lunbo1: this.state.msg1[0].lunbo1,
                lunbo2: this.state.msg1[0].lunbo2,
                lunbo3: this.state.msg1[0].lunbo3,
                rname: this.state.msg1[0].rname,
                content: this.state.msg1[0].content,
                days: this.state.msg1[0].days,
                destination: this.state.msg1[0].destination,
                id: this.state.msg1[0].id,
                special: this.state.msg1[0].special,
            })
        })

    }

    render() {
        return (
            <div className="about-content">
                <Nav current={this.state.key}></Nav>
                <Head>
                    <title>瑞艾客特</title>
                </Head>
                <div className="overaaa">
                <img src="../static/images/jpxl(R).jpg" />
                <div className="location">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link href="/loader">
                                <a className="font2">精选路线</a>
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a className="font2">行程安排</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                </div>
                <div className="overall">
                
                    
                    <div className="first">
                        <div className="lunbo">
                            <Carousel autoplay >
                                <div>
                                    {/* <img src={this.state.show.length && this.state.show[0].lunbo1} /> */}
                                    <img src={this.state.lunbo1} />
                                    {/* <img src='../static/images/testimg1.jpg' /> */}
                                </div>
                                <div>
                                    {/* <img src={this.state.show.length && this.state.show[0].lunbo2} /> */}
                                    <img src={this.state.lunbo2} />
                                    {/* <img src='../static/images/jinxuan.png' /> */}
                                    {/* <img src='../static/images/testimg2.jpg' /> */}

                                </div>
                                <div>
                                    {/* <img src={this.state.show.length && this.state.show[0].lunbo3} /> */}
                                    {/* <img src='../static/images/testimg3.jpg' /> */}
                                    <img src={this.state.lunbo3} />
                                </div>
                            </Carousel>
                        </div>
                        <div className="outline">
                            <h2>景点介绍</h2>
                            <p className="outline-first">
                                厦门市博物馆是我国东南地区的一座重要的地方综合性博物馆，致力于我国东南地区特别是闽台两岸珍贵文化遗产的收藏、保护、
                                研究与展示，利用博物馆直观的展品和各种展示手段，宣传国家文物政策，普及文物考古和历史知识，弘扬和保护中华民族优秀的文化遗产，
                                保存历史记忆，激励人们树立民族自信心和爱国的高尚情操。
                        </p>
                            <p>行程天数: {this.state.days}日游</p>
                            <p>目的地: {this.state.destination}</p>
                            <p>线路类型: 金砖雅游</p>
                            <p>行程特色: {this.state.special}</p>
                        </div>
                    </div>

                    <div className="second">
                        <h2>行程介绍</h2>
                        <div className="second-content">
                            <div className="second-left">
                                {/* <div className="firstday"><span>第一天</span></div> */}
                                <span>第一天</span>
                            </div>
                            <div className="second-right" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                        </div>
                        <p className="second-footer">
                            以上行程时间安排可能会因天气，路况等原因做相应调整，敬请谅解。
                        </p>
                    </div>
                    <Interest />

                </div>
                
            </div>
            
        )
    }
}

About.getInitialProps = async function () {
    
    const res = await fetch('http://formywei.club:9191/api/getinterest');
    // console.log(res)
    
    const data = await res.json();
    return { data };
}

export default withRouter(About);