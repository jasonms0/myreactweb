import { Carousel, Rate } from 'antd'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router';
import "../static/less/hotel.less"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Head from 'next/head'
import { Breadcrumb } from 'antd';
import Link from 'next/link'
var hotelid=4;
class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'live',
            dotPosition: 'top',
            show: [],
        };

    }



    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    async componentDidMount() {
        // 获取广告数据
        hotelid = this.props.router.query.id
        // console.log( id);
        this.setState((state) => ({
            show: [...this.props.data.message]
        }), () => {
            // this.setState({
            //     star:this.state.show[0].star
            // })
            //console.log(this.state.show[0].star,this.state.star)

            // console.log(this.state.show, "kkkkkkkkkkkkkk")
            // console.log(this.state.show[0].star)
        })

    }
    getcontent = () => {

    }
    render() {


        const { dotPosition } = this.state;
        const star = this.state.show.length && this.state.show[0].star;
        // console.log(star, "ppppp")

        return (
            <div className="bg3">
                <Nav current={this.state.key}></Nav>
                <Head>
                    <title>瑞艾客特</title>
                </Head>
                <div className="container-hotel7">

                    <img src="../static/images/aboutimg.png" />
                    <div className="location">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link href="/live">
                                    <a className="font2">旅游住宿</a>
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a className="font2">星级酒店</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="content7">
                        <div className="pic7">
                            {/* <img src="../static/3.png" /> */}

                            <Carousel autoplay className="pic-carousel7">
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
                        <div className="hotel-content7">
                            <h1><b>{this.state.show.length && this.state.show[0].lname}</b></h1>
                            <Rate disabled value={star} />
                            <p><b>
                                {this.state.show.length && this.state.show[0].intro}
                            </b></p>
                        </div>
                    </div>

                    <div className="facilities7">
                        <p>酒店设施</p>
                        <div dangerouslySetInnerHTML={{ __html: this.state.show.length && this.state.show[0].content1 }}>
                        </div>
                    </div>

                    <div className="policy7">
                        <p>酒店政策</p>
                        <div dangerouslySetInnerHTML={{ __html: this.state.show.length && this.state.show[0].content2 }}>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        )
    }

}

Hotel.getInitialProps = async function () {
    const res = await fetch('http://formywei.club:9191/api/getlivedetail/2/' + hotelid);
    const data = await res.json();
    console.log(data);
    return { data }
}


export default withRouter(Hotel);