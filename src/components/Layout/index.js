import l from './style.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
  const styleRoot = urlBg ? {background: `url(${urlBg})` } : { background: `${colorBg}` };

  return (
    <>
      <section className={l.root} style={styleRoot}>
        <div className={l.wrapper}>
            <article>
                <div className={l.title}>
                    <h3>{title}</h3>
                    <span className={l.separator}></span>
                </div>
                <div className={`${l.desc} ${l.full}`}>
                    <p>{descr}</p>
                </div>
            </article>
        </div>
      </section>
    </>
  )
}
export default Layout;