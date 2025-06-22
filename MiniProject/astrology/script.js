  // based on months size 12
    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];
    

    // based on dates size 31
    const compliments = [
        "You have an amazing sense of humor!",
        "Your positivity is infectious.",
        "You light up every room you enter.",
        "You're incredibly talented!",
        "You have such a kind heart.",
        "Your creativity knows no bounds.",
        "You're a great problem solver.",
        "You inspire everyone around you.",
        "You have a great taste in music.",
        "Your confidence is admirable.",
        "You're an amazing listener.",
        "You're full of great ideas!",
        "Your energy is so uplifting.",
        "You have a wonderful smile.",
        "You're so thoughtful and considerate.",
        "Your determination is impressive.",
        "You're a natural leader.",
        "You make people feel seen and appreciated.",
        "Your kindness makes the world a better place.",
        "You have a fantastic sense of style.",
        "Your enthusiasm is contagious.",
        "You're so down to earth.",
        "You bring out the best in people.",
        "Your curiosity is inspiring.",
        "You're a true gem of a person.",
        "You always know how to make someone’s day.",
        "Your work ethic is incredible.",
        "You handle challenges with such grace.",
        "You're truly one of a kind.",
        "Your laughter is the best sound ever.",
        "You make everything look effortless."
      ];


      // size 20
      const victimCardComplements = [
        "You always do good for others, but they never appreciate it.",
        "No matter how much you give, people just take you for granted.",
        "You put everyone else first, but no one does the same for you.",
        "You’re always there for others, but they disappear when you need help.",
        "You try your best, but it feels like no one notices.",
        "You go out of your way to help, yet people forget your kindness.",
        "You sacrifice so much, but they act like it’s nothing.",
        "You’re the one who always supports others, but no one supports you.",
        "You give your all, and yet they always want more from you.",
        "You forgive and forget, but others hold grudges against you.",
        "You’ve done so much for them, but they don’t even acknowledge it.",
        "You’re the one who keeps things together, but no one sees your effort.",
        "You work so hard, but they never show gratitude.",
        "You go through so much, yet people act like it’s not a big deal.",
        "You’re the glue that holds everything together, but no one thanks you for it.",
        "You always show up for others, but they leave you out when it matters.",
        "You stay kind and patient, but they take advantage of it.",
        "You give second chances, but no one ever gives you one.",
        "You carry everyone’s burdens, but no one cares about yours.",
        "You try to make everyone happy, but it feels like they just ignore you."
      ];
      

      // size 30
      const lifeImprovementRecommendations = [
        "Feed a street dog or any stray animal.",
        "Plant a tree or care for a small garden.",
        "Spend time volunteering at a local shelter.",
        "Write down three things you’re grateful for every day.",
        "Take a 30-minute walk in nature to clear your mind.",
        "Help a neighbor with something they need assistance with.",
        "Donate old clothes or items to charity.",
        "Cook a meal for someone who needs a little extra care.",
        "Compliment a stranger to brighten their day.",
        "Read a book that inspires or teaches you something new.",
        "Learn a new skill or hobby you’ve always been curious about.",
        "Spend quality time with your family or loved ones.",
        "Practice meditation or mindfulness for at least 10 minutes daily.",
        "Pick up trash in your neighborhood or a nearby park.",
        "Start journaling to process your thoughts and emotions.",
        "Offer a listening ear to someone who seems down or stressed.",
        "Support a local business or buy from small vendors.",
        "Make a habit of smiling at people you pass by.",
        "Teach someone something you know, like a craft or skill.",
        "Spend an hour decluttering your living space.",
        "Drink more water and focus on eating healthier meals.",
        "Send a kind message to an old friend or someone you’ve lost touch with.",
        "Watch the sunrise or sunset to reconnect with nature.",
        "Take a day off social media to recharge mentally.",
        "Practice random acts of kindness without expecting anything in return.",
        "Adopt or foster a pet if you’re able to provide a loving home.",
        "Start saving a small amount every month for a future goal or emergency fund.",
        "Exercise regularly, even if it’s just light stretching or yoga.",
        "Be polite and patient with people, even in frustrating situations.",
        "Write down your short-term and long-term goals and work toward them."
      ];
      

       // size 20
      const futurePredictions = [
        "You will become a crorepati in the near future.",
        "Success and prosperity are heading your way.",
        "You will find the perfect opportunity that changes everything.",
        "Great financial abundance is coming your way soon.",
        "You will achieve all your dreams with hard work and dedication.",
        "Your efforts will pay off in ways you can't yet imagine.",
        "You will become a source of inspiration to others.",
        "A breakthrough in your career is just around the corner.",
        "You will overcome every obstacle in your path and thrive.",
        "You will meet someone who will help you achieve your goals.",
        "Your creativity and innovation will lead you to great success.",
        "You will soon receive recognition for your hard work and dedication.",
        "The next few years will bring you immense personal growth.",
        "Your financial situation will improve drastically.",
        "You are destined for greatness and you’ll soon realize it.",
        "Opportunities for wealth and success will come knocking at your door.",
        "You will make decisions that lead to extraordinary achievements.",
        "Your passion will soon turn into a profitable endeavor.",
        "You will travel to places you’ve always dreamed of visiting.",
        "The future holds exciting and unexpected opportunities for you."
      ];
      



const form=document.getElementById("astrologyForm");
form.addEventListener("submit",(event)=>{
     event.preventDefault();
     // console.log("submitted");

     const firstname=document.getElementById("firstName").value;
     const lastname=document.getElementById("lastName").value;
     const day=document.getElementById("dob").value;
     const month=document.getElementById("month").value;
     const year=document.getElementById("year").value;

   //   console.log(firstname,lastname,dob,month,year);

   const result=document.getElementById("result");
  //   result.innerHTML="hello everyone";


  const first_message = `Hello ${firstname} ${lastname}.`;
  const second_message = `Your Zodiac sign is ${zodiacSigns[month-1]}.`
  const third_message = compliments[day-1];

  let index = Math.floor(Math.random()*20);
  const fourth_message =  victimCardComplements[index];


  index = (firstname.length * lastname.length * year)%30;
  const fifth_message = lifeImprovementRecommendations[index];

  index = (day*month*year)%20;
  const sixth_message = futurePredictions[index];
  
  result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Reccomendation for you: ${fifth_message} Your Future Prediction is: ${sixth_message}`;

})