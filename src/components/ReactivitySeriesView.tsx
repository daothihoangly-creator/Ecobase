import React, { useState } from 'react';
import { Shield, Sparkles, ArrowLeft, CheckCircle2, XCircle, Info, Zap, Droplets, Flame } from 'lucide-react';
import { METAL_REACTIVITY_SERIES, CATIONS, ANIONS, SOLUBILITY_TABLE } from '../data/solubilityData';
import { MathView } from './MathView';

interface ReactivitySeriesViewProps {
  onBackHome: () => void;
  soundEnabled: boolean;
}

export const ReactivitySeriesView: React.FC<ReactivitySeriesViewProps> = ({ onBackHome }) => {
  const [activeTab, setActiveTab] = useState<'metals' | 'solubility'>('metals');

  // Interactive metal simulator
  const [testedMetal, setTestedMetal] = useState('Fe');
  const [testedEnvironment, setTestedEnvironment] = useState<'water' | 'acid' | 'cuso4' | 'agno3'>('cuso4');

  // Selected cell in solubility matrix
  const [selectedCell, setSelectedCell] = useState<{ cation: string; anion: string; data: any } | null>(null);

  // Metal reaction simulation logic
  const runMetalSimulation = () => {
    const metalIdx = METAL_REACTIVITY_SERIES.findIndex(m => m.symbol === testedMetal);
    const hIdx = METAL_REACTIVITY_SERIES.findIndex(m => m.symbol === 'H');
    const cuIdx = METAL_REACTIVITY_SERIES.findIndex(m => m.symbol === 'Cu');
    const agIdx = METAL_REACTIVITY_SERIES.findIndex(m => m.symbol === 'Ag');

    if (testedEnvironment === 'water') {
      if (['K', 'Na', 'Ca'].includes(testedMetal)) {
        return {
          reacts: true,
          equation: `2\\text{${testedMetal}} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{${testedMetal}}\\text{OH} + \\text{H}_2\\uparrow`,
          desc: `Kim loại ${testedMetal} phản ứng mãnh liệt với nước ở nhiệt độ thường tạo dung dịch kiềm và giải phóng khí Hydro bốc cháy!`
        };
      }
      return {
        reacts: false,
        desc: `Kim loại ${testedMetal} không tác dụng với nước ở nhiệt độ thường.`
      };
    }

    if (testedEnvironment === 'acid') {
      if (metalIdx < hIdx) {
        if (['K', 'Na', 'Ca'].includes(testedMetal)) {
          return {
            reacts: true,
            equation: `2\\text{${testedMetal}} + 2\\text{HCl} \\rightarrow 2\\text{${testedMetal}}\\text{Cl} + \\text{H}_2\\uparrow`,
            desc: `Kim loại ${testedMetal} hoạt động rất mạnh, phản ứng mãnh liệt có thể gây nổ nguy hiểm!`
          };
        }
        return {
          reacts: true,
          equation: `\\text{${testedMetal}} + 2\\text{HCl} \\rightarrow \\text{${testedMetal}}\\text{Cl}_2 + \\text{H}_2\\uparrow`,
          desc: `Kim loại ${testedMetal} đứng trước H trong dãy hoạt động hóa học, đẩy được Hydro ra khỏi axit loãng sinh bọt khí H₂!`
        };
      }
      return {
        reacts: false,
        desc: `Kim loại ${testedMetal} đứng sau Hydro (H) trong dãy hoạt động hóa học nên KHÔNG tác dụng với HCl / H₂SO₄ loãng!`
      };
    }

    if (testedEnvironment === 'cuso4') {
      if (['K', 'Na', 'Ca'].includes(testedMetal)) {
        return {
          reacts: true,
          equation: `2\\text{${testedMetal}} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{${testedMetal}}\\text{OH} + \\text{H}_2\\uparrow`,
          desc: `Lưu ý đặc biệt: ${testedMetal} phản ứng với NƯỚC trong dung dịch trước tạo kiềm, sau đó kiềm mới kết tủa với CuSO₄ tạo Cu(OH)₂ xanh lam (không đẩy Cu trực tiếp)!`
        };
      }
      if (metalIdx < cuIdx) {
        return {
          reacts: true,
          equation: `\\text{${testedMetal}} + \\text{CuSO}_4 \\rightarrow \\text{${testedMetal}}\\text{SO}_4 + \\text{Cu}\\downarrow`,
          desc: `Kim loại ${testedMetal} đứng TRƯỚC Đồng (Cu), nên đẩy được Đồng ra khỏi dung dịch muối CuSO₄, đồng đỏ bám ngoài thanh kim loại!`
        };
      }
      return {
        reacts: false,
        desc: `Kim loại ${testedMetal} đứng SAU Đồng (Cu) hoặc chính là Cu, không thể đẩy Cu ra khỏi muối!`
      };
    }

    if (testedEnvironment === 'agno3') {
      if (['K', 'Na', 'Ca'].includes(testedMetal)) {
        return {
          reacts: true,
          equation: `2\\text{${testedMetal}} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{${testedMetal}}\\text{OH} + \\text{H}_2\\uparrow`,
          desc: `${testedMetal} phản ứng với nước trong dung dịch trước sinh khí H₂ và kiềm!`
        };
      }
      if (metalIdx < agIdx) {
        return {
          reacts: true,
          equation: `\\text{${testedMetal}} + 2\\text{AgNO}_3 \\rightarrow \\text{${testedMetal}}(\\text{NO}_3)_2 + 2\\text{Ag}\\downarrow`,
          desc: `Kim loại ${testedMetal} đứng TRƯỚC Bạc (Ag), đẩy được Bạc ra khỏi muối AgNO₃, tinh thể bạc lấp lánh bám vào!`
        };
      }
      return {
        reacts: false,
        desc: `Kim loại ${testedMetal} đứng sau Bạc (Ag) hoặc chính là Ag, không phản ứng!`
      };
    }

    return { reacts: false, desc: 'Không có phản ứng.' };
  };

  const simResult = runMetalSimulation();

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
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>Chương trình KHTN 8 - 9</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dãy Kim Loại & Bảng Tính Tan
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Mẹo ghi nhớ dãy hoạt động hóa học và tra cứu độ tan của các muối, axit, base
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center space-x-1 self-start sm:self-auto border border-slate-200">
          <button
            onClick={() => setActiveTab('metals')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'metals' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dãy hoạt động kim loại
          </button>
          <button
            onClick={() => setActiveTab('solubility')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'solubility' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bảng tính tan thông minh
          </button>
        </div>
      </div>

      {/* TAB 1: REACTIVITY SERIES */}
      {activeTab === 'metals' && (
        <div className="space-y-6">
          {/* Mnemonic Banner */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-4">
            <div className="flex items-center space-x-2 text-indigo-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Câu vè ghi nhớ kinh điển môn Hóa học THCS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black leading-snug">
              "Khi Nào Cần May Áo Giáp Sắt Phải Hỏi Cửa Hàng Á Phi Âu"
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 font-medium">
              Chiều từ TRÁI sang PHẢI: Tính kim loại và mức độ hoạt động hóa học GIẢM DẦN.
            </p>

            {/* Visual Track of Metals */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 pt-2">
              {METAL_REACTIVITY_SERIES.map((metal, idx) => {
                const isH = metal.symbol === 'H';
                return (
                  <div
                    key={metal.symbol}
                    onClick={() => setTestedMetal(metal.symbol)}
                    className={`rounded-2xl p-2.5 text-center cursor-pointer transition-all hover:scale-105 border ${
                      testedMetal === metal.symbol
                        ? 'bg-amber-400 text-slate-900 border-white ring-2 ring-white shadow-lg'
                        : isH
                        ? 'bg-rose-500/80 text-white border-rose-300'
                        : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="text-[10px] font-bold opacity-80">{metal.mnemonicWord}</div>
                    <div className="text-xl font-black my-0.5">{metal.symbol}</div>
                    <div className="text-[9px] font-medium truncate opacity-90">{metal.nameVi}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3 Core Scientific Rules Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">1. Tác dụng với Nước</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chỉ các kim loại kiềm & kiềm thổ cực mạnh (<strong>K, Na, Ca, Ba</strong>) mới phản ứng với nước ở nhiệt độ thường sinh base kiềm và khí H₂.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-black">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">2. Tác dụng với Axit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kim loại đứng <strong>TRƯỚC H</strong> (từ K đến Pb) đẩy được H ra khỏi dung dịch axit loãng (HCl, H₂SO₄ loãng). Các kim loại đứng <strong>SAU H</strong> (Cu, Ag, Au) thì KHÔNG.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-900">3. Đẩy kim loại trong Muối</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kim loại đứng TRƯỚC đẩy được kim loại đứng SAU ra khỏi dung dịch muối (trừ K, Na, Ca phản ứng với nước trước). Ví dụ: <strong>Fe + CuSO₄ → FeSO₄ + Cu↓</strong>.
              </p>
            </div>
          </div>

          {/* Interactive Reaction Checker Tool */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Phòng thử nghiệm: Kim loại này có phản ứng không?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-600">Chọn kim loại thử nghiệm:</label>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {METAL_REACTIVITY_SERIES.filter(m => m.symbol !== 'H').map(m => (
                    <button
                      key={m.symbol}
                      onClick={() => setTestedMetal(m.symbol)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border ${
                        testedMetal === m.symbol
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m.symbol} ({m.nameVi})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600">Chọn môi trường thuốc thử:</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { id: 'water', label: 'Nước lạnh (H₂O)' },
                    { id: 'acid', label: 'Dung dịch Axit (HCl loãng)' },
                    { id: 'cuso4', label: 'Muối CuSO₄ (màu lam)' },
                    { id: 'agno3', label: 'Muối AgNO₃ (bạc)' },
                  ].map(env => (
                    <button
                      key={env.id}
                      onClick={() => setTestedEnvironment(env.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-extrabold text-left transition-all border ${
                        testedEnvironment === env.id
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-900 ring-2 ring-indigo-200'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {env.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulation Result Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              simResult.reacts ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'
            }`}>
              <div className="flex items-center space-x-3 mb-2">
                {simResult.reacts ? (
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold">
                    <XCircle className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h4 className={`text-base font-black ${simResult.reacts ? 'text-emerald-900' : 'text-rose-900'}`}>
                    {simResult.reacts ? 'CÓ PHẢN ỨNG XẢY RA!' : 'KHÔNG CÓ PHẢN ỨNG!'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{simResult.desc}</p>
                </div>
              </div>

              {simResult.equation && (
                <div className="mt-3 p-3 rounded-xl bg-white/90 border border-emerald-200 font-mono text-sm text-emerald-950">
                  <span className="font-sans font-bold text-xs text-slate-500 block mb-1">Phương trình hóa học:</span>
                  <MathView math={simResult.equation} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SOLUBILITY MATRIX */}
      {activeTab === 'solubility' && (
        <div className="space-y-6">
          {/* Legend explanation */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs">
            <span className="font-bold text-slate-700">Chú giải bảng tính tan:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>T: Chất tan tốt trong nước</span>
            </span>
            <span className="flex items-center space-x-1 font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-200">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span>K: Chất không tan (Kết tủa)</span>
            </span>
            <span className="flex items-center space-x-1 font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span>I: Chất ít tan</span>
            </span>
            <span className="flex items-center space-x-1 font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg">
              <span>B: Bị phân hủy trong nước</span>
            </span>
          </div>

          {/* Matrix Table */}
          <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 overflow-x-auto shadow-sm">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="p-2.5 border border-slate-200 bg-slate-50 font-black text-xs text-slate-700">
                    Cation \ Anion
                  </th>
                  {ANIONS.map(a => (
                    <th key={a.symbol} className="p-2.5 border border-slate-200 bg-slate-100 font-extrabold text-xs text-slate-900">
                      <div>{a.symbol}</div>
                      <div className="text-[9px] font-normal text-slate-500">{a.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CATIONS.map(c => (
                  <tr key={c.symbol}>
                    <td className="p-2.5 border border-slate-200 bg-slate-50 font-extrabold text-xs text-slate-800 text-left">
                      <span className="font-mono">{c.symbol}</span>
                      <span className="text-[10px] text-slate-500 ml-1">({c.name})</span>
                    </td>
                    {ANIONS.map(a => {
                      const entry = SOLUBILITY_TABLE[c.symbol]?.[a.symbol] || { status: 'T' };
                      const isK = entry.status === 'K';
                      const isT = entry.status === 'T';
                      const isI = entry.status === 'I';
                      const isB = entry.status === 'B';

                      return (
                        <td
                          key={a.symbol}
                          onClick={() => setSelectedCell({ cation: c.symbol, anion: a.symbol, data: entry })}
                          className={`p-2 border border-slate-200 text-xs font-black cursor-pointer transition-colors ${
                            isT ? 'bg-emerald-50/60 text-emerald-800 hover:bg-emerald-100' :
                            isK ? 'bg-rose-50 text-rose-800 hover:bg-rose-100 font-black ring-1 ring-rose-200' :
                            isI ? 'bg-amber-50 text-amber-800 hover:bg-amber-100' :
                            'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <div>{entry.status}</div>
                          {entry.color && (
                            <div className="text-[9px] font-bold text-slate-600 truncate mt-0.5">
                              {entry.color}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cell Detail Modal/Card */}
          {selectedCell && (
            <div className="bg-white rounded-3xl border border-slate-300 p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm">
                    {selectedCell.cation} + {selectedCell.anion}
                  </div>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                    selectedCell.data.status === 'T' ? 'bg-emerald-100 text-emerald-800' :
                    selectedCell.data.status === 'K' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedCell.data.status === 'T' ? 'Tan trong nước' : selectedCell.data.status === 'K' ? 'Không tan (Kết tủa)' : 'Ít tan hoặc Phân hủy'}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCell(null)}
                  className="text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  Đóng ✕
                </button>
              </div>

              {selectedCell.data.color && (
                <div className="text-sm font-bold text-slate-800">
                  Màu sắc đặc trưng: <span className="text-rose-600">{selectedCell.data.color}</span>
                </div>
              )}

              {selectedCell.data.note && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  💡 {selectedCell.data.note}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
