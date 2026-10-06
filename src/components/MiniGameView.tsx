import React, { useState } from 'react';
import { Gamepad2, ArrowLeft, Award, Sparkles, CheckCircle2, XCircle, RotateCcw, Zap, Flame, Atom, Scale } from 'lucide-react';
import { EnvironmentType } from '../types';
import { speakVietnamese } from '../utils/speech';

interface MiniGameViewProps {
  onBackHome: () => void;
  soundEnabled: boolean;
}

type GameMode = 'ph_hunter' | 'elements_master' | 'equation_clash';

interface PHQuestion {
  color: [number, number, number];
  colorName: string;
  actualPH: number;
  environment: EnvironmentType;
  hint: string;
}

interface ElementQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface EquationQuestion {
  equationWithBlank: string;
  options: string[];
  correct: number;
  explanation: string;
}

const PH_QUESTIONS: PHQuestion[] = [
  { color: [220, 50, 40], colorName: 'Đỏ đậm', actualPH: 2.0, environment: 'acid', hint: 'Màu sắc đặc trưng của nước chanh hoặc giấm ăn với quỳ tím.' },
  { color: [235, 110, 40], colorName: 'Cam sáng', actualPH: 4.0, environment: 'acid', hint: 'Thường thấy ở dung dịch axit yếu hoặc trái cây chua.' },
  { color: [60, 175, 110], colorName: 'Xanh lá cây', actualPH: 7.0, environment: 'neutral', hint: 'Màu của nước cất tinh khiết ở 25°C trên giấy vạn năng.' },
  { color: [30, 150, 160], colorName: 'Xanh mòng két', actualPH: 8.5, environment: 'base', hint: 'Môi trường kiềm nhẹ của dung dịch baking soda.' },
  { color: [110, 30, 140], colorName: 'Tím sẫm', actualPH: 12.0, environment: 'base', hint: 'Dung dịch kiềm mạnh như sodium hydroxide loãng.' },
  { color: [200, 40, 30], colorName: 'Đỏ thẫm', actualPH: 1.0, environment: 'acid', hint: 'Tính axit rất mạnh của dung dịch HCl đậm đặc.' }
];

const ELEMENT_QUESTIONS: ElementQuestion[] = [
  {
    question: 'Nguyên tố kim loại nào có ký hiệu là "Fe", số hiệu nguyên tử 26 và bị nam châm hút?',
    options: ['Đồng (Cu)', 'Sắt (Iron - Fe)', 'Kẽm (Zn)', 'Chì (Pb)'],
    correct: 1,
    explanation: 'Fe là viết tắt từ tiếng Latin Ferrum (Sắt), kim loại dẫn từ mạnh bậc nhất.'
  },
  {
    question: 'Khí nào chiếm khoảng 78% thể tích không khí chúng ta đang hít thở hàng ngày?',
    options: ['Khí Oxy (O₂)', 'Khí Cacbonic (CO₂)', 'Khí Nitơ (Nitrogen - N₂)', 'Khí Hydro (H₂)'],
    correct: 2,
    explanation: 'Nitơ (N₂) chiếm xấp xỉ 78% thể tích bầu khí quyển Trái Đất.'
  },
  {
    question: 'Trong phân tử nước (H₂O), nguyên tố Oxy (O) có hóa trị là bao nhiêu?',
    options: ['Hóa trị I', 'Hóa trị II', 'Hóa trị III', 'Hóa trị IV'],
    correct: 1,
    explanation: 'Quy ước Hydro có hóa trị I, trong H₂O thì Oxy có hóa trị II.'
  },
  {
    question: 'Kim loại nào mềm đến mức có thể dùng dao cắt bơ để cắt lát và phản ứng nổ khi thả vào nước?',
    options: ['Natri (Sodium - Na)', 'Nhôm (Al)', 'Bạc (Ag)', 'Sắt (Fe)'],
    correct: 0,
    explanation: 'Natri (Na) là kim loại kiềm nhóm 1 rất mềm và hoạt động hóa học mãnh liệt.'
  },
  {
    question: 'Phi kim duy nhất ở thể lỏng ở nhiệt độ phòng và có màu nâu đỏ bốc khói là gì?',
    options: ['Clo (Cl₂)', 'Brom (Br₂)', 'Iot (I₂)', 'Lưu huỳnh (S)'],
    correct: 1,
    explanation: 'Brom (Bromine - Br₂) là phi kim duy nhất ở trạng thái lỏng ở điều kiện chuẩn.'
  }
];

const EQUATION_QUESTIONS: EquationQuestion[] = [
  {
    equationWithBlank: '? Fe + 2O₂ → Fe₃O₄',
    options: ['2', '3', '4', '1'],
    correct: 1,
    explanation: '3Fe + 2O₂ → Fe₃O₄. Cần 3 nguyên tử Fe ở vế trái để bằng vế phải.'
  },
  {
    equationWithBlank: '2Al + ? HCl → 2AlCl₃ + 3H₂',
    options: ['2', '4', '6', '3'],
    correct: 2,
    explanation: '2Al + 6HCl → 2AlCl₃ + 3H₂. Có 2 x 3 = 6 nguyên tử Clo ở sản phẩm, nên cần 6 phân tử HCl.'
  },
  {
    equationWithBlank: 'Zn + 2HCl → ZnCl₂ + ? H₂',
    options: ['1', '2', '3', '4'],
    correct: 0,
    explanation: 'Zn + 2HCl → ZnCl₂ + H₂↑. Hệ số của H₂ là 1.'
  },
  {
    equationWithBlank: '? KMnO₄ → K₂MnO₄ + MnO₂ + O₂',
    options: ['1', '2', '3', '4'],
    correct: 1,
    explanation: '2KMnO₄ → K₂MnO₄ + MnO₂ + O₂. Cần 2 phân tử thuốc tím KMnO₄.'
  }
];

