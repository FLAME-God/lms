import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddCourse() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    rating: "",
    students: "",
    price: "",
    image: "",       // will hold base64 image string now
    duration: "",
    syllabus: [
      { section: "", lectures: [""] },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // * Added file input handler *
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSyllabusChange = (index, field, value) => {
    const updated = [...formData.syllabus];
    updated[index][field] = value;
    setFormData({ ...formData, syllabus: updated });
  };

  const handleLectureChange = (sIndex, lIndex, value) => {
    const updated = [...formData.syllabus];
    updated[sIndex].lectures[lIndex] = value;
    setFormData({ ...formData, syllabus: updated });
  };

  const addSection = () => {
    setFormData((prev) => ({
      ...prev,
      syllabus: [...prev.syllabus, { section: "", lectures: [""] }],
    }));
  };

  // * Added remove section function *
  const removeSection = (index) => {
    setFormData((prev) => {
      const updated = [...prev.syllabus];
      updated.splice(index, 1);
      // If no sections remain, add an empty section to avoid zero sections
      return { ...prev, syllabus: updated.length ? updated : [{ section: "", lectures: [""] }] };
    });
  };

  const addLecture = (index) => {
    const updated = [...formData.syllabus];
    updated[index].lectures.push("");
    setFormData({ ...formData, syllabus: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCourse = {
      ...formData,
      id: Date.now(), // simple ID generation
      rating: parseFloat(formData.rating),
      students: parseInt(formData.students),
      price: parseFloat(formData.price),
      duration: parseInt(formData.duration),
    };

    try {
      // Send to API or log
      await axios.post("/api/courses", newCourse);
      alert("✅ Course submitted successfully");
      navigate('/list-course'); 
    } catch (error) {
      alert("❌ Failed to submit course");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Full Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Top Inputs */}
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="title" placeholder="Course Title" value={formData.title} onChange={handleChange} className="input" required />
          <input type="text" name="instructor" placeholder="Instructor" value={formData.instructor} onChange={handleChange} className="input" required />
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <input type="number" step="0.1" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="input" required />
          <input type="number" name="students" placeholder="Students" value={formData.students} onChange={handleChange} className="input" required />
          <input type="number" step="0.01" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="input" required />
          <input type="number" name="duration" placeholder="Duration (hours)" value={formData.duration} onChange={handleChange} className="input" required />
        </div>

        {/* * Changed image input from text to file input * */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input w-full"
            required
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="mt-2 max-h-40 object-contain"
            />
          )}
        </div>

        {/* Syllabus Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Syllabus</h3>
          {formData.syllabus.map((section, sIndex) => (
            <div
              key={sIndex}
              className="relative border p-4 rounded-lg mb-4 bg-gray-50"
            >
              {/* * Added remove button on top-right corner * */}
              <button
                type="button"
                onClick={() => removeSection(sIndex)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold"
                title="Remove Section"
              >
                &times;
              </button>

              <input
                type="text"
                placeholder="Section Title"
                value={section.section}
                onChange={(e) =>
                  handleSyllabusChange(sIndex, "section", e.target.value)
                }
                className="input w-full mb-3"
              />

              {section.lectures.map((lecture, lIndex) => (
                <input
                  key={lIndex}
                  type="text"
                  placeholder={`Lecture ${lIndex + 1}`}
                  value={lecture}
                  onChange={(e) =>
                    handleLectureChange(sIndex, lIndex, e.target.value)
                  }
                  className="input w-full mb-2"
                />
              ))}

              <button
                type="button"
                onClick={() => addLecture(sIndex)}
                className="text-blue-600 text-sm hover:underline mt-1"
              >
                + Add Lecture
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="text-green-600 text-sm hover:underline mt-2"
          >
            + Add Section
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          Submit Course
        </button>
      </form>
    </div>
  );
}
