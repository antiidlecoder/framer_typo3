import Link from "next/link"
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout(props) {

    const [sitemap, setSitemap] = useState();

    async function getTypo3Sitemap() {
        const response = await fetch("https://headless.sesamnet.net/index.php?id=1&type=834");
        const data = await response.json();
        console.log(data);
        setSitemap(data);
    }

    useEffect(() => {
        getTypo3Sitemap();
    }, [])


    return <div>
            {props.children}
        </div>
}