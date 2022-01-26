import React, { Component } from "react";
import { Icon, ImagePicker, Modal, Toast } from "antd-mobile";
import { Input } from "@chatui/core";
import ListItem from "../../components/common/ListItem";
import { postMoment, postImages } from "../../api/moment";
import baseUrl from "../../utils/baseUrl";

const alert = Modal.alert;

// const data = [
//   {
//     url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
//     id: "2121",
//   },
//   {
//     url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
//     id: "2122",
//   },
// ];

const lists = [
  {
    id: 0,
    icon: `<svg t="1627889778828" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11961" width="20" height="20"><path d="M514.56 227.84c-107.52 0-194.56 87.04-194.56 194.56s87.04 194.56 194.56 194.56 194.56-87.04 194.56-194.56-87.04-194.56-194.56-194.56z m0 312.32c-65.024 0-117.76-52.736-117.76-117.76s52.736-117.76 117.76-117.76 117.76 52.736 117.76 117.76-52.736 117.76-117.76 117.76z" p-id="11962" fill="#2c2c2c"></path><path d="M800.256 116.224C727.04 46.08 625.664 7.68 514.56 7.68S302.08 46.08 228.864 116.224c-78.336 74.24-119.296 177.152-119.296 296.96 0 74.24 30.72 202.24 176.128 391.68 40.96 52.736 86.016 104.448 128 144.896 69.12 67.072 89.088 67.072 100.864 67.072s31.744 0 100.864-67.072c41.984-40.448 87.04-91.648 128-144.896 145.92-189.44 176.128-317.44 176.128-391.68 0.512-120.32-40.96-222.72-119.296-296.96z m-107.008 627.712c-74.24 98.816-148.992 171.008-178.688 192-29.696-20.992-104.96-93.184-178.688-192-96.768-129.024-149.504-246.272-149.504-330.752 0-98.304 33.28-181.76 95.744-241.664 58.88-56.32 141.824-87.04 232.96-87.04s174.08 30.72 232.96 87.04c62.464 59.392 95.744 142.848 95.744 241.664-0.512 84.48-53.76 201.728-150.528 330.752z" p-id="11963" fill="#2c2c2c"></path></svg>`,
    name: "所在位置",
  },
  {
    id: 1,
    icon: `<svg t="1627889622170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7713" width="20" height="20"><path d="M514.162246 64.443731c-246.201331 0-446.51045 200.783932-446.51045 447.571618 0 246.772336 201.037712 447.539896 448.157973 447.539896 50.29857 0 99.615788-8.224312 146.523121-24.436552 18.414395-6.370081 31.060413-12.423961 31.472805-12.630668 7.194866-3.217275 12.614296-9.049097 15.213493-16.401552 2.63092-7.305383 2.155083-15.133675-1.299599-22.043039l-2.883677-5.831822c-7.131421-14.262842-24.974811-20.569478-40.156582-13.850449-0.031722 0.031722-5.8001 3.02694-20.094664 8.082072-41.075511 14.627139-84.21196 22.059412-128.235616 22.059412-210.92592 0-382.487298-171.57775-382.487298-382.487298S305.423131 129.512702 516.349051 129.512702c210.894198 0 382.455575 171.5931 382.455575 382.423853-0.887206 51.868321-13.882172 100.486622-36.606733 136.855948-20.664645 33.104979-46.939055 51.994188-72.199369 51.994188-0.317225 0-0.601704 0-0.887206 0-45.829791-0.792039-75.433016-68.586075-75.433016-172.718737l0-185.269587c0-5.53097-1.426489-9.635451-4.373611-12.550851-4.944616-4.944616-12.360516-4.817726-21.267373-4.864798l-2.472308 0.016373-9.223059-0.016373c-7.701402 0.031722-13.469779-0.063445-17.495466 3.945869-3.645017 3.613294-4.119831 9.096169-4.119831 13.469779l0 31.060413c-45.196365-36.100196-80.440054-59.474556-131.9758-60.378136-1.045819-0.016373-2.059915-0.031722-3.074012-0.031722-108.74368 0-198.470237 99.218746-200.657043 222.779899-2.155083 124.701117 84.845387 227.723491 193.969737 229.625818 1.045819 0.01535 2.059915 0.031722 3.074012 0.031722 63.293535 0 122.276904-34.087353 159.992901-92.103698 24.373107 60.251246 61.519122 91.216491 110.48637 92.071975 0.697895 0.01535 1.394766 0.01535 2.060939 0.01535 33.945113 0 66.716494-14.610766 94.924953-42.328038 47.63695-46.796816 76.066443-124.796284 76.066443-208.643947l0-2.883677C959.595154 265.227664 759.761873 64.443731 514.162246 64.443731zM646.73975 541.348422c0 92.230588-58.475809 167.282934-130.390699 167.282934s-130.390699-75.052347-130.390699-167.282934c0-92.246961 58.475809-167.298284 130.390699-167.298284S646.73975 449.102485 646.73975 541.348422z" p-id="7714" fill="#2c2c2c"></path></svg>`,
    name: "提醒谁看",
  },
  {
    id: 2,
    icon: `<svg t="1627889664359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10956" width="20" height="20"><path d="M985.6 1024 38.4 1024c-12.8 0-25.6-12.8-25.6-25.6 0-217.6 192-275.2 281.6-300.8 19.2-6.4 32-12.8 38.4-12.8 76.8-38.4 83.2-64 83.2-70.4 0-6.4 0-6.4 0-6.4C352 569.6 320 467.2 300.8 428.8c0 0 0-6.4 0-6.4C256 403.2 249.6 326.4 249.6 294.4c0-38.4 6.4-51.2 25.6-64C281.6 102.4 384 0 512 0c128 0 230.4 96 230.4 224 19.2 12.8 32 19.2 32 57.6 0 38.4-12.8 115.2-51.2 134.4 0 0 0 6.4 0 6.4-12.8 44.8-44.8 140.8-115.2 185.6 0 0 0 6.4 0 12.8 0 12.8 32 44.8 83.2 70.4 12.8 6.4 25.6 12.8 51.2 19.2 96 25.6 268.8 83.2 268.8 300.8C1011.2 1011.2 998.4 1024 985.6 1024zM64 979.2l896 0c-12.8-160-147.2-204.8-236.8-230.4-25.6-6.4-44.8-12.8-57.6-19.2l0 0c-32-19.2-108.8-57.6-108.8-115.2 0-25.6 6.4-44.8 25.6-51.2 51.2-32 83.2-121.6 96-153.6C684.8 384 691.2 371.2 704 371.2c6.4-6.4 25.6-51.2 25.6-89.6 0-12.8 0-19.2 0-19.2 0 0-6.4 0-6.4-6.4 0 0-6.4 0-6.4-6.4-6.4-6.4-12.8-12.8-12.8-19.2l0-6.4C697.6 128 620.8 44.8 512 44.8c-102.4 0-192 83.2-192 185.6l0 6.4C320 249.6 320 256 313.6 262.4 294.4 268.8 294.4 268.8 294.4 294.4c0 38.4 12.8 76.8 19.2 83.2 12.8 0 19.2 12.8 25.6 32C358.4 448 390.4 537.6 441.6 569.6 454.4 576 467.2 588.8 467.2 614.4c0 38.4-38.4 76.8-108.8 115.2-12.8 6.4-25.6 12.8-51.2 19.2C224 768 76.8 812.8 64 979.2z" p-id="10957" fill="#2c2c2c"></path></svg>`,
    name: "谁可以看",
  },
];

export default class PostMoment extends Component {
  constructor(props) {
    super(props);

    const { filesArr = [] } = this.props.location.state;
    this.data = [];
    for (let i = 0; i < filesArr.length; i++) {
      const obj = {
        url: baseUrl + filesArr[i],
        id: i,
      };
      this.data.push(obj);
    }
    this.state = {
      value: "",
      files: this.data,
      multiple: true,
      filesArr: filesArr, // 纯url
    };
  }

  showAlert = () => {
    alert("", "确定退出？", [
      { text: "取消", onPress: () => console.log("cancel"), style: "default" },
      {
        text: "确定",
        onPress: () => {
          this.props.history.go(-1);
        },
      },
    ]);
  };

  imgPicker = (files, type, index) => {
    console.log(files, type, index);
    const self = this;
    if (type === "add") { // 添加图片
      let formData = new FormData();
      this.setState(
        {
          files,
        },
        () => {
          for (let i = this.data.length; i < files.length; i++) {
            formData.append("image", files[i].file);
          }
          postImages(formData).then((res) => {
            let arr = res.files.split(";");
            self.setState({
              filesArr: [...this.state.filesArr, ...arr],
            });
          });
        }
      );
      this.data = files;
    }else if (type === "remove") { // 删除图片
      const arr = this.state.filesArr.splice(index, 1)
      self.setState({
        files: files,
        filesArr: arr,
      });
    }
  };

  renderImg = () => {
    const { type } = this.props.location.state;
    if (type === "0") return;
    else {
      return (
        <div>
          <ImagePicker
            files={this.state.files}
            length={3}
            onChange={this.imgPicker}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={this.state.files.length < 9}
            multiple={this.state.multiple}
          />
        </div>
      );
    }
  };

  sendMoment = () => {
    const { type } = this.props.location.state;
    const self = this;
    if (!(type * 1)) {
      // 纯文字
      if (this.state.value === "") {
        Toast.fail("不能发送空的朋友圈！");
        return;
      }
      const data = {
        userId: localStorage.getItem("userId"),
        type: type * 1,
        content: this.state.value,
      };
      postMoment(data).then((res) => {
        self.props.history.go(-1);
      });
    }else {
      const data = {
        userId: localStorage.getItem("userId"),
        type: type * 1,
        content: this.state.value,
        images: this.state.filesArr.join(";")
      };
      postMoment(data).then((res) => {
        self.props.history.go(-1);
      });
    }
  };

  render() {
    return (
      <div className="post-moment-wrap">
        <div className="topbar">
          <Icon type="left" onClick={this.showAlert} />
          <button className="send" onClick={this.sendMoment}>
            发表
          </button>
        </div>
        <Input
          className="content-area"
          minRows="8"
          maxRows="8"
          autoSize
          value={this.state.value}
          onChange={(val) => {
            this.setState({
              value: val,
            });
          }}
          placeholder="这一刻的想法..."
        />
        {this.renderImg()}
        {lists.map((i) => (
          <ListItem key={i.id} list={i} />
        ))}
      </div>
    );
  }
}
