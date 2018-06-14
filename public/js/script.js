//posting a new or updated comment and saving
$(".comment").click(function() {
  const thisID = $(this).attr("data-id");

  console.log(`#${thisID}-title`);

  const title = $(`#${thisID}-title`).val();

  console.log(title);
  
  console.log($(`#${thisID}-comment`).text());

  $.ajax({
    method: "POST",
    url: `/articles/${thisID}`,
    data: {
      title: $(`#${thisID}-title`).val(),
      body: $(`#${thisID}-comment`).val()
    }
  }).then(data => {
    console.log(data);
    // $("title-comment").val("Save Complete refresh to see effects");
  });
});
