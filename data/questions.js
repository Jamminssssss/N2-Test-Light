const questions = [
    {
      question: '__のことばの読み方として最もよいものを、一つえらびなさい。\n\n先生に貴重な資料を見せていただいた。',
      underlineWords: ['貴重'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: 'きじゅう' },
        { id: 2, text: 'きちょう' },
        { id: 3, text: 'きっじゅう' },
        { id: 4, text: 'きっちょう' },
      ],
      correctAnswer: 2,
    },
    {
      question: 'その話を聞いて、とても怪しいと思った。',
      underlineWords: ['怪しい'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: 'むなしい' },
        { id: 2, text: 'くやしい' },
        { id: 3, text: 'おかしい' },
        { id: 4, text: 'あやしい' },
      ],
      correctAnswer: 4,
    },
    {
      question: '佐藤さんは容姿も性格もいい。',
      underlineWords: ['容姿'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: 'よし' },
        { id: 2, text: 'ようし' },
        { id: 3, text: 'ようす' },
        { id: 4, text: 'よす' },
      ],
      correctAnswer: 2,
    },
    {
      question: 'これは危険を伴う実験だ。',
      underlineWords: ['伴う'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: 'はらう' },
        { id: 2, text: 'あつかう' },
        { id: 3, text: 'ともなう' },
        { id: 4, text: 'すくう' },
      ],
      correctAnswer: 3,
    },
    {
      question: '以前は、海外で暮らしたいという願望が強かった。',
      underlineWords: ['願望'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: 'がんぼう' },
        { id: 2, text: 'げんぼう' },
        { id: 3, text: 'がんぼ' },
        { id: 4, text: 'げんぼ' },
      ],
      correctAnswer: 1,
    },
    {
      question: '以前は、海外で暮らしたいという願望が強かった。',
      underlineWords: ['願望'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: 'がんぼう' },
        { id: 2, text: 'げんぼう' },
        { id: 3, text: 'がんぼ' },
        { id: 4, text: 'げんぼ' },
      ],
      correctAnswer: 1,
    },
    {
      question: '__の言葉を漢字で書くとき、最もよいものを一つ選びなさい。\n\n友人を家にまねいた。',
      underlineWords: ['まねいた'], // 밑줄을 긋고 싶은 단어
      options: [
        { id: 1, text: '伯いた' },
        { id: 2, text: '招いた' },
        { id: 3, text: '泊いた' },
        { id: 4, text: '召いた' },
      ],
      correctAnswer: 2,
    },
    {
      "question": "この商品は安全性がほしょうされている。",
      "underlineWords": ["ほしょう"],
      "options": [
        { "id": 1, "text": "補証" },
        { "id": 2, "text": "保正" },
        { "id": 3, "text": "保証" },
        { "id": 4, "text": "補正" }
      ],
      "correctAnswer": 3
    },
    {
      "question": "この企業では、さまざまなもよおしを行っている。",
      "underlineWords": ["もよおし"],
      "options": [
        { "id": 1, "text": "携し" },
        { "id": 2, "text": "催し" },
        { "id": 3, "text": "推し" },
        { "id": 4, "text": "権し" }
      ],
      "correctAnswer": 2
    },
    {
      "question": "銀行に行って、お札をこうかに替えた。",
      "underlineWords": ["こうか"],
      "options": [
        { "id": 1, "text": "硬貨" },
        { "id": 2, "text": "固貨" },
        { "id": 3, "text": "硬価" },
        { "id": 4, "text": "固価" }
      ],
      "correctAnswer": 1
    },
    {
      "question": "わが社の商品はここでせいぞうされている。",
      "underlineWords": ["せいぞう"],
      "options": [
        { "id": 1, "text": "製増" },
        { "id": 2, "text": "制増" },
        { "id": 3, "text": "製造" },
        { "id": 4, "text": "製造" }
      ],
      "correctAnswer": 4
    },
     {
    "question": "男女の結婚（ ）の違いについて調べた。",
    "options": [
      { "id": 1, "text": "観" },
      { "id": 2, "text": "識" },
      { "id": 3, "text": "念" },
      { "id": 4, "text": "察" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "ここでは（ ）水準の医療が受けられる。",
    "options": [
      { "id": 1, "text": "頂" },
      { "id": 2, "text": "上" },
      { "id": 3, "text": "高" },
      { "id": 4, "text": "特" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "今日は大学の講義で日本（ ）の経営について学んだ。",
    "options": [
      { "id": 1, "text": "状" },
      { "id": 2, "text": "類" },
      { "id": 3, "text": "式" },
      { "id": 4, "text": "則" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "開封しても、（ ）使用の物は返品可能です。",
    "options": [
      { "id": 1, "text": "外" },
      { "id": 2, "text": "否" },
      { "id": 3, "text": "前" },
      { "id": 4, "text": "未" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "受験生なので、勉強（ ）の毎日だ。",
    "options": [
      { "id": 1, "text": "漬け" },
      { "id": 2, "text": "浸し" },
      { "id": 3, "text": "溶け" },
      { "id": 4, "text": "満ち" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "この大学では一般向けの講座を開き、社会に学習の場を（ ）している。",
    "options": [
      { "id": 1, "text": "選出" },
      { "id": 2, "text": "提供" },
      { "id": 3, "text": "指示" },
      { "id": 4, "text": "寄付" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "今年の夏は暑さが厳しく、仕事から家に帰ると疲れて（ ）してしまう。",
    "options": [
      { "id": 1, "text": "ぐったり" },
      { "id": 2, "text": "しっかり" },
      { "id": 3, "text": "すっきり" },
      { "id": 4, "text": "ぎっしり" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "学生時代の友人が私の名前を忘れていたので、とても（ ）だった。",
    "options": [
      { "id": 1, "text": "アウト" },
      { "id": 2, "text": "ダウン" },
      { "id": 3, "text": "ショック" },
      { "id": 4, "text": "エラー" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "通路に荷物を置いたら、通る人の（ ）になりますよ。",
    "options": [
      { "id": 1, "text": "面倒" },
      { "id": 2, "text": "邪魔" },
      { "id": 3, "text": "被害" },
      { "id": 4, "text": "無理" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "少し長めの上り坂だったが（ ）ので、それほど疲れなかった。",
    "options": [
      { "id": 1, "text": "おとなしかった" },
      { "id": 2, "text": "ささやかだった" },
      { "id": 3, "text": "なだらかだった" },
      { "id": 4, "text": "よわよわしかった" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "出席者は皆会議に積極的に参加し、意見を（ ）交換し合った。",
    "options": [
      { "id": 1, "text": "活発に" },
      { "id": 2, "text": "円満に" },
      { "id": 3, "text": "機敏に" },
      { "id": 4, "text": "濃厚に" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "列に並んでいたら、私の前に強引に（ ）きた人がいて、嫌な気分になった。",
    "options": [
      { "id": 1, "text": "当てはまって" },
      { "id": 2, "text": "付け加えて" },
      { "id": 3, "text": "行き着いて" },
      { "id": 4, "text": "割り込んで" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "__の言葉に意味が最も近いものを、一つ選びなさい。\n\n高橋さんはとても愉快な人だ。",
    "underlineWords": ["愉快"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "面白い" },
      { "id": 2, "text": "おしゃれな" },
      { "id": 3, "text": "親切な" },
      { "id": 4, "text": "かわいい" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "それは確かにやむをえないことだと思う。",
    "underlineWords": ["やむをえない"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "もったいない" },
      { "id": 2, "text": "なさけない" },
      { "id": 3, "text": "つまらない" },
      { "id": 4, "text": "しかたない" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "少し息抜きしたほうがいいよ。",
    "underlineWords": ["息抜きした"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "待った" },
      { "id": 2, "text": "延長いだ" },
      { "id": 3, "text": "休んだ" },
      { "id": 4, "text": "働いた" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "今日はとてもついていた。",
    "underlineWords": ["もついていた"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "気分が悪かった" },
      { "id": 2, "text": "運が悪かった" },
      { "id": 3, "text": "気分がよかった" },
      { "id": 4, "text": "運がよかった" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "私はつねに言葉遣いに気をつけている。",
    "underlineWords": ["つねに"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "当然" },
      { "id": 2, "text": "いつも" },
      { "id": 3, "text": "特に" },
      { "id": 4, "text": "できるだけ" }
    ],
    "correctAnswer": 2
  },
  {
    question: '次の言葉の使い方として最もよいものを、一つ選びなさい。\n\n延長',
    options: [
      { id: 1, text: "悪天候で列車が運転をやめたため、旅行の出発が三日後に延長された。",highlightWords: ["延長"] },
      { id: 2, text: "初めの設計では２階建てだったが、３階建ての家に延長することにした。",highlightWords: ["延長"] },
      { id: 3, text: "予定の時間内に結論が出ず、会議が１時間延長されることになった。",highlightWords: ["延長"]},
      { id: 4, text: "電車の中で居眠りをして、降りる駅を一駅延長してしまった。",highlightWords: ["延長"] },
    ],
    correctAnswer: 3,
  },
  {
    "question": "次の言葉の使い方として最もよいものを、一つ選びなさい。\n\nさびる",
    "options": [
      { "id": 1, "text": "暑いところに生ものをずっと置いておいたら、さびて臭くなった。", "highlightWords": ["さびて"] },
      { "id": 2, "text": "昨夜は雨が相当降ったらしく、普段はきれいな川の水がさびて濁っている。", "highlightWords": ["さびて"] },
      { "id": 3, "text": "鉢に植えた植物に水をやるのを忘れていたら、花がさびてしまった。", "highlightWords": ["さびて"] },
      { "id": 4, "text": "この鉄の棒はずっと家の外に置いてあったので、さびて茶色くなっている。", "highlightWords": ["さびて"] }
    ],
    "correctAnswer": 4
  },
  {
    "question": "次の言葉の使い方として最もよいものを、一つ選びなさい。\n\n目上",
    "options": [
      { "id": 1, "text": "勉強会に参加した社員がすべて目上だったので、新人の私はとても緊張した。", "highlightWords": ["目上"] },
      { "id": 2, "text": "この店で一番値段が高く目上の商品は、店の奥にある棚に並べられていた。", "highlightWords": ["目上"] },
      { "id": 3, "text": "高校時代、鈴木さんはとても優秀で、成績はいつも学年で目上だった。", "highlightWords": ["目上"] },
      { "id": 4, "text": "あの若さで金賞を受賞した伊藤さんは、本当に目上の人だと思う。", "highlightWords": ["目上"] }
    ],
    "correctAnswer": 1
  },
  {
    "question": "次の言葉の使い方として最もよいものを、一つ選びなさい。\n\n大げさ",
    "options": [
      { "id": 1, "text": "息子の誕生日に料理を作りすぎてしまい、大げさに余ってしまった。", "highlightWords": ["大げさ"] },
      { "id": 2, "text": "天気予報によると、明日は今日より大げさに気温が下がるらしい。", "highlightWords": ["大げさ"] },
      { "id": 3, "text": "努力した結果、試験の成績が大げさに伸びて、先生に褒められた。", "highlightWords": ["大げさ"] },
      { "id": 4, "text": "あの人は小さなことを大げさに言うので、そのまま信じないほうがいい。", "highlightWords": ["大げさ"] }
    ],
    "correctAnswer": 4
  },
  {
    "question": "次の言葉の使い方として最もよいものを、一つ選びなさい。\n\n反省",
    "options": [
      { "id": 1, "text": "発表の原稿を全部覚えたのに、緊張のせいでどんなに反省しても全く思い出せない。", "highlightWords": ["反省"] },
      { "id": 2, "text": "今回の企画では、私の準備不足で周りに迷惑をかけたことをとても反省しています。", "highlightWords": ["反省"] },
      { "id": 3, "text": "祖父はいつも若いころの思い出を懐かしそうに反省して私に話してくれる。", "highlightWords": ["反省"] },
      { "id": 4, "text": "この機械の使い方を忘れないように、もう一度最初から反省しておきましょう。", "highlightWords": ["反省"] }
    ],
    "correctAnswer": 2
  },
  {
    "question": "卒業論文がなかなか書けなくて、一時は（ ）かけたが、何とか今日無事に提出することができた。",
    "options": [
      { "id": 1, "text": "あきらめ" },
      { "id": 2, "text": "あきらめて" },
      { "id": 3, "text": "あきらめる" },
      { "id": 4, "text": "あきらめた" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "子どものころ、母（ ）作ったハンバーグが大好きで、よく作ってもらった。",
    "options": [
      { "id": 1, "text": "の" },
      { "id": 2, "text": "との" },
      { "id": 3, "text": "によって" },
      { "id": 4, "text": "にとって" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "多様な情報があふれる現代社会（ ） 、大切なのは、膨大な情報の中から、自分に必要な情報を選ぶ力である。",
    "options": [
      { "id": 1, "text": "に加えて" },
      { "id": 2, "text": "において" },
      { "id": 3, "text": "を基にして" },
      { "id": 4, "text": "を込めて" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "作文が得意な友達に「どうやったらうまくなれるの？」と聞いたら、「たくさん書けば（ ）うまくなるよ。」と言われた。",
    "options": [
      { "id": 1, "text": "必ずしも" },
      { "id": 2, "text": "たとえ" },
      { "id": 3, "text": "そのうち" },
      { "id": 4, "text": "さっき" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "看護師の仕事は夜勤もあって大変だが、自分でこの仕事を選んだ（ ） 、がんばって続けたいと思う。",
    "options": [
      { "id": 1, "text": "以上" },
      { "id": 2, "text": "とたん" },
      { "id": 3, "text": "あげくに" },
      { "id": 4, "text": "かのようで" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "（内線電話で）\n山田「はい、山田です。」\n木村「受付の木村ですが、Ｘ社の中川様が（ ）。」\n山田「わかりました。すぐ行きます。」",
    "options": [
      { "id": 1, "text": "伺いました" },
      { "id": 2, "text": "お目にかかりました" },
      { "id": 3, "text": "ございました" },
      { "id": 4, "text": "お越しになりました" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "人は一生のうちどのくらい寝ているのでしょうか。仮に一日８時間寝て、８０歳まで生きる（ ） 。すると、睡眠時間は約２３３,６００時間で、約２７年寝ている計算になります。",
    "options": [
      { "id": 1, "text": "となりました" },
      { "id": 2, "text": "とします" },
      { "id": 3, "text": "とされていました" },
      { "id": 4, "text": "と見られます" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "夢を語る（ ）誰でもできるが、実現させるのは簡単なことではない。",
    "options": [
      { "id": 1, "text": "だけでは" },
      { "id": 2, "text": "だけなら" },
      { "id": 3, "text": "ためしか" },
      { "id": 4, "text": "ためには" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "（説明書で）\nエアコンを掃除するときは、安全上、必ずコンセントを（ ）してください。",
    "options": [
      { "id": 1, "text": "抜いたことを" },
      { "id": 2, "text": "抜いたことが" },
      { "id": 3, "text": "抜いてからに" },
      { "id": 4, "text": "抜いてからは" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "私はスピーチが苦手なのに、今度友達の結婚パーティーでスピーチを（ ） 、困っている。",
    "options": [
      { "id": 1, "text": "しにくくて" },
      { "id": 2, "text": "してほしくて" },
      { "id": 3, "text": "させてみたくて" },
      { "id": 4, "text": "することになってしまって" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "せっかく、夕日がきれいなことで有名なＡ海岸に来たのに、急に雨が降り出した。どうも夕日は（ ）。",
    "options": [
      { "id": 1, "text": "見えてもしかたない" },
      { "id": 2, "text": "見られないことだった" },
      { "id": 3, "text": "見られそうにない" },
      { "id": 4, "text": "見えないことがあった" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "山川「中村くん、毎日ジョギング（ ）？」\n中村「うん、そうなんだよ。」\n山川「実は、ぼくもなんだよ。走るっていいよね。」",
    "options": [
      { "id": 1, "text": "しない" },
      { "id": 2, "text": "しててもいい" },
      { "id": 3, "text": "しちゃえば" },
      { "id": 4, "text": "してるんだって" }
    ],
    "correctAnswer": 4
  },
  {
    question: '次の文の★に入る最もよいものを、一つ選びなさい。\n\n結婚生活を送る __ __ ★ __,相手への思いやりの気持ちを持つことだと思う。',
    underlineWords: ['★'], // 밑줄을 긋고 싶은 단어
    options: [
      { id: 1, text: 'うえで' },
      { id: 2, text: 'といえば' },
      { id: 3, text: '大切か' },
      { id: 4, text: '何が' },
    ],
    correctAnswer: 3,
  },
  {
    "question": "就職したときに __ __ ★ __ とうとう壊れたので、買い換 えることにした。",
    "underlineWords": ["★"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "ずっと" },
      { "id": 2, "text": "買って以来" },
      { "id": 3, "text": "かばんが" },
      { "id": 4, "text": "使っていた" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "登山には不思議な魅力がある。登っているときはこんなに__ __ ★ __ なぜかまた登りたくなる。",
    "underlineWords": ["★"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "思うのに" },
      { "id": 2, "text": "二度としたくないと" },
      { "id": 3, "text": "苦しいことは" },
      { "id": 4, "text": "山を下りて何日かすると" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "彫刻家川村たけるが作る動物の彫刻作品は、形はシンプル__ __ __ ★ 生命力にあふれている。",
    "underlineWords": ["★"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "動き出し" },
      { "id": 2, "text": "そうな" },
      { "id": 3, "text": "ながら" },
      { "id": 4, "text": "今にも" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "ビジネスで成功できる人とできない人との違いは、どんなに大変な状況でもあきらめずに __ __ __ ★ と思う。",
    "underlineWords": ["★"], // 밑줄을 긋고 싶은 단어
    "options": [
      { "id": 1, "text": "かどうか" },
      { "id": 2, "text": "取り組める" },
      { "id": 3, "text": "にある" },
      { "id": 4, "text": "最後まで" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "50",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "ご存じなわけだ" },
      { "id": 2, "text": "ご存じだろうか" },
      { "id": 3, "text": "ご存じのようだ" },
      { "id": 4, "text": "ご存じだからだろう" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "51",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "それに" },
      { "id": 2, "text": "しかし" },
      { "id": 3, "text": "または" },
      { "id": 4, "text": "それどころか" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "52",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "作成者が理解したのは" },
      { "id": 2, "text": "日本で考えられたのが" },
      { "id": 3, "text": "ここに生み出したのは" },
      { "id": 4, "text": "こうして生まれたのが" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "53",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "使用されている" },
      { "id": 2, "text": "使用した点だ" },
      { "id": 3, "text": "使用していける" },
      { "id": 4, "text": "使用したいものだ" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "54",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "結果として表れるかもしれない" },
      { "id": 2, "text": "結果のはずだった" },
      { "id": 3, "text": "結果に違いない" },
      { "id": 4, "text": "結果でなければならなかった" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "筆者の考えに合うのはどれか。",
    "image": require("../assets/readingimages/readingimage1.png"),
    "options": [
      { "id": 1, "text": "ルールのないスポーツにも価値がある。" },
      { "id": 2, "text": "ルールはスポーツで楽しむためのものだ。" },
      { "id": 3, "text": "スポーツはルールを理解してから始めるべきだ。" },
      { "id": 4, "text": "スポーツを通して、ルールの重要さが理解できる。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "この文書を書いた、一番の目的は何か。",
    "image": require("../assets/readingimages/readingimage2.png"),
    "options": [
      { "id": 1, "text": "暖房の使用を減らす工夫について意見を求める。" },
      { "id": 2, "text": "暖房を使用せず、服装で調整することを求める。" },
      { "id": 3, "text": "暖房を無駄に使用しないことを求める。" },
      { "id": 4, "text": "暖房の温度を変更しないことを求める。" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "筆者の考えに合うのはどれか。",
    "image": require("../assets/readingimages/readingimage3.png"),
    "options": [
      { "id": 1, "text": "「やりたいことをやる」には、大きな目標を立てることが大切だ。" },
      { "id": 2, "text": "「自分の望んでいること」を知れば、今何をすべきかがわかるようになる。" },
      { "id": 3, "text": "「自分のやっていること」が「自分の望んでいること」だと気づくことが大切だ。" },
      { "id": 4, "text": "「目の前のやりたいこと」を続ければ、それが「自分の望んでいること」になり得る。" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "このはがきで紹介されている割引サービスについて正しいものはどれか。",
    "image": require("../assets/readingimages/readingimage4.png"),
    "options": [
      { "id": 1, "text": "コーヒー豆を定期購入している人は、１０月中だけ「冬の味わい」を１０%割引で買うことができる。" },
      { "id": 2, "text": "コーヒー豆を定期購入している人が１ ０月中に「冬の味わい」を予約すれば、１５%割引で買うことができる。" },
      { "id": 3, "text": "「冬の味わい」を１ ０月中に予約すれば、その他の商品をすべて１５%割引で買うことができる。" },
      { "id": 4, "text": "「冬の味わい」を買った人は、１ ０月中だけその他の商品をすべて１０%割引で買うことができる。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "筆者によると、日記を書き続けるとどうなるか。",
    "image": require("../assets/readingimages/readingimage5.png"),
    "options": [
      { "id": 1, "text": "毎日を「いい一日」にしようとするようになる。" },
      { "id": 2, "text": "毎日が「いい一日」だと思えるようになる。" },
      { "id": 3, "text": "「いい一日」が訪れるのを楽しみにするようになる。" },
      { "id": 4, "text": "「いい一日」をいつまでも忘れないようになる。" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "日本人が使う「個性」という言葉について、筆者はどのように述べているか。",
    "image": require("../assets/readingimages/readingimage6.png"),
    "options": [
      { "id": 1, "text": "本来の意味とは違う使い方がされている。" },
      { "id": 2, "text": "意味がないと思っている人が多い。" },
      { "id": 3, "text": "主に若者に対して使われている。" },
      { "id": 4, "text": "人によって使い方がさまざまだ。" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "個性について、筆者の考えに合うものはどれか。",
    "image": require("../assets/readingimages/readingimage6.png"),
    "options": [
      { "id": 1, "text": "他人には理解できないものである。" },
      { "id": 2, "text": "人より目立つことで発揮できるものである。" },
      { "id": 3, "text": "人間なら誰でも持っているものである。" },
      { "id": 4, "text": "ファッションを通して主張できるものである。" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "筆者によると、本当の意味で「個性を磨く」とはどのようなことか。",
    "underlineWords": ["本当の意味で「個性を磨く」"], // 밑줄을 긋고 싶은 단어
    "image": require("../assets/readingimages/readingimage6.png"),
    "options": [
      { "id": 1, "text": "自分の心に従って、関心があることを追い求めること。" },
      { "id": 2, "text": "自分が好きかどうかより、個性的に見られるかどうかを優先すること。" },
      { "id": 3, "text": "周囲の意見を参考に、無理なく自分の世界を広げること。" },
      { "id": 4, "text": "どんな物事にも、楽しさや面白さを見つける努力をすること。" }
    ],
    "correctAnswer": 1
  },

  {
    "question": "筆者によると、「話し言葉」の重要な特徴とは何か。",
    "image": require("../assets/readingimages/readingimage7.png"),
    "options": [
      { "id": 1, "text": "話し手と聞き手が声を使って情報を共有するところ。" },
      { "id": 2, "text": "話し手と聞き手の関係が多様であるところ。" },
      { "id": 3, "text": "話し手が聞き手との親しさによって表現を使い分けるところ。" },
      { "id": 4, "text": "話し手が聞き手と場面を共有するところ。" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "誤解が生じてとあるが、どのような時に誤解が生じるのか。",
    "underlineWords": ["誤解が生じて"], // 밑줄을 긋고 싶은 단어
    "image": require("../assets/readingimages/readingimage7.png"),
    "options": [
      { "id": 1, "text": "読み手に必要な情報を十分に説明していない時。" },
      { "id": 2, "text": "読み手が理解していることを再び説明してしまった時。" },
      { "id": 3, "text": "自分のために書いたものを相手に送ってしまった時。" },
      { "id": 4, "text": "気を悪くした相手にきちんと謝らなかった時。" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "「書き言葉」について、筆者の考えに合うのはどれか。",
    "image": require("../assets/readingimages/readingimage7.png"),
    "options": [
      { "id": 1, "text": "相手がどのような情報を必要としているのかを調べることが大切だ。" },
      { "id": 2, "text": "何をどのように書けば相手が理解できるかを考えることが大切だ。" },
      { "id": 3, "text": "言い方や順序よりも文字と言葉の正確さを優先させたほうがいい。" },
      { "id": 4, "text": "読み書きの知識よりも書く内容を重視したほうがいい。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "筆者によると、これまでの旅はどのようなものだったか。",
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "高くても遠い場所でのんびり過ごせればよかった。" },
      { "id": 2, "text": "経験したことのないことができればよかった。" },
      { "id": 3, "text": "気に入った場所に繰り返し行ければよかった。" },
      { "id": 4, "text": "近くて安い場所に短期間行ければよかった。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "筆者によると、客は旅で何を重視するようになってきたか。",
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "一回の旅行でさまざまな場所へ行けるかどうか。" },
      { "id": 2, "text": "観光するだけで満足できるかどうか。" },
      { "id": 3, "text": "行ってしたいことができるかどうか。" },
      { "id": 4, "text": "新しい場所へ行けるかどうか。" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "筆者によると、旅行会社が難しいと感じている点は何か。",
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "個々のニーズに合った団体旅行を考え出すこと。" },
      { "id": 2, "text": "魅力を感じてもらえる場所を探し続けること。" },
      { "id": 3, "text": "旅行に行こうという気持ちにさせること。" },
      { "id": 4, "text": "価格を抑えた団体旅行を企画すること。" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "公立図書館が人気のある本を複数冊置くことについて、ＡとＢはどのように述べているか。",
    "image": require("../assets/readingimages/readingimage9.png"),
    "options": [
      { "id": 1, "text": "ＡもＢも、利用者の希望を重視しすぎていると述べている。" },
      { "id": 2, "text": "ＡもＢも、利用者へのサービス向上につながると述べている。" },
      { "id": 3, "text": "Ａは予算が足りなくなると述べ、Ｂは図書館の存在意義が失われると述べている。" },
      { "id": 4, "text": "Ａは利用者の満足度が高くなると述べ、Ｂは予算の使い方として適切でないと述べている。" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "公立図書館の役割について、ＡとＢはどのように述べているか。",
    "image": require("../assets/readingimages/readingimage9.png"),
    "options": [
      { "id": 1, "text": "ＡもＢも、利用者の教養を高めることだと述べている。" },
      { "id": 2, "text": "ＡもＢも、読書が好きな人を増やすことだと述べている。" },
      { "id": 3, "text": "Ａは利用者に読書に親しんでもらうことだと述べ、Ｂは貸し出す本の多様性を確保することだと述べている。" },
      { "id": 4, "text": "Ａは利用者が読書を楽しめる環境を作ることだと述べ、Ｂは書店よりも新しい本をそろえることだと述べている。" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "感動したことを現代に持ち帰ってくるとは、どのようなことか。",
    "underlineWords": ["感動したことを現代に持ち帰ってくる"], // 밑줄을 긋고 싶은 단어
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "感動したシーンを人に語る。" },
      { "id": 2, "text": "感動した記憶をデザインに生かす。" },
      { "id": 3, "text": "過去に流行したデザインをコピーする。" },
      { "id": 4, "text": "人が感動したことからデザインのヒントをもらう。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "感動について、筆者の考えに合うのはどれか。",
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "感動は周囲の力でしかつくられない。" },
      { "id": 2, "text": "感動したことは年を取るにつれて思い出せなくなる。" },
      { "id": 3, "text": "周囲の力でつくられた感動は記憶に残りやすい。" },
      { "id": 4, "text": "心の底から感動したことは鮮明な思い出となる。" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "アイディアについて、筆者はどのように考えているか。",
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "記憶力が強いほど、アイディアが生まれやすくなる。" },
      { "id": 2, "text": "他人の力を上手に利用することで、アイディアが商品につながる。" },
      { "id": 3, "text": "感動した思い出が豊富であるほど、多くのアイディアが生まれる。" },
      { "id": 4, "text": "感動をヒト・コト・モノに分けて考えると、いいアイディアが生まれる。" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "ユンさんは、来週ミハマホテルのビュッフェに行きたいと考えている。金曜か土曜の12時から17時の間で、2時間いられるものがいい。ユンさんの希望に合うビュッフェはどれか。",
    "image": require("../assets/readingimages/readingimage11.png"),
    "options": [
      { "id": 1, "text": "「ベルン」のランチビュッフェ" },
      { "id": 2, "text": "「ベルン」のデザートビュッフェ" },
      { "id": 3, "text": "「ベルン」の夕食ビュッフェ" },
      { "id": 4, "text": "「みよし」のランチビュッフェ" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "エンリケさんは、今度の土曜日に妻と一緒にレストラン「ベルン」の夕食ビュッフェに行き、「窓際特別テーブル」を利用したい。エンリケさんは63歳、妻は66歳である。エンリケさんたちの料金はどのようになるか。",
    "image": require("../assets/readingimages/readingimage11.png"),
    "options": [
      { "id": 1, "text": "エンリケさん6,000円、妻6,000円のみ" },
      { "id": 2, "text": "エンリケさん6,000円、妻6,000円、テーブル料金1,000円" },
      { "id": 3, "text": "エンリケさん6,000円、要5,500円、テーブル料金1,000円" },
      { "id": 4, "text": "エンリケさん5,500円、妻5,000円、テーブル料金1,000円" }
    ],
    "correctAnswer": 3
  },
  ];
  export default questions;
  
