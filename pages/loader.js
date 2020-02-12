import Head from 'next/head'
import ShowList from '../components/showList'
import Interest from '../components/Interest'
import Nav from "../components/Nav"
import { Breadcrumb } from 'antd';
import Footer from "../components/Footer"
class Loader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      key: 'loader',
    }
  }

  render() {
    return (
      <div>
        <Nav current={this.state.key}></Nav>
        <Head>
          <title>瑞艾客特</title>
        </Head>
        <div className='top-jxxl'>
          <img src="../static/images/jpxl(R).jpg" />
        
        <div className='smolltital'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a className="font2">精选路线</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        </div>

        <ShowList />
        <Interest />
        <Footer></Footer>
        

        <style jsx>
          {`
            .top-jxxl {              
               width:980px;
               margin:0 auto;
            }
            .smolltital{
                width:850px;
                margin:70px 0 0 80px;
            }
            .smolltital > a{
                color: #666;
                font-size:13px;
            }
          
          
          `}
        </style>
      </div>
    )
  }
}

export default Loader