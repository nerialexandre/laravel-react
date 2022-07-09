import Authenticated from "@/Layouts/Authenticated";
import Guest from "@/Layouts/Guest";


export default function Inputs(props)
{
    return (
        <Authenticated>

            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-12">
                <strong className="font-semibold text-4xl mb-6">Inputs Components</strong>
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>

                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                        <i className="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                </div>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <i className="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                </div>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
                        <i className="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                </div>

                <h1>Small Input</h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
                <h1>Regular Input </h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        <i className="fas fa-user"></i>
                    </span>
                </div>
                <h1> Large Input</h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
                        <i className="fas fa-user"></i>
                    </span>
                </div>

                <h1>Small Input </h1>
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>
                <h1>Regular Input</h1>
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>
                <h1>Large Input</h1>
                <div className="mb-3 pt-0">
                    <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>

                <h1>Small Input</h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                        <i className="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                </div>
                <h1>Regular Input</h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <i className="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                </div>
                <h1>Large Input</h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-normal font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
                        <i className="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border border-slate-300 outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                </div>


            </div>



        </Authenticated>
    )
}
