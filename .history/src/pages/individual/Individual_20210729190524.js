import React, { Component } from "react";
import Identity from "../../components/individual/Identity";
import ListItem from '../../components/common/ListItem'
import { List, WhiteSpace } from "antd-mobile";

const lists = [
  {
    id: 0,
    icon: `<svg t="1627555969371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="98308" width="20" height="20"><path d="M512 972.8a460.8 460.8 0 1 0 0-921.6 460.8 460.8 0 0 0 0 921.6z m0 51.2C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m320-776.96l13.824 16.896a27.1872 27.1872 0 0 0-38.4 0l-411.5456 413.696-156.7744-162.304a29.44 29.44 0 0 0-40.2432 0c-10.5472 10.5472-8.704 27.8528 1.792 38.6048l176.2304 181.76a27.1872 27.1872 0 0 0 40.96-3.072l428.1344-430.1824a27.1872 27.1872 0 0 0-0.1536-38.5024l-13.824-16.896z" p-id="98309" fill="#00AE56"></path></svg>`,
    name: `支付`,
  },
  {
    id: 1,
    icon: `<svg t="1627556130846" class="icon" viewBox="0 0 1077 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="107129" width="20" height="20"><path d="M1076.977778 391.111111l-372.363637-54.30303L538.472727 0l-27.151515 54.30303v0.323233l-139.313131 282.181818-372.040404 54.30303 269.252525 262.141414-63.676768 370.747475 332.929293-174.868687 332.606061 174.868687-63.353535-370.747475 225.616161-219.79798z m-321.616162 245.333333l51.39394 298.989899-268.282829-141.252525-268.60606 141.252525 51.393939-298.989899-217.212121-211.717171 300.282828-43.636364 134.141414-271.838384 134.141414 271.838384 299.959596 43.636364z" fill="#169DFA" p-id="107130"></path><path d="M1076.977778 391.111111l-43.636364 42.343434-60.767677-8.727272-299.959596-43.636364-134.141414-271.838384-27.151515-54.626262v-0.323233l27.151515-54.30303 166.141414 336.808081z" fill="#F6882D" p-id="107131"></path></svg>`,
    name: `收藏`,
  },
  {
    id: 2,
    icon: `<svg t="1627556197141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="108307" width="20" height="20"><path d="M630.8 697.1l-219-267.7-309.4 256-29.5-35.6 345.3-285.6L635.6 630l287.1-265.8 31.2 34.1z" fill="#1296db" p-id="108308"></path><path d="M699.9 456.3c-56.2 0-101.9-45.7-101.9-101.9s45.7-101.9 101.9-101.9 101.9 45.7 101.9 101.9-45.7 101.9-101.9 101.9z m0-157.6c-30.7 0-55.7 25-55.7 55.7 0 30.7 25 55.7 55.7 55.7 30.7 0 55.7-25 55.7-55.7 0-30.7-25-55.7-55.7-55.7z" fill="#1296db" p-id="108309"></path><path d="M797.7 119.1H226.3c-89.2 0-161.8 72.6-161.8 161.8v462.2c0 89.2 72.6 161.8 161.8 161.8h571.3c89.2 0 161.8-72.6 161.8-161.8V280.9c0.1-89.2-72.5-161.8-161.7-161.8z m115.5 624c0 63.7-51.8 115.6-115.6 115.6H226.3c-63.7 0-115.6-51.8-115.6-115.6V280.9c0-63.7 51.8-115.6 115.6-115.6h571.3c63.7 0 115.6 51.8 115.6 115.6v462.2z" fill="#1296db" p-id="108310"></path></svg>`,
    name: `朋友圈`,
  },
  {
    id: 3,
    icon: `<svg t="1627556223102" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="109979" width="20" height="20"><path d="M791.22432 476.52864 420.57728 262.53312l-61.44-35.47136 0 70.94272 0 427.99104 0 70.94272 61.44-35.47136 370.6368-213.98528 61.44-35.47136L791.22432 476.52864zM400.09728 725.98528 400.09728 298.00448 770.74432 512 400.09728 725.98528z" p-id="109980" fill="#E8A456"></path><path d="M512 0C229.23264 0 0 229.23264 0 512c0 282.75712 229.23264 512 512 512 282.7776 0 512-229.24288 512-512C1024 229.23264 794.7776 0 512 0zM512 983.04C252.27264 983.04 40.96 771.72736 40.96 512 40.96 252.2624 252.27264 40.96 512 40.96c259.7376 0 471.04 211.3024 471.04 471.04C983.04 771.72736 771.7376 983.04 512 983.04z" p-id="109981" fill="#E8A456"></path></svg>`,
    name: `视频号`,
  },
  {
    id: 4,
    icon: `<svg t="1627556269327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="112130" width="20" height="20"><path d="M172.9 313.3c-8.5-41.1 3-81.2 32.3-112.7 26.3-28.2 66.4-49.1 112.9-58.7l365.8-75.7c23.9-4.9 48.3-1.5 68.7 9.7 21.3 11.6 36 30.2 41.3 52.4 0.2 0.8 0.4 1.8 0.6 2.5l50 159.6-38.2 12-50-159.6c-0.6-1.9-1-3.5-1.4-5-5.8-23.8-34-38.3-63-32.3L326.2 181c-66.7 13.8-127.9 57.6-114.1 124.2l-39.2 8.1z" fill="#1296db" p-id="112131"></path><path d="M837.2 962.2H186.7C118.8 962.2 63.5 907 63.5 839V412.4c0-67.9 55.3-123.2 123.2-123.2h650.5c67.9 0 123.2 55.3 123.2 123.2V839c0 68-55.3 123.2-123.2 123.2z m-650.5-633c-45.9 0-83.2 37.3-83.2 83.2V839c0 45.9 37.3 83.2 83.2 83.2h650.5c45.9 0 83.2-37.3 83.2-83.2V412.4c0-45.9-37.3-83.2-83.2-83.2H186.7z" fill="#1296db" p-id="112132"></path><path d="M929.3 760.1H537.2c-49.9 0-90.5-40.6-90.5-90.5v-91.4c0-49.9 40.6-90.5 90.5-90.5h392.1v40H537.2c-27.9 0-50.5 22.7-50.5 50.5v91.4c0 27.9 22.7 50.5 50.5 50.5h392.1v40z" fill="#1296db" p-id="112133"></path><path d="M609.4 666.9h-32c-15.8 0-28.7-12.9-28.7-28.7v-32c0-15.8 12.9-28.7 28.7-28.7h32c15.8 0 28.7 12.9 28.7 28.7v32c0.1 15.8-12.9 28.7-28.7 28.7z" fill="#1296db" p-id="112134"></path></svg>`,
    name: `卡包`,
  },
  {
    id: 5,
    icon: `<svg t="1627556310261" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="113907" width="20" height="20"><path d="M512 992C247.3 992 32 776.7 32 512S247.3 32 512 32s480 215.3 480 480-215.3 480-480 480z m0-896C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96z" p-id="113908" fill="#E8A456"></path><path d="M512 800c-78 0-151.1-30.7-205.7-86.5C253.2 659.4 224 587.8 224 512c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32 0 75.8-29.2 147.4-82.3 201.5C663.1 769.3 590 800 512 800zM352 668.8c42.5 43.4 99.3 67.2 160 67.2s117.5-23.9 160-67.2c33.7-34.4 55-77.9 61.7-124.8H290.3c6.6 46.9 28 90.3 61.7 124.8zM368 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m288 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" p-id="113909" fill="#E8A456"></path></svg>`,
    name: `表情`,
  },
  {
    id: 6,
    icon: `<svg t="1627556328266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="115009" width="20" height="20"><path d="M553.531 922.335h-77.1c-29.133 0-52.835-23.701-52.835-52.835v-52.036A315.23 315.23 0 0 1 364 793.454l-38.064 38.064c-9.979 9.979-23.247 15.475-37.36 15.475-14.112 0-27.38-5.496-37.359-15.475L196.699 777c-20.6-20.6-20.6-54.119 0-74.719l36.798-36.798a315.238 315.238 0 0 1-25.175-59.116H154.5c-29.133 0-52.835-23.701-52.835-52.835v-77.1c0-29.133 23.702-52.835 52.835-52.835h52.036a315.096 315.096 0 0 1 24.01-59.596l-38.064-38.064c-20.6-20.6-20.6-54.119 0-74.719L247 196.699c9.979-9.979 23.247-15.475 37.36-15.475s27.381 5.496 37.36 15.475l36.798 36.798a315.238 315.238 0 0 1 59.116-25.175V154.5c0-29.133 23.701-52.835 52.835-52.835h77.101c29.133 0 52.835 23.702 52.835 52.835v52.036a315.123 315.123 0 0 1 59.596 24.01l38.064-38.063c9.979-9.979 23.247-15.475 37.36-15.475 14.112 0 27.38 5.496 37.359 15.475L827.302 247c9.979 9.979 15.475 23.247 15.475 37.36s-5.496 27.381-15.475 37.36l-36.798 36.798a315.332 315.332 0 0 1 25.175 59.116H869.5c29.133 0 52.835 23.701 52.835 52.835v77.101c0 29.133-23.701 52.835-52.835 52.835h-52.036a315.256 315.256 0 0 1-24.01 59.596l38.064 38.064c20.6 20.6 20.6 54.119 0 74.719L777 827.302c-9.979 9.979-23.247 15.475-37.359 15.475-14.113 0-27.381-5.496-37.36-15.475l-36.798-36.798a315.266 315.266 0 0 1-59.116 25.175V869.5c-0.001 29.133-23.702 52.835-52.836 52.835zM355.865 729.446l17.137 10.476a264.72 264.72 0 0 0 81.563 32.795l20.045 4.395V869.5c0 1.004 0.818 1.822 1.822 1.822h77.1a1.825 1.825 0 0 0 1.822-1.822v-93.322l19.521-4.712a264.86 264.86 0 0 0 80.863-34.502l17.281-11.067 65.333 65.333c0.132 0.132 0.534 0.534 1.289 0.534 0.754 0 1.156-0.402 1.288-0.534l54.519-54.519a1.823 1.823 0 0 0 0-2.577l-66.001-65.999 10.476-17.137a264.734 264.734 0 0 0 32.795-81.562l4.395-20.045H869.5a1.825 1.825 0 0 0 1.822-1.822v-77.101a1.824 1.824 0 0 0-1.822-1.822h-93.323l-4.712-19.522a264.823 264.823 0 0 0-34.5-80.863l-11.067-17.281 65.333-65.332c0.132-0.132 0.534-0.534 0.534-1.289 0-0.754-0.401-1.156-0.534-1.288l-54.519-54.519a1.733 1.733 0 0 0-1.288-0.534c-0.755 0-1.157 0.402-1.289 0.534l-65.999 65.999-17.137-10.475a264.734 264.734 0 0 0-81.562-32.795l-20.045-4.394V154.5a1.825 1.825 0 0 0-1.822-1.822h-77.101a1.824 1.824 0 0 0-1.822 1.822v93.323l-19.521 4.712a264.853 264.853 0 0 0-80.863 34.501l-17.281 11.067-65.332-65.333c-0.132-0.132-0.534-0.534-1.289-0.534-0.754 0-1.156 0.402-1.288 0.534l-54.519 54.519a1.823 1.823 0 0 0 0 2.577l65.999 66-10.475 17.137a264.72 264.72 0 0 0-32.795 81.563l-4.394 20.045H154.5a1.825 1.825 0 0 0-1.822 1.822v77.1c0 1.004 0.818 1.822 1.822 1.822h93.323l4.712 19.521a264.812 264.812 0 0 0 34.501 80.863l11.067 17.281-65.333 65.333a1.825 1.825 0 0 0 0 2.577l54.519 54.519c0.132 0.132 0.534 0.534 1.288 0.534 0.755 0 1.156-0.402 1.289-0.534l65.999-66.003z" fill="#1296db" p-id="115010"></path><path d="M512 652c-77.196 0-140-62.804-140-140s62.804-140 140-140 140 62.804 140 140-62.804 140-140 140z m0-227.027c-47.987 0-87.027 39.04-87.027 87.027 0 47.986 39.04 87.027 87.027 87.027 47.986 0 87.027-39.041 87.027-87.027 0-47.987-39.041-87.027-87.027-87.027z" fill="#1296db" p-id="115011"></path></svg>`,
    name: `设置`,
  }
];

export default class Individual extends Component {
  render() {
    return (
      <div>
        <Identity />
        <WhiteSpace size="sm" style={{background: "#EDEDED"}}/>
        <List>
            {lists.map(i => (
                <ListItem key={i.id} list={lists[i.id]}/>
                {i.id === 1 ? <WhiteSpace size="sm" style={{background: "#EDEDED"}}/> : ''}
            ))}
        </List>
      </div>
    );
  }
}
