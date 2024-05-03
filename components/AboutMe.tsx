import Image from "next/image";

interface AboutMeProps {
    id: number;
    img: any;
    title: string;
    info: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ id, img, title, info }) => {
    return (
        <>
            <Image src={img} alt={title} width={30} height={30}/>
            <h1>{title}</h1>
            <p>{info}</p>
        </>
    );
}

export default AboutMe;