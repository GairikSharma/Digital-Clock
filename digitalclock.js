const showTime = () => {
            var date = new Date();
            var h = date.getHours()
            var m = date.getMinutes()
            var s = date.getSeconds()
            var session = 'AM'

            if (h == 0) {
                h = 12;
            }
            if (h > 12) {
                h = h - 12
                session = 'PM'
            }
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            var time = h + ':' + m + ':' + s + ' ' + session
            document.getElementsByClassName('clock')[0].innerText = time;
            document.getElementsByClassName('clock').textContent = time;
            setTimeout(showTime, 1000)
        }
        showTime();
function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }
