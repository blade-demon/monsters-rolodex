import React from "react";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.textRef = null; // 创建 ref 为 null
  }
  componentDidMount() {
    // 注意：这里没有使用 "current"
    // 直接使用原生 API 使 text 输入框获得焦点
    this.textRef.focus();
  }

  bindInputRef = (node) => {
    this.textRef = node;
    console.log(this.textRef);
  };

  render() {
    // 把 <input> ref 关联到构造器里创建的 textRef 上
    return (
      <div>
        {this.props.count}
        <input ref={this.bindInputRef} />
      </div>
    );
  }
}
