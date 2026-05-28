// Soil information for popups and filtering
export const soilInfo = {
  Inceptisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Found in semi arid environments (also humid), wide range of characteristics and can be found in different climates",
    moolelo: "N/A"
  },
  Oxisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Found in subtropical/tropical regions and is really weathered soil. It has a low natural fertility and has indistinct horizons",
    moolelo: "N/A"
  },
  Ultisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Soil is found in humid areas and is formed from weathering and leaching processes. It is acidic",
    moolelo: "N/A"
  },
  Mollisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Dark colored surface horizon, relatively high in content of organic matter, also rich and fertile. Good for crops",
    moolelo: "N/A"
  },
  Vertisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Has a high content of expanding clay minerals and has cracks that open and close periodically. Water is transmitted very slowly and undergoes very little leaching",
    moolelo: "N/A"
  },
  Entisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Shows little to no evidence of pedogenic horizon development and can be found in areas where erosion of deposition rates are faster than the rate of soil development. More mature soils and tend to have a more reddish color ",
    moolelo: "N/A"
  },
  Spodosols: {
    controller: "Controller Information - NEED TO GET",
    information: "Formed from weathering processes that strip organic water combined with aluminum from the surface layer",
    moolelo: "N/A"
  },
  Aridisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Dry/has low moisture content, commonly found in deserts. It’s too dry for most plants to grow without irrigation. Erosion is more common since it lacks vegetation and has limited organic matter",
    moolelo: "N/A"
  },
  Histosols: {
    controller: "Controller Information - NEED TO GET",
    information: "High content of organic matter and very little permafrost. Histosol soil is formed from the decomposed plant remains.",
    moolelo: "N/A"
  },
  Andisols: {
    controller: "Controller Information - NEED TO GET",
    information: "Has little crystalline and ordered structure, with a high water and nutrient holding capacity. Also formed from weathering processes. Derived from volcanic ash but are useful for crops",
    moolelo: "Considered sacred — born of Pele — Andisols connect directly to fire-born land creation."
  },
  Unclassified: {
    controller: "Controller Information",
    information: "Unclassified soils are not fully surveyed or categorized, often is urban land/lava flows.",
    moolelo: "N/A"
  }
};


//soil colors
export const getColor= (order) => {
  switch (order) {
    case 'Inceptisols': return 'blue';
    case 'Oxisols': return 'red';
    case 'Ultisols': return 'purple';
    case 'Mollisols': return '#E0218A';
    case 'Vertisols': return 'orange';
    case 'Entisols': return '#e0da21';
    case 'Spodosols': return 'cyan';
    case 'Aridisols': return 'brown';
    case 'Histosols': return 'greenyellow';
    case 'Andisols': return 'darkslateblue'
    case 'Undefined': return 'white';
    default: return 'white';
  }
};