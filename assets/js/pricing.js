$(document).ready(function () {
    $("#rangeInput").on( "change input", function () {
        var value = $(this).val();
        if (value == 0) {
            $("#popBad").hide();
            $("#packType").text("\"The Minimalist\"");
            $("#packPrice").text("€250");
            $("#packBen0").text("One domain name for one year;");
            $("#packBen1").text("Up to one page only;");
            $("#packBen2").text("Not SSL certified;");
            $("#packBen3").text("No business emails associated;");
            $("#packBen4").text("Basic design based on client preferences;");
            $("#packBen5").text("No interactivity;");
            $("#packBen6").text("No favicon;");
            $("#packBen7").text("Not SEO ready;");
            $("#packBen8").text("Not integrated with cookies or Google analytics.");
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The Minimalist Package\" (€250)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
        else if (value == 1) {
            $("#popBad").hide();
            $("#packType").text("\"The Élémentaire\"");
            $("#packPrice").text("€400");
            $("#packBen0").text("One domain name for one year;");
            $("#packBen1").text("Up to five pages;");
            $("#packBen2").text("SSL certified");
            $("#packBen3").text("No business emails associated;");
            $("#packBen4").text("Basic design based on client preferences;");
            $("#packBen5").text("No interactivity;");
            $("#packBen6").text("No favicon;");
            $("#packBen7").text("Not SEO ready;");
            $("#packBen8").text("Not integrated with cookies or Google analytics.");
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The Élémentaire\" Package (€400)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
        else if (value == 2) {
            $("#popBad").show();
            $("#packType").text("\"The Friendly Pack\"");
            $("#packPrice").text("€650");
            $("#packBen0").text("One domain name for one year;");
            $("#packBen1").text("Up to multiple pages (just don't go crazy);");
            $("#packBen2").text("SSL certified");
            $("#packBen3").text("One business email associated;");
            $("#packBen4").text("A cool design based on client preferences;");
            $("#packBen5").text("No interactivity;");
            $("#packBen6").text("No favicon;");
            $("#packBen7").text("Not SEO ready;");
            $("#packBen8").text("Not integrated with cookies or Google analytics.");
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The Friendly Pack\" Package (€650)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
        else if (value == 3) {
            $("#popBad").hide();
            $("#packType").text("\"The Wannabe Upscaler\"");
            $("#packPrice").text("€800");
            $("#packBen0").text("One domain name for one year;");
            $("#packBen1").text("Up to multiple pages (just don't go crazy);");
            $("#packBen2").text("SSL certified");
            $("#packBen3").text("One business email associated;");
            $("#packBen4").text("A cool design based on client preferences;");
            $("#packBen5").text("Some interactivity;");
            $("#packBen6").text("Favicon included (yes we create it);");
            $("#packBen7").text("Not SEO ready;");
            $("#packBen8").text("Not integrated with cookies or Google analytics.");
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The Wannabe Upscaler\" Package (€800)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
        else if (value == 4) {
            $("#popBad").hide();
            $("#packType").text("\"The True Upscaler\"");
            $("#packPrice").text("€1000");
            $("#packBen0").text("One domain name for two years;");
            $("#packBen1").text("Up to multiple pages (just don't go crazy);");
            $("#packBen2").text("SSL certified");
            $("#packBen3").text("Up to two business emails associated;");
            $("#packBen4").text("A neat design based on client preferences;");
            $("#packBen5").text("Some interactivity;");
            $("#packBen6").text("Favicon included (yes we create it);");
            $("#packBen7").text("SEO ready and in Google Search Console;");
            $("#packBen8").text("Not integrated with cookies or Google analytics.");
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The True Upscaler\" Package (€1000)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
        else if (value == 5) {
            $("#popBad").hide();
            $("#packType").text("\"The Monopoly Guy\"");
            $("#packPrice").text("€1250");
            $("#packBen0").text("One domain name for three years;");
            $("#packBen1").text("Up to multiple pages (just don't go crazy);");
            $("#packBen2").text("SSL certified");
            $("#packBen3").text("Up to three business emails associated;");
            $("#packBen4").text("A neat design based on client preferences;");
            $("#packBen5").text("Some interactivity;");
            $("#packBen6").text("Favicon included (yes we create it);");
            $("#packBen7").text("SEO ready and in Google Search Console;");
            $("#packBen8").text("Integrated with cookies and Google analytics.");
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The Monopoly Guy\" Package (€1250)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
        else {
            $('#submitPack').on('click', function () {
                var text = $('#message');
                text.val("I want \"The Friendly Pack\" Package (€650)! Please contact me as soon as possible, so we can start this amazing project together!");
            });
        }
   });
});