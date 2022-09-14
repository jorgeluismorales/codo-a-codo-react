const Button = ({ btnClases, btnType, title }) => {
    return (
        <button className={btnClases} type={btnType}>
            {title}
        </button>
    )
}

export default Button