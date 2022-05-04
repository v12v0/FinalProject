import React, { useState } from 'react'

function Modal({user}) {
    const [showModal, setShowModal] = useState(false);
    const [imageData, setImageData] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        weight: 0,
        location: "",
        caption: "",
        bait: "",
        fishBreed: "",
    })

    function handleChange(e) {

        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleImageChange(e) {
        setImageData({ photo: e.target.files[0]}) 
    }

    function handleSubmit(e) {
        e.preventDefault()

        const combinedData = {
            ...formData,
            ...imageData,
            username: user.nickname,
            image: ""
        }

        fetch(`http://localhost:3000/catches`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(combinedData),
          }) 
          .then((r) => r.json())
          .then((data) => console.log(data));
  
    }
    

   
    return (
        <div>
            
            <button
                className=" gap-2 flex bg-blue-500 active:bg-blue-600  text-white font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
               
                New Catch
            </button>
            {showModal ? (
                <>
                    <div
                        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-400 rounded-t">
                                    <h3 className="text-3xl font-extralight text-black ">
                                        Share Your Catch
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}

                                <div className="relative p-6 flex-auto">
                                    <div className="w-full md:w-96 md:max-w-full mx-auto">
                                        <div className="p-6 border border-gray-300 sm:rounded-md">
                                            <form onSubmit={(e) => handleSubmit(e)}>
                                                <label className="block mb-6">
                                                    <span className="text-gray-700">Your name</span>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                                        placeholder="First Name & Last Name"
                                                    />
                                                </label>

                                                <label className="block mb-6">
                                                    <span className="text-gray-700">Location</span>
                                                    <input
                                                        name="location"
                                                        type="text"
                                                        value={formData.location}
                                                        onChange={handleChange}
                                                        className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                                        placeholder="City,State"
                                                    />
                                                </label>
                                                <label class="block mb-6 text-gray-700" for="title">
                                                    Enter Weight:
                                                </label>
                                                <input
                                                    className="w-full bg-gray-50 backdrop-blur-lg bg-opacity-30 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                                    type="number"
                                                    name="weight"
                                                    placeholder="10 lbs"
                                                    value={formData.weight}
                                                    onChange={handleChange}
                                                    maxLength="10"
                                                    required

                                                />
                                                <label class="block mb-6">
                                                    <span class="text-gray-700">Your Catch</span>
                                                    <input
                                                        name="photo"
                                                        type="file"
                                                        accept="image/jpg"
                                                        value={formData.photo}
                                                        onChange={handleImageChange}
                                                        className="
            block
            w-full
            mt-1
            focus:border-blue-300
            focus:ring
            text-black
            focus:ring-blue-200
            focus:ring-opacity-50
          "
                                                    />
                                                </label>
                                                <label className="block mb-6">
                                                    <span className="text-gray-700">Fish Breed</span>
                                                    <input
                                                        name="fishBreed"
                                                        type="text"
                                                        value={formData.fishBreed}
                                                        onChange={handleChange}
                                                        className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-blue-300
            focus:ring
            text-black
            focus:ring-blue-200
            focus:ring-opacity-50
          "
                                                        placeholder="Salmon"
                                                    />
                                                </label>
                                                <label className="block mb-6">
                                                    <span className="text-gray-700">Bait Used</span>
                                                    <input
                                                        name="bait"
                                                        type="text"
                                                        value={formData.bait}
                                                        onChange={handleChange}
                                                        className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                                        placeholder="Worm"
                                                    />
                                                </label>
                                                <label className="block mb-6">
                                                    <span className="text-gray-700">Caption</span>
                                                    <textarea
                                                        name="caption"
                                                        type="text"
                                                        value={formData.caption}
                                                        onChange={handleChange}
                                                        className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            text-black
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                                        rows="3"
                                                        placeholder="Share more about your catch!"
                                                    ></textarea>
                                                </label>

                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blue-400 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="
                             font-bold
                            h-10
                            px-5
                            text-indigo-100
                            bg-blue-600
                            rounded-lg
                            transition-colors
                            duration-150
                            uppercase
                            focus:shadow-outline
                            hover:bg-blue-800
                        "
                                                    >
                                                    Submit
                                                    </button>
                                                </div>
                                                {/* end of footer */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
           
        </div>
    );
}

export default Modal