function getBotResponse(input) {


    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Thanku.Please rate our conversation.";
    } 
    else if (input == "What does this website do") {
        return "Our Website shows best and worth visit places in India and also show some amazing places.";
    }
    else if(input == "Okay"){
        return "No Mention.."
    }
    else if(input == "I am Planning a Vacation"){
        return "Wow! Have you decided the destination.";
    }
    else if(input == "Yes,India")
      {  return "Oh! Wow What a beautiful Country.Do you have any particular city or State in your mind??";}
    else if(input == "Yes,Delhi"||"Yes,Uttar Pradesh"||"Yes,Punjab"||"Yes,Goa"||"Yes,Assam"||"Yes,Rajasthan"||"Yes,Kerela"||"Yes,Jammu Kashmir")
        {return "Aww! What a beautiful Place.";}
    else if(input == "Show me some places to visit..")
        {return "Please go to Homepage...";}
    
    else {
        return "Try asking something else!";
    }
}