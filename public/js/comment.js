const postCommentHandler = async (event) => {
  const commentId = document.getElementById('post-commentid').value.trim();
  const commentDetail = document.getElementById('post-comment-detail').value.trim();
  const postid = document.getElementById('postid').value.trim();

  let fetchUrl = "", postMethod = "";
  if (commentDetail) {  
    if (commentId != "")
    {
      fetchUrl = "/api/comments/" + commentId;
      postMethod = "PUT";
    }
    else
    {
      fetchUrl = "/api/comments";
      postMethod = "POST";
    }
    const response = await fetch(fetchUrl, {
      method: postMethod,
      body: JSON.stringify({ postid, commentDetail }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      console.error(data);
    } else {
      document.location.replace('/post/' + postid);
    }
}
};

document.getElementById('post-comment-btn').addEventListener('click', postCommentHandler);