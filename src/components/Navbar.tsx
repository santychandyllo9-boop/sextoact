import React from 'react';
import { BookOpen, CheckSquare, Printer, Keyboard, Volume2, VolumeX, Sparkles } from 'lucide-react';

export type ActiveTab = 'quiz' | 'guide' | 'shortcuts' | 'print';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  quizScore?: { scoreGrade: number; total: number; answered: number } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isMuted,
  setIsMuted,
  quizScore
}) => {
  return (
    <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
              <span className="text-lg">6°</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Ofimática Escolar
                </h1>
                <span className="text-slate-300 font-light">|</span>
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                  Grado 6°
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Tecnología e Informática</span>
                <span aria-hidden="true">·</span>
                <span>10 V/F + 5 Selección Múltiple</span>
              </div>
            </div>
          </div>

          {/* Navigation segmented controls */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Taller Interactivo</span>
              {quizScore && quizScore.answered > 0 && (
                <span className="ml-1 text-[11px] px-1.5 py-0.2 font-mono bg-blue-50 text-blue-700 rounded">
                  {quizScore.answered}/15
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'guide'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Guía de Estudio</span>
            </button>

            <button
              onClick={() => setActiveTab('shortcuts')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'shortcuts'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Keyboard className="w-4 h-4" />
              <span>Atajos de Teclado</span>
            </button>

            <button
              onClick={() => setActiveTab('print')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'print'
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Modo Docente e Impresión</span>
            </button>
          </nav>

          {/* Controls: Audio & Quick Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Activar efectos de sonido' : 'Silenciar sonido'}
              aria-label={isMuted ? 'Activar efectos de sonido' : 'Silenciar sonido'}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-blue-600" />}
            </button>

            <button
              onClick={() => setActiveTab('print')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Ficha para Imprimir</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-100 -mx-4 px-4 scrollbar-none">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'quiz' ? 'bg-blue-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Taller (15 Preg.)</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'guide' ? 'bg-blue-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guía de Estudio</span>
          </button>
          <button
            onClick={() => setActiveTab('shortcuts')}
            className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'shortcuts' ? 'bg-blue-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            <Keyboard className="w-3.5 h-3.5" />
            <span>Atajos</span>
          </button>
          <button
            onClick={() => setActiveTab('print')}
            className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'print' ? 'bg-emerald-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir Examen</span>
          </button>
        </div>
      </div>
    </header>
  );
};
