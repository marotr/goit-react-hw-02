// import css from './Options.module.css';
const Buttons = ({ label, handleButton }) => {
          return (
      <div >
          
                  <button  onClick={handleButton}>{label} </button>                      
          
    </div>
  )
    }


export default Buttons