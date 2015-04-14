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

  it ('does not allow temperature below 10 degrees', function(){
    for(var i=0; i <= 10; i++) {
      thermostat.decreaseTemperatureBy1();
    }
    expect(function(){thermostat.decreaseTemperatureBy1();}).toThrow(new Error("Error!"));
  });

  it ('has power saving mode on by default', function(){
    expect(thermostat.powerSavingMode).toEqual("On");
  });

  it ('can have power saving mode switched off', function() {
   thermostat.switchPowerSavingMode();
   expect(thermostat.powerSavingMode).toEqual("Off");
  });

  it ('can have power saving mode switched on', function() {
   thermostat.switchPowerSavingMode();
   thermostat.switchPowerSavingMode();
   expect(thermostat.powerSavingMode).toEqual("On");
  });

  it ('does not allow to increase temperature from 25 degrees when PSM is on', function(){
    for(var i=0; i < 5; i++) {
      thermostat.increaseTemperatureBy1();
    }
    expect(function(){thermostat.increaseTemperatureBy1();}).toThrow(new Error("Error!"));
  });

  it ('does not allow to increase temperature from 32 degrees when PSM is off', function(){
    thermostat.switchPowerSavingMode();
    for(var i=0; i < 12; i++) {
      thermostat.increaseTemperatureBy1();
    }
    expect(function(){thermostat.increaseTemperatureBy1();}).toThrow(new Error("Error!"));
  });

  it ('allows to increase temperature to 30 degrees when PSM is off', function(){
    thermostat.switchPowerSavingMode();
    for(var i=0; i < 9; i++) {
      thermostat.increaseTemperatureBy1();
    }
    expect(thermostat.increaseTemperatureBy1()).toEqual(30);
  });


});
