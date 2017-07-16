$(document).ready(function () {
    fetchAndRandomize();
    window.fetchAndRandomize = fetchAndRandomize;
});

function fetchAndRandomize() {
    $.get(
        ghost.url.api('posts', {limit: 'all'})
    ).done(randomizeCover);
}

function randomizeCover(data) {
    var linkContainer = $('#featured');
    var header = $('#header-cover')[0];
    var sortedPosts = shuffleArray(data.posts);
    var displayPosts = sortedPosts.slice(0, 1);

    $.each(displayPosts, function (i, post, img) {
        header.style.backgroundImage = "url('" + post.image+ "')";
        linkContainer.append(
            '<a href="http://www.enflight.design' + post.url + '">' + post.title + '</a>'
        );
    });
}    

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
