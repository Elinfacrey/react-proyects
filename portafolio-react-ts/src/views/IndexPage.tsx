import HeaderForm  from "../components/HeaderForm"
import SocialMediaIcon from "../components/SocialMediaIcon"
const socialMediaIcon = [{
    id: 'v1',
    link: '',
    text: 'Linkedin'
}, {
    id: 'v2',
    link: '',
    text: 'GitHub'
}, {
    id: 'v3',
    link: '',
    text: 'jfallamontes98@gmail.com'
}]

export type socialMediaIconProps = {
    id: string,
    link: string,
    text: string
}

export type socialMediaIconsProps = {
    socialMediaIcons: socialMediaIconProps[]
}


export default function IndexPage() {
  return (
    <>
     <div className='bg-aboutMeBgImage h-screen bg-cover bg-no-repeat text-white '>
                <HeaderForm></HeaderForm>
                <div className='section py-20 md:pt-36 scroll-m-20 w-full mx-auto container md:max-w-3xl '>

                    <div className='max-w-3xl'>
                        <div className="flex flex-row md:flex-col items-center md:items-start ">
                            <span className='md:order-2'>
                                <h1 className=' text-cyan-300 text-5xl font-bold md:pr-1 inline-block '>Hola! </h1>
                                <h1 className='text-5xl font-bold pb-4 inline-block'>Soy JoseFranco Falla</h1>
                            </span>
                        </div>
                    </div>
                    <h2 className='text-xl opacity-80 pt-1'>
                        <div className='flex flex-col gap-y-2'>
                            <span>Desarrollador Frontend </span>
                            <span>Mantecoso<a href="" className='inline-block text-cyan-300'>Holasd</a></span>
                        </div>
                    </h2>
                    <nav className='flex gap-4 mt-8 flex-wrap justify-center md:justify-start'>
                        <SocialMediaIcon socialMediaIcons={socialMediaIcon}></SocialMediaIcon>
                    </nav>
                </div>
            </div>
    </>
  )
}
