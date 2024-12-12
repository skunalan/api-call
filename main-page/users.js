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
            <i class="information-icon fa-solid fa-user"></i>
            Basic Information
              <ul class="information-list">
                <li>
                  User ID: ${user.id}
                </li>
                <li>
                  User Name: ${user.username}
                </li>
              </ul>
            </li>
            <li class="list-group-item">
            <i class="information-icon fa-solid fa-location-dot"></i>
            Adress Information
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
            <i class="information-icon fa-solid fa-building"></i>
            Company Information
            <ul class="information-list">
                <li>
                  Company Name: ${user.company.name}
                </li>
              </ul>
            </li>
            <li class="list-group-item">
            <i class="information-icon fa-solid fa-square-phone"></i>
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
          <a href="" class="btn btn-primary">View Posts</a>
        </div>
      </div>
    </div>
    `;
    });
  } catch (error) {
    console.error("An error occured while retrieving users via API")
  }
};

document.addEventListener("DOMContentLoaded", () => fetchUsers());