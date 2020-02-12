import "../static/less/home.less"
import "../static/css/font.css"
import "../static/css/font2.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import fetch from 'isomorphic-unfetch';
import React from 'react'
import Head from 'next/head'

import { Tabs, Button } from 'antd';
import Link from 'next/link'

const { TabPane } = Tabs;


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      key: 'home',
      show: [],
      show1: [],
      show2: [],
      show3: [],
      show4: [],
      show5: [],
      show6: [],

    }
  }

  callback = (key) => {

  }

  componentDidMount() {
    this.setState((state) => ({
      show: [...this.props.data.message],
      show1: [...this.props.data1.message],
      show2: [...this.props.data2.message],
      show3: [...this.props.data3.message],
      show4: [...this.props.data4.message],
      show5: [...this.props.data5.message],
      show6: [...this.props.data6.message],
    }), () => {
      console.log(this.state, "11111111")
    }
    )
  }

  static async getInitialProps() {
    const res = await fetch("http://formywei.club:9191/api/gethottravel/1");
    const data = await res.json();
    // console.log(data)
    const res1 = await fetch("http://formywei.club:9191/api/gethottravel/2");
    const data1 = await res1.json();

    const res2 = await fetch("http://formywei.club:9191/api/gethottravel/3");
    const data2 = await res2.json();

    const res3 = await fetch("http://formywei.club:9191/api/gethottravel/4");
    const data3 = await res3.json();

    const res4 = await fetch("http://formywei.club:9191/api/gethottravel/5");
    const data4 = await res4.json();

    const res5 = await fetch("http://formywei.club:9191/api/gethottravel/6");
    const data5 = await res5.json();

    const res6 = await fetch("http://formywei.club:9191/api/getfirstlive");
    const data6 = await res6.json();
    return  {data,data1,data2,data3,data4,data5,data6} ;
  }


  render() {
    return (
      <div className="bg">
        <Nav current={this.state.key}></Nav>
        <Head>
          <title>瑞艾客特</title>
        </Head>
        <div className="container">
          <div className="aboutus">
            <img src="../static/images/homeimg.png" />
            <div>
              <Button type="primary">
                <Link href="/aboutus">
                  <a className="font2">点击了解</a>
                </Link>
              </Button>
            </div>
          </div>
          <div className="title1 font1">我们的优势</div>
          <div className="advantage">
            <ul>
              <li>
                <img src="../static/images/advantage1.png" />
                <h2 className="font2">路线规划</h2>
                <p>厦门及周边全景点旅行路线规划，我们不走平凡路!</p>
              </li>
              <li>
                <img src="../static/images/advantage2.png" />
                <h2 className="font2">专属定制</h2>
                <p>私人专属定制境外旅游，户外运动，为不平凡的你创造不平凡的世界！</p>
              </li>
              <li>
                <img src="../static/images/advantage3.png" />
                <h2 className="font2">旅游住宿</h2>
                <p>厦门特色民宿，星级酒店全方位介绍，不同的选择，不一样的享受！</p>
              </li>
              <li>
                <img src="../static/images/advantage4.png" />
                <h2 className="font2">餐饮娱乐</h2>
                <p>地道小吃、海鲜排挡、私房佳肴，带您品尝舌尖上的美味！</p>
              </li>
              <li>
                <img src="../static/images/advantage5.png" />
                <h2 className="font2">全陪导游</h2>
                <p>这是一个活地图、活历史，更是一个活着的美食宝典！</p>
              </li>
              <li>
                <img src="../static/images/advantage6.png" />
                <h2 className="font2">特约咨询</h2>
                <p>旅行特约指导，让您在外地有家一样的感觉！</p>
              </li>
            </ul>
          </div>
          <div className="title2 font1">关于我们</div>
          <div className="about">
            <img src="../static/images/company.png" />
            <div className="com-content">
              <h1 className="font1">瑞艾客特旅行</h1>
              <p>瑞艾客特旅行成立于2019年，由一群热爱生活、热爱旅游的驴友创办。现今社会，人们忙于生活</p>
            </div>
          </div>
          <div className="title2 font1">热门旅游</div>
          <div className="hottravel">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="金砖雅游" key="1">
                <ul>
                  {
                    this.state.show.map((item, index) => {
                      return (
                        <li  key={index}>
                          <div>
                            <img src={item&&item.lunbo1}/>
                          </div>
                          <p>{item&&item.rname}</p>
                        </li>
                      )
                    })

                  }
                </ul>
              </TabPane>
              <TabPane tab="夜游厦门" key="2">
                <ul>
                {
                    this.state.show1.map((item, index) => {
                      return (
                        <li  key={index}>
                          <div>
                            <img src={item&&item.lunbo1} />
                          </div>
                          <p>{item&&item.rname}</p>
                        </li>
                      )
                    })

                  }
                </ul>
              </TabPane>
              <TabPane tab="鼓浪屿世遗" key="3">
                <ul>
                {
                    this.state.show2.map((item, index) => {
                      return (
                        <li  key={index}>
                          <div>
                            <img src={item&&item.lunbo1} />
                          </div>
                          <p>{item&&item.rname}</p>
                        </li>
                      )
                    })

                  }
                </ul>
              </TabPane>
              <TabPane tab="自驾游" key="4">
                <ul>
                {
                    this.state.show3.map((item, index) => {
                      return (
                        <li  key={index}>
                          <div>
                            <img src={item&&item.lunbo1} />
                          </div>
                          <p>{item&&item.rname}</p>
                        </li>
                      )
                    })

                  }
                </ul>
              </TabPane>
              <TabPane tab="周边游" key="5">
                <ul>
                {
                    this.state.show4.map((item, index) => {
                      return (
                        <li  key={index}>
                          <div>
                            <img src={item&&item.lunbo1} />
                          </div>
                          <p>{item&&item.rname}</p>
                        </li>
                      )
                    })

                  }
                </ul>
              </TabPane>
              <TabPane tab="其他" key="6">
                <ul>
                {
                    this.state.show5.map((item, index) => {
                      return (
                        <li  key={index}>
                          <div>
                            <img src={item&&item.lunbo1} />
                          </div>
                          <p>{item&&item.rname}</p>
                        </li>
                      )
                    })

                  }
                </ul>
              </TabPane>
            </Tabs>
          </div>
          <div className="title2 font1">旅游住宿</div>
          <div className="hotel">
          {
                    this.state.show6.map((item, index) => {
                      return (
                        <div key={index}>
                          <img src={item&&item.img} />
                          <span>{item&&item.lname}</span>
                        </div>
                      )
                    })

                  }
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home