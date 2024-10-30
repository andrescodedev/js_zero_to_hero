async function sendHttpRequest(url, httpMethod, data) {
    return await fetch(
        url,
        {
            method: httpMethod,
            body: JSON.stringify(data),
            headers: {
                "Content-type":"application/json",
            },
        },
    ).then((response) => response.json());
}

async function getAllPosts() {
    
    let responseHttpRequest = await sendHttpRequest('https://jsonplaceholder.typicode.com/posts','GET');
    let posts = responseHttpRequest;

    for(let post of posts) {
        console.log(`Title: ${post.title}\nContent: ${post.body}\nId: ${post.id}\n\n`);
    }
}

async function createPost() {
    let post = {
        title:'Real Madrid',
        body:'Hala Madrid'
    };

    let responseHttpRequest = await sendHttpRequest('https://jsonplaceholder.typicode.com/posts','POST',post);
    console.log(responseHttpRequest);
}

async function deletePost() {
    let postIdToDelete = 1;

    let responseHttpRequest = await sendHttpRequest(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`,'DELETE');
    console.log(responseHttpRequest);
}

//getAllPosts();
//createPost();
deletePost();
getAllPosts();

