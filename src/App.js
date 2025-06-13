import $ from './jquery-3.6.4.min.js';
import './App.css';
import './bootstrap.css';
import 'https://kit.fontawesome.com/6c03e70cde.js';

function App() {
    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            const cityname = document.getElementById('name');
            const name = cityname.value;
            weather(name);
        }
    };

    return (
        <div
            style={{ marginTop: '20' }}
            className="bg-transparent row row-cols-1 row-cols-md-3 mb-4 text-center"
        >
            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    textAlign: 'left',
                }}
                className="col"
            >
                <div className="bg-transparent card mb-4 rounded-3 shadow-sm">
                    <div className="card-body">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                style={{ border: null, outline: null, marginBottom: '20px' }}
                                id="name"
                                onKeyUp={handleKeyUp}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
                            <span className="day" style={{color:"white", fontFamily: "Roboto Condensed",fontSize:"23px", fontWeight:"700"}}></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                    <span className="tima" style={{color:"white", fontFamily: "Roboto Condensed",fontSize:"20px", fontWeight:"300"}}></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                            <p>
                                <i className="fas fa-thermometer-half" style={{ color: 'white' }}></i>
                                <span className="temp" style={{color:"white",fontSize:"18px", fontWeight:300,fontFamily: "Roboto Condensed"}}></span>
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                            <p>
                                <i className="fa-solid fa-cloud-sun" style={{ color: 'white' }}>
                                    ㅤ
                                </i>
                                <span style={{ fontSize: '18px', fontWeight: 300, color: 'white', fontFamily: "Roboto Condensed",}} className="weatherDescription"></span>
                            </p>
                        </div>
                        <hr style={{ color: 'white' }} />
                        <span style={{ color: 'white', textAlign: 'right', fontSize: '15px', marginTop: '-5px', fontWeight:300,fontFamily: "Roboto Condensed"}} className="year"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
let time;
function timu() {
    time = new Date()
    const a = time.getHours();
    const b = time.getMinutes();
    const c = time.getDay();
    const d = time.getFullYear()
    if(c === 1){
        $('.day').html("Monday")
    }
    if(c === 2){
        $('.day').html("Tuesday")
    }

    if(c === 3){
        $('.day').html("Wednesday")
    }

    if(c === 4){
        $('.day').html("Thursday")
    }
    if(c === 5){
        $('.day').html("Friday")
    }
    if(c === 6){
        $('.day').html("Saturday")
    }
    if(c === 0){
        $('.day').html("Sunday")
    }
$('.year').html(d)
    if (a < 12) {

        $('.tima').html(a + ':' + b + '0' + ' AM')
    }
    if (a > 11 && a < 24) {

        $('.tima').html(a + ':' + b + '0' + ' PM')
    }

    if (0 < b < 10) {

        $('.tima').html(a + ':' + '0' + b)
        if (a < 12) {

            $('.tima').html(a + ':' + '0' + b + ' AM')
        }
        if (a > 11 && a < 24) {

            $('.tima').html(a + ':' + '0' + b + ' PM')
        }
    }
    if (b > 9) {

        $('.tima').html(a + ':' + b)
        if (a < 12) {

            $('.tima').html(a + ':' + b + ' AM')
        }
        if (a > 11 && a < 24) {

            $('.tima').html(a + ':' + b + ' PM')
        }
    }
}
setInterval(timu, 1000)
function weather(name) {


    $.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=&units=metric`,
        function (data) {
            console.log(data);
            $('.temp').html(" " + data.main.temp + 'C');
            $('.weatherDescription').html(data.weather[0].description);





        }
    );
}

export default App;
