const commentHandler = async (event) => {
    event.preventDefault(); 
    
    const commentTextEl = document.querySelector('#comment-text');
    const commentBody = commentTextEl.value.trim();
    const blog_id = window.location.pathname.replace('/blog/', '');

    if (!commentBody) {
        alert("You must enter something!")
    } else {
        const response = await fetch('/commentRoutes',
        {
            method: "POST",
            body: JSON.stringify({ commentBody, blog_id }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

const commentForm = document.querySelector('#comment-form');

form.addEventListener('submit', commentHandler);