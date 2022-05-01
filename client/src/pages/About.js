import React from 'react'
import company from "../images/company.png"

function About() {
    return (
        <div>
            <section>
                <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 text-gray-500 dark:text-gray-200 ">
                    <div class="max-w-3xl">
                        <h2 class="text-3xl font-bold sm:text-4xl">
                           For the go getter, the doer, and the driven. 
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
                        <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                class="absolute inset-0 object-cover w-full h-full rounded"
                                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Man using a computer"
                            />
                        </div>

                        <div class="lg:py-16">
                            <article class="space-y-4 text-gray-500 dark:text-gray-200 ">
                                <p>
                                   My squares was born out of the need for a centeralized workspace that allows users to 
                                   handle their tasks, view thier calender, and announcements all at a single glance. 
                                </p>

                                <p>
                                    Made for students by students. My Squares aims to eliminate the need to use multiple apps to manage your productivity
                                    workspace. In a world where single use apps have cluttered and complex, My Squares provides the
                                    essentials and streamlines the work flow by providing users with only the essential features.  
                                    
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About