import l from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  // const sectionStyle = urlBg ? {background: `url(${urlBg})` } : { background: `${colorBg}` };
  const sectionStyle = {}

  if (urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`
  }
  if (colorBg) {
    sectionStyle.backgroundColor = colorBg
  }
  // console.log('####: props', props);

  return (
    <>
      <section 
        id={id}
        className={l.root}
        style={sectionStyle}
      >
        <div className={l.wrapper}>
            <article>
                <div className={l.title}>
                    <h3>{title}</h3>
                    <span className={l.separator}></span>
                </div>
                <div className={`${l.desc} ${l.full}`}>
                    {children}
                </div>
            </article>
        </div>
      </section>
    </>
  )
}
export default Layout;