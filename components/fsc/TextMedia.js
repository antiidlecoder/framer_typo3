export default function TextMedia({content, appearance}) {
    console.log(appearance)


    if (appearance.layout === 'layout-1') {
        return <div className="grid gap-10 grid-cols-2">
            <div>
                <h2 className="text-5xl">{content.header}</h2>
                <p className="text-xl">{content.bodytext}</p>
            </div>
            <div>
                {content.assets.images && content.assets.images.map(image => <img key={image.publicUrl} src={image.publicUrl} alt={image.metaData.alternative} className="w-full h-full object-cover rounded-xl" />)}
            </div>
        </div>
    }


    return <div>
        <div>
            {content.assets.images && content.assets.images.map(image => <img key={image.publicUrl} src={image.publicUrl} alt={image.metaData.alternative} className="w-full h-full object-cover rounded-xl" />)}
        </div>
        <div className="py-6 px-4">
            <h2 className="text-2xl">{content.header}</h2>
            <p className="text-lg">{content.bodytext}</p>
        </div>
    </div>
}