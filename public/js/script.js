$("#scrape").click(_ => {
  $.ajax({
    method: "GET",
    url: "/scrape"
  }).then(data => {
    console.log("dataScraped");
  });
});

$("#articles").click(_ => {
  $.ajax({
    method: "GET",
    url: "/articles"
  }).then(data_ => {
    location.reload();
  });
});
