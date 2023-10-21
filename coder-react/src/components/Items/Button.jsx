const Button = ({text, description}) => {
    return (
      <div>
        <p>{description}</p>
        <button> { text } </button>
      </div>
    )
  }  

  export default Button