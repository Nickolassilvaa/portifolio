interface ITechList {
    id: number;
    link: string;
    _alt: string;
}

const TechList: ITechList[] = [
    {
        id: 1,
        link: "./src/assets/images/html5.png",
        _alt: "HTML5",
    },
    {
        id: 2,
        link: "./src/assets/images/css-3.png",
        _alt: "CSS3",
    },
    {
        id: 3,
        link: "./src/assets/images/js.png",
        _alt: "JavaScript",
    },
    {
        id: 4,
        link: "./src/assets/images/typescript.png",
        _alt: "TypeScript",
    },
    {
        id: 5,
        link: "./src/assets/images/structure.png",
        _alt: "React",

    },
    {
        id: 6,
        link: "./src/assets/images/node-js.png",
        _alt: "NodeJS",
    },
    {
        id: 7,
        link: "./src/assets/images/python.png",
        _alt: "Python",
    },
    {
        id: 8,
        link: "./src/assets/images/sql-server.png",
        _alt: "SQL",
    },
    {
        id: 9,
        link: "./src/assets/images/letter-c.png",
        _alt: "C",
    },

]

export { TechList };
export type { ITechList };
