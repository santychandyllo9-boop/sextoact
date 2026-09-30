export type QuestionType = 'true_false' | 'multiple_choice';

export interface Option {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  topic: 'Conceptos Generales' | 'Procesador de Texto' | 'Hoja de Cálculo' | 'Presentaciones' | 'Atajos y Archivos' | 'Ergonomía y Seguridad';
  prompt: string;
  options?: Option[]; // For multiple choice
  correctAnswer: boolean | 'A' | 'B' | 'C' | 'D'; // boolean for true_false, letter for ABCD
  explanation: string;
  pedagogicalTip: string;
  competencyStandard: string; // Estándar del MEN (Ministerio de Educación / Currículo de Tecnología e Informática Grado 6°)
}

export interface QuizAttempt {
  answers: Record<number, boolean | 'A' | 'B' | 'C' | 'D'>;
  completed: boolean;
  scoreGrade: number; // 1.0 - 5.0 scale
  scorePercentage: number; // 0 - 100%
  correctCount: number;
  totalCount: number;
  timeSpentSeconds: number;
  date: string;
}

export interface StudyCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  keyPoints: string[];
  examples: string[];
  recommendedPrograms: string[];
  shortcutTip?: string;
  iconName: string;
}
