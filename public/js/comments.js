const commentHandler = async (event) => {
    event.preventDefault(); 
    console.log('Hello');
    const commentTextEl = document.querySelector('#comment-text');
    const content = commentTextEl.value.trim();
    const blog_id = window.location.pathname.replace('/blog/', '');

    if (!content) {
        alert("You must enter something!")
    } else {
        const response = await fetch('/comment/',
        {
            method: "POST",
            body: JSON.stringify({ content, blog_id }),
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
console.log(commentForm);
commentForm.addEventListener('submit', commentHandler);