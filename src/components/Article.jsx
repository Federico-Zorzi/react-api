import { useState } from "react";

export default function Article({
  index,
  title,
  content,
  author,
  image,
  category,
  tags,
  deleteFunction,
  modifyFunction,
}) {
  const [modifyTitleInput, setModifyTitleInput] = useState("");

  return (
    <article>
      <div className="card my-3">
        <div className="card-body d-flex flex-column">
          <div className="card-user ms-auto">
            <span className="username fst-italic me-3">{author}</span>
            <img src={image} alt="" />
          </div>

          <hr />

          <div className="card-article">
            <h5 className="card-title fw-semibold">{title}</h5>
            <span className="badge text-bg-success category me-3">
              {category}
            </span>
            <p className="card-text">{content}</p>
            {tags.map((tag, index) => (
              <span key={index} className="badge text-bg-primary category me-3">
                #{tag}
              </span>
            ))}
          </div>

          {/* DELETE ARTICLE FUNCTION */}
          <div className="delete-article mt-1 ms-auto">
            <button
              className="btn btn-danger "
              type="button"
              onClick={() => deleteFunction(index)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

          {/* MODIFY ARTICLE TITLE FUNCTION */}
          <div className="modify-title mt-1 ms-auto">
            <input
              type="text"
              id="floatingInput"
              placeholder="Modifica Titolo"
              value={modifyTitleInput}
              onChange={(e) => setModifyTitleInput(e.target.value)}
            />

            <button
              className="btn btn-success ms-2"
              type="button"
              onClick={() =>
                modifyFunction(index, modifyTitleInput, setModifyTitleInput)
              }
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
