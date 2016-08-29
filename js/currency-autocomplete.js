$(function(){
  var beverages = [
    { value: 'Ringnes', data: 'Beer', description:'Norwegian beer....' },
    { value: 'Dahls', data: 'Beer', description:'Beer from Trondheim'  },
    { value: 'Tuborg', data: 'Beer', description:'Danish beer'  },
    { value: '1664 Blanc', data: 'Beer', description:'Fresh summer beer with hint of citrus'  },
    { value: 'Milk', data: 'Non alco', description:'Regular cow milk'  },
    { value: 'Water', data: 'Non alco', description:'H2O '  },
    { value: 'Virgin cuba libre', data: 'Non alco', description:'Coca Cola with a squeeze of lime'  },
    { value: 'Litago', data: 'Non aclo', description:'Chockolate milk from Norway'  },
    { value: 'Gato negro', data: 'Red wine, Wine', description:'A nice red whine'  },
    { value: 'Riesling', data: 'White wine, Wine', description:'White wine with a fancy bottle'  },
    { value: 'Screwdriver', data: 'Drink', description:'Vodka and Orange juice'  },
    { value: 'Grey goose', data: 'Vodka, Liquor', description:'Expensive vodka'  },
    { value: 'Lotens', data: 'Aquavit, Liquor', description:'A norwegian aquavite, normaly enjoyed during christmas.'  },
    
  ];
  
  // autocompletes the search and sends the info to the document. 
  $('#autocomplete').autocomplete({
    lookup: beverages,
    onSelect: function (suggestion) {
      var thehtml = '<h2>' + suggestion.value + '</h2> <br> <strong>Type:</strong> <p>' + suggestion.data + 
      '</p> <br> <strong>Description:</strong> <p>'+ suggestion.description + '</p> <br> <img src="img/'+suggestion.value+'.jpg" height="230" width="auto">';
      $('#outputcontent').html(thehtml);
    }
  });
  

});