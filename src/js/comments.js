function Comments(){
    let numberComments = document.getElementsByClassName("number-comments");
    let userComments = document.getElementsByClassName("comment");
    let output = '';

    fetch('https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments')
    .then(response => response.json())
    .then(data => {
                if(data.length > 0) {
                data.forEach((comment) => {
                    output += `<div class="comment">
                                    <div class="comment-header">
                                        <span class="comment-name">${comment.name}</span>
                                        <span class="comment-date">${comment.date}</span>
                                    </div>
                                    <section class="comment-text">
                                        <p>${comment.body}</p>
                                    </section>
                                </div>
                                <div class="comment-likes">
                                    ${comment.likes} likes
                                </div>`
                                ;
                });
                userComments[0].outerHTML = output;
                numberComments[0].innerHTML = data.length;
            }
        }
        // TODO: Format date
    ); 
}

// TODO: Create fuction to sort comments

module.exports = Comments;