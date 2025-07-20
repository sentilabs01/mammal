import React, { useState } from 'react';
import TerminalPanel from './TerminalPanel';
import TerminalControls from './TerminalControls';

function TerminalGrid() {
  const [terminals, setTerminals] = useState([
    { id: 1, title: 'Terminal 1', active: true },
    { id: 2, title: 'Terminal 2', active: false },
    { id: 3, title: 'Terminal 3', active: false },
  ]);

  const [activeTerminal, setActiveTerminal] = useState(1);

  const handleTerminalActivate = (terminalId: number) => {
    setActiveTerminal(terminalId);
    setTerminals(prev => 
      prev.map(t => ({ ...t, active: t.id === terminalId }))
    );
  };

  const handleTerminalRename = (terminalId: number, newTitle: string) => {
    setTerminals(prev =>
      prev.map(t => t.id === terminalId ? { ...t, title: newTitle } : t)
    );
  };

  return (
    <div className="h-full flex flex-col">
      <TerminalControls 
        terminals={terminals}
        activeTerminal={activeTerminal}
        onTerminalSelect={handleTerminalActivate}
        onTerminalRename={handleTerminalRename}
      />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
        {terminals.map(terminal => (
          <TerminalPanel
            key={terminal.id}
            terminalId={terminal.id}
            title={terminal.title}
            isActive={terminal.active}
            onActivate={() => handleTerminalActivate(terminal.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TerminalGrid;