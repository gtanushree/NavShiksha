"use client";
import Image from "next/image";
import login from "../../../public/assets/login.png";
import SidebarComponent from "@/component/sidebar/sidebar";
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

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const IntegratedDashboard = () => {

    const parentName = useSelector((state: RootState) => state.parent.parent);
    console.log(parentName);

    return (
        <div className="flex h-screen bg-gray-900">
            <SidebarComponent />

            <div className="flex-1 p-10 overflow-y-auto dark:bg-neutral-800">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold text-white">Welcome back, <span className="text-4xl">{parentName?.firstName || 'Parent'}</span></h2>
                    <div className="flex items-center text-gray-300">
                        <Image
                            src={login}
                            className=" flex-shrink-0 rounded-full"
                            width={75}
                            height={75}
                            alt="Avatar"
                        />
                        <span>{parentName?.firstName || 'Parent'} {parentName?.lastName || ''}</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                        { icon: '🎓', label: 'Enrolled Course', value: 24 },
                        { icon: '📚', label: 'Lesson', value: 56 },
                        { icon: '🏅', label: 'Certificates', value: 17 },
                    ].map((stat, index) => (
                        <div key={index} className="bg-gray-700 shadow-md rounded-lg p-6 flex items-center">
                            <span className="text-3xl mr-4">{stat.icon}</span>
                            <div>
                                <p className="text-3xl font-bold text-white">{stat.value}</p>
                                <p className="text-gray-300">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Continue Learning */}
                <div className="bg-gray-700 shadow-md rounded-lg mb-8">
                    <div className="p-6 border-b border-gray-600">
                        <h3 className="text-xl font-semibold text-white">Continue Learning</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subjects.map((subject, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-between items-start p-4 border border-gray-600 rounded-lg shadow-md bg-gray-800"
                                >
                                    <div className="text-lg font-semibold text-white">{subject.name}</div>
                                    <div className="text-gray-300">{subject.progress} completed</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-700 shadow-md rounded-lg">
                    <div className="p-6 border-b border-gray-600">
                        <h3 className="text-3xl font-semibold text-white">Books</h3>
                    </div>
                    <div className="p-6 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recommendedSubjects.map((subject, index) => (
                            <div key={index} className="p-4 border border-gray-600 rounded-lg shadow-md bg-gray-800">
                                <h4 className="text-lg font-semibold text-white">{subject.name}</h4>
                                <p className="text-gray-300 mt-2">{subject.description}</p>
                                <div className="mt-4">
                                    <span className="text-blue-400 font-semibold">Progress: {subject.progress}</span>
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
