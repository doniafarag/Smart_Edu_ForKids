// const englishLetters = [
//     {letter: 'A', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720400213/letters/%D8%AA%D9%81%D8%A7%D8%AD%D9%87_-_Copy_nnnlhj.jpg', number: 1},
//     {letter: 'B', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720400653/letters/banana_hdvkkt.jpg', number: 2},
//     {letter: 'C', image: 'cat.png', number: 3},
//     {letter: 'D', image: 'dog.png', number: 4},
//     {letter: 'E', image: 'elephant.png', number: 5},
//     {letter: 'F', image: 'fish.png', number: 6},
//     {letter: 'G', image: 'grape.png', number: 7},
//     {letter: 'H', image: 'hat.png', number: 8},
//     {letter: 'I', image: 'icecream.png', number: 9},
//     {letter: 'J', image: 'jelly.png', number: 10},
//     {letter: 'K', image: 'kite.png', number: 11},
//     {letter: 'L', image: 'lion.png', number: 12},
//     {letter: 'M', image: 'monkey.png', number: 13},
//     {letter: 'N', image: 'nest.png', number: 14},
//     {letter: 'O', image: 'orange.png', number: 15},
//     {letter: 'P', image: 'pencil.png', number: 16},
//     {letter: 'Q', image: 'queen.png', number: 17},
//     {letter: 'R', image: 'rabbit.png', number: 18},
//     {letter: 'S', image: 'sun.png', number: 19},
//     {letter: 'T', image: 'tiger.png', number: 20},
//     {letter: 'U', image: 'umbrella.png', number: 21},
//     {letter: 'V', image: 'violin.png', number: 22},
//     {letter: 'W', image: 'whale.png', number: 23},
//     {letter: 'X', image: 'xylophone.png', number: 24},
//     {letter: 'Y', image: 'yacht.png', number: 25},
//     {letter: 'Z', image: 'zebra.png', number: 26},
//   ];



//   const arabicLetters = [
//     {letter: 'ا', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437809/letters/%D8%A3_hbr5a8.jpg', number: 1}, // Alef - أسد
//     {letter: 'ب', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437811/letters/%D8%A8_l1jbxg.jpg', number: 2}, // Ba - باب
//     {letter: 'ت', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437808/letters/%D8%AA_xzms1b.jpg', number: 3}, // Ta - تمر
//     {letter: 'ث', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437810/letters/%D8%AB_byx584.jpg', number: 4}, // Tha - ثوم
//     {letter: 'ج', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437810/letters/%D8%AC_gnqzjw.jpg', number: 5}, // Jeem - جمل
//     {letter: 'ح', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437806/letters/%D8%AD_wpmdeq.jpg', number: 6}, // Haa - حليب
//     {letter: 'خ', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437807/letters/%D8%AE_xsmct4.jpg', number: 7}, // Khaa - خبز
//     {letter: 'د', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437806/letters/%D8%AF_ev9rpb.jpg', number: 8}, // Dal - دلفين
//     {letter: 'ذ', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437804/letters/%D8%B0_cdcek7.jpg', number: 9}, // Thal - ذباب
//     {letter: 'ر', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437802/letters/%D8%B1_ognqdp.jpg', number: 10}, // Ra - رمان
//     {letter: 'ز', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437804/letters/%D8%B2_yvoetg.jpg', number: 11}, // Zay - زيتون
//     {letter: 'س', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437806/letters/%D8%B3_tfehim.jpg', number: 12}, // Seen - سمكة
//     {letter: 'ش', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437805/letters/%D8%B4_csqxpa.jpg', number: 13}, // Sheen - شمس
//     {letter: 'ص', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437801/letters/%D8%B5_rpwjwj.jpg', number: 14}, // Sad - صقر
//     {letter: 'ض', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437797/letters/%D8%B6_umwm5g.jpg', number: 15}, // Dad - ضفدع
//     {letter: 'ط', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437797/letters/%D8%B7_g8sw6v.jpg', number: 16}, // Ta - طائر
//     {letter: 'ظ', image: 'zahir.png', number: 17}, // Zah - ظرف
//     {letter: 'ع', image: 'asal.png', number: 18}, // Ain - عسل
//     {letter: 'غ', image: 'ghurf.png', number: 19}, // Ghain - غزال
//     {letter: 'ف', image: 'far.png', number: 20}, // Fa - فراولة
//     {letter: 'ق', image: 'qalam.png', number: 21}, // Qaf - قلم
//     {letter: 'ك', image: 'kard.png', number: 22}, // Kaf - كتاب
//     {letter: 'ل', image: 'lemon.png', number: 23}, // Lam - ليمون
//     {letter: 'م', image: 'mif.png', number: 24}, // Meem - ماء
//     {letter: 'ن', image: 'neel.png', number: 25}, // Noon - نحلة
//     {letter: 'ه', image: 'hiram.png', number: 26}, // Ha - هرم
//     {letter: 'و', image: 'ward.png', number: 27}, // Waw - ورد
//     {letter: 'ي', image: 'yad.png', number: 28}, // Ya - يد
//   ];

  