export const MiniGameView: React.FC<MiniGameViewProps> = ({ onBackHome, soundEnabled }) => {
  const [mode, setMode] = useState<GameMode>('ph_hunter');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = (newMode: GameMode) => {
    setMode(newMode);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setGameOver(false);
  };

  // PH Hunter handler
  const handleGuessPH = (env: EnvironmentType) => {
    if (isAnswered) return;
    const currentQ = PH_QUESTIONS[currentIndex];
    setSelectedAnswer(env);
    setIsAnswered(true);

    const correct = env === currentQ.environment;
    if (correct) {
      const addedPoints = 10 + streak * 2;
      setScore(score + addedPoints);
      setStreak(streak + 1);
      if (soundEnabled) speakVietnamese('Chính xác tuyệt vời! Bạn phán đoán màu rất chuẩn.');
    } else {
      setStreak(0);
      if (soundEnabled) speakVietnamese('Chưa chính xác rồi. Hãy thử lại ở câu tiếp theo nhé.');
    }
  };

  // Multiple Choice handler (Elements / Equations)
  const handleAnswerChoice = (chosenIdx: number, correctIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(chosenIdx);
    setIsAnswered(true);

    const correct = chosenIdx === correctIdx;
    if (correct) {
      const addedPoints = 15 + streak * 3;
      setScore(score + addedPoints);
      setStreak(streak + 1);
      if (soundEnabled) speakVietnamese('Chính xác! Thêm một câu trả lời xuất sắc.');
    } else {
      setStreak(0);
      if (soundEnabled) speakVietnamese('Chưa chính xác. Đọc lời giải để rút kinh nghiệm nhé.');
    }
  };

  const getQuestionsCount = () => {
    if (mode === 'ph_hunter') return PH_QUESTIONS.length;
    if (mode === 'elements_master') return ELEMENT_QUESTIONS.length;
    return EQUATION_QUESTIONS.length;
  };

  const handleNext = () => {
    const total = getQuestionsCount();
    if (currentIndex + 1 < total) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
      if (soundEnabled) speakVietnamese(`Chúc mừng bạn đã hoàn thành đấu trường với tổng cộng ${score} điểm.`);
    }
  };

  const totalQuestions = getQuestionsCount();

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackHome}
          className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trang chủ</span>
        </button>

        <div className="text-center">
          <h2 className="text-xl font-black text-slate-900 flex items-center justify-center space-x-2">
            <Gamepad2 className="w-6 h-6 text-purple-600 animate-bounce" />
            <span>ĐẤU TRƯỜNG HÓA HỌC</span>
          </h2>
          <p className="text-xs text-slate-500">Học mà chơi – Chinh phục kiến thức KHTN THCS</p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1.5 rounded-2xl font-black text-xs shadow-md">
          ⭐ {score} XP
        </div>
      </div>

      {/* Mode Selection Pills */}
      <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => resetGame('ph_hunter')}
          className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-black transition-all ${
            mode === 'ph_hunter' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-rose-500" />
          <span>Thợ săn pH</span>
        </button>
        <button
          onClick={() => resetGame('elements_master')}
          className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-black transition-all ${
            mode === 'elements_master' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Atom className="w-3.5 h-3.5 text-indigo-500" />
          <span>Vua Nguyên tố</span>
        </button>
        <button
          onClick={() => resetGame('equation_clash')}
          className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-black transition-all ${
            mode === 'equation_clash' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Scale className="w-3.5 h-3.5 text-teal-500" />
          <span>Cân bằng PT</span>
        </button>
      </div>

      {gameOver ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-6 shadow-xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-purple-500/20">
            <Award className="w-12 h-12 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600 px-3 py-1 rounded-full bg-purple-50 border border-purple-200">
              {score >= 50 ? 'Bậc thầy Hóa học KHTN' : 'Nhà giả kim tập sự'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Hoàn thành thử thách!</h3>
            <p className="text-sm text-slate-600">Bạn đã hoàn thành trọn vẹn vòng thi đấu Hóa học.</p>
            <div className="text-4xl font-black text-purple-700 pt-2">
              {score} <span className="text-lg font-bold text-slate-500">điểm thưởng XP</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => resetGame(mode)}
              className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-2xl bg-purple-600 text-white font-extrabold hover:bg-purple-700 shadow-lg shadow-purple-500/20 transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Chơi lại chế độ này</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Câu hỏi {currentIndex + 1} / {totalQuestions}</span>
            <span className="flex items-center space-x-1 text-amber-600">
              <Zap className="w-4 h-4 fill-amber-500" />
              <span>Chuỗi đúng liên tiếp: {streak} 🔥</span>
            </span>
          </div>

          {/* MODE 1: PH HUNTER */}
          {mode === 'ph_hunter' && (() => {
            const currentQ = PH_QUESTIONS[currentIndex];
            return (
              <div className="space-y-6">
                <div className="space-y-3 text-center">
                  <div 
                    className="w-36 h-36 rounded-3xl mx-auto shadow-lg border-4 border-white ring-4 ring-slate-100 transition-transform duration-500 hover:scale-105"
                    style={{ backgroundColor: `rgb(${currentQ.color.join(',')})` }}
                  ></div>
                  <div className="text-sm font-bold text-slate-800">
                    Màu sắc mẫu: <span className="text-indigo-600 font-extrabold">{currentQ.colorName}</span>
                  </div>
                  <p className="text-xs text-slate-500 italic">💡 Gợi ý: {currentQ.hint}</p>
                </div>

                <h3 className="text-center font-extrabold text-slate-900 text-base sm:text-lg">
                  Mẫu màu trên thuộc môi trường hóa học nào?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => handleGuessPH('acid')}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl font-extrabold text-sm border transition-all ${
                      isAnswered
                        ? currentQ.environment === 'acid'
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : selectedAnswer === 'acid'
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-slate-100 text-slate-400'
                        : 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    🍋 ACID (pH &lt; 7)
                  </button>

                  <button
                    onClick={() => handleGuessPH('neutral')}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl font-extrabold text-sm border transition-all ${
                      isAnswered
                        ? currentQ.environment === 'neutral'
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : selectedAnswer === 'neutral'
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-slate-100 text-slate-400'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                    }`}
                  >
                    💧 TRUNG TÍNH (pH = 7)
                  </button>

                  <button
                    onClick={() => handleGuessPH('base')}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl font-extrabold text-sm border transition-all ${
                      isAnswered
                        ? currentQ.environment === 'base'
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : selectedAnswer === 'base'
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-slate-100 text-slate-400'
                        : 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100'
                    }`}
                  >
                    🧼 BASE / KIỀM (pH &gt; 7)
                  </button>
                </div>
              </div>
            );
          })()}

          {/* MODE 2: ELEMENTS MASTER */}
          {mode === 'elements_master' && (() => {
            const currentQ = ELEMENT_QUESTIONS[currentIndex];
            return (
              <div className="space-y-5">
                <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-5 text-center">
                  <Atom className="w-8 h-8 text-indigo-600 mx-auto mb-2 animate-spin" style={{ animationDuration: '10s' }} />
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-relaxed">
                    {currentQ.question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt, idx) => {
                    const isCorrect = idx === currentQ.correct;
                    const isChosen = selectedAnswer === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerChoice(idx, currentQ.correct)}
                        disabled={isAnswered}
                        className={`p-4 rounded-2xl text-left text-sm font-bold border transition-all ${
                          isAnswered
                            ? isCorrect
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                              : isChosen
                              ? 'bg-rose-600 text-white border-rose-600'
                              : 'bg-slate-100 text-slate-400 border-slate-200'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-400 hover:bg-indigo-50/40'
                        }`}
                      >
                        <span className="font-black mr-2">{String.fromCharCode(65 + idx)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* MODE 3: EQUATION CLASH */}
          {mode === 'equation_clash' && (() => {
            const currentQ = EQUATION_QUESTIONS[currentIndex];
            return (
              <div className="space-y-5">
                <div className="bg-slate-900 text-amber-300 font-mono text-xl sm:text-2xl font-black rounded-2xl p-6 text-center shadow-inner">
                  {currentQ.equationWithBlank}
                </div>
                <h3 className="text-center font-extrabold text-slate-900 text-sm sm:text-base">
                  Tìm hệ số thích hợp điền vào dấu hỏi chấm (?) để phương trình được cân bằng:
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentQ.options.map((opt, idx) => {
                    const isCorrect = idx === currentQ.correct;
                    const isChosen = selectedAnswer === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerChoice(idx, currentQ.correct)}
                        disabled={isAnswered}
                        className={`p-4 rounded-2xl text-center text-xl font-black border transition-all ${
                          isAnswered
                            ? isCorrect
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : isChosen
                              ? 'bg-rose-600 text-white border-rose-600'
                              : 'bg-slate-100 text-slate-400'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-teal-400 hover:bg-teal-50'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Feedback & Next Button */}
          {isAnswered && (
            <div className="space-y-4 pt-2">
              <div className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold leading-relaxed ${
                (mode === 'ph_hunter' && selectedAnswer === PH_QUESTIONS[currentIndex].environment) ||
                (mode === 'elements_master' && selectedAnswer === ELEMENT_QUESTIONS[currentIndex].correct) ||
                (mode === 'equation_clash' && selectedAnswer === EQUATION_QUESTIONS[currentIndex].correct)
                  ? 'bg-emerald-100 text-emerald-950'
                  : 'bg-amber-100 text-amber-950'
              }`}>
                {mode === 'ph_hunter' && (
                  <div>
                    {selectedAnswer === PH_QUESTIONS[currentIndex].environment
                      ? '🎉 Chính xác!'
                      : `❌ Đáp án đúng là môi trường ${PH_QUESTIONS[currentIndex].environment.toUpperCase()} (pH thực tế ≈ ${PH_QUESTIONS[currentIndex].actualPH}).`}
                  </div>
                )}
                {mode === 'elements_master' && (
                  <div>
                    <strong>💡 Giải thích: </strong> {ELEMENT_QUESTIONS[currentIndex].explanation}
                  </div>
                )}
                {mode === 'equation_clash' && (
                  <div>
                    <strong>💡 Giải thích: </strong> {EQUATION_QUESTIONS[currentIndex].explanation}
                  </div>
                )}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 shadow-lg transition-all"
              >
                Tiếp tục câu hỏi tiếp theo →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
