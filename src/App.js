import React, { useState } from 'react';
import './styles.css';
import Field from './components/field';
import Languages from './components/language';
import Translate from './components/translate';

export default function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div>
      <Field label='Enter English' onChange={setText} value={text} />
      <Languages language={language} onlanguagechange={setLanguage} />
      <Translate text={text} language={language} />
    </div>
  );
}


