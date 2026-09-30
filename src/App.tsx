/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { StudentQuiz } from './components/StudentQuiz';
import { StudyGuide } from './components/StudyGuide';
import { ShortcutsGuide } from './components/ShortcutsGuide';
import { PrintableTest } from './components/PrintableTest';
import { soundEffects } from './utils/audio';
import { BookOpen, CheckSquare, Keyboard, Printer, School, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('quiz');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<{ scoreGrade: number; total: number; answered: number } | null>(null);

  const handleMuteToggle = (muted: boolean) => {
    setIsMuted(muted);
    soundEffects.setMuted(muted);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMuted={isMuted}
        setIsMuted={handleMuteToggle}
        quizScore={quizScore}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'quiz' && (
          <StudentQuiz
            onScoreUpdate={(score) => setQuizScore(score)}
            onNavigateToGuide={() => setActiveTab('guide')}
          />
        )}

        {activeTab === 'guide' && (
          <StudyGuide />
        )}

        {activeTab === 'shortcuts' && (
          <ShortcutsGuide />
        )}

        {activeTab === 'print' && (
          <PrintableTest />
        )}
      </main>

      {/* Footer (hidden when printing) */}
      <footer className="no-print mt-auto border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <School className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Ofimática Escolar · Grado Sexto (6°)
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span>Currículo de Tecnología e Informática</span>
                  <span aria-hidden="true">·</span>
                  <span>10 Preguntas V/F + 5 Preguntas Selección Múltiple</span>
                </div>
              </div>
            </div>

            {/* Quick footer tab links */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
              <button
                onClick={() => setActiveTab('quiz')}
                className="hover:text-blue-700 transition-colors"
              >
                Cuestionario
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className="hover:text-blue-700 transition-colors"
              >
                Guía Didáctica
              </button>
              <button
                onClick={() => setActiveTab('shortcuts')}
                className="hover:text-blue-700 transition-colors"
              >
                Atajos de Teclado
              </button>
              <button
                onClick={() => setActiveTab('print')}
                className="hover:text-blue-700 transition-colors"
              >
                Formato para Imprimir
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <p>
              Material didáctico pedagógico diseñado con rigor conceptual para docentes y estudiantes de 6° grado.
            </p>
            <p>
              Compatible con Microsoft 365, Google Workspace y LibreOffice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
