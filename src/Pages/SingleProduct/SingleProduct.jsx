import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
    const data = useLoaderData();
    console.log(data);



    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [openModal]);


    return (
        <div className="container mx-auto my-8 p-4">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* data Image */}
                <div className="flex-shrink-0 m-auto  w-full lg:w-1/2">
                    <img className="rounded-lg shadow-lg m-auto w-1/2" src={data.images} alt={data.title} />
                </div>

                {/* data Details */}
                <div className="flex flex-col mt-4 lg:mt-0 w-full lg:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.title}</h1>
                    <span className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">${data.price}</span>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Tags: {data.tags.toString()}</h3>
                        
                    </div>
                    <div className="mt-1">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Warranty: {data.warrantyInformation}</h3>
                        
                    </div>
                    <div className="mt-1">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Rating: {data.rating}</h3>
                        
                    </div>
                    <div className="mt-1">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Return Policy: {data.returnPolicy}</h3>
                        
                    </div>
                    <div className="mt-1">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Category:</h3>
                        <p className="text-gray-700 dark:text-gray-300">{data.category}</p>
                    </div>
                    <button onClick={() => setOpenModal(true)} className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Now</button>


                    {/* Modal Start */}

                    <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
            <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-100'}`}>
                <main className="px-4 sm:px-6 lg:px-8 py-8">
                    <button onClick={() => {setOpenModal(false)}} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6">Close</button>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="space-y-8 lg:mb-6">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Shipping Details</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    {/* Shipping Details form */}
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Address</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your address" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">City</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your city" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Country</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your country" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card  shadow-sm ">
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Payment Information</h3>
                                </div>
                                <div className="lg:p-6 p-2">
                                    {/* Personal Information details form */}
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none">Card Number</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your card number" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">Expiry Date</label>
                                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="MM/YY" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">CVV</label>
                                                <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your CVV" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none">Billing Address</label>
                                            <input className="bg-transparent flex h-10 w-full rounded-md border px-3" placeholder="Enter your billing address" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 lg:mb-0 mb-6">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Order Summary</h3>
                                </div>
                                {/* Checkout form */}
                                <div className="lg:p-6 p-2">
                                    <div className="space-y-4">
                                        <div className="flex justify-between"><span>Product 1</span><span>$99.99</span></div>
                                        <div className="flex justify-between"><span>Product 2</span><span>$49.99</span></div>
                                        <div className="flex justify-between"><span>Product 3</span><span>$29.99</span></div>
                                        <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold"><span>Total</span><span>$179.97</span></div>
                                    </div>
                                </div>
                                <div className="flex items-center lg:p-6 p-2">
                                    <button onClick={() => {setOpenModal(false)}} className="inline-flex items-center bg-slate-950 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Complete Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

                    {/* Modal End */}

                </div>
            </div>

            {/* data Description and Comments */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product Details</h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{data.description}</p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Comments</h2>
                    <div className="mt-4 space-y-4">
                        {data.reviews.map((comment, index) => (
                            <div key={index} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
                                <p className="text-gray-800 dark:text-gray-200">{comment.comment}</p>
                                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{comment.date}</span>
                            </div>
                        ))}
                    </div>

                     {/* Add Comment
                     <div className="mt-6">
        //                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add a Comment</h3>
        //                 <textarea
        //                     className="w-full p-2 mt-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        //                     rows="4"
        //                     placeholder="Write your comment here..."
        //                     value={newComment}
        //                     onChange={(e) => setNewComment(e.target.value)}
        //                 ></textarea>
        //                 <button
        //                     className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //                     onClick={handleAddComment}
        //                 >
        //                     Submit Comment
        //                 </button>
                     </div> */}
                 </div>
             </div>
         </div>
    );
};

export default SingleProduct;