import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { instructors } from '../assets/clientImage/assets';
import { Star, ChevronDown } from 'lucide-react';

const skillsList = ['UI/UX Design', 'Wireframing', 'User Research', 'Prototyping'];
const reviews = [
    { id: 1, name: "Alice", rating: 5, image: "/user1.jpg", date: "April 2025", content: "Great teacher!" },
    { id: 2, name: "Bob", rating: 4.5, image: "/user2.jpg", date: "March 2025", content: "Learned a lot!" }
];

const TeacherDetails = () => {
    const { id } = useParams();
    const teacher = instructors.find(t => t.id === parseInt(id));
    const [showPhone, setShowPhone] = useState(false);

    if (!teacher) {
        return <div className="text-center py-20 text-lg text-gray-600">Instructor not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto py-10 px-6">

                
                <div className="text-sm text-gray-500 mb-6">
                    <Link to={"/"}>
                    <span>Home / </span>
                    </Link>
                    <Link to={"/allTeacher"}>
                    <span>Instructors / </span>
                    </Link>
                    <span className="text-gray-700 font-medium">{teacher.name}</span>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-10 transition hover:shadow-lg">
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Left Section */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{teacher.name}</h1>
                            <p className="text-gray-600 mb-6 text-lg">{teacher.specialization}</p>

                            <div className="flex flex-wrap gap-6 mb-8 text-gray-700">
                                <div>
                                    <span className="text-2xl font-semibold">{teacher.students}</span>
                                    <span className="block text-sm">Students</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-semibold">{teacher.experience}</span>
                                    <span className="block text-sm">Years Experience</span>
                                </div>
                            </div>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-2">About</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {teacher.name} is a dedicated and innovative instructor with expertise in {teacher.specialization}. They’ve helped hundreds of students master both fundamentals and advanced topics.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-2">Skills & Expertise</h2>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    {skillsList.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Worked with startups and industry giants to build exceptional digital products. Actively contributes to product design, research, and engineering processes.
                                </p>
                            </section>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-72 flex flex-col items-center relative">
                            <div className="w-36 h-36 rounded-full shadow-md overflow-hidden mb-6 border-4 border-white">
                                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full space-y-3 relative">
                                {/* Contact button */}
                                <div className="relative">
                                    <button
                                        className="w-full py-2 px-4  bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition flex items-center justify-between"
                                        onClick={() => setShowPhone(prev => !prev)}
                                    >
                                        Contact <ChevronDown className="ml-2 w-4 h-4" />
                                    </button>

                                    {showPhone && (
                                        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md p-4 z-10 text-gray-700 text-center">
                                            Phone: <span className="font-semibold">{teacher.phone}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Other buttons */}
                                <button className="w-full py-2 px-4 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <section className="bg-white rounded-2xl shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learner Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="p-4 border border-gray-100 rounded-xl hover:shadow-sm transition">
                                <div className="flex items-start gap-4 mb-2">
                                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h3 className="font-medium text-gray-800">{review.name}</h3>
                                        <div className="flex items-center text-yellow-500 text-sm">
                                            {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" />
                                            ))}
                                            <span className="ml-1 text-gray-600">{review.rating.toFixed(1)}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm">{review.content}</p>
                            </div>
                        ))}
                    </div>

                </section>
            </main>
        </div>
    );
};

export default TeacherDetails;
