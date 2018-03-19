#设置MySQL客户端连接服务器所用字符集为UTF8
SET NAMES UTF8;
#丢弃数据库(如果存在的话)
DROP DATABASE IF EXISTS cs;
#创建数据库，使用字符集为UTF8
CREATE DATABASE cs CHARSET=UTF8;
#进入数据库
USE cs;

/*创建相关的表*/
#创建销售点表
CREATE TABLE cs_sale_part(
  zsid INT PRIMARY KEY AUTO_INCREMENT,
  zpnum INT,
  zpname VARCHAR(8),
  zcountnum INT,
  zcountry VARCHAR(16),
  zcitynum INT,
  zcity VARCHAR(16),
  zstorefront VARCHAR(64),
  zaddress VARCHAR(256),
  zzipcode VARCHAR(16),
  zphone VARCHAR(16),
  zimgurl VARCHAR(256),
  zifsale INT,
  zifser INT
);

/*创建销售地区表*/
CREATE TABLE cs_location_city(
  psid INT PRIMARY KEY AUTO_INCREMENT,
  ppname VARCHAR(8),
  pcountry VARCHAR(16),
  pcity VARCHAR(16)
);

/*向销售地区表添加数据*/
INSERT INTO cs_location_city VALUES(1,'亚太','中国','上海');
INSERT INTO cs_location_city VALUES(2,'亚太','中国','北京');
INSERT INTO cs_location_city VALUES(3,'亚太','中国','南京');
INSERT INTO cs_location_city VALUES(4,'亚太','中国','厦门');
INSERT INTO cs_location_city VALUES(5,'亚太','中国','哈尔滨');
INSERT INTO cs_location_city VALUES(6,'亚太','中国','大连');
INSERT INTO cs_location_city VALUES(7,'亚太','中国','天津');
INSERT INTO cs_location_city VALUES(8,'亚太','中国','宁波');
INSERT INTO cs_location_city VALUES(9,'亚太','中国','广州');
INSERT INTO cs_location_city VALUES(10,'亚太','中国','徐州');
INSERT INTO cs_location_city VALUES(11,'亚太','中国','成都');
INSERT INTO cs_location_city VALUES(12,'亚太','中国','无锡');
INSERT INTO cs_location_city VALUES(13,'亚太','中国','昆明');
INSERT INTO cs_location_city VALUES(14,'亚太','中国','杭州');
INSERT INTO cs_location_city VALUES(15,'亚太','中国','沈阳');
INSERT INTO cs_location_city VALUES(16,'亚太','中国','深圳');
INSERT INTO cs_location_city VALUES(17,'亚太','中国','西安');
INSERT INTO cs_location_city VALUES(18,'亚太','中国','郑州');
INSERT INTO cs_location_city VALUES(19,'亚太','中国','重庆');
INSERT INTO cs_location_city VALUES(20,'亚太','中国','长春');
INSERT INTO cs_location_city VALUES(21,'亚太','中国','青岛');
INSERT INTO cs_location_city VALUES(22,'亚太','中国','Changsha');
INSERT INTO cs_location_city VALUES(23,'亚太','中国','Hefei');
INSERT INTO cs_location_city VALUES(24,'亚太','中国','Nantong');
INSERT INTO cs_location_city VALUES(25,'亚太','中国','Wuhan');
INSERT INTO cs_location_city VALUES
(null,'亚太','印尼','Jakarta');
INSERT INTO cs_location_city VALUES
(null,'亚太','印度','Chennai');
INSERT INTO cs_location_city VALUES
(null,'亚太','印度','Mumbai');
INSERT INTO cs_location_city VALUES
(null,'亚太','印度','New Delhi');
INSERT INTO cs_location_city VALUES
(null,'亚太','台湾','台中');
INSERT INTO cs_location_city VALUES
(null,'亚太','台湾','台北');
INSERT INTO cs_location_city VALUES
(null,'亚太','台湾','台南');
INSERT INTO cs_location_city VALUES
(null,'亚太','台湾','高雄');
INSERT INTO cs_location_city VALUES
(null,'亚太','巴基斯坦','Karachi');
INSERT INTO cs_location_city VALUES
(null,'亚太','新加坡','新加坡');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Fukuoka');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Hiroshima');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Kobe');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Nagoya');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Osaka');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Sapporo');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Takamatsu');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Tokyo');
INSERT INTO cs_location_city VALUES
(null,'亚太','日本','Yokohama');
INSERT INTO cs_location_city VALUES
(null,'亚太','泰国','Bangkok');
INSERT INTO cs_location_city VALUES
(null,'亚太','泰国','Phuket');
INSERT INTO cs_location_city VALUES
(null,'亚太','澳大利亚','Melbourne, VIC');
INSERT INTO cs_location_city VALUES
(null,'亚太','澳大利亚','Perth');
INSERT INTO cs_location_city VALUES
(null,'亚太','澳大利亚','Southbank, VIC');
INSERT INTO cs_location_city VALUES
(null,'亚太','澳大利亚','Surfers Paradise, QLD');
INSERT INTO cs_location_city VALUES
(null,'亚太','澳大利亚','Sydney, NSW');
INSERT INTO cs_location_city VALUES
(null,'亚太','澳门','澳门');
INSERT INTO cs_location_city VALUES
(null,'亚太','菲律宾','Manilles');
INSERT INTO cs_location_city VALUES
(null,'亚太','越南','Hanoi');
INSERT INTO cs_location_city VALUES
(null,'亚太','韩国','Busan');
INSERT INTO cs_location_city VALUES
(null,'亚太','韩国','Jeju');
INSERT INTO cs_location_city VALUES
(null,'亚太','韩国','Seoul');
INSERT INTO cs_location_city VALUES
(null,'亚太','香港','香港');
INSERT INTO cs_location_city VALUES
(null,'亚太','马来西亚','Kuala Lumpur');
INSERT INTO cs_location_city VALUES
(null,'中东','以色列','Jerusalem');
INSERT INTO cs_location_city VALUES
(null,'中东','以色列','Tel Aviv');
INSERT INTO cs_location_city VALUES
(null,'中东','伊朗','Teheran');
INSERT INTO cs_location_city VALUES
(null,'中东','卡塔尔','Doha');
INSERT INTO cs_location_city VALUES
(null,'中东','巴林','Bahrain Manama');
INSERT INTO cs_location_city VALUES
(null,'中东','沙特阿拉伯','Riyadh');
INSERT INTO cs_location_city VALUES
(null,'中东','科威特','Kuwait City');
INSERT INTO cs_location_city VALUES
(null,'中东','约旦','Amman');
INSERT INTO cs_location_city VALUES
(null,'中东','阿拉伯联合大公国','Abu Dhabi');
INSERT INTO cs_location_city VALUES
(null,'中东','阿拉伯联合大公国','Dubai');
INSERT INTO cs_location_city VALUES
(null,'中东','阿曼','Muscat');
INSERT INTO cs_location_city VALUES
(null,'中东','黎巴嫩','Beirut');
/*重复数据*/
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','以色列','Jerusalem');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','以色列','Tel Aviv');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','伊朗','Teheran');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','卡塔尔','Doha');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','巴林','Bahrain Manama');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','沙特阿拉伯','Riyadh');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','科威特','Kuwait City');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','约旦','Amman');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','阿拉伯联合大公国','Abu Dhabi');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','阿拉伯联合大公国','Dubai');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','阿曼','Muscat');
INSERT INTO cs_location_city VALUES
(null,'加勒比海区','黎巴嫩','Beirut');

INSERT INTO cs_location_city VALUES
(null,'北美洲','以色列','Jerusalem');
INSERT INTO cs_location_city VALUES
(null,'北美洲','以色列','Tel Aviv');
INSERT INTO cs_location_city VALUES
(null,'北美洲','伊朗','Teheran');
INSERT INTO cs_location_city VALUES
(null,'北美洲','卡塔尔','Doha');
INSERT INTO cs_location_city VALUES
(null,'北美洲','巴林','Bahrain Manama');
INSERT INTO cs_location_city VALUES
(null,'北美洲','沙特阿拉伯','Riyadh');
INSERT INTO cs_location_city VALUES
(null,'北美洲','科威特','Kuwait City');
INSERT INTO cs_location_city VALUES
(null,'北美洲','约旦','Amman');
INSERT INTO cs_location_city VALUES
(null,'北美洲','阿拉伯联合大公国','Abu Dhabi');
INSERT INTO cs_location_city VALUES
(null,'北美洲','阿拉伯联合大公国','Dubai');
INSERT INTO cs_location_city VALUES
(null,'北美洲','阿曼','Muscat');
INSERT INTO cs_location_city VALUES
(null,'北美洲','黎巴嫩','Beirut');

INSERT INTO cs_location_city VALUES
(null,'南美洲','以色列','Jerusalem');
INSERT INTO cs_location_city VALUES
(null,'南美洲','以色列','Tel Aviv');
INSERT INTO cs_location_city VALUES
(null,'南美洲','伊朗','Teheran');
INSERT INTO cs_location_city VALUES
(null,'南美洲','卡塔尔','Doha');
INSERT INTO cs_location_city VALUES
(null,'南美洲','巴林','Bahrain Manama');
INSERT INTO cs_location_city VALUES
(null,'南美洲','沙特阿拉伯','Riyadh');
INSERT INTO cs_location_city VALUES
(null,'南美洲','科威特','Kuwait City');
INSERT INTO cs_location_city VALUES
(null,'南美洲','约旦','Amman');
INSERT INTO cs_location_city VALUES
(null,'南美洲','阿拉伯联合大公国','Abu Dhabi');
INSERT INTO cs_location_city VALUES
(null,'南美洲','阿拉伯联合大公国','Dubai');
INSERT INTO cs_location_city VALUES
(null,'南美洲','阿曼','Muscat');
INSERT INTO cs_location_city VALUES
(null,'南美洲','黎巴嫩','Beirut');

INSERT INTO cs_location_city VALUES
(null,'欧洲','以色列','Jerusalem');
INSERT INTO cs_location_city VALUES
(null,'欧洲','以色列','Tel Aviv');
INSERT INTO cs_location_city VALUES
(null,'欧洲','伊朗','Teheran');
INSERT INTO cs_location_city VALUES
(null,'欧洲','卡塔尔','Doha');
INSERT INTO cs_location_city VALUES
(null,'欧洲','巴林','Bahrain Manama');
INSERT INTO cs_location_city VALUES
(null,'欧洲','沙特阿拉伯','Riyadh');
INSERT INTO cs_location_city VALUES
(null,'欧洲','科威特','Kuwait City');
INSERT INTO cs_location_city VALUES
(null,'欧洲','约旦','Amman');
INSERT INTO cs_location_city VALUES
(null,'欧洲','阿拉伯联合大公国','Abu Dhabi');
INSERT INTO cs_location_city VALUES
(null,'欧洲','阿拉伯联合大公国','Dubai');
INSERT INTO cs_location_city VALUES
(null,'欧洲','阿曼','Muscat');
INSERT INTO cs_location_city VALUES
(null,'欧洲','黎巴嫩','Beirut');


INSERT INTO cs_location_city VALUES
(null,'非洲','以色列','Jerusalem');
INSERT INTO cs_location_city VALUES
(null,'非洲','以色列','Tel Aviv');
INSERT INTO cs_location_city VALUES
(null,'非洲','伊朗','Teheran');
INSERT INTO cs_location_city VALUES
(null,'非洲','卡塔尔','Doha');
INSERT INTO cs_location_city VALUES
(null,'非洲','巴林','Bahrain Manama');
INSERT INTO cs_location_city VALUES
(null,'非洲','沙特阿拉伯','Riyadh');
INSERT INTO cs_location_city VALUES
(null,'非洲','科威特','Kuwait City');
INSERT INTO cs_location_city VALUES
(null,'非洲','约旦','Amman');
INSERT INTO cs_location_city VALUES
(null,'非洲','阿拉伯联合大公国','Abu Dhabi');
INSERT INTO cs_location_city VALUES
(null,'非洲','阿拉伯联合大公国','Dubai');
INSERT INTO cs_location_city VALUES
(null,'非洲','阿曼','Muscat');
INSERT INTO cs_location_city VALUES
(null,'非洲','黎巴嫩','Beirut');





/*向cs_sale_part添加数据*/
/*亚太-中国*/
INSERT INTO cs_sale_part VALUES
(1,1,'亚太',1,'中国',1,'上海','上海 - 江诗丹顿之家','卢湾区淮海中路796号东楼','200020 上海','+86 21 3395 0800','img/zbc/image3.scale.486.264.1519238836400.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(2,1,'亚太',1,'中国',1,'上海','上海 - 浦东国金中心','上海市浦东新区世纪大道8号国际金融中心D座一层L1-17号','200120 上海','+86 21 5834 3337','img/zbc/image1.scale.486.264.1519238836422.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(3,1,'亚太',1,'中国',2,'北京','北京 - SKP','北京市朝阳区建国路87号北京SKP一层D1009店铺','100738 北京','+86 10 6592 5277','img/zbc/image1.scale.486.264.1519238836435.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(4,1,'亚太',1,'中国',2,'北京','北京-王府中环','北京市东城区王府井大街269号王府中环1号楼1层119a号商铺','100006 北京','+86 10 65281008','img/zbc/image1.scale.486.264.1519238836451.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(5,1,'亚太',1,'中国',3,'沈阳','沈阳 - 万象城','沈阳市和平区青年大街288号万象城101号店铺','110004 沈阳','+86 024 3116 2188','',1,1);
INSERT INTO cs_sale_part VALUES
(6,1,'亚太',1,'中国',4,'Nantong','Nantong - Nantong','1F, No. 57 Gongnong Road, Nantong Golden Eagle Shopping Center','226007 Nantong','','',1,0);
INSERT INTO cs_sale_part VALUES
(7,1,'亚太',1,'中国',4,'Nantong','Nantong - Nantong Golden Eagle Shopping Center','江苏省南通市工农路57号金鹰圆融购物中心1F','226007 Nantong','+86 513 89000642','',1,0);
INSERT INTO cs_sale_part VALUES
(8,1,'亚太',1,'中国',1,'上海','上海 - 南京西路','静安区南京西路1117-1127号铺','200041 上海',' +86 21 5228 7881','img/zbc/image1.scale.486.264.1519238836495.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(9,1,'亚太',1,'中国',2,'北京','北京 - 东方广场','北京市东城区东长安街1号东方广场东方新天地首层A101','100738 北京','+86 10 8518 6024','img/zbc/image1.scale.486.264.1519238836512.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(10,1,'亚太',1,'中国',5,'南京','南京 - 德基广场','江苏省南京市中山路18号德基广场一层F121商铺','116001 南京','+86 025 8677 7198','img/zbc/image1.scale.486.264.1519238836530.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(11,1,'亚太',1,'中国',6,'哈尔滨','哈尔滨 - 新宇三宝','哈尔滨盛时钟表有限公司新宇三宝表行, 南岗区建设街51号, Nangang District','150001 哈尔滨','+86 451 5365 9800','img/zbc/image1.scale.486.264.1519238836543.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(12,1,'亚太',1,'中国',7,'大连','大连 - 远洋洲际','辽宁省大连市中山区一德街10号','116001 大连','+86 411 8265 9797','img/zbc/image1.scale.486.264.1519238836563.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(13,1,'亚太',1,'中国',8,'天津','天津 - 海信广场','天津市和平区解放北路188号天津海信广场一层','300024 天津','+86 22 2319 8180','img/zbc/image1.scale.486.264.1519238836582.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(14,1,'亚太',1,'中国',9,'宁波','宁波 - 和义大道购物中心','浙江省宁波市和义路2号和义大道购物中心1017铺','315000 宁波','+86 574 8724 7005','img/zbc/image1.scale.486.264.1519238836602.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(15,1,'亚太',1,'中国',10,'徐州','徐州 - 徐州苏宁广场','江苏省徐州市鼓楼区淮海东路29号徐州苏宁广场一层104号铺位','221005 徐州','+86 516 81008006','',1,0);
INSERT INTO cs_sale_part VALUES
(16,1,'亚太',1,'中国',11,'成都','成都 - 成都—国际金融中心','四川省成都市锦江区红星路三段1号IFS国际金融中心L308铺','610000 成都',' +86 28 6210 0864','',1,1);
INSERT INTO cs_sale_part VALUES
(17,1,'亚太',1,'中国',12,'无锡','无锡 - 无锡—恒隆广场','江苏省无锡市人民中路139号恒隆广场一层123-2铺','214000 无锡','+86 510 8280 0766','img/zbc/image1.scale.486.264.1519238836645.jpeg',1,0);
INSERT INTO cs_sale_part VALUES
(18,1,'亚太',1,'中国',13,'杭州','杭州 - 杭州大厦','浙江省杭州市拱墅区环城北路258号杭州大厦购物城D座1楼','310006 杭州','+86 571 8506 3043','img/zbc/image1.scale.486.264.1519238836661.jpeg',1,0);
INSERT INTO cs_sale_part VALUES
(19,1,'亚太',1,'中国',14,'深圳','深圳 - 万象城','广东省深圳市罗湖区宝安南路1881号华润君悦酒店A栋S120商铺','518001 深圳','+86 755 2221 2088','img/zbc/image1.scale.486.264.1519238836678.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(20,1,'亚太',1,'中国',15,'西安','西安 - 珠江时代广场','西安市碑林区环城南路东段336号西安珠江时代广场','710054 西安','+86 29 8935 8868','img/zbc/image1.scale.486.264.1519238836704.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(21,1,'亚太',1,'中国',16,'郑州','郑州 - 大卫城','河南省郑州市北二七路188 号郑州大卫城一楼','450000 郑州','+86 371 6092 7608','img/zbc/image1.scale.486.264.1519238836722.jpeg',1,0);
INSERT INTO cs_sale_part VALUES
(22,1,'亚太',1,'中国',17,'青岛','青岛 - 海信奥运店','山东省青岛市澳门路117号','266071 青岛','+86 532 667 88157','',1,0);
INSERT INTO cs_sale_part VALUES
(23,1,'亚太',1,'中国',18,'鞍山','鞍山 - 慧通钟表商店','辽宁省鞍山市铁东区二一九路47-1号','114001 鞍山','+86 412 228 0059','img/zbc/image11.scale.486.264.1519238836746.jpeg',1,1);

/*亚太-澳门*/
INSERT INTO cs_sale_part VALUES
(24,1,'亚太',2,'澳门',19,'澳门','澳门 - 新濠影汇','澳门路氹城金光大道莲花路, 新濠影汇购物中心1楼1047号铺, 江诗丹顿专卖店','澳门','+853 2885 2256','img/zbc/zdetail/image1.scale.486.264.1519237004454.jpeg',1,0);
INSERT INTO cs_sale_part VALUES
(25,1,'亚太',2,'澳门',19,'澳门','澳门 - 永利澳门酒店','澳门外港填海区德丽街永利酒店永利名店街30B, Rua Cidade De Sintra, Nape Macau','澳门',' +853 2870 7207','img/zbc/zdetail/image1.scale.486.264.1519237004470.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(26,1,'亚太',2,'澳门',19,'澳门','澳门 - 永利皇宫','46号铺永利皇宫澳门路凼体育馆大马路, Wynn Esplanade, Avenida da Nave Desportiva, Cotai, Macau','澳门','+853 2877 6168','img/zbc/zdetail/image1.scale.486.264.1519237004486.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(27,1,'亚太',2,'澳门',19,'澳门','澳门 - T广场四季名店','四季酒店地面层, 澳门凼仔1068号店, Estrada da Baía de N. Senhora da Esperança, s/n, Cotai Strip Taipa','澳门','+853 2828 2833','img/zbc/zdetail/image1.scale.486.264.1519237004502.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(28,1,'亚太',2,'澳门',19,'澳门','澳门 - T广场新濠天地店','澳门路凼连贯公路新濠天地新濠大道, T Galleria Macau, City Of Dreams, Estrada do Istma (Coloane), Zona de Aterros entre as Ilhas de Coloane e da Taipa, Cotai Strip, Taipa','澳门','+853 8791 8473','img/zbc/zdetail/image1.scale.486.264.1519237004513.jpeg',1,0);

/*亚太-香港*/
INSERT INTO cs_sale_part VALUES
(29,1,'亚太',3,'香港',20,'香港','香港 - 1881 Heritage','香港九龙广东道2号A, 1881, 1楼, 103号店','香港','+852 2301 3811','img/zbc/zdetail/image1.scale.486.264.1519241847371.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(30,1,'亚太',3,'香港',20,'香港','香港 - 置地太子','中环遮打道10号置地太子地下G8号店','香港','+852 2104 3311','img/zbc/zdetail/image1.scale.486.264.1519241847386.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(31,1,'亚太',3,'香港',20,'香港','香港 - IFC商场','国际金融中心商场1楼1009号店, 港景街1号, 中环','香港','+852 2117 0196','img/zbc/zdetail/image1.scale.486.264.1519241847404.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(32,1,'亚太',3,'香港',20,'香港','香港 - 海运大厦','九龙尖沙咀海运大厦2楼OT288号铺','香港','+852 2735 8481','img/zbc/zdetail/image1.scale.486.264.1519241847419.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(33,1,'亚太',3,'香港',20,'香港','香港 - 铜锣湾','湾启超道8号地下','香港','+852 3104 1828','img/zbc/zdetail/image1.scale.486.264.1519241847431.jpeg',1,1);

/*亚太-台湾*/
INSERT INTO cs_sale_part VALUES
(34,1,'亚太',4,'台湾',21,'台湾','台北 - 台北101','台北市市府路45号4楼（台北101购物中心）, No.45, Shifu Rd.','110 台北','+886 2 8101 8658','img/zbc/zdetail/image1.scale.486.264.1519245664902.jpeg',1,1);

/*亚太-韩国*/
INSERT INTO cs_sale_part VALUES
(35,1,'亚太',5,'韩国',22,'Busan','Busan - Pop-up - Shinsegae Centum City','1/F, Shinsegae Centum City Department Store, 35, Centum nam-daero, Haeundae-gu','48058 Busan',' +82 51 745 1254','',1,1);
INSERT INTO cs_sale_part VALUES
(36,1,'亚太',5,'韩国',23,'Jeju','Jeju - Shilla Duty Free','2/F, Shilla Duty Free Shop, 69, Noyeon-ro, Jeju-si, Jeju-do','63131 Jeju','','',1,0);
INSERT INTO cs_sale_part VALUES
(37,1,'亚太',5,'韩国',24,'Seoul','Seoul - Galleria','B1 Galleria East Department Store, 407, Apkujeong-ro, Gangnam-gu','06009 Seoul','+82 2 3446 0088','img/zbc/zdetail/image1.scale.486.264.1519228378174.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(38,1,'亚太',5,'韩国',24,'Seoul','Seoul - Hyundai Main','2F, Hyundai Department Store, 165 Apkujeong-ro, Gangnam-gu','06001 Seoul','+82 2 3449 5930','img/zbc/zdetail/image1.scale.486.264.1519228378195.jpeg',1,1);
/*以下是重复数据*/
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',5,'韩国',24,'Seoul','Seoul - Hyundai Main','2F, Hyundai Department Store, 165 Apkujeong-ro, Gangnam-gu','06001 Seoul','+82 2 3449 5930','img/zbc/zdetail/image1.scale.486.264.1519228378195.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',5,'韩国',24,'Seoul','Seoul - Hyundai Main','2F, Hyundai Department Store, 165 Apkujeong-ro, Gangnam-gu','06001 Seoul','+82 2 3449 5930','img/zbc/zdetail/image1.scale.486.264.1519228378195.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',5,'韩国',24,'Seoul','Seoul - Hyundai Main','2F, Hyundai Department Store, 165 Apkujeong-ro, Gangnam-gu','06001 Seoul','+82 2 3449 5930','img/zbc/zdetail/image1.scale.486.264.1519228378195.jpeg',1,1);

/*亚太-日本*/
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',null,'日本',null,'Busan','Busan - Pop-up - Shinsegae Centum City','1/F, Shinsegae Centum City Department Store, 35, Centum nam-daero, Haeundae-gu','48058 Busan',' +82 51 745 1254','',1,1);
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',null,'日本',null,'Jeju','Jeju - Shilla Duty Free','2/F, Shilla Duty Free Shop, 69, Noyeon-ro, Jeju-si, Jeju-do','63131 Jeju','','',1,0);
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',null,'日本',null,'Seoul','Seoul - Galleria','B1 Galleria East Department Store, 407, Apkujeong-ro, Gangnam-gu','06009 Seoul','+82 2 3446 0088','img/zbc/zdetail/image1.scale.486.264.1519228378174.jpeg',1,1);
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',null,'日本',null,'Seoul','Seoul - Hyundai Main','2F, Hyundai Department Store, 165 Apkujeong-ro, Gangnam-gu','06001 Seoul','+82 2 3449 5930','img/zbc/zdetail/image1.scale.486.264.1519228378195.jpeg',1,1);






/*授权零售商*/
/*亚太中国*/
INSERT INTO cs_sale_part VALUES
(801,1,'亚太',1,'中国',null,'长沙','长沙友谊','湖南省长沙市五一大道368号友谊商店A座一楼进口表柜','410001 Changsha','+86 731 84465098','',2,0);
INSERT INTO cs_sale_part VALUES
(802,1,'亚太',1,'中国',null,'合肥','合肥银泰','安徽省合肥市长江中路98号银泰中心一楼','230061 Hefei','+86 551 62620816','',2,0);
INSERT INTO cs_sale_part VALUES
(803,1,'亚太',1,'中国',null,'长沙','长沙友谊','湖南省长沙市五一大道368号友谊商店A座一楼进口表柜','410001 Changsha','+86 731 84465098','',2,0);
INSERT INTO cs_sale_part VALUES
(804,1,'亚太',1,'中国',null,'合肥','合肥银泰','安徽省合肥市长江中路98号银泰中心一楼','230061 Hefei','+86 551 62620816','',2,0);
/*亚太澳门*/
INSERT INTO cs_sale_part VALUES
(901,1,'亚太',2,'澳门',19,'澳门','六福钟表','葡京酒店商场4-5号','澳门','+853 28 38 14 29','',2,0);
INSERT INTO cs_sale_part VALUES
(902,1,'亚太',2,'澳门',19,'澳门','英皇钟表珠宝','澳门殷皇子大马路67-69号地下B座','澳门','+853 2871 6208','',2,0);

/*亚太-香港*/
INSERT INTO cs_sale_part VALUES
(1003,1,'亚太',3,'香港',20,'香港','三宝钟表珠宝','香港铜锣湾时代广场801-803号铺','香港','+852 2111 9128','',2,0);
INSERT INTO cs_sale_part VALUES
(1004,1,'亚太',3,'香港',20,'香港','东方表行有限公司','铜锣湾轩尼诗道488轩尼诗大厦地下B铺','香港','+852 2577 1332','',2,0);
INSERT INTO cs_sale_part VALUES
(1005,1,'亚太',3,'香港',20,'香港','东方表行有限公司','中环皇后大道中100号地铺','香港','+852 3470 0009','',2,0);
INSERT INTO cs_sale_part VALUES
(1006,1,'亚太',3,'香港',20,'香港','东方表行有限公司','中环德辅道133号地下','香港','+852 254 54 577','',2,0);
INSERT INTO cs_sale_part VALUES
(1007,1,'亚太',3,'香港',20,'香港','喜运佳钟表集团','九龙弥敦地道下223A','香港','+852 2735 0722','',2,0);
INSERT INTO cs_sale_part VALUES
(1008,1,'亚太',3,'香港',20,'香港','嘉信表行有限公司','中环皇后大道中33号万邦行地下B铺','香港','+852 2180 8999','',2,0);
INSERT INTO cs_sale_part VALUES
(1009,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','铜锣湾启超道16号地下A1-A7号铺','香港','+852 2895 6688','',2,0);
INSERT INTO cs_sale_part VALUES
(1010,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
/*以下为重复数据*/
INSERT INTO cs_sale_part VALUES
(1011,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
INSERT INTO cs_sale_part VALUES
(1012,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
INSERT INTO cs_sale_part VALUES
(1013,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
INSERT INTO cs_sale_part VALUES
(1014,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
INSERT INTO cs_sale_part VALUES
(1015,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
INSERT INTO cs_sale_part VALUES
(1016,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);
INSERT INTO cs_sale_part VALUES
(1017,1,'亚太',3,'香港',20,'香港','太子珠宝钟表','尖沙咀北京道10号宝业大厦地下3号','香港','+852 2369 2123','',2,0);

/*亚太-台湾*/
INSERT INTO cs_sale_part VALUES
(1018,1,'亚太',4,'台湾',21,'台湾','宝鸿堂钟表公司','台中市南屯区五权西路二段222号','408 台中','+886 424 753 868','',2,0);
INSERT INTO cs_sale_part VALUES
(1019,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
/*以下为重复数据*/
INSERT INTO cs_sale_part VALUES
(1020,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
INSERT INTO cs_sale_part VALUES
(1021,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
INSERT INTO cs_sale_part VALUES
(1022,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
INSERT INTO cs_sale_part VALUES
(1023,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
INSERT INTO cs_sale_part VALUES
(1024,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
INSERT INTO cs_sale_part VALUES
(1025,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);
INSERT INTO cs_sale_part VALUES
(1026,1,'亚太',4,'台湾',21,'台湾','中美鐘錶股份有限公司','台北市忠孝東路四段118號','106 台北','+886 227 212 471','',2,0);

/*亚太-韩国*/
INSERT INTO cs_sale_part VALUES
(1027,1,'亚太',5,'韩国',22,'Busan','Swiss Watch','1F, Lotte Busan Department Store,, 772 Gaya-Daero, Busanjin-Gu','614-732 Busan','+82 51 810 3196','',2,0);
INSERT INTO cs_sale_part VALUES
(1028,1,'亚太',5,'韩国',24,'Seoul','Draw a Circle KN','3F, Shinsegae Kangnam department store, 19-3, 176 Shinbanpo-Ro, Seocho-Gu','137-041 Seoul','+82 2 3479 1986','',2,0);
/*repeat*/
INSERT INTO cs_sale_part VALUES
(1029,1,'亚太',5,'韩国',24,'Seoul','Draw a Circle KN','3F, Shinsegae Kangnam department store, 19-3, 176 Shinbanpo-Ro, Seocho-Gu','137-041 Seoul','+82 2 3479 1986','',2,0);
INSERT INTO cs_sale_part VALUES
(null,1,'亚太',null,'印尼',null,'Seoul','Draw a Circle KN','3F, Shinsegae Kangnam department store, 19-3, 176 Shinbanpo-Ro, Seocho-Gu','137-041 Seoul','+82 2 3479 1986','',2,0);

