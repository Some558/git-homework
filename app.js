const $post = document.createElement("article");
$post.setAttribute("class","post");
$post.innerText = "お腹減ったなあ。近所にできたラーメン屋行ってみるか";

const $timeline =docment.getElementById("timeline");
$timeline.appendChild($post);
