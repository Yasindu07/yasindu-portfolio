import Link from 'next/link';

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Yasindu07'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/yasindu-balasooriya-56138a229/'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100010202598967'},
    {icon: <FaInstagram />, path: ''},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials