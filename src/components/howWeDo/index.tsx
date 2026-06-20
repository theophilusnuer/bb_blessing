import { BiSearchAlt } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";

const HowWeDoIt = () => {
    return (
        <div id="how-we-do-it" className="px-5 sm:px-10 md:px-16 lg:px-20 py-10">
            <h1 className="text-[#E82C45] font-bold text-5xl md:text-center">How we do it!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {/* sourcing */}
                <div className="rounded-xl bg-[#333232] bg-opacity-55 p-6">
                    <span className="flex items-center space-x-2">
                        <BiSearchAlt size={50} className="text-[#E82C45]" />
                        <span className='text-2xl md:text-3xl font-semibold'>Sourcing</span>
                    </span>
                    <p className='pt-2 text-lg md:text-xl lg:text-2xl'>We partner with trusted suppliers to ensure quality and competitive pricing for all your business needs.</p>
                </div>
                {/* procurement */}
                <div className="rounded-xl bg-[#333232] bg-opacity-55 p-6">
                    <span className="flex items-center space-x-2">
                        <GoChecklist size={50} className="text-[#E82C45]" />
                        <span className='text-2xl md:text-3xl font-semibold'>Procurement & Management</span>
                    </span>
                    <p className='pt-2 text-lg md:text-xl lg:text-2xl'>We manage the entire procurement process, ensuring efficiency and accuracy.</p>
                </div>
                {/* delivery */}
                <div className="rounded-xl bg-[#333232] bg-opacity-55 p-6">
                    <span className="flex items-center space-x-2">
                        <CiDeliveryTruck size={50} className="text-[#E82C45]" />
                        <span className='text-2xl md:text-3xl font-semibold'>Delivery & Support</span>
                    </span>
                    <p className='pt-2 text-lg md:text-xl lg:text-2xl'>We provide timely and reliable delivery services, with support to meet your business expectations.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWeDoIt;