import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import bck1 from './assets/bg1.jpg';
import bck3 from './assets/bg3.jpg';

const App = () => {
  return (
    <>
      <Header
        title='Хмели сумели'
        descr='И ты сможешь!'
      />
      <Layout
        title='Первый экран'
        descr='Описание первого экрана'
        urlBg={ bck1 }
      />
      <Layout
        title='Второй экран'
        descr='Описание второго экрана'
        colorBg='red'
      />
      <Layout
        title='Третий экран'
        descr='Описание третьего экрана'
        urlBg={ bck3 }
      />
      <Footer />
    </>
  );
}

export default App;