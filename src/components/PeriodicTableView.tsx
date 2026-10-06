import React, { useState } from 'react';
import { Atom, Search, Filter, Volume2, Sparkles, X, Layers, Lightbulb, Zap, ArrowLeft } from 'lucide-react';
import { ChemicalElement } from '../types';
import { PERIODIC_ELEMENTS, CATEGORY_LABELS } from '../data/periodicTableData';
import { speakVietnamese } from '../utils/speech';

interface PeriodicTableViewProps {
  onBackHome: () => void;
  soundEnabled: boolean;
}

export const PeriodicTableView: React.FC<PeriodicTableViewProps> = ({ onBackHome, soundEnabled }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);

  const filteredElements = PERIODIC_ELEMENTS.filter(elem => {
    const matchesSearch = 
      elem.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      elem.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      elem.nameIUPAC.toLowerCase().includes(searchQuery.toLowerCase()) ||
      elem.number.toString().includes(searchQuery);

    const matchesCategory = selectedCategory === 'all' || elem.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSpeakElement = (elem: ChemicalElement) => {
    if (!soundEnabled) return;
    const text = `Nguyên tố ${elem.nameVi}, tên quốc tế ${elem.nameIUPAC}. Ký hiệu hóa học ${elem.symbol}. Số hiệu nguyên tử ${elem.number}, nguyên tử khối ${elem.atomicMass}. Hóa trị thường gặp: ${elem.commonValences}. Ứng dụng: ${elem.realLifeUse}.`;
    speakVietnamese(text);
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
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
              <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Chương trình KHTN 7</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Bảng Tuần Hoàn Nguyên Tố
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Tra cứu nguyên tử, hóa trị, mô hình Rutherford - Bohr và ứng dụng thực tế
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên, ký hiệu (H, Fe), số p..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          Tất cả ({PERIODIC_ELEMENTS.length})
        </button>
        {Object.entries(CATEGORY_LABELS).map(([catKey, catInfo]) => (
          <button
            key={catKey}
            onClick={() => setSelectedCategory(catKey)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
              selectedCategory === catKey
                ? `${catInfo.bg} ${catInfo.color} font-black shadow-sm ring-2 ring-indigo-400`
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {catInfo.label}
          </button>
        ))}
      </div>

      {/* Grid of Elements */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredElements.map((elem) => {
          const catInfo = CATEGORY_LABELS[elem.category];
          return (
            <div
              key={elem.number}
              onClick={() => {
                setSelectedElement(elem);
                handleSpeakElement(elem);
              }}
              className="group relative bg-white rounded-2xl border border-slate-200 p-3 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              {/* Category color top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${elem.badgeColor}`}></div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1">
                <span>#{elem.number}</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {elem.group > 0 ? `Nhóm ${elem.group}` : ''}
                </span>
              </div>

              <div className="text-center my-1.5">
                <div className="text-3xl font-black text-slate-900 group-hover:scale-110 transition-transform">
                  {elem.symbol}
                </div>
                <div className="text-xs font-bold text-slate-700 truncate mt-0.5">{elem.nameVi}</div>
                <div className="text-[10px] text-slate-400 truncate italic">{elem.nameIUPAC}</div>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-500">
                <span>{elem.atomicMass} amu</span>
                <span className="font-bold text-indigo-600">{elem.commonValences}</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredElements.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
          <Atom className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-600 font-bold">Không tìm thấy nguyên tố phù hợp với từ khóa "{searchQuery}"</p>
          <p className="text-xs text-slate-400 mt-1">Hãy thử tìm theo ký hiệu như H, O, Fe, Cu hoặc số proton</p>
        </div>
      )}

      {/* Element Detail Modal */}
      {selectedElement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Modal Top Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedElement.badgeColor} text-white flex flex-col items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-black">{selectedElement.symbol}</span>
                  <span className="text-[10px] font-bold">#{selectedElement.number}</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-extrabold text-slate-900">{selectedElement.nameVi}</h2>
                    <span className="text-sm font-semibold text-slate-400">({selectedElement.nameIUPAC})</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${CATEGORY_LABELS[selectedElement.category].bg} ${CATEGORY_LABELS[selectedElement.category].color}`}>
                      {CATEGORY_LABELS[selectedElement.category].label}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-slate-100 text-slate-700">
                      Thể {selectedElement.state === 'gas' ? 'Khí' : selectedElement.state === 'liquid' ? 'Lỏng' : 'Rắn'} ở 25°C
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleSpeakElement(selectedElement)}
                  className="p-2.5 rounded-xl border border-slate-200 text-indigo-600 hover:bg-indigo-50 transition-colors"
                  title="Nghe đọc thông tin"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedElement(null)}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Rutherford - Bohr Atomic Model Animation */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-inner">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 flex items-center justify-center space-x-1.5">
                <Atom className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Mô hình nguyên tử Rutherford - Bohr</span>
              </div>

              {/* Dynamic SVG Bohr Model */}
              <div className="relative w-48 h-48 mx-auto my-2 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  {/* Concentric Shells */}
                  {selectedElement.electronShells.map((count, idx) => {
                    const radius = 28 + (idx + 1) * 22;
                    return (
                      <g key={idx}>
                        <circle
                          cx="100"
                          cy="100"
                          r={radius}
                          fill="none"
                          stroke="rgba(99, 102, 241, 0.35)"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                        />
                        {/* Electrons on shell */}
                        {Array.from({ length: count }).map((_, eIdx) => {
                          const angle = (2 * Math.PI / count) * eIdx;
                          const cx = 100 + radius * Math.cos(angle);
                          const cy = 100 + radius * Math.sin(angle);
                          return (
                            <circle
                              key={eIdx}
                              cx={cx}
                              cy={cy}
                              r="4.5"
                              fill="#38bdf8"
                              className="animate-pulse"
                            >
                              <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from={`0 100 100`}
                                to={`360 100 100`}
                                dur={`${12 + idx * 6}s`}
                                repeatCount="indefinite"
                              />
                            </circle>
                          );
                        })}
                      </g>
                    );
                  })}
                  {/* Nucleus */}
                  <circle cx="100" cy="100" r="16" fill="url(#nucleusGradient)" />
                  <defs>
                    <radialGradient id="nucleusGradient">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#be123c" />
                    </radialGradient>
                  </defs>
                  <text x="100" y="103" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    {selectedElement.number}+
                  </text>
                </svg>
              </div>

              <div className="flex items-center justify-center space-x-6 text-xs text-slate-300 font-semibold pt-1">
                <div>🔴 Hạt nhân: <span className="text-white font-bold">{selectedElement.number} Proton</span></div>
                <div>🔵 Electron: <span className="text-cyan-300 font-bold">{selectedElement.number} e ({selectedElement.electronShells.join(' - ')})</span></div>
              </div>
            </div>

            {/* Atomic Parameters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[11px] text-slate-400 font-medium">Số hiệu nguyên tử (Z)</span>
                <div className="text-xl font-extrabold text-slate-900 mt-0.5">{selectedElement.number}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[11px] text-slate-400 font-medium">Nguyên tử khối</span>
                <div className="text-xl font-extrabold text-slate-900 mt-0.5">{selectedElement.atomicMass} <span className="text-xs font-normal">amu</span></div>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[11px] text-slate-400 font-medium">Hóa trị thường gặp</span>
                <div className="text-xl font-extrabold text-indigo-600 mt-0.5">{selectedElement.commonValences}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                <span className="text-[11px] text-slate-400 font-medium">Vị trí bảng tuần hoàn</span>
                <div className="text-sm font-bold text-slate-900 mt-1">CK {selectedElement.period} • Nhóm {selectedElement.group}</div>
              </div>
            </div>

            {/* Real Life Use Card */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Ứng dụng trong đời sống & Khoa học</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                {selectedElement.realLifeUse}
              </p>
            </div>

            {/* Fun Fact Card */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Điều bạn chưa biết? (Fun Fact)</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed italic">
                "{selectedElement.funFact}"
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedElement(null)}
              className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition-colors shadow-lg"
            >
              Đóng cửa sổ tra cứu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
