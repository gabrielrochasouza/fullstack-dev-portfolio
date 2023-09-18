import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import { ControllerContainer } from './style';
import {scrollDown,scrollUp} from '../../hooks'

const ScrollController = () => {

    return (
        <ControllerContainer>
            <div className='internal-box'>
                <button onClick={scrollUp}>
                    <AiOutlineArrowUp />
                </button>
                <button onClick={scrollDown}>
                    <AiOutlineArrowDown />
                </button>
            </div>
        </ControllerContainer>
    )
}

export default ScrollController;
