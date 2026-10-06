import React, { useState } from 'react';
import { Scale, Calculator, ArrowLeft, Search, Check, Sparkles, BookOpen, Layers } from 'lucide-react';
import { COMMON_EQUATIONS, calculateMolarMass, ChemicalEquationItem } from '../data/equationsList';
import { MathView } from './MathView';

interface EquationCalcViewProps {
  onBackHome: () => void;
  soundEnabled: boolean;
}

export const EquationCalcView: React.FC<EquationCalcViewProps> = ({ onBackHome }) => {
  const [activeSubTab, setActiveSubTab] = useState<'equations' | 'calculator'>('equations');

  // Equation State
  const [equationSearch, setEquationSearch] = useState('');
  const [selectedEq, setSelectedEq] = useState<ChemicalEquationItem>(COMMON_EQUATIONS[0]);

  // Calculator State
  const [formulaInput, setFormulaInput] = useState('Al2(SO4)3');
  const [calcMassResult, setCalcMassResult] = useState(() => calculateMolarMass('Al2(SO4)3'));

  // Mol Calculation Inputs
  const [massInput, setMassInput] = useState('17.1'); // grams
  const [volumeGasInput, setVolumeGasInput] = useState('2.479'); // liters
  const [gasCondition, setGasCondition] = useState<'new_standard' | 'old_standard'>('new_standard');

  // Solution Concentration Inputs
  const [soluteMass, setSoluteMass] = useState('20'); // g
  const [solutionMass, setSolutionMass] = useState('200'); // g
  const [soluteMol, setSoluteMol] = useState('0.5'); // mol
  const [solutionLitres, setSolutionLitres] = useState('0.25'); // L

  const filteredEquations = COMMON_EQUATIONS.filter(eq => 
    eq.reactants.toLowerCase().includes(equationSearch.toLowerCase()) ||
    eq.products.toLowerCase().includes(equationSearch.toLowerCase()) ||
    eq.balancedEquation.toLowerCase().includes(equationSearch.toLowerCase()) ||
    eq.type.toLowerCase().includes(equationSearch.toLowerCase())
  );

  const handleFormulaChange = (val: string) => {
    setFormulaInput(val);
    const res = calculateMolarMass(val);
    setCalcMassResult(res);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackHome}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
              <Scale className="w-3.5 h-3.5 text-teal-600" />
              <span>Toán Hóa KHTN 8 - 9</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Cân Bằng Phương Trình & Máy Tính Mol
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Công cụ tra cứu phương trình hóa học, bảo toàn nguyên tử, tính mol và nồng độ dung dịch
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center space-x-1 self-start sm:self-auto border border-slate-200">
          <button
            onClick={() => setActiveSubTab('equations')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeSubTab === 'equations' ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Scale className="w-4 h-4 text-teal-600" />
            <span>Cân bằng phương trình</span>
          </button>
          <button
            onClick={() => setActiveSubTab('calculator')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeSubTab === 'calculator' ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4 text-teal-600" />
            <span>Máy tính Mol & Nồng độ</span>
          </button>
        </div>
      </div>

      {/* SUBTAB 1: EQUATION BALANCER */}
      {activeSubTab === 'equations' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Equation List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={equationSearch}
                onChange={(e) => setEquationSearch(e.target.value)}
                placeholder="Tìm chất tham gia hoặc sản phẩm (Fe, Al, CaCO3)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs"
              />
            </div>

            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredEquations.map((eq) => {
                const isSelected = eq.id === selectedEq.id;
                return (
                  <div
                    key={eq.id}
                    onClick={() => setSelectedEq(eq)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-200 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {eq.grade}
                      </span>
                      <span className="text-[10px] font-extrabold text-teal-700 uppercase">
                        {eq.type}
                      </span>
                    </div>
                    <div className="font-mono text-sm text-slate-900 font-bold my-1">
                      <MathView math={eq.mathKaTeX} />
                    </div>
                    <p className="text-xs text-slate-500 truncate">{eq.note}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Equation Inspection (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                  Loại phản ứng: {selectedEq.type} ({selectedEq.grade})
                </span>
                {selectedEq.conditions && (
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                    ĐK: {selectedEq.conditions}
                  </span>
                )}
              </div>

              {/* Big Balanced Equation Display */}
              <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-amber-300 rounded-2xl p-6 text-center shadow-lg font-mono text-xl sm:text-2xl overflow-x-auto py-8">
                <MathView math={selectedEq.mathKaTeX} display={true} />
              </div>

              {/* Conservation of Mass / Atom Count Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Bảo toàn số lượng nguyên tử 2 vế (Định luật bảo toàn khối lượng)</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedEq.atomBalance.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                      <div className="text-xs text-slate-500 font-semibold">Nguyên tố {item.element}</div>
                      <div className="text-lg font-black text-teal-700 mt-0.5">
                        {item.count} = {item.count}
                      </div>
                      <div className="text-[10px] text-slate-400">Vế trái = Vế phải</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Significance & Notes */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Ý nghĩa thực tế</span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {selectedEq.note}
                </p>
              </div>

              {/* Balancing Tips */}
              <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-4 text-xs sm:text-sm text-indigo-950 space-y-1">
                <span className="font-extrabold text-indigo-800 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Mẹo cân bằng cho học sinh THCS:</span>
                </span>
                <p className="leading-relaxed">
                  1. Đếm nguyên tử kim loại đầu tiên → 2. Đếm nguyên tử phi kim (Cl, S, C, P...) → 3. Đếm nguyên tử Hydro (H) → 4. Kiểm tra lại nguyên tử Oxi (O) cuối cùng để đối chiếu độ chính xác!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: MOL & CONCENTRATION CALCULATOR */}
      {activeSubTab === 'calculator' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Tra cứu Phân tử khối (M) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-5 shadow-sm">
            <div className="flex items-center space-x-2 text-teal-700 font-extrabold text-base">
              <Calculator className="w-5 h-5" />
              <span>1. Tính Phân Tử Khối (Molar Mass M)</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600">Nhập công thức hóa học (hỗ trợ ngoặc đơn):</label>
              <input
                type="text"
                value={formulaInput}
                onChange={(e) => handleFormulaChange(e.target.value)}
                placeholder="Ví dụ: CaCO3, H2SO4, Al2(SO4)3, Cu(OH)2..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['H2SO4', 'CaCO3', 'NaOH', 'Fe2O3', 'CuSO4', 'Al2(SO4)3'].map(preset => (
                  <button
                    key={preset}
                    onClick={() => handleFormulaChange(preset)}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {calcMassResult ? (
              <div className="space-y-4 pt-2">
                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl p-5 text-center shadow-md">
                  <div className="text-xs font-semibold text-teal-100 uppercase tracking-wider">Phân tử khối (M)</div>
                  <div className="text-3xl font-black mt-1">
                    {calcMassResult.mass} <span className="text-lg font-normal">g/mol (amu)</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-500">Chi tiết các nguyên tố cấu thành:</span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {calcMassResult.breakdown.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-800">{item.element} (x{item.count})</span>
                        <span className="font-mono text-slate-600">{item.subtotal} g/mol ({((item.subtotal / calcMassResult.mass) * 100).toFixed(1)}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-50 text-amber-800 text-xs text-center font-medium">
                Vui lòng nhập đúng ký hiệu hóa học (ví dụ viết hoa chữ cái đầu: Ca, Cl, Na, O, H...)
              </div>
            )}
          </div>

          {/* Card 2: Tính Số Mol (n) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-5 shadow-sm">
            <div className="flex items-center space-x-2 text-indigo-700 font-extrabold text-base">
              <Scale className="w-5 h-5" />
              <span>2. Tính Số Mol Chất (n)</span>
            </div>

            {/* A: Tính mol theo khối lượng */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-extrabold text-slate-800 flex items-center justify-between">
                <span>A. Theo khối lượng: n = m / M</span>
                <span className="text-[11px] text-indigo-600 font-mono">M = {calcMassResult?.mass || 98} g/mol</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={massInput}
                  onChange={(e) => setMassInput(e.target.value)}
                  placeholder="Khối lượng m (gam)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                />
                <span className="text-xs font-bold text-slate-500 whitespace-nowrap">gam (g)</span>
              </div>
              <div className="text-xs font-bold text-teal-800 bg-teal-100/60 p-2.5 rounded-xl">
                → Số mol n = {calcMassResult?.mass && parseFloat(massInput) ? (parseFloat(massInput) / calcMassResult.mass).toFixed(4) : 0} mol
              </div>
            </div>

            {/* B: Tính mol theo thể tích khí */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-800">B. Theo thể tích chất khí: n = V / V_mol</span>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setGasCondition('new_standard')}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${gasCondition === 'new_standard' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                  >
                    24.79 (ĐKC mới)
                  </button>
                  <button
                    onClick={() => setGasCondition('old_standard')}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${gasCondition === 'old_standard' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                  >
                    22.4 (Đktc cũ)
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={volumeGasInput}
                  onChange={(e) => setVolumeGasInput(e.target.value)}
                  placeholder="Thể tích khí V (lít)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                />
                <span className="text-xs font-bold text-slate-500 whitespace-nowrap">lít (L)</span>
              </div>

              <div className="text-xs font-bold text-indigo-800 bg-indigo-100/60 p-2.5 rounded-xl">
                → Số mol khí n = {parseFloat(volumeGasInput) ? (parseFloat(volumeGasInput) / (gasCondition === 'new_standard' ? 24.79 : 22.4)).toFixed(4) : 0} mol
              </div>
            </div>
          </div>

          {/* Card 3: Tính Nồng độ phần trăm C% */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h4 className="text-sm font-extrabold text-slate-900">
              3. Nồng độ phần trăm: C% = (m_chất_tan / m_dung_dịch) × 100%
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-500">Khối lượng chất tan (m_ct):</label>
                <input
                  type="number"
                  value={soluteMass}
                  onChange={(e) => setSoluteMass(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-500">Khối lượng dung dịch (m_dd):</label>
                <input
                  type="number"
                  value={solutionMass}
                  onChange={(e) => setSolutionMass(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
                />
              </div>
            </div>
            <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs font-extrabold text-teal-900 text-center">
              Nồng độ phần trăm C% = {parseFloat(soluteMass) && parseFloat(solutionMass) ? ((parseFloat(soluteMass) / parseFloat(solutionMass)) * 100).toFixed(2) : 0}%
            </div>
          </div>

          {/* Card 4: Tính Nồng độ mol CM */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h4 className="text-sm font-extrabold text-slate-900">
              4. Nồng độ mol: C_M = n / V (mol/lít hoặc M)
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-500">Số mol chất tan (n):</label>
                <input
                  type="number"
                  value={soluteMol}
                  onChange={(e) => setSoluteMol(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-500">Thể tích dung dịch (V):</label>
                <input
                  type="number"
                  value={solutionLitres}
                  onChange={(e) => setSolutionLitres(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
                />
              </div>
            </div>
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-extrabold text-indigo-900 text-center">
              Nồng độ mol C_M = {parseFloat(soluteMol) && parseFloat(solutionLitres) ? (parseFloat(soluteMol) / parseFloat(solutionLitres)).toFixed(3) : 0} M (mol/L)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
