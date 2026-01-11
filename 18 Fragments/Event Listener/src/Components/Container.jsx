import css from "./Container.module.css";
const Container=({children})=>{
    return <div className={css.Container}>{children}</div>
}
export default Container;