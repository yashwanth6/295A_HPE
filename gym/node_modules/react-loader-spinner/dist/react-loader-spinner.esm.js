import { __assign, __makeTemplateObject } from 'tslib';
import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { prop } from 'styled-tools';

var getDefaultStyle$j = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Audio = function Audio(_a) {
  var _b = _a.height,
      height = _b === void 0 ? '100' : _b,
      _c = _a.width,
      width = _c === void 0 ? '100' : _c,
      _d = _a.color,
      color = _d === void 0 ? 'blue' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'audio-loading' : _e,
      _f = _a.wrapperStyle,
      wrapperStyle = _f === void 0 ? {} : _f,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$j(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "audio-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    height: "" + height,
    width: "" + width,
    fill: color,
    viewBox: "0 0 55 80",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": ariaLabel,
    "data-testid": "audio-svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "10",
    height: "20",
    rx: "3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    width: "10",
    height: "80",
    rx: "3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    width: "10",
    height: "50",
    rx: "3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "45",
    width: "10",
    height: "30",
    rx: "3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

var getDefaultStyle$i = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var BallTriangle = function BallTriangle(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 100 : _b,
      _c = _a.width,
      width = _c === void 0 ? 100 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 5 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'blue' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'ball-triangle-loading' : _f,
      wrapperClass = _a.wrapperClass,
      wrapperStyle = _a.wrapperStyle,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$i(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "ball-triangle-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    height: height,
    width: width,
    stroke: color,
    viewBox: "0 0 57 57",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "ball-triangle-svg",
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "50",
    r: radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;5;50;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    values: "5;27;49;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "27",
    cy: "5",
    r: radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    from: "5",
    to: "5",
    values: "5;50;50;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    from: "27",
    to: "27",
    values: "27;49;5;27",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "49",
    cy: "50",
    r: radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;50;5;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    from: "49",
    to: "49",
    begin: "0s",
    dur: "2.2s",
    values: "49;5;27;49",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))))));
};

var getDefaultStyle$h = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Bars = function Bars(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'blue' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'bars-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$h(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "bars-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    fill: color,
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    "data-testid": "bars-svg",
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

var getDefaultStyle$g = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Circles = function Circles(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'circles-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$g(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "circles-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 135 135",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "circles-svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "-360 67 67",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "360 67 67",
    dur: "8s",
    repeatCount: "indefinite"
  }))));
};

var getDefaultStyle$f = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var CirclesWithBar = function CirclesWithBar(_a) {
  var _b = _a.wrapperStyle,
      wrapperStyle = _b === void 0 ? {} : _b,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c,
      _d = _a.wrapperClass,
      wrapperClass = _d === void 0 ? '' : _d,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.color,
      color = _g === void 0 ? 'red' : _g,
      outerCircleColor = _a.outerCircleColor,
      innerCircleColor = _a.innerCircleColor,
      barColor = _a.barColor;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$f(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "circles-with-bar-wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    id: "L1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    height: "" + height,
    width: "" + width,
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "data-testid": "circles-with-bar-svg"
  }, /*#__PURE__*/React.createElement("circle", {
    fill: "none",
    stroke: "" + (outerCircleColor || color),
    strokeWidth: "6",
    strokeMiterlimit: "15",
    strokeDasharray: "14.2472,14.2472",
    cx: "50",
    cy: "50",
    r: "47",
    "data-testid": "circles-with-bar-svg-outer-circle"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "5s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "none",
    stroke: "" + (innerCircleColor || color),
    strokeWidth: "1",
    strokeMiterlimit: "10",
    strokeDasharray: "10,10",
    cx: "50",
    cy: "50",
    r: "39",
    "data-testid": "circles-with-bar-svg-inner-circle"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "5s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "" + (barColor || color),
    "data-testid": "circles-with-bar-svg-bar"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "35",
    width: "5",
    height: "30"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.1"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "35",
    width: "5",
    height: "30"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.2"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "50",
    y: "35",
    width: "5",
    height: "30"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.3"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "35",
    width: "5",
    height: "30"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.4"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "70",
    y: "35",
    width: "5",
    height: "30"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    type: "translate",
    values: "0 5 ; 0 -5; 0 5",
    repeatCount: "indefinite",
    begin: "0.5"
  })))));
};

var FallingLines = function FallingLines(_a) {
  var _b = _a.color,
      color = _b === void 0 ? 'grey' : _b,
      _c = _a.width,
      width = _c === void 0 ? '100' : _c,
      _d = _a.visible,
      visible = _d === void 0 ? true : _d;
  return visible ? /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: width,
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("rect", {
    y: "25",
    width: "10",
    height: "50",
    rx: "4",
    ry: "4",
    fill: color
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "x",
    values: "10;100",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 10 70",
    to: "-60 100 70",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;0",
    dur: "1.2s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    y: "25",
    width: "10",
    height: "50",
    rx: "4",
    ry: "4",
    fill: color
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "x",
    values: "10;100",
    dur: "1.2s",
    begin: "0.4s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 10 70",
    to: "-60 100 70",
    dur: "1.2s",
    begin: "0.4s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;0",
    dur: "1.2s",
    begin: "0.4s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    y: "25",
    width: "10",
    height: "50",
    rx: "4",
    ry: "4",
    fill: color
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "x",
    values: "10;100",
    dur: "1.2s",
    begin: "0.8s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 10 70",
    to: "-60 100 70",
    dur: "1.2s",
    begin: "0.8s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;0",
    dur: "1.2s",
    begin: "0.8s",
    repeatCount: "indefinite"
  }))) : null;
};

var getDefaultStyle$e = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Grid = function Grid(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 12.5 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'grid-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$e(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "grid-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 105 105",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "grid-svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12.5",
    cy: "12.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "12.5",
    cy: "52.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "100ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "52.5",
    cy: "12.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "300ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "52.5",
    cy: "52.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "600ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "92.5",
    cy: "12.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "800ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "92.5",
    cy: "52.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "400ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "12.5",
    cy: "92.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "700ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "52.5",
    cy: "92.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "500ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "92.5",
    cy: "92.5",
    r: "" + radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "200ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

var getDefaultStyle$d = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Hearts = function Hearts(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'hearts-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$d(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "hearts-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 140 64",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "hearts-svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0.7s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
  })));
};

var len = 242.776657104492;
var time = 1.6;
var anim = keyframes(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"], ["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"])), len * 0.14, len, len * 0.11, len * 0.35, len, len * 0.35, len * 0.01, len, len * 0.99);
var Path$1 = styled.path(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"], ["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"])), len * 0.01, len, anim, time);

var InfinitySpin = function InfinitySpin(_a) {
  var _b = _a.color,
      color = _b === void 0 ? '#f28f3b' : _b,
      _c = _a.width,
      width = _c === void 0 ? '200' : _c;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "" + width,
    height: "" + Number(width) * 0.5,
    viewBox: "0 0 " + width + " " + Number(200 * 0.5)
  }, /*#__PURE__*/React.createElement(Path$1, {
    stroke: color,
    fill: "none",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.07",
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
  }));
};
var templateObject_1$3, templateObject_2$3;

var getDefaultStyle$c = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var LineWave = function LineWave(_a) {
  var _b = _a.wrapperStyle,
      wrapperStyle = _b === void 0 ? {} : _b,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c,
      _d = _a.wrapperClass,
      wrapperClass = _d === void 0 ? '' : _d,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.color,
      color = _g === void 0 ? 'red' : _g,
      _h = _a.ariaLabel,
      ariaLabel = _h === void 0 ? 'line-wave' : _h,
      firstLineColor = _a.firstLineColor,
      middleLineColor = _a.middleLineColor,
      lastLineColor = _a.lastLineColor;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$c(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "line-wave-wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    height: "" + height,
    width: "" + width,
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 0 0",
    xmlSpace: "preserve",
    "aria-label": ariaLabel,
    "data-testid": "line-wave-svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "50",
    width: "4",
    height: "10",
    fill: firstLineColor || color,
    "data-testid": "line-wave-svg-first-line"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "50",
    width: "4",
    height: "10",
    fill: middleLineColor || color,
    "data-testid": "line-wave-svg-middle-line"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.2s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "50",
    width: "4",
    height: "10",
    fill: lastLineColor || color,
    "data-testid": "line-wave-svg-last-line"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.4s",
    dur: "0.6s",
    repeatCount: "indefinite"
  }))));
};

