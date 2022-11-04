$(document).ready(function () {
  // on click on the what we do pictures
  $("#design_icon").click(function () {
    $("#design_icon_desc").show();
    $("#design_icon").hide();
  });
  $("#dev_icon").click(function () {
    $("#dev_icon_desc").show();
    $("#dev_icon").hide();
  });
  $("#product_icon").click(function () {
    $("#product_icon_desc").show();
    $("#product_icon").hide();
  });

  // on click on the what we do descriptions
  $("#design_icon_desc").click(function () {
    $("#design_icon_desc").hide();
    $("#design_icon").show();
  });
  $("#dev_icon_desc").click(function () {
    $("#dev_icon_desc").hide();
    $("#dev_icon").show();
  });
  $("#product_icon_desc").click(function () {
    $("#product_icon_desc").hide();
    $("#product_icon").show();
  });

  // check portfolio hover
  $("#portfoliocol1")
    .mouseenter(function () {
      $("#portfolioname1").show();
    })
    .mouseleave(function () {
      $("#portfolioname1").hide();
    });
  $("#portfoliocol2")
    .mouseenter(function () {
      $("#portfolioname2").show();
    })
    .mouseleave(function () {
      $("#portfolioname2").hide();
    });
  $("#portfoliocol3")
    .mouseenter(function () {
      $("#portfolioname3").show();
    })
    .mouseleave(function () {
      $("#portfolioname3").hide();
    });
  $("#portfoliocol4")
    .mouseenter(function () {
      $("#portfolioname4").show();
    })
    .mouseleave(function () {
      $("#portfolioname4").hide();
    });
  $("#portfoliocol5")
    .mouseenter(function () {
      $("#portfolioname5").show();
    })
    .mouseleave(function () {
      $("#portfolioname5").hide();
    });
  $("#portfoliocol6")
    .mouseenter(function () {
      $("#portfolioname6").show();
    })
    .mouseleave(function () {
      $("#portfolioname6").hide();
    });
  $("#portfoliocol7")
    .mouseenter(function () {
      $("#portfolioname7").show();
    })
    .mouseleave(function () {
      $("#portfolioname7").hide();
    });
  $("#portfoliocol8")
    .mouseenter(function () {
      $("#portfolioname8").show();
    })
    .mouseleave(function () {
      $("#portfolioname8").hide();
    });

  // capture form submit
  $("#inputmessage").keypress(function () {
    var inputname = $("#inputname").val();

    alert(
      "** " +
        inputname +
        " we have received your message. Thank you fro reaching out to us. **"
    );
  });
});
