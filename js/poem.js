$(document).ready(function() {
    const query = window.location.search;
    const id = query.split("=")[1];

    $.get("./api/poem.php?id="+id, function(data) {
        const result = jQuery.parseJSON(data);
        let poem = result.body;
        const poems = result.poems;
        poem = poem.replace(/\r\n|\n|\r/g, "<br />");
        $('#poem-name').append(result.title);
        $('#full-poem').append(poem);
        
        const poemList = [];
        poems.forEach(poem => {
            poemList.push('<a href="./poem.php?id='+poem.id+'"><li class="poem-desc"><b>'+poem.title+'</b><span>'+poem.name+'</span></li></a>');
        });
        $('#other-poems').append(poemList);
    })
});