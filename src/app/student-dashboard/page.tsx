"use client";
import login from "../../../public/assets/login.png";
import Image from "next/image";

// Data
const progressData = [
    { day: 'Sun', hours: 5 },
    { day: 'Mon', hours: 8 },
    { day: 'Tue', hours: 3 },
    { day: 'Wed', hours: 7 },
    { day: 'Thu', hours: 9 },
    { day: 'Fri', hours: 4 },
    { day: 'Sat', hours: 6 },
];

const subjects = [
    { name: 'Physics', progress: '75%' },
    { name: 'Chemistry', progress: '60%' },
    { name: 'Mathematics', progress: '85%' },
    { name: 'Biology', progress: '50%' },
    { name: 'Computer Science', progress: '70%' },
    { name: 'English', progress: '100%' },
];

const recommendedSubjects = [
    { name: 'Astronomy', description: 'Explore the universe and the celestial bodies.', progress: '30%' },
    { name: 'Geography', description: 'Understand the physical features of the Earth and its atmosphere.', progress: '45%' },
    { name: 'Economics', description: 'Study the production, distribution, and consumption of goods and services.', progress: '55%' },
    { name: 'Psychology', description: 'Delve into the science of behavior and mental processes.', progress: '40%' },
    { name: 'Art History', description: 'Discover the evolution of art and its impact on culture.', progress: '65%' },
];


// Add this import
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import SidebarComponent from "@/component/sidebar/sidebar";

const IntegratedDashboard: React.FC = () => {
  // Add this selector
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);

    return (
        <div className="flex h-screen bg-white dark:bg-black">
            <SidebarComponent />
            <div className="flex-1 p-10 overflow-y-auto bg-white dark:bg-black">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-[#12284b] dark:text-[#e2f4fd]">Welcome back, <br /> 
                        <span className="text-4xl">{user?.firstName || 'Guest'} 👋</span>
                    </h2>
                    <div className="flex items-center text-[#12284b] dark:text-[#e2f4fd]">
                        <Image
                            src={login}
                            className=" flex-shrink-0 rounded-full"
                            width={75}
                            height={75}
                            alt="Avatar"
                        />
                        <span className="text-2xl">{user?.firstName} {user?.lastName}</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                        { icon: '🎓', label: 'Enrolled Course', value: 24 },
                        { icon: '📚', label: 'Lesson', value: 56 },
                        { icon: '🏅', label: 'Certificates', value: 17 },
                    ].map((stat, index) => (
                        <div key={index} className="bg-blue-200 dark:bg-neutral-700 shadow-md rounded-lg p-6 flex items-center">
                            <span className="text-3xl mr-4">{stat.icon}</span>
                            <div>
                                <p className="text-3xl font-bold text-[#12284b] dark:text-[#e2f4fd]">{stat.value}</p>
                                <p className="text-[#12284b] dark:dark:text-[#e2f4fd]">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Continue Learning */}
                <div className="bg-[#e2f4fd]  dark:bg-neutral-700 shadow-md rounded-lg mb-8">
                    <div className="p-6 border-b border-blue-300 dark:border-neutral-600">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white">Continue Learning</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subjects.map((subject, index) => (
                                <div key={index} className="flex flex-col justify-between items-start p-4 border border-blue-300 dark:border-neutral-600 rounded-lg shadow-md bg-blue-300 dark:bg-neutral-600">
                                    <div className="text-lg font-semibold text-blue-900 dark:text-white">{subject.name}</div>
                                    <div className="text-blue-700 dark:text-gray-300">{subject.progress} completed</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Chart */}
                <div className="bg-blue-200 dark:bg-neutral-700 shadow-md rounded-lg mb-8">
                    <div className="p-6 border-b border-blue-300 dark:border-neutral-600">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white">Progress</h3>
                    </div>
                    <div className="p-6">
                        <div className="flex">
                            {progressData.map((item, index) => (
                                <div key={index} className="flex-1 mr-2">
                                    <div className="bg-blue-600 text-white text-center rounded-lg" 
                                         style={{ height: `${item.hours * 10}px`, width: '100%' }}>
                                        <div className="text-xs py-1">{item.hours} hrs</div>
                                    </div>
                                    <div className="text-center text-xs mt-1 text-blue-700 dark:text-gray-300">{item.day}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended Courses */}
                <div className="bg-blue-200 dark:bg-neutral-700 shadow-md rounded-lg">
                    <div className="p-6 border-b border-blue-300 dark:border-neutral-600">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white">Recommended for you</h3>
                    </div>
                    <div className="p-6 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recommendedSubjects.map((subject, index) => (
                            <div key={index} className="p-4 border border-blue-300 dark:border-neutral-600 rounded-lg shadow-md bg-blue-300 dark:bg-neutral-600">
                                <h4 className="text-lg font-semibold text-blue-900 dark:text-white">{subject.name}</h4>
                                <p className="text-blue-700 dark:text-gray-300 mt-2">{subject.description}</p>
                                <div className="mt-4">
                                    <span className="text-blue-800 dark:text-blue-400 font-semibold">Progress: {subject.progress}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegratedDashboard;