interface ITechList {
    id: number;
    link: string;
    _alt: string;
}

const TechList: ITechList[] = [
    {
        id: 1,
        link: "/Assets/html5.png",
        _alt: "HTML5",
    },
    {
        id: 2,
        link: "/Assets/css-3.png",
        _alt: "CSS3",
    },
    {
        id: 3,
        link: "/Assets/js.png",
        _alt: "JavaScript",
    },
    {
        id: 4,
        link: "/Assets/typescript.png",
        _alt: "TypeScript",
    },
    {
        id: 5,
        link: "/Assets/structure.png",
        _alt: "React",

    },
    {
        id: 6,
        link: "/Assets/node-js.png",
        _alt: "NodeJS",
    },
    {
        id: 7,
        link: "/Assets/python.png",
        _alt: "Python",
    },
    {
        id: 8,
        link: "/Assets/sql-server.png",
        _alt: "SQL",
    },
    {
        id: 9,
        link: "/Assets/letter-c.png",
        _alt: "C",
    },

]

export { TechList };
export type { ITechList };
