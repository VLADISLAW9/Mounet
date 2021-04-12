load_pasts();
load_blog();
check();
function draw(){
    let f=document.getElementById("draww");
    f.style.backgroundColor=("green");
}

function draw2(){
    let f=document.getElementById("drawww");
    f.style.fontSize="20pt";
}

function con(){
    let con =document.getElementById("modalwin");
    con.style.display="block";
}

function ex(){
    let ex =document.getElementById("modalwin");
    ex.style.display="none";
}

var modal = document.getElementById('myModal');


//var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close");


/*btn.onclick = function() {
    modal.style.display = "block";
}
*/

span.onclick = function(){
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let sub = document.getElementById('sub');
function autorization(){
let login = document.getElementById('login2').value;
let password = document.getElementById('password3').value;

    $.ajax({
		url: 'login_user.php',
		method: 'post',
		dataType: 'html',
		data: {login: login, pass:password} ,
		success: function(data){
			
            if(data == 0){
                let err=document.getElementById('err');
                err.style.display='block';
                err.innerHTML='Пользователь не найден';
                let myModal=document.getElementById('myModal')
                myModal.style.display='block';
                return false;
            }
            else{
                check();
                return true;
            }
            
		}
	});

}



let sub2 = document.getElementById('sub2');
function registration(){
let name = document.getElementById('name').value;   
let female = document.getElementById('female').value;  
let familyname = document.getElementById('familyname').value; 
let login = document.getElementById('login').value;
let password = document.getElementById('password_check').value;
let password2 =document.getElementById('password').value;
if(password==password2){
    $.ajax({
		url: 'insert_users.php',
		method: 'post',
		dataType: 'html',
		data: {login: login, pass:password, name:name, female:female, familyname: familyname} ,
		success: function(data){
			alert(data);
            if(data == 0){
                let err2=document.getElementById('err2');
                err2.style.display='block';
                err2.innerHTML='Логин занят';
                let myModal=document.getElementById('myModal')
                myModal.style.display='block';
                return false;
            }
            else{
                return true;
            }
            
		}
	});
}else{
    let err2=document.getElementById('err2');
    err2.style.display='block';
    err2.innerHTML='Пароли не совпадают';
    let myModal=document.getElementById('myModal')
    myModal.style.display='block';
    return false;
}
   

}


function load_pasts(){
    $.ajax({
		url: 'dowload.php',
		method: 'post',
		dataType: 'html',
		data:'',
		success: function(data){
			//alert(data);
            let fot = document.getElementById('fot'); 
           // 
            let mas=JSON.parse(data);
          

            let s="";
            for (let i=0; i<mas.length; i++){
           s=s+"<div class='col'>"+
          "<div class='card shadow-sm'>"+
            "<img width='200' height='200' src='image/"+mas[i][4]+"' class='card-img-top' alt='...'>"+
            "<div class='card-body'>"+
              "<p class='card-text'>"+mas[i][1]+"</p>"+
              "<div class='d-flex justify-content-between align-items-center'>"+
                "<div class='btn-group'>"+
                  
                "</div>                <small class='text-muted'>"+mas[i][7]+' '+mas[i][8]+' '+mas[i][9]+"</small>    </div>      </div>     </div>     </div>      ";
		}

        fot.innerHTML = s;
    }
	});
}

/*function load_blog(){
    $.ajax({
		url: 'dowload_blog.php',
		method: 'post',
		dataType: 'html',
		data:'',
		success: function(data){
			//alert(data);
            let foot = document.getElementById('foot'); 
           // 
            let mas=JSON.parse(data);
          

            let s="";
            for (let i=0; i<mas.length; i++){
           s=s+"<div class='col'>"+
          "<div class='card shadow-sm'>"+
            "<svg class='bd-placeholder-img card-img-top' width='100%' height='225' xmlns='"+mas[i][4]+"' role='img'"+ 
            "aria-label='Placeholder: Thumbnail' preserveAspectRatio='xMidYMid slice' focusable='false'><title>Placeholder</title><rect width='100%' height='100%' fill='#55595c'/><text x='50%' y='50%' fill='#eceeef' dy='.3em'>Thumbnail</text></svg>"+

            "<div class='card-body'>"+
              "<p class='card-text'>"+mas[i][2  ]+"</p>"+
              "<div class='d-flex justify-content-between align-items-center'>"+
                "<div class='btn-group'>"+

                "</div>                <small class='text-muted'>"+mas[i][3]+"</small>    </div>      </div>     </div>     </div>      ";
		}

        foot.innerHTML = s;
    }
	});
}

*/

function load_blog(){
    $.ajax({
		url: 'dowload_blog.php',
		method: 'post',
		dataType: 'html',
		data:'',
		success: function(data){
			//alert(data);
            let foot = document.getElementById('foot'); 
           // 
            let mas=JSON.parse(data);
          

            let s="";
            for (let i=0; i<mas.length; i++){
           s=s+"<div class='col p-4 d-flex flex-column position-static'>"+
               "<strong class='d-inline-block mb-2 text-primary'>"+mas[i][1]+"</strong>"+
               "<h3 class='mb-0'>"+mas[i][2]+"</h3>"+
               "<div class='mb-1 text-muted'>"+mas[i][9]+"</div>"+
               "<p class='card-text mb-auto'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>"+
               "<a href='#' class='stretched-link'>Continue reading</a>"+
             "</div>"+
             "<div class='col-auto d-none d-lg-block'>"+
             "<img width='400' height='400' src='image/"+mas[i][3]+"' class='card-img-top' alt='...'>"+
     
             "</div> </div>";
        }
        foot.innerHTML = s;
    }
	});
}

function check(){
    $.ajax({
		url: 'check_status.php',
		method: 'post',
		dataType: 'html',
		data:'',
		success: function(data){
            let mypage =document.getElementById('mypage');
          let autorez =document.getElementById('autorez');
          let myoffice = document.getElementById('office');
            if(data.length==0){
                myoffice.style.display='none';
                mypage.style.display='none';
                autorez.innerHTML = "<a href='#' id='myBtn'><img class='photouser' width='40xp' height='40px'  src='image/profile-user.png '></a>";
            }else{
                myoffice.style.display='inline-block';
                mypage.style.display='inline-block';
                autorez.innerHTML = "<a class='exit' href='logout.php' id='myBtn'><img class='exituser' width='40xp' height='40px' src='image/logout.png '></a>";
            }
            var btn = document.getElementById("myBtn");
            btn.onclick = function() {
                    modal.style.display = "inline-block";
            }

        }
    });
}






