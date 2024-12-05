import { useState, useEffect } from "react";

import Article from "../Article";

import articles from "../../assets/data/articles";
import { categories } from "../../assets/data/articleCategories";

export default function Main() {
  const defaultArticle = {
    title: "",
    content: "",
    author: "",
    image: "",
    category: "",
    isPublished: false,
    tags: [],
  };

  const [formData, setformData] = useState(defaultArticle);

  const [articlesList, setArticlesList] = useState(articles);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setformData({ ...formData, [e.target.name]: value });
  };

  const handleTagsChange = (e) => {
    let newTags = e.target.checked
      ? [...formData.tags, e.target.value]
      : formData.tags.filter((tag) => tag != e.target.value);

    setformData({ ...formData, tags: newTags });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.content ||
      formData.category === ""
    ) {
      alert("Completa tutti i campi per creare il nuovo articolo");
      return;
    }

    if (!formData.image) formData.image = "img-default.svg";

    const updatedList = [
      ...articlesList,
      {
        title: formData.title,
        author: formData.author,
        content: formData.content,
        image: formData.image,
        category: formData.category,
        isPublished: formData.isPublished,
        tags: formData.tags,
      },
    ];

    console.log(updatedList);

    setArticlesList(updatedList);

    /* reset input fields */
    setformData(defaultArticle);
  };

  const deleteArticle = (index) => {
    const updatedList = articlesList.filter((article, i) => i !== index);

    setArticlesList(updatedList);
  };

  const modifyArticle = (index, modifyTitleInput, setModifyTitleInput) => {
    console.log(index, modifyTitleInput);

    const updatedList = [...articlesList];

    const articleTomodify = updatedList.find((article, i) => i === index);
    articleTomodify.title = modifyTitleInput;

    setArticlesList(updatedList);

    /* reset input fields */
    setModifyTitleInput("");
  };

  useEffect(() => {
    if (formData.isPublished) alert("L'articolo verrà pubblicato");
  }, [formData.isPublished]);

  return (
    <main>
      <div className="container">
        {/* FORM SECTION */}
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* INPUT FOR ARTICLE TITLE */}
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="articleTitle" className="form-label">
                    Titolo articolo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleTitle"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                  />
                </div>
              </div>

              {/* INPUT FOR ARTICLE AUTHOR */}
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="articleAuthor" className="form-label">
                    Autore
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleAuthor"
                    value={formData.author}
                    onChange={handleChange}
                    name="author"
                  />
                </div>
              </div>

              {/* INPUT FOR ARTICLE CONTENT */}
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="articleContent" className="form-label">
                    Contenuto articolo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleContent"
                    value={formData.content}
                    onChange={handleChange}
                    name="content"
                  />
                </div>
              </div>

              {/* INPUT FOR ARTICLE IMAGE */}
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="articleImage" className="form-label">
                    Immagine
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="articleImage"
                    value={formData.image}
                    onChange={handleChange}
                    name="image"
                  />
                </div>
              </div>

              {/* INPUT FOR ARTICLE CATEGORY */}
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="articleCategory" className="form-label">
                    Categoria
                  </label>

                  <select
                    id="articleCategory"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                    name="category"
                  >
                    <option value="">Scegli la categoria dell'articolo</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* INPUT FOR ARTICLE PUBLISHED */}
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="articlePublish" className="form-label">
                    Pubblica
                  </label>
                  <div>
                    <input
                      id="articlePublish"
                      className="form-check-input mt-0"
                      type="checkbox"
                      checked={formData.isPublished}
                      onChange={handleChange}
                      name="isPublished"
                    />
                  </div>
                </div>
              </div>

              {/* TO DEVELOP - INPUT FOR ARTICLE TAGS */}
              <div className="col">
                <label htmlFor="articleTags" className="form-label">
                  Tags
                </label>

                <div
                  id="articleTags"
                  className="btn-group"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck1"
                    autoComplete="off"
                    value="Tag 1"
                    checked={formData.tags.includes("Tag 1")}
                    onChange={handleTagsChange}
                    name="tags"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btncheck1"
                  >
                    Tag 1
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck2"
                    value="Tag 2"
                    checked={formData.tags.includes("Tag 2")}
                    onChange={handleTagsChange}
                    name="tags"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btncheck2"
                  >
                    Tag 2
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck3"
                    value="Tag 3"
                    checked={formData.tags.includes("Tag 3")}
                    onChange={handleTagsChange}
                    name="tags"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btncheck3"
                  >
                    Tag 3
                  </label>
                </div>
              </div>
            </div>

            {/* BUTTON FOR SUBMIT */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>

        {/* ARTICLE SECTION */}
        <section className="article-section">
          {articlesList
            .filter((article) => article.isPublished)
            .map((article, index) => (
              <Article
                key={index}
                index={index}
                title={article.title}
                content={article.content}
                author={article.author}
                image={article.image}
                category={article.category}
                tags={article.tags}
                deleteFunction={deleteArticle}
                modifyFunction={modifyArticle}
              ></Article>
            ))}
        </section>
      </div>
    </main>
  );
}
