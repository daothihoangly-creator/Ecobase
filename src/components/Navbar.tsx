import React, { useState } from 'react';
import { 
  Atom, Volume2, VolumeX, Sparkles, BookOpen, Camera, FlaskConical, 
  Layers, Settings, Gamepad2, Scale, Shield, FileText, ChevronDown 
} from 'lucide-react';
import { AppTab } from '../types';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenAiTutor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  onOpenAiTutor
}) => {
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const isMoreTabActive = ['knowledge', 'experiments', 'minigame', 'lab_report', 'calibration'].includes(activeTab);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Atom className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-700 bg-clip-text text-transparent">ECO pH</span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">KHTN THCS</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Trợ lý Nhận diện pH & Hóa học Thông minh</p>
            </div>
          </div>

          {/* Navigation links for desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'home' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Trang chủ
            </button>

            <button
              onClick={() => setActiveTab('camera')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === 'camera' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>Nhận diện pH</span>
            </button>

            <button
              onClick={() => setActiveTab('periodic_table')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === 'periodic_table' ? 'bg-indigo-50 text-indigo-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Atom className="w-4 h-4 text-indigo-600" />
              <span>Bảng tuần hoàn</span>
            </button>

            <button
              onClick={() => setActiveTab('virtual_lab')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === 'virtual_lab' ? 'bg-amber-50 text-amber-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FlaskConical className="w-4 h-4 text-amber-600" />
              <span>Thí nghiệm ảo</span>
            </button>

            <button
              onClick={() => setActiveTab('equation_calc')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === 'equation_calc' ? 'bg-teal-50 text-teal-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Scale className="w-4 h-4 text-teal-600" />
              <span>Cân bằng & Tính mol</span>
            </button>

            <button
              onClick={() => setActiveTab('reactivity_series')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === 'reactivity_series' ? 'bg-blue-50 text-blue-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Dãy kim loại</span>
            </button>

            <button
              onClick={() => setActiveTab('library')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === 'library' ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4 text-teal-600" />
              <span>Kho mẫu</span>
            </button>

            {/* Dropdown for More Features */}
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
                  isMoreTabActive ? 'bg-purple-50 text-purple-700 font-extrabold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>Mở rộng</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {moreMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in"
                  onMouseLeave={() => setMoreMenuOpen(false)}
                >
                  <button
                    onClick={() => { setActiveTab('knowledge'); setMoreMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Bài học Hóa THCS</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('experiments'); setMoreMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <FlaskConical className="w-4 h-4 text-amber-600" />
                    <span>Thực hành STEM</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('minigame'); setMoreMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <Gamepad2 className="w-4 h-4 text-purple-600" />
                    <span>Đấu trường Minigame</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('lab_report'); setMoreMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                  >
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Xuất báo cáo STEM</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('calibration'); setMoreMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center space-x-2 border-t border-slate-100 mt-1 pt-2"
                  >
                    <Settings className="w-4 h-4 text-slate-500" />
                    <span>Cài đặt & Hiệu chuẩn</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenAiTutor}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black shadow-md shadow-indigo-500/20 hover:opacity-95 transition-opacity"
            >
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
              <span>ECO AI</span>
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Tắt âm thanh đọc" : "Bật âm thanh đọc"}
              className="p-2.5 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
