import {motion} from "motion/react";
import SpeechBubble from "../assets/speech-bubble.svg";

interface PropTypes {
  datePosition: any;
}

const DatesBubble = ({datePosition}: PropTypes) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      style={{
        marginBottom: '-40px',
        overflow: 'hidden',
        position: 'relative',
        top: '-60px',
        left: '140px',
        width: '150px',
      }}
    >
      <div style={{
        fontFamily: 'Roboto Mono',
        fontSize: '14px',
        padding: 10,
        position: 'absolute',
        left: 3,
        top: 57
      }}
      >
        <div>datePosition:</div>
        <motion.span>
          {datePosition}
        </motion.span>
        <br/>
      </div>

      <img src={SpeechBubble} style={{transform: 'scale(1, -1)'}}/>
    </motion.div>
  )
}

export default DatesBubble;