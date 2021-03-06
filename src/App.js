import React, { useState } from 'react';
import './styles.css'
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate'

export default function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');


  return (
    <div className='container'>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
