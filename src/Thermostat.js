var Thermostat = function(){
	this.temperature = 20;
};

Thermostat.prototype.showTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.increaseTemperatureBy1 = function() {
	this.temperature++;
	return this.temperature;
};

Thermostat.prototype.decreaseTemperatureBy1 = function() {
	this.temperature--;
	return this.temperature;
};
