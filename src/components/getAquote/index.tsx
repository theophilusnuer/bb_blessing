import { FormEvent, useState } from 'react';
import quote from '../../assets/quote.jpeg';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { ImSpinner2 } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';

const GetQuote = () => {
    const [loading, setLoading] = useState(false);

    const sendQuote = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        //convert formData into JSON object
        const qouteData = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post(import.meta.env.VITE_API_URL, qouteData, {withCredentials: true});
            // console.log('Response:', response);
            if (response.status === 200) {
                toast.success('Your quote request has been submitted successfully!');
                form.reset(); // Reset the form after submission
            } else {
                toast.error('There was an issue with your quote request. Please try again.');
            }
        } catch (error) {
            toast.error('There was an error submitting your quote request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='get-a-quote' className="relative grid grid-cols-1 md:grid-cols-10 py-12 md:py-24 gap-10 px-5 sm:px-10 md:px-16 lg:px-20">
            {/* Background and Image Section */}
            <div className="col-span-1 md:col-span-4 relative flex md:h-[35.5rem]">
                <div className="w-full rounded-3xl overflow-hidden relative">
                    <img src={quote} alt="Get a quote" className="w-full h-96 md:h-full object-cover rounded-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0 rounded-3xl"></div>
                    <span className="absolute inset-0 font-bold text-center text-5xl flex justify-center items-end py-4 md:py-8 text-white">
                        Get a Quote
                    </span>
                </div>
            </div>

            {/* Form Section */}
            <div className="col-span-1 md:col-span-6 md:h-[35.5rem] flex flex-col">
                <div className="rounded-lg flex-grow overflow-auto">
                    <form onSubmit={sendQuote}>
                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block mb-2 font-normal text-lg md:text-xl">Name</label>
                            <input type="text" name="name" placeholder='Enter your name' className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg" required />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-normal text-lg md:text-xl">E-mail</label>
                            <input type="email" name="email" placeholder='Enter your email' className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg" required />
                        </div>
                        {/* Budget and Phone Fields */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <div className="w-full md:w-1/2">
                                <label className="block font-normal text-lg md:text-xl">Budget</label>
                                <div className="flex items-center border-b-2 border-[#E82C45] rounded-3xl">
                                    <span className="px-3 text-lg text-white">USD</span>
                                    <input
                                        type="number"
                                        name="budget"
                                        className="w-full bg-transparent py-2 md:py-3 px-3 md:px-5 focus:outline-none text-lg"
                                        required
                                        placeholder="Tell us your budget"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <label className="block font-normal text-lg md:text-xl">Phone</label>
                                <input type="tel" name='phoneNumber' className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg" required placeholder="Enter your phone number" />
                            </div>
                        </div>
                        {/* Message Field */}
                        <div>
                            <label className="block font-normal text-lg md:text-xl">Message</label>
                            <textarea name='message' rows={3} className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg" required placeholder="Type your message"></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-4 w-full bg-[#E82C45] border border-[#E82C45] hover:bg-transparent text-white rounded-xl text-lg md:text-2xl font-normal p-2 md:p-3 flex justify-center items-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <ImSpinner2 className='animate-spin' />
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default GetQuote;
