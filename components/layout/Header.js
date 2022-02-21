import {useEffect, useState} from "react";
import Link from "next/link";
import * as React from "react";


function Header() {
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

    return <div className="w-full flex justify-center pt-24 pb-8">
    <ul className="flex justify-between w-96">
        <li><Link href={"/"} scroll={false}>Home</Link></li>
        {sitemap && sitemap.navigation.map(li => <li key={li.title}><Link href={"/"+li.title.toLowerCase()} scroll={false}>{li.title}</Link></li>)}
    </ul>
</div>
}

export default Header;