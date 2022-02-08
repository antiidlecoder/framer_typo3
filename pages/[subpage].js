import {useEffect, useState} from "react";
import { useRouter } from 'next/router'

import TextMedia from "../components/fsc/TextMedia";

export default function Subpage() {
    const router = useRouter()
    const { subpage } = router.query

    console.log(subpage);

    const [data, setData] = useState();
    const [sitemap, setSitemap] = useState();

    async function getTypo3Data() {
        const response = await fetch("https://headless.sesamnet.net/"+subpage+".json");
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        if (subpage) {
            getTypo3Data();
        }
    }, [subpage])


    if (!data) {
        return <p>Loading...</p>
    }
    const col = Object.keys(data.content).map(function(key, index) {
        return data.content[key].map(col => {
            if (col.type === "textmedia") {
                return <TextMedia key={col.id} content={col.content} appearance={col.appearance} />
            }
        })
    });

    /*
    const col0 = data.content.colPos4.map(col => {
        if (col.type === "textmedia") {
            return <TextMedia key={col.id} content={col.content} />
        }
    })
*/

    return           <div className="container mx-auto px-4">
        {col}
    </div>
}