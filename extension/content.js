// Sample code for content.js
const headlines = document.querySelectorAll('your-selector-for-headlines');

const changedHeadlines = changeHeadlinesIntoRhymes(Array.from(headlines).map(h => h.innerText));
const biasedArticles = Array.from(document.querySelectorAll('your-selector-for-articles')).map(article => {
  const articleText = article.innerText;
  return appendBiasSummary(articleText);
});

// Display or send the changed headlines and biased articles to the front-end
