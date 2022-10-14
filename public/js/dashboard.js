
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blogpost-name').value.trim();
    const description = document.querySelector('#blogpost-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  

  