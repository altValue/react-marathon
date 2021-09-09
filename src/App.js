import HeaderBlock from './components/HeaderBlock';

const App = () => {
  return (
    <>
      <HeaderBlock 
        title='This is New Title.'
        backgroundColor='green'
      />
      <HeaderBlock 
        title='This is Second Title.'
        descr='This is additional description!'
      />
    </>
  );
}

export default App;