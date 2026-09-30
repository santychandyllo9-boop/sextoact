import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Table, 
  Presentation, 
  Keyboard, 
  HeartPulse, 
  Check, 
  AlertTriangle,
  Lightbulb,
  MousePointerClick
} from 'lucide-react';
import { LEARNING_MODULES } from '../data/learningModules';

export const StudyGuide: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>('intro');
  const [selectedCol, setSelectedCol] = useState<string>('C');
  const [selectedRow, setSelectedRow] = useState<number>(7);

  const activeModule = LEARNING_MODULES.find((m) => m.id === activeModuleId) || LEARNING_MODULES[0];

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Table': return <Table className="w-5 h-5" />;
      case 'Presentation': return <Presentation className="w-5 h-5" />;
      case 'Keyboard': return <Keyboard className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
          <span>Material Pedagógico</span>
          <span aria-hidden="true">·</span>
          <span>Educación Básica Secundaria</span>
          <span aria-hidden="true">·</span>
          <span>Grado Sexto (6°)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Guía Integral de Ofimática Escolar
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Aprende los conceptos teóricos, las herramientas clave y las buenas prácticas digitales necesarias para resolver el taller evaluativo con el mejor desempeño.
        </p>
      </div>

      {/* Module Selector Navigation (Segmented buttons) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {LEARNING_MODULES.map((module) => {
          const isActive = module.id === activeModuleId;
          return (
            <button
              key={module.id}
              onClick={() => setActiveModuleId(module.id)}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                isActive
                  ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-600'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {getModuleIcon(module.icon)}
              </div>
              <div>
                <span className={`block text-xs font-bold leading-tight ${isActive ? 'text-blue-900' : 'text-slate-800'}`}>
                  {module.title.split('. ')[1] || module.title}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {module.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Module Detailed View */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <span>{activeModule.badge}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Contenido de Clase 6°</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              {activeModule.title}
            </h3>
          </div>
          <span className="text-xs text-slate-500 italic max-w-xs text-right hidden sm:block">
            "{activeModule.summary}"
          </span>
        </div>

        {/* Definition */}
        <div className="prose prose-slate max-w-none mb-6">
          <p className="text-base text-slate-800 leading-relaxed bg-blue-50/40 p-4 rounded-xl border border-blue-100">
            {activeModule.content.definition}
          </p>
        </div>

        {/* Key Points */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Puntos Clave para Recordar:
          </h4>
          <ul className="space-y-2">
            {activeModule.content.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* School Examples & Grade Six Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Ejemplos en el Colegio:</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {activeModule.content.schoolExamples.map((ex, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200">
            <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-700" />
              <span>Consejo del Profesor (6° Grado):</span>
            </h5>
            <p className="text-xs text-amber-950 leading-relaxed">
              {activeModule.content.tipsForGradeSix}
            </p>
          </div>
        </div>

        {/* Common Mistake Warning */}
        <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-200 flex items-start gap-2.5 text-xs text-rose-900">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Error frecuente en estudiantes de 6°: </strong>
            <span>{activeModule.content.commonMistakes}</span>
          </div>
        </div>
      </div>

      {/* Interactive Pedagogical Widget: Mini Simulador de Hoja de Cálculo (Crucial for Questions 3, 12, 14) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
        <div className="flex items-center justify-between gap-4 pb-3 mb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <span>Laboratorio Visual</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Hojas de Cálculo</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-0.5">
              ¿Cómo se forman las Celdas y las Fórmulas?
            </h4>
          </div>
          <div className="text-xs text-slate-500 hidden sm:flex items-center gap-1">
            <MousePointerClick className="w-4 h-4 text-slate-400" />
            <span>Haz clic en las celdas para interactuar</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          En Excel o Google Sheets, las <strong className="text-slate-800">Columnas</strong> llevan letras (A, B, C, D) y las <strong className="text-slate-800">Filas</strong> llevan números (1, 2, 3...). Haz clic en la cuadrícula para ver cómo se forma la coordenada de la celda y cómo trabaja la fórmula matemática:
        </p>

        {/* Interactive Grid */}
        <div className="border border-slate-300 rounded-xl overflow-hidden bg-slate-50 mb-4">
          {/* Formula bar mockup */}
          <div className="bg-slate-100 px-3 py-2 border-b border-slate-300 flex items-center gap-2 text-xs">
            <span className="font-mono font-bold bg-white px-2 py-0.5 border border-slate-300 rounded text-slate-700">
              {selectedCol}{selectedRow}
            </span>
            <span className="text-slate-400 font-bold">fx</span>
            <span className="font-mono text-emerald-700 bg-white px-2 py-0.5 border border-slate-300 rounded flex-1">
              =SUMA(A1:{selectedCol}{selectedRow})
            </span>
          </div>

          {/* Grid table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center border-collapse">
              <thead>
                <tr className="bg-slate-200 text-slate-700 font-bold">
                  <th className="w-10 py-1.5 border border-slate-300">#</th>
                  {['A', 'B', 'C', 'D', 'E'].map((col) => (
                    <th 
                      key={col} 
                      className={`w-20 py-1.5 border border-slate-300 ${
                        col === selectedCol ? 'bg-emerald-600 text-white' : ''
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
                  <tr key={row}>
                    <td className={`font-bold border border-slate-300 py-1.5 ${
                      row === selectedRow ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {row}
                    </td>
                    {['A', 'B', 'C', 'D', 'E'].map((col) => {
                      const isSelected = col === selectedCol && row === selectedRow;
                      const isColSelected = col === selectedCol;
                      const isRowSelected = row === selectedRow;

                      return (
                        <td
                          key={col + row}
                          onClick={() => {
                            setSelectedCol(col);
                            setSelectedRow(row);
                          }}
                          className={`border border-slate-300 py-1.5 cursor-pointer font-mono transition-colors ${
                            isSelected
                              ? 'bg-emerald-500 text-white font-bold ring-2 ring-emerald-600'
                              : isColSelected || isRowSelected
                                ? 'bg-emerald-50/60 text-emerald-950 font-medium'
                                : 'bg-white hover:bg-slate-100 text-slate-600'
                          }`}
                        >
                          {isSelected ? `${col}${row}` : `${col}${row}`}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Explanation */}
        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
          <div>
            <strong>Celda Activa: {selectedCol}{selectedRow}</strong> (Intersección de Columna {selectedCol} con Fila {selectedRow}).
          </div>
          <span className="text-[11px] text-emerald-700">
            Fórmula siempre inicia con " = "
          </span>
        </div>
      </div>

      {/* Glossary for 6th Grade */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h4 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Mini-Glosario de Ofimática para Grado 6°
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <strong className="block text-slate-900 font-bold mb-1">Celda</strong>
            <p className="text-slate-600">Intersección de una columna y una fila en la hoja de cálculo donde se introducen datos o fórmulas.</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <strong className="block text-slate-900 font-bold mb-1">Diapositiva (Slide)</strong>
            <p className="text-slate-600">Página o lámina visual de una presentación digital que contiene títulos, fotos y animaciones.</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <strong className="block text-slate-900 font-bold mb-1">Portapapeles</strong>
            <p className="text-slate-600">Espacio invisible en la memoria del computador que almacena lo que copiaste con Ctrl+C hasta que lo pegues con Ctrl+V.</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <strong className="block text-slate-900 font-bold mb-1">PDF (.pdf)</strong>
            <p className="text-slate-600">Formato fijo que no se descuadra al enviarlo ni al abrirlo en celulares u otros computadores.</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <strong className="block text-slate-900 font-bold mb-1">Ergonomía</strong>
            <p className="text-slate-600">Estudio de la postura física adecuada para trabajar de forma saludable frente al computador.</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <strong className="block text-slate-900 font-bold mb-1">Fórmula</strong>
            <p className="text-slate-600">Instrucción matemática que siempre inicia con el signo igual (=) para que la hoja de cálculo compute un resultado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
