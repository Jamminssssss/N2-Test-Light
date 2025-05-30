const vocabulary = [
  {
    "japanese": "明け方",
    "translations": {
      "english": "dawn",
      "chinese": "黎明; 拂晓",
      "korean": "새벽; 동틀녘",
      "vietnamese": "bình minh; rạng đông",
      "thai": "รุ่งอรุณ; เช้ามืด"
    }
  },
  {
    "japanese": "青白い",
    "translations": {
      "english": "pale; bluish-white",
      "chinese": "苍白的; 青白色的",
      "korean": "창백한; 푸르스름한",
      "vietnamese": "tái nhợt; xanh xao",
      "thai": "ซีด; ขาวอมฟ้า"
    }
  },
  {
    "japanese": "足跡",
    "translations": {
      "english": "footprints",
      "chinese": "脚印; 足迹",
      "korean": "발자국",
      "vietnamese": "dấu chân",
      "thai": "รอยเท้า"
    }
  },
  {
    "japanese": "売買",
    "translations": {
      "english": "trade; buying and selling",
      "chinese": "买卖; 交易",
      "korean": "매매; 사고팔기",
      "vietnamese": "mua bán; giao dịch",
      "thai": "การซื้อขาย; การค้า"
    }
  },
  {
    "japanese": "売店",
    "translations": {
      "english": "stand; stall; booth; kiosk; store",
      "chinese": "小卖部; 售货亭",
      "korean": "매점; 가판대",
      "vietnamese": "quầy hàng; sạp hàng; ki-ốt",
      "thai": "ร้านค้าเล็กๆ; แผงลอย; คีออสก์"
    }
  },
  {
    "japanese": "募集",
    "translations": {
      "english": "recruitment; invitation; taking applications; solicitation",
      "chinese": "招募; 征集",
      "korean": "모집; 초빙",
      "vietnamese": "tuyển dụng; mời; chiêu mộ",
      "thai": "การรับสมัคร; การเชิญชวน"
    }
  },
  {
    "japanese": "長男",
    "translations": {
      "english": "eldest son; first-born son",
      "chinese": "长子; 大儿子",
      "korean": "장남; 맏아들",
      "vietnamese": "con trai cả; trưởng nam",
      "thai": "ลูกชายคนโต"
    }
  },
  {
    "japanese": "楕円",
    "translations": {
      "english": "ellipse",
      "chinese": "椭圆",
      "korean": "타원",
      "vietnamese": "hình elip",
      "thai": "วงรี"
    }
  },
  {
    "japanese": "大学院",
    "translations": {
      "english": "graduate school",
      "chinese": "研究生院",
      "korean": "대학원",
      "vietnamese": "trường cao học; viện sau đại học",
      "thai": "บัณฑิตวิทยาลัย"
    }
  },
  {
    "japanese": "出入口",
    "translations": {
      "english": "exit and entrance",
      "chinese": "出入口",
      "korean": "출입구",
      "vietnamese": "lối ra vào",
      "thai": "ทางเข้าออก"
    }
  },
  {
    "japanese": "宴会",
    "translations": {
      "english": "party; banquet; reception; feast; dinner",
      "chinese": "宴会; 酒席",
      "korean": "연회; 잔치",
      "vietnamese": "tiệc; yến tiệc",
      "thai": "งานเลี้ยง; งานสังสรรค์"
    }
  },
  {
    "japanese": "円周",
    "translations": {
      "english": "circumference",
      "chinese": "圆周",
      "korean": "원주; 둘레",
      "vietnamese": "chu vi hình tròn",
      "thai": "เส้นรอบวง"
    }
  },
  {
    "japanese": "遠足",
    "translations": {
      "english": "excursion; outing; trip",
      "chinese": "远足;郊游",
      "korean": "소풍; 원족",
      "vietnamese": "chuyến dã ngoại; chuyến đi chơi xa",
      "thai": "การทัศนศึกษา; การไปเที่ยวแบบไปเช้าเย็นกลับ"
    }
  },
  {
    "japanese": "父母",
    "translations": {
      "english": "father and mother; parents",
      "chinese": "父母",
      "korean": "부모",
      "vietnamese": "cha mẹ; phụ mẫu",
      "thai": "พ่อแม่; บิดามารดา"
    }
  },
  {
    "japanese": "学科",
    "translations": {
      "english": "study subject; course of study; department",
      "chinese": "学科; 专业; 系",
      "korean": "학과; 전공과목",
      "vietnamese": "môn học; ngành học; khoa",
      "thai": "สาขาวิชา; ภาควิชา"
    }
  },
  {
    "japanese": "学会",
    "translations": {
      "english": "scientific society; academic meeting; academic conference",
      "chinese": "学会;学术会议",
      "korean": "학회; 학술 대회",
      "vietnamese": "hội khoa học; hội nghị học thuật",
      "thai": "สมาคมวิชาการ; การประชุมทางวิชาการ"
    }
  },
  {
    "japanese": "学力",
    "translations": {
      "english": "scholarly ability; scholarship; knowledge; literary ability",
      "chinese": "学力; 学识",
      "korean": "학력; 학문적 능력",
      "vietnamese": "học lực; trình độ học vấn",
      "thai": "ความสามารถทางวิชาการ; ความรู้"
    }
  },
  {
    "japanese": "外科",
    "translations": {
      "english": "surgery; department of surgery",
      "chinese": "外科; 外科部门",
      "korean": "외과; 외과 부서",
      "vietnamese": "ngoại khoa; khoa ngoại",
      "thai": "ศัลยกรรม; แผนกศัลยกรรม"
    }
  },
  {
    "japanese": "花火",
    "translations": {
      "english": "fireworks",
      "chinese": "烟花; 焰火",
      "korean": "불꽃놀이; 불꽃",
      "vietnamese": "pháo hoa",
      "thai": "ดอกไม้ไฟ; พลุ"
    }
  },
  {
    "japanese": "半径",
    "translations": {
      "english": "radius",
      "chinese": "半径",
      "korean": "반지름; 반경",
      "vietnamese": "bán kính",
      "thai": "รัศมี"
    }
  },
  {
    "japanese": "半島",
    "translations": {
      "english": "peninsula",
      "chinese": "半岛",
      "korean": "반도",
      "vietnamese": "bán đảo",
      "thai": "คาบสมุทร"
    }
  },
  {
    "japanese": "発売",
    "translations": {
      "english": "sale; release (for sale); launch (product)",
      "chinese": "发售; 上市",
      "korean": "발매; 출시",
      "vietnamese": "phát hành; ra mắt (sản phẩm); mở bán",
      "thai": "การวางจำหน่าย; การเปิดตัวสินค้า"
    }
  },
  {
    "japanese": "早口",
    "translations": {
      "english": "fast-talking; rapid talking",
      "chinese": "说话快; 口齿伶俐",
      "korean": "말이 빠름; 속사포",
      "vietnamese": "nói nhanh; nói liến thoắng",
      "thai": "การพูดเร็ว"
    }
  },
  {
    "japanese": "外れる",
    "translations": {
      "english": "to be disconnected; to be off; to miss the mark",
      "chinese": "脱落; 偏离; 未中",
      "korean": "벗어나다; 떨어지다; 빗나가다",
      "vietnamese": "bị tuột ra; trật; không trúng",
      "thai": "หลุด; พลาด; ไม่ตรงเป้า"
    }
  },
  {
    "japanese": "閉会",
    "translations": {
      "english": "closure (of a ceremony, event, meeting, etc.)",
      "chinese": "闭会; 结束",
      "korean": "폐회; 마침",
      "vietnamese": "bế mạc (buổi lễ, sự kiện, cuộc họp, v.v.)",
      "thai": "การปิด (พิธี, งาน, การประชุม ฯลฯ)"
    }
  },
  {
    "japanese": "昼寝",
    "translations": {
      "english": "nap, siesta",
      "chinese": "午睡; 小睡",
      "korean": "낮잠",
      "vietnamese": "ngủ trưa",
      "thai": "การงีบหลับ; นอนกลางวัน"
    }
  },
  {
    "japanese": "意地悪",
    "translations": {
      "english": "malicious; ill-tempered; unkind",
      "chinese": "使坏; 心术不正的; 不友善的",
      "korean": "심술궂은; 못된",
      "vietnamese": "hiểm ác; xấu tính; không tử tế",
      "thai": "มุ่งร้าย; นิสัยไม่ดี; ใจร้าย"
    }
  },
  {
    "japanese": "移転",
    "translations": {
      "english": "moving; relocation; change of address",
      "chinese": "搬迁; 迁移; 地址变更",
      "korean": "이전; 이사; 주소 변경",
      "vietnamese": "di chuyển; dời đi; thay đổi địa chỉ",
      "thai": "การย้าย; การเปลี่ยนที่อยู่"
    }
  },
  {
    "japanese": "一旦",
    "translations": {
      "english": "once; for a short time; briefly; temporarily",
      "chinese": "一旦; 暂时; 短暂地",
      "korean": "일단; 잠시; 일시적으로",
      "vietnamese": "một khi; một lát; tạm thời",
      "thai": "ครั้น; ชั่วคราว; สักครู่"
    }
  },
  {
    "japanese": "寺院",
    "translations": {
      "english": "Buddhist temple; religious building",
      "chinese": "寺院; 宗教建筑",
      "korean": "사원; 절; 종교 건물",
      "vietnamese": "chùa; đền thờ; công trình tôn giáo",
      "thai": "วัดพุทธ; ศาสนสถาน"
    }
  },
  {
    "japanese": "人文科学",
    "translations": {
      "english": "humanities; social sciences; liberal arts",
      "chinese": "人文学科; 社会科学; 文科",
      "korean": "인문과학; 사회과학; 문리과",
      "vietnamese": "khoa học nhân văn; khoa học xã hội; nghệ thuật tự do",
      "thai": "มนุษยศาสตร์; สังคมศาสตร์; ศิลปศาสตร์"
    }
  },
  {
    "japanese": "自習",
    "translations": {
      "english": "self-study; teaching oneself",
      "chinese": "自习; 自学",
      "korean": "자습; 독학",
      "vietnamese": "tự học",
      "thai": "การศึกษาด้วยตนเอง"
    }
  },
  {
    "japanese": "時速",
    "translations": {
      "english": "speed (per hour)",
      "chinese": "时速",
      "korean": "시속",
      "vietnamese": "tốc độ (mỗi giờ)",
      "thai": "ความเร็ว (ต่อชั่วโมง)"
    }
  },
  {
    "japanese": "実習",
    "translations": {
      "english": "practice; training; practical exercise; drill",
      "chinese": "实习; 实践; 演练",
      "korean": "실습; 훈련; 연습",
      "vietnamese": "thực hành; thực tập; rèn luyện",
      "thai": "การฝึกงาน; การฝึกปฏิบัติ; การฝึกซ้อม"
    }
  },
  {
    "japanese": "過半数",
    "translations": {
      "english": "majority",
      "chinese": "过半数; 大多数",
      "korean": "과반수; 대다수",
      "vietnamese": "đa số; quá bán",
      "thai": "เสียงข้างมาก; ส่วนใหญ่"
    }
  },
  {
    "japanese": "開会",
    "translations": {
      "english": "opening of a meeting; starting (an event, etc)",
      "chinese": "开会; 开始",
      "korean": "개회; 시작",
      "vietnamese": "khai mạc (cuộc họp); bắt đầu (sự kiện, v.v.)",
      "thai": "การเปิดประชุม; การเริ่มต้น (งาน ฯลฯ)"
    }
  },
  {
    "japanese": "会館",
    "translations": {
      "english": "meeting hall; assembly hall",
      "chinese": "会馆; 集会堂",
      "korean": "회관; 집회소",
      "vietnamese": "hội quán; phòng họp lớn",
      "thai": "หอประชุม"
    }
  },
  {
    "japanese": "回転",
    "translations": {
      "english": "rotation; revolution; turning",
      "chinese": "旋转; 转动",
      "korean": "회전; 선회",
      "vietnamese": "sự quay; vòng quay; sự xoay",
      "thai": "การหมุน; การหมุนรอบ"
    }
  },
  {
    "japanese": "加速",
    "translations": {
      "english": "acceleration; speeding up",
      "chinese": "加速; 加快速度",
      "korean": "가속; 속도를 높임",
      "vietnamese": "gia tốc; tăng tốc",
      "thai": "ความเร่ง; การเพิ่มความเร็ว"
    }
  },
  {
    "japanese": "加速度",
    "translations": {
      "english": "acceleration",
      "chinese": "加速度",
      "korean": "가속도",
      "vietnamese": "gia tốc",
      "thai": "ความเร่ง"
    }
  },
  {
    "japanese": "見学",
    "translations": {
      "english": "study by observation; field trip; tour; review; inspection",
      "chinese": "参观学习; 实地考察; 游览; 审查; 检查",
      "korean": "견학; 현장 학습; 시찰",
      "vietnamese": "tham quan học tập; đi thực tế; chuyến tham quan",
      "thai": "การทัศนศึกษา; การเยี่ยมชมเพื่อศึกษา; การตรวจสอบ"
    }
  },
  {
    "japanese": "国王",
    "translations": {
      "english": "king; queen; monarch; sovereign",
      "chinese": "国王; 女王; 君主; 元首",
      "korean": "국왕; 여왕; 군주",
      "vietnamese": "vua; nữ hoàng; quốc vương",
      "thai": "กษัตริย์; ราชินี; ประมุข"
    }
  },
  {
    "japanese": "国立",
    "translations": {
      "english": "national",
      "chinese": "国立的",
      "korean": "국립",
      "vietnamese": "quốc gia; quốc lập",
      "thai": "แห่งชาติ; ของรัฐ"
    }
  },
  {
    "japanese": "国籍",
    "translations": {
      "english": "nationality; citizenship",
      "chinese": "国籍; 公民身份",
      "korean": "국적; 시민권",
      "vietnamese": "quốc tịch",
      "thai": "สัญชาติ"
    }
  },
  {
    "japanese": "転がる",
    "translations": {
      "english": "to roll; to fall over; to lie down",
      "chinese": "滚动; 跌倒; 躺下",
      "korean": "구르다; 넘어지다; 드러눕다",
      "vietnamese": "lăn; ngã; nằm xuống",
      "thai": "กลิ้ง; ล้ม; นอนลง"
    }
  },
  {
    "japanese": "転がす",
    "translations": {
      "english": "to roll; to turn over",
      "chinese": "使滚动; 翻转",
      "korean": "굴리다; 뒤집다",
      "vietnamese": "lăn (một vật gì đó); lật",
      "thai": "ทำให้กลิ้ง; พลิก"
    }
  },
  {
    "japanese": "校舎",
    "translations": {
      "english": "school building; schoolhouse",
      "chinese": "校舍; 教学楼",
      "korean": "교사; 학교 건물",
      "vietnamese": "tòa nhà trường học",
      "thai": "อาคารเรียน"
    }
  },
  {
    "japanese": "校庭",
    "translations": {
      "english": "schoolyard; playground; school grounds; campus",
      "chinese": "校园;操场; 校内场地",
      "korean": "교정; 운동장; 학교 마당",
      "vietnamese": "sân trường; sân chơi; khuôn viên trường",
      "thai": "สนามโรงเรียน; บริเวณโรงเรียน"
    }
  },
  {
    "japanese": "待合室",
    "translations": {
      "english": "waiting room",
      "chinese": "候诊室; 等候室",
      "korean": "대합실; 기다리는 곳",
      "vietnamese": "phòng chờ",
      "thai": "ห้องพักรอ"
    }
  },
  {
    "japanese": "待ち合わせる",
    "translations": {
      "english": "to rendezvous; to meet at a prearranged place and time; to arrange to meet",
      "chinese": "约会; (在预定地点和时间)会面; 安排见面",
      "korean": "만나기로 약속하다; 약속하여 만나다",
      "vietnamese": "hẹn gặp; gặp nhau tại địa điểm và thời gian đã định trước",
      "thai": "นัดพบ; พบกันตามที่นัดหมาย"
    }
  },
  {
    "japanese": "窓口",
    "translations": {
      "english": "ticket window; teller window; counter",
      "chinese": "售票窗口; 柜台",
      "korean": "창구; 매표소",
      "vietnamese": "quầy vé; quầy giao dịch",
      "thai": "ช่องขายตั๋ว; เคาน์เตอร์บริการ"
    }
  },
  {
    "japanese": "毎度",
    "translations": {
      "english": "each time; always; often; thank you for your continued patronage​",
      "chinese": "每次; 总是; 经常; 承蒙惠顾",
      "korean": "매번; 늘; 자주; 항상 감사합니다 (단골손님에게)",
      "vietnamese": "mỗi lần; luôn luôn; thường xuyên; cảm ơn quý khách đã luôn ủng hộ",
      "thai": "ทุกครั้ง; เสมอ; บ่อยๆ; ขอบคุณที่อุดหนุนเสมอ"
    }
  },
  {
    "japanese": "真っ青",
    "translations": {
      "english": "deep blue; bright blue​; ghastly pale; white as a sheet",
      "chinese": "深蓝色; 鲜蓝色; 惨白; 脸色苍白",
      "korean": "새파란; 창백한",
      "vietnamese": "xanh đậm; xanh biếc; tái mét; trắng bệch",
      "thai": "สีน้ำเงินเข้ม; สีฟ้าสด; ซีดเผือด"
    }
  },
  {
    "japanese": "真っ白",
    "translations": {
      "english": "pure white; blank",
      "chinese": "纯白色; 空白",
      "korean": "새하얀; 순백의; 공백의",
      "vietnamese": "trắng tinh; trống trơn",
      "thai": "ขาวบริสุทธิ์; ว่างเปล่า"
    }
  },
  {
    "japanese": "名刺",
    "translations": {
      "english": "business card",
      "chinese": "名片",
      "korean": "명함",
      "vietnamese": "danh thiếp",
      "thai": "นามบัตร"
    }
  },
  {
    "japanese": "店屋",
    "translations": {
      "english": "store; shop",
      "chinese": "商店; 店铺",
      "korean": "가게; 상점",
      "vietnamese": "cửa hàng; cửa hiệu",
      "thai": "ร้านค้า"
    }
  },
  {
    "japanese": "木材",
    "translations": {
      "english": "lumber; timber; wood",
      "chinese": "木材; 木料",
      "korean": "목재; 재목",
      "vietnamese": "gỗ; gỗ xây dựng",
      "thai": "ไม้แปรรูป; ไม้ซุง"
    }
  },
  {
    "japanese": "元々",
    "translations": {
      "english": "originally, by nature, from the start",
      "chinese": "原本; 本来; 从一开始",
      "korean": "원래; 본래; 처음부터",
      "vietnamese": "vốn dĩ; ban đầu; từ đầu",
      "thai": "แต่เดิม; โดยธรรมชาติ; ตั้งแต่แรก"
    }
  },
  {
    "japanese": "内科",
    "translations": {
      "english": "internal medicine",
      "chinese": "内科",
      "korean": "내과",
      "vietnamese": "nội khoa",
      "thai": "อายุรศาสตร์; แผนกอายุรกรรม"
    }
  },
  {
    "japanese": "並木",
    "translations": {
      "english": "roadside tree; row of trees",
      "chinese": "林荫树; 行道树",
      "korean": "가로수; 나란히 선 나무들",
      "vietnamese": "cây ven đường; hàng cây",
      "thai": "ต้นไม้ริมทาง; แนวต้นไม้"
    }
  },
  {
    "japanese": "入社",
    "translations": {
      "english": "joining a company",
      "chinese": "入职; 进入公司",
      "korean": "입사; 회사에 들어감",
      "vietnamese": "vào công ty làm việc; gia nhập công ty",
      "thai": "การเข้าทำงานในบริษัท"
    }
  },
  {
    "japanese": "押さえる",
    "translations": {
      "english": "to pin down; to hold down; to press down",
      "chinese": "按住; 压住; 抑制",
      "korean": "누르다; 억누르다; 잡다",
      "vietnamese": "giữ chặt; đè xuống; ấn xuống",
      "thai": "กดไว้; จับไว้; ควบคุมไว้"
    }
  },
  {
    "japanese": "理科",
    "translations": {
      "english": "science (department; course)",
      "chinese": "理科 (系; 课程)",
      "korean": "이과; 과학 (학과; 과목)",
      "vietnamese": "khoa học tự nhiên (khoa; môn học)",
      "thai": "วิทยาศาสตร์ (ภาควิชา; รายวิชา)"
    }
  },
  {
    "japanese": "領収",
    "translations": {
      "english": "receipt (of money); receiving",
      "chinese": "收据; 收到 (钱款)",
      "korean": "영수; 받음 (돈)",
      "vietnamese": "biên lai (nhận tiền); sự nhận",
      "thai": "ใบเสร็จรับเงิน; การรับ (เงิน)"
    }
  },
  {
    "japanese": "再三",
    "translations": {
      "english": "again and again; repeatedly",
      "chinese": "再三; 一再",
      "korean": "재삼; 여러 번; 거듭",
      "vietnamese": "nhiều lần; lặp đi lặp lại",
      "thai": "ครั้งแล้วครั้งเล่า; ซ้ำๆ"
    }
  },
  {
    "japanese": "刺さる",
    "translations": {
      "english": "to stick into (with a sharp point); to prick; to get stuck (in)",
      "chinese": "刺入; 扎进; 卡住",
      "korean": "박히다; 찔리다; 걸리다",
      "vietnamese": "cắm vào; đâm vào; bị mắc kẹt",
      "thai": "ทิ่มแทง; ปัก; ติดอยู่"
    }
  },
  {
    "japanese": "刺身",
    "translations": {
      "english": "sashimi (raw sliced fish, shellfish or crustaceans)",
      "chinese": "生鱼片",
      "korean": "사시미; 생선회",
      "vietnamese": "sashimi (cá, hải sản sống thái lát)",
      "thai": "ซาชิมิ (ปลาดิบหั่นชิ้น)"
    }
  },
  {
    "japanese": "早速",
    "translations": {
      "english": "at once; immediately; without delay; promptly",
      "chinese": "立刻; 马上; 毫不迟延地",
      "korean": "즉시; 곧바로; 지체 없이",
      "vietnamese": "ngay lập tức; ngay; không chậm trễ",
      "thai": "ทันที; โดยเร็ว; ไม่ชักช้า"
    }
  },
  {
    "japanese": "刺す",
    "translations": {
      "english": "to pierce; to stab; to prick; to stick; to thrust; to sting",
      "chinese": "刺; 戳; 扎; 叮",
      "korean": "찌르다; 쏘다",
      "vietnamese": "đâm; chích; chọc; cắm; đốt (côn trùng)",
      "thai": "แทง; ทิ่ม; ต่อย (แมลง)"
    }
  },
  {
    "japanese": "青少年",
    "translations": {
      "english": "youth; young person",
      "chinese": "青少年; 年轻人",
      "korean": "청소년; 젊은이",
      "vietnamese": "thanh thiếu niên; người trẻ tuổi",
      "thai": "เยาวชน; คนหนุ่มสาว"
    }
  },
  {
    "japanese": "赤道",
    "translations": {
      "english": "equator",
      "chinese": "赤道",
      "korean": "적도",
      "vietnamese": "xích đạo",
      "thai": "เส้นศูนย์สูตร"
    }
  },
  {
    "japanese": "社会科学",
    "translations": {
      "english": "social science",
      "chinese": "社会科学",
      "korean": "사회과학",
      "vietnamese": "khoa học xã hội",
      "thai": "สังคมศาสตร์"
    }
  },
  {
    "japanese": "社説",
    "translations": {
      "english": "editorial; leading article; leader",
      "chinese": "社论; 重要文章",
      "korean": "사설; 주요 기사",
      "vietnamese": "xã luận; bài xã luận",
      "thai": "บทบรรณาธิการ"
    }
  },
  {
    "japanese": "司会",
    "translations": {
      "english": "master of ceremonies; leading a meeting; presenter; host",
      "chinese": "主持人; 主持会议; 司仪",
      "korean": "사회; 사회자; 진행자",
      "vietnamese": "người dẫn chương trình; chủ trì cuộc họp; người giới thiệu",
      "thai": "พิธีกร; ผู้ดำเนินรายการ; ผู้ควบคุมการประชุม"
    }
  },
  {
    "japanese": "新幹線",
    "translations": {
      "english": "Japanese bullet train",
      "chinese": "新干线 (日本高速列车)",
      "korean": "신칸센 (일본 고속열차)",
      "vietnamese": "Shinkansen (tàu cao tốc Nhật Bản)",
      "thai": "ชินคันเซ็น (รถไฟหัวกระสุนของญี่ปุ่น)"
    }
  },
  {
    "japanese": "白髪",
    "translations": {
      "english": "white hair; grey hair",
      "chinese": "白发; 灰发",
      "korean": "백발; 흰머리; 희끗희끗한 머리",
      "vietnamese": "tóc trắng; tóc bạc",
      "thai": "ผมขาว; ผมหงอก"
    }
  },
  {
    "japanese": "自然科学",
    "translations": {
      "english": "natural science",
      "chinese": "自然科学",
      "korean": "자연과학",
      "vietnamese": "khoa học tự nhiên",
      "thai": "วิทยาศาสตร์ธรรมชาติ"
    }
  },
  {
    "japanese": "書店",
    "translations": {
      "english": "bookshop; bookstore",
      "chinese": "书店",
      "korean": "서점",
      "vietnamese": "hiệu sách; nhà sách",
      "thai": "ร้านหนังสือ"
    }
  },
  {
    "japanese": "商社",
    "translations": {
      "english": "trading company; firm",
      "chinese": "商社; 贸易公司",
      "korean": "상사; 무역 회사",
      "vietnamese": "công ty thương mại",
      "thai": "บริษัทการค้า"
    }
  },
  {
    "japanese": "商店",
    "translations": {
      "english": "shop; small store; business; firm",
      "chinese": "商店; 小店铺; 商行",
      "korean": "상점; 가게; 사업체",
      "vietnamese": "cửa hàng; cửa hiệu nhỏ; doanh nghiệp",
      "thai": "ร้านค้า; ร้านค้าขนาดเล็ก; ธุรกิจ"
    }
  },
  {
    "japanese": "集合",
    "translations": {
      "english": "gathering; assembly; meeting",
      "chinese": "集合; 集会; 会议",
      "korean": "집합; 모임; 회의",
      "vietnamese": "tập hợp; cuộc họp; sự tụ họp",
      "thai": "การรวมตัว; การชุมนุม; การประชุม"
    }
  },
  {
    "japanese": "習字",
    "translations": {
      "english": "calligraphy; penmanship",
      "chinese": "书法; 习字",
      "korean": "습자; 서예",
      "vietnamese": "thư pháp; luyện chữ",
      "thai": "การคัดลายมือ; อักษรวิจิตร"
    }
  },
  {
    "japanese": "集会",
    "translations": {
      "english": "meeting; assembly; gathering; convention; rally",
      "chinese": "集会; 大会; 聚会; 会议",
      "korean": "집회; 모임; 대회; 집결",
      "vietnamese": "cuộc họp; hội nghị; sự tụ tập; đại hội; cuộc mít tinh",
      "thai": "การประชุม; การชุมนุม; การรวมตัว"
    }
  },
  {
    "japanese": "速力",
    "translations": {
      "english": "speed",
      "chinese": "速度; 速率",
      "korean": "속력; 빠르기",
      "vietnamese": "tốc độ",
      "thai": "ความเร็ว"
    }
  },
  {
    "japanese": "速達",
    "translations": {
      "english": "express; special delivery",
      "chinese": "速递; 特别递送",
      "korean": "속달; 특급 배달",
      "vietnamese": "chuyển phát nhanh; gửi đặc biệt",
      "thai": "ไปรษณีย์ด่วน; การส่งแบบพิเศษ"
    }
  },
  {
    "japanese": "足袋",
    "translations": {
      "english": "Japanese socks (with split toe)",
      "chinese": "足袋 (日式分趾袜)",
      "korean": "타비 (일본식 버선)",
      "vietnamese": "tabi (tất Nhật Bản có ngón tách rời)",
      "thai": "ถุงเท้าแบบญี่ปุ่น (แยกนิ้วโป้ง)"
    }
  },
  {
    "japanese": "足る",
    "translations": {
      "english": "to be sufficient; to be enough​; to be worth doing; to be worthy of; to deserve​",
      "chinese": "足够; 充足; 值得做; 配得上",
      "korean": "충분하다; 족하다; 할 만하다; 가치가 있다",
      "vietnamese": "đủ; xứng đáng; đáng làm",
      "thai": "เพียงพอ; พอ; คุ้มค่าที่จะทำ; สมควรได้รับ"
    }
  },
  {
    "japanese": "特売",
    "translations": {
      "english": "special sale",
      "chinese": "特卖; 特价销售",
      "korean": "특매; 특별 판매",
      "vietnamese": "bán hàng đặc biệt; giảm giá đặc biệt",
      "thai": "การขายราคาพิเศษ"
    }
  },
  {
    "japanese": "透明",
    "translations": {
      "english": "transparent; clear",
      "chinese": "透明的; 清澈的",
      "korean": "투명한; 맑은",
      "vietnamese": "trong suốt; rõ ràng",
      "thai": "โปร่งใส; ใส"
    }
  },
  {
    "japanese": "東洋",
    "translations": {
      "english": "Orient",
      "chinese": "东洋; 东方",
      "korean": "동양",
      "vietnamese": "Đông phương",
      "thai": "ตะวันออก; กลุ่มประเทศตะวันออก"
    }
  },
  {
    "japanese": "売れ行き",
    "translations": {
      "english": "sales; demand",
      "chinese": "销路; 销售情况; 需求",
      "korean": "팔리는 상황; 매출; 수요",
      "vietnamese": "tình hình bán hàng; doanh số; nhu cầu",
      "thai": "ยอดขาย; ความต้องการ (สินค้า)"
    }
  },
  {
    "japanese": "売上",
    "translations": {
      "english": "amount sold; sales; proceeds; turnover",
      "chinese": "销售额; 营业额",
      "korean": "매상; 매출액; 판매액",
      "vietnamese": "doanh thu; doanh số bán hàng",
      "thai": "ยอดขาย; รายได้จากการขาย"
    }
  },
  {
    "japanese": "売り切れ",
    "translations": {
      "english": "sold out",
      "chinese": "售罄; 卖完了",
      "korean": "매진; 품절",
      "vietnamese": "bán hết; hết hàng",
      "thai": "ขายหมดแล้ว"
    }
  },
  {
    "japanese": "売り切れる",
    "translations": {
      "english": "to be sold out",
      "chinese": "售罄; 卖完",
      "korean": "매진되다; 다 팔리다",
      "vietnamese": "bán hết; hết hàng",
      "thai": "ขายหมด"
    }
  },
  {
    "japanese": "我が",
    "translations": {
      "english": "my; our; one's own",
      "chinese": "我的; 我们的; 自己的",
      "korean": "나의; 우리의; 자신의",
      "vietnamese": "của tôi; của chúng ta; của chính mình",
      "thai": "ของฉัน; ของเรา; ของตนเอง"
    }
  },
  {
    "japanese": "洋品店",
    "translations": {
      "english": "shop that handles Western-style apparel and accessories",
      "chinese": "西式服装店; 洋货店",
      "korean": "양품점 (서양식 의류 및 액세서리 가게)",
      "vietnamese": "cửa hàng quần áo và phụ kiện kiểu Tây",
      "thai": "ร้านขายเสื้อผ้าและเครื่องประดับสไตล์ตะวันตก"
    }
  },
  {
    "japanese": "輸血",
    "translations": {
      "english": "blood transfusion",
      "chinese": "输血",
      "korean": "수혈",
      "vietnamese": "truyền máu",
      "thai": "การให้เลือด; การถ่ายเลือด"
    }
  },
  {
    "japanese": "輸送",
    "translations": {
      "english": "transport; transportation",
      "chinese": "运输; 输送",
      "korean": "수송; 운송",
      "vietnamese": "vận chuyển; chuyên chở",
      "thai": "การขนส่ง"
    }
  },
  {
    "japanese": "材木",
    "translations": {
      "english": "lumber; timber",
      "chinese": "木材; 木料",
      "korean": "재목; 목재",
      "vietnamese": "gỗ xây dựng; gỗ",
      "thai": "ไม้แปรรูป; ไม้ซุง"
    }
  }
];

const uniqueVocabulary = Array.from(new Map(vocabulary.map(item => [item.japanese, item])).values()).map((item, index) => ({
  ...item,
}));

export default uniqueVocabulary; 
