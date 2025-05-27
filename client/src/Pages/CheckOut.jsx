import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch the course details based on the id
    const fetchCourse = async () => {
      // Replace with your actual API call, here is a mock for illustration
      const courseData = await fetch(`/api/courses/${id}`).then(res => res.json());
      setCourse(courseData);
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 px-4 md:px-12 py-6">
        <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Payment Form */}
          <div className="flex-1">
            <div className="border border-gray-200 rounded-md p-6 mb-6">
              {/* Country/State Fields */}
              <div className="mb-6">
                <div className="font-medium mb-2">Country</div>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Enter Country"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="w-full">
                    <div className="font-medium mb-2 md:hidden">State/Union Territory</div>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <div className="font-medium mb-4">Payment Method</div>
                {/* Payment options here */}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-md p-6">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              
              {/* Course Details */}
              <div className="flex mb-4 pb-4 border-b border-gray-200">
                <div className="mr-4">
                  <img src={course.imageUrl} alt="Course" className="w-20 h-20 object-cover rounded" />
                </div>
                <div>
                  <div className="text-blue-600 text-sm">{course.category}</div>
                  <div className="font-medium mb-1">{course.title}</div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-1" />
                    <span>{course.lecturesCount} Lectures • {course.totalHours} Total Hours</span>
                  </div>
                  <div className="mt-1 font-medium">${course.price}</div>
                </div>
              </div>
              
              {/* Coupon Code */}
              <div className="mb-6">
                <button className="flex items-center text-blue-600 text-sm font-medium">
                  <span className="mr-2">APPLY COUPON CODE</span>
                </button>
              </div>
              
              {/* Price Breakdown */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Price</span>
                  <span className="font-medium">${course.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-medium">-${course.discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium">${course.tax}</span>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between pt-4 border-t border-gray-200 font-bold">
                <span>Total</span>
                <span>${course.total}</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-md mt-6">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
