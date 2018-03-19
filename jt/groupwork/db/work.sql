SET NAMES UTF8;
DROP DATABASE IF EXISTS work;
CREATE DATABASE work CHARSET=UTF8;
USE work;

CREATE TABLE workwatch(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(16),
  way VARCHAR(100),
  introduce VARCHAR(1000)
);
INSERT INTO workwatch VALUES(1, '材质','img1/image1.jpeg','不可使用聚合物部件。,日内瓦印记技术委员会有权随时根据所采用的新材料调整品质基准，以顺应制表领域的技术革新。');
INSERT INTO workwatch VALUES(2, '形态部件和附属小零件','img1/image2.jpeg',
'形态部件或附属小零件的棱角都应经过抛光打磨处理，其侧边应被拉伸，表面应经过磨光或修平。,
螺丝头必须经过抛光或者加上鱼鳞纹，其边缘和槽口均经过倒角处理。,
突起的螺丝头必须经过抛光或者加上鱼鳞纹。,
可进行上色，但要确保色调保持一致。,
螺钉尖端必须经过抛光，不留切割凸痕或划痕。,
平面销或凸面销的顶端必须经过抛光。,
所有未在技术规范中列出的零部件都应符合机芯评判标准中的相关规定。');
INSERT INTO workwatch VALUES(3, '弹簧和定位杆','img1/image3.jpeg',
'不允许使用线型弹簧。,
弹簧和定位杆的整个外部轮廓都应进行倒角打磨，但功能性区域除外。,
对厚度等于或小于0.18毫米的金属薄片进行任何加工，都可能对其功能性刚度造成损伤，因而可作为例外情况处理。,
可进行上色，但要确保色调保持一致。,
所有弹簧和定位杆都应带有底座。');
INSERT INTO workwatch VALUES(4, '夹板、附加元件板和板桥','img1/image4.jpeg',
'棱角抛光打磨。,
侧边拉伸修饰。,
凹槽经珍珠圆点打磨或精心修饰，以去除所有加工的痕迹 。,
对板桥支座进行磨光。,
对孔洞和凹槽的斜面进行抛光打磨。');
INSERT INTO workwatch VALUES(5, '宝石镶嵌','img1/image5.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');
INSERT INTO workwatch VALUES(6, '擒纵机构','img1/image6.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');
INSERT INTO workwatch VALUES(7, '擒纵机构','img1/image7.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');
INSERT INTO workwatch VALUES(8, '螺钉，快慢针','img1/image8.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');
INSERT INTO workwatch VALUES(9, '调校系统','img1/image9.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');
INSERT INTO workwatch VALUES(10, '外观组件品质基准','img1/image10.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');
INSERT INTO workwatch VALUES(11, '腕表主体（表头）品质基准','img1/image11.jpeg',
'所有机芯都应嵌入红宝石，并通过精加工齿轮对孔洞进行抛光打磨。板桥一侧，宝石应具有凸圆表面和抛光孔槽。对于夹板中间齿轮的宝石则没有特别的要求。,
允许机芯装配减震装置。,
对于机芯其他部件和附加夹板，可使用所有高品质宝石或任何种类的枢轴。');