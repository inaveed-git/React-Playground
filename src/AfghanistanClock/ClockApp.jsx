import Slogan from "./Slogan";

import ShowTime from "./ShowTime";
import { TimeSlogan, CurrentTimeSlogan } from './TimeText';

const ClockApp = () => {
    return (
        <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
                <Slogan />
                <TimeSlogan />
                <CurrentTimeSlogan />
                <div className="flex justify-center items-center text-xl font-semibold space-x-2">

                    <ShowTime />
                </div>
            </div>
        </div>
    );
}

export default ClockApp;
