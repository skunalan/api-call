const userPosts = document.getElementById("user-posts");

const fetchUserPosts = async () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  console.log(userId);
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await response.json();
    console.log(posts);

    userPosts.innerHTML = "";
    userPosts.innerHTML = `
    <div id="user-name">
      <h1 class="mt-5 text-center fw-bolder text-bg-danger shadow-lg"> USER "${userId}" POSTS</h1>
    </div>

    <!-- Main Page Button -->
    <div class="my-5 text-center">
      <a href="/" class="btn btn-primary btn-lg" >
        Main Page
      </a>
    </div>`;
    posts.forEach((post) => {
      userPosts.innerHTML += `
    <div class="col-lg-6 pb-3">
      <div class="card">
        <div class="text-center">
          <div class="card-header h5">
          <i class="icon fa-regular fa-comment"></i>
            Post: ${post.id}</div>
          </div>
        <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
          ${post.body}
        </div>
      </div>
    </div>  `;
    });
  } catch (error) {
    console.error("An error occured while retrieving posts via API");
    userPosts.innerHTML = `<div class="alert alert-danger text-center fs-3" role="alert">
      An error occured while retrieving posts via API
    </div>`;
  }
};

window.onload = () => {
  fetchUserPosts();
};
