function rentalCarCost(d) {
    const dolars = 40;
    let price = (dolars * d)
    if(d >= 7){
      price - 50;  
    } else if (d >= 3 && d < 7){
        price - 20;  
    }
    return price;
  }