import React from 'react';
import { Game } from "./components/Game";


type AppMode = 'welcome' | 'in-progress' | 'compeleted';

export const App = () => {
  const [appMode, setAppMode] = React.useState<AppMode>('welcome');

  switch (appMode) {
    case 'welcome':
      return (
        <div>
          <h1>Welcome to key train</h1>
          <button onClick={() => setAppMode('in-progress')}>start</button>
        </div>
      )
    case 'in-progress':
      return <Game onComplete={() => setAppMode('compeleted')} />
    case 'in-progress':
      return <div>TODO game complete</div>
    default:
    // TODO assert never
    throw new Error();
  }
}
