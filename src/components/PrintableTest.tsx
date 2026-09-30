import React, { useState } from 'react';
import { Printer, Copy, Check, FileText, CheckCircle2, Sliders, Sparkles, BookOpen } from 'lucide-react';
import { OFIMATICA_QUESTIONS } from '../data/ofimaticaQuestions';

export const PrintableTest: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'student_exam' | 'answer_grid' | 'teacher_key'>('student_exam');
  const [schoolName, setSchoolName] = useState<string>('Institución Educativa Departamental');
  const [teacherName, setTeacherName] = useState<string>('Prof. de Tecnología e Informática');
  const [showSchoolHeaderEditor, setShowSchoolHeaderEditor] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const generateGoogleFormsText = () => {
    let out = `TALLER EVALUATIVO DE OFIMÁTICA - GRADO SEXTO (6°)\n`;
    out += `Área: Tecnología e Informática\n\n`;

    out += `--- PARTE I: 10 PREGUNTAS DE VERDADERO O FALSO ---\n\n`;
    OFIMATICA_QUESTIONS.filter((q) => q.type === 'true_false').forEach((q, idx) => {
      out += `${idx + 1}. ${q.prompt}\n`;
      out += `a) Verdadero ${q.correctAnswer === true ? '[CLAVE CORRECTA]' : ''}\n`;
      out += `b) Falso ${q.correctAnswer === false ? '[CLAVE CORRECTA]' : ''}\n`;
      out += `Retroalimentación: ${q.explanation}\n\n`;
    });

    out += `--- PARTE II: 5 PREGUNTAS DE SELECCIÓN MÚLTIPLE (ABCD) ---\n\n`;
    OFIMATICA_QUESTIONS.filter((q) => q.type === 'multiple_choice').forEach((q, idx) => {
      out += `${idx + 11}. ${q.prompt}\n`;
      q.options?.forEach((opt) => {
        out += `${opt.id}) ${opt.text} ${opt.id === q.correctAnswer ? '[CLAVE CORRECTA]' : ''}\n`;
      });
      out += `Retroalimentación: ${q.explanation}\n\n`;
    });

    return out;
  };

  const generatePlainTextForWord = () => {
    let out = `${schoolName.toUpperCase()}\n`;
    out += `EVALUACIÓN DE OFIMÁTICA - GRADO SEXTO (6°)\n`;
    out += `Docente: ${teacherName}\n`;
    out += `Estudiante: ___________________________________ Fecha: ____________ Calificación: ______/5.0\n\n`;
    out += `INSTRUCCIONES:\nLee cuidadosamente cada enunciado. En la Parte I marca con una X en ( V ) si la afirmación es verdadera o en ( F ) si es falsa. En la Parte II selecciona la opción correcta entre A, B, C o D.\n\n`;

    out += `==============================================\n`;
    out += `PARTE I: VERDADERO O FALSO (10 PREGUNTAS)\n`;
    out += `==============================================\n\n`;

    OFIMATICA_QUESTIONS.filter((q) => q.type === 'true_false').forEach((q) => {
      out += `${q.id}. ${q.prompt}\n`;
      out += `   [   ] VERDADERO       [   ] FALSO\n\n`;
    });

    out += `==============================================\n`;
    out += `PARTE II: SELECCIÓN MÚLTIPLE CON ÚNICA RESPUESTA (5 PREGUNTAS)\n`;
    out += `==============================================\n\n`;

    OFIMATICA_QUESTIONS.filter((q) => q.type === 'multiple_choice').forEach((q) => {
      out += `${q.id}. ${q.prompt}\n`;
      q.options?.forEach((opt) => {
        out += `   ( ${opt.id} ) ${opt.text}\n`;
      });
      out += `\n`;
    });

    return out;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Controls Bar (Not printed) */}
      <div className="no-print mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span>Recursos Didácticos</span>
              <span aria-hidden="true">·</span>
              <span>Uso Docente e Institucional</span>
              <span aria-hidden="true">·</span>
              <span>Grado 6°</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Centro de Impresión y Material Docente
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Genera exámenes listos para fotocopiar, hojas de respuestas para estudiantes y solucionarios con competencias.
            </p>
          </div>

          {/* Print button */}
          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all self-start sm:self-auto"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar en PDF</span>
          </button>
        </div>

        {/* View Segmented Tabs & Actions */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start">
            <button
              onClick={() => setActiveSubTab('student_exam')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeSubTab === 'student_exam'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Examen para Estudiantes
            </button>
            <button
              onClick={() => setActiveSubTab('answer_grid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeSubTab === 'answer_grid'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hoja de Respuestas (Óvalos)
            </button>
            <button
              onClick={() => setActiveSubTab('teacher_key')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeSubTab === 'teacher_key'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solucionario Docente
            </button>
          </div>

          {/* Export tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSchoolHeaderEditor(!showSchoolHeaderEditor)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-slate-500" />
              <span>Editar Membrete</span>
            </button>

            <button
              onClick={() => copyToClipboard(generatePlainTextForWord(), 'word')}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
            >
              {copiedType === 'word' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedType === 'word' ? '¡Copiado!' : 'Copiar para Word'}</span>
            </button>

            <button
              onClick={() => copyToClipboard(generateGoogleFormsText(), 'forms')}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
            >
              {copiedType === 'forms' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedType === 'forms' ? '¡Copiado!' : 'Copiar Google Forms'}</span>
            </button>
          </div>
        </div>

        {/* School Header Editor collapsible */}
        {showSchoolHeaderEditor && (
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nombre de la Institución Educativa:
              </label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nombre del Docente:
              </label>
              <input
                type="text"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* PRINTABLE PAPER DOCUMENT CONTAINER                                       */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-300 p-8 sm:p-12 shadow-sm font-serif print:border-none print:p-0 print:shadow-none">
        
        {/* School Formal Header */}
        <div className="border-2 border-slate-800 p-4 mb-6 rounded-lg text-slate-900">
          <div className="text-center pb-3 border-b border-slate-300">
            <h1 className="text-base sm:text-lg font-black uppercase tracking-wide">
              {schoolName}
            </h1>
            <h2 className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
              Área de Tecnología e Informática · Grado Sexto (6°)
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Taller Evaluativo: Introducción a la Ofimática Escolar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 text-xs">
            <div>
              <strong>Estudiante:</strong> ___________________________________
            </div>
            <div>
              <strong>Fecha:</strong> _______________ <strong>Curso:</strong> 6° ___
            </div>
            <div className="sm:text-right">
              <strong>Calificación:</strong> _________ / 5.0
            </div>
          </div>
        </div>

        {/* View 1: Student Exam (Questions list) */}
        {activeSubTab === 'student_exam' && (
          <div>
            {/* General Instructions */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 mb-6 italic print:bg-white print:border-slate-400">
              <strong>Instrucciones para el estudiante:</strong> Lee con detenimiento cada enunciado antes de responder. En la Parte I marca con una <strong>X</strong> dentro del paréntesis si la afirmación es Verdadera (V) o Falsa (F). En la Parte II selecciona con un círculo o marca la opción correcta entre A, B, C o D.
            </div>

            {/* PARTE I: 10 PREGUNTAS VERDADERO O FALSO */}
            <div className="mb-8">
              <div className="bg-slate-200 text-slate-900 px-3 py-1.5 font-bold text-xs uppercase tracking-wider rounded mb-4 print:bg-slate-100 print:border print:border-slate-400">
                Parte I: Preguntas de Verdadero o Falso (Valor: 3.0 puntos - 0.3 c/u)
              </div>

              <div className="space-y-4">
                {OFIMATICA_QUESTIONS.filter((q) => q.type === 'true_false').map((q) => (
                  <div key={q.id} className="text-xs leading-relaxed flex items-start gap-3 pb-3 border-b border-slate-100 page-break-inside-avoid">
                    <span className="font-bold shrink-0">{q.id}.</span>
                    <div className="flex-1">
                      <p className="text-slate-900 font-medium mb-1.5">{q.prompt}</p>
                      <div className="flex items-center gap-6 font-mono text-xs text-slate-800">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="inline-block w-4 h-4 border border-slate-600 text-center leading-none" />
                          <span>( V ) Verdadero</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="inline-block w-4 h-4 border border-slate-600 text-center leading-none" />
                          <span>( F ) Falso</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PARTE II: 5 PREGUNTAS SELECCIÓN MÚLTIPLE */}
            <div className="page-break-inside-avoid">
              <div className="bg-slate-200 text-slate-900 px-3 py-1.5 font-bold text-xs uppercase tracking-wider rounded mb-4 print:bg-slate-100 print:border print:border-slate-400">
                Parte II: Preguntas de Selección Múltiple con Única Respuesta (Valor: 2.0 puntos - 0.4 c/u)
              </div>

              <div className="space-y-5">
                {OFIMATICA_QUESTIONS.filter((q) => q.type === 'multiple_choice').map((q) => (
                  <div key={q.id} className="text-xs leading-relaxed pb-3 border-b border-slate-100 page-break-inside-avoid">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="font-bold shrink-0">{q.id}.</span>
                      <p className="text-slate-900 font-medium">{q.prompt}</p>
                    </div>

                    <div className="space-y-1.5 ml-5">
                      {q.options?.map((opt) => (
                        <div key={opt.id} className="flex items-start gap-2 text-slate-800">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-slate-500 font-mono font-bold shrink-0 text-[11px]">
                            {opt.id}
                          </span>
                          <span className="pt-0.5">{opt.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature footer for print */}
            <div className="mt-12 pt-8 border-t border-slate-300 flex justify-between text-xs text-slate-600 print-only">
              <div>
                ______________________________________<br />
                Firma del Estudiante
              </div>
              <div className="text-right">
                ______________________________________<br />
                Firma del Docente Evaluador
              </div>
            </div>
          </div>
        )}

        {/* View 2: Answer Grid (Hoja de Respuestas tipo Óvalos) */}
        {activeSubTab === 'answer_grid' && (
          <div>
            <div className="text-center mb-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">
                Cuadernillo de Respuestas - Formato de Óvalos
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Rellena completamente el óvalo correspondiente a la respuesta elegida con lápiz negro No. 2.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Parte 1 */}
              <div className="border border-slate-300 rounded-lg p-4">
                <h4 className="font-bold text-xs uppercase pb-2 mb-3 border-b border-slate-200 text-slate-800">
                  Parte I: Verdadero / Falso
                </h4>
                <div className="space-y-2 text-xs">
                  {OFIMATICA_QUESTIONS.filter((q) => q.type === 'true_false').map((q) => (
                    <div key={q.id} className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="font-bold w-6">{q.id}.</span>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1 font-mono">
                          <span className="w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center font-bold text-[10px]">V</span>
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono">
                          <span className="w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center font-bold text-[10px]">F</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parte 2 */}
              <div className="border border-slate-300 rounded-lg p-4">
                <h4 className="font-bold text-xs uppercase pb-2 mb-3 border-b border-slate-200 text-slate-800">
                  Parte II: Selección Múltiple
                </h4>
                <div className="space-y-2 text-xs">
                  {OFIMATICA_QUESTIONS.filter((q) => q.type === 'multiple_choice').map((q) => (
                    <div key={q.id} className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="font-bold w-6">{q.id}.</span>
                      <div className="flex items-center gap-2">
                        {['A', 'B', 'C', 'D'].map((letter) => (
                          <span key={letter} className="w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center font-mono font-bold text-[10px]">
                            {letter}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 3: Teacher Answer Key (Solucionario con justificación pedagógica y estándares) */}
        {activeSubTab === 'teacher_key' && (
          <div>
            <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-300 mb-6 text-xs">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Solucionario Oficial y Matriz Curricular para el Docente</span>
              </h3>
              <p>
                Guía de corrección con las claves oficiales, justificación conceptual y el estándar del Ministerio de Educación / Currículo de Informática para grado 6°.
              </p>
            </div>

            <div className="space-y-6">
              {OFIMATICA_QUESTIONS.map((q) => {
                const answerText = typeof q.correctAnswer === 'boolean' 
                  ? (q.correctAnswer ? 'VERDADERO (V)' : 'FALSO (F)')
                  : `Opción ${q.correctAnswer}`;

                return (
                  <div key={q.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs page-break-inside-avoid">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Pregunta {q.id} ({q.type === 'true_false' ? 'V/F' : 'ABCD'})</span>
                        <span className="text-slate-400">·</span>
                        <span className="font-semibold text-blue-700">{q.topic}</span>
                      </div>
                      <span className="font-mono font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                        Clave: {answerText}
                      </span>
                    </div>

                    <p className="text-slate-800 font-medium mb-2">
                      {q.prompt}
                    </p>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 mb-2">
                      <strong className="text-slate-900 block mb-1">Justificación Didáctica:</strong>
                      <p className="text-slate-600 leading-relaxed">{q.explanation}</p>
                    </div>

                    <div className="text-[11px] text-slate-500 italic">
                      <strong>Estándar Curricular: </strong>{q.competencyStandard}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
