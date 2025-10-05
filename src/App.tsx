import { css, cx } from '../styled-system/css';
import reactLogo from './assets/react.svg';
import typescriptLogo from './assets/typescript-logo.png';
import viteLogo from './assets/vite.svg';

const logosWrapper = css({ display: 'flex', justifyContent: 'center' });

const pandaEmoji = css({ fontSize: '4em', lineHeight: '0.7em' });

const logo = css({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',

  _hover: {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },
});

const react = css({
  animation: 'spin infinite 20s linear',
});

const packageNames = css({
  fontSize: '2em',
});

function App() {
  return (
    <>
      <div className={logosWrapper}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={logo} alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src={typescriptLogo} className={logo} alt="Typescript logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={cx(logo, react)} alt="React logo" />
        </a>
        <a href="https://panda-css.com/" target="_blank" rel="noreferrer" className={logo}>
          <p className={pandaEmoji}>🐼</p>
        </a>
      </div>
      <h1 className={packageNames}>Vite + TS + React + PandaCSS</h1>
    </>
  );
}

export default App;
