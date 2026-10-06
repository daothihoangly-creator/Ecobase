export type EnvironmentType = 'acid' | 'neutral' | 'base';

export type IndicatorType = 
  | 'universal' 
  | 'litmus' 
  | 'phenolphthalein' 
  | 'methyl_orange' 
  | 'homemade';

export interface Sample {
  id: string;
  name: string;
  image: string;
  indicatorType: IndicatorType;
  estimatedPH: number;
  environment: EnvironmentType;
  detectedColor: string;
  rgb: [number, number, number];
  hsv: [number, number, number];
  lab: [number, number, number];
  confidence: number;
  timestamp: number;
  note: string;
}

export interface CalibrationColor {
  id: string;
  indicatorType: IndicatorType;
  pH: number;
  rgb: [number, number, number];
  hsv: [number, number, number];
  lab: [number, number, number];
  image?: string;
  timestamp: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readingTime: string;
  content: string;
  image: string;
  iupacTerms: { term: string; common: string; formula: string; description: string }[];
  quiz: QuizQuestion;
}

export interface ExperimentTask {
  id: string;
  title: string;
  objective: string;
  indicatorType: IndicatorType;
  suggestedMaterial: string;
  expectedPH: string;
  expectedEnvironment: EnvironmentType;
  steps: string[];
  completed: boolean;
  userSampleId?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

// Bảng tuần hoàn nguyên tố Hóa học THCS (KHTN 7)
export interface ChemicalElement {
  number: number;
  symbol: string;
  nameVi: string;
  nameIUPAC: string;
  atomicMass: number;
  group: number;
  period: number;
  category: 'alkali' | 'alkaline_earth' | 'transition' | 'post_transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble_gas';
  electronConfig: string;
  electronShells: number[];
  commonValences: string;
  state: 'solid' | 'liquid' | 'gas';
  appearance: string;
  realLifeUse: string;
  funFact: string;
  badgeColor: string;
}

// Phản ứng thí nghiệm ảo THCS (KHTN 8 - 9)
export interface VirtualReaction {
  id: string;
  title: string;
  grade: 'KHTN 8' | 'KHTN 9';
  category: 'acid_base' | 'metal' | 'precipitate' | 'gas' | 'combustion';
  reactants: string[];
  products: string[];
  equationMath: string;
  description: string;
  phenomenon: string;
  animationType: 'precipitate_blue' | 'precipitate_white' | 'precipitate_brown' | 'bubbles_gas' | 'flame_bright' | 'color_clear' | 'metal_coating';
  solutionColorBefore: string;
  solutionColorAfter: string;
  addedReagentColor: string;
  requiresHeat?: boolean;
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
}

// Dãy hoạt động kim loại & Bảng tính tan
export interface MetalReactivityItem {
  symbol: string;
  nameVi: string;
  nameIUPAC: string;
  mnemonicWord: string;
  reactsWithWaterCold: boolean;
  reactsWithAcid: boolean;
  reactsWithOxygen: boolean;
  reductionMethod: string;
  note: string;
}

export type SolubilityStatus = 'T' | 'K' | 'I' | 'B' | '-';

export interface SolubilityCell {
  cation: string;
  anion: string;
  status: SolubilityStatus;
  compoundName: string;
  formula: string;
  precipitateColor?: string;
}

export type AppTab = 
  | 'home' 
  | 'camera' 
  | 'result' 
  | 'library' 
  | 'knowledge' 
  | 'experiments' 
  | 'virtual_lab'
  | 'periodic_table'
  | 'equation_calc'
  | 'reactivity_series'
  | 'calibration' 
  | 'minigame' 
  | 'lab_report'
  | 'teacher';
