$("#scrape").on("click", _ => {
  alert("Load was performed.");
  
  $.get("/scrape", data => {
    console.log("dataScraped")
    // $(".result").html(data);
  });
});

$.getJSON("/articles", data=>{
  
})
