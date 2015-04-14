describe ('Thermostat',function(){
  var thermostat;
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  
  it ('shows 20 degrees as default', function(){
    expect(thermostat.showTemperature()).toEqual(20);
  });


  it ('increases temperature by 1 degree', function(){
  	expect(thermostat.increaseTemperatureBy1()).toEqual(21);
  });

  it ('decreases temperature by 1 degree', function() {
  	expect(thermostat.decreaseTemperatureBy1()).toEqual(19);
  });
});
