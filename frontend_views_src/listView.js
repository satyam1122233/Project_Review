$(document).ready(function(){

    load_temp();


    $("#cancel").click(function(){
        $("#template_form").removeClass("form_show");
        $("#cover").css("display", "none");

        $("#template_form").find("input").each(function(){
            $(this).val("");
        });
    });

    $("#save").click(function(){
        $("#template_form").removeClass("form_show");
        $("#cover").css("display", "none");
        
        var firstnameid = $("#template_form").find("#firstnameid").val();
        var lastnameid = $("#template_form").find("#lastnameid").val();
        var dobid = $("#template_form").find("#dobid").val();
        var mobileid = $("#template_form").find("#mobileid").val();
        var aadharid = $("#template_form").find("#aadharid").val();
        var street = $("#template_form").find("#street").val();
        var landid = $("#template_form").find("#landid").val();
        var pin = $("#template_form").find("#pin").val();
        var emailid = $("#template_form").find("#emailid").val();
        var city = $("#template_form").find("#city").val();
        var countryid = $("#template_form").find("#countryid").val();
        var stateid = $("#template_form").find("#stateid").val();

        var id = $("#template_form").find("#temp_id").val();

        $.ajax({
            url: "update.php",
            type: "POST",
            data: {
                "id": id,
                "firstnameid": firstnameid,
                "lastnameid": lastnameid,
                "emailid": emailid,
                "dobid": dobid,
                "mobileid": mobileid,
                "aadharid": aadharid,
                "street": street,
                "landmark":landid,
                "city": city,
                "country": countryid,
                "state": stateid,
                "pin": pin
            },
            success: function(response){
                console.log(response);
                $("#template_form").find("input").each(function(){
                    $(this).val("");
                });
                load_temp();
            }
        });
    });

    $("body").on('click','.modify',function(){
        $("#template_form").addClass("form_show");
        $("#cover").css("display", "block");

        var id = $(this).closest(".table-row").find(".id").text();
        var firstname = $(this).closest(".table-row").find(".f_name").text();
        var lastname = $(this).closest(".table-row").find(".l_name").text();
        var dob = $(this).closest(".table-row").find(".dob").text();
        var mobile = $(this).closest(".table-row").find(".mobile").text();
        var aadhar = $(this).closest(".table-row").find(".aadhar").text();
        var street = $(this).closest(".table-row").find(".street").text().replace(/,/g, '');;
        var land = $(this).closest(".table-row").find(".land_mark").text().replace(/,/g, '');
        var city = $(this).closest(".table-row").find(".city").text().replace(/,/g, '');
        var state = $(this).closest(".table-row").find(".state_name").text().replace(/,/g, '');
        var country = $(this).closest(".table-row").find(".country_name").text();

        var pin = $(this).closest(".table-row").find(".pincode").text().replace(/,/g, '');
        var email = $(this).closest(".table-row").find(".email").text();

        $("#template_form").find("#temp_id").val(id);
        $("#template_form").find("#firstnameid").val(firstname);
        $("#template_form").find("#lastnameid").val(lastname);
        $("#template_form").find("#dobid").val(dob);
        $("#template_form").find("#mobileid").val(mobile);
        $("#template_form").find("#aadharid").val(aadhar);
        $("#template_form").find("#street").val(street);
        $("#template_form").find("#landid").val(land);
        $("#template_form").find("#stateid").val(state);
        $("#template_form").find("#countryid").val(country);

        $("#template_form").find("#pin").val(pin);
        $("#template_form").find("#emailid").val(email);
        $("#template_form").find("#city").val(city);

        // $("#template_form").find("#landmark").val(landmark);
    });

    $("body").on("click", ".delete", function(){
        var id = $(this).closest(".table-row").find(".id").text();

        $.ajax({
            url: "delete.php",
            type: "POST",
            data: {
                "id": id
            },
            success: function(response){
                console.log(response);
                load_temp();
            }
        });
    });

    function load_temp(){
        

        $.ajax({
            url: "fetch.php",
            type: "POST",
            success: function(response) { 
                var dat = JSON.parse(response);
                console.log(dat);
                var s_no=1;

                $("#registration_details").children().not("#col_name").remove();
                for(var i = 0; i<dat.length; i++){
                    $("#registration_details").append(`<li class="table-row">
                        <div class="id col col-1" data-label="S_No">`+dat[i].id+`</div>
                        <div class="s_no col col-1" data-label="S_No"></div>

                        <div class="col col-2" data-label="Student Details">
                        <div class = "st_image"><img src = '`+dat[i].photo_name+`' alt = 'st'></div><div class="f_name">`+dat[i].first_name+`</div><div class="l_name">`+dat[i].last_name+`</div></div>

                        <div class="col col-3" data-label="Contact Details">
                        <div class="mobile">`+dat[i].mobile+`</div>
                        <div class="email">`+dat[i].email_id+`</div>
                        </div>


                        <div class="aadhar col col-4" data-label="Aadhar Number">`+dat[i].aadhar_no+`</div>
                        <div class="dob col col-5" data-label="DOB">`+dat[i].date_of_birth+`</div>
                        <div class="gender col col-6" data-label="Gender">`+dat[i].gender+`</div>
                        <div class="col col-7" data-label="Adress Details"><div class="street">`+dat[i].street+`,</div><div class="land_mark">`+dat[i].landmark+`,</div><div class="city"> `+dat[i].city+`,</div> <div class="pincode">`+dat[i].pincode+`,</div><div class= "state_name">`+dat[i].state+`,</div>
                        <div class= "country_name">`+dat[i].country+`</div></div>
                        <div class="col col-8" data-label="Login Details"><div class="username">`+dat[i].username+`</div> <div class= "password">`+dat[i].password+`</div></div>
                        <div class="col col-9" data-label="Hobbies">`+dat[i].hobbies+`</div>
                        <div class="col col-10" data-label="Action">
                            <div class="dropdown">
                            <div class="dropbtn">&#8942;</div>
                                <div class="dropdown-content">
                                    <a class="modify">Update</a>
                                    <a class="delete">Delete</a>
                                </div>
                            </div>
                        </div>
                    </li>`);
                }

                $(".table-row").each(function(){
                    $(this).find(".s_no").html(s_no);
                    s_no++;
                });
            }
        });

       

    }
});


var plusBtn = document.getElementById('plusBtn');

plusBtn.addEventListener('click', function() {
    window.location.href = 'index.html'; // Replace 'index.html' with the path to your desired HTML file
});
