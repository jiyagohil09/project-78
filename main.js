var images = ["https://mail.google.com/mail/u/0?ui=2&ik=435d7a12a4&attid=0.1&permmsgid=msg-f:1741299926961528482&th=182a570ec9f49ea2&view=att&disp=inline&realattid=182a570a5d32dcd4f281","https://mail.google.com/mail/u/0?ui=2&ik=435d7a12a4&attid=0.2&permmsgid=msg-f:1741299837674874443&th=182a56fa000e664b&view=att&disp=safe&realattid=182a56f48f0c7c1116d2","https://mail.google.com/mail/u/0?ui=2&ik=435d7a12a4&attid=0.1&permmsgid=msg-f:1741299837674874443&th=182a56fa000e664b&view=att&disp=safe&realattid=182a56f48bb3a1e7dec1","https://mail.google.com/mail/u/0?ui=2&ik=435d7a12a4&attid=0.3&permmsgid=msg-f:1741299837674874443&th=182a56fa000e664b&view=att&disp=safe&realattid=182a56f492c5a4474283"];
var names = ["Avinash Gohil","Minaxi Gohil","Khushi Gohil","Jiya Gohil"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}