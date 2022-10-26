$("#contactForm").submit((e) => {
    e.preventDefault(e);
    var nameReg = /\p{L}+/u; //regex
    var emailReg = /^[\w!#$%&*+/=?^_`{|}~-]+(?:\.[\w!#$%&*+/=?^_`{|}~-]+)*@(?:[\[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9\]])?$/;
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    
    if ((name.length === 0) || (name.length > 32) || !name.match(nameReg)) {
      $("#nameHelp").show();
    } else {
      $("#nameHelp").hide();
    }
    
    if ((email.length < 3) || (email.length > 320) || !email.match(emailReg)) {
      $("#emailHelp").show();
    } else {
      $("#emailHelp").hide();
    }
    
    if ((phone.length < 0) || (phone.length > 16)) {
      $("#phoneHelp").show();
    } else {
      $("#phoneHelp").hide();
    }
    
    if ((message.length === 0) || (message.length > 2000)) {
      $("#messageHelp").show();
    } else {
      $("#messageHelp").hide();
    }
  });