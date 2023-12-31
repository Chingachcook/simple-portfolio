import {SocialIcon} from 'react-social-icons'
import './socialLinks.css'

export const SocialLinks = () => {
    return <div>
        <SocialIcon target={'_blank'} className={'link'} url={'https://github.com/Chingachcook'} bgColor={'#444'} fgColor={'#fff'}/>
        <SocialIcon target={'_blank'} className={'link'} url={'https://www.instagram.com/cbec.be'} bgColor={'#444'} fgColor={'#fff'}/>
        <SocialIcon target={'_blank'} className={'link'} url={'https://www.linkedin.com/in/chingiz-batirbaev'} bgColor={'#444'} fgColor={'#fff'}/>
    </div>
}
