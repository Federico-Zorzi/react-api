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
              data-bs-toggle="modal"
              data-bs-target={"#" + idArticle}
            >
              <i className="fa-solid fa-trash"></i>
            </button>

            <div className="modal fade" id={idArticle} tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      Stai eliminando l'articolo "{title}"
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Vuoi eliminare l'articolo selezionato?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Annulla
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={() => deleteFunction(idArticle)}
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
