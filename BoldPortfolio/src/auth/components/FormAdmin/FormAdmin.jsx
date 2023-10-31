import { useState } from "react";

export function FormAdmin({ onFormSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ title, description, category, uploadedImages });
    setTitle("");
    setDescription("");
    setCategory("");
    setUploadedFiles([]);
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange} required>
            <option value="">Select a category</option>
            <option value="App / Web Development">App / Web Development</option>
            <option value="UI Design">UI Design</option>
            <option value="UX Design">UX Design</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Branding">Branding</option>
          </select>
        </div>
        <div>
          <label>Upload files:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
          />
        </div>
        <button type="submit">Publish</button>
      </form>

      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <p>New project created!</p>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}