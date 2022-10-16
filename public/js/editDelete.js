
const delButtonHandler = async (event) => {

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog.');
    }
  }
};

const updateBtnHandler = async (event) => {
  event.preventDefault();

  const id = post.getAttribute('data-postId');

  const response = await fetch(`/api/blogs/${id}`, {
    method: "GET",
    body: JSON.stringify({
      name,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace(`/edit/${id}`);
  } else if (req.session.user_id != req.params.id) {
    res.redirect('/homepage/');
  } else {
    alert(response.statusText);
  }

  

}



document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);