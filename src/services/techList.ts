interface ITechList {
    id: number;
    link: string;
    _alt: string;
}

const TechList: ITechList[] = [
    {
        id: 1,
        link: "./assets/images/html5.png",
        _alt: "HTML5",
    },
    {
        id: 2,
        link: "./assets/images/css-3.png",
        _alt: "CSS3",
    },
    {
        id: 3,
        link: "./assets/images/js.png",
        _alt: "JavaScript",
    },
    {
        id: 4,
        link: "./assets/images/typescript.png",
        _alt: "TypeScript",
    },
    {
        id: 5,
        link: "./assets/images/structure.png",
        _alt: "React",

    },
    {
        id: 6,
        link: "./assets/images/node-js.png",
        _alt: "NodeJS",
    },
    {
        id: 7,
        link: "./assets/images/python.png",
        _alt: "Python",
    },
    {
        id: 8,
        link: "./assets/images/sql-server.png",
        _alt: "SQL",
    },
    {
        id: 9,
        link: "./assets/images/letter-c.png",
        _alt: "C",
    },

]

export { TechList };
export type { ITechList };
