import "../static/less/live.less"
import "../static/css/font.css"
import "../static/css/font2.css"
import fetch from 'isomorphic-unfetch';
import React from 'react'
import Head from 'next/head'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
// import {fetchget} from '../utils/myfetch'
import { withRouter } from 'next/router';
import { Breadcrumb, Card } from 'antd';
import Link from 'next/link'
const { Meta } = Card;

class Live extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            key: 'live',
            page: 1,
            actived: 'actived',
            beforeactive: 'beforeactive',
            jiudian: [],
            mingsu: []
        }
    }
    async componentDidMount() {
        let res = await fetch("http://formywei.club:9191/api/getlive/1/1");
        let data = await res.json();
        let message = data.message
        // console.log(message)
        this.setState((state) => ({
            mingsu: [...message]
        }), () => {

        })
        let res1 = await fetch("http://formywei.club:9191/api/getlive/2/1");
        let data1 = await res1.json();
        let message1 = data1.message
        // console.log(message1)
        this.setState((state) => ({
            jiudian: [...message1]
        }), () => {

        })
    }
    getnextpage = async (page) => {
        let res = await fetch("http://formywei.club:9191/api/getlive/1/" + page);
        let data = await res.json();
        let message = data.message
        // console.log(message)
        this.setState((state) => ({
            mingsu: [...message]
        }), () => {

        })
        let res1 = await fetch("http://formywei.club:9191/api/getlive/2/" + page);
        let data1 = await res1.json();
        let message1 = data1.message
        // console.log(message1)
        this.setState((state) => ({
            jiudian: [...message1]
        }), () => {

        })
    }
    getming() {
        return (this.state.mingsu.length && this.state.mingsu.map((item, idx) => {
            return (<Link href={`/minsu?id=${item.id}`} key={idx}>
                <div>
                    <img src={item.img} />
                    <span>{item.lname}</span>
                </div>
            </Link>)

        })

        )
    }
    getjiu() {
        return (this.state.mingsu.length && this.state.jiudian.map((item, idx) => {
            return (<Link href={`/hotel?id=${item.id}`} key={idx}>
                <li>
                    <div>
                        <img src={item.img} />
                    </div>
                    <p>{item.lname}</p>
                </li>
            </Link>)

        })

        )

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
                                <a className="font2">旅游住宿</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="title2 font1">民宿体验</div>
                    <div className="hotel1">
                        {this.getming()}
                    </div>
                    <div className="title2 font1">星级酒店</div>
                    <ul className="hotel2">
                        {this.getjiu()}
                    </ul>
                </div>
                <div className='pages'>
                    <div className='page'>
                        <div className='num' onClick={() => { this.getnextpage(1) }}>1</div>
                    </div>
                    <div className='page'>
                        <div className='num' onClick={() => { this.getnextpage(2) }}>2</div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}


export default withRouter(Live)