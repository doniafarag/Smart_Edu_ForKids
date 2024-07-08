// const englishLetters = [
//     {letter: 'A', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444119/letters/a_xfxulq.jpg', number: 1},
//     {letter: 'B', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444119/letters/b_c8mh55.jpg', number: 2},
//     {letter: 'C', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444118/letters/c_javuva.jpg', number: 3},
//     {letter: 'D', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444117/letters/d_droy0s.jpg', number: 4},
//     {letter: 'E', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444117/letters/e_sibdpi.jpg', number: 5},
//     {letter: 'F', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444116/letters/f_bgbrra.jpg', number: 6},
//     {letter: 'G', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444121/letters/g_mb2sag.jpg', number: 7},
//     {letter: 'H', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444115/letters/h_kgs4pe.jpg', number: 8},
//     {letter: 'I', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444115/letters/i_w6zm5e.jpg', number: 9},
//     {letter: 'J', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444114/letters/j_q8fmvw.jpg', number: 10},
//     {letter: 'K', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444114/letters/k_nopwkg.jpg', number: 11},
//     {letter: 'L', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444117/letters/l_i6q0kj.jpg', number: 12},
//     {letter: 'M', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444114/letters/m_hyeyyw.jpg', number: 13},
//     {letter: 'N', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444113/letters/n_fuck4b.jpg', number: 14},
//     {letter: 'O', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444113/letters/o_hdjwwn.jpg', number: 15},
//     {letter: 'P', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444105/letters/p_tyu2ql.jpg', number: 16},
//     {letter: 'Q', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444104/letters/q_ld49fh.jpg', number: 17},
//     {letter: 'R', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444108/letters/r_cf90nw.jpg', number: 18},
//     {letter: 'S', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444110/letters/s_xnqgyd.jpg', number: 19},
//     {letter: 'T', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444116/letters/t_n2khhl.jpg', number: 20},
//     {letter: 'U', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444106/letters/u_kholyx.jpg', number: 21},
//     {letter: 'V', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444106/letters/v_gzsbyp.jpg', number: 22},
//     {letter: 'W', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444107/letters/w_uuserm.jpg', number: 23},
//     {letter: 'X', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444104/letters/x_uzygcy.jpg', number: 24},
//     {letter: 'Y', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444104/letters/y_rqj2tf.jpg', number: 25},
//     {letter: 'Z', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720444105/letters/z_tzbftd.jpg', number: 26},
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
//     {letter: 'ظ', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437798/letters/%D8%B8jpg_mxdekc.jpg', number: 17}, // Zah - ظرف
//     {letter: 'ع', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437793/letters/%D8%B9_dkqiar.jpg', number: 18}, // Ain - عسل
//     {letter: 'غ', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437793/letters/%D8%BA_atwa85.jpg', number: 19}, // Ghain - غزال
//     {letter: 'ف', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437788/letters/%D9%81_um2ajl.jpg', number: 20}, // Fa - فراولة
//     {letter: 'ق', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437792/letters/%D9%82_diojc7.jpg', number: 21}, // Qaf - قلم
//     {letter: 'ك', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437788/letters/%D9%83_sd4j7l.jpg', number: 22}, // Kaf - كتاب
//     {letter: 'ل', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437785/letters/%D9%84_cqm6ww.jpg', number: 23}, // Lam - ليمون
//     {letter: 'م', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437788/letters/%D9%85jpg_bncuq0.jpg', number: 24}, // Meem - ماء
//     {letter: 'ن', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437789/letters/%D9%86_jc9ajk.jpg', number: 25}, // Noon - نحلة
//     {letter: 'ه', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437793/letters/%D9%87_iubvle.jpg', number: 26}, // Ha - هرم
//     {letter: 'و', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437797/letters/%D9%8A_rddrde.jpg', number: 27}, // Waw - ورد
//     {letter: 'ي', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720437797/letters/%D9%8A_rddrde.jpg', number: 28}, // Ya - يد
//   ];

  
//   const mathsLetters = [
//     {letter: '1', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445319/letters/1_jp5zh3.jpg', number: 1}, 
//     {letter: '2', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445319/letters/2_dw6uit.jpg', number: 2}, // Ba - باب
//     {letter: '3', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445331/letters/3jpg_t9zriy.jpg', number: 3}, // Ta - تمر
//     {letter: '4', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445326/letters/4_un6ykx.jpg', number: 4}, // Tha - ثوم
//     {letter: '5', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445596/letters/5_hrhej0.jpg', number: 5}, // Jeem - جمل
//     {letter: '6', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445374/letters/6_dpgnj8.jpg', number: 6}, // Haa - حليب
//     {letter: '7', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445354/letters/7_x0zlha.jpg', number: 7}, // Khaa - خبز
//     {letter: '8', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445375/letters/8_valhuk.jpg', number: 8}, 
//     {letter: '9', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445356/letters/9_mscvni.jpg', number: 9}, // Thal - ذباب
//     {letter: '10', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445387/letters/10_eubrfl.jpg', number: 10}, // Ra - رمان
//     {letter: '11', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445400/letters/11_bm0cwu.jpg', number: 11}, // Zay - زيتون
//     {letter: '12', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445436/letters/12_o8q8eo.jpg', number: 12}, // Seen - سمكة
//     {letter: '13', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445385/letters/13_mcgwnh.jpg', number: 13}, // Sheen - شمس
//     {letter: '14', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445386/letters/14_i6jccj.jpg', number: 14}, // Sad - صقر
//     {letter: '15', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445398/letters/15_nnntma.jpg', number: 15}, // Dad - ضفدع
//     {letter: '16', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445422/letters/16_cwfkjj.jpg', number: 16}, // Ta - طائر
//     {letter: '17', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445420/letters/17_jdicfh.jpg', number: 17}, // Zah - ظرف
//     {letter: '18', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445416/letters/18_mwyx9d.jpg', number: 18}, // Ain - عسل
//     {letter: '19', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445427/letters/19_iu7db2.jpg', number: 19}, // Ghain - غزال
//     {letter: '20', image: 'https://res.cloudinary.com/deypvyqod/image/upload/v1720445434/letters/20_nzrsei.jpg', number: 20}, // Fa - فراولة
  
//   ];