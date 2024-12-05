import { useState } from "react";

export default function Article({
  index,
  idArticle,
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
          </div>

          <hr />

          <div className="card-article d-flex justify-content-between">
            <div className="mb-3">
              <h5 className="card-title fw-semibold">{title}</h5>
              <span className="badge text-bg-success category me-3">
                {category}
              </span>
              <p className="card-text my-3">{content}</p>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge text-bg-primary category me-3"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div>
              <img src={image} alt="" className="photo img-fluid" />
            </div>
          </div>

          <div className="article-modification mt-1 ms-auto">
            {/* MODIFY ARTICLE TITLE FUNCTION */}
            <input
              type="text"
              id="floatingInput"
              placeholder="Modifica Titolo"
              value={modifyTitleInput}
              onChange={(e) => setModifyTitleInput(e.target.value)}
            />

            <button
              className="btn btn-success mx-2"
              type="button"
              onClick={() =>
                modifyFunction(idArticle, modifyTitleInput, setModifyTitleInput)
              }
            >
              <i className="fa-solid fa-pen"></i>
            </button>

            {/* DELETE ARTICLE FUNCTION */}
            <button
              className="btn btn-danger "
              type="button"
              onClick={() => deleteFunction(idArticle)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
