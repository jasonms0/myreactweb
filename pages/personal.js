import React from "react"
import Head from 'next/head'
import { Icon } from 'antd'
import { Formik, Field, ErrorMessage } from 'formik'
import { Breadcrumb } from 'antd';
import * as Yup from 'yup'
import "../static/less/personal.less"
import "../static/css/font2.css"
import Nav from "../components/Nav"


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1555181_qycjf8m5r8.js'
});

class Personal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            key: 'personal'
        }
    }

    // action = () =>{
    //     var act = document.getElementById("act")
    // }

    render() {
        return (
            <div className="bg">
                <Nav current={this.state.key}></Nav>
                <Head>
                    <title>瑞艾客特</title>
                </Head>
                <div className="content">
                    <img src="../static/images/personalimg.png" />
                    <div className="location">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a className="font2">专属定制</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="middle-content">
                        <ul>
                            <li><img src="../static/images/personal1.jpg" /></li>
                            <li><img src="../static/images/personal2.png" /></li>
                            <li><img src="../static/images/personal3.png" /></li>
                            <li><img src="../static/images/personal4.png" /></li>
                            <li><img src="../static/images/personal5.png" /></li>
                            <li><img src="../static/images/personal6.png" /></li>
                            <li><img src="../static/images/personal7.png" /></li>
                            <li><img src="../static/images/personal8.png" /></li>
                        </ul>
                    </div>
                    <div className="middle">
                        <ul>
                            <li onMouseOver={this.action}>
                                <img src="../static/images/process1.png" />
                                <p className="font2">填写需求</p>
                            </li>
                            <li>
                                <Icon type="double-right" className="icon" id="act"/>
                            </li>
                            <li>
                                <img src="../static/images/process2.png" />
                                <p className="font2">行程定制</p>
                            </li>
                            <li>
                                <Icon type="double-right" className="icon" />
                            </li>
                            <li>
                                <img src="../static/images/process3.png" />
                                <p className="font2">预付定金</p>
                            </li>
                            <li>
                                <Icon type="double-right" /></li>
                            <li>
                                <img src="../static/images/process4.png" />
                                <p className="font2">准备出游</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-content">
                        <ul>
                            <li>
                                <div className="icon"><IconFont type="icon-dainhau" /></div>
                                <p className="font2">联系方式</p>
                                <p>0510-88888</p>
                            </li>
                            <li>
                                <div className="icon"><IconFont type="icon-email" /></div>
                                <p className="font2">企业邮箱</p>
                                <p>arkete@qq.com</p>
                            </li>
                            <li>
                                <div className="icon"><IconFont type="icon-dingwei" /></div>
                                <p className="font2">企业位置</p>
                                <p>厦门浦东路西口</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="foot1">
                    <h3 className="font1">联系我们</h3>
                    <p className="font2">瑞艾客特是厦门市文化和旅游全国十佳旅游网站<br />
                        主要服务是提供旅游路线、住宿以及专属定制
        </p>
                    <div className="foot-content">
                        <Formik
                            initialValues={{
                                name: "",
                                number: "",
                                email: "",
                                adviceText: "",
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().trim().required("请输入名字"),
                                number: Yup.string().matches(/^[1][3,4,5,7,8][0-9]{9}$/, '请输入正确的号码'),
                                email: Yup.string().email('请填写正确的邮箱'),
                                // adviceText: Yup.string().required("请输入内容"),
                                // adviceText:Yup.string().length("len","xxx",val => val.length>0)
                            })}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                            render={props =>
                                <form onSubmit={props.handleSubmit} >
                                    <ul className="form-content">
                                        <li>
                                            <label className="font2">你的名字</label><br />
                                            <Field name="name" />
                                            <ErrorMessage name="name" />
                                        </li>
                                        <li>
                                            <label className="font2">电话号码</label><br />
                                            <Field name="number" />
                                            <ErrorMessage name="number" />
                                        </li>
                                        <li>
                                            <label className="font2">邮箱号码</label><br />
                                            <Field name="email" />
                                            <ErrorMessage name="email" />
                                        </li>
                                    </ul>
                                    <ul className="form-content2">
                                        <li>
                                            <label className="font2">咨询旅游 </label><br />
                                            <textarea className="col" type="textarea" id="advice" name="advice" cols='30' rows='6' />
                                            <ErrorMessage name="adviceText" />
                                        </li>
                                        <li className="submit-area">
                                            <button type="submit" className="font2">提交</button>
                                        </li>

                                    </ul>
                                </form>
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Personal;