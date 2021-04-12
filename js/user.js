load_post2();
load_blog2();
//user_blog();



function load_post2(){
    $.ajax({
		url: 'post_select_users.php',
		method: 'post',
		dataType: 'html',
		data:'',
		success: function(data){
			//alert(data);
            let pst = document.getElementById('pst'); 
           
            let mas=JSON.parse(data);
          

            let s="";
            for (let i=0; i<mas.length; i++){
           s=s+"<div class='col'>"+
          "<div class='card shadow-sm'>"+
            "<img width='200' height='200' src='image/"+mas[i][4]+"' class='card-img-top' alt='...'>"+
            "<div class='card-body'>"+
              "<p class='card-text'>"+mas[i][1]+"</p>"+
              "<div class='d-flex justify-content-between align-items-center'>"+
              " <button onclick='delate("+mas[i][0]+");' type='button' class='btn btn-danger mb-5' data-dismiss='modal'>Удалить</button>"+
              " <button onclick='edit("+mas[i][0]+");'  type='button' class='btn btn-primary ml-3 mb-5 ' data-toggle='modal' data-target='#exampleModal2'>Редактировать</button>"+
              
                "<div class='btn-group  '>"+
                  
                "</div> <small class='text-muted'>"+mas[i][7]+' '+mas[i][8]+' '+mas[i][9]+"</small>    </div>      </div>     </div>     </div>      ";
		}
    load_post2();
        pst.innerHTML = s;

    }
	});
}


function load_blog2(){
  $.ajax({
		url: 'blog_select_users.php',
		method: 'post',
		dataType: 'html',
		data:'',
		success: function(data){
		let blg = document.getElementById("blg");
    let mas=JSON.parse(data);
    let s="";
    for (let i=0; i<mas.length; i++){
      s=s+"<div class='col p-4 d-flex flex-column position-static'>"+
      "<strong class='d-inline-block mb-2 text-primary'>"+mas[i][1]+"</strong>"+
      "<h3 class='mb-0'>"+mas[i][2]+"</h3>"+
      "<div class='mb-1 text-muted'>"+mas[i][7]+"</div>"+
       "</div>"+
    "<div class='col-auto d-none d-lg-block'>"+
    "<img width='400' height='400' src='image/"+mas[i][3]+"' class='card-img-top' alt='...'>"+
    " <button onclick='delate2("+mas[i][0]+");' type='button' class='btn btn-danger mt-3 mb-5' data-dismiss='modal'>Удалить</button>"+
    " <button onclick='edit2("+mas[i][0]+");'  type='button' class='btn btn-primary mt-3 ml-3 mb-5 ' data-toggle='modal' data-target='#exampleModal3'>Редактировать</button>"+

    "</div> </div>";
    }
    load_blog2();
    blg.innerHTML = s;

    }
	});
}

function delate2(id_blog){
  $.ajax({
    url: 'delate_blog_id.php',
    method: 'post',
    dataType: 'html',
    data:{id_blog:id_blog},
    success: function(data){
      load_blog2();
    }
  });
}

function edit2(id_blog){
  $.ajax({
    url: 'load_blog_id.php',
    method: 'post',
    dataType: 'html',
    data:{id_post:id_post},
    success: function(data){
      let q= JSON.parse(data);
      let e =document.getElementById('editor_text2');
      e.value=q[0];
      let b = document.getElementById('save_post2');
      b.setAttribute("onclick","save_post_id("+id_post+")");
    }
  });
}
function save_blog_id(id_post){
  let e =document.getElementById('editor_text2').value;
  $.ajax({
    url: 'update_blog_id.php',
    method: 'post',
    dataType: 'html',
    data:{id_blog:id_blog, e:e},
    success: function(data){
     load_blog2();
     let e =document.getElementById('editor_text2');
     e.value="";
    }
  });
}


function delate(id_post){
  $.ajax({
    url: 'delate_post_id.php',
    method: 'post',
    dataType: 'html',
    data:{id_post:id_post},
    success: function(data){
      load_post2();
    }
  });
}

function edit(id_post){
  $.ajax({
    url: 'load_blog_id.php',
    method: 'post',
    dataType: 'html',
    data:{id_post:id_post},
    success: function(data){
      let q= JSON.parse(data);
      let e =document.getElementById('editor_text');
      e.value=q[0];
      let b = document.getElementById('save_post');
      b.setAttribute("onclick","save_post_id("+id_post+")");
    }
  });
}

function save_post_id(id_post){
  let e =document.getElementById('editor_text').value;
  $.ajax({
    url: 'update_post_id.php',
    method: 'post',
    dataType: 'html',
    data:{id_post:id_post, e:e},
    success: function(data){
     load_post2();
     let e =document.getElementById('editor_text');
     e.value="";
    }
  });
}

(function($){
var files; // переменная. будет содержать данные файлов
    
// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(){
  files = this.files;
});






    
    // обработка и отправка AJAX запроса при клике на кнопку upload_files
    $('#send22').on( 'click', function( event ){
    
     // event.stopPropagation(); // остановка всех текущих JS событий
      //event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега
    
      // ничего не делаем если files пустой
      if( typeof files == 'undefined' ) return;
    
      // создадим данные файлов в подходящем для отправки формате
      var data = new FormData();
      $.each( files, function( key, value ){
        data.append( key, value );
      });
    
      // добавим переменную идентификатор запроса
      data.append( 'my_file_upload', 1 );
     let mar = document.getElementById("maintext").value;
     data.append( 'my_text_upload', mar );
      // AJAX запрос
      $.ajax({
        url         : './submit.php',
        type        : 'POST',
        data        : data,
        cache       : false,
        dataType    : 'json',
        // отключаем обработку передаваемых данных, пусть передаются как есть
        processData : false,
        // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
        contentType : false,
        // функция успешного ответа сервера
        success     : function( respond, status, jqXHR ){
    
          // ОК
          if( typeof respond.error === 'undefined' ){
            // файлы загружены, делаем что-нибудь
    
            // покажем пути к загруженным файлам в блок '.ajax-reply'
    
            var files_path = respond.files;
            var html = '';
            $.each( files_path, function( key, val ){
               html += val +'<br>';
            } )
    
            $('.ajax-reply').html( html );
          }
          // error
          else {
            console.log('ОШИБКА: ' + respond.error );
          }
        },
        // функция ошибки ответа сервера
        error: function( jqXHR, status, errorThrown ){
          console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
        }
    
      });
    
    });
  })

/*Блоги*/

  (function($){
    var files; // переменная. будет содержать данные файлов
        
    // заполняем переменную данными файлов, при изменении значения file поля
    $('input[type=file]').on('change', function(){
      files = this.files;
    });
    
    
    
    
    
    
        
        // обработка и отправка AJAX запроса при клике на кнопку upload_files
        $('#send23').on( 'click', function( event ){
        
         // event.stopPropagation(); // остановка всех текущих JS событий
          //event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега
        
          // ничего не делаем если files пустой
          if( typeof files == 'undefined' ) return;
        
          // создадим данные файлов в подходящем для отправки формате
          var data = new FormData();
          $.each( files, function( key, value ){
            data.append( key, value );
          });
        
          // добавим переменную идентификатор запроса
          data.append( 'my_file_upload2', 1 );
         let mar = document.getElementById("maintext2").value;
         data.append( 'my_text_upload2', mar );
          // AJAX запрос
          $.ajax({
            url         : './submit2.php',
            type        : 'POST',
            data        : data,
            cache       : false,
            dataType    : 'json',
            // отключаем обработку передаваемых данных, пусть передаются как есть
            processData : false,
            // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
            contentType : false,
            // функция успешного ответа сервера
            success     : function( respond, status, jqXHR ){
        
              // ОК
              if( typeof respond.error === 'undefined' ){
                // файлы загружены, делаем что-нибудь
        
                // покажем пути к загруженным файлам в блок '.ajax-reply'
        
                var files_path = respond.files;
                var html = '';
                $.each( files_path, function( key, val ){
                   html += val +'<br>';
                } )
        
                $('.ajax-reply').html( html );
              }
              // error
              else {
                console.log('ОШИБКА: ' + respond.error );
              }
            },
            // функция ошибки ответа сервера
            error: function( jqXHR, status, errorThrown ){
              console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
            }
        
          });
        
        });
      })
    
    
    
    
    


