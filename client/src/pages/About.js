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
                            <article class="space-y-5 text-gray-500 dark:text-gray-200 ">
                                <p>
                                    This app was inspired by my parents who are immigrants. Being so, learning english is and still a process for them. Not to mention in a world where technology and applications are the main wheels of our society.
                                    Each app that they downloaded and used was yet another steep learning curve in their eyes. Why should one adapt to technology when technology should be created with everyone in mind regardless of their background?
                                  
                                </p>
                                {/* <br/> */}
                                <p>
                                    My square's was created for those who want simplicity and intuitive features without the clutter and the confusion.
                                    Utilizing one centeralized workspace that allows users to handle their tasks, view thier calender, and announcements all at a single glance.
                                </p>
                                <p>
                                    Made for students by students. My Squares aims to eliminate the need to use multiple apps to manage your productivity
                                    workspace. In a world where single use apps have become cluttered and complex, My Squares provides the
                                    essentials features and streamlines the work flow by providing users a clean experience.
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