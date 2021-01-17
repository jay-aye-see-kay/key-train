import React from 'react';


const randBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

const useKeydown = (fn: (e: KeyboardEvent) => void) => {
  React.useEffect(() => {
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  });
}

type GameData = {
  kind: 'single-key';
  keys: string[];
};

const gameData: GameData = {
  kind: 'single-key',
  keys: 'abcdefghijklmnopqrstuvwxyz,./'.split(''),
};
const getKey = () => gameData.keys[randBetween(0, gameData.keys.length)];

type Props = {
  onComplete: () => void
};
export const Game: React.FC<Props> = ({}) => {
  const [curKey, setCurKey] = React.useState('');
  React.useEffect(() => { setCurKey(getKey) }, []);

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === curKey) {
      console.log(`YES! ${e.key} === ${curKey}`);
    } else {
      console.log(`NOPE ${e.key} !== ${curKey}`);
    }
    setCurKey(getKey);
  }
  useKeydown(handleKeydown);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>press</h2>
      <h2>{curKey}</h2>
    </div>
  );
};
