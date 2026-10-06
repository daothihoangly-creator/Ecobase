export interface ChemicalEquationItem {
  id: string;
  reactants: string;
  products: string;
  balancedEquation: string;
  mathKaTeX: string;
  type: 'Hóa hợp' | 'Phân hủy' | 'Thế' | 'Trao đổi' | 'Oxi hóa - khử' | 'Cháy hữu cơ';
  grade: 'KHTN 8' | 'KHTN 9';
  conditions?: string;
  atomBalance: { element: string; count: number }[];
  note: string;
}

export const COMMON_EQUATIONS: ChemicalEquationItem[] = [
  {
    id: 'eq-1',
    reactants: 'Fe + O2',
    products: 'Fe3O4',
    balancedEquation: '3Fe + 2O2 → Fe3O4',
    mathKaTeX: '3\\text{Fe} + 2\\text{O}_2 \\xrightarrow{t^\\circ} \\text{Fe}_3\\text{O}_4',
    type: 'Hóa hợp',
    grade: 'KHTN 8',
    conditions: 'Nhiệt độ cao (t°)',
    atomBalance: [
      { element: 'Fe', count: 3 },
      { element: 'O', count: 4 }
    ],
    note: 'Đốt cháy sắt trong bình khí oxy tạo oxit sắt từ màu nâu đen.'
  },
  {
    id: 'eq-2',
    reactants: 'Al + HCl',
    products: 'AlCl3 + H2',
    balancedEquation: '2Al + 6HCl → 2AlCl3 + 3H2',
    mathKaTeX: '2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2\\uparrow',
    type: 'Thế',
    grade: 'KHTN 8',
    atomBalance: [
      { element: 'Al', count: 2 },
      { element: 'H', count: 6 },
      { element: 'Cl', count: 6 }
    ],
    note: 'Nhôm tác dụng axit clohidric sủi bọt khí hydro mãnh liệt.'
  },
  {
    id: 'eq-3',
    reactants: 'KMnO4',
    products: 'K2MnO4 + MnO2 + O2',
    balancedEquation: '2KMnO4 → K2MnO4 + MnO2 + O2',
    mathKaTeX: '2\\text{KMnO}_4 \\xrightarrow{t^\\circ} \\text{K}_2\\text{MnO}_4 + \\text{MnO}_2 + \\text{O}_2\\uparrow',
    type: 'Phân hủy',
    grade: 'KHTN 8',
    conditions: 'Nhiệt độ (t°)',
    atomBalance: [
      { element: 'K', count: 2 },
      { element: 'Mn', count: 2 },
      { element: 'O', count: 8 }
    ],
    note: 'Nhiệt phân thuốc tím điều chế khí Oxy trong phòng thí nghiệm.'
  },
  {
    id: 'eq-4',
    reactants: 'Fe + CuSO4',
    products: 'FeSO4 + Cu',
    balancedEquation: 'Fe + CuSO4 → FeSO4 + Cu',
    mathKaTeX: '\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}\\downarrow',
    type: 'Thế',
    grade: 'KHTN 9',
    atomBalance: [
      { element: 'Fe', count: 1 },
      { element: 'Cu', count: 1 },
      { element: 'S', count: 1 },
      { element: 'O', count: 4 }
    ],
    note: 'Sắt đẩy đồng ra khỏi dung dịch muối đồng sunfat.'
  },
  {
    id: 'eq-5',
    reactants: 'BaCl2 + H2SO4',
    products: 'BaSO4 + HCl',
    balancedEquation: 'BaCl2 + H2SO4 → BaSO4 + 2HCl',
    mathKaTeX: '\\text{BaCl}_2 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{HCl}',
    type: 'Trao đổi',
    grade: 'KHTN 8',
    atomBalance: [
      { element: 'Ba', count: 1 },
      { element: 'Cl', count: 2 },
      { element: 'H', count: 2 },
      { element: 'S', count: 1 },
      { element: 'O', count: 4 }
    ],
    note: 'Phản ứng tạo kết tủa trắng bền BaSO4.'
  },
  {
    id: 'eq-6',
    reactants: 'CaCO3 + HCl',
    products: 'CaCl2 + CO2 + H2O',
    balancedEquation: 'CaCO3 + 2HCl → CaCl2 + CO2 + H2O',
    mathKaTeX: '\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2\\uparrow + \\text{H}_2\\text{O}',
    type: 'Trao đổi',
    grade: 'KHTN 8',
    atomBalance: [
      { element: 'Ca', count: 1 },
      { element: 'C', count: 1 },
      { element: 'O', count: 3 },
      { element: 'H', count: 2 },
      { element: 'Cl', count: 2 }
    ],
    note: 'Hòa tan đá vôi sinh khí CO2.'
  },
  {
    id: 'eq-7',
    reactants: 'NaOH + HCl',
    products: 'NaCl + H2O',
    balancedEquation: 'NaOH + HCl → NaCl + H2O',
    mathKaTeX: '\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}',
    type: 'Trao đổi',
    grade: 'KHTN 8',
    atomBalance: [
      { element: 'Na', count: 1 },
      { element: 'O', count: 1 },
      { element: 'H', count: 2 },
      { element: 'Cl', count: 1 }
    ],
    note: 'Phản ứng trung hòa acid - base sinh muối và nước.'
  },
  {
    id: 'eq-8',
    reactants: 'CH4 + O2',
    products: 'CO2 + H2O',
    balancedEquation: 'CH4 + 2O2 → CO2 + 2H2O',
    mathKaTeX: '\\text{CH}_4 + 2\\text{O}_2 \\xrightarrow{t^\\circ} \\text{CO}_2 + 2\\text{H}_2\\text{O}',
    type: 'Cháy hữu cơ',
    grade: 'KHTN 9',
    conditions: 'Nhiệt độ (t°)',
    atomBalance: [
      { element: 'C', count: 1 },
      { element: 'H', count: 4 },
      { element: 'O', count: 4 }
    ],
    note: 'Đốt cháy khí metan trong khí gas đun nấu gia đình.'
  },
  {
    id: 'eq-9',
    reactants: 'C2H5OH + O2',
    products: 'CO2 + H2O',
    balancedEquation: 'C2H5OH + 3O2 → 2CO2 + 3H2O',
    mathKaTeX: '\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\xrightarrow{t^\\circ} 2\\text{CO}_2 + 3\\text{H}_2\\text{O}',
    type: 'Cháy hữu cơ',
    grade: 'KHTN 9',
    conditions: 'Nhiệt độ (t°)',
    atomBalance: [
      { element: 'C', count: 2 },
      { element: 'H', count: 6 },
      { element: 'O', count: 7 }
    ],
    note: 'Đốt cháy cồn y tế / ethanol trong đèn cồn phòng thí nghiệm.'
  },
  {
    id: 'eq-10',
    reactants: 'Fe2O3 + CO',
    products: 'Fe + CO2',
    balancedEquation: 'Fe2O3 + 3CO → 2Fe + 3CO2',
    mathKaTeX: '\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{t^\\circ} 2\\text{Fe} + 3\\text{CO}_2',
    type: 'Oxi hóa - khử',
    grade: 'KHTN 9',
    conditions: 'Nhiệt độ cao trong lò cao',
    atomBalance: [
      { element: 'Fe', count: 2 },
      { element: 'C', count: 3 },
      { element: 'O', count: 6 }
    ],
    note: 'Phản ứng luyện gang trong lò cao từ quặng hematit.'
  }
];

// Bảng khối lượng mol nguyên tử phổ biến
export const ATOMIC_WEIGHTS: Record<string, number> = {
  H: 1,
  He: 4,
  Li: 7,
  Be: 9,
  B: 11,
  C: 12,
  N: 14,
  O: 16,
  F: 19,
  Ne: 20,
  Na: 23,
  Mg: 24,
  Al: 27,
  Si: 28,
  P: 31,
  S: 32,
  Cl: 35.5,
  Ar: 40,
  K: 39,
  Ca: 40,
  Cr: 52,
  Mn: 55,
  Fe: 56,
  Cu: 64,
  Zn: 65,
  Br: 80,
  Ag: 108,
  Ba: 137,
  Au: 197,
  Hg: 201,
  Pb: 207
};

/**
 * Tính phân tử khối M từ công thức hóa học đơn giản (hỗ trợ ngoặc đơn e.g. Ca(OH)2, Al2(SO4)3, Fe(NO3)3)
 */
export function calculateMolarMass(formula: string): { mass: number; breakdown: { element: string; count: number; subtotal: number }[] } | null {
  try {
    const cleaned = formula.trim().replace(/\s+/g, '');
    if (!cleaned) return null;

    // Helper: parse tokens inside or outside brackets
    const parseSegment = (str: string): Record<string, number> => {
      const counts: Record<string, number> = {};
      const regex = /([A-Z][a-z]*)(\d*)/g;
      let match;
      while ((match = regex.exec(str)) !== null) {
        const elem = match[1];
        const num = match[2] ? parseInt(match[2], 10) : 1;
        counts[elem] = (counts[elem] || 0) + num;
      }
      return counts;
    };

    // Handle parentheses e.g. Ca(OH)2 or Al2(SO4)3
    const bracketRegex = /\(([^)]+)\)(\d*)/g;
    let expanded = cleaned;
    let bracketMatch;
    
    // Expand parentheses into element counts
    const totalCounts: Record<string, number> = {};

    // Remove brackets by expanding
    let tempFormula = cleaned;
    while ((bracketMatch = bracketRegex.exec(cleaned)) !== null) {
      const groupContent = bracketMatch[1];
      const multiplier = bracketMatch[2] ? parseInt(bracketMatch[2], 10) : 1;
      const innerCounts = parseSegment(groupContent);
      for (const [elem, cnt] of Object.entries(innerCounts)) {
        totalCounts[elem] = (totalCounts[elem] || 0) + cnt * multiplier;
      }
      // Replace in tempFormula
      tempFormula = tempFormula.replace(bracketMatch[0], '');
    }

    // Add remaining elements outside brackets
    const outerCounts = parseSegment(tempFormula);
    for (const [elem, cnt] of Object.entries(outerCounts)) {
      totalCounts[elem] = (totalCounts[elem] || 0) + cnt;
    }

    let totalMass = 0;
    const breakdown: { element: string; count: number; subtotal: number }[] = [];

    for (const [elem, count] of Object.entries(totalCounts)) {
      const weight = ATOMIC_WEIGHTS[elem];
      if (weight === undefined) {
        return null; // Unknown element
      }
      const subtotal = weight * count;
      totalMass += subtotal;
      breakdown.push({ element: elem, count, subtotal });
    }

    if (totalMass === 0) return null;
    return { mass: totalMass, breakdown };
  } catch (e) {
    return null;
  }
}
