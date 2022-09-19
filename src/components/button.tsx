interface ButtonProps extends React.HTMLAttributes<HTMLElement>  {
    title: string;
    link?: string;
    // logo?: React.ReactElement | React.ComponentType;
}

export function Button({ title, link, ...rest }:ButtonProps) {
    return (
        <button {...rest}>
            {/* {logo} */}
            <a
                href={link}
                download="Nickolas Rodrigues"
                target="_blank"
            >
                {title}
            </a>
        </button>
    );
}