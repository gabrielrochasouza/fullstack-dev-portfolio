import { FaWhatsapp } from 'react-icons/fa'
import {IconContainer} from './style'
import 'aos/dist/aos.css'; // You can also use <link> for styles

const WhatsappFixed = ()=>{
    return(
        <IconContainer title='Whatsapp link' target='_blank' href='https://api.whatsapp.com/send?phone=5524998913379' >
            <div className='whats-container' data-aos='fade-left' data-aos-delay='2000' data-aos-offset='10'>
                <div className="box">
                    Olá 👋, vamos conversar!
                </div>
                <button>
                    <FaWhatsapp/>
                </button>
            </div>
        </IconContainer>
    )
}
export default WhatsappFixed