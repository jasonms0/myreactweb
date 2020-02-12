import "../static/less/container.less"
import "../static/css/font.css"
import "../static/css/font2.css"
import { Tabs, Button  } from 'antd';
import Link from 'next/link'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Container extends React.Component {



  render() {
    return (

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
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="金砖雅游" key="1">
            <ul>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>博物馆古文化之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>禅茶一味吉祥之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>魅力时尚之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>文创艺术品鉴之旅</p>
            </li>
          </ul>
            </TabPane>
            <TabPane tab="夜游厦门" key="2">
            <ul>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>博物馆古文化之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>禅茶一味吉祥之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>魅力时尚之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>文创艺术品鉴之旅</p>
            </li>
          </ul>
            </TabPane>
            <TabPane tab="鼓浪屿世遗" key="3">
            <ul>
            <li>
              <img src="../static/images/hottravel3.png" />
              <p>博物馆古文化之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel3.png" />
              <p>禅茶一味吉祥之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel3.png" />
              <p>魅力时尚之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel3.png" />
              <p>文创艺术品鉴之旅</p>
            </li>
          </ul>
            </TabPane>
            <TabPane tab="自驾游" key="4">
            <ul>
            <li>
              <img src="../static/images/hottravel4.png" />
              <p>博物馆古文化之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel4.png" />
              <p>禅茶一味吉祥之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel4.png" />
              <p>魅力时尚之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel4.png" />
              <p>文创艺术品鉴之旅</p>
            </li>
          </ul>
            </TabPane>
            <TabPane tab="周边游" key="5">
            <ul>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>博物馆古文化之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>禅茶一味吉祥之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>魅力时尚之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel1.png" />
              <p>文创艺术品鉴之旅</p>
            </li>
          </ul>
            </TabPane>
            <TabPane tab="其他" key="6">
            <ul>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>博物馆古文化之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>禅茶一味吉祥之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>魅力时尚之旅</p>
            </li>
            <li>
              <img src="../static/images/hottravel2.png" />
              <p>文创艺术品鉴之旅</p>
            </li>
          </ul>
            </TabPane>
          </Tabs>
        </div>
        <div className="title2 font1">旅游住宿</div>
        <div className="hotel">
          <img src="../static/images/hotel1.png" />
          <img src="../static/images/hotel2.png" />
          <img src="../static/images/hotel3.png" />
          <img src="../static/images/hotel4.png" />
          <img src="../static/images/hotel5.png" />
        </div>
      </div>
    )
  }
}


export default Container