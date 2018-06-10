$("#scrape").on("click", _ => {
  alert("Load was performed.");
  
  $.get("/", data => {
    $(".result").html(data);
  });
});
