import logo from './logo.svg';
import { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import './App.css';
import 'react-simple-keyboard/build/css/index.css';

export default function App() {
  const [input, setInput] = useState('');
  const [layout, setLayout] = useState('default');
  const keyboard = useRef(null);

  // console.log(keyboard);

  const onChange = (input) => {
    setInput(input);
    console.log('Input changed', input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <input
          value={input}
          placeholder={'Tap on the virtual keyboard to start'}
          onChange={onChangeInput}
        /> */}
        <Keyboard
          theme={'hg-theme-default myTheme1'}
          keyboardRef={(r) => console.log(r)}
          layoutName={layout}
          layout={{
            default: [
              '1 2 3 4 5 6 7 8 9 0 {bksp}',
              'q w e r t y u i o p',
              "a s d f g h j k l ; '",
              'z x c v b n m , . /',
              '{shift} +-= {space} @ .com',
            ],
            shift: [
              '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
              '{tab} Q W E R T Y U I O P { } |',
              '{lock} A S D F G H J K L : " {enter}',
              '{shift} Z X C V B N M &lt; &gt; ? {shift}',
              '.com @ {space}',
            ],
          }}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </header>
    </div>
  );
}
