import styles from './Button.module.css'

const Button = ({name}) => {
  console.log(styles);
  
  return (
    <button className={styles.btn}>{name}</button>
  )
}

export default Button