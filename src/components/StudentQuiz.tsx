import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  BookOpen, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  FileCheck
} from 'lucide-react';
import { Question } from '../types/quiz';
import { OFIMATICA_QUESTIONS, TOPIC_COLORS } from '../data/ofimaticaQuestions';
import { soundEffects } from '../utils/audio';

interface StudentQuizProps {
  onScoreUpdate?: (score: { scoreGrade: number; total: number; answered: number }) => void;
  onNavigateToGuide?: () => void;
}

export const StudentQuiz: React.FC<StudentQuizProps> = ({ onScoreUpdate, onNavigateToGuide }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean | 'A' | 'B' | 'C' | 'D'>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<number, boolean>>({});
  const [filterType, setFilterType] = useState<'all' | 'true_false' | 'multiple_choice'>('all');
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');

  const filteredQuestions = OFIMATICA_QUESTIONS.filter((q) => {
    if (filterType === 'true_false') return q.type === 'true_false';
    if (filterType === 'multiple_choice') return q.type === 'multiple_choice';
    return true;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];
  const totalQuestions = OFIMATICA_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;

  // Calculate score
  let correctCount = 0;
  OFIMATICA_QUESTIONS.forEach((q) => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount += 1;
    }
  });

  // Calculate Grade in 1.0 to 5.0 scale
  // 0 correct = 1.0; 15 correct = 5.0
  const scoreGrade = answeredCount > 0 ? Number((1.0 + (correctCount / totalQuestions) * 4.0).toFixed(1)) : 1.0;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  // Performance category according to Colombian educational decree 1290 (widely used in Latin America)
  let performanceLevel = 'Bajo';
  let performanceColor = 'text-rose-600 bg-rose-50 border-rose-200';
  let performanceFeedback = 'Es momento de repasar la guía teórica para aclarar conceptos sobre hojas de cálculo, atajos y procesadores.';

  if (scoreGrade >= 4.6) {
    performanceLevel = 'Superior';
    performanceColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    performanceFeedback = '¡Extraordinario dominio de la ofimática! Comprendes con total claridad los conceptos de procesadores, celdas, presentaciones y buenas prácticas digitales.';
  } else if (scoreGrade >= 4.0) {
    performanceLevel = 'Alto';
    performanceColor = 'text-blue-700 bg-blue-50 border-blue-200';
    performanceFeedback = '¡Muy buen trabajo! Tienes bases muy sólidas de ofimática para grado 6°. Solo necesitas afinar un par de detalles en atajos o fórmulas.';
  } else if (scoreGrade >= 3.0) {
    performanceLevel = 'Básico';
    performanceColor = 'text-amber-700 bg-amber-50 border-amber-200';
    performanceFeedback = 'Has alcanzado los aprendizajes básicos. Te recomendamos revisar las preguntas falladas y leer la guía de estudio para subir a nivel Alto.';
  }

  const handleSelectAnswer = (questionId: number, answer: boolean | 'A' | 'B' | 'C' | 'D') => {
    const isAlreadyAnswered = userAnswers[questionId] !== undefined;
    const isCorrect = answer === currentQuestion.correctAnswer;

    const nextAnswers = {
      ...userAnswers,
      [questionId]: answer
    };
    setUserAnswers(nextAnswers);
    setRevealedExplanations((prev) => ({ ...prev, [questionId]: true }));

    // Sound feedback
    if (!isAlreadyAnswered) {
      if (isCorrect) {
        soundEffects.playCorrect();
      } else {
        soundEffects.playIncorrect();
      }
    }

    // Trigger score update callback
    if (onScoreUpdate) {
      const nextAnsweredCount = Object.keys(nextAnswers).length;
      let nextCorrect = 0;
      OFIMATICA_QUESTIONS.forEach((q) => {
        if (nextAnswers[q.id] === q.correctAnswer) nextCorrect += 1;
      });
      const nextGrade = Number((1.0 + (nextCorrect / totalQuestions) * 4.0).toFixed(1));
      onScoreUpdate({ scoreGrade: nextGrade, total: totalQuestions, answered: nextAnsweredCount });
    }

    // If user just finished all questions, trigger celebration!
    if (Object.keys(nextAnswers).length === totalQuestions) {
      setTimeout(() => {
        soundEffects.playFanfare();
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 350);
    }
  };

  const handleResetQuiz = () => {
    if (window.confirm('¿Deseas reiniciar el taller y volver a responder todas las preguntas?')) {
      setUserAnswers({});
      setRevealedExplanations({});
      setCurrentQuestionIndex(0);
      setShowSummaryModal(false);
      if (onScoreUpdate) {
        onScoreUpdate({ scoreGrade: 1.0, total: totalQuestions, answered: 0 });
      }
    }
  };

  const isCurrentAnswered = userAnswers[currentQuestion.id] !== undefined;
  const isCurrentCorrect = userAnswers[currentQuestion.id] === currentQuestion.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Intro Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span>Grado 6° de Secundaria / Básica</span>
              <span aria-hidden="true">·</span>
              <span>Área: Tecnología e Informática</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Taller Evaluativo de Ofimática
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              10 preguntas de Verdadero/Falso y 5 de Selección Múltiple diseñadas para poner a prueba tus habilidades digitales.
            </p>
          </div>

          {/* Quick Score indicator */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm self-start sm:self-auto">
            <div className="text-right">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Calificación Escolar
              </span>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-2xl font-black text-blue-600 font-mono">
                  {answeredCount === 0 ? '--' : scoreGrade.toFixed(1)}
                </span>
                <span className="text-xs text-slate-400 font-mono">/ 5.0</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-left">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Aciertos
              </span>
              <span className="text-sm font-bold text-slate-800 font-mono">
                {correctCount} / {answeredCount}
              </span>
            </div>
          </div>
        </div>

        {/* Filter controls & Progress */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start">
            <button
              onClick={() => { setFilterType('all'); setCurrentQuestionIndex(0); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filterType === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas (15)
            </button>
            <button
              onClick={() => { setFilterType('true_false'); setCurrentQuestionIndex(0); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filterType === 'true_false' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              10 Verdadero / Falso
            </button>
            <button
              onClick={() => { setFilterType('multiple_choice'); setCurrentQuestionIndex(0); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filterType === 'multiple_choice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              5 Selección Múltiple (ABCD)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">
              Progreso general: <strong className="text-slate-700">{answeredCount} de {totalQuestions}</strong>
            </span>
            <div className="w-28 sm:w-36 bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
            {answeredCount === totalQuestions && (
              <button
                onClick={() => setShowSummaryModal(true)}
                className="text-xs font-semibold text-blue-700 hover:text-blue-800 underline ml-2"
              >
                Ver Informe
              </button>
            )}
          </div>
        </div>

        {/* Question Selector Navigator */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {filteredQuestions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isCorrect = userAnswers[q.id] === q.correctAnswer;
            const isCurrent = idx === currentQuestionIndex;

            let btnStyle = 'bg-white border-slate-300 text-slate-700 hover:border-blue-400';
            if (isCurrent) {
              btnStyle = 'ring-2 ring-blue-600 border-blue-600 text-blue-700 font-bold';
            } else if (isAnswered) {
              btnStyle = isCorrect
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold'
                : 'bg-rose-50 border-rose-300 text-rose-800 font-semibold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-9 h-9 text-xs rounded-lg border flex flex-col items-center justify-center transition-all ${btnStyle}`}
                title={`Pregunta ${q.id} (${q.type === 'true_false' ? 'V/F' : 'A-B-C-D'})`}
              >
                <span>{q.id}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 relative">
        {/* Topic and Standard indicator */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Pregunta {currentQuestion.id} de 15
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs font-medium text-slate-700">
              {currentQuestion.type === 'true_false' ? 'Verdadero o Falso' : 'Selección Múltiple (A, B, C, D)'}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-blue-600">
              {currentQuestion.topic}
            </span>
          </div>

          <span className="text-xs text-slate-400 hidden sm:inline">
            Grado 6° · Competencia Digital
          </span>
        </div>

        {/* Question Prompt */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
          {currentQuestion.prompt}
        </h3>

        {/* Options / Action area */}
        {currentQuestion.type === 'true_false' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Verdadero */}
            <button
              onClick={() => handleSelectAnswer(currentQuestion.id, true)}
              className={`p-4 rounded-xl border-2 text-left font-medium flex items-center justify-between transition-all ${
                userAnswers[currentQuestion.id] === true
                  ? currentQuestion.correctAnswer === true
                    ? 'border-emerald-500 bg-emerald-50/70 text-emerald-900 shadow-sm'
                    : 'border-rose-400 bg-rose-50/70 text-rose-900 shadow-sm'
                  : isCurrentAnswered && currentQuestion.correctAnswer === true
                    ? 'border-emerald-300 bg-emerald-50/30 text-emerald-800'
                    : 'border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/30 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                  userAnswers[currentQuestion.id] === true
                    ? currentQuestion.correctAnswer === true
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  V
                </div>
                <div>
                  <span className="block font-bold text-base">Verdadero</span>
                  <span className="text-xs text-slate-500 font-normal">La afirmación es correcta</span>
                </div>
              </div>

              {isCurrentAnswered && (
                currentQuestion.correctAnswer === true ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : userAnswers[currentQuestion.id] === true ? (
                  <XCircle className="w-5 h-5 text-rose-500" />
                ) : null
              )}
            </button>

            {/* Falso */}
            <button
              onClick={() => handleSelectAnswer(currentQuestion.id, false)}
              className={`p-4 rounded-xl border-2 text-left font-medium flex items-center justify-between transition-all ${
                userAnswers[currentQuestion.id] === false
                  ? currentQuestion.correctAnswer === false
                    ? 'border-emerald-500 bg-emerald-50/70 text-emerald-900 shadow-sm'
                    : 'border-rose-400 bg-rose-50/70 text-rose-900 shadow-sm'
                  : isCurrentAnswered && currentQuestion.correctAnswer === false
                    ? 'border-emerald-300 bg-emerald-50/30 text-emerald-800'
                    : 'border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/30 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                  userAnswers[currentQuestion.id] === false
                    ? currentQuestion.correctAnswer === false
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  F
                </div>
                <div>
                  <span className="block font-bold text-base">Falso</span>
                  <span className="text-xs text-slate-500 font-normal">La afirmación es incorrecta</span>
                </div>
              </div>

              {isCurrentAnswered && (
                currentQuestion.correctAnswer === false ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : userAnswers[currentQuestion.id] === false ? (
                  <XCircle className="w-5 h-5 text-rose-500" />
                ) : null
              )}
            </button>
          </div>
        ) : (
          /* Multiple Choice options (A, B, C, D) */
          <div className="space-y-3 mb-6">
            {currentQuestion.options?.map((option) => {
              const isSelected = userAnswers[currentQuestion.id] === option.id;
              const isOptionCorrect = currentQuestion.correctAnswer === option.id;

              let cardClasses = 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/20 text-slate-800';
              if (isSelected) {
                cardClasses = isOptionCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium shadow-sm'
                  : 'border-rose-400 bg-rose-50 text-rose-950 shadow-sm';
              } else if (isCurrentAnswered && isOptionCorrect) {
                cardClasses = 'border-emerald-400 bg-emerald-50/40 text-emerald-900 font-medium';
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectAnswer(currentQuestion.id, option.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left flex items-start gap-3 transition-all ${cardClasses}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                    isSelected
                      ? isOptionCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : isCurrentAnswered && isOptionCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                  }`}>
                    {option.id}
                  </span>
                  <span className="flex-1 text-sm sm:text-base leading-relaxed">
                    {option.text}
                  </span>
                  {isSelected && (
                    isOptionCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )
                  )}
                  {!isSelected && isCurrentAnswered && isOptionCorrect && (
                    <span className="text-xs text-emerald-700 font-semibold shrink-0 mt-1">
                      Respuesta Correcta
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Pedagogical Explanation Card */}
        {isCurrentAnswered && revealedExplanations[currentQuestion.id] && (
          <div className="mt-6 pt-5 border-t border-slate-200">
            <div className={`p-4 sm:p-5 rounded-xl border ${
              isCurrentCorrect
                ? 'bg-emerald-50/60 border-emerald-200'
                : 'bg-amber-50/60 border-amber-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {isCurrentCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                )}
                <span className={`font-bold text-sm ${isCurrentCorrect ? 'text-emerald-900' : 'text-amber-900'}`}>
                  {isCurrentCorrect ? '¡Excelente respuesta!' : 'Explicación Pedagógica:'}
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {currentQuestion.explanation}
              </p>

              <div className="flex items-start gap-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-slate-700">Consejo para 6° grado: </strong>
                  {currentQuestion.pedagogicalTip}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation bottom bar */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <div className="flex items-center gap-2">
            {answeredCount === totalQuestions && (
              <button
                onClick={() => setShowSummaryModal(true)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all"
              >
                <Award className="w-4 h-4" />
                <span>Ver Informe Final</span>
              </button>
            )}

            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
              disabled={currentQuestionIndex === filteredQuestions.length - 1}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors shadow-sm"
            >
              <span>Siguiente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Study Banner / Hint */}
      <div className="mt-8 p-4 bg-slate-100/80 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-600">
            ¿Tienes dudas con las definiciones o atajos? Puedes consultar la <strong>Guía de Aprendizaje</strong> con ejemplos reales para grado sexto.
          </p>
        </div>
        {onNavigateToGuide && (
          <button
            onClick={onNavigateToGuide}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 whitespace-nowrap flex items-center gap-1"
          >
            <span>Ver Guía Teórica</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* SUMMARY MODAL: Boletín Escolar de Evaluación */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="text-center pb-4 border-b border-slate-100">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Boletín de Desempeño
              </h3>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-1">
                <span>Taller de Ofimática</span>
                <span aria-hidden="true">·</span>
                <span>Grado 6°</span>
              </div>
            </div>

            {/* Scorecard metrics */}
            <div className="my-6 grid grid-cols-2 gap-3 text-center">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="block text-xs uppercase font-bold text-slate-500 mb-1">
                  Nota Final (1.0 - 5.0)
                </span>
                <span className="text-3xl font-black text-blue-600 font-mono">
                  {scoreGrade.toFixed(1)}
                </span>
                <span className={`block text-xs font-bold mt-1 px-2 py-0.5 rounded-md border ${performanceColor}`}>
                  Desempeño {performanceLevel}
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="block text-xs uppercase font-bold text-slate-500 mb-1">
                  Aciertos Totales
                </span>
                <span className="text-3xl font-black text-slate-800 font-mono">
                  {correctCount} <span className="text-base font-normal text-slate-400">/ 15</span>
                </span>
                <span className="block text-xs text-slate-500 font-mono mt-1">
                  {scorePercentage}% de efectividad
                </span>
              </div>
            </div>

            {/* Student Name for Certificate / Teacher submission */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nombre del Estudiante (opcional):
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Escribe tu nombre y curso (ej. Sofía Ramírez - 6°A)"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sub-breakdown: V/F and Multiple Choice */}
            <div className="space-y-2 mb-6 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center">
                <span>10 Preguntas de Verdadero/Falso:</span>
                <strong className="text-slate-900 font-mono">
                  {OFIMATICA_QUESTIONS.filter((q) => q.type === 'true_false' && userAnswers[q.id] === q.correctAnswer).length} de 10 aciertos
                </strong>
              </div>
              <div className="flex justify-between items-center">
                <span>5 Preguntas de Selección Múltiple (ABCD):</span>
                <strong className="text-slate-900 font-mono">
                  {OFIMATICA_QUESTIONS.filter((q) => q.type === 'multiple_choice' && userAnswers[q.id] === q.correctAnswer).length} de 5 aciertos
                </strong>
              </div>
              <div className="pt-2 border-t border-slate-200 text-slate-700 leading-relaxed italic">
                "{performanceFeedback}"
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={() => setShowSummaryModal(false)}
                className="w-full sm:w-1/2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Revisar Respuestas
              </button>
              <button
                onClick={handleResetQuiz}
                className="w-full sm:w-1/2 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reintentar Taller</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
