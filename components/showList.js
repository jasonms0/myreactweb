import React from 'react'
import axios from 'axios'
import "../static/css/font2.css"
import Link from "next/link"
// import {Tabs} from 'antd'
// const {TabPane} = Tabs

// import 'antd/dist/antd.css'
import { Pagination } from 'antd';

export default class ShowList extends React.Component {
    constructor() {
        super()
        this.state = {
            cateName:[
                '金砖夜游',
                '夜游厦门',
                '鼓浪屿世遗',
                '自驾游',
                '周边游',
                '其他'
            ],
            // list:[],
            page:[],
            current:1, //当前页
            cate:1, //当前分类
            total: 18,
            // itemsPerPage: 9, // 每页几条数据
        }

        this.toggleCate = this.toggleCate.bind(this);
        this.togglePage = this.togglePage.bind(this);
    }

    render() {
        return (
            <div className='pagewidth'>
                <div className='cate'>
                    <ul>
                        <li className='title font2'>
                            选择类型：
                        </li>
                        {this.state.cateName.map((item,index)=>{
                            if(index == 0){
                                return (
                                    <li key={index} data-value={index} className='active item' onClick={this.toggleCate}>
                                        {item}
                                    </li>
                                )
                            }else{
                                return (
                                    <li key={index} data-value={index} className='item' onClick={this.toggleCate}>
                                        {item}
                                    </li>
                                )
                            }
                        }
                            
                        )}
                    </ul>
                </div>
                <div className='list'>
                    {this.state.page.map((item,index)=>
                    <Link href={'/routedetail?id='+item.id}>
                        <a key={index} href={item.src}>
                            <img src={item.lunbo1}/>
                            <p className="font2">{item.rname}</p>
                        </a>
                    </Link>
                        
                    )}
                </div>
                <div className='page'>
                    <Pagination 
                    ref="Pagination"
                        current={this.state.current}
                        onChange={this.togglePage}
                        total={this.setTotal()}
                    />
                </div>
                <style jsx>{`
                    * {
                        box-sizing: border-box;
                    }
                    ul {
                        list-style: none;
                    }
                    a {
                        text-decoration: none;
                        color: #333;
                    }

                    .pagewidth {
                        width: 850px;
                        margin: 25px auto 0;                                              
                    }

                    .cate > ul {
                        margin: 0;
                        
                        padding: 0;
                        height: 45px;
                        // line-height: 45px;
                        border-bottom: 1px solid #eee;
                        // overflow:hidden;
                    }

                    .cate > ul > li {
                        vertical-align: middle;                      
                        display: inline-block;
                        border-bottom:1px solid #eee;                      
                        padding: 0 15px;
                        height: 45px;
                        line-height: 45px;
                        letter-spacing: 1px;
                        cursor: pointer;
                        
                    }

                    .cate > ul > li.active{
                        color: #1890ff;
                        border-bottom:2px solid #1890ff;
                    }

                    .cate > ul > li:active,
                    .cate > ul > li:hover{
                        color: #40a9ff;
                    }

                    .cate .title {
                        font-size: 14px;
                        color: #666;
                    }

                    .list{
                        margin-top: 30px;
                    }

                    .list > a {
                        box-sizing: border-box;
                        display: inline-block;
                        overflow: hidden; 
                        width: 30%;
                        height: 250px;
                        margin: 14px;
                        padding:5px;                                                                    
                    }
                    .list > a > p {
                        margin-top: 15px;
                        font-weight:bold;
                        font-size:16px;
                        
                    }
                   
                    .list > a > img {
                        cursor: pointer;  
                        transition: all 0.7s; 
                        width: 100%;
                        height: 70%;
                    }
                    .list img:hover{  
                        transform: scale(1.1);  
                    }  

                    .page{
                        display: flex;
                        margin-top: 50px;
                        margin-bottom: 70px;
                        justify-content: center;
                    }
                `}</style>
            </div>
        )
    }

    componentDidMount() {
        this.getData('1','1')
    }

    toggleCate(e) {

        let button = arguments[0].currentTarget;
        let cate = button.getAttribute('data-value');
        this.setState({cate:+cate+1});


        //页数变化
        this.setState({current:1});

        //样式变化
        let cli = e.currentTarget; //当前的li
        let lis = cli.parentNode.children;//所有li
        
        for(let i = 0;i<lis.length;i++){
            lis[i].classList.remove('active')
        }

        cli.classList.add('active');
        
        //获取数据
        this.getData(+cate+1,1);
    }

    setTotal(){
        return this.state.total;
    }

    togglePage(num){
        let current = num;

        //改变页码
        this.setState({current:current});

        //改变内容
        this.getData(this.state.cate,num)
    }

    async getData(cate,pagecode) {
        // let res = await axios.get();//得到分页
        // this.setState({total:res});

        let res = await axios.get('http://ssdyy.club:9191/api/getroute/'+cate+'/'+pagecode)

        let resJons = res.data.message;
        //  console.log(resJons)
        this.setState({page:resJons})

    }
}