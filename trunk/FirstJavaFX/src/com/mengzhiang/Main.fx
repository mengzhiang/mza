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
// ��������
var scale=1.0;
// ��ɫ����ɫ
var color=Color.YELLOW;

// ʱ����
Timeline {
  // �ظ�����������
  repeatCount: Timeline.INDEFINITE
  // �ؼ�֡��
  keyFrames: [
    // һ���ؼ�֡
    KeyFrame {
      // ��֡����ʱ�䣬2��
      time: 2s
      // ����ʱ���߻��ʱ���Ƿ���Ժ��Դ˻��Ĭ��Ϊfalse
      canSkip: true
      // �˹ؼ�֡�Ĳ����͸���Ȥ�Ĳ���
      values: [
        // �����仯�� 0.0�� ������뿪������
        scale => 0.0 tween Interpolator.EASEBOTH,
        // ��ɫ�仯����ɫ
        color => Color.GREEN
      ]
    }
  ]
}.play(); // ����ʱ����

// ��̨/����
Stage {
  // ����
  title: "My First JavaFX Sphere"
  // ���ڵĿ��
  width: 250
  // ���ڵĸ߶�
  height: 250
  // ��ͷ
  scene: Scene {
    // ���ݣ��ڵ��б�
    content:[
      // Բ
      Circle {
        // ���ĵ��X/Y����
        centerX: 100
        centerY: 100
        // Բ�İ뾶
        radius: 90
        // �������,Բ���ݶ���ɢ���
        fill:RadialGradient {
          // Բ���ݶȵ�����X��Y
          // �����ⲿ��100��100��Բ����75,75�������ⲿԲ������
          centerX:75
          centerY:75
          // �뾶���ⲿ��Բ��ͬ
          radius:90
          // ��ʼ�ͽ���ֵ�Ƿ�Ϊ����ֵ���߾���ֵ
          // �����þ���ֵ
          proportional:false
          // һЩ���ذ뾶�Ĺ�Ȧ��ֵ�����ƹؼ�֡
          stops:[
            // ��Ȧ1
            Stop {
              // ƫ����0,Ҳ������ʼ��
              offset:0.0
              // ��ɫΪ��ɫ
              color:Color.RED
            },
            // ��Ȧ2
            Stop{
              // ƫ����100%,��ɫΪ���
              offset:1.0
              color:Color.DARKRED
            }
          ]
        }
      }
      // ��һ�����ݣ��ı�
      Text {
        // �ı�����������
        font: Font {
          size: 24
        }
        // ���ֵ�����
        x: 20
        y: 90
        // ���ֵĶ��뷽ʽ
        textAlignment:TextAlignment.CENTER
        // ���ֵ�����
        content: "Welcome to \nJavaFX World"
        // ���ֵ����󶨵�color����
        // ʱ����Ӱ����color,��Ӱ�쵽�����ֵ���ɫ
        fill:bind color
        // ���ֵ���ӰЧ��
        effect:DropShadow {
          // ��Ӱ��ƫ�ƣ������·�
          offsetX:10
          offsetY:10
          // ��Ӱ����ɫ
          color:Color.color(0.1, 0.3, 0.1)
        }
        // ���ֵı仯
        transforms:Scale{
          // X����
          x:1
          // Y����scale����
          y:bind scale
          // �仯�����ĵ㣬������������ֵ��������仯
          pivotX:100
          pivotY:100
        }
      }
    ]
  }
}