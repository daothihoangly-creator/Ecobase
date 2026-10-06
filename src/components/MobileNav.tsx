import React from 'react';
import { Camera, Layers, Home, Atom, FlaskConical, Scale } from 'lucide-react';
import { AppTab } from '../types';

interface MobileNavProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'home' ? 'text-emerald-700 font-extrabold bg-emerald-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[9px]">Trang chủ</span>
        </button>

        <button
          onClick={() => setActiveTab('camera')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'camera' ? 'text-emerald-700 font-extrabold bg-emerald-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Camera className="w-5 h-5 mb-0.5" />
          <span className="text-[9px]">Đo pH</span>
        </button>

        <button
          onClick={() => setActiveTab('periodic_table')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'periodic_table' ? 'text-indigo-700 font-extrabold bg-indigo-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Atom className="w-5 h-5 mb-0.5" />
          <span className="text-[9px]">Tuần hoàn</span>
        </button>

        <button
          onClick={() => setActiveTab('virtual_lab')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'virtual_lab' ? 'text-amber-700 font-extrabold bg-amber-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <FlaskConical className="w-5 h-5 mb-0.5" />
          <span className="text-[9px]">Thí nghiệm</span>
        </button>

        <button
          onClick={() => setActiveTab('equation_calc')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'equation_calc' ? 'text-teal-700 font-extrabold bg-teal-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Scale className="w-5 h-5 mb-0.5" />
          <span className="text-[9px]">Cân bằng</span>
        </button>

        <button
          onClick={() => setActiveTab('library')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'library' ? 'text-emerald-700 font-extrabold bg-emerald-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span className="text-[9px]">Kho mẫu</span>
        </button>
      </div>
    </div>
  );
};
