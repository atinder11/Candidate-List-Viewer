import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaFilter } from "react-icons/fa";
import "./css/CandidateViewer.css";

function CandidateViewer() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:5000/api/candidates").then((response) => {
      setCandidates(response.data);
      setFilteredCandidates(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredCandidates(
      candidates.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(value) ||
          candidate.skills.toLowerCase().includes(value)
      )
    );
  };

  const handleSort = () => {
    const sorted = [...filteredCandidates].sort((a, b) =>
      sortOrder === "asc"
        ? a.experience - b.experience
        : b.experience - a.experience
    );
    setFilteredCandidates(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="title">Candidate List Viewer</h1>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search by Name or Skills"
            value={search}
            onChange={handleSearch}
            className="form-control search-input"
          />
          <span className="input-group-text search-icon">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Skills</th>
              <th>
                Years of Experience
                <button className="btn btn-link" onClick={handleSort}>
                  <FaFilter className="filter-icon" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.skills}</td>
                <td>{candidate.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateViewer;