const listeningQuestions = [
    {
      question: '1ばん',
      audio: 'n2q1.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '先週の会議の記録を作成する' },
        { id: 2, text: '調査結果を入力する' },
        { id: 3, text: '林さんに電話をする' },
        { id: 4, text: 'プレゼンのしりょうを作成する' },
      ],
      correctAnswer: 1,
    },
    {
      question: '2ばん',
      audio: 'n2q2.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '2000円' },
        { id: 2, text: '1000円' },
        { id: 3, text: '900円' },
        { id: 4, text: '100円' },
      ],
      correctAnswer: 2,
    },
    {
      question: '3ばん',
      audio: 'n2q3.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'ちゅうりんじょうで張り紙を見る' },
        { id: 2, text: '大学でしんせいしょのじゅんびをする' },
        { id: 3, text: '市役所にしんせいしょを取りに行く' },
        { id: 4, text: '市役所でがくせいしょうをコピーする' },
      ],
      correctAnswer: 2,
    },
    {
      question: '4ばん',
      audio: 'n2q4.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'インターネットで店をさがす' },
        { id: 2, text: '木村さんに道具を借りる' },
        { id: 3, text: 'アウトドア用品の店で道具を買う' },
        { id: 4, text: '初心者向けのこうざに参加する' },
      ],
      correctAnswer: 4,
    },
    {
      question: '5ばん',
      audio: 'n2q5.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '工場の かんりのじょうきょうを 調べる' },
        { id: 2, text: 'けいやくのうかに じょうきょうを聞く' },
        { id: 3, text: '運送会社にじょうきょうを聞く' },
        { id: 4, text: 'そうこの ほぞんじょうきょうを 調べる' },
      ],
      correctAnswer: 3,
    },
    {
      question: '1ばん',
      audio: 'n2q6.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '近所で起こった事件について調べるため' },
        { id: 2, text: 'さいがい時のひなん場所を知らせるため' },
        { id: 3, text: 'どこにだれが住んでいるのか知るため' },
        { id: 4, text: 'たんとうちいきの住民にあいさつするため' },
      ],
      correctAnswer: 3,
    },
    {
      question: '2ばん',
      audio: 'n2q7.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'きんちょうして落ち着きがなかったこと' },
        { id: 2, text: '話の進め方が適当でなかったこと' },
        { id: 3, text: '声が小さくて聞き取りにくかったこと' },
        { id: 4, text: '質問への対応がよくなかったこと' },
      ],
      correctAnswer: 2,
    },
    {
      question: '3ばん',
      audio: 'n2q8.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'スタッフの数がそろっていないから' },
        { id: 2, text: '店の工事が間に合わないから' },
        { id: 3, text: 'メニューが決まっていないから' },
        { id: 4, text: '注文した食器がとどいていないから' },
      ],
      correctAnswer: 1,
    },
    {
      question: '4ばん',
      audio: 'n2q9.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '考え事をするため' },
        { id: 2, text: '頭の中を整理するため' },
        { id: 3, text: 'のうを休めるため' },
        { id: 4, text: '体をリラックスさせるため' },
      ],
      correctAnswer: 2,
    },
    {
      question: '5ばん',
      audio: 'n2q10.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'すぐに社会に役立つ研究が少ないこと' },
        { id: 2, text: '産業界の協力が得られなくなること' },
        { id: 3, text: '実用化までに時間がかかりすぎること' },
        { id: 4, text: 'きそ研究がじゅうしされなくなること' },
      ],
      correctAnswer: 4,
    },
    {
      question: '6ばん',
      audio: 'n2q11.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '電気をつけておく時間が設定できる' },
        { id: 2, text: '動くものに反応して電気がつく' },
        { id: 3, text: '電気の明るさが細かくちょうせつできる' },
        { id: 4, text: '外の明るさに応じて電気の明るさが変わる' },
      ],
      correctAnswer: 1,
    },
    {
      question: '1ばん',
      audio: 'n2q12.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 2,
    },
    {
      question: '2ばん',
      audio: 'n2q13.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 1,
    },
    {
      question: '3ばん',
      audio: 'n2q14.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '4ばん',
      audio: 'n2q15.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 1,
    },
    {
      question: '5ばん',
      audio: 'n2q16.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 2,
    },
    {
      question: '1ばん',
      audio: 'n2q17.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '2ばん',
      audio: 'n2q18.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '3ばん',
      audio: 'n2q19.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '4ばん',
      audio: 'n2q20.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '5ばん',
      audio: 'n2q21.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '6ばん',
      audio: 'n2q22.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '7ばん',
      audio: 'n2q23.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '8ばん',
      audio: 'n2q24.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '9ばん',
      audio: 'n2q25.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '10ばん',
      audio: 'n2q26.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '11ばん',
      audio: 'n2q27.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '12ばん',
      audio: 'n2q28.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '1ばん',
      audio: 'n2q29.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '2ばん',
      audio: 'n2q30.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 1,
    },
    {
      question: '質問１',
      audio: 'n2q31.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '北中通り' },
        { id: 2, text: '大川通り' },
        { id: 3, text: '上田通り' },
        { id: 4, text: '山下通り' },
      ],
      correctAnswer: 3,
    },
    {
      question: '質問2',
      audio: 'n2q31.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '北中通り' },
        { id: 2, text: '大川通り' },
        { id: 3, text: '上田通り' },
        { id: 4, text: '山下通り' },
      ],
      correctAnswer: 1,
    },
];
  
export default listeningQuestions;