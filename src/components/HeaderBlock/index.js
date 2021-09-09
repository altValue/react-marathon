// Для корректного импорта стилей компонента нужно 
// импортировать их объектом из файла, содержащего в
// названии слово module.
// тогда для применения стилей импортированного класса в компоненте
// достаточно обращаться к классу как к св-ву О.: s.[название класса]

// П. s содержит ссылку на О. со стилями
// именно для этого компонента из модуля по адресу
import s from './style.module.css';

import { ReactComponent as ReactLogo } from '../../logo.svg';

const HeaderBlock = ({ title, backgroundColor, descr }) => {
  const styleRoot = backgroundColor === 'green' ? { backgroundColor: 'gold' } : {}
  return (
    <div>
      <div>
        <ReactLogo />
        <h1 className={s.header}>Component Styling.</h1>
        <h1 className={s.header} style={styleRoot}>
        {/* переданная из App.js настройка Компонента */}
          {title}
        </h1>
        { 
          // Если настройка title введена в App.js, выводим
          title && (<h1 className={s.header} style={styleRoot}>
            {title}
          </h1>) 
        }
        <p className={s.text}>
          Styling of Components uses CSS-module localization. Depends on "module" naming of corresponding css files and importing their rules as Object properties inside randomly-named variable. So you can apply styling to only Component by invoking Object properties of desired module.
        </p>
        {
          // Если настройка descr введена в App.js, выводим
          descr && <p className={s.text}>
            {descr}
          </p>
        }
      </div>
    </div>
  )
}

export default HeaderBlock;

// IX В Реакт Компоненты можно передавать св-ва, кот. будут отпределять
// внешний вид и/или что он будет содержать
// Будем настраивать Компонент HeaderBlock
// Настраиваемые св-ва передаются в К. с помощью св-ва props,
// когда мы их принимаем в К. 


// Работа с картинками

// 1 способ: импортируем картинку внутри п. VarForLogo в тот Компонент, где она д.б., указывая относительный путь до неё. Тогда картинку можно использовать в теге <img>, передав зн-е п. в атрибут src
// import VarForLogo from '../../assets/ReactLogo.png';

// <div>
//   <img src={VarForLogo} alt='React Logo'>
// </div>

// 2й способ
// Можно импоритровать SVG как Реакт Компонент. тогда мы получаем доступ к css св-вам SVG и можем ими управлять
//import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

// Картинка при этом вставляется как Реакт Компонент
/* <div className={s.root}>
  <ReactLogo />
</div> */


