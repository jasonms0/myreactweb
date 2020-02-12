import React from 'react'
import axios from 'axios'
import "../static/css/font.css"
import $ from 'jquery'

class interest extends React.Component{
    constructor(){
        super()
        this.state = {
            list:[]
        }

        this.autoCarousel = this.autoCarousel.bind(this);
        // this.stopCarousel = this.stopCarousel.bind(this);
    }

    render(){
        return (
            <div className="desrvea">
                <div className="title">
                    <p className="font1">可能感兴趣的地方</p>
                </div>
                <div className="list">
                    <div ref="wrapper" className="wrapper">
                        {this.state.list.map((item,index)=>
                            <a key={index} href={item.src}>
                                <img src={item.lunbo1}/>
                                <p className="addr">{item.rname}</p>
                                <p className="hope">1354人想去</p>
                            </a>
                        )}
                    </div>
                </div>
                <style jsx>
                {`
                .desrvea {
                    width: 850px;
                    margin: 25px auto;
                }
                .title > p{                   
                    font-size:22px;
                    font-weight:bolder;
                }

                .list {
                    width: 100%;
                    height: 230px;
                    overflow: hidden;
                }

                .list > .wrapper {
                    width:200%;
                    height: 100%;
                }

                .list > .wrapper > a {
                    box-sizing: border-box;
                    display: inline-block;
                    overflow: hidden; 
                    width: 12.5%;
                    height: 100%;
                    padding:5px;                                                                    
                }
                .list > .wrapper > a > p {
                    margin-bottom: 10px;
                    text-align: center; 
                                     
                }
                .list > .wrapper > a > .addr {
                    color:black;
                }
                .list > .wrapper > a > .hope {
                    color:#505050;
                    font-size:12px;
                }
               
                .list > .wrapper > a > img {
                    cursor: pointer;  
                    // transition: all 0.7s; 
                    width: 100%;
                    height: 70%;
                    margin-bottom: 10px;
                }
                
                
                `}
            </style>
            </div>
        )
    }

    componentDidMount(){
        this.getData().then(()=>{
            this.autoCarousel();
        })
        
    }
    componentWillUnmount(){
        clearInterval(this.carouselTimer);
    }

    async getData(){
        let res = await axios.get('http://ssdyy.club:9191/api/getinterest');
        let resJson = res.data.message;
        this.setState({list:resJson});
    }

    //轮播向左移动一格
    carouselToLeft(){
        let $wrapper = $(this.refs.wrapper);
        let $first = $wrapper.children().first().clone();
        $wrapper.append($first);

        $wrapper.animate({marginLeft:'-25%'},3000,'linear',()=>{
            $wrapper.children().first().remove();
            $wrapper.css({marginLeft:'0'});
        });
    }
    //轮播向右一格
    carouselToRight(){
        
    }
    //自动轮播
    autoCarousel(){

        setTimeout(()=>{
            this.carouselToLeft();
            this.carouselTimer = setInterval(()=>{
                this.carouselToLeft();
            },3050);
        },0)

        
    }
    //停止自动轮播
    // stopCarousel(){
    //     clearInterval(this.carouselTimer);
    // }
}
  
  export default interest