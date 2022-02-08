import {useEffect, useState} from "react";
import TextMedia from "../components/fsc/TextMedia";
import { motion } from "framer-motion"
import Layout from "../components/layout/Layout";

export default function Home() {

    const [data, setData] = useState();

    async function getTypo3Data() {
        const response = await fetch("https://headless.sesamnet.net/index.php?id=1&type=123");
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getTypo3Data();
    }, [])

    if (!data) {
        console.log("oaisdus")
        return <Layout>Holla</Layout>
    }

    /*
    const col = Object.keys(data.content).map(function(key, index) {
        return data.content[key].map(col => {
            if (col.type === "textmedia") {
                return <TextMedia key={col.id} content={col.content} />
            }
        })
    });
*/
    const col0 = data.content.colPos0.map(col => {
        return <TextMedia key={col.id} content={col.content} appearance={col.appearance} />
    })

    const col2 = data.content.colPos2.map(col => {
        return <TextMedia key={col.id} content={col.content} appearance={col.appearance} />
    })
    console.log(data);

  return (
         <div>
             <div className="overflow-hidden h-[500px] my-8">
                 <motion.div className="h-full container mx-auto"
                             initial={{scale: 1.2}}
                             animate={{scale: 1}}
                             transition={{delay: 2, duration: 1}}
                 >
                     <motion.img
                         src="https://images.unsplash.com/photo-1640622308069-4352d9b4dcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                         className="rounded-xl object-cover h-full w-full"
                         initial={{scale: 2}}
                         animate={{scale: 1}}
                         transition={{delay: 2, duration: 1}}
                     />
                 </motion.div>
             </div>
             <div className="container mx-auto px-4">


                 <div className="py-24">
                     {col0}
                 </div>

                 <div className="grid gap-4 grid-cols-3 py-24">
                     {col2}
                 </div>
             </div>
         </div>
  )
}
