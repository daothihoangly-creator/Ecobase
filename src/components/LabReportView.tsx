import React, { useState } from 'react';
import { FileText, Printer, Copy, Check, ArrowLeft, Sparkles, BookOpen, Download } from 'lucide-react';
import { Sample } from '../types';

interface LabReportViewProps {
  onBackHome: () => void;
  samples: Sample[];
}

export const LabReportView: React.FC<LabReportViewProps> = ({ onBackHome, samples }) => {
  const [studentName, setStudentName] = useState('Nguyễn Văn An');
  const [studentClass, setStudentClass] = useState('8A1');
  const [schoolName, setSchoolName] = useState('Trường THCS Lê Quý Đôn');
  const [reportTitle, setReportTitle] = useState('Báo cáo thực hành: Khảo sát độ pH và phản ứng trao đổi ion trong dung dịch');
  const [objective, setObjective] = useState('Xác định độ pH của các dung dịch quen thuộc trong đời sống bằng giấy chỉ thị và camera AI; đồng thời quan sát hiện tượng kết tủa và bảo toàn khối lượng.');
  const [equipment, setEquipment] = useState('Ống nghiệm, giấy quỳ tím, nước chanh, giấm ăn, nước rửa bát, dung dịch CuSO4, dung dịch NaOH, đinh sắt sạch, điện thoại có ứng dụng ECO pH.');
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const content = `
# BÁO CÁO THỰC HÀNH KHOA HỌC TỰ NHIÊN (HÓA HỌC THCS)
- **Họ và tên học sinh:** ${studentName}
- **Lớp:** ${studentClass}
- **Trường:** ${schoolName}
- **Tên bài thực hành:** ${reportTitle}

## I. MỤC TIÊU THÍ NGHIỆM
${objective}

## II. DỤNG CỤ VÀ HÓA CHẤT
${equipment}

## III. KẾT QUẢ QUAN SÁT VÀ THỰC NGHIỆM
${samples.length > 0 ? samples.map((s, idx) => `
### Mẫu ${idx + 1}: ${s.name}
- Chỉ thị sử dụng: ${s.indicatorType}
- Giá trị pH ước tính: ${s.estimatedPH}
- Môi trường: ${s.environment.toUpperCase()}
- Màu nhận diện: ${s.detectedColor}
- Ghi chú: ${s.note || 'Không có'}
`).join('\n') : '- Chưa có mẫu đo được ghi nhận.'}

## IV. GIẢI THÍCH HIỆN TƯỢNG VÀ KẾT LUẬN
- Các dung dịch có pH < 7 làm quỳ tím hóa đỏ mang tính acid.
- Các dung dịch có pH > 7 làm quỳ tím hóa xanh mang tính base.
- Ứng dụng công nghệ nhận diện màu quang học AI giúp ước tính pH nhanh chóng, hỗ trợ việc học tập STEM trực quan và sinh động.
`;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackHome}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold">
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tiêu Chuẩn Thực Hành KHTN</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Xuất Báo Cáo Thí Nghiệm STEM
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Biên soạn phiếu thu hoạch thực hành chuẩn định dạng in ấn cho học sinh và giáo viên
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã sao chép!' : 'Sao chép văn bản'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold transition-all shadow-md shadow-indigo-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>In Phiếu Báo Cáo (A4)</span>
          </button>
        </div>
      </div>

      {/* Inputs Form (Hidden on Print) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm print:hidden">
        <h3 className="text-sm font-extrabold text-slate-900">Thông tin bài thu hoạch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-500">Họ và tên học sinh:</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500">Lớp:</label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500">Trường THCS:</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-500">Tên bài thực hành:</label>
          <input
            type="text"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold mt-1"
          />
        </div>
      </div>

      {/* Printable Report Sheet (A4 Style) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg space-y-8 print:p-0 print:border-none print:shadow-none max-w-4xl mx-auto font-serif">
        {/* Header Block */}
        <div className="text-center space-y-2 border-b-2 border-slate-900 pb-6">
          <div className="flex justify-between items-start text-xs font-sans text-slate-600 font-bold uppercase">
            <span>SỞ GD&ĐT / PHÒNG GD&ĐT</span>
            <span>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
          </div>
          <div className="flex justify-between items-start text-xs font-sans text-slate-600 font-bold">
            <span>{schoolName.toUpperCase()}</span>
            <span>Độc lập - Tự do - Hạnh phúc</span>
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-black font-sans text-slate-900 uppercase tracking-tight">
              BÁO CÁO THỰC HÀNH KHOA HỌC TỰ NHIÊN
            </h2>
            <p className="text-base font-bold font-sans text-indigo-700 mt-1">{reportTitle}</p>
          </div>
        </div>

        {/* Student metadata */}
        <div className="grid grid-cols-2 gap-4 text-sm font-sans">
          <div><strong>Họ và tên học sinh:</strong> {studentName}</div>
          <div><strong>Lớp:</strong> {studentClass}</div>
          <div><strong>Ngày thực hiện:</strong> {new Date().toLocaleDateString('vi-VN')}</div>
          <div><strong>Người đánh giá:</strong> Giáo viên bộ môn KHTN</div>
        </div>

        {/* Section 1: Objective */}
        <div className="space-y-2">
          <h3 className="text-base font-black font-sans text-slate-900 uppercase">
            I. Mục tiêu bài học
          </h3>
          <p className="text-sm leading-relaxed text-slate-800 italic">
            {objective}
          </p>
        </div>

        {/* Section 2: Materials */}
        <div className="space-y-2">
          <h3 className="text-base font-black font-sans text-slate-900 uppercase">
            II. Dụng cụ và hóa chất sử dụng
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            {equipment}
          </p>
        </div>

        {/* Section 3: Data Table */}
        <div className="space-y-3">
          <h3 className="text-base font-black font-sans text-slate-900 uppercase">
            III. Kết quả thực nghiệm và bảng số liệu đo
          </h3>

          <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm font-sans">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-300 p-2 text-center w-12">STT</th>
                <th className="border border-slate-300 p-2 text-left">Mẫu thử / Hóa chất</th>
                <th className="border border-slate-300 p-2 text-center">Chất chỉ thị</th>
                <th className="border border-slate-300 p-2 text-center">pH ước tính</th>
                <th className="border border-slate-300 p-2 text-center">Môi trường</th>
                <th className="border border-slate-300 p-2 text-left">Ghi chú & Hiện tượng</th>
              </tr>
            </thead>
            <tbody>
              {samples.slice(0, 6).map((sample, idx) => (
                <tr key={sample.id}>
                  <td className="border border-slate-300 p-2 text-center font-bold">{idx + 1}</td>
                  <td className="border border-slate-300 p-2 font-bold">{sample.name}</td>
                  <td className="border border-slate-300 p-2 text-center">{sample.indicatorType}</td>
                  <td className="border border-slate-300 p-2 text-center font-bold text-indigo-700">{sample.estimatedPH}</td>
                  <td className="border border-slate-300 p-2 text-center uppercase font-semibold">
                    {sample.environment === 'acid' ? 'Acid' : sample.environment === 'base' ? 'Base' : 'Trung tính'}
                  </td>
                  <td className="border border-slate-300 p-2">{sample.note || `Màu nhận diện: ${sample.detectedColor}`}</td>
                </tr>
              ))}
              {samples.length === 0 && (
                <tr>
                  <td colSpan={6} className="border border-slate-300 p-4 text-center text-slate-400 italic">
                    Chưa có mẫu nào được lưu trong kho mẫu. Hãy chụp ảnh mẫu thử để tự động điền vào báo cáo!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Section 4: Conclusions & Signatures */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h3 className="text-base font-black font-sans text-slate-900 uppercase">
            IV. Nhận xét và kết luận
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            Qua thí nghiệm thực tế kết hợp trợ lý nhận diện AI thông minh ECO pH, học sinh đã nắm vững tính chất đổi màu của chất chỉ thị theo thang pH (0 đến 14), phân biệt rõ môi trường acid, trung tính và base trong các dung dịch thường nhật.
          </p>

          <div className="grid grid-cols-2 pt-8 text-center text-sm font-sans font-bold">
            <div>
              <p>GIÁO VIÊN HƯỚNG DẪN</p>
              <p className="text-xs font-normal text-slate-400 italic mt-1">(Ký và ghi rõ họ tên)</p>
            </div>
            <div>
              <p>HỌC SINH THỰC HIỆN</p>
              <p className="text-xs font-normal text-slate-400 italic mt-1">(Ký và ghi rõ họ tên)</p>
              <p className="pt-12 text-slate-800">{studentName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
