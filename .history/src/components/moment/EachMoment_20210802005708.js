import React, { Component } from 'react'
import avatar from '../../assets/images/avatar.jpg'
import { Icon } from 'antd-mobile'
import ThumbUpArea from './ThumbUpArea'
import CommentArea from './CommentArea'

export default class EachMoment extends Component {
    render() {
        return (
            <div className="each-moment">
                <div className="right">
                    <img src={avatar} alt="" />
                </div>
                <div className="left">
                    <div className="name">Depon</div>
                    <div className="content">
                        牛逼！！！
                    </div>
                    <div className="row">
                        <div className="time">
                            1小时前
                        </div>
                        <div className="func">
                            <div className="like">
                                <svg t="1627834145100" className="icon" viewBox="0 0 1181 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2143" width="20" height="20"><path d="M797.97369512 214.84433213c-19.0870552 0-37.66071016 3.63372802-55.60687712 10.92970655-17.98039396 7.30168303-34.02698212 18.0260292-48.16828769 32.23008348L590.37772952 362.13296279l-103.82080078-104.12884063c-14.15841904-14.20405428-30.19359893-24.92840118-48.18540115-32.23008348a146.33028487 146.33028487 0 0 0-55.60687787-10.92970655c-26.76523057 0-51.3798874 6.56010588-73.82685701 19.72024765-22.47549209 13.13732453-40.23341219 30.97510683-53.35362395 53.50764387-13.10880204 22.54394531-19.65749893 47.22135087-19.65749892 74.06073914a148.31542969 148.31542969 0 0 0 10.88977581 55.81794131c7.28456954 18.0260292 18.00321123 34.11254883 32.14451678 48.31089932l311.41676709 312.39793018 311.39394913-312.39793018c14.12989657-14.20405428 24.83712997-30.28487014 32.09888154-48.31089932a147.66512374 147.66512374 0 0 0 10.92400206-55.81794131c0-26.83938828-6.57151414-51.51679384-19.66890792-74.06073914-13.08598478-22.53253632-30.86672286-40.37031936-53.36503293-53.50764387-22.43556063-13.16584627-47.0274002-19.72024765-73.81544803-19.72024765h0.02281726z m1e-8-73.63290635c39.9595993 0 76.8102791 9.89720304 110.57485733 29.64026796 33.74176026 19.77729188 60.4328331 46.55393144 80.10744551 80.39266739 19.68031691 33.83303145 29.520475 70.79209519 29.55470198 110.88860166 0 28.77889786-5.52760164 56.72494736-16.48583069 83.84955751-11.01527254 27.09608841-27.01052168 51.22586748-48.0599037 72.34370344L590.38343402 882.78857422l-363.3157585-364.46235048C206.05251975 497.23691025 190.04015784 473.09572218 179.03058978 445.9825203 168.0609525 418.82938768 162.54475911 390.89474716 162.54475911 362.1272583c0-40.067984 9.84015809-77.02704774 29.55470126-110.88289717C211.77407279 217.36569443 238.48796361 190.59475937 272.20690589 170.85169374 305.97148411 151.10862882 342.78793693 141.23424376 382.77035422 141.21142578c28.86446455 0 56.71353837 5.4762619 83.57004013 16.41737746 26.83938828 10.91829757 50.90641935 27.03904343 72.09270782 48.3337166l51.90469589 52.04160232 51.89899141-52.04160233c21.03797303-21.11783525 45.06507264-37.16442412 72.12693478-48.19110566C741.3913587 146.74473191 769.25184223 141.21142578 797.92805989 141.21142578h0.04563523z" p-id="2144" fill="#555F85"></path></svg>
                                点赞
                            </div>
                            <div className="comment">
                            <svg t="1627837012180" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6235" width="20" height="20"><path d="M900.3 93.9H123.7c-33 0-59.7 26.7-59.7 59.7v537.6c0 33 26.7 59.7 59.7 59.7h59.7v179.2l268.8-179.2h448c33 0 59.7-26.7 59.7-59.7V153.6c0.1-33-26.6-59.7-59.6-59.7z m0 567.4c0 16.5-13.4 29.9-29.9 29.9h-448L243.2 810.7V691.2h-89.6c-16.5 0-29.9-13.4-29.9-29.9V183.5c0-16.5 13.4-29.9 29.9-29.9h716.8c16.5 0 29.9 13.4 29.9 29.9v477.8z" fill="#555F85" p-id="6236"></path></svg>
                                评论
                            </div>
                        </div>
                        <div className="more">
                            <Icon size="xxs" type="ellipsis"></Icon>
                        </div>
                    </div>
                    <ThumbUpArea/>
                    <CommentArea/>
                </div>
            </div>
        )
    }
}
