$("#scrape").on("click", _=>{
    $.get( "/", data =>  {
        $( ".result" ).html( data );
        alert( "Load was performed." );
      });
});
