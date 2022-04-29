import React from 'react'

function Footer() {
  return (
    <footer class="text-center flex flex-col justify-center items-center absolute w-full bg-slate-50">
      <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8 bottom-0">
        <div class="max-w-3xl mx-auto space-y-6">
          <div className="text-center font-light font-sm">
            <span>Designed and Coded by: </span>
            <br/>
            <a href="https://www.linkedin.com/in/v12v0/" className="hover:text-blue-700"> Vi Vo | 2022 </a>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer