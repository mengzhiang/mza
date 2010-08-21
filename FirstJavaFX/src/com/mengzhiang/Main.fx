package com.mengzhiang;


import javafx.scene.effect.DropShadow;
import javafx.scene.paint.Color;
import javafx.scene.paint.RadialGradient;
import javafx.scene.paint.Stop;
import javafx.scene.Scene;
import javafx.scene.shape.Circle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.scene.text.TextAlignment;
import javafx.scene.transform.Scale;
import javafx.stage.Stage;
import javafx.animation.Timeline;
import javafx.animation.KeyFrame;
import javafx.animation.Interpolator;

/**
 * @author java2000.net
 */
// 比例参数
var scale=1.0;
// 颜色，黄色
var color=Color.YELLOW;

// 时间线
Timeline {
  // 重复次数，无限
  repeatCount: Timeline.INDEFINITE
  // 关键帧组
  keyFrames: [
    // 一个关键帧
    KeyFrame {
      // 此帧运行时间，2秒
      time: 2s
      // 在主时间线获得时，是否可以忽略此活动，默认为false
      canSkip: true
      // 此关键帧的参数和感兴趣的参数
      values: [
        // 比例变化到 0.0， 进入和离开都擦除
        scale => 0.0 tween Interpolator.EASEBOTH,
        // 颜色变化到绿色
        color => Color.GREEN
      ]
    }
  ]
}.play(); // 运行时间线

// 舞台/窗口
Stage {
  // 标题
  title: "My First JavaFX Sphere"
  // 窗口的宽度
  width: 250
  // 窗口的高度
  height: 250
  // 镜头
  scene: Scene {
    // 内容，节点列表
    content:[
      // 圆
      Circle {
        // 中心点的X/Y坐标
        centerX: 100
        centerY: 100
        // 圆的半径
        radius: 90
        // 填充设置,圆形梯度扩散填充
        fill:RadialGradient {
          // 圆心梯度的中心X和Y
          // 对于外部的100，100的圆，则75,75出现在外部圆的左上
          centerX:75
          centerY:75
          // 半径和外部的圆相同
          radius:90
          // 开始和结束值是否为比例值或者绝对值
          // 我们用绝对值
          proportional:false
          // 一些列沿半径的光圈数值，类似关键帧
          stops:[
            // 光圈1
            Stop {
              // 偏移在0,也就是起始点
              offset:0.0
              // 颜色为红色
              color:Color.RED
            },
            // 光圈2
            Stop{
              // 偏移在100%,颜色为深红
              offset:1.0
              color:Color.DARKRED
            }
          ]
        }
      }
      // 另一个内容，文本
      Text {
        // 文本的字体设置
        font: Font {
          size: 24
        }
        // 文字的坐标
        x: 20
        y: 90
        // 文字的对齐方式
        textAlignment:TextAlignment.CENTER
        // 文字的内容
        content: "Welcome to \nJavaFX World"
        // 文字的填充绑定到color变量
        // 时间线影响了color,则影响到了文字的颜色
        fill:bind color
        // 文字的阴影效果
        effect:DropShadow {
          // 阴影的偏移，在右下方
          offsetX:10
          offsetY:10
          // 阴影的颜色
          color:Color.color(0.1, 0.3, 0.1)
        }
        // 文字的变化
        transforms:Scale{
          // X不变
          x:1
          // Y绑定在scale变量
          y:bind scale
          // 变化的中心点，这个设置以文字的中心做变化
          pivotX:100
          pivotY:100
        }
      }
    ]
  }
}