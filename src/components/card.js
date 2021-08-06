import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div'),
  headline = document.createElement('div'),
  author = document.createElement('div'),
  imgDiv = document.createElement('div'),
  img = document.createElement('img') ,
  span = document.createElement('span');
  
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgDiv.classList.add('img-container');
  
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgDiv);
  imgDiv.appendChild(img);
  author.appendChild(span);
  
  img.src = article.authorPhoto;
  
  headline.textContent = article.headline;
  span.textContent = article.authorName;
  
  card.addEventListener('click', () => console.log(article.headline));
  
  return card;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const card = document.querySelector(selector);

  axios.get('http://localhost:5000/api/articles').then((res)=>{
    console.log(res)

  const bootstrap = res.data.articles.bootstrap;
    bootstrap.forEach(element => {
    card.appendChild(Card(element));
  });
  const jp = res.data.articles.javascript;
    jp.forEach((element)=>{
    card.appendChild(Card(element));
  })
  const jq = res.data.articles.jquery;
    jq.forEach((element)=>{
    card.appendChild(Card(element));
  })
  const node = res.data.articles.node;
    node.forEach((element)=>{
    card.appendChild(Card(element));
  })
  const tech = res.data.articles.technology;
      tech.forEach(element => {
      card.appendChild(Card(element));
      });

  }).catch((err)=>{
    console.log(err);
  })

}

export { Card, cardAppender }
