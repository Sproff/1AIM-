//Confessions Local Storage
let confessions = [
    'I Arise, I Shine, <br> Nations come to my light and kings, <br> To my sunburst brightness, <br> I have no more need of the sun by day,  <br> Nor the brightness of the moon by night, <br> For God is my eternal light, <br> He bathes me in splendor, <br> My sun will never go down, <br> My moon will never fade. <br> HALLELUJAH!! <br> MY DAYS OF GREIVING ARE OVER!!!',
    'I walk by faith and not by sight, <br> I declare God\'s word and it is established, <br> I beleive, I receive all I say, I embrace the God life; <br> nothing is too much for me, <br> I speak with authority and by faith, <br> I draw a sharp line between the evil of the unbelieving world and the rightness of the believing world. <br> I am a force to reckon with !! <br> Glory to God!!!',
    'I prosper in everything I put my hand to. I have prosperity in all areas of my life–spiritually, financially, mentally, and socially.',
    'As a man thinks in his heart, so is he; therefore, all of my thoughts are positive. I do not allow Satan to use my spirit as a garbage dump by meditating on negative things that he offers me',
    'I am purposed that my mouth shall not transgress. I will speak forth the righteousness of God all the day long.',
    'I don’t have a spirit of fear, but of power and love and a sound mind.',
    'I am creative because the Holy Spirit lives in me.',
    'Pain cannot successfully come against my body because Jesus bore all my pain.',
    'I do what I say I will do, and I get where I am going on time.',
    'All my household are blessed in their deeds: we’re blessed when we come in and when we go out.'
    ];
    
    function displayConfessions(){
        let index = Math.floor(Math.random() *confessions.length);
        let div = document.querySelector('#quote')
        let quote = `<div class = "card p-3">
         <div class ="quote-icon"><i class ="fa fa-quote-left"></i>
         <p class = "font-weight-light mt-3 text-dark"> ${confessions[index]} </p>
         <div class ="quote-icon float-right"><i class ="fa fa-quote-right"></i>
         </div>
         `;
    div.innerHTML = quote;
    }
    
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', displayConfessions);


    //Animations
   new WOW().init();
   
   AOS.init({
    offset: 400,
    duration: 1000,
});
    