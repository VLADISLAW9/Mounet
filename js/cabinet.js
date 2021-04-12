load_user_date();
dowload_user_avatar();

function load_user_date() {
    $.ajax({
        url: 'get_user_date.php',
        method: 'post',
        dataType: 'html',
        data: {},
        success: function (data) {
            let name = document.getElementById("name_user");
            let famele = document.getElementById("famele");
            let familyname = document.getElementById("familyname");
            let jso = JSON.parse(data);
            name.value = jso['Name'];
            famele.value = jso['Female'];
            familyname.value = jso['Famyliname'];

            let hide = document.getElementById('save')
            hide.style.display = "none";
        }
    });
}

function red() {
    let hide = document.getElementById('save');
    hide.style.display = "block";
    let name = document.getElementById("name_user");
    let famele = document.getElementById("famele");
    let familyname = document.getElementById("familyname");
    famele.removeAttribute("disabled");
    name.removeAttribute("disabled");
    familyname.removeAttribute("disabled");
    //famele.setAttribute('disabled','true');

}

function save_date() {
    let btn = document.getElementById('save');
    let name = document.getElementById("name_user");
    let famele = document.getElementById("famele");
    let familyname = document.getElementById("familyname");
    $.ajax({
        url: 'send_date_eser.php',
        method: 'post',
        dataType: 'html',
        data: {
            name: name.value,
            famele: famele.value,
            familyname: familyname.value
        },
        success: function (data) {
            let hide = document.getElementById('save');
            hide.style.display = "none";
            famele.setAttribute('disabled', 'false');
            name.setAttribute('disabled', 'false');
            familyname.setAttribute('disabled', 'false');
            load_user_date();
        }
    });
}
let hiden_div_password = document.getElementById('id_password_update');
id_password_update.style.display = 'none';

function show_div_update_password() {
    id_password_update.style.display = 'block';

}

function save_password() {
    let old_password = document.getElementById('old_password');
    let new_password = document.getElementById('new_password');
    let new2_password = document.getElementById('new2_password');
    let message_password_err = document.getElementById('message_password_err');
    if (new_password.value != new2_password.value) {
        message_password_err.innerHTML = 'Новые пароли не совпадают';
    } else {
        $.ajax({
            url: 'given_old_password.php',
            method: 'post',
            dataType: 'html',
            data: {
                old_password: old_password.value
            },
            success: function (data) {
                if (data == '0') {
                    message_password_err.innerHTML = 'Введен не верный старый пароль';
                } else {
                    $.ajax({
                        url: 'update_user_password.php',
                        method: 'post',
                        dataType: 'html',
                        data: {
                            new_password: new_password.value
                        },
                        success: function (data) {
                            alert('Ваш пароль обновлен');
                            message_password_err.innerHTML = '';
                            message_password_err.innerHTML = ''
                            old_password.value = "";
                            new_password.value = "";
                            new2_password.value = "";
                        }
                    });
                }
            }
        });
    }
}


function exit_password_update() {
    let old_password = document.getElementById('old_password');
    let new_password = document.getElementById('new_password');
    let new2_password = document.getElementById('new2_password');
    let hiden_div_password = document.getElementById('id_password_update');
    message_password_err.innerHTML = '';
    message_password_err.innerHTML = '';
    old_password.value = "";
    new_password.value = "";
    new2_password.value = "";
    hiden_div_password.style.display = 'none';
}


function dowload_user_avatar() {
    $.ajax({
        url: 'dowload_avatar_user.php',
        method: 'post',
        dataType: 'html',
        data: '',
        success: function (data) {

            let dwl = document.getElementById('dowload_avatar');
            let mass = JSON.parse(data);
            let s = "";
            s = s + "<img height='200px' width='200px' src='image/" +mass['img']+ "' class='avatar_img'>";
            dwl.innerHTML = s;
        }
    });
}