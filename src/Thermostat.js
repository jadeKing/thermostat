var Thermostat = function(){
	this.temperature = 20;
	this.powerSavingMode = "On";
};

Thermostat.prototype.showTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.increaseTemperatureBy1 = function() {
	this.temperature++;
	return this.temperature;
};

Thermostat.prototype.decreaseTemperatureBy1 = function() {
	if (this.temperature >= 10) {
		this.temperature--;
		return this.temperature;
	}
	else {
		throw new Error("Error!");
	}
};

Thermostat.prototype.switchPowerSavingMode = function() {
	if (this.powerSavingMode === "On") {
		this.powerSavingMode = "Off";
	} else {
		this.powerSavingMode = "On";
	}
};
