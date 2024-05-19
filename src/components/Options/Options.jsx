
import css from './Options.module.css';

import Buttons from './Buttons';

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
    
    

    return (
        <div className={css.optionButtons}>
            <Buttons label="Good"  handleButton={() =>updateFeedback('good')} />
            <Buttons label="Neutral" handleButton={() =>updateFeedback('neutral')} />
            <Buttons label="Bad" handleButton={() =>updateFeedback('bad')} />
            {totalFeedback>0 &&<Buttons label="Reset" handleButton={handleReset} />}       
            
        </div>
       
    )
  

};




export default Options