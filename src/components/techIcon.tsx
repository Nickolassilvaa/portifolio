interface TechIconProps {
    link: string;
    _alt: string;
}

export function TechIcon({ link, _alt }:TechIconProps) {
    return <img src={link} alt={_alt} className="w-14 sm:w-20"/>
}