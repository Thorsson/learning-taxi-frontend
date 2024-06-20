import security from "../../assets/icons/security.svg";
import arrow from "../../assets/icons/arrow.svg";
import group from "../../assets/icons/group.svg";
import "./LoadingPage.css"
import { useEffect, useState } from "react";

function LoadingPage() {
    const [showUberBox, setShowUberBox] = useState(false);
    const [showOtherElements, setShowOtherElements] = useState(false);
    const [showArrows, setShowArrows] = useState(false);

    useEffect(() => {
        setShowUberBox(true);
        const timer1 = setTimeout(() => {
            setShowOtherElements(true);
        }, 1000); // delay for the other elements

        const timer2 = setTimeout(() => {
            setShowArrows(true);
        }, 1550); // additional delay for the arrows

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="h-[852px] w-[414px] bg-gradient-to-b from-lochmara-700 to-blue-ribbon-500 text-zumthor-50 flex flex-col justify-end items-center pb-16">
            <div className="text-center mb-6 flex items-center relative">
                <img src={group} alt="arrows" className={`w-[208.5px] absolute right-14 fade-in delay-2 ${showArrows ? "show" : ""}`} />
                <div className="custom-white-black flex justify-center items-center rounded-2xl bg-gradient-to-b from-lochmara-700 to-blue-ribbon-500 drop-shadow-md w-[181px] h-[181px] mx-auto mb-4">
                    <h1 className="font-open-sans font-semibold text-6xl">Uber</h1>
                </div>
            </div>
            <div className={`fade-in delay-1 ${showOtherElements ? "show" : ""} flex flex-col items-center`}>
                <div className="border-2 rounded-2xl w-[251px] h-[54.38px] flex items-center justify-between mb-10 px-7">
                    <p className="font-open-sans-600 text-xl">Move with safety</p>
                    <img className="w-[41.83px] h-[41.83px]" src={security} alt="security icon" />
                </div>

                <div className="pt-12 form space-y-4 flex flex-col items-center">
                    <a href="">
                        <button className="font-roboto font-medium text-zumthor-50 px-16 rounded-lg flex items-center justify-between w-[341px] h-[58px] bg-gradient-to-b from-lochmara-700 to-blue-ribbon-500 shadow-md shadow-gray-800 hover:bg-gradient-to-b hover:from-lochmara-700 hover:to-blue-ribbon-600">
                            <span className="flex-1 text-center text-xl">Login</span>
                            <img src={arrow} alt="seta" className="w-[24px] h-[21px]" />
                        </button>
                    </a>
                    {/* add link */}

                    <a href="">
                        <button className="font-roboto font-medium text-zumthor-50 px-16 rounded-lg flex items-center justify-between w-[341px] h-[58px] bg-gradient-to-b from-lochmara-700 to-blue-ribbon-500 shadow-md shadow-gray-800 hover:bg-gradient-to-b hover:from-lochmara-700 hover:to-blue-ribbon-600">
                            <span className="flex-1 text-center text-xl">Get Started</span>
                            <img src={arrow} alt="seta" className="w-[24px] h-[21px]" />
                        </button>
                    </a>
                    {/* add link */}

                </div>
            </div>
        </div>
    );
}

export default LoadingPage;
