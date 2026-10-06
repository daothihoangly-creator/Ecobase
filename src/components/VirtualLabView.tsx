import React, { useState, useEffect } from 'react';
import { FlaskConical, Play, RotateCcw, Volume2, Sparkles, Flame, CheckCircle2, AlertTriangle, ArrowLeft, Award, HelpCircle } from 'lucide-react';
import { VirtualReaction } from '../types';
import { VIRTUAL_REACTIONS } from '../data/reactionsData';
import { MathView } from './MathView';
import { speakVietnamese } from '../utils/speech';

interface VirtualLabViewProps {
  onBackHome: () => void;
  soundEnabled: boolean;
}

export const VirtualLabView: React.FC<VirtualLabViewProps> = ({ onBackHome, soundEnabled }) => {
  const [selectedRx, setSelectedRx] = useState<VirtualReaction>(VIRTUAL_REACTIONS[0]);
  const [stage, setStage] = useState<'ready' | 'pouring' | 'reacting' | 'completed'>('ready');
  const [temperature, setTemperature] = useState(25);
  const [burnerActive, setBurnerActive] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  // Reset experiment state when switching reactions
  const handleSelectReaction = (rx: VirtualReaction) => {
    setSelectedRx(rx);
    setStage('ready');
    setTemperature(25);
    setBurnerActive(false);
    setQuizAnswered(null);
  };

  const handleStartReaction = () => {
    if (selectedRx.requiresHeat && !burnerActive) {
      if (soundEnabled) speakVietnamese('Thí nghiệm này cần nhiệt độ cao! Hãy bật đèn cồn trước nhé.');
      return;
    }

    setStage('pouring');
    if (soundEnabled) speakVietnamese(`Bắt đầu phản ứng: ${selectedRx.title}`);

    setTimeout(() => {
      setStage('reacting');
      if (selectedRx.requiresHeat || selectedRx.animationType === 'flame_bright') {
        setTemperature(650);
      } else {
        setTemperature(42); // gentle exothermic
      }

      setTimeout(() => {
        setStage('completed');
        if (soundEnabled) {
          speakVietnamese(`Hiện tượng quan sát được: ${selectedRx.phenomenon}`);
        }
      }, 2500);
    }, 1200);
  };

  const handleReset = () => {
    setStage('ready');
    setTemperature(25);
    setBurnerActive(false);
    setQuizAnswered(null);
  };

  const handleAnswerQuiz = (idx: number) => {
    if (quizAnswered !== null) return;
    setQuizAnswered(idx);
    if (idx === selectedRx.quiz.correct) {
      setScore(s => s + 20);
      if (soundEnabled) speakVietnamese('Chính xác! Bạn đã hiểu rõ bản chất của hiện tượng hóa học này.');
    } else {
      if (soundEnabled) speakVietnamese('Chưa chính xác rồi. Hãy đọc lại phần giải thích chi tiết nhé.');
    }
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
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
              <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
              <span>Phòng Thí Nghiệm Ảo THCS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mô Phỏng Phản Ứng Ống Nghiệm
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Trực quan hóa bọt khí, đổi màu, kết tủa và tỏa nhiệt an toàn tuyệt đối
            </p>
          </div>
        </div>

        {/* Score indicator */}
        <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-2xl shadow-md self-start sm:self-auto">
          <Award className="w-5 h-5" />
          <span className="text-sm font-extrabold">{score} Điểm STEM</span>
        </div>
      </div>

      {/* Main Grid: Experiment Workbench + Reaction Catalog */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Reaction Catalog (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            <span>Danh mục thí nghiệm ({VIRTUAL_REACTIONS.length})</span>
            <span>KHTN 8 - 9</span>
          </div>

          <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1 scrollbar-thin">
            {VIRTUAL_REACTIONS.map((rx) => {
              const isSelected = rx.id === selectedRx.id;
              return (
                <div
                  key={rx.id}
                  onClick={() => handleSelectReaction(rx)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/90 border-amber-400 ring-2 ring-amber-300 shadow-md'
                      : 'bg-white border-slate-200 hover:border-amber-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="px-2 py-0.5 rounded-md font-bold text-[10px] bg-slate-100 text-slate-700">
                      {rx.grade}
                    </span>
                    <span className={`text-[10px] font-bold ${
                      rx.category === 'metal' ? 'text-blue-600' :
                      rx.category === 'gas' ? 'text-teal-600' :
                      rx.category === 'precipitate' ? 'text-purple-600' :
                      rx.category === 'combustion' ? 'text-rose-600' : 'text-emerald-600'
                    }`}>
                      {rx.category === 'metal' ? 'Kim loại' :
                       rx.category === 'gas' ? 'Khí bay lên' :
                       rx.category === 'precipitate' ? 'Tạo kết tủa' :
                       rx.category === 'combustion' ? 'Cháy nổ' : 'Acid - Base'}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold line-clamp-1 ${isSelected ? 'text-amber-950 font-extrabold' : 'text-slate-800'}`}>
                    {rx.title}
                  </h4>
                  <div className="text-xs text-slate-500 mt-1 font-mono">
                    <MathView math={rx.equationMath} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Laboratory Stage (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Workbench Card */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative shadow-2xl border border-slate-700 overflow-hidden min-h-[480px] flex flex-col justify-between">
            {/* Laboratory background shelf pattern */}
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-slate-700/50 bg-slate-950/40 flex items-center justify-between px-6 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono">BÀN THÍ NGHIỆM VÔ TRÙNG</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>Nhiệt kế: <strong className="text-amber-400">{temperature}°C</strong></span>
                <span>Trạng thái: <strong className="text-cyan-400 uppercase">{stage === 'ready' ? 'Sẵn sàng' : stage === 'pouring' ? 'Thêm hóa chất' : stage === 'reacting' ? 'Đang phản ứng' : 'Hoàn thành'}</strong></span>
              </div>
            </div>

            {/* Test Tube Graphic Container */}
            <div className="relative flex-1 flex items-center justify-center py-12">
              {/* Burner Flame underneath if active */}
              {burnerActive && (
                <div className="absolute bottom-6 flex flex-col items-center">
                  <Flame className="w-12 h-12 text-amber-500 animate-bounce" />
                  <div className="w-16 h-4 bg-slate-700 rounded-full border border-slate-600 mt-1"></div>
                </div>
              )}

              {/* The Test Tube */}
              <div className="relative w-28 h-72 border-4 border-slate-400/80 rounded-b-full bg-slate-800/40 backdrop-blur-xs shadow-2xl overflow-hidden flex flex-col justify-end">
                {/* Measurement marks on glass */}
                <div className="absolute left-2 top-8 bottom-12 w-2 flex flex-col justify-between opacity-40">
                  <div className="w-3 h-0.5 bg-white"></div>
                  <div className="w-2 h-0.5 bg-white"></div>
                  <div className="w-3 h-0.5 bg-white"></div>
                  <div className="w-2 h-0.5 bg-white"></div>
                  <div className="w-3 h-0.5 bg-white"></div>
                </div>

                {/* Dropper Pouring Liquid (During 'pouring' stage) */}
                {stage === 'pouring' && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse">
                    <div className="w-3 h-12 rounded-full" style={{ backgroundColor: selectedRx.addedReagentColor }}></div>
                    <div className="w-1.5 h-16 bg-white/70 animate-bounce"></div>
                  </div>
                )}

                {/* Gas Bubbles Animation */}
                {(stage === 'reacting' || stage === 'completed') && selectedRx.animationType === 'bubbles_gas' && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/80 animate-ping"
                        style={{
                          left: `${15 + (i * 20) % 70}%`,
                          bottom: `${10 + (i * 12)}%`,
                          animationDuration: `${0.8 + (i % 5) * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}

                {/* Bright Flash for Combustion */}
                {stage === 'reacting' && selectedRx.animationType === 'flame_bright' && (
                  <div className="absolute inset-0 bg-white animate-ping opacity-90 rounded-b-full"></div>
                )}

                {/* Precipitate Settling Down */}
                {(stage === 'reacting' || stage === 'completed') && (selectedRx.animationType.startsWith('precipitate') || selectedRx.animationType === 'metal_coating') && (
                  <div 
                    className="absolute bottom-2 left-2 right-2 h-10 rounded-b-full transition-all duration-1000 shadow-lg"
                    style={{
                      backgroundColor: selectedRx.animationType === 'precipitate_blue' ? '#0284c7' :
                                       selectedRx.animationType === 'precipitate_brown' ? '#b45309' :
                                       selectedRx.animationType === 'metal_coating' ? '#dc2626' : '#ffffff',
                      opacity: stage === 'completed' ? 0.95 : 0.6
                    }}
                  >
                    <div className="text-[9px] text-center font-bold text-slate-900 pt-2 opacity-80">
                      {selectedRx.animationType === 'metal_coating' ? 'Cu đỏ bám' : 'Kết tủa'}
                    </div>
                  </div>
                )}

                {/* Fluid in the tube */}
                <div
                  className="w-full transition-all duration-1000 rounded-b-full relative overflow-hidden"
                  style={{
                    height: stage === 'ready' ? '45%' : '65%',
                    backgroundColor: stage === 'completed' ? selectedRx.solutionColorAfter : selectedRx.solutionColorBefore,
                  }}
                >
                  {/* Fluid Surface Shimmer */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stage Action Controls */}
            <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                {selectedRx.requiresHeat && (
                  <button
                    onClick={() => {
                      setBurnerActive(!burnerActive);
                      if (!burnerActive) setTemperature(300);
                      else setTemperature(25);
                    }}
                    className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      burnerActive ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>{burnerActive ? 'Tắt đèn cồn' : 'Bật đèn cồn (Gia nhiệt)'}</span>
                  </button>
                )}

                <button
                  onClick={handleStartReaction}
                  disabled={stage === 'pouring' || stage === 'reacting'}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/20 disabled:opacity-50 transition-all hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{stage === 'completed' ? 'Tiến hành lại' : 'Thực hiện phản ứng'}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Làm mới ống nghiệm"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Chemical Equation Badge */}
              <div className="bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-700 text-amber-300 font-mono text-sm shadow-inner">
                <MathView math={selectedRx.equationMath} />
              </div>
            </div>
          </div>

          {/* Observations & Scientific Explanation */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Hiện tượng & Bản chất hóa học</span>
              </h3>
              <button
                onClick={() => soundEnabled && speakVietnamese(selectedRx.phenomenon)}
                className="flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe đọc hiện tượng</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Hóa chất tham gia</span>
                <ul className="text-xs sm:text-sm text-slate-700 list-disc list-inside space-y-0.5">
                  {selectedRx.reactants.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Sản phẩm tạo thành</span>
                <ul className="text-xs sm:text-sm text-slate-700 list-disc list-inside space-y-0.5">
                  {selectedRx.products.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
              <strong className="text-amber-800">Hiện tượng thực nghiệm: </strong>
              {selectedRx.phenomenon}
            </div>

            {/* Interactive Concept Quiz */}
            <div className="border-t border-slate-100 pt-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-extrabold text-slate-800">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>Câu hỏi củng cố kiến thức (+20 Điểm)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{selectedRx.quiz.question}</p>

              <div className="grid grid-cols-1 gap-2">
                {selectedRx.quiz.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === selectedRx.quiz.correct;
                  const isChosen = quizAnswered === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswerQuiz(oIdx)}
                      disabled={quizAnswered !== null}
                      className={`text-left p-3 rounded-xl text-xs sm:text-sm transition-all border ${
                        quizAnswered !== null
                          ? isCorrect
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                            : isChosen
                            ? 'bg-red-50 border-red-300 text-red-900'
                            : 'bg-white border-slate-200 text-slate-400'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-300'
                      }`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered !== null && (
                <div className={`p-3 rounded-xl text-xs ${
                  quizAnswered === selectedRx.quiz.correct ? 'bg-emerald-100 text-emerald-900 font-medium' : 'bg-amber-100 text-amber-900'
                }`}>
                  <strong className="block mb-1">{quizAnswered === selectedRx.quiz.correct ? '🎉 Hoàn toàn chính xác!' : '💡 Giải thích chi tiết:'}</strong>
                  {selectedRx.quiz.explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
