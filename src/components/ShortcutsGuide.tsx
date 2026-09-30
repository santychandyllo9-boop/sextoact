import React, { useState } from 'react';
import { Keyboard, Copy, Scissors, ClipboardPaste, Undo2, Save, CheckSquare, Printer, Sparkles, Check } from 'lucide-react';
import { KEYBOARD_SHORTCUTS } from '../data/learningModules';

export const ShortcutsGuide: React.FC = () => {
  const [demoText, setDemoText] = useState<string>('La ofimática nos ayuda a estudiar mejor.');
  const [clipboard, setClipboard] = useState<string>('');
  const [history, setHistory] = useState<string[]>(['La ofimática nos ayuda a estudiar mejor.']);
  const [activeMessage, setActiveMessage] = useState<string>('');

  const triggerFeedback = (msg: string) => {
    setActiveMessage(msg);
    setTimeout(() => setActiveMessage(''), 2500);
  };

  const handleCopy = () => {
    setClipboard(demoText);
    triggerFeedback('¡Texto copiado al portapapeles con éxito! (Simulando Ctrl + C)');
  };

  const handleCut = () => {
    setClipboard(demoText);
    setHistory((prev) => [...prev, demoText]);
    setDemoText('');
    triggerFeedback('¡Texto cortado! Se movió al portapapeles. (Simulando Ctrl + X)');
  };

  const handlePaste = () => {
    if (!clipboard) {
      triggerFeedback('El portapapeles está vacío. Primero copia o corta algo.');
      return;
    }
    setHistory((prev) => [...prev, demoText]);
    setDemoText((prev) => (prev ? prev + ' ' + clipboard : clipboard));
    triggerFeedback('¡Texto pegado correctamente! (Simulando Ctrl + V)');
  };

  const handleUndo = () => {
    if (history.length <= 1) {
      triggerFeedback('No hay más acciones previas para deshacer.');
      return;
    }
    const previous = history[history.length - 1];
    setHistory((prev) => prev.slice(0, prev.length - 1));
    setDemoText(previous);
    triggerFeedback('¡Deshecho el último cambio! (Simulando Ctrl + Z)');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
          <span>Habilidad Digital</span>
          <span aria-hidden="true">·</span>
          <span>Comandos Rápidos</span>
          <span aria-hidden="true">·</span>
          <span>Grado 6°</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Laboratorio de Atajos de Teclado
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Los atajos de teclado te permiten realizar acciones en menos de un segundo. ¡Practica aquí la tríada Copiar, Cortar, Pegar y el salvador Deshacer!
        </p>
      </div>

      {/* Interactive Simulator Sandbox */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
        <div className="flex items-center justify-between gap-4 pb-3 mb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">
              Simulador Práctico en Vivo
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Prueba los atajos en este documento de muestra
            </h3>
          </div>
          {activeMessage && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 animate-pulse">
              {activeMessage}
            </span>
          )}
        </div>

        {/* Text editor box */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Área de texto de práctica:
          </label>
          <textarea
            value={demoText}
            onChange={(e) => {
              setHistory((prev) => [...prev, demoText]);
              setDemoText(e.target.value);
            }}
            rows={3}
            className="w-full p-3 text-sm text-slate-800 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            placeholder="Escribe algo aquí para probar los atajos..."
          />
        </div>

        {/* Action buttons simulating shortcut execution */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
          >
            <Copy className="w-4 h-4 text-blue-600" />
            <span>Copiar (Ctrl + C)</span>
          </button>

          <button
            onClick={handleCut}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
          >
            <Scissors className="w-4 h-4 text-amber-600" />
            <span>Cortar (Ctrl + X)</span>
          </button>

          <button
            onClick={handlePaste}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
          >
            <ClipboardPaste className="w-4 h-4 text-emerald-600" />
            <span>Pegar (Ctrl + V)</span>
          </button>

          <button
            onClick={handleUndo}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
          >
            <Undo2 className="w-4 h-4 text-rose-600" />
            <span>Deshacer error (Ctrl + Z)</span>
          </button>

          <button
            onClick={() => {
              setDemoText('La ofimática nos ayuda a estudiar mejor.');
              setClipboard('');
              setHistory(['La ofimática nos ayuda a estudiar mejor.']);
              triggerFeedback('Simulador restablecido');
            }}
            className="ml-auto text-xs text-slate-500 hover:text-slate-800 underline"
          >
            Restablecer texto
          </button>
        </div>

        {/* Clipboard preview status */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Portapapeles actual:</span>
            <span className="font-mono text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
              {clipboard ? `"${clipboard}"` : '(Vacío)'}
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Guarda en memoria temporal
          </span>
        </div>
      </div>

      {/* Complete Shortcuts Reference Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Tabla de Atajos Esenciales para Grado 6°
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEYBOARD_SHORTCUTS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <kbd className="px-2.5 py-1 text-xs font-mono font-bold text-slate-800 bg-white border border-slate-300 rounded-md shadow-xs">
                  {item.key}
                </kbd>
                <span className="text-xs font-bold text-blue-700">
                  {item.action}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
