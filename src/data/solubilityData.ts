import { MetalReactivityItem, SolubilityCell } from '../types';

export const METAL_REACTIVITY_SERIES: MetalReactivityItem[] = [
  {
    symbol: 'K',
    nameVi: 'Kali',
    nameIUPAC: 'Potassium',
    mnemonicWord: 'Khi',
    reactsWithWaterCold: true,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Điện phân nóng chảy',
    note: 'Kim loại kiềm cực mạnh, bốc cháy ngọn lửa tím trên mặt nước lạnh.'
  },
  {
    symbol: 'Na',
    nameVi: 'Natri',
    nameIUPAC: 'Sodium',
    mnemonicWord: 'Nào',
    reactsWithWaterCold: true,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Điện phân nóng chảy',
    note: 'Phản ứng mãnh liệt với nước, vo tròn thành hạt cầu chạy trên mặt nước sinh khí H₂.'
  },
  {
    symbol: 'Ca',
    nameVi: 'Canxi',
    nameIUPAC: 'Calcium',
    mnemonicWord: 'Cần',
    reactsWithWaterCold: true,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Điện phân nóng chảy',
    note: 'Tác dụng chậm với nước lạnh, nhanh với nước ấm tạo Ca(OH)₂ vẩn đục.'
  },
  {
    symbol: 'Mg',
    nameVi: 'Magie',
    nameIUPAC: 'Magnesium',
    mnemonicWord: 'May',
    reactsWithWaterCold: false,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Điện phân nóng chảy',
    note: 'Không tác dụng với nước lạnh (phản ứng rất chậm với nước sôi), cháy sáng chói lòa trong không khí.'
  },
  {
    symbol: 'Al',
    nameVi: 'Nhôm',
    nameIUPAC: 'Aluminium',
    mnemonicWord: 'Áo',
    reactsWithWaterCold: false,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Điện phân nóng chảy Al₂O₃ với criolit',
    note: 'Có màng oxit Al₂O₃ bảo vệ; phản ứng mạnh với dung dịch kiềm tạo aluminat.'
  },
  {
    symbol: 'Zn',
    nameVi: 'Kẽm',
    nameIUPAC: 'Zinc',
    mnemonicWord: 'Giáp',
    reactsWithWaterCold: false,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Nhiệt luyện (C, CO khử)',
    note: 'Đẩy được Fe, Cu, Ag ra khỏi dung dịch muối; sủi bọt mạnh với acid loãng.'
  },
  {
    symbol: 'Fe',
    nameVi: 'Sắt',
    nameIUPAC: 'Iron',
    mnemonicWord: 'Sắt',
    reactsWithWaterCold: false,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Nhiệt luyện trong lò cao',
    note: 'Tác dụng acid HCl, H₂SO₄ loãng tạo muối Fe(II); tác dụng Cl₂ tạo Fe(III).'
  },
  {
    symbol: 'Pb',
    nameVi: 'Chì',
    nameIUPAC: 'Lead',
    mnemonicWord: 'Phải',
    reactsWithWaterCold: false,
    reactsWithAcid: true,
    reactsWithOxygen: true,
    reductionMethod: 'Nhiệt luyện',
    note: 'Đứng ngay trước Hydro trong dãy hoạt động; kim loại nặng mềm độc hại.'
  },
  {
    symbol: 'H',
    nameVi: 'Hiđro',
    nameIUPAC: 'Hydrogen (Mốc so sánh)',
    mnemonicWord: 'Hỏi',
    reactsWithWaterCold: false,
    reactsWithAcid: false,
    reactsWithOxygen: true,
    reductionMethod: '-',
    note: 'Cột mốc quy ước: Kim loại đứng TRƯỚC H đẩy được H ra khỏi dung dịch axit loãng (HCl, H₂SO₄ loãng).'
  },
  {
    symbol: 'Cu',
    nameVi: 'Đồng',
    nameIUPAC: 'Copper',
    mnemonicWord: 'Cửa',
    reactsWithWaterCold: false,
    reactsWithAcid: false,
    reactsWithOxygen: true,
    reductionMethod: 'Thủy luyện, nhiệt luyện',
    note: 'Đứng sau H, KHÔNG tác dụng với acid loãng HCl, H₂SO₄ loãng; dung dịch ion Cu²⁺ có màu xanh lam.'
  },
  {
    symbol: 'Ag',
    nameVi: 'Bạc',
    nameIUPAC: 'Silver',
    mnemonicWord: 'Á',
    reactsWithWaterCold: false,
    reactsWithAcid: false,
    reactsWithOxygen: false,
    reductionMethod: 'Thủy luyện',
    note: 'Kim loại quý, dẫn điện số 1, không bị oxi hóa trong không khí ở nhiệt độ thường.'
  },
  {
    symbol: 'Au',
    nameVi: 'Vàng',
    nameIUPAC: 'Gold',
    mnemonicWord: 'Âu',
    reactsWithWaterCold: false,
    reactsWithAcid: false,
    reactsWithOxygen: false,
    reductionMethod: 'Đãi vàng, phương pháp xianua',
    note: 'Vua của kim loại quý, trơ nhất trong dãy, chỉ tan trong nước cường toan (hỗn hợp HNO₃ và HCl đậm đặc tỉ lệ 1:3).'
  }
];

export const CATIONS = [
  { symbol: 'H⁺', name: 'Hydrogen' },
  { symbol: 'Na⁺', name: 'Sodium' },
  { symbol: 'K⁺', name: 'Potassium' },
  { symbol: 'Ba²⁺', name: 'Barium' },
  { symbol: 'Ca²⁺', name: 'Calcium' },
  { symbol: 'Mg²⁺', name: 'Magnesium' },
  { symbol: 'Al³⁺', name: 'Aluminium' },
  { symbol: 'Zn²⁺', name: 'Zinc' },
  { symbol: 'Fe²⁺', name: 'Iron(II)' },
  { symbol: 'Fe³⁺', name: 'Iron(III)' },
  { symbol: 'Cu²⁺', name: 'Copper(II)' },
  { symbol: 'Ag⁺', name: 'Silver' },
];

export const ANIONS = [
  { symbol: 'OH⁻', name: 'Hydroxide' },
  { symbol: 'Cl⁻', name: 'Chloride' },
  { symbol: 'NO₃⁻', name: 'Nitrate' },
  { symbol: 'SO₄²⁻', name: 'Sulfate' },
  { symbol: 'CO₃²⁻', name: 'Carbonate' },
  { symbol: 'PO₄³⁻', name: 'Phosphate' },
  { symbol: 'S²⁻', name: 'Sulfide' },
];

// Solubility Matrix
export const SOLUBILITY_TABLE: Record<string, Record<string, { status: 'T' | 'K' | 'I' | 'B'; color?: string; note?: string }>> = {
  'H⁺': {
    'OH⁻': { status: 'T', note: 'Nước (H₂O)' },
    'Cl⁻': { status: 'T', note: 'Axit HCl tan vô hạn' },
    'NO₃⁻': { status: 'T', note: 'Axit HNO₃ tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Axit H₂SO₄ tan vô hạn' },
    'CO₃²⁻': { status: 'B', note: 'Phân hủy thành CO₂↑ và H₂O' },
    'PO₄³⁻': { status: 'T', note: 'Axit H₃PO₄ tan' },
    'S²⁻': { status: 'T', note: 'Khí H₂S mùi trứng thối tan trong nước' }
  },
  'Na⁺': {
    'OH⁻': { status: 'T', note: 'Dung dịch kiềm mạnh' },
    'Cl⁻': { status: 'T', note: 'Muối ăn tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Tan tốt' },
    'CO₃²⁻': { status: 'T', note: 'Soda tan tốt' },
    'PO₄³⁻': { status: 'T', note: 'Tan tốt' },
    'S²⁻': { status: 'T', note: 'Tan tốt' }
  },
  'K⁺': {
    'OH⁻': { status: 'T', note: 'Dung dịch kiềm mạnh' },
    'Cl⁻': { status: 'T', note: 'Tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Tan tốt' },
    'CO₃²⁻': { status: 'T', note: 'Tan tốt' },
    'PO₄³⁻': { status: 'T', note: 'Tan tốt' },
    'S²⁻': { status: 'T', note: 'Tan tốt' }
  },
  'Ba²⁺': {
    'OH⁻': { status: 'T', note: 'Dung dịch kiềm mạnh' },
    'Cl⁻': { status: 'T', note: 'Tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng BaSO₄ cực bền' },
    'CO₃²⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng BaCO₃' },
    'PO₄³⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng Ba₃(PO₄)₂' },
    'S²⁻': { status: 'T', note: 'Tan tốt' }
  },
  'Ca²⁺': {
    'OH⁻': { status: 'I', note: 'Ít tan (nước vôi trong)' },
    'Cl⁻': { status: 'T', note: 'Tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'I', color: 'Trắng', note: 'Ít tan (thạch cao)' },
    'CO₃²⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng CaCO₃ (đá vôi)' },
    'PO₄³⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng Ca₃(PO₄)₂ (xương)' },
    'S²⁻': { status: 'B', note: 'Thủy phân' }
  },
  'Mg²⁺': {
    'OH⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng Mg(OH)₂' },
    'Cl⁻': { status: 'T', note: 'Tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Tan tốt' },
    'CO₃²⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng MgCO₃' },
    'PO₄³⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng Mg₃(PO₄)₂' },
    'S²⁻': { status: 'B', note: 'Thủy phân' }
  },
  'Al³⁺': {
    'OH⁻': { status: 'K', color: 'Trắng keo', note: 'Kết tủa keo trắng Al(OH)₃ lưỡng tính' },
    'Cl⁻': { status: 'T', note: 'Tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Tan tốt (phèn chua)' },
    'CO₃²⁻': { status: 'B', note: 'Phân hủy trong nước' },
    'PO₄³⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng AlPO₄' },
    'S²⁻': { status: 'B', note: 'Thủy phân hoàn toàn' }
  },
  'Zn²⁺': {
    'OH⁻': { status: 'K', color: 'Trắng keo', note: 'Kết tủa keo trắng Zn(OH)₂ lưỡng tính' },
    'Cl⁻': { status: 'T', note: 'Tan tốt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Tan tốt' },
    'CO₃²⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng ZnCO₃' },
    'PO₄³⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng Zn₃(PO₄)₂' },
    'S²⁻': { status: 'K', color: 'Trắng', note: 'Kết tủa trắng ZnS' }
  },
  'Fe²⁺': {
    'OH⁻': { status: 'K', color: 'Trắng xanh', note: 'Kết tủa trắng xanh Fe(OH)₂ hóa nâu đỏ ngoài không khí' },
    'Cl⁻': { status: 'T', note: 'Dung dịch màu xanh lục nhạt' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Dung dịch màu xanh lục nhạt' },
    'CO₃²⁻': { status: 'K', color: 'Trắng xám', note: 'Kết tủa FeCO₃' },
    'PO₄³⁻': { status: 'K', color: 'Trắng xanh', note: 'Kết tủa Fe₃(PO₄)₂' },
    'S²⁻': { status: 'K', color: 'Đen', note: 'Kết tủa đen FeS' }
  },
  'Fe³⁺': {
    'OH⁻': { status: 'K', color: 'Nâu đỏ', note: 'Kết tủa màu nâu đỏ Fe(OH)₃ đặc trưng' },
    'Cl⁻': { status: 'T', note: 'Dung dịch màu vàng nâu FeCl₃' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Tan tốt' },
    'CO₃²⁻': { status: 'B', note: 'Bị phân hủy' },
    'PO₄³⁻': { status: 'K', color: 'Vàng nâu', note: 'Kết tủa FePO₄' },
    'S²⁻': { status: 'B', note: 'Bị phân hủy' }
  },
  'Cu²⁺': {
    'OH⁻': { status: 'K', color: 'Xanh lam (xanh lơ)', note: 'Kết tủa xanh lam Cu(OH)₂ đặc trưng' },
    'Cl⁻': { status: 'T', note: 'Dung dịch màu xanh lá mạ / lam' },
    'NO₃⁻': { status: 'T', note: 'Tan tốt' },
    'SO₄²⁻': { status: 'T', note: 'Dung dịch màu xanh lam đặc trưng' },
    'CO₃²⁻': { status: 'B', note: 'Tạo muối kiềm màu xanh' },
    'PO₄³⁻': { status: 'K', color: 'Xanh lam', note: 'Kết tủa Cu₃(PO₄)₂' },
    'S²⁻': { status: 'K', color: 'Đen', note: 'Kết tủa đen CuS không tan trong acid' }
  },
  'Ag⁺': {
    'OH⁻': { status: 'B', color: 'Nâu đen', note: 'Phân hủy ngay thành Ag₂O màu nâu đen' },
    'Cl⁻': { status: 'K', color: 'Trắng vón', note: 'Kết tủa trắng vón AgCl hóa đen ngoài ánh sáng' },
    'NO₃⁻': { status: 'T', note: 'Muối tan tốt tráng gương' },
    'SO₄²⁻': { status: 'I', color: 'Trắng', note: 'Ít tan Ag₂SO₄' },
    'CO₃²⁻': { status: 'K', color: 'Vàng nhạt', note: 'Kết tủa Ag₂CO₃' },
    'PO₄³⁻': { status: 'K', color: 'Vàng', note: 'Kết tủa màu vàng Ag₃PO₄' },
    'S²⁻': { status: 'K', color: 'Đen', note: 'Kết tủa đen tuyền Ag₂S' }
  }
};
