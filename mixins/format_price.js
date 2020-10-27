export default {
  filters: {
    formatPrice: function(price) {
      if (!parseInt(price)) { return "";}
      if(price > 999) {
        var priceString = (price / 1).toFixed(0);
        var priceArray = priceString.split("").reverse();
        var index = 0;
        while (priceArray.length > index + 3) {
          priceArray.splice(index+3, 0, " ");
          index +=4;
        }
        return priceArray.reverse().join("");
      } else {
        return (price / 1).toFixed(0);
      }
    }
  },
}
