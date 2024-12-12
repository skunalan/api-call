const userList = document.getElementById("user-list");

const fetchUsers = async () => {
  try {
    const placeholderApi = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await placeholderApi.json();
    const users = data;
    console.log(users);
    users.map((user) => {
      userList.innerHTML += `
    <div class="col-auto pb-3">    
      <div class="card" style="width: 25rem;">
        <div class="card-header h3">
          ${user.name}
        </div>
        <div class="card-body">
          <ul class="list-group mb-3">
            <li class="list-group-item">
            <i class="icon fa-solid fa-user"></i>
            Basic Information
              <ul class="information-list">
                <li>
                  User Name: ${user.username}
                </li>
              </ul>
            </li>
            <li class="list-group-item">
            <i class="icon fa-solid fa-location-dot"></i>
            Address Information
              <ul class="information-list">
                <li>
                  City: ${user.address.city}
                </li>
                <li>
                  Zipcode: ${user.address.zipcode}
                </li>
              </ul>
            </li>
            <li class="list-group-item">
            <i class="icon fa-solid fa-building"></i>
            Company Information
            <ul class="information-list">
                <li>
                  Company Name: ${user.company.name}
                </li>
              </ul>
            </li>
            <li class="list-group-item">
            <i class="icon fa-solid fa-square-phone"></i>
            Contact Information
            <ul class="information-list">
                <li>
                  E-Mail: ${user.email}
                </li>
                <li>
                  Phone Number: ${user.phone}
                </li>
                <li>
                  Website: ${user.website}
                </li>
              </ul>
            </li>
          </ul>
          <a href="/posts/posts.html?userId=${user.id}" class="btn btn-primary">View Posts</a>
        </div>
      </div>
    </div>
    `;
    });
  } catch (error) {
    console.error("An error occured while retrieving users via API");
    userList.innerHTML = `
    <div class="alert alert-danger text-center fs-3" role="alert">
      An error occured while retrieving users via API
    </div>`;
  }
};

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const userIdInput = Number(document.getElementById("searchInput").value);

  if (
    userIdInput &&
    !isNaN(userIdInput) &&
    userIdInput > 0 &&
    userIdInput <= 10
  ) {
    window.location.href = `/posts/posts.html?userId=${userIdInput}`;
  } else {
    alert("Please enter a valid ID (Only number and 1 to 10)");
  }
});

window.onload = () => {
  fetchUsers();
  document.getElementById("searchInput").value = "";
};
