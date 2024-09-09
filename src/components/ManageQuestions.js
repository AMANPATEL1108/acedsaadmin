import React, { useState } from "react";
import toast from "react-hot-toast";

const ManageQuestions = () => {
  // Sample JSON data
  const initialQuestions = [
    {
      stat: {
        question_id: 3589,
        question__title: "Find Candidates for Data Scientist Position II",
        question__title_slug: "find-candidates-for-data-scientist-position-ii",
        total_acs: 223,
        total_submitted: 335,
        frontend_question_id: 3278,
        is_new_question: true,
      },
      difficulty: {
        level: 2,
      },
      paid_only: true,
      is_favor: false,
      frequency: 0,
      progress: 0,
      type: "Array",
      company: "LeetCode",
      video_solution_link: "https://www.youtube.com/watch?v=eqsMJ2bVzKk",
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    difficulty: 1,
    type: "",
    company: "",
    video_solution_link: "",
  });
  const [editQuestionId, setEditQuestionId] = useState(null);
  const [editQuestionData, setEditQuestionData] = useState({
    title: "",
    difficulty: 1,
    type: "",
    company: "",
    video_solution_link: "",
  });

  // Add new question
  const addQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.title) {
      setQuestions([
        ...questions,
        {
          stat: {
            question_id: questions.length + 1,
            question__title: newQuestion.title,
            question__title_slug: newQuestion.title
              .toLowerCase()
              .replace(/ /g, "-"),
            total_acs: 0,
            total_submitted: 0,
            frontend_question_id: questions.length + 1,
            is_new_question: true,
          },
          difficulty: { level: newQuestion.difficulty },
          paid_only: false,
          is_favor: false,
          frequency: 0,
          progress: 0,
          type: newQuestion.type,
          company: newQuestion.company,
          video_solution_link: newQuestion.video_solution_link,
        },
      ]);
      setNewQuestion({
        title: "",
        difficulty: 1,
        type: "",
        company: "",
        video_solution_link: "",
      });
      setShowAddForm(false);
      toast.success("Question added successfully!");
    }
  };

  // Remove a question
  const removeQuestion = (id, questionText) => {
    setQuestions(questions.filter((q) => q.stat.question_id !== id));
    toast.error(`Question "${questionText}" has been removed!`);
  };

  // Start editing a question
  const startEditQuestion = (question) => {
    setEditQuestionId(question.stat.question_id);
    setEditQuestionData({
      title: question.stat.question__title,
      difficulty: question.difficulty.level,
      type: question.type,
      company: question.company,
      video_solution_link: question.video_solution_link,
    });
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditQuestionId(null);
    setEditQuestionData({
      title: "",
      difficulty: 1,
      type: "",
      company: "",
      video_solution_link: "",
    });
  };

  // Save the edited question
  const saveEditQuestion = (e) => {
    e.preventDefault();
    if (editQuestionData.title) {
      setQuestions(
        questions.map((q) =>
          q.stat.question_id === editQuestionId
            ? {
                ...q,
                stat: {
                  ...q.stat,
                  question__title: editQuestionData.title,
                  question__title_slug: editQuestionData.title
                    .toLowerCase()
                    .replace(/ /g, "-"),
                },
                difficulty: { level: editQuestionData.difficulty },
                type: editQuestionData.type,
                company: editQuestionData.company,
                video_solution_link: editQuestionData.video_solution_link,
              }
            : q
        )
      );
      setEditQuestionId(null);
      setEditQuestionData({
        title: "",
        difficulty: 1,
        type: "",
        company: "",
        video_solution_link: "",
      });
      toast.success("Question updated successfully!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Manage DSA Questions</h2>

      {/* Add Question Button */}
      <button
        onClick={() => setShowAddForm(true)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
      >
        Add Question
      </button>

      {/* Add Question Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Add New Question</h3>
            <form onSubmit={addQuestion}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={newQuestion.title}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, title: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Difficulty
                </label>
                <select
                  value={newQuestion.difficulty}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      difficulty: parseInt(e.target.value),
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={1}>Easy</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Hard</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <input
                  type="text"
                  value={newQuestion.type}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, type: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  value={newQuestion.company}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, company: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Video Solution Link
                </label>
                <input
                  type="url"
                  value={newQuestion.video_solution_link}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      video_solution_link: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out"
                >
                  Add Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Questions Table */}
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Difficulty</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Video Solution</th>
            <th className="px-4 py-2">Total Acs</th>
            <th className="px-4 py-2">Total Submitted</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr
              key={q.stat.question_id}
              className="border-b hover:bg-gray-50 transition-colors duration-300 ease-in-out"
            >
              <td className="px-4 py-2">{q.stat.question_id}</td>
              <td className="px-4 py-2">{q.stat.question__title}</td>
              <td className="px-4 py-2">{q.difficulty.level}</td>
              <td className="px-4 py-2">{q.type}</td>
              <td className="px-4 py-2">{q.company}</td>
              <td className="px-4 py-2">
                <a
                  href={q.video_solution_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Video
                </a>
              </td>
              <td className="px-4 py-2">{q.stat.total_acs}</td>
              <td className="px-4 py-2">{q.stat.total_submitted}</td>
              <td className="px-4 py-2 space-x-2">
                {editQuestionId === q.stat.question_id ? (
                  <>
                    <button
                      onClick={saveEditQuestion}
                      className="bg-green-500 text-white px-4 py-2 ml-2 mb-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEditQuestion(q)}
                      className="bg-blue-500 text-white px-4 py-2 ml-2 mb-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        removeQuestion(
                          q.stat.question_id,
                          q.stat.question__title
                        )
                      }
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out"
                    >
                      Remove
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageQuestions;
