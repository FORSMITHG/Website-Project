document.addEventListener('DOMContentLoaded', fetchPosts);

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error('Error fetching posts:', error));
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}
