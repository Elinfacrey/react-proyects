

export type socialMediaIconProps = {
    id: string,
    link: string,
    text: string
}

export type socialMediaIconsProps = {
    socialMediaIcons: socialMediaIconProps[]
}

export default function SocialMediaIcon({ socialMediaIcons }: socialMediaIconsProps) {
    return (
        <>
            {socialMediaIcons.map(icon => (
                <a key={icon.id} href={icon.link} className='
                                    bg-white/5 
                                    border dark:border-white/10 border-gray-300 rounded-full
                                    flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4
                                    text-md md:text-base
                                    text-white/70 dark:text-white
                                    transition
                                    hover:scale-110 hover:bg-white/10
            '>{icon.text}</a>
            ))}


        </>
    )
}
