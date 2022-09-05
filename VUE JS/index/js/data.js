const url = "http://127.0.0.1:8999/api/users_posts_comments";
const container = document.getElementsByClassName("container")[0];

axios.get(url).then((result) => {
  console.log(result);
  displayAllData(result.data);
});
function displayAllData(response) {
  console.log(response);

  for (let k of response) {
      displayData(k);
  }
  
}
function displayData(response) {
  let user = document.createElement("div");
  user.className = "user";
  console.log(response.id);
  for (let posts of response.post) {
    let image = document.createElement("img");
    image.src = posts.image;
    let user_name = document.createElement("p");
    user_name.setAttribute("data-id", response.id);
    user_name.textContent = response.name;
    let main_post = document.createElement("div");
    main_post.className = "post";
    let post = document.createElement("h4");
    post.textContent = posts.title;
    let description = document.createElement("p");
    description.textContent = posts.description;
    let hr = document.createElement("hr");
    main_post.appendChild(user_name);
    main_post.appendChild(post);
    main_post.appendChild(description);
    let main_comment = document.createElement("div");
    main_post.appendChild(image);
    for (let comments of posts.comment) {
        if (comments.user_id == response.id) {
            let comment = document.createElement("p");
            comment.textContent = response.name + ": " + comments.text;
            console.log(comment);
            main_comment.appendChild(comment);
        }
      main_post.appendChild(hr);
      main_post.appendChild(main_comment);
    }
    user.appendChild(main_post);
  }
  container.appendChild(user);
}
container.addEventListener('click',(e)=>{
    localStorage.setItem('user_id', e.target.dataset.id); 
  window.location.href='/profile.html';
})