describe ('Thermostat',function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it ('shows 20 degrees as default', function(){
    expect(thermostat.showTemperature()).toEqual(20);
  });
});
