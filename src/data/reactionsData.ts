import { VirtualReaction } from '../types';

export const VIRTUAL_REACTIONS: VirtualReaction[] = [
  {
    id: 'rx-fe-cuso4',
    title: 'Đinh sắt tác dụng dung dịch Đồng(II) sunfat',
    grade: 'KHTN 9',
    category: 'metal',
    reactants: ['Thanh sắt (Fe) sạch', 'Dung dịch Copper(II) sulfate (CuSO₄) màu xanh lam'],
    products: ['Dung dịch Iron(II) sulfate (FeSO₄) màu xanh lục nhạt', 'Đồng (Cu) kim loại màu đỏ'],
    equationMath: '\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}\\downarrow',
    description: 'Thí nghiệm chứng minh quy tắc kim loại hoạt động mạnh hơn đẩy kim loại yếu hơn ra khỏi muối.',
    phenomenon: 'Màu xanh lam của dung dịch CuSO₄ nhạt dần chuyển sang xanh lục nhạt của FeSO₄; đồng thời có lớp kim loại màu đỏ gạch (Cu) bám đều bên ngoài bề mặt đinh sắt.',
    animationType: 'metal_coating',
    solutionColorBefore: 'rgba(30, 144, 255, 0.85)', // Blue CuSO4
    solutionColorAfter: 'rgba(120, 200, 150, 0.85)', // Pale green FeSO4
    addedReagentColor: 'rgba(100, 116, 139, 1)', // Iron gray
    quiz: {
      question: 'Sau khi ngâm đinh sắt vào dung dịch CuSO₄ một thời gian, khối lượng đinh sắt sẽ như thế nào?',
      options: [
        'Khối lượng đinh sắt tăng lên (do 1 mol Fe (56g) tan ra thì có 1 mol Cu (64g) bám vào)',
        'Khối lượng đinh sắt giảm đi (do sắt bị ăn mòn)',
        'Khối lượng đinh sắt không đổi',
        'Khối lượng dung dịch tăng lên'
      ],
      correct: 0,
      explanation: 'Vì khối lượng mol của Cu (64) lớn hơn Fe (56), cứ 56g sắt tan ra sẽ có 64g đồng bám vào, làm khối lượng đinh sắt tăng ròng!'
    }
  },
  {
    id: 'rx-zn-hcl',
    title: 'Kẽm tác dụng Axit clohiđric (Điều chế khí Hydro)',
    grade: 'KHTN 8',
    category: 'gas',
    reactants: ['Viên kẽm (Zn) sáng bóng', 'Dung dịch Hydrochloric acid (HCl) không màu'],
    products: ['Dung dịch Zinc chloride (ZnCl₂) không màu', 'Khí Hydrogen (H₂) không màu'],
    equationMath: '\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2\\uparrow',
    description: 'Thí nghiệm điều chế khí Hydro kinh điển trong phòng thí nghiệm hóa học THCS.',
    phenomenon: 'Viên kẽm tan dần, trên bề mặt viên kẽm sủi rất nhiều bọt khí không màu thoát ra liên tục; sờ vào đáy ống nghiệm thấy ấm lên (phản ứng tỏa nhiệt).',
    animationType: 'bubbles_gas',
    solutionColorBefore: 'rgba(230, 245, 255, 0.5)', // Clear liquid
    solutionColorAfter: 'rgba(220, 240, 255, 0.6)',
    addedReagentColor: 'rgba(148, 163, 184, 1)', // Zinc metal
    quiz: {
      question: 'Làm thế nào để nhận biết dòng khí thoát ra từ ống nghiệm chính là khí Hydrogen (H₂)?',
      options: [
        'Đưa que đóm còn tàn đỏ vào thấy que đóm bùng cháy',
        'Thu khí vào ống nghiệm nhỏ rồi đốt ở miệng ngọn lửa thấy cháy với ngọn lửa xanh mờ và tiếng nổ "pốp"',
        'Dẫn khí qua nước vôi trong thấy nước vôi vẩn đục',
        'Khí có màu vàng lục mùi hắc'
      ],
      correct: 1,
      explanation: 'Khí Hydro cháy trong không khí với ngọn lửa màu xanh nhạt và tiếng nổ "pốp" đặc trưng khi trộn lẫn oxy.'
    }
  },
  {
    id: 'rx-bacl2-na2so4',
    title: 'Barium chloride tác dụng Sodium sulfate',
    grade: 'KHTN 8',
    category: 'precipitate',
    reactants: ['Dung dịch Barium chloride (BaCl₂) không màu', 'Dung dịch Sodium sulfate (Na₂SO₄) không màu'],
    products: ['Kết tủa trắng Barium sulfate (BaSO₄)', 'Dung dịch Sodium chloride (NaCl) không màu'],
    equationMath: '\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{NaCl}',
    description: 'Phản ứng trao đổi ion dùng để nhận biết gốc sunfat (-SO₄) bằng ion Ba²⁺.',
    phenomenon: 'Ngay khi nhỏ dung dịch Na₂SO₄ vào BaCl₂, lập tức xuất hiện vẩn đục màu trắng tinh dạng hạt mịn không tan, từ từ lắng xuống đáy ống nghiệm.',
    animationType: 'precipitate_white',
    solutionColorBefore: 'rgba(240, 248, 255, 0.5)',
    solutionColorAfter: 'rgba(255, 255, 255, 0.95)',
    addedReagentColor: 'rgba(224, 231, 255, 0.8)',
    quiz: {
      question: 'Kết tủa trắng BaSO₄ có tan trong axit mạnh như HCl hay HNO₃ không?',
      options: [
        'Có tan tạo bọt khí',
        'Có tan nhưng rất chậm',
        'Không tan trong nước và không tan trong cả axit mạnh',
        'Tan khi đun sôi'
      ],
      correct: 2,
      explanation: 'BaSO₄ là chất kết tủa cực kỳ bền vững, không tan trong cả axit HCl loãng lẫn đặc, nên là dấu hiệu đặc trưng để nhận biết gốc sunfat.'
    }
  },
  {
    id: 'rx-naoh-cuso4',
    title: 'Sodium hydroxide tác dụng Đồng(II) sunfat',
    grade: 'KHTN 8',
    category: 'precipitate',
    reactants: ['Dung dịch Copper(II) sulfate (CuSO₄) màu xanh lam', 'Dung dịch Sodium hydroxide (NaOH) không màu'],
    products: ['Kết tủa xanh lam Copper(II) hydroxide (Cu(OH)₂)', 'Dung dịch Sodium sulfate (Na₂SO₄) không màu'],
    equationMath: '2\\text{NaOH} + \\text{CuSO}_4 \\rightarrow \\text{Cu(OH)}_2\\downarrow + \\text{Na}_2\\text{SO}_4',
    description: 'Điều chế base không tan của đồng bằng phản ứng giữa dung dịch kiềm và muối đồng.',
    phenomenon: 'Xuất hiện kết tủa dạng keo đặc màu xanh lam đậm (xanh lơ) lơ lửng rồi lắng xuống, dung dịch bên trên nhạt màu dần.',
    animationType: 'precipitate_blue',
    solutionColorBefore: 'rgba(30, 144, 255, 0.65)',
    solutionColorAfter: 'rgba(14, 165, 233, 0.95)',
    addedReagentColor: 'rgba(241, 245, 249, 0.9)',
    quiz: {
      question: 'Khi lọc lấy kết tủa Cu(OH)₂ màu xanh rồi đem nung nóng trên ngọn lửa đèn cồn, hiện tượng gì sẽ xảy ra?',
      options: [
        'Kết tủa chuyển từ màu xanh lam sang chất rắn màu đen (CuO)',
        'Kết tủa bốc cháy thành ngọn lửa màu xanh lục',
        'Kết tủa tan chảy thành chất lỏng không màu',
        'Không có hiện tượng gì'
      ],
      correct: 0,
      explanation: 'Base không tan Cu(OH)₂ bị nhiệt phân hủy thành oxide bazơ CuO màu đen và nước: Cu(OH)₂ → CuO + H₂O.'
    }
  },
  {
    id: 'rx-neutralization-ph',
    title: 'Phản ứng trung hòa Acid - Base (Mất màu chỉ thị)',
    grade: 'KHTN 8',
    category: 'acid_base',
    reactants: ['Dung dịch NaOH có vài giọt Phenolphthalein (màu hồng cánh sen)', 'Dung dịch Axit HCl không màu'],
    products: ['Dung dịch muối ăn NaCl và Nước (H₂O) không màu'],
    equationMath: '\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}',
    description: 'Thí nghiệm trung hòa acid-base kết hợp chất chỉ thị pH phenolphthalein.',
    phenomenon: 'Khi nhỏ từ từ dung dịch acid HCl vào cốc NaOH có màu hồng cánh sen, lắc đều, đến khi vừa đủ acid thì màu hồng biến mất hoàn toàn, dung dịch trở nên trong suốt không màu.',
    animationType: 'color_clear',
    solutionColorBefore: 'rgba(244, 63, 94, 0.85)', // Vivid Pink
    solutionColorAfter: 'rgba(240, 249, 255, 0.4)', // Crystal clear
    addedReagentColor: 'rgba(248, 250, 252, 0.9)',
    quiz: {
      question: 'Tại sao khi nhỏ HCl đến dư thì dung dịch lại mất màu hồng?',
      options: [
        'Vì phenolphthalein chỉ có màu hồng trong môi trường kiềm (base), khi HCl trung hòa hết NaOH dung dịch chuyển sang trung tính hoặc acid nên không còn màu',
        'Vì axit HCl đã tẩy trắng phân tử thuốc nhuộm',
        'Vì nước sinh ra làm loãng hết màu sắc',
        'Vì tạo thành muối NaCl màu trắng xóa'
      ],
      correct: 0,
      explanation: 'Phenolphthalein đổi sang màu hồng khi pH > 8.3 (kiềm). Khi acid HCl phản ứng hết NaOH làm pH giảm về 7 hoặc thấp hơn, dung dịch lập tức trở về không màu.'
    }
  },
  {
    id: 'rx-mg-combustion',
    title: 'Đốt cháy dải Magie trong không khí',
    grade: 'KHTN 8',
    category: 'combustion',
    reactants: ['Dải kim loại Magnesium (Mg) màu trắng bạc', 'Khí Oxygen (O₂) trong không khí'],
    products: ['Bột màu trắng Magnesium oxide (MgO)'],
    equationMath: '2\\text{Mg} + \\text{O}_2 \\xrightarrow{t^\\circ} 2\\text{MgO}',
    description: 'Phản ứng oxi hóa kim loại mạnh tỏa nhiệt lượng lớn và bức xạ ánh sáng trắng chói lòa.',
    phenomenon: 'Dải magie bắt lửa cháy mãnh liệt với ngọn lửa màu trắng chói sáng lóa mắt, tỏa nhiều nhiệt, tạo thành tro bột màu trắng xốp.',
    animationType: 'flame_bright',
    solutionColorBefore: 'rgba(100, 116, 139, 0.4)',
    solutionColorAfter: 'rgba(255, 255, 255, 0.98)',
    addedReagentColor: 'rgba(251, 191, 36, 1)',
    requiresHeat: true,
    quiz: {
      question: 'Ứng dụng thực tế nổi tiếng của phản ứng đốt cháy bột Magie là gì?',
      options: [
        'Chế tạo đèn flash chụp ảnh thời xưa và pháo sáng cứu hộ ban đêm',
        'Làm pin điện hóa gia đình',
        'Tráng ruột phích giữ nhiệt',
        'Khử trùng nước sinh hoạt'
      ],
      correct: 0,
      explanation: 'Vì khi cháy Mg phát ra ánh sáng trắng cực sáng lóa nên ngày xưa các nhiếp ảnh gia dùng bột flash Mg, đồng thời ứng dụng trong pháo sáng hải quân!'
    }
  },
  {
    id: 'rx-caco3-hcl',
    title: 'Đá vôi tác dụng Axit clohiđric (Tạo khí CO₂)',
    grade: 'KHTN 8',
    category: 'gas',
    reactants: ['Mẩu đá vôi (Calcium carbonate - CaCO₃)', 'Dung dịch Axit HCl'],
    products: ['Dung dịch Calcium chloride (CaCl₂)', 'Khí Carbon dioxide (CO₂)', 'Nước (H₂O)'],
    equationMath: '\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2\\uparrow + \\text{H}_2\\text{O}',
    description: 'Hiện tượng hòa tan đá vôi trong tự nhiên tạo hang động karst và thí nghiệm điều chế khí CO₂.',
    phenomenon: 'Mẩu đá vôi tan dần, sủi bọt khí không màu mạnh mẽ; dẫn khí CO₂ sinh ra vào cốc nước vôi trong Ca(OH)₂ thấy nước vôi vẩn đục kết tủa trắng.',
    animationType: 'bubbles_gas',
    solutionColorBefore: 'rgba(241, 245, 249, 0.6)',
    solutionColorAfter: 'rgba(226, 232, 240, 0.7)',
    addedReagentColor: 'rgba(203, 213, 225, 1)',
    quiz: {
      question: 'Dẫn khí CO₂ thoát ra vào cốc đựng dung dịch Ca(OH)₂ (nước vôi trong) sẽ quan sát thấy hiện tượng gì?',
      options: [
        'Nước vôi trong bị vẩn đục do tạo kết tủa trắng CaCO₃',
        'Nước vôi chuyển sang màu hồng đậm',
        'Có ngọn lửa bùng cháy',
        'Không có hiện tượng gì xảy ra'
      ],
      correct: 0,
      explanation: 'CO₂ tác dụng với Ca(OH)₂ tạo kết tủa trắng Canxi cacbonat: CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.'
    }
  },
  {
    id: 'rx-fecl3-naoh',
    title: 'Sắt(III) chloride tác dụng Natri hiđroxit',
    grade: 'KHTN 8',
    category: 'precipitate',
    reactants: ['Dung dịch Iron(III) chloride (FeCl₃) màu vàng nâu', 'Dung dịch Sodium hydroxide (NaOH) không màu'],
    products: ['Kết tủa nâu đỏ Iron(III) hydroxide (Fe(OH)₃)', 'Dung dịch NaCl'],
    equationMath: '\\text{FeCl}_3 + 3\\text{NaOH} \\rightarrow \\text{Fe(OH)}_3\\downarrow + 3\\text{NaCl}',
    description: 'Nhận biết ion sắt(III) Fe³⁺ bằng thuốc thử kiềm thông qua kết tủa màu nâu đỏ đặc trưng.',
    phenomenon: 'Ngay khi nhỏ dung dịch NaOH vào, lập tức tạo thành kết tủa màu nâu đỏ sẫm dạng keo đặc trưng của Fe(OH)₃.',
    animationType: 'precipitate_brown',
    solutionColorBefore: 'rgba(217, 119, 6, 0.7)', // Yellowish brown
    solutionColorAfter: 'rgba(180, 83, 9, 0.95)', // Deep red-brown
    addedReagentColor: 'rgba(241, 245, 249, 0.9)',
    quiz: {
      question: 'Màu nâu đỏ của gỉ sét sắt trên các thanh sắt xây dựng để ngoài không khí ẩm chủ yếu là do chất nào cấu tạo nên?',
      options: [
        'Hợp chất sắt(III) ngậm nước tương tự Fe(OH)₃ và Fe₂O₃.xH₂O',
        'Muối sắt(II) sunfat',
        'Kim loại đồng bám vào',
        'Cacbon nguyên chất'
      ],
      correct: 0,
      explanation: 'Gỉ sắt là hỗn hợp oxide và hydroxide sắt(III) ngậm nước màu nâu đỏ giòn xốp.'
    }
  }
];
