const handleSignupSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  if (password === confirmPassword) {
    const requestBody = {
      username: username,
      password: password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(requestBody),
    };

    const response = await fetch("/auth/sign-up", options);

    if (response.status === 200) {
      window.location.replace("/login");
    } else {
      console.log("Failed to signup");
    }
  } else {
    console.log("Passwords do not match");
  }
};

const handleLoginSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  const requestBody = {
    username: username,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch("/auth/login", options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to login");
  }
};

const handleLogoutClick = () => {
  // POST request with username and password
  // /auth/logout
  // on success window location to /
};

const handleCommentSubmit = () => {
  // POST request with comment message
  // /api/posts/{postId}/comments
  // on success window location to /posts/{postId}
};

const handlePostSubmit = () => {
  // POST request with title and body
  // /api/posts
  // on success window location to /dashboard
};

const handlePostDelete = () => {
  // DELETE request for post id
  // /api/posts/{postId}
  // on success window location to /dashboard
};

console.log("client-side JS");
$("#login-form").submit(handleLoginSubmit);
$("#sign-up-form").submit(handleSignupSubmit);
