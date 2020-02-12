import "../static/less/common.less"
import "../static/css/font2.css"
import { Input, Icon, Menu } from 'antd';
import Link from 'next/link'

class Nav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      current: 'home',

    }

  }
  componentDidMount() {

    this.setState({
      current: this.props.current
    })

  }

  render() {
    return (

      <div className="header">
        <div className="logo"><img src="../static/images/logo.png" /></div>
        <div className="search">
          <Input className="font2"
            suffix={<Icon type="search" style={{ color: '#2279E0', position: "absolute", right: "60px", top: "8px" }} />}
            placeholder="搜索你喜欢的地方" />
        </div>
        <div className="banner">
          <Menu className="font2" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="home">
              <Link href="/">
                <a>官网首页</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="loader">
              <Link href="/loader">
                <a>精选路线</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="live">
              <Link href="/live">
                <a>旅游住宿</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="personal">
              <Link href="/personal">
                <a>专属定制</a>
              </Link>
            </Menu.Item>
          </Menu>
        </div>

      </div>
    )
  }
}

export default Nav