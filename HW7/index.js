'use strict'

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

function createPostCard(post) {    
    const body = document.querySelector('body');
    body.style.display= 'flex';
    body.style.flexWrap =  'wrap';

        let movie = document.createElement('div');
        let movieImg = document.createElement('img');
        let movieBody = document.createElement('div');
        let movieTitle = document.createElement('h2');
        let movieDescription = document.createElement('p');
        let movieDate = document.createElement('p');

    movieImg.setAttribute('src',post.img);
    movieTitle.textContent = `${post.title}`;
    movieDescription.textContent = `${post.text}`;
	movieDate.textContent = `${post.link}`;
    
        movie.classList.add('movie');
        movieImg.classList.add('movie__image');
        movieBody.classList.add('movie__body');
        movieTitle.classList.add('movie__title');
        movieDescription.classList.add('movie__descriotion');
        movieDate.classList.add('movie__date');

	movie.append(movieImg, movieBody);
	movieBody.append(movieTitle, movieTitle, movieDescription, movieDate);
	body.append(movie);

}

function createCards(posting) {
    
    for(let el of posting) {
        createPostCard(el)
    }
}

createCards(posts)


