import React from 'react';
import { 
  Camera, Layers, BookOpen, FlaskConical, Settings, Sparkles, Atom, 
  ChevronRight, Gamepad2, ShieldAlert, Scale, Shield, FileText, Zap, Award 
} from 'lucide-react';
import { AppTab } from '../types';

interface HomeProps {
  setActiveTab: (tab: AppTab) => void;
  savedSamplesCount: number;
  onOpenAiTutor: () => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, savedSamplesCount, onOpenAiTutor }) => {
  return (
    <div className="space-y-8 pb-20 md:pb-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-indigo-950 text-white p-6 sm:p-10 shadow-2xl">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-bold">
            <Atom className="w-4 h-4 text-emerald-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Nền Tảng Hóa Học KHTN THCS & STEM Thông Minh</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            ECO pH & HÓA HỌC THCS
          </h1>
          
          <p className="text-base sm:text-lg text-emerald-100 font-medium leading-relaxed">
            Học tập và thực hành Hóa học chuẩn chương trình GDPT: Nhận diện màu pH bằng camera AI, Bảng tuần hoàn tương tác Bohr, Thí nghiệm ống nghiệm ảo và Cân bằng phương trình hóa học.
          </p>

          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('camera')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white text-emerald-950 font-black shadow-lg hover:bg-emerald-50 transition-all hover:scale-105"
            >
              <Camera className="w-5 h-5 text-emerald-600" />
              <span>NHẬN DIỆN MÀU pH</span>
            </button>

            <button
              onClick={() => setActiveTab('virtual_lab')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <FlaskConical className="w-5 h-5 text-white" />
              <span>PHÒNG THÍ NGHIỆM ẢO</span>
            </button>

            <button
              onClick={onOpenAiTutor}
              className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/25 transition-all"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Hỏi đáp ECO AI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Curriculum Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div 
          onClick={() => setActiveTab('periodic_table')}
          className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-indigo-400 cursor-pointer transition-all shadow-2xs hover:shadow-sm flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black shrink-0">
            <Atom className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">KHTN 7</div>
            <div className="text-xs font-black text-slate-900">Bảng Tuần Hoàn</div>
          </div>
        </div>

        <div 
          onClick={() => setActiveTab('virtual_lab')}
          className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-amber-400 cursor-pointer transition-all shadow-2xs hover:shadow-sm flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">KHTN 8</div>
            <div className="text-xs font-black text-slate-900">Phản Ứng Ống Nghiệm</div>
          </div>
        </div>

        <div 
          onClick={() => setActiveTab('equation_calc')}
          className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-teal-400 cursor-pointer transition-all shadow-2xs hover:shadow-sm flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">KHTN 8 - 9</div>
            <div className="text-xs font-black text-slate-900">Cân Bằng & Tính Mol</div>
          </div>
        </div>

        <div 
          onClick={() => setActiveTab('reactivity_series')}
          className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-400 cursor-pointer transition-all shadow-2xs hover:shadow-sm flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">KHTN 9</div>
            <div className="text-xs font-black text-slate-900">Dãy Kim Loại & Tính Tan</div>
          </div>
        </div>
      </div>

      {/* Main Functions Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center justify-between">
          <span>Hệ thống chức năng Hóa học THCS</span>
          <span className="text-xs font-bold text-slate-500">Chuẩn GDPT 2018</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. Nhận diện pH */}
          <div 
            onClick={() => setActiveTab('camera')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">1. Nhận diện pH quang học</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">AI</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chụp ảnh giấy chỉ thị màu hoặc dung dịch, tự động phân tích RGB/LAB, ước tính pH và phát âm kết quả bằng tiếng Việt.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
              <span>Mở camera đo ngay</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 2. Bảng tuần hoàn nguyên tố */}
          <div 
            onClick={() => setActiveTab('periodic_table')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Atom className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">2. Bảng tuần hoàn & Mô hình Bohr</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">KHTN 7</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Khám phá nguyên tử, cấu hình electron động chuyển động theo quỹ đạo Bohr, hóa trị, khối lượng nguyên tử và ứng dụng đời sống.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
              <span>Khám phá nguyên tố</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 3. Thí nghiệm phản ứng ảo */}
          <div 
            onClick={() => setActiveTab('virtual_lab')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">3. Phòng thí nghiệm ảo 3D</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">KHTN 8-9</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mô phỏng ống nghiệm sinh động: bọt khí bay lên, kết tủa lắng xuống, đổi màu dung dịch, gia nhiệt đèn cồn và giải thích hiện tượng.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
              <span>Vào phòng thí nghiệm</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 4. Cân bằng phương trình & Máy tính Mol */}
          <div 
            onClick={() => setActiveTab('equation_calc')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">4. Cân bằng PT & Máy tính Mol</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">Công cụ</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Định luật bảo toàn nguyên tử, tính số mol n = m/M, khí V = n × 24.79 (chuẩn SGK mới), nồng độ phần trăm C% và nồng độ mol CM.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-teal-600 group-hover:translate-x-1 transition-transform">
              <span>Tính toán ngay</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 5. Dãy kim loại & Bảng tính tan */}
          <div 
            onClick={() => setActiveTab('reactivity_series')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">5. Dãy kim loại & Bảng tính tan</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">KHTN 8-9</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Học thuộc mẹo câu vè dãy kim loại, thử phản ứng đẩy kim loại trong muối và tra cứu bảng tính tan muối - axit - base trực quan.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
              <span>Tra cứu & Thử nghiệm</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 6. Đấu trường Minigame */}
          <div 
            onClick={() => setActiveTab('minigame')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">6. Đấu trường Hóa học</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">Gamification</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chinh phục 3 chế độ: Thợ săn màu pH, Vua nguyên tố & Hóa trị, và Chiến hạm cân bằng phương trình tích lũy điểm thưởng XP.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-purple-600 group-hover:translate-x-1 transition-transform">
              <span>Vào đấu trường chơi</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 7. Xuất Báo cáo STEM */}
          <div 
            onClick={() => setActiveTab('lab_report')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">7. Báo cáo thực hành STEM</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tự động tổng hợp dữ liệu đo và thực hành thành phiếu thu hoạch chuẩn định dạng in ấn A4 cho giáo viên và học sinh.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
              <span>Tạo báo cáo A4</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 8. Kho mẫu thử */}
          <div 
            onClick={() => setActiveTab('library')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">8. Kho mẫu thử</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-bold">{savedSamplesCount} mẫu</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lưu trữ lịch sử mẫu đo, ghi chú phân tích, so sánh màu sắc quang phổ và xuất tệp dữ liệu CSV/JSON.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-teal-600 group-hover:translate-x-1 transition-transform">
              <span>Xem kho mẫu</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* 9. Thư viện kiến thức */}
          <div 
            onClick={() => setActiveTab('knowledge')}
            className="group relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">9. Khám phá kiến thức KHTN</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                12 bài học Hóa học THCS chuẩn danh pháp IUPAC, tìm hiểu chất chỉ thị tự nhiên, thang pH và làm bài kiểm tra quiz.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
              <span>Đọc bài học</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
