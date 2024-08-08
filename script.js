document.addEventListener('DOMContentLoaded', function() {  
    let masuk = document.getElementById('content-masuk');
    let submit_button = document.getElementById('submit');
    let v1 = document.getElementById('video1');
    let v2 = document.getElementById('video2');
    let inv1 = document.getElementById('video-1');
    let inv2 = document.getElementById('video-2');
    let clog = document.getElementById('container-login');
    let log = document.getElementById('login');
    let last = document.getElementById('last-content');

    
    
    submit_button.addEventListener('click',function(){
        if(document.documentElement.requestFullscreen()){
        document.documentElement.requestFullscreen();
        }
        masuk.style.display = 'none';
        v1.style.display = 'flex';
        inv1.setAttribute('autoplay','');
        inv1.play()
        
        // v1.style.display = 'none';
        // v2.style.display = 'flex';
        // inv2.setAttribute('autoplay','');
        // inv2.play();
    })

    inv1.addEventListener('ended',function(){
        v1.style.display = 'none';
        v2.style.display = 'flex';
        inv2.setAttribute('autoplay','');
        inv2.play();
    })

    inv2.addEventListener('play',function(){
        setTimeout(() => {
            clog.style.display = 'flex';
        }, 27000);
    })

    log.addEventListener('click', function(){
        var usr = document.getElementById('user').value; 
        var pass = document.getElementById('pass').value; 
        var token = document.getElementById('tkn').value; 
        console.log(usr, pass, token)
        if(usr == 'diyul09@gmail.com' && pass == 'Ikanidup' && token == 'WAKE4HCV745T'){
            v2.style.display = 'none';
            clog.style.display = 'none';
            inv2.setAttribute('muted', '');
            last.style.display = 'grid';
            masuk.style.display = 'none';
        }
    })
    document.getElementById('startButton').addEventListener('click', function() {
        let scrollDuration = 20000; // durasi scroll dalam milidetik (misalnya 5000 ms = 5 detik)
        let scrollHeight = document.body.scrollHeight - window.innerHeight;
        let scrollStep = scrollHeight / (scrollDuration / 15); // menghitung langkah scroll
        let scrollInterval = setInterval(function() {
            if (window.scrollY < scrollHeight-100) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15); // interval waktu untuk setiap langkah scroll (15 ms)
    });

    $(".candles").click(function() {
    
      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({"top": -150, "opacity": 1}, "fast");
    });
})

