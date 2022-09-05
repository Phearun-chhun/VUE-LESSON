const url = "http://127.0.0.1:8999/api/users_posts_comments";
let user_id_local = JSON.parse(localStorage.getItem("user_id"));
axios.get(url+'/'+user_id_local).then((result) => {
    console.log(result.data);
    let user = document.createElement("div");
    user.className = "user";
    for (let post of result.data.post) {
        let image = document.createElement("img");
        image.src = post.image ;
        console.log(image);
        let user_name = document.createElement("p");
        user_name.textContent = result.data.name;
        let main_post = document.createElement("div");
        main_post.className = "post";
        let posts = document.createElement("h4");
        posts.textContent = post.title;
        let description = document.createElement("p");
        description.textContent = post.description;
        let hr = document.createElement("hr");
        main_post.appendChild(user_name);
        main_post.appendChild(posts);
        main_post.appendChild(description);
        let main_comment = document.createElement("div");
        main_post.appendChild(image);
        for (let comments of post.comment) {
            if (comments.user_id == result.data.id) {
                let comment = document.createElement("p");
                comment.textContent = result.data.name + ": " + comments.text;
                console.log(comment);
                main_comment.appendChild(comment);
            }
          main_post.appendChild(hr);
          main_post.appendChild(main_comment);
        }
        user.appendChild(main_post);
    }
    document.body.appendChild(user);
});
