async function fetchAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albums = await response.json();
        const filteredAlbums = albums.filter(album => album.title);
        const transformedAlbums = filteredAlbums.map(album => ({
            id: album.id,
            title: album.title,
        }));
        displayOutput(transformedAlbums);
    } catch (error) {
        console.error('Error fetching albums:', error);
    }
}

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        const filteredPosts = posts.filter(post => post.title);
        const sortedPosts = filteredPosts.sort((a, b) => a.id - b.id);
        displayOutput(sortedPosts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const filteredUsers = users.filter(user => user.email);
        const userCountWithPhone = filteredUsers.reduce((count, user) => user.phone ? count + 1 : count, 0);
        console.log('Total users with phone numbers:', userCountWithPhone);
        displayOutput(filteredUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

async function fetchComments() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        const comments = response.data;
        const filteredComments = comments.filter(comment => comment.name);
        displayComments(filteredComments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const filteredTodos = todos.filter(todo => !todo.completed);
        const transformedTodos = filteredTodos.map(todo => ({
            id: todo.id,
            title: todo.title,
        }));
        displayOutput(transformedTodos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function displayOutput(data) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; 
    document.getElementById('comments-table').style.display = 'none';
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'card mb-3';
        itemElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">ID: ${item.id}</h5>
                <p class="card-text">${item.title || item.name}</p>
            </div>
        `;
        outputElement.appendChild(itemElement);
    });
}

function displayComments(comments) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; // Clear previous output
    const tableBody = document.getElementById('comments-table-body');
    tableBody.innerHTML = '';
    comments.forEach(comment => {
        const row = `<tr>
                        <td>${comment.id}</td>
                        <td>${comment.name}</td>
                        <td>${comment.email}</td>
                        <td>${comment.body}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
    document.getElementById('comments-table').style.display = 'table';
}

document.getElementById('fetchAlbumsBtn').addEventListener('click', fetchAlbums);
document.getElementById('fetchPostsBtn').addEventListener('click', fetchPosts);
document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);
document.getElementById('fetchCommentsBtn').addEventListener('click', fetchComments);
document.getElementById('fetchTodosBtn').addEventListener('click', fetchTodos);