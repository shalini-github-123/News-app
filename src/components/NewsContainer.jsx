import React, { useEffect, useState } from 'react';
import NewsBox from './NewsBox';

const NewsContainer = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=8&page=${page}&apiKey=5bdb893aed964c138df2f6654619719f`;
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, [category, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className='my-5'>
      <h2 className='text-center my-5 text-success'>Top Headlines</h2>
      <div className='container-fluid d-flex flex-wrap align-items-center justify-content-center gap-5'>
        {articles.map((article, index) => (
          <NewsBox
            key={index}
            urlToImage={article.urlToImage}
            title={article.title}
            desc={article.description}
            url={article.url}
          />
        ))}
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <button
          className='btn btn-primary m-2'
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button className='btn btn-primary m-2' onClick={() => handlePageChange(page + 1)}>
          Next Page
        </button>
      </div>
    </section>
  );
};

export default NewsContainer;
