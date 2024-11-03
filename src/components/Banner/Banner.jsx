import BannerImage from './../../assets/banner.jpg'
function Banner() {
    return (
        <div className='w-10/12 mx-auto'>
            <img className='h-[820px] w-full' src={BannerImage} alt="" />
        </div>
    )
}

export default Banner
