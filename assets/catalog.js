/* Juli's Flowers catalog — imported from the shop's Wolt menu (Oct 2026), sorted into the site's 5 main categories.
   img: assets/products/p{n}.webp. variants: same product in several versions → card shows "החל מ-". */
const CATS=[
  {id:'flowers',name:'פרחים',subs:['זרים','באנצ’ים','סידורי שולחן']},
  {id:'plants',name:'צמחים וכלים',subs:['עציצים','כלים ואגרטלים','תערובות אדמה']},
  {id:'gifts',name:'מתנות',subs:['מארזי שי','דובים ובלונים','כרטיסי ברכה']},
  {id:'wine',name:'יין & מתוקים',subs:['יין','שוקולד ומתוקים']},
  {id:'events',name:'אירועים',subs:['זרים לראש']}
];
const I=n=>`assets/products/p${n}.webp`;
const P=[
  /* פרחים · זרים */
  {id:'w4',cat:'flowers',sub:'זרים',name:'זר ורדים אדומים',price:250,desc:'10 ורדים אדומים, גיבסנית וענפי אקליפטוס',img:I(4)},
  {id:'w20',cat:'flowers',sub:'זרים',name:'זר לבן קלאסי',price:229,desc:'שושן צחור, אלסטרומריה, ליזיאנטוס וגיבסנית',img:I(20)},
  {id:'w40',cat:'flowers',sub:'זרים',name:'זר לבן ירוק',price:229,desc:'שושן צחור, חרצית, ליזיאנטוס, גיבסנית והמון ירוק',img:I(40)},
  {id:'w18',cat:'flowers',sub:'זרים',name:'זר קשת בענן',price:150,desc:'10 ענפי גיבסנית צבעונית בעטיפת נייר חום',img:I(18)},
  /* פרחים · באנצ’ים */
  {id:'w6',cat:'flowers',sub:'באנצ’ים',name:'באנץ’ גיבסנית לבנה',price:50,desc:'5 ענפים, עטוף בנייר חום',img:I(6)},
  {id:'w23',cat:'flowers',sub:'באנצ’ים',name:'באנץ’ גיבסנית צבעונית',price:60,desc:'5 ענפים צבועים, עטוף בנייר חום',img:I(23)},
  {id:'w13',cat:'flowers',sub:'באנצ’ים',name:'באנץ’ שושן צחור',price:55,desc:'3 ענפים רב פעמוניים, מגיע סגור',img:I(13)},
  {id:'w27',cat:'flowers',sub:'באנצ’ים',name:'באנץ’ ליליות',price:55,desc:'3 ענפים בצהוב או ורוד, מגיע סגור',img:I(27)},
  /* פרחים · סידורי שולחן */
  {id:'w3',cat:'flowers',sub:'סידורי שולחן',name:'סידור גיבסנית צבועה',price:150,desc:'מיקס צבעים בקופסת קרטון עם סרט חגיגי',img:I(3)},
  {id:'w9',cat:'flowers',sub:'סידורי שולחן',name:'קוקטייל סוקולנטים',price:200,desc:'שני סוקולנטים בכלי בטון מעוצב',img:I(9)},
  /* צמחים וכלים · עציצים */
  {id:'w7',cat:'plants',sub:'עציצים',name:'סחלב כפול',price:250,desc:'שני ענפים, פרחי ג’מבו לבנים',img:I(7)},
  {id:'w21',cat:'plants',sub:'עציצים',name:'סחלב בודד',price:180,desc:'ענף אחד, פרחי ג’מבו',img:I(21)},
  {id:'w1',cat:'plants',sub:'עציצים',name:'אנטוריום גדול',price:200,desc:'פרח אדום, עציץ 20',img:I(1)},
  {id:'w5',cat:'plants',sub:'עציצים',name:'אנטוריום בינוני',price:150,desc:'פרח אדום, עציץ 15',img:I(5)},
  {id:'w43',cat:'plants',sub:'עציצים',name:'גוזמניה בינונית',price:145,desc:'עציץ 15',img:I(43)},
  {id:'w17',cat:'plants',sub:'עציצים',name:'עץ הכסף',price:120,desc:'בכלי קרמי',img:I(17)},
  {id:'w37',cat:'plants',sub:'עציצים',name:'עץ האהבה',price:350,desc:'בכלי חרס, גובה כ-50 ס״מ',img:I(37)},
  {id:'w33',cat:'plants',sub:'עציצים',name:'קוקטייל אואזיס',price:350,desc:'קקטוסים וסוקולנטים בכלי חרס, 30 ס״מ',img:I(33)},
  {id:'w39',cat:'plants',sub:'עציצים',name:'סט סוקולנטים',price:100,desc:'3 סוקולנטים בכלי בטון, כולל תחתית',img:I(39)},
  /* צמחים וכלים · כלים ואגרטלים */
  {id:'w25',cat:'plants',sub:'כלים ואגרטלים',name:'אגרטל קרמיקה שחור',price:189,desc:'אגרטל מעוצב',img:I(25)},
  {id:'w32',cat:'plants',sub:'כלים ואגרטלים',name:'אגרטל ויקטוריה',price:120,desc:'זכוכית מעוצבת',img:I(32)},
  {id:'wPot',cat:'plants',sub:'כלים ואגרטלים',name:'כלי קרמי לעציץ',desc:'שלושה גדלים',img:I(2),
    variants:[{name:'12 ס״מ',price:89,img:I(41)},{name:'15 ס״מ',price:129,img:I(10)},{name:'17 ס״מ',price:159,img:I(2)}]},
  /* צמחים וכלים · תערובות אדמה */
  {id:'wSoil',cat:'plants',sub:'תערובות אדמה',name:'תערובת אדמה',desc:'שק 10 או 30 ליטר',img:I(30),
    variants:[{name:'10 ליטר',price:30,img:I(31)},{name:'30 ליטר',price:60,img:I(30)}]},
  /* מתנות · מארזי שי */
  {id:'w35',cat:'gifts',sub:'מארזי שי',name:'מארז חלומות',price:250,desc:'זר ורדים, שוקולד ודובי',img:I(35)},
  {id:'w28',cat:'gifts',sub:'מארזי שי',name:'מארז יוקרתי',price:375,desc:'יין אדום, דובי וקופסת לב עם שוקולד ונר',img:I(28),alcohol:true},
  {id:'w8',cat:'gifts',sub:'מארזי שי',name:'רגע של שקט',price:200,desc:'יין לבן, שוקולדים ונר',img:I(8),alcohol:true},
  {id:'w14',cat:'gifts',sub:'מארזי שי',name:'רגע של אהבה',price:120,desc:'ספל, דובון ושוקולדים',img:I(14)},
  /* מתנות · דובים ובלונים */
  {id:'w26',cat:'gifts',sub:'דובים ובלונים',name:'דובי מתוק',price:130,desc:'דובון 29 ס״מ',img:I(26)},
  {id:'w0',cat:'gifts',sub:'דובים ובלונים',name:'דובי קלאסי',price:220,desc:'דובי 40 ס״מ',img:I(0)},
  {id:'w22',cat:'gifts',sub:'דובים ובלונים',name:'דובי מפנק',price:450,desc:'דובי 60 ס״מ',img:I(22)},
  {id:'w46',cat:'gifts',sub:'דובים ובלונים',name:'בלון לב',price:35,desc:'18 אינץ’, אדום או ורוד',img:I(46)},
  {id:'w49',cat:'gifts',sub:'דובים ובלונים',name:'בלון מזל טוב',price:35,desc:'18 אינץ’',img:I(49)},
  {id:'w29',cat:'gifts',sub:'דובים ובלונים',name:'בלון ספרה',price:40,desc:'בלון הליום 34 אינץ’',img:I(29)},
  {id:'w12',cat:'gifts',sub:'דובים ובלונים',name:'קונוס פרח סבון',price:25,desc:'תוספת לכל זר או מארז',img:I(12)},
  /* מתנות · כרטיסי ברכה */
  {id:'w36',cat:'gifts',sub:'כרטיסי ברכה',name:'כרטיס ״באהבה״',price:5,desc:'דו צדדי 10/15, עם הברכה שלכם',img:I(36)},
  {id:'w19',cat:'gifts',sub:'כרטיסי ברכה',name:'כרטיס ״תודה״',price:5,desc:'דו צדדי 10/15, עם הברכה שלכם',img:I(19)},
  {id:'w16',cat:'gifts',sub:'כרטיסי ברכה',name:'כרטיס ״שבת שלום״',price:5,desc:'דו צדדי 10/15, עם הברכה שלכם',img:I(16)},
  {id:'w15',cat:'gifts',sub:'כרטיסי ברכה',name:'כרטיס ״חג שמח״',price:5,desc:'דו צדדי 10/10, עם הברכה שלכם',img:I(15)},
  /* יין & מתוקים */
  {id:'w38',cat:'wine',sub:'יין',name:'יין אדום בשקית מהודרת',price:90,desc:'יין ישראלי כשר',img:I(38),alcohol:true},
  {id:'w34',cat:'wine',sub:'יין',name:'יין לבן בשקית מהודרת',price:90,desc:'יין ישראלי כשר',img:I(34),alcohol:true},
  {id:'w11',cat:'wine',sub:'יין',name:'יין רוזה בשקית מהודרת',price:90,desc:'יין ישראלי כשר',img:I(11),alcohol:true},
  {id:'w42',cat:'wine',sub:'יין',name:'יין מבעבע בשקית מהודרת',price:100,desc:'יין ישראלי כשר',img:I(42),alcohol:true},
  {id:'w45',cat:'wine',sub:'שוקולד ומתוקים',name:'רגע מתוק',price:70,desc:'מיני מארז, 10 פרלינים',img:I(45)},
  {id:'w24',cat:'wine',sub:'שוקולד ומתוקים',name:'לבבות שוקולד',price:100,desc:'10 לבבות בעטיפה אדומה חגיגית',img:I(24)},
  /* אירועים */
  {id:'wCrown',cat:'events',sub:'זרים לראש',name:'זר לראש לכלת יום הולדת',desc:'גיבסנית, בשלוש גרסאות',img:I(48),
    variants:[{name:'גיבסנית לבנה',price:120,img:I(48)},{name:'גיבסנית לבנה וליזיאנטוס',price:150,img:I(47)},{name:'גיבסנית לבנה וצבעונית',price:150,img:I(44)}]}
];
P.forEach(p=>{if(p.variants)p.price=Math.min(...p.variants.map(v=>v.price))});
/* home page */
const BEST=['w4','w20','w40','w18','w7','w35','w9','wCrown'];
const ADDONS=['w36','w45','w38','w32','w26','w46'];
/* delivery: Wolt range ≈ 8 km around the shop (חיים לסקוב 2, נאות שמיר, רמלה) */
const SHOP={address:'חיים לסקוב 2, נאות שמיר, רמלה',radiusKm:8};
const ZONE=['רמלה','לוד','באר יעקב','נס ציונה','ראשון לציון','רחובות','כפר חב״ד','צריפין','יד רמב״ם','מצליח','גני הדר','ניר צבי','ישרש'];
/* reviews: paste real reviews here (from Google / Wolt) — the section renders whatever is in this list */
const GOOGLE={rating:'5.0',url:'https://maps.google.com/?cid=5833729602735661632'};
const REVIEWS=[
  /* real Google reviews (Oct 2026) */
  {name:'אודל ע.', text:'מקום מהמם, שירות נדיב ופרחים עמידים מיוחדים ויפים', source:'Google', stars:5},
  {name:'קורל ד.', text:'שירות נדיר ומוצרים נדירים!! ממליצה בחום!!', source:'Google', stars:5},
  {name:'זוהר א.', text:'שירות מעולה וסחורה הכי יפה וטרייה שיש!!', source:'Google', stars:5}
];
