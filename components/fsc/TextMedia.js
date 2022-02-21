import {useState, useEffect} from "react";
import {motion} from "framer-motion"

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const fadeUp = {
    hidden: {
        translateY: 20,
        opacity: 0
    },
    visible: {
        translateY: 0,
        opacity: 1
    }
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}

export default function TextMedia({content, appearance}) {


    if (appearance.layout === 'layout-1') {
        return <div className="grid gap-10 grid-cols-2">
            <div>
                <h2 className="text-6xl my-8">{content.header}</h2>
                <div className="text-2xl innerhtml" dangerouslySetInnerHTML={{ __html: content.bodytext }} />
            </div>
            <div>
                {content.assets.images && content.assets.images.map(image => <motion.img variants={variants} initial="hidden" animate="visible" key={image.publicUrl} src={image.publicUrl} alt={image.metaData.alternative} className="w-full h-full object-cover rounded-xl" />)}
            </div>
        </div>
    }


    return <div>
        <div>
            {content.assets.images && content.assets.images.map(image => <motion.img variants={variants} initial="hidden" animate="visible" transition={{duration: 1, delay: .5}} key={image.publicUrl} src={image.publicUrl} alt={image.metaData.alternative} className="w-full h-full object-cover rounded-xl" />)}
        </div>
        <motion.div className="py-6" variants={fadeUp}
             initial="hidden"
             animate="visible"
             transition={{duration: 1, delay: .5}}>
            <h2 className="text-6xl my-8">{content.header}</h2>
            <motion.div
                            className="text-2xl innerhtml" dangerouslySetInnerHTML={{ __html: content.bodytext }} />
        </motion.div>
    </div>
}