$(document).ready(function(){
    //Display hidden modal
    $("#signin").click(function(){
        $("#signinpage").modal('show');
    });
    $("#signup").click(function(){
        $("#signuppage").modal('show');

    });
    $("#gotosignup").click(function(){
        $("#signinpage").modal('hide');
        $("#signuppage").modal('show');
    });
    $("#gotosignin").click(function(){
        $("#signuppage").modal('hide');
        $("#signinpage").modal('show');
    });

    //Not null verified
    $('#signinconfirm,#signupconfirm').click(function(){
        if ($('#username').val()=='') {
            alert("用户名不能为空!");
            $('#username').focus();
            return false;
        }
        if ($('#password').val()=='') {
            alert("密码不能为空!");
            $('#password').focus();
            return false;
        }
    });
    $('#signupconfirm').click(function(){
        if ($('#createusername').val()=='') {
            alert("用户名不能为空!");
            $('#createusername').focus();
            return false;
        }
        if ($('#createpassword').val()=='') {
            alert("密码不能为空!");
            $('#createpassword').focus();
            return false;
        }
    });
    
});


