var Thermostat = function(){
	this.temperature = 20;
	this.powerSavingMode = "On";
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = 20;
};

Thermostat.prototype.showTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.increaseTemperatureBy1 = function() {
	switch(this.powerSavingMode){
		case "On":
			if(this.temperature < 25){
				this.temperature++;
				return this.temperature;
			}else{
				throw new Error("Error!");
			}
			break;
		case "Off":
			if (this.temperature < 32){
				this.temperature++;
				return this.temperature;
			}else{
				throw new Error("Error!");
			}
			break;
	}
};

Thermostat.prototype.decreaseTemperatureBy1 = function() {
	if (this.temperature >= 10) {
		this.temperature--;
		return this.temperature;
	} else {
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
