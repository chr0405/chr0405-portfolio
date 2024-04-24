import Image from "next/image";
import star from "../img/star.png";

export default function Header() {
    return (
        <div>
            {/* content */}
            <div>
                <h1>CHR portfolio</h1>
                <Image src={star} alt="hearder logo"/>

                <h2>&lt;profile/&gt;</h2>
                <h2>&lt;skill/&gt;</h2>
                <h2>&lt;project/&gt;</h2>
            </div>
        </div>
    )
}