var getDefaultStyle$b = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var MutatingDots = function MutatingDots(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 90 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 12.5 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.secondaryColor,
      secondaryColor = _f === void 0 ? 'blue' : _f,
      _g = _a.ariaLabel,
      ariaLabel = _g === void 0 ? 'mutating-dots-loading' : _g,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _h = _a.visible,
      visible = _h === void 0 ? true : _h;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$b(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "mutating-dots-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    id: "goo-loader",
    width: width,
    height: height,
    "aria-label": ariaLabel,
    "data-testid": "mutating-dots-svg"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "fancy-goo"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "6",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo"
  }), /*#__PURE__*/React.createElement("feComposite", {
    "in": "SourceGraphic",
    in2: "goo",
    operator: "atop"
  })), /*#__PURE__*/React.createElement("g", {
    filter: "url(#fancy-goo)"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    id: "mainAnim",
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from: "0 50 50",
    to: "359 50 50",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50%",
    cy: "40",
    r: radius,
    fill: color
  }, /*#__PURE__*/React.createElement("animate", {
    id: "cAnim1",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0;cAnim1.end+0.2s",
    calcMode: "spline",
    values: "40;20;40",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "50%",
    cy: "60",
    r: radius,
    fill: secondaryColor
  }, /*#__PURE__*/React.createElement("animate", {
    id: "cAnim2",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0.4s;cAnim2.end+0.2s",
    calcMode: "spline",
    values: "60;80;60",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })))));
};

var getDefaultStyle$a = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var RADIUS = 20;

var getPath = function getPath(radius) {
  return ['M' + radius + ' 0c0-9.94-8.06', radius, radius, radius].join('-');
};

var getViewBoxSize = function getViewBoxSize(strokeWidth, secondaryStrokeWidth, radius) {
  var maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
  var startingPoint = -radius - maxStrokeWidth / 2 + 1;
  var endpoint = radius * 2 + maxStrokeWidth;
  return [startingPoint, startingPoint, endpoint, endpoint].join(' ');
};

var Oval = function Oval(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.secondaryColor,
      secondaryColor = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'oval-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g,
      _h = _a.strokeWidth,
      strokeWidth = _h === void 0 ? 2 : _h,
      strokeWidthSecondary = _a.strokeWidthSecondary;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign(__assign({}, getDefaultStyle$a(visible)), wrapperStyle), {
      padding: 3
    }),
    className: wrapperClass,
    "data-testid": "oval-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: getViewBoxSize(Number(strokeWidth), Number(strokeWidthSecondary || strokeWidth), RADIUS),
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "data-testid": "oval-svg",
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: Number(strokeWidthSecondary || strokeWidth)
  }, /*#__PURE__*/React.createElement("circle", {
    strokeOpacity: ".5",
    cx: "0",
    cy: "0",
    r: RADIUS,
    stroke: secondaryColor,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React.createElement("path", {
    d: getPath(RADIUS)
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 0 0",
    to: "360 0 0",
    dur: "1s",
    repeatCount: "indefinite"
  }))))));
};

var loaderSpin = keyframes(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
var loaderPath = keyframes(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n"], ["\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n"])));
var SVG$1 = styled.svg(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  width: 230px;\n  height: 230px;\n  transform-origin: 115px 115px;\n  animation: 1.4s linear infinite ", ";\n  -webkit-animation: 1.4s linear infinite ", ";\n"], ["\n  width: 230px;\n  height: 230px;\n  transform-origin: 115px 115px;\n  animation: 1.4s linear infinite ", ";\n  -webkit-animation: 1.4s linear infinite ", ";\n"])), loaderSpin, loaderSpin);
var Path = styled.path(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  animation: 1.4s ease-in-out infinite ", ";\n  -webkit-animation: 1.4s ease-in-out infinite ", ";\n"], ["\n  animation: 1.4s ease-in-out infinite ", ";\n  -webkit-animation: 1.4s ease-in-out infinite ", ";\n"])), loaderPath, loaderPath);

var getDefaultStyle$9 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Plane = function Plane(_a) {
  var _b = _a.color,
      color = _b === void 0 ? 'green' : _b,
      _c = _a.secondaryColor,
      secondaryColor = _c === void 0 ? 'blue' : _c,
      _d = _a.ariaLabel,
      ariaLabel = _d === void 0 ? 'plane-loading' : _d,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _e = _a.visible,
      visible = _e === void 0 ? true : _e;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$9(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "plane-loading"
  }, /*#__PURE__*/React.createElement(SVG$1, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "230",
    height: "230",
    "aria-label": ariaLabel,
    "data-testid": "plane-svg"
  }, /*#__PURE__*/React.createElement("desc", null, "Plane animation. Loading "), /*#__PURE__*/React.createElement(Path, {
    style: {
      stroke: secondaryColor
    },
    d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
    fill: "none",
    stroke: "#0099cc",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "10 10 10 10 10 10 10 432",
    strokeDashoffset: "77"
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      fill: color
    },
    d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
    fill: "#000033"
  })));
};
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4;

var getDefaultStyle$8 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Puff = function Puff(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 1 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'puff-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$8(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "puff-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "aria-label": ariaLabel,
    "data-testid": "puff-svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })))));
};

var getDefaultStyle$7 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var RevolvingDot = function RevolvingDot(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 6 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'revolving-dot-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$7(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "revolving-dot-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    "aria-label": ariaLabel,
    "data-testid": "revolving-dot-svg"
  }, /*#__PURE__*/React.createElement("circle", {
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    cx: "50",
    cy: "50",
    r: Number("" + radius) + 38,
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("circle", {
    fill: color,
    stroke: color,
    strokeWidth: "3",
    cx: "8",
    cy: "54",
    r: radius
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 48",
    to: "360 50 52",
    repeatCount: "indefinite"
  }))));
};

var getDefaultStyle$6 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Rings = function Rings(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 6 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'rings-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$6(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "rings-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color,
    "aria-label": ariaLabel,
    "data-testid": "rings-svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "strokeWidth",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: Number(radius) + 2
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

var spin = keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
var POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
var Svg = styled.svg(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"], ["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"])), spin, prop('speed', '0.75'));
var Polyline = styled.polyline(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"], ["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])), function (props) {
  return props.width;
});
function RotatingLines(_a) {
  var _b = _a.strokeColor,
      strokeColor = _b === void 0 ? 'grey' : _b,
      _c = _a.strokeWidth,
      strokeWidth = _c === void 0 ? '5' : _c,
      _d = _a.animationDuration,
      animationDuration = _d === void 0 ? '0.75' : _d,
      _e = _a.width,
      width = _e === void 0 ? '96' : _e,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  var lines = useCallback(function () {
    return POINTS.map(function (point) {
      return /*#__PURE__*/React.createElement(Polyline, {
        key: point,
        points: "24,12 24,4",
        width: strokeWidth,
        transform: "rotate(" + point + ", 24, 24)"
      });
    });
  }, [strokeWidth]);
  return !visible ? null : /*#__PURE__*/React.createElement(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: width,
    stroke: strokeColor,
    speed: animationDuration,
    role: "status",
    "data-testid": "rotating-lines-svg"
  }, lines());
}
var templateObject_1$1, templateObject_2$1, templateObject_3$1;

var getDefaultStyle$5 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var RotatingSquare = function RotatingSquare(_a) {
  var _b = _a.wrapperClass,
      wrapperClass = _b === void 0 ? '' : _b,
      _c = _a.color,
      color = _c === void 0 ? 'red' : _c,
      _d = _a.height,
      height = _d === void 0 ? 100 : _d,
      _e = _a.width,
      width = _e === void 0 ? 100 : _e,
      _f = _a.strokeWidth,
      strokeWidth = _f === void 0 ? 4 : _f,
      _g = _a.ariaLabel,
      ariaLabel = _g === void 0 ? 'rotating-square-loading' : _g,
      _h = _a.wrapperStyle,
      wrapperStyle = _h === void 0 ? {} : _h,
      _j = _a.visible,
      visible = _j === void 0 ? true : _j;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$5(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "rotating-square-wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    height: "" + height,
    width: "" + width,
    "aria-label": ariaLabel,
    "data-testid": "rotating-square-svg",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    x: "25",
    y: "25",
    width: "50",
    height: "50"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "0.5s",
    from: "0 50 50",
    to: "180 50 50",
    type: "rotate",
    id: "strokeBox",
    attributeType: "XML",
    begin: "rectBox.end"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "27",
    y: "27",
    fill: color,
    width: "46",
    height: "50"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "height",
    dur: "1.3s",
    attributeType: "XML",
    from: "50",
    to: "0",
    id: "rectBox",
    fill: "freeze",
    begin: "0s;strokeBox.end"
  }))));
};

var getDefaultStyle$4 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var TailSpin = function TailSpin(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 1 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'tail-spin-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$4(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "tail-spin-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": ariaLabel,
    "data-testid": "tail-spin-svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: color,
    stopOpacity: "0",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: color,
    stopOpacity: ".631",
    offset: "63.146%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: color,
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(1 1)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    id: "Oval-2",
    stroke: color,
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "#fff",
    cx: "36",
    cy: "18",
    r: radius
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  }))))));
};

var getDefaultStyle$3 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var ThreeCircles = function ThreeCircles(_a) {
  var _b = _a.wrapperStyle,
      wrapperStyle = _b === void 0 ? {} : _b,
      _c = _a.visible,
      visible = _c === void 0 ? true : _c,
      _d = _a.wrapperClass,
      wrapperClass = _d === void 0 ? '' : _d,
      _e = _a.height,
      height = _e === void 0 ? 100 : _e,
      _f = _a.width,
      width = _f === void 0 ? 100 : _f,
      _g = _a.color,
      color = _g === void 0 ? 'red' : _g,
      _h = _a.ariaLabel,
      ariaLabel = _h === void 0 ? 'rotating-three-circles' : _h,
      outerCircleColor = _a.outerCircleColor,
      innerCircleColor = _a.innerCircleColor,
      middleCircleColor = _a.middleCircleColor;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$3(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "three-circles-wrapper"
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    height: "" + height,
    width: "" + width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "data-testid": "three-circles-svg",
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("path", {
    fill: outerCircleColor || color,
    "data-testid": "three-circles-svg-outer-circle",
    d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    fill: middleCircleColor || color,
    "data-testid": "three-circles-svg-middle-circle",
    d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    fill: innerCircleColor || color,
    "data-testid": "three-circles-svg-inner-circle",
    d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n  L82,35.7z"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  }))));
};

var getDefaultStyle$2 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var ThreeDots = function ThreeDots(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 9 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'three-dots-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle$2(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "three-dots-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    "aria-label": ariaLabel,
    "data-testid": "three-dots-svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: Number(radius) + 6
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "15",
    r: radius,
    attributeName: "fill-opacity",
    from: "1",
    to: "0.3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "105",
    cy: "15",
    r: Number(radius) + 6
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

var dash = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n to {\n    stroke-dashoffset: 136;\n  }\n"], ["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));
var Polygon = styled.polygon(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"], ["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])), dash);
var SVG = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transform-origin: 50% 65%;\n"], ["\n  transform-origin: 50% 65%;\n"])));

var getDefaultStyle$1 = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Triangle = function Triangle(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.color,
      color = _d === void 0 ? 'green' : _d,
      _e = _a.ariaLabel,
      ariaLabel = _e === void 0 ? 'triangle-loading' : _e,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _f = _a.visible,
      visible = _f === void 0 ? true : _f;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    style: __assign(__assign({}, getDefaultStyle$1(visible)), wrapperStyle),
    className: "" + wrapperClass,
    "data-testid": "triangle-loading"
  }, /*#__PURE__*/React.createElement(SVG, {
    id: "triangle",
    width: width,
    height: height,
    viewBox: "-3 -4 39 39",
    "aria-label": ariaLabel,
    "data-testid": "triangle-svg"
  }, /*#__PURE__*/React.createElement(Polygon, {
    fill: "transparent",
    stroke: color,
    strokeWidth: "1",
    points: "16,0 32,32 0,32"
  })));
};
var templateObject_1, templateObject_2, templateObject_3;

var getDefaultStyle = function getDefaultStyle(visible) {
  return {
    display: visible ? 'flex' : 'none'
  };
};

var Watch = function Watch(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 80 : _b,
      _c = _a.width,
      width = _c === void 0 ? 80 : _c,
      _d = _a.radius,
      radius = _d === void 0 ? 48 : _d,
      _e = _a.color,
      color = _e === void 0 ? 'green' : _e,
      _f = _a.ariaLabel,
      ariaLabel = _f === void 0 ? 'watch-loading' : _f,
      wrapperStyle = _a.wrapperStyle,
      wrapperClass = _a.wrapperClass,
      _g = _a.visible,
      visible = _g === void 0 ? true : _g;
  return /*#__PURE__*/React.createElement("div", {
    style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle),
    className: wrapperClass,
    "data-testid": "watch-loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    version: "1.1",
    id: "L2",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "aria-label": ariaLabel,
    "data-testid": "watch-svg"
  }, /*#__PURE__*/React.createElement("circle", {
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    cx: "50",
    cy: "50",
    r: radius
  }), /*#__PURE__*/React.createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "85",
    y2: "50.5"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "49.5",
    y2: "74"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    dur: "15s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  }))));
};

export { Audio, BallTriangle, Bars, Circles, CirclesWithBar, FallingLines, Grid, Hearts, InfinitySpin, LineWave, MutatingDots, Oval, Plane, Puff, RevolvingDot, Rings, RotatingLines, RotatingSquare, TailSpin, ThreeCircles, ThreeDots, Triangle, Watch };
//# sourceMappingURL=react-loader-spinner.esm.js.map
