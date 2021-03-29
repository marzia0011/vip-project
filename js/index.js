$(document).ready(function() {
    const path = window.location.pathname;
    const query = window.location.search;
    $.get("./api/index.php", function(data) {
        const results = jQuery.parseJSON(data);
        const items = [];
        results.data.forEach(result => {
            items.push('<a href="./poem.php?id='+result.id+'"><li class="poem-desc"><b>'+result.title+'</b><span>'+result.name+'</span></li></a>');
        });
        const ul = $('#poems-list');
        ul.append(items);
    })
});
