
var val_1 = ["Millimeters", "Centimeters", "Meters", "Kilometers"];
var val_2 = ["Millimeters", "Centimeters", "Meters", "Kilometers"];
var val_3 = ["Millimeter square", "Centimeter square", "Meter square"];
var val_4 = ["Millimeter square", "Centimeter square", "Meter square"];

var val_5 = ["Centimeter cube", "Meter cube", "Liter"];
var val_6 = ["Centimeter cube", "Meter cube", "Liter"];

var val_7 = ["Grams", "Kilograms"];
var val_8 = ["Grams", "Kilograms"];
var val_9 = ["Gram/milliliter", "Kilogram/meter cube"];
var val_10 = ["Gram/milliliter", "Kilogram/meter cube"];

var val_11 = ["Meter/second", "Meter/minute","Kilometer/hour"];
var val_12 = ["Meter/second", "Meter/minute","Kilometer/hour"];
var val_13 = ["Degree Celsius (°C)", "Degree Fahrenheit (°F)","Kelvin (K)"];
var val_14 = ["Degree Celsius (°C)", "Degree Fahrenheit (°F)","Kelvin (K)"];



function show(){


	for(var i = 0;i < 4;i++)
	{
		document.getElementById(i).innerHTML = '';
		document.getElementById(i+'1').innerHTML = '';
	}


	if(document.getElementById("unit_type").value == 'Length')
	{
		for(var i = 0;i < val_1.length;i++)
		{
			document.getElementById(i).innerHTML = val_1[i];
		}
		for(var i = 0;i < val_2.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_2[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Area')
	{
		for(var i = 0;i < val_3.length;i++)
		{
			document.getElementById(i).innerHTML = val_3[i];
		}
		for(var i = 0;i < val_4.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_4[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Volume')
	{
		for(var i = 0;i < val_5.length;i++)
		{
			document.getElementById(i).innerHTML = val_5[i];
		}
		for(var i = 0;i < val_6.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_6[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Mass')
	{
		for(var i = 0;i < val_7.length;i++)
		{
			document.getElementById(i).innerHTML = val_7[i];
		}
		for(var i = 0;i < val_8.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_8[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Density')
	{
		for(var i = 0;i < val_9.length;i++)
		{
			document.getElementById(i).innerHTML = val_9[i];
			document.getElementById(i+'1').innerHTML = val_10[i];
		}
		
	}
	else if(document.getElementById("unit_type").value == 'Speed')
	{
		for(var i = 0;i < val_11.length;i++)
		{
			document.getElementById(i).innerHTML = val_11[i];
			document.getElementById(i+'1').innerHTML = val_12[i];
		}
		
	}
	else if(document.getElementById("unit_type").value == 'Temperature')
	{
		for(var i = 0;i < val_13.length;i++)
		{
			document.getElementById(i).innerHTML = val_13[i];
			document.getElementById(i+'1').innerHTML = val_14[i];
		}
		
	}



//  main part of the code	
	if(document.getElementById("unit_type").value != '' && document.getElementById("unit_choice1").value != '' && document.getElementById("unit_choice2").value != '' && document.getElementById("input_from").value != '' )
	{
		if(document.getElementById("unit_type").value == 'Length')
		{
			length1();
		}
		else if(document.getElementById("unit_type").value == 'Area')
		{
			area1();
		}
		else if(document.getElementById("unit_type").value == 'Volume')
		{
			volume1();
		}
		else if(document.getElementById("unit_type").value == 'Mass')
		{
			mass1();
		}
		else if(document.getElementById("unit_type").value == 'Density')
		{
			density1();
		}
		else if(document.getElementById("unit_type").value == 'Speed')
		{
			speed1();
		}
		else if(document.getElementById("unit_type").value == 'Temperature')
		{
			temperature();
		}
	}
	
	
}




function length1(){
	if(document.getElementById("unit_choice1").value == 'Millimeters')
		{
			length1_mili();
		}
		else if(document.getElementById("unit_choice1").value == 'Centimeters')
		{
			length1_centi();
		}
		else if(document.getElementById("unit_choice1").value == 'Meters')
		{
			length1_meter();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilometers')
		{
			length1_kilo();
		}
}

function length1_mili()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = document.getElementById("input_from").value;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/10;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000000;
		}
}






function length1_centi()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/100;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/100000;
		}
}



function length1_meter()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*100;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000;
		}
}


function length1_kilo()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*100000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
}

// Area funtion and its sub-functions 


function area1()
{
	if(document.getElementById("unit_choice1").value == 'Millimeter square')
		{
			area1_mili();
		}
		else if(document.getElementById("unit_choice1").value == 'Centimeter square')
		{
			area1_centi();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter square')
		{
			area1_meter();
		}
}


function area1_mili()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = document.getElementById("input_from").value;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/100;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000000;
		}
}

function area1_centi()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*100;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/10000;
		}
}

function area1_meter()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
}


function volume1()
{
	if(document.getElementById("unit_choice1").value == 'Centimeter cube')
		{
			volume1_centi();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter cube')
		{
			volume1_meter();
		}
		else if(document.getElementById("unit_choice1").value == '')
		{
			volume1_liter();
		}
}

function volume1_centi()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000;
		}
}

function volume1_meter()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
}

function volume1_liter()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
}

// code of mass

function mass1()
{
	if(document.getElementById("unit_choice1").value == 'Grams')
		{
			mass1_grams();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilograms')
		{
			mass1_kilograms();
		}
}

function mass1_grams()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001;
		}
}

function mass1_kilograms()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
}


//for density


function density1()
{
	if(document.getElementById("unit_choice1").value == 'Gram/milliliter')
		{
			den_mili();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilogram/meter cube')
		{
			den_meter();
		}
}

function den_mili()
{

	if(document.getElementById("unit_choice2").value == 'Gram/milliliter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
}

function den_meter()
{

	if(document.getElementById("unit_choice2").value == 'Gram/milliliter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
}



function speed1()
{
	if(document.getElementById("unit_choice1").value == 'Meter/second')
		{
			speed1_sec();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter/minute')
		{
			speed1_min();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilometer/hour')
		{
			speed1_hour();
		}
}

function speed1_sec()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*59.988 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.599712 ;
		}
}

function speed1_min()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.01667  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.060007  ;
		}
}

function speed1_hour()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.2778 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*16.66467   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.060007  ;
		}
}



function temperature()
{
	if(document.getElementById("unit_choice1").value == 'Degree Celsius (°C)')
		{
			Celsius();
		}
		else if(document.getElementById("unit_choice1").value == 'Degree Fahrenheit (°F)')
		{
			Fahrenheit();
		}
		else if(document.getElementById("unit_choice1").value == 'Kelvin (K)')
		{
			Kelvin();
		}
}

function Celsius()
{

	if(document.getElementById("unit_choice2").value == 'Degree Celsius (°C)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value) ;
		}
		else if(document.getElementById("unit_choice2").value == 'Degree Fahrenheit (°F)')
		{	var c = parseInt(document.getElementById("input_from").value);
			c = c*(9/5) + 35
			document.getElementById("output_to").value =  c  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kelvin (K)')
		{
			var k = parseInt(document.getElementById("input_from").value);
			k = k +  273.15;
			document.getElementById("output_to").value =  k;
		}
}

function Fahrenheit()
{

	if(document.getElementById("unit_choice2").value == 'Degree Celsius (°C)')
		{
			var c = parseInt(document.getElementById("input_from").value);
			c = (c - 32) * 5/9 ;
			document.getElementById("output_to").value =  c  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Degree Fahrenheit (°F)')
		{	
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value) ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kelvin (K)')
		{
			var k = parseInt(document.getElementById("input_from").value);
			k = (k + 459.67) / 1.8 ;
			document.getElementById("output_to").value =  k;
		}
}

function Kelvin()
{

	if(document.getElementById("unit_choice2").value == 'Degree Celsius (°C)')
		{
			var c = parseInt(document.getElementById("input_from").value);
			c = (c) - 273.15 ;
			document.getElementById("output_to").value =  c  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Degree Fahrenheit (°F)')
		{	
			var k = parseInt(document.getElementById("input_from").value);
			k = (1.8 * k) - 459.67  ;
			document.getElementById("output_to").value =  k;
		}
		else if(document.getElementById("unit_choice2").value == 'Kelvin (K)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value) ;
		}
}