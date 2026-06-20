import delivery from '../../assets/delivery.jpg';
import applia from '../../assets/applia.png';
import guy from '../../assets/guy.jpeg';
import office from '../../assets/office.jpeg';
import pck from '../../assets/pck.jpeg';

const Whatwedo = () => {
    return (
        <div id='what-we-do' className="relative grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-10 md:pt-16 pb-16 md:pb-20 gap-x-20 gap-y-8 px-5 sm:px-10 md:px-16 lg:px-20">
            {/* Images */}
            <div className='relative w-full flex flex-col'>
                <div className="flex flex-col space-y-4 w-full">
                    <div className="flex flex-row space-x-4 w-full">
                        <img src={office} alt="Office" className='rounded-3xl w-full object-cover h-[9.4rem] hidden sm:block' />
                        <img src={applia} alt="Appliance" className='mt-10 rounded-3xl h-40 sm:h-48 w-full object-cover' />
                    </div>
                    <div className="flex flex-row space-x-4 w-full relative mt-4">
                        <img src={pck} alt="Package" className='rounded-3xl h-52 w-[8rem] object-cover z-20 relative sm:-top-[5.4rem]' />
                        <img src={guy} alt="Guy" className='rounded-3xl w-full h-48 sm:h-64 object-cover z-20 relative sm:-top-[5.4rem]' />
                        <img src={delivery} alt="Delivery" className='rounded-3xl h-40 w-72 object-cover hidden sm:block' />
                    </div>
                </div>
            </div>

            {/* Texts */}
            <div className="flex flex-col space-y-6">
                <h1 className='text-[#E82C45] font-bold text-5xl md:text-center'>What We Do?</h1>
                <p className='text-xl md:text-2xl leading-9'>We specialize in providing comprehensive and reliable procurement solutions tailored to meet the unique needs of businesses. Whether you need general merchandise, retail supplies, or specialized goods, our team works closely with trusted suppliers to ensure quality, timely delivery, and competitive pricing. We handle the procurement process from start to finish, so you can focus on running your business efficiently.</p>
            </div>
        </div>
    );
}

export default Whatwedo;