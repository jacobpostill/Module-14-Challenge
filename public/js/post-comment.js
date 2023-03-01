const postCommentHandler = async (event) => {
  const postCommentId = document.getElementById('post-commentid').value.trim();
  const postCommentDetail = document.getElementById('post-comment-detail').value.trim();
  const postid = document.getElementById('postid').value.trim();

  let fetchUrl = "", postMethod = "";
  if (postCommentDetail) {  
    if (postCommentId != "")
    {
      fetchUrl = "/api/comments/" + postCommentId;
      postMethod = "PUT";
    }
    else
    {
      fetchUrl = "/api/comments";
      postMethod = "POST";
    }
    const response = await fetch(fetchUrl, {
      method: postMethod,
      body: JSON.stringify({ postid, postCommentDetail }),
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