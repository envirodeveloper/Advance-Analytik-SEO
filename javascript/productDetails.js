const products = [
  {
    productId: "001",
    name: "Viz Pro Solo",
    img: "../productImages/img001.png",
    dataSheetLink: "../productsDataSheets/pro-solo-transmitter.pdf",
    introduction:"Advance Analytics VizSens Series Single channel transmitter, measured parameters include PH, DO, ORP, conductivity, turbidity, SS, chlorophyll, blue-green algae and other parameters. And realize the plug and play of the sensor, the configuration is flexible and convenient.",
    features: [
        "Achieve plug and play of sensors, quick and convenient electrode installation and replacement",
        "Simple to use, reliable results, interface operation instructions can reduce operation errors",
        "LCD screen featuring self-diagnostic message prompt with password protection",
        "With 4 ~ 20mA, MODBUS RS485 multiple data output methods",
        "Automatically prompt error and alarm information, and realize the upload of alarm signal",
        "The transmitter supports wall mounted installation/panel installation/ pipe installation/ pole installation",
        "Existing time display, data storage and historical data viewing functions",
        "Optional data wireless transmission module"
      ],
    attributes: [
      { name: "Inputs", value: "Select any one Sensor (Digital/Analog/4 to 20mA/ISE) \npH – Analog \npH – Digital \nORP – Analog \nORP – Digital  \nChlorine Sensor – Potentiometric \nConductivity/Total Dissolved solids – Analog/Digital \nDissolved Oxygen – Polarographic/Optical \nTurbidity – Digital \nSludge Level – Optical/Digital \nUV-VIS Sensor – (COD,BOD,TOC,TSS,Color,UV 254) \nTotal Suspended solids – IR Based \nIon Selective Electrode – Analog/4 to 20 mA \nTemperature – PT100,PT1000, RTD, Thermocouple " },
      { name: "Outputs", value: "1 x 4-20mA active output (load of 500 ohm max)" },
      { name: "Relays", value: "2 x electromechanical SPDT (form C) contact, 5 A Programmable individually for high or low alarm."},
      { name: "Free sockets", value: "2 x free sockets for additional modules among \n4-20mA input module, 2-wire or 4-wire (15V DC source, 50 mA max) \n4-20mA active output" },
      { name: "Measuring mode",value: "Continuous/Cyclic/Dynamic Mode"},
      { name: "Memory",value: "16 GB Memory Card (Stores 1 Year measurement Data) Depending upon measurement cycle frequency. "},
      { name: "Power supply", value: "90 - 265 VAC 47/63 Hz or 24V DC 0.5 A" },
      { name: "Touch Screen",value: "5.0 Inch Colour TFT LCD 800 x 480 pixels with Industrial projected capacitive touch screen." },
      { name: "Communication Interface", value: "RS 232 and RS 485" },
      { name: "Certifications", value: "CE, EN 61010-1, EN 61326,IP66,IP68" },
      { name: "Enclosure", value: "IP66, IP68 (24 Hours-2M Depth) Industrial Polycarbonate Housing Optional pipe mounting brackets/ Pole Mounting/Wall Mounting/Panel Mounting Brackets."  },
      { name: "Dimensions", value: "296 x 225 x 185 mm" },
      { name: "Weight", value: "3 kg approx. (Depending on Configuration)" },
    ],
  },
    
    
   {
    productId: "002",
    name: "Viz Pro Duo",
    img: "../productImages/img001A.png",
    dataSheetLink: "../productsDataSheets/pro-duo-transmitter.pdf",
    introduction:
      "Advance Analytics VizSens Series Dual- channel transmitter, measured parameters include PH, DO, ORP, conductivity, turbidity, SS, chlorophyll, blue-green algae and other parameters. And realize the plug and play of the sensor, the configuration is flexible and convenient.",
    features: [
        "User has freedom to select a combination of two sensors.",
        "Achieve plug and play of sensors, quick and convenient electrode installation and replacement.",
        "Simple to use, reliable results, interface operation instructions can reduce operation errors.",
        "LCD screen featuring self-diagnostic message prompt with password protection.",
        "With 4 ~ 20mA, MODBUS RS485, multiple data output methods.",
        "Automatically prompt error and alarm information, and realize the upload of alarm signal.",
        "The transmitter supports wall mounted installation/panel installation/pipe installation/pole installation.",
        "Existing time display, data storage and historical data viewing functions.",
        "Optional data wireless transmission module."
    ],
    attributes: [
      { name: "Inputs", value: "Select any two Sensor (Digital/Analog/4 to 20mA/ISE)  \npH – Analog \npH – Digital \nORP – Analog \nORP – Digital  \nChlorine Sensor – Potentiometric \nConductivity/Total Dissolved solids – Analog/Digital \nDissolved Oxygen – Polarographic/Optical \nTurbidity – Digital \nSludge Level – Optical/Digital \nUV-VIS Sensor – (COD,BOD,TOC,TSS,Color,UV 254) \nTotal Suspended solids – IR Based \nIon Selective Electrode – Analog/4 to 20 mA \nTemperature – PT100,PT1000, RTD, Thermocouple " },
      { name: "Outputs", value: "2 x 4-20mA active output (load of 500 ohm max)" },
      { name: "Relays", value: "2 x electromechanical SPDT (form C) contact, 5 A Programmable individually for high or low alarm."},
      { name: "Free sockets", value: "4 x free sockets for additional modules among - Dual \n4-20mA input module, 2-wire or 4-wire (15V DC source, 50 mA max) \n4-20mA active output" },
      { name: "Measuring mode",value: "Continuous/Cyclic/Dynamic Mode"},
      { name: "Memory", value: "16 GB Memory Card (Stores 1 Year measurement Data) Depending upon measurement cycle frequency. "},
      { name: "Power supply",value: "90 - 265 VAC 47/63 Hz or 24V DC 0.5 A"},
      { name: "Touch Screen",value: "5.0 Inch Colour TFT LCD 800 x 480 pixels with Industrial projected capacitive touch screen."},
      { name: "Communication Interface", value: "RS 232 and RS 485" },
      { name: "Certifications", value: "CE, EN 61010-1, EN 61326,IP66,IP68" },
      { name: "Enclosure", value: "IP66, IP68 (24 Hours-2M Depth) Industrial Polycarbonate Housing Optional pipe mounting brackets/ Pole Mounting/Wall Mounting/Panel Mounting Brackets." },
      { name: "Dimensions", value: "296 x 225 x 185 mm" },
      { name: "Weight", value: "3 kg approx. (Depending on Configuration)" },
    ],
  },

  {
    productId: "003",
    name: "Viz Pro Multi",
    img: "../productImages/img002.png",
    dataSheetLink: "../productsDataSheets/pro-multi-transmitter.pdf",
    introduction:
      "Viz Multi-parameter transmitter cansimultaneously monitor multiple different parameters according to customers’ different needs, including Temperature / PH / ORP  / Conductivity/ Dissolved oxygen/Turbidity /Sludge   concentration/Chlorophyll/ Blue-green algae / COD / NO3 /  Ionic ammonia nitrogen / Transparency / Residual chlorine and other parameters. It is widely used in water quality monitoring in wastewater treatment plants, waterworks, water stations, surface water, and industrial fields  The transmitter software interface parameter display is adaptive, the operation interface menu is simple to set up, the   user operation is convenient; the sensor is plug and play; the  electrode installation and replacement is fast and convenient;  various data transmission modes are optional, and the data  storage and export are available.",
      features: [
        "Enhanced Sensor Integration: Connect up to 4 sensors to streamline integration and decrease operating and maintenance expenses.",
        "Sensor Compatibility: Accommodates both common digital sensor interfaces and analog sensors with configurable options.",
        "Effortless Sensor Management: Quick and convenient electrode installation and replacement through sensor plugs and simplified operations.",
        "Versatile Data Transmission: Multiple data transmission methods, including 4~20mA, MODBUS RS485, and wireless transmission, ensure seamless connectivity.",
        "Intuitive Touch Screen: A 5-inch color touch screen offers easy operation, learning, and reliable system control with minimal maintenance.",
        "Dynamic Parameter Monitoring: Benefit from data storage and curve display functions for real-time monitoring of parameter dynamics.",
        "Error and Alarm Management: Receive automatic reminders for errors and alarm information, along with alarm signal uploading for prompt attention.",
        "User Access Control: Three levels of management authority provide enhanced security and access control.",
        "Flexible Mounting Options: Choose between wall mounting, panel mounting, pole mounting, pipe mounting to suit different installation environments.",
        "Wireless Connectivity: Optional wireless data transmission module empowers remote monitoring and control."
      ], 
    attributes: [
      { name: "Inputs", value: "Select any four Sensor (Digital/Analog/4 to 20mA/ISE)  \npH – Analog \npH – Digital \nORP – Analog \nORP – Digital  \nChlorine Sensor – Potentiometric \nConductivity/Total Dissolved solids – Analog/Digital \nDissolved Oxygen – Polarographic/Optical \nTurbidity – Digital \nSludge Level – Optical/Digital \nUV-VIS Sensor – (COD,BOD,TOC,TSS,Color,UV 254) \nTotal Suspended solids – IR Based \nIon Selective Electrode – Analog/4 to 20 mA \nTemperature – PT100,PT1000, RTD, Thermocouple " },
      { name: "Outputs", value: "4 x 4-20mA active output (load of 500 ohm max)" },
      { name: "Relays", value: "4 x electromechanical SPDT (form C) contact, 5 A Programmable individually for high or low alarm."},
      { name: "Free sockets", value:"6 x free sockets for additional modules among \n4-20mA input module, 2-wire or 4-wire (15V DC source, 50 mA max) \n4-20mA active output"},
      { name: "Measuring mode", value: "Continuous/Cyclic/Dynamic Mode"},
      { name: "Memory", value:"16 GB Memory Card (Stores 1 Year measurement Data) Depending upon measurement cycle frequency. "},
      { name: "Power supply",value: "90 - 265 VAC 47/63 Hz or 24V DC 0.5 A"},
      { name: "Touch Screen",value:"5.0 Inch Colour TFT LCD 800 x 480 pixels with Industrial projected capacitive touch screen."},
      { name: "Communication Interface", value: "RS 232 and RS 485" },
      { name: "Certifications", value: "CE, EN 61010-1, EN 61326,IP66,IP68" },
      { name: "Enclosure", value: "IP66, IP68 (24 Hours-2M Depth) Industrial Polycarbonate Housing Optional pipe mounting brackets/ Pole Mounting/Wall Mounting/Panel Mounting Brackets."},
      { name: "Dimensions", value: "296 x 225 x 185 mm" },
      { name: "Weight", value: "3 kg approx. (Depending on Configuration)" },
    ],
  },

  {
    productId: "004",
    name: "VizSens-PH(Analog)",
    img: "../productImages/img003.png",
    dataSheetLink: "../productsDataSheets/Vizsens-pH-Analog.pdf",
    introduction:
      "The pH Sensor is widely used in pH monitoring in water treatment, hydrological monitoring, wastewater treatment, swimming pools, fish ponds and fertilizers, chemicals, and biology.It uses a composite electrode in which a glass indicating electrode and a reference electrode are combined to measure the pH of the water.",
    features: [
      "Repeatability and Stability: Offers good stability and repeatability, suitable for fresh and sea water testing.Measurement range:- 0 - 14pH",
      "Simple Cleaning and Activation: Allows for easy cleaning and activation.",
      "Analog-Digital Conversion Module (Optional): Enables digital signal output with high anti-jamming capacity and far transmission distance.",
      "RS485 Digital Signal Output (Optional): Achieves standard digital signal output via RS485, enabling integration and networking with other equipment without a controller.",
      "Quick and Easy Installation: Facilitates field installation through terminal connection."
    ],

    attributes: [
      { name: "Main material", value: "Black Polypropylene, Ag/Agcl Reference Gel"},
      { name: "Weight", value: "0.2kg" },
      { name: "Dimensions", value: "Dia. 28.7mm * Length 195mm" },
      { name: "Cable Length", value: "Standard: 10m, extendable to 20m" },
      { name: "Measurement Range", value: "0-14pH;" },
      { name: "Measurement Accuracy", value: "pH: ±0.1pH; Temperature: ±0.5°C " },
      { name: "Temperature Range", value: "0-80°C" },
      { name: "Pressure Range", value: "≤ 0.6Mpa" },
      { name: "Zero Potential pH Value", value: "7 ± 0.25pH (15mV)" },
      { name: "Slope", value: "≥ 95%" },
      { name: "Internal Resistance", value: "≤ 250MΩ" },
      { name: "Alkaline Error", value: "0.2pH (1mol/L Na+ pH14) (25°C)"},
      { name: "Response Time", value: "≤ 10 Seconds (After stirring)" },
    ],
  },


  {
    productId: "005",
    name: "VizSens-ORP(Analog)",
    img: "../productImages/img003.png",
    dataSheetLink: "../productsDataSheets/Vizsens-orp-Analog.pdf",
    introduction:
      "The VizSens-ORP(A) ORP sensor is a combination electrode that includes a precious metals indicator electrode with a reference electrode. It measures the potential difference between the working battery composed of the measuring electrode and the reference electrode in a solution. By utilizing the linear relationship between the ORP value of the measuring solution and the potential of the working battery, it achieves online ORP monitoring.",
    features: [
      "Accurate Conductivity Monitoring: Provides precise and reliable measurement of conductivity, ensuring data accuracy for various applications.",
      "Glass Platinum Electrode: Utilizes a glass platinum electrode design, known for its durability and consistent performance.",
      "Wide Measurement Range: Capable of measuring conductivity within a range of 10 to 5000 uS/cm, accommodating diverse conductivity levels.",
      "Temperature Flexibility: Operates effectively in temperatures ranging from 0 to 80 °C, suitable for various environmental conditions.",
      "Pressure Compatibility: Designed to withstand pressures up to 0.6 Mpa, maintaining performance under different pressure conditions.",
      "Quick Response Time: Offers a rapid response time of ≤10 seconds to reach 95% of the end value after stirring, ensuring timely data capture.",
      "Flexible Cable Length: Supplied with a standard cable length of 10m, extendable to a maximum of 20m, facilitating installation flexibility.",
      "Versatile Applications: Suitable for a wide range of applications including water treatment, hydrological monitoring, swimming pools, and more.",
      "Reliable Medium Temperature: Capable of operating in a medium temperature range of 0~80°C without freezing, enabling use in various environments."
  ],   
    attributes: [
      { name: "Main materials",value: "Black Polypropylene, Ag/Agcl Reference Gel"},
      { name: "Measurement range", value: "-2000mV ~ +2000mV" },
      { name: "Pressure range", value: "≤0.6Mpa" },
      { name: "Temperature range", value: "0-80℃" },
      { name: "Zero potential value", value:"86 ± 15mV (25℃) (in pH 7.00 solution containing saturated quinhydrone)"},
      { name: "Range",value: "≥ 170mV (25℃) (in pH 4.00 solution containing saturated quinhydrone)"},
      { name: "Response time", value: "≤ 10 sec (Reach 95% of the end value) (After stirring)"},
      { name: "Dimensions", value: "Dia28.7mm * L 195mm" },
      { name: "Weight", value: "0.2kg" },
      { name: "Cable length", value: "Standard: 10m, the maximum can be extended to 20m"},
    ],
  },

  {
    productId: "006",
    name: "VizSens-EC(Analog) ",
    img: "../productImages/img003.png",
    dataSheetLink: "../productsDataSheets/Vizsens-EC-Analog.pdf",
    introduction:
      "The VizSens-EC(A) Conductivity Sensor, featuring a glass platinum electrode, is a reliable instrument for accurate conductivity monitoring. This sensor utilizes voltage and current values to determine conductivity, making it an essential tool for applications in water treatment, hydrological monitoring, wastewater treatment,swimming pools, fish ponds, as well as in fertilizers, chemicals, and biology industries.",
      features: [
        "Accurate Conductivity Monitoring: Provides precise and reliable measurement of conductivity,ensuring data accuracy for various applications.",
        "Glass Platinum Electrode: Utilizes a glass platinum electrode design, known for its durability and consistent performance.",
        "Wide Measurement Range: Capable of measuring conductivity within a range of 10 to 1000 mS/cm, accommodating diverse conductivity levels.",
        "Temperature Flexibility: Operates effectively in temperatures ranging from 0 to 80 °C, suitable for various environmental conditions.",
        "Pressure Compatibility: Designed to withstand pressures up to 0.6 Mpa, maintaining performance under different pressure conditions.",
        "Quick Response Time: Offers a rapid response time of ≤10 seconds to reach 95% of the end value after stirring,ensuring timely data capture.",
        "Flexible Cable Length: Supplied with a standard cable length of 10m, extendable to a maximum of 20m, facilitating installation flexibility.",
        "Versatile Applications: Suitable for a wide range of applications including water treatment, hydrological monitoring, swimming pools, and more.",
        "Reliable Medium Temperature: Capable of operating in a medium temperature range of 0~80°C without freezing, enabling use in various environments.",
      ],
      attributes: [
      { name: "Main materials", value: "Black polypropylene shell, glass platinum electrode"},
      { name: "Weight", value: "0.2kg" },
      { name: "Dimensions", value: "Dia28.7mm * L 195mm" },
      { name: "Cable length", value: "Standard: 10m, the maximum can be extended to 20m"},
      { name: "Measurement range", value: "Conductivity: 10-1000 mS/cm" },
      { name: "Temperature range", value: "0-80℃" },
      { name: "Pressure range", value: "≤0.6Mpa" },
      { name: "Response time",value: "≤10 sec (Reach 95% of the end value) (After stirring)"},
      { name: "Medium temperature", value: "0~80℃ " },
      { name: "Temperature Compensation", value: "PT1000A" }
    ],
  },

  {
    productId: "007",
    name: "VizSens-PH(Digital)",
    img: "../productImages/imgpH.png",
    dataSheetLink: "../productsDataSheets/Vizsens-pH-Digital.pdf",
    introduction:
      "The PPH-500B pH is a digital pH sensor with an RS485 communication interface and the standard Modbus protocol. Stainless steel corrosion resistant shell, IP68 protection grade, built-in PT1000 thermistor and compensation algorithm, with high precision, long life, small drift and other advantages, suitable for all kinds of harsh working environment.",
    application:
      "It is widely used in pH monitoring in water treatment, hydrological monitoring, wastewater treatment,  swimming pools, fish ponds and fertilizers, chemicals,and biology",
    measurnmentPrinciple:
      "The pH sensor uses a composite electrode in which a glass indicating electrode and a reference electrode are combined to    measure the pH of the water. ",
    features: [
      "Power supply and output isolation design ensures electrical safety.",
      "Built-in protection circuit for power supply and communication chip, offering strong anti-interference ability.",
      "Comprehensive protection circuit design for reliable operation without additional equipment.",
      "Circuit part designed within the electrode for easy installation and operation.",
      "RS-485 transmission interface, MODBUS-RTU communication protocol, enabling two-way communication and remote command reception."
  ],  
    attributes: [
      { name: "Main material", value: "Shell: 316L stainless steel + Polyoxymethylene; Cable: Polyurethane; Electrode: Glass core"},
      { name: "Measurement range", value: "0-14 pH" },
      { name: "Resolution", value: "0.01 pH" },
      { name: "Precision", value: "±0.1 pH" },
      { name: "Repeatability", value: "±0.1 pH" },
      { name: "Temperature range", value: "-15 to 110℃" },
      { name: "Temperature resolution", value: "0.1℃" },
      { name: "Temperature Accuracy", value: "0.5℃" },
      { name: "Pressure range", value: "0-0.1Mpa" },
      { name: "Applicable Temperature", value: "0~60℃" },
      { name: "Power supply", value: "9-36V DC " },
      { name: "Dimension", value: "Diameter 34mm * Length 252mm" },
      { name: "Water Protective rate", value: "IP68 (Protective casing)" },
      { name: "Cable length", value: "Standard: 10m, maximum can be extended to 200m"},
    ],
  },

  {
    productId: "008",
    name: "VizSens-EC(Digital)",
    img: "../productImages/imgpH.png",
    dataSheetLink: "../productsDataSheets/Vizsens-EC-Digital.pdf",
    introduction:
      "Introducing the VizSens-EC(D) Conductivity Sensor with a durable PPS(polyphenylene) Shell. This sensor offers precision, reliability, and versatility, making it an ideal solution for diverse applications. It features a wide measurement range with automatic range switching, ensuring accurate results even in challenging conditions. With an accuracy of ±2%F.S. and temperature compensation up to 60 °C, this sensor delivers dependable conductivity measurements. Compact, IP68 rated, and supporting MODBUS RS485 communication, it offers easy installation with its R3/4 mounting thread and standard 10-meter cable.",
     principleManagnment:
       "The conductivity sensor is a glass platinum electrode. In general, the voltage is in the form of a sine wave. Conductivity is determined by the ohmic formula based on voltage and current  values. ",
    application:
      "It is widely used in the monitoring of conductivity in water treatment, hydrological monitoring, wastewater treatment,It is widely used in the monitoring of conductivity in swimming poolsIt is widely used in the monitoring of conductivity in fish pondsThe monitoring of conductivity in fertilizers, chemicals, and biology. ",
      features: [
        "Core electrode adopts quadrupole working principle, wide range, high accuracy and good stability.",
        "Electrode is made of graphite, high sensitivity, strong ability to resist pollution.",
        "Waterproof grade IP68, 316L stainless steel corrosion resistant shell, long-time work underwater.",
        "Built-in PT-1000 temp. sensitive resistor, effective temperature compensation.",
        "RS485 communication interface, the standard Modbus protocol, ease of integration.",
        "Sensor power supply positive and negative reverse connection protection.",
        "Sensor RS485 A/B terminal is connected to the power supply protection."
      ],

    attributes: [
      { name: "Main materials", value: "316L Stainless Steel + Polyoxymethylene" },
      { name: "Dimension", value: "Diameter 34mm* Length 210mm" },
      { name: "Cable length",value: "Standard: 10M, the maximum can be extended 200m"},
      { name: "Mounting thread", value: '3/4" thread' },
      { name: "Measurement range",value: "10 us/cm - 200 ms/cm" },
      { name: "Accuracy", value: "±2% F.S." },
      { name: "Resolution",value:"0.01us/cm-1us/cm depends on measure range"},
      { name: "Repeatability", value: "±1%" },
      { name: "Temp. measuring range", value: "0-100 °C" },
      { name: "Electrode voltage resistance", value: "0-0.1 Mpa" },
      { name: "Electrode temp. resistance", value: "0-45 °C" },
      { name: "Pressure range", value: "0-0.1 Mpa" },
      { name: "Power supply", value: "9-36V" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Protective rate", value: "IP68 (Protective casing)" },
    ],
  },

  {
    productId: "009",
    name: "VizSens-ODO",
    img: "../productImages/img009.png",
    dataSheetLink: "../productsDataSheets/Vizsens-ODO-Sensor.pdf",
    introduction:
      "The VizSens-ODO Optical Dissolved Oxygen Sensor utilizes fluorescence technology to accurately measure dissolved oxygen concentration. A luminescent material on the sensor's cap is excited by blue LED light, emitting red light. The intensity and time of the red light are indicative of oxygen molecule concentration, enabling precise calculations. ",
    application:
      "DO online monitoring of different technological processes such as regulating reservoir, biochemical pool and effluent of sewage treatment plant. DO online monitoring of water plant, surface water, industrial process water and aquaculture and etc. ",
    features: [
        "New oxygen-sensitive membrane design.",
        "NTC temperature compensation function.",
        "Measurement without oxygen consumption, flow rate, or stirring.",
        "Utilizes breakthrough fluorescence technology.",
        "Low maintenance requirements with built-in self-diagnosis.",
        "Plug-and-play installation for easy setup.",
        "Factory calibration with optional field calibration.",
        "High anti-jamming digital sensor with standard signal output.",
        "Integration and networking capabilities."
      ],
    attributes: [
      { name: "Dimensions", value: "Diameter 49.5 mm * Length 251.3 mm" },
      { name: "Cable Material", value: "Polyurethane"},
      { name: "Measurement range", value: "DO：0-20 mg/L or 0-200% saturation； \nTemperature：0-45 ℃ "},
      { name: "Measurement Accuracy", value: "DO: ±3% or ±0.3 mg/L of measured value, maximax criterion; \nTemperature: ±0.5 °C" },
      { name: "Resolution",value: "0.01 mg/L"},
      { name: "Repeatability", value: "±0.3 mg/L" },
      { name: "Pressure range", value: "≤0.3 Mpa " },
      { name: "Main material ", value:"Body ： SS316L （ fresh water ） ， Titanium alloy（Ocean marine）；\nCover：Polyphenylene + glass fiber；Cable： Polyurethane"},
      { name: "Cover", value: "Polyphenylene + glass fiber" },
      { name: "Weight", value: "1.4kg" },
      { name: "Cable Length", value: "Standard:10m, the maximum can be extended 100m" },
      { name: "Power supply ",value: "DC：9~36 VDC"},
      { name: "Communication protocol", value: "MODBUS RS485" },
      { name: "Storage temperature", value: "-15 to 60 ℃ "},
      { name: "Measuring", value: "0-45 ℃ "},
      { name: "level of protection", value: "IP68/NEMA6P" },
    ],
  },

  {
    productId: "010",
    name: "VizSens-RCL",
    img: "../productImages/img010.png",
    dataSheetLink: "../productsDataSheets/Vizsens-RCL.pdf",
    introduction:
      "The VizSens-RCL is an advanced residual chlorine/chlorine dioxide sensor that employs a constant voltage principle to measure these components in water. The instrument utilizes stable electric potential and current signals to calculate concentrations, offering a simple structure, easy maintenance, and exceptional accuracy. It operates without oxygen consumption, eliminating flow rate and stirring requirements. Factory calibration ensures long- term stability and reliability.",
    application:
      "Won't produce oxygen consumption when measuring and no requirement of flow rate and stirring. Factory calibration, not need calibration for a year and can carry out field calibration. Digital sensor, high anti-jamming capacity and far transmission distance. ",
    features: [
      "Does not cause oxygen consumption during measurement, eliminating flow rate and stirring needs.",
      "Factory calibration requiring",
      "Calibration only once a year, with the option for field calibration.",
    ],
    attributes: [
      { name: "Principle", value: "Constant voltage method" },
      { name: "Measurement range (Chlorine)", value: "0-2mg/L, 0-20 mg/L (optional)"},
      { name: "Measurement range (pH)", value: "5-8 pH" },
      { name: "Measurement Accuracy", value: "±3% or ±0.3 mg/L, whichever is greater" },
      { name: "Temperature compensation", value: "Manual or automatic" },
      { name: "Repeatability", value: "±0.3 mg/L" },
      { name: "Pressure range", value: "≤0.3 Mpa" },
      { name: "Calibration", value: "2-Point Calibration" },
      { name: "Flow Rate", value: "30-60 L/h" },
      { name: "Main material", value: "316L Stainless steel shell" },
      { name: "Dimensions", value: "Dia 13.5mm * L 178.5mm" },
      { name: "Weight", value: "1.4kg" },
      { name: "Protective rate", value: "IP68/NEMA6P" },
      { name: "Cable length",value: "Standard: 10m, maximum can be extended to 100m"},
    ],
  },

  {
    productId: "011",
    name: "VizSens-UVCOD",
    img: "../productImages/img011.png",
    dataSheetLink: "../productsDataSheets/Vizsens-UVCOD.pdf",
    introduction:
      "The VizSens-UVCOD series COD/BOD/TSS/TOC sensor represents a new era in environmental protection sensors, offering reagent-free, pollution-free, economical, and eco-friendly water quality monitoring. This sensor is compact, easily installable, and enables online continuous monitoring. With automatic turbidity interference compensation and an integrated cleaning device, it maintains excellent stability even during prolonged monitoring. Utilizing the UV-Visible spectrum, this sensor measures the absorption of organic substances within the wavelength of 200 nm to 800 nm, enabling compensation for optical path attenuation and turbidity effects, ensuring consistent and reliable measurement values. ",

    application:
      "Won't produce oxygen consumption when measuring and no requirement of flow rate and stirring. Factory calibration, not need calibration for a year and can carry out field calibration. Digital sensor, high anti-jamming capacity and far transmission distance. ",
    features: [
      "Direct-immersion probe measurement without taking sampling and pretreatment. ",
      "No chemical reagents, no secondary pollution.",
      "The sensor has an automatic cleaning function to reduce maintenance time.",
      "The spectrum range is 200 nm to 750 nm with color and turbidity compensation.",
      "Short response time for continuous measurement.",
      "Sensor power supply positive and negative reverse connection protection.",
    ],
    attributes: [
      { name: "Measuring Range", value: "COD (using KHP calibration)：\n 0-2000mg/L COD (2mm)， \n 0-1000mg/L COD (5mm), \n 0-90mg/L COD (50mm), \n BOD (using KHP calibration)： \n 0-1500mg/L, BOD(2mm), \n 0-750mg/L BOD(5mm), \n 0-60mg/L BOD (50mm) \n TOC(using KHP calibration)： \n 0-800mg/l, TOC(2mm), \n 0-400mg/l TOC(5mm), \n 0-35mg/l, TOC(50mm) " },
      { name: "Accuracy", value: "±5 %（KHP Standard solution） " },
      { name: "repeatibility", value: "±2 %（KHP Standard solution） " },
      { name: "Resolution", value: "0.01 mg/L " },
      { name: "Pressure Range ", value: "≤ 0.4Mpa" },
      { name: "Sensor material ", value: "Body：SUS316L (fresh water)，Titanium alloy (Ocean marine)； \n Cable：Polyurethane" },
      { name: "Measuring temperature", value: "0-45 °C"},
      { name: "Cable Length", value: "Standard:10m,can be extended to 100m" },
      { name: "Sensor Protection", value: "IP68" },
      { name: "Operating Temperature",value: "0 °C to 50 °C"},
      { name: "Dimensions", value: "Diameter: 34mm, Length: 217mm" },
      { name: "Weight", value: "3.2 kg" },
    ],
  },

  {
    productId: "012",
    name: "VizSens-SS",
    img: "../productImages/img014.png",
    dataSheetLink: "../productsDataSheets/Vizsens-SS.pdf",
    introduction:
      "The VizSens-SS  Sensor is a highly capable solution designed for precise and reliable measurements in a variety of environments. This sensor employs advanced technology and robust construction to offer a wide measurement range and high accuracy. With features like plug-and-play installation and versatile communication protocol, it seamlessly integrates with other equipment, while its self-diagnosis function ensures data accuracy and reliability. Its compact design, optional automatic cleaning, and adherence to ISO7027 Standard Method make it a versatile choice for accurate measurements in fresh water and marine applications.",
      features: [
        "Dual-Beam Infrared Scattered Light Photometer Detection: Utilizes advanced technology for accurate and stable measurements.",
        "Built-in Self-Diagnosis Function: Ensures data accuracy and reliability.",
        "Plug-and-Play Sensors: Quick and easy installation for user convenience.",
        "Optional Automatic Cleaning Function: Reduces sensor maintenance and enhances usability.",
        "ISO7027 Standard Method: Employs Infrared light scattering technique to eliminate sample color effects.",
        "High anti-jamming capacity for reliable performance in noisy environments.",
        "Standard Digital Signal Output: Enables integration and networking with other equipment without a controller.",
      ],
    attributes: [
      { name: "Dimensions", value: "Diameter: 60mm, Length: 251.5mm - (without cleaning) \nDiameter: 60mm, Length: 261.5mm - (with cleaning)" },
      { name: "Weight", value: "1.65kg" },
      { name: "Protective Rate", value: "IP68/NEMA6P" },
      { name: "Main Material",value:"Body: SUS316L (fresh water), Titanium alloy (Ocean marine)"},
      { name: "Measurement Range",value: "0.01-20000 mg/L, \n0.01-45000 mg/L, \n0.01-120000 mg/L"},
      { name: "Measurement Accuracy",value:"Less than ±5% of measured value (Depending on the homogeneity of sludge)",},
      { name: "Resolution", value: "0.01-1mg/L, based on range" },
      { name: "Repeatability", value: "±2%" },
      { name: "Pressure Range", value: "≤0.4 Mpa" },
      { name: "Flow Rate", value: "≤2.5m/s, 8.2ft/s" },
      { name: "Power Supply", value: "AC: 85-500VAC (50/60HZ), DC: 9~36VDC" },
      { name: "Output", value: "3-way 4-20mA" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Measuring Temperature", value: "0-45℃" },
      { name: "Cover", value: "Polyphenylene + glass fiber" },
      { name: "Cable Length", value: "Standard: 10m, the maximum may be extended to 100m"},
    ],
  },
  {
    productId: "013",
    name: "VizSens-Turb",
    img: "../productImages/img014.png",
    dataSheetLink: "../productsDataSheets/Vizsens-turb.pdf",
    introduction:
      "The VizSens-Turb is a highly capable turbidity sensor known for its accurate and stable measurements. Equipped with advanced infrared scattered light technology, it offers excellent repeatability and reliability. With a built-in self-diagnosis function and optional automatic cleaning, it ensures data accuracy while reducing maintenance efforts. The sensor's digital technology provides high anti-jamming capacity and enables seamless integration with other equipment. The VizSens-Turb is a user-friendly solution with plug-and-play installation, making it suitable for a wide range of applications in different industries.",
    features: [
      "The turbidity sensor is based on the combined infrared absorption and scattering light method.",
      "Optional Automatic Cleaning Function: Reduces sensor maintenance with an automated cleaning brush.",
      "Digital Sensor with High Anti-Jamming Capacity: Provides reliable performance in noisy environments.",
      "Standard Method: Utilizes Infrared light scattering technique to eliminate sample color effects for precise measurements.",
      "Standard Digital Signal Output: Facilitates easy integration and networking with other equipment without the need for a controller.",
      "Plug-and-Play Sensors: Enables quick and straightforward installation, ensuring hassle-free setup and operation.",
      "Power protection, avoid wrong connection of RS485 A / B terminal."
  ],  
    attributes: [
      { name: "Dimensions", value: "Diameter: 60mm, Length: 261mm" },
      { name: "Weight", value: "1.65kg" },
      { name: "Protective Rating",value:"IP68/NEMA6P"},
      { name: "Measurement Range", value: "Turbidity: 0.01-100 NTU, 0.01−4000 NTU" },
      { name: "Resolution", value: "0.01~0.1NTU, based on range" },
      { name: "Repeatability", value: "±2%" },
      { name: "Main Material", value:"Body: SUS316L (fresh water), Titanium alloy (Ocean marine)"},
      { name: "Power Supply", value: "AC: 85-500VAC (50/60HZ), DC: 9~36VDC" },
      { name: "Pressure Range", value: "≤0.4 Mpa" },
      { name: "Flow Rate", value: "≤2.5m/s, 8.2ft/s" },
      { name: "Measurement Accuracy", value:"Less than ±2% of the measured reading or ±0.1NTU, whichever is greater"},
      { name: "Measuring Temperature", value: "0-45℃" },
      { name: "Body", value: "SUS316L (fresh water), Titanium alloy (Ocean marine)" },
      { name: "Cover", value: "Polyphenylene + glass fiber" },
      { name: "Cable", value: "Polyurethane" },
      { name: "Cable Length", value: "Standard: 10m, maximum extendable length: 100m" },
    ],
  },
  {
    productId: "014",
    name: "VizSens-TurbLo",
    img: "../productImages/img015.png",
    dataSheetLink: "../productsDataSheets/Vizsens-turb-Lo.pdf",
    introduction:
      "The VizSens-TurbLo is a highly reliable and robust turbidity sensor designed to provide accurate and consistent measurements within a range of 0.01 to 100 NTU. With its durable construction, easy installation, and user-friendly operation, this sensor is an excellent choice for environmental monitoring and water treatment applications. Its exceptional accuracy and stability make it an indispensable tool for industries requiring precise turbidity measurements.",
      features: [
        "Reliable Measurements: The VizSens- TurbLo offers dependable and consistent turbidity measurements for accurate data analysis.",
        "Ease of Maintenance: Designed with an easy-to-clean configuration, reducing the effort required for maintenance.",
        "Continuous Monitoring: Ideal for continuous monitoring of turbidity levels, ensuring real-time insights.",
        "Effortless Installation: Plug-and-play sensors enable quick and hassle-free installation, saving time and resources.",
        "Low Turbidity Measurement: Capable of measuring low turbidity levels, making it suitable for a variety of applications.",
    ],
    attributes: [
      { name: "Measurement Range", value: "0.01-100 NTU" },
      { name: "Measurement Accuracy",value:"The deviation of reading in 0.001~40NTU is ±2% or ±0.015NTU, \n maximax criterion; it is ±5% in the range of 40-100NTU."},
      { name: "Resolution", value: "0.01~0.1NTU, based on range" },
      { name: "Repeatability", value: "±2%" },
      { name: "Pressure Range", value: "≤0.4 Mpa" },
      { name: "Flow Rate", value: "300mL/min ≤ X ≤ 700mL/min" },
      { name: "Pipe Fitting", value: "Injection Port: 1/4NPT; Discharge Outlet: 1/2NPT" },
      { name: "Power Supply", value: "12VDC" },
      { name: "Material", value: "Machine: ABS+SUS316L; Sealing Element: Acrylonitrile Butadiene Rubber; Cable: Polyurethane" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Measuring Temperature", value: "0-45℃" },
      { name: "Dimensions", value: "304*207*392.5 mm (L*W*H)" },
      { name: "Weight", value: "2.1kg" },
      { name: "Protective Rate", value: "IP65" },
      { name: "Cable Length", value: "Three-meter standard cable, The LED version can be extended up to 30 meters"},

    ],
  },
  {
    productId: "015",
    name: "VizSens-CPHL",
    img: "../productImages/img016.png",
    dataSheetLink: "../productsDataSheets/Vizsens-CPHL.pdf",
    introduction:
      "The chlorophyll sensor uses the characteristic that chlorophyll A has an absorption peak and an emission peak in the spectrum, and emits monochromatic light of a specific wavelength to the water. The light intensity of chlorophyll A is proportional to the content of chlorophyll A in the water. ",
    features: [
      "The target parameter are measured based on the fluorescence of the pigment, which can be identified before the potential water bloom causes impact.",
      "Rapid Detection: Avoids the need for extraction or lengthy water sample shelving, ensuring timely results.",
      "Digital Sensor with High Anti- Jamming Capacity: Provides reliable performance even in noisy environments.",
      "Far Transmission Distance: Facilitates seamless data transmission over long distances.",
      "Standard Digital Signal Output: Allows integration and networking with other equipment without a controller.",
      "Plug-and-Play Sensors: Ensures quick and effortless installation for user convenience.",
      "Reverse Polarity Protection: Safeguards the sensor from potential power issues."
    ],
    attributes: [
      { name: "Main Material", value:"Body: SUS316L (fresh water), Titanium alloy (marine);" },
      { name: "Power Supply", value: "DC 6~12V, current < 50mA" },
      { name: "Pressure Range", value: "≤0.4Mpa" },
      { name: "Requirements", value: "Suggest a multipoint monitoring for the distribution of Blue-Green Algae in water as it is very uneven. Water turbidity is below 50NTU."},
      { name: "Measurement Range", value: "0-500 ug/L" },
      { name: "Measurement Accuracy",value:"±5% of the signal level corresponding value of 1ppb RhodamineB Dye"},
      { name: "Resolution", value: "0.01ug/L" },
      { name: "Repeatability", value: "±3%" },
      { name: "Output", value: "3-way 4-20mA" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Measuring Temperature", value: "0-45℃" },
      { name: "Dimension and Weight", value: "Dia 30mm * L 223mm, 0.55kg" },
      { name: "Protective Rate", value: "Sensor: IP68/NEMA6P" },
      { name: "Cable Length",value: "Standard: 10m, the maximum may be extended to 100m"},
    ],
  },
  {
    productId: "016",
    name: "Vizsens-BGA",
    img: "../productImages/img016.png",
    dataSheetLink: "../productsDataSheets/Vizsens-BGA.pdf",
    introduction:
      " The Vizsens-BGA is an advanced sensor engineered for precise monitoring of Blue- Green Algae in water. With a wide measurement range of 0 to 300,000 cells/mL and an accuracy of ±10%, it ensures reliable detection of algae levels. This compact sensor features a durable design, MODBUS RS485 communication, and various features to facilitate seamless integration with compatible controllers. It's ideal for multipoint monitoring of uneven algae distribution, contributing to environmental monitoring and water quality assessment.",
    features: [
      "Fluorescent Measuring Target Parameter: Allows identification before being affected by potential water bloom.",
      "Rapid Detection: Enables fast and direct detection without the need for extraction or lengthy water sample shelving.",
      "Digital Sensor with High Anti-Jamming Capacity: Ensures reliable performance even in noisy environments.",
      "Far Transmission Distance: Facilitates seamless data transmission over long distances.",
      "Standard Digital Signal Output: Easy integration with other equipment.",
      "Plug-and-Play Sensors: Ensures quick and effortless installation for user convenience.",
    ],
    attributes: [
      { name: "Measurement Range", value: "0—300,000 cells/mL" },
      { name: "Measurement Accuracy",value: "±10% of the signal level corresponding value of 1ppb RhodamineB Dye"},
      { name: "Resolution", value: "20 cells/mL" },
      { name: "Repeatability", value: "±3%" },
      { name: "Communication Protocol", value: "MODBUS RS485" },
      { name: "Main Material", value: "Body: SUS316L + Polyvinyl Chloride, \n Cover: Polyoxymethylene, \n Cable: Polyurethane" },
      { name: "Protective Rate",value: "IP65/NEMA4X"},
      { name: "Pressure Range", value: "≤0.4Mpa" },
      { name: "Dimension and Weight",value: "Dia 30mm * L 223mm, 0.55kg"},
      { name: "Cable length",value: "Standard: 10m, the maximum may be extended to 100m"},
      { name: "Requirnments",value:"Suggest a multipoint monitoring for the distribution of Blue-Green Algae in water as it is very uneven. Water turbidity is below 50NTU."},
      { name: "Power Supply", value: "9~36 VDC" },    
      { name: "Measuring Temperature", value: "0-45℃ " },
    ],
  },

  {
    productId: "017",
    name: "VizSens-OIW",
    img: "../productImages/img018.png",
    dataSheetLink: "../productsDataSheets/Vizsens-OIW.pdf",
    introduction:
      "The VizSens-OIW is an advanced oil in water sensor utilizing ultraviolet fluorescence technology. It excels in precision and versatility, with a wide detection range from 0 to 50ppm. Designed for efficient monitoring of oil levels in water, even in the presence of suspended solids, this sensor integrates seamlessly with compatible controllers. Its rugged construction, IP68 protection, and optional self- cleaning brush ensure dependable performance across various industrial applications.",
    features: [
      "Digital Sensor: Offers accurate and precise measurements.",
      "RS-485 Output: Allows for data transmission using MODBUS protocol.",
      "Automatic Cleaning Brush: Eliminates the impact of oil on measurements.",
      "Unique Optical and Electronic Filtering Techniques: Eliminate effects of ambient light on measurements.",
      "Unaffected by Suspended Solids in Water: Ensures reliable performance even in challenging environments.",
    ],
    attributes: [
      { name: "Principle", value: "Ultraviolet fluorescence method" },
      { name: "Main Material", value: "Body: SUS316L, titanium alloy; \n Cable: Polyurethane" },
      { name: "Measuring Range", value: "0-50ppm" },
      { name: "Protection Level", value: "IP68" },
      { name: "Sensor Interface", value: "Support RS-485, MODBUS protocol" },
      { name: "Dimension", value: "Diameter 45*Length 191mm" },
      { name: "Assembly", value: "Input type" },
      { name: "Probe Cable Length",value: "10 meters (default), Expandable upto 50 meters"},
      { name: "Resolution", value: "0.999" },
      { name: "Repeatability", value: "0.01 ppm" },
      { name: "Temperature", value: "0 to 50°C" },
      { name: "Detection Limit", value: "0.1ppm" },
      { name: "Self-Cleaning Brush", value: "Optional" },
    ],
  },

  {
    productId: "018",
    name: "VizSens-NH4N",
    img: "../productImages/img019.png",
    dataSheetLink: "../productsDataSheets/Vizsens-NH4N.pdf",
    introduction:
      "The VizSens-NH4N is a highly accurate and reliable sensor designed for measuring Ammonia Nitrogen (NH4- N) levels in water. With a pH range of 4- 10 and a precision of ±0.1, it ensures precise and consistent readings. Operating up to 10 meters underwater with IP68 protection, it's suitable for various environmental applications. Compatible controllers, the VizSens-NH4N supports RS-485 and MODBUS protocol for seamless integration and data transmission.",
    features: [
      "Digital Sensor: Delivers accurate and precise NH4-N measurements.",
      "RS-485 Output: Supports data transmission using the MODBUS protocol.",
      "Eco-Friendly: Reagent-free, reducing pollution and promoting environmental sustainability.",
      "Automatic Compensation: Compensates for pH and temperature for enhanced accuracy.",
    ],
    attributes: [
      { name: "pH Range", value: "5-10" },
      { name: "pH Accuracy", value: "±0.1" },
      { name: "pH Resolution", value: "0.01" },
      { name: "Ammonia Nitrogen Range", value: "0.1-3000mg/L NH4-N" },
      { name: "Accuracy", value: "±5% of the measured value or ±0.2mg/L" },
      { name: "Resolution", value: "0.1 mg/L" },
      { name: "Protection Level", value: "IP68/NEMA6P;" },
      { name: "Repeatibility", value: "±5% or ±0.2mg/L" },
      { name: "Deepest Depth", value: "10 meters underwater" },
      { name: "Temperature Range", value: "0 ~ 50°C" },
      { name: "Probe Cable Length", value: "5 meters (default), can be customized" },
      { name: "Housing Material", value: "Polyoxymethylene (An Engineering Thermoplastic)" },
    ],
  },

  {
    productId: "019",
    name: "VizSens-NO3N",
    img: "../productImages/img020.png",
    dataSheetLink: "../productsDataSheets/Vizsens-NO3N.pdf",
    introduction:
      "The VizSens NO3N is a highly accurate and reliable sensor designed for measuring Nitrate nitrogen (NO3N) levels in water. With a pH range of 4-10 and a precision of ±0.1, it ensures precise and consistent readings. The sensor features a digital RS-485 output with MODBUS protocol for seamless data transmission and integration with compatible controllers. Operating in harsh environments with IP68 protection, and offering optional measurement of Potassium and Sodium, the VizSens NO3N is an efficient and versatile solution for water quality monitoring and environmental applications.",
    features: [
      "Digital Sensor: Provides accurate and precise Nitrate measurements.",
      "RS-485 Output: Supports MODBUS protocol for seamless data transmission.",
      "Economical and Environmentally Friendly: Enables real-time online monitoring.",
      "Automatic pH and Temperature Compensation: Ensures accurate readings.",
      "High Precision and Stability: Offers reliable and consistent results."
    ],
    attributes: [
      { name: "pH Range", value: "3-10" },
      { name: "pH Accuracy", value: "±0.1" },
      { name: "pH Resolution", value: "0.01" },
      { name: "Housing Material", value: "Polyoxymethylene " },
      { name: "Nitrate Range", value: "0~3000mg/l NO3N" },
      { name: "Accuracy", value: "±10% or ±0.2 mg/L (Obtained within 6h after calibration with standard solution under laboratory conditions)" },
      { name: "Protection Level", value: "IP68" },    
      
      { name: "Nitrate Resolution", value: "0.1ppm" },
      { name: "Temperature Range", value: "0〜50℃" },
      { name: "Power Supply", value: "DC 6~12V, current<50mA" },
      { name: "Output Signal", value: "Digital RS-485 output, MODBUS protocol" },
      { name: "Dimensions", value: "Diameter: 55mm, Length: 345mm" },
      { name: "Cable Length", value: "5 meters (default), can be customizable" },
    ],
  },

  {
    productId: "020",
    name: "OPTICS-1000 Multi Parameter",
    img: "../productImages/optics1000-multi-parameter.png",
    dataSheetLink: "../productsDataSheets/Analyzer-Optics1000-MultiParameter.pdf",
    introduction:
      "The Optic 1000 Multi Parameters is a high-performance online water analyser that provides accurate and reliable measurements upto 7 parameters for a wide range of water quality parameters such as Ammonium, Nitrates, Nitrites, Total Nitrogen,  Phosphates, Total Phosphates, Organic Matter [COD, BOD, TSS], Total Organic Carbon, Sulfides, Sulfites, Total Sulfur, Total Suspended Solids, Turbidity, Color, Chlorine, Chlorine Dioxide, Hydrocarbon, Aromatic Compounds, Phenol, Dissolved Oxygen, Conductivity, Ozone and pH. Designed with state-of-the-art optical technology, it ensures exceptional stability, low operating costs, and high precision for various industries, including wastewater treatment plants and river monitoring stations. This device offers versatility for a wide range of applications also, the user-friendly interface enables user to pick any 7 parameters of choice to be added in this modular analyser.",
    features: [
      "Multi-parameter monitoring:Simultaneous measurement of organic matter, nitrate, color, turbidity, and more.",
      "Advanced Optics: High-resolution optics with a scanning wavelength range from 180 to 750 nm.",
      "Durability: Built-in automatic cleaning system with long-lasting lamps.",
      "Modular Design: Expandable with external probes for additional measurements like pH, conductivity, and dissolved oxygen.",
      "User-Friendly Interface: Large, intuitive touch screen for easy operation and maintenance diagnostics.",
    ],
    attributes: [
      { name: "Display", value: "7-inch touch screen, simple operation interface" },
      { name: "Power supply", value: "AC power supply: 85-500 VAC or DC power supply: 9-36 VDC" },
      { name: "Output", value: "4-20mA analog output (optional)" },
      { name: "Relay", value: "A relay, programmable response parameters and response values" },
      { name: "Dimensions (HxWxD)", value: "450x350x200 mm" },
      { name: "Communication protocol",value: "MODBUS RS485 communication function is equipped as standard, whichcantransmitthemeasured value in real time." },
      { name: "Fittings", value: "Inlet: straight through to hard pipe ∅ 8 \nOutlet: straight through to hard pipe ∅ 12" },
      { name: "Storage temperature", value: "0-45°C" },
      { name: "Operating temperature", value: "0-50°C" },
      { name: "Enclosure rating", value: "IP 65" },
      { name: "Dimensions", value: "350*270*550 mm (L*W*H)" },
    ],
  },


  {
    productId: "021",
    name: "Viz Eco Solo",
    img: "../productImages/viz-eco-solo.png",
    dataSheetLink: "../productsDataSheets/VizEcoSolo.pdf",
    introduction:"The Advance Analytik® Viz-Eco-Solo, a Single - channel transmitter, is an advanced instrument designed for comprehensive water quality monitoring. Compatible with multiple different sensors such as pH, DO, ORP,conductivity, turbidity, SS, COD, BOD, TOC, TSS, TDS, Nitrate, Nitrite, Color, Sludge Level, ISE, Residual Chlorine and others, this device offers versatility for a wide range of applications. Its plug-and-play sensor integration simplifies setup, while the flexible configuration allows users to adapt the system to their specific monitoring needs. The transmitter's user-friendly interface enables real-time data visualization and seamless integration with data logging systems, ensuring efficient data management.",
    features: [
        "Enables plug-and-play sensor functionality with fast and convenient electrode installation and replacement.",
        "Easy to operate with reliable results and intuitive interface instructions to minimize operational errors.",
        "LCD screen with a user-friendly navigation menu and rich,comprehensive interface content.",
        "Multiple data output options, including 4-20mA and MODBUS RS485.",
        "Automatic error and alarm notifications with signal upload capabilities.",
        "Versatile transmitter supports wall,panel, pipe, or pole installation.",
        "Features include real-time display,data storage, and historical data viewing.",
      ],
    attributes: [
      { name: "pH", value: "0-14 pH" },
      { name: "Conductivity", value: "0-20 mS/cm" },
      { name: "ORP", value: "+/-2000 mV"},
      { name: "Dissolved Oxygen", value: "0-20 mg/l or 0-200% saturation" },
      { name: "TDS",value: "0-20000 ppm"},
      { name: "Turbidity",value: "0.01-4000 NTU"},
      { name: "Suspended Solids/Sludge", value: "0.01 - 20000 mg/L" },
      { name: "Chlorophyll",value: "0-500 ug/L" },
      { name: "Blue Green Algae", value: "0-300000 cells/mL" },
      { name: "Oil in Water", value: "0-50 ppm" },
      { name: "Ammonia Nitrogen (NH4N)", value: "0.1-3000 mg/L NH4N"  },
      { name: "Nitrate Nitrogen (NO3N)", value: "0-3000 mg/L NO3N" },
      { name: "Residual Chlorine", value: "0-20 mg/L" },
      { name: "UV Visible Measurement", value: "COD : 0-5000 mg/L \n BOD : 0-5000 mg/L \n TSS : 0-5000 mg/L \n TOC : 0-5000 mg/L \n (Other parameters available on request)" },
      { name: "Temperature", value: "0-80°C" },
      { name: "ISE", value: "Ammonia (NH3) : 0.01 – 17,000 ppm as NH3 \n Cyanide (CN-) : 0.2 – 260 ppm \n Fluoride (F-) : 0.02 – 19000 ppm \n Sodium (Na+) : 0.01 – 100,000 ppm \n Chloride (Cl-) : 1.8 – 35,000 ppm \n Water Hardness (Ca2+ / Mg2+) : 0.5 – 40,000 ppm \n (Other ISE available on request)" },
    ],
  },


  {
    productId: "022",
    name: "Viz Eco Duo",
    img: "../productImages/viz-eco-duo.png",
    dataSheetLink: "../productsDataSheets/VizEcoDuo.pdf",
    introduction:
      "The Viz-Eco-Duo Parameter Transmitter is an advanced solution for simultaneous monitoring of diverse parameters, catering to a wide range of customer requirements. Compatible with multiple different sensors such as pH, DO, ORP, conductivity, turbidity, SS, COD, BOD, TOC, TSS, Nitrate, Nitrite, Color, Sludge Level, ISE and others, this device offers versatility for a wide range of applications. Designed for applications in water quality monitoring across wastewater treatment plants, waterworks, water stations, surface water, and industrial settings, this versatile transmitter brings unparalleled flexibility and ease of use to the field. With support for up to 2 sensors, various data transmission options, and a userfriendly interface, the Viz-Eco-Duo ensures efficient integration, reduced operational costs, and reliable parameter monitoring",
    features: [
      "Enables plug-and-play sensor functionality with fast and convenient electrode installation and replacement.",
      "Easy to operate with reliable results and intuitive interface instructions to minimize operational errors.",
      "LCD screen with a user-friendly navigation menu and rich,comprehensive interface content.",
      "Multiple data output options, including 4-20mA and MODBUS RS485.",
      "Automatic error and alarm notifications with signal upload capabilities.",
      "Versatile transmitter supports wall,panel, pipe, or pole installation.",
      "Features include real-time display,data storage, and historical data viewing.",
    ],
    attributes: [
      { name: "pH", value: "0-14 pH" },
      { name: "Conductivity", value: "0-20 mS/cm" },
      { name: "ORP", value: "+/-2000 mV"},
      { name: "Dissolved Oxygen", value: "0-20 mg/l or 0-200% saturation" },
      { name: "TDS",value: "0-20000 ppm"},
      { name: "Turbidity",value: "0.01-4000 NTU"},
      { name: "Suspended Solids/Sludge", value: "0.01 - 20000 mg/L" },
      { name: "Chlorophyll",value: "0-500 ug/L" },
      { name: "Blue Green Algae", value: "0-300000 cells/mL" },
      { name: "Oil in Water", value: "0-50 ppm" },
      { name: "Ammonia Nitrogen (NH4N)", value: "0.1-3000 mg/L NH4N"  },
      { name: "Nitrate Nitrogen (NO3N)", value: "0-3000 mg/L NO3N" },
      { name: "Residual Chlorine", value: "0-20 mg/L" },
      { name: "UV Visible Measurement", value: "COD : 0-5000 mg/L \n BOD : 0-5000 mg/L \n TSS : 0-5000 mg/L \n TOC : 0-5000 mg/L \n (Other parameters available on request)" },
      { name: "Temperature", value: "0-80°C" },
      { name: "ISE", value: "Ammonia (NH3) : 0.01 – 17,000 ppm as NH3 \n Cyanide (CN-) : 0.2 – 260 ppm \n Fluoride (F-) : 0.02 – 19000 ppm \n Sodium (Na+) : 0.01 – 100,000 ppm \n Chloride (Cl-) : 1.8 – 35,000 ppm \n Water Hardness (Ca2+ / Mg2+) : 0.5 – 40,000 ppm \n (Other ISE available on request)" },
    ],
  },

  {
    productId: "023",
    name: "Viz Eco Multi",
    img: "../productImages/viz-eco-multi.png",
    dataSheetLink: "../productsDataSheets/VizEcoMulti.pdf",
    introduction:
      "The Viz Eco Multi is a multi-channel transmitter that offers an advanced solution for monitoring multiple parameters simultaneously, meeting a variety of customer needs. Designed for applications in water quality monitoring across wastewater treatment plants, waterworks, water stations, surface water, and industrial settings, this versatile transmitter brings unparalleled flexibility and ease of use to the field. With support for up to 7 sensors, various data transmission options, and a user-friendly interface, the Viz Eco Multi ensures efficient integration, reduced operational costs, and reliable parameter monitoring.",
      features: [
        "Enhanced Sensor Integration: Connect up to 7 sensors to streamline integration and decrease operating and maintenance expenses.",
        "Sensor Compatibility: Accommodates both digital sensor interfaces and analog sensors with configurable options.",
        "Effortless Sensor Management: Quick and convenient electrode installation and replacement through sensor plugs and simplified operations.",
        "Versatile Data Transmission: Multiple data transmission methods, including 4~20mA,MODBUS RS485, and wireless transmission (optional), ensure seamless connectivity.",
        "Intuitive Touch Screen: A user-friendly 7-inch color touchscreen provides simple operation, quick familiarization, and dependable system control, all with low maintenance requirements.",
        "Dynamic Parameter Monitoring: Benefit from data storage functions for real-time monitoring of parameter dynamics.",
        "Error and Alarm Management: Indicates automatic reminders for errors and alarm information.",
        "User Access Control: Three levels of management authority provide enhanced security and access control.",
        "Flexible Mounting Options: Choose between wall mounting or panel mounting to suit different installation environments.",
        "Wireless Connectivity: Optional wireless data transmission module empowers remote monitoring and control."
      ], 
      attributes: [
        { name: "pH", value: "0-14 pH" },
        { name: "Conductivity", value: "0-20 mS/cm" },
        { name: "ORP", value: "+/-2000 mV"},
        { name: "Dissolved Oxygen", value: "0-20 mg/l or 0-200% saturation" },
        { name: "TDS",value: "0-20000 ppm"},
        { name: "Turbidity",value: "0.01-4000 NTU"},
        { name: "Suspended Solids/Sludge", value: "0.01 - 20000 mg/L" },
        { name: "Chlorophyll",value: "0-500 ug/L" },
        { name: "Blue Green Algae", value: "0-300000 cells/mL" },
        { name: "Oil in Water", value: "0-50 ppm" },
        { name: "Ammonia Nitrogen (NH4N)", value: "0.1-3000 mg/L NH4N"  },
        { name: "Nitrate Nitrogen (NO3N)", value: "0-3000 mg/L NO3N" },
        { name: "Residual Chlorine", value: "0-20 mg/L" },
        { name: "UV Visible Measurement", value: "COD : 0-5000 mg/L \n BOD : 0-5000 mg/L \n TSS : 0-5000 mg/L \n TOC : 0-5000 mg/L \n (Other parameters available on request)" },
        { name: "Temperature", value: "0-80°C" },
        { name: "ISE", value: "Ammonia (NH3) : 0.01 – 17,000 ppm as NH3 \n Cyanide (CN-) : 0.2 – 260 ppm \n Fluoride (F-) : 0.02 – 19000 ppm \n Sodium (Na+) : 0.01 – 100,000 ppm \n Chloride (Cl-) : 1.8 – 35,000 ppm \n Water Hardness (Ca2+ / Mg2+) : 0.5 – 40,000 ppm \n (Other ISE available on request)" },
      ],
  },
  {
    productId: "024",
    name: "Viz Classic Conductivity TDS",
    img: "../productImages/viz-classic-conductivity.png",
    dataSheetLink: "../productsDataSheets/VizClassic-Conductivity_TDS.pdf",
    introduction:
      "The Viz Classic Series features a high-performance two-wire transmitter for accurate conductivity and Total Dissolved Solids (TDS) measurements. This single-channel device ensures reliable data for water quality monitoring across various applications, making it ideal for both industrial and environmental use. With HART protocol support, it allows seamless integration with control systems, facilitating real-time data transmission and diagnostics. The compact and durable design simplifies installation while providing long-lasting performance in challenging conditions.The Viz Classic Series is ideal for use in water and wastewater treatment, industrial processes, aquaculture, desalination plants, and other industries where precise TDS and Conductivity control is vital.",
      features: [
        "HART Protocol: Supports HART communication for easy integration with existing control systems, enabling real-time data transmission and diagnostics.",
        "Two-Wire Configuration: Simplifies installation by using existing power lines for both power and signal, reducing installation complexity and costs.",
        "Wide Measurement Range: Ideal for diverse applications, ensuring accurate monitoring in various environmental and industrial settings.",
        "User-Friendly Design: Features a straightforward interface for quick setup and adjustments, enhancing operational efficiency.",
        "Rugged Construction: Built to withstand challenging conditions,ensuring durability and long-lasting performance.",
      ], 
      attributes: [
        { name: "Inputs", value: "Conductivity – Analog type \n TDS – Analog type \n Temperature - PT100 / PT1000 software Selectable" },
        { name: "Outputs", value: "1 x 4 - 20 mA with HART protocol on the signal line" },
        { name: "Mounting", value: "2 different models: Wall mount / Panel mount"},
        { name: "Range", value: "As per cell constant given below \n 0.01 : 0 - 50 uS/cm \n 0.1 : 0-500 us/cm \n 1 : 0-5000 us/cm \n 10 : 0-50000 us/cm" },
        { name: "Power Supply",value: "12-32V DC, Loop Powered (Single line for Power and Output signal)"},
        { name: "Display",value: "16x2 Character display"},
        { name: "Communication Interface", value: "HART Version: Compatible with HART 5, 6, and 7 \n Device Diagnostics: Includes basic device and process diagnostics \n Digital Communication: Two-way communication for calibration, configuration, and diagnostics \n Protocol Support: Standard HART Protocol with 4-20 mA analog signal" },
        { name: "Temperature",value: "-20 to 200 deg C , Compensation : Integrated" },
        { name: "Enclosure", value: "IP65 for Wall mount, or Only front facia IP65 for Panel Mount" },
        { name: "Calibration", value: "Dual/three Point Sensor Calibration, Current Loop Calibration Two point Temperature Calibration" },
        { name: "Diagnostics", value: "Sensor Open / Short, Temp Sensor Open/ Short, Out of range Calibration error, Test output current"  },
        { name: "Cable Connections", value: "PG9 Polyurethene Glands: 2Nos" },
        { name: "Dimensions", value: "12.7 x 5.7 x 7.9 cm L*W*H \n Dimensions subject to change depending on configuration" },
        
      ],
  },
  {
    productId: "025",
    name: "Viz Classic pH-ORP",
    img: "../productImages/viz-classic-ph.png",
    dataSheetLink: "../productsDataSheets/VizClassic-pH_ORP.pdf",
    introduction:
      "The Viz Classic Series pH & ORP single-channel transmitter is engineered for precision measurement of pH (acidity/alkalinity) and ORP (oxidation-reduction potential) in various industrial processes. Operating on a two-wire 4-20mA current loop, this transmitter is powered and transmits data through the same two wires, simplifying installation and reducing wiring costs. The integrated HART (Highway Addressable Remote Transducer) protocol allows for digital communication alongside the analog signal, enabling remote calibration, configuration, and diagnostics without disrupting measurement. The Viz Classic Series is ideal for use in water and wastewater treatment, chemical manufacturing, pulp and paper, food and beverage, and other industries where precise pH and ORP control is vital.",
      features: [
        "Single-Channel Design: Dedicated to pH or ORP measurement, delivering reliable, real-time monitoring of critical parameters.",
        "HART Protocol Integration: The HART protocol provides remote access to data, enabling calibration and diagnostic checks without manual intervention. It supports integration with HART-compatible systems for advanced control and monitoring.",
        "Two-Wire Operation: Powered by the 4-20 mA loop, the transmitter simplifies installation and reduces the need for separate power supplies.",
        "Rugged and Durable: Designed for tough industrial environments, ensuring long-term reliability and stable performance.",
      ], 
      attributes: [
        { name: "Inputs", value: "pH – Analog type \n ORP – Analog type \n Temperature - PT100 / PT1000 software Selectable" },
        { name: "Outputs", value: "1 x 4 - 20 mA with HART protocol on the signal line" },
        { name: "Mounting", value: "2 different models: Wall mount / Panel mount"},
        { name: "Range", value: "pH 0 -14, ORP -1500 to +1500 mV" },
        { name: "Power Supply",value: "12-32V DC, Loop Powered (Single line for Power and Output signal)"},
        { name: "Display",value: "16x2 Character display"},
        { name: "Communication Interface", value: "HART Version: Compatible with HART 5, 6, and 7 \n Device Diagnostics: Includes basic device and process diagnostics \n Digital Communication: Two-way communication for calibration, configuration, and diagnostics \n Protocol Support: Standard HART Protocol with 4-20 mA analog signal" },
        { name: "Temperature",value: "-20 to 200 deg C , Compensation : Integrated" },
        { name: "Enclosure", value: "IP65 for Wall mount, or Only front facia IP65 for Panel Mount" },
        { name: "Calibration", value: "Dual/three Point Sensor Calibration, Current Loop Calibration Two point Temperature Calibration" },
        { name: "Diagnostics", value: "Sensor Open / Short, Temp Sensor Open/ Short, Out of range Calibration error, Test output current"  },
        { name: "Cable Connections", value: "PG9 Polyurethene Glands: 2Nos" },
        { name: "Dimensions", value: "12.7 x 5.7 x 7.9 cm L*W*H \n Dimensions subject to change depending on configuration" },
      ],
  },


  {
    productId: "026",
    name: "OPTICS-1000 Boron (Hr)",
    img: "../productImages/img026.png",
    dataSheetLink: "../productsDataSheets/Optics-1000-Boron-(Hr).pdf",
    introduction:
      "Boric acid is a very weak acid and direct titration with NaOH is not possible. However, addition of Mannitol-D makes a significant and visual end point determination, based on the change of pH on the sample.",
    features: [
      "The method is specific for the measurement of boron. The 6000 steps motor that controls the syringe movement allows to dose really small drops, getting accuracy and repeatable results. Moreover, the reagents are simple to be prepared and cheap. Changing the concentrations of reagents, the range of measurement is easily modifiable..",
    ],
    attributes: [
     { name: "Range", value: "From 0 to 50 ppm / 100 ppm / 250 ppm / 500 ppm.(Adjustable higher concentrations adjusting reagents.)" },
     { name: "Accuracy", value: "±2% Full Scale" },
     { name: "Repeatability", value: "±2%" },
     { name: "Resolution", value: "0,01 ppm or 0,1 ppm" },
     { name: "Analysis time", value: "around 15 minutes" },
     { name: "Calibration", value: "one point" },
     { name: "ISE", value: "pH electrode" },
     { name: "Reagent 1 Consumption", value: "4 ml / analysis - 3.0L / month" },
     { name: "Reagent 2 Consumption", value: "4.5 ml / analysis – 3.5 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
  ], 
  },

  {
    productId: "027",
    name: "OPTICS-1000 Boron (Lr)",
    img: "../productImages/img026.png",
    dataSheetLink: "../productsDataSheets/Optics-1000-Boron-(Lr).pdf",
    introduction:
      "Thanks the buffer reagent, the sample is adjusted to pH between 5 and 6. Then, the addition of Azomethine-H & Ascorbic acid, they react with Boron giving a green-yellow color that is measured at 420nm.",
    features: [
      "The method is accurate and sensitive. The range is linear up to 2 ppm and higher ranges can be obtained diluting the sample.",
    ],
    attributes: [
     { name: "Range", value: "From 0 to 100 ppb / 500 ppb / 1000 ppb / 2000 ppb.(Adjustable higher concentrations adjusting reagents.)" },
     { name: "Accuracy", value: "±2%" },
     { name: "Repeatability", value: "±2%" },
     { name: "Resolution", value: "0,1 ppb" },
     { name: "Analysis time", value: "around 30 minutes" },
     { name: "Calibration", value: "two point" },
     { name: "LED Wavelength", value: "420 nm" },
     { name: "Reagent 1 Consumption", value: "2.2 ml / analysis - 2.0L / month" },
     { name: "Reagent 2 Consumption", value: "4.2 ml / analysis – 3.5 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
  ],
  },
 {
   productId: "028",
   name: "OPTICS-1000 Chloride",
   img: "../productImages/img026.png",
   dataSheetLink: "../productsDataSheets/Optics-1000-Chloride-(Cl-).pdf",
   introduction:
     "Reagent 1 is added to activate the electrode before the analysis. After that, a first measurement is done. Subsequently, a small volume of a high concentrated nitrate solution is added. Finally, a second lecture of mV takes place to calculate the result.",
   features: [
     "The method is very simple and is fairly specific as the chloride measurement and just a few parameters cause interferences, which can be removed.",
   ],
   attributes: [
    { name: "Range", value: "From 0 to 5ppm / 20ppm / 50ppm / 100ppm / 500ppm / 1000ppm / 5000ppm (Adjustable higher concentrations)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Resolution", value: "0,01 ppm / 0,1 ppm / 1 ppm" },
    { name: "Analysis time", value: "around 10 minutes" },
    { name: "Calibration", value: "one point" },
    { name: "ISE", value: "Chloride Cl⁻ electrode" },
    { name: "Reagent 1 Consumption", value: "0.5 ml / analysis - 0.5L / month" },
    { name: "Reagent 2 Consumption", value: "0.5 ml / analysis - 0.5L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
], 
},
{
  productId: "029",
  name: "OPTICS-1000 Chromium VI",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Chromium-VI-(Cr).pdf",
  introduction:
    "The chromium (VI) reacts with the diphenylcarbazide reagent to form a pik complex. The reaction is specific for chromium (VI) and there are no interference compounds.",
  features: [
    "The method is very simple, very specific and is very sensitive because of the high absorbance of the diphenylcarbazide-chromium (VI) complex formed.",
  ],
  attributes: [
   { name: "Range", value: "From 0 to 200 ppb (Adjustable higher concentrations with internal dilution.)" },
   { name: "Accuracy", value: "±2%" },
   { name: "Repeatability", value: "±2%" },
   { name: "Resolution", value: "0,1 ppb" },
   { name: "Analysis time", value: "around 10 minutes" },
   { name: "Calibration", value: "two point" },
   { name: "LED Wavelength", value: "545 nm" },
   { name: "Reagent 1 Consumption", value: "0,8 ml / analysis – 0.75 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
], 
},
{
  productId: "030",
  name: "OPTICS-1000 Cyanide",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Cyanide.pdf",
  introduction:
    "After adding a buffer to establish the desired pH conditions to reactions takes place, Chloramine-T reagent reacts with cyanide ion to form cyanogen chloride.Afterwards, this compound reacts with the reagent color to form a blue colored complex. The intensity of the blue color developed is proportional to the concentration of cyanide in sample.",
  features: [
    "The method is very simple requiring but a single reagent, which is specific for hydrazine. Keeping the reagent in an amber container, which will not transmit UV light, the reagent is stable for at least a month.",
  ],
  attributes: [
   { name: "Range", value: "From 0 to 200 ppb (Adjustable higher concentrations with internal dilution.)" },
   { name: "Accuracy", value: "±2%" },
   { name: "Repeatability", value: "±2%" },
   { name: "Resolution", value: "0,1 ppb" },
   { name: "Analysis time", value: "around 10 minutes" },
   { name: "Calibration", value: "two point" },
   { name: "LED Wavelength", value: "545 nm" },
   { name: "Reagent 1 Consumption", value: "0,8 ml / analysis – 0.75 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
], 
 },
// {
//   productId: "031",
//   name: "OPTICS-1000 general",
//   img: "../productImages/img026.png",
//   dataSheetLink: "../productsDataSheets/Optics-1000-Chromium-VI-(Cr).pdf",
//   introduction:
//     "After adding a buffer to establish the desired pH conditions to reactions takes place, Chloramine-T reagent reacts with cyanide ion to form cyanogen chloride.Afterwards, this compound reacts with the reagent color to form a blue colored complex. The intensity of the blue color developed is proportional to the concentration of cyanide in sample.",
//   features: [
//     "The method is very simple requiring but a single reagent, which is specific for hydrazine. Keeping the reagent in an amber container, which will not transmit UV light, the reagent is stable for at least a month.",
//   ],
//   attributes: [
//    { name: "Range", value: "From 0 to 200 ppb (Adjustable higher concentrations with internal dilution.)" },
//    { name: "Accuracy", value: "±2%" },
//    { name: "Repeatability", value: "±2%" },
//    { name: "Resolution", value: "0,1 ppb" },
//    { name: "Analysis time", value: "around 10 minutes" },
//    { name: "Calibration", value: "two point" },
//    { name: "LED Wavelength", value: "545 nm" },
//    { name: "Reagent 1 Consumption", value: "0,8 ml / analysis – 0.75 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
// ], 
// },

{
  productId: "032",
  name: "OPTICS-1000 Hydrazine",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Hydrazine.pdf",
  introduction:
    "There is a direct coupling of the carbonyl group of the 4-aminobenzaaldehyde with the NH2 group of the hydrazine to form a yellow colored complex.",
  features: [
    "The method is very simple requiring but a single reagent, which is specific for hydrazine. Keeping the reagent in an amber container, which will not transmit UV light, the reagent is stable for at least a month.",
  ],
  attributes: [
   { name: "Range", value: "From 0 to 100 ppb (Adjustable higher concentrations with internal dilution.)" },
   { name: "Accuracy", value: "±2%" },
   { name: "Repeatability", value: "±2%" },
   { name: "Resolution", value: "0,1 ppb" },
   { name: "Analysis time", value: "around 18 minutes" },
   { name: "Calibration", value: "two point" },
   { name: "LED Wavelength", value: "450 nm" },
   { name: "Reagent 1 Consumption", value: "2.5 ml / analysis – 2.0 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
], 
},
{
  productId: "033",
  name: "OPTICS-1000 IRON",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Iron-(Lr).pdf",
  introduction:
    "Any ferric iron is reduced to the ferrous state by means of the hydroxylamine hydrochloride. The ferrous ions react with the Ferrozine to form a pink complex when the buffer brings the solution within the range 5 to 7 pH.",
  features: [
    "The method is very simple requiring but a single reagent, which is specific for hydrazine. Keeping the reagent in an amber container, which will not transmit UV light, the reagent is stable for at least a month.",
  ],
  attributes: [
   { name: "Range", value: "From 0 to 100 ppb (Adjustable higher concentrations with internal dilution.)" },
   { name: "Accuracy", value: "±2%" },
   { name: "Repeatability", value: "±2%" },
   { name: "Resolution", value: "0,1 ppb" },
   { name: "Analysis time", value: "around 18 minutes" },
   { name: "Calibration", value: "two point" },
   { name: "LED Wavelength", value: "450 nm" },
   { name: "Reagent 1 Consumption", value: "2.5 ml / analysis – 2.0 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
], 
},
{
  productId: "034",
  name: "OPTICS-1000 Nickel",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Nickel.pdf",
  introduction:
    "An acetate buffer is used to achieve the optimal pH conditions in order Br-PADAP could react with Nickel, forming an intense pink color proportional to Nickel concentration.",
  features: [
    "The pink color that is formed could stain the measurement cell, interfering on the following analysis, but thanks to the cleaning solution used by the Instran, this possible interference is removed.",
  ],
  attributes: [
   { name: "Range", value: "From 0 to 250 ppb / 500 ppb / 1000 ppb. (Adjustable higher concentrations with internal dilution.)" },
   { name: "Accuracy", value: "±2%" },
   { name: "Repeatability", value: "±2%" },
   { name: "Resolution", value: "0.1 ppb" },
   { name: "Analysis time", value: "around 15 minutes" },
   { name: "Calibration", value: "two point" },
   { name: "LED Wavelength", value: "545 nm" },
   { name: "Reagent 1 Consumption", value: "0.5 ml / analysis - 0.5L / month" },
   { name: "Reagent 2 Consumption", value: "0.5 ml / analysis - 0.5L / month" },
   { name: "Reagent 3 Consumption", value: "1.35 ml / analysis – 1.0 L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
], 
},

{
  productId: "035",
  name: "OPTICS-1000 Phenol",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Phenol.pdf",
  introduction:
    "The method relies upon the reaction of the phenol with 4-aminoantipyrene followed by oxidation of the adduct with persulfate to form a pink complex.",
  features: [
    "The method is specific for phenol and all non-4-substituted monohydric phenols.",
    "The method is also very sensitive and levels as low as 0 to 100 ppb may be measured using the correct circumstances.",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 100 ppb / 500 ppb / 1000 ppb. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Resolution", value: "0,1 ppb Analysis time: around 15 minutes" },
    { name: "Analysis time", value: "around 15 minutes" },
    { name: "Calibration", value: "two point" },
    { name: "LED Wavelength", value: "510 nm" },
    { name: "Reagent 1 Consumption", value: "4 ml / analysis - 3.0L / month" },
    { name: "Reagent 2 Consumption", value: "4 ml / analysis - 3.0L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},

{
  productId: "036",
  name: "OPTICS-1000 Phosphate-Hr",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Phosphate-(Hr).pdf",
  introduction:
    "The method relies upon the reaction of the phenol with 4-aminoantipyrene followed by oxidation of the adduct with persulfate to form a pink complex.",
  features: [
    "The method relies upon the direct reaction of phosphate ion to react with the Vanadomolybdate reagent to form a yellow colored complex.",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 2ppm / 5ppm / 10ppm / 20ppm / 60ppm. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Resolution", value: "0,01 ppm" },
    { name: "Analysis time", value: "around 10 minutes" },
    { name: "Calibration", value: "two point" },
    { name: "LED Wavelength", value: "435 nm" },
    { name: "Reagent 1 Consumption", value: "0.9 ml / analysis - 0.75L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},
{
  productId: "037",
  name: "OPTICS-1000 Phosphate-Lr",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Phosphate-(Lr).pdf",
  introduction:
    "Ammonium molybdate and potassium antimonyl tartrate react in acid medium with orthophosphate to form a heteropoly acid-phosphomolybdic acid-that is reduced to intensely colored molybdenum blue by ascorbic acid.",
  features: [
    "The blue color developed is so intense and it provides a high accuracy and repeatability. The method allows to measure really low values of concentrations (lower than 50 ppb).",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 200 ppb / 500 ppb / 1000 ppb. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Resolution", value: "0,1 ppb" },
    { name: "Low Limit Detection", value: "1ppb" },
    { name: "Analysis time", value: "around 12 minutes" },
    { name: "Calibration", value: "two point" },
    { name: "LED Wavelength", value: "810 nm" },
    { name: "Reagent 1 Consumption", value: "0.5 ml / analysis - 0.5L / month" },
    { name: "Reagent 2 Consumption", value: "0.5 ml / analysis - 0.5L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},

{
  productId: "038",
  name: "OPTICS-1000 silica-Hr",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Silica-(Hr).pdf",
  introduction:
    "Silica reacts with molybdate reagent in acid media to form a yellow silicomolybdate complex. This complex is reduced by ascorbic acid to form the molybdate blue color. The color intensity is proportional to the silica concentration.",
  features: [
    "The blue color developed is so intense and it provides a high accuracy and repeatability. The method allows to measure really low values of concentrations (lower than 50 ppb).",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 1 ppm / 5 ppm / 10 ppm. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Resolution", value: "0,01 ppb" },
    { name: "Analysis time", value: "around 15 minutes" },
    { name: "Calibration", value: "two point" },
    { name: "LED Wavelength", value: "650 nm" },
    { name: "Reagent 1 Consumption", value: "4 ml / analysis - 3.0L / month" },
    { name: "Reagent 2 Consumption", value: "3 ml / analysis - 2.25L / month" },
    { name: "Reagent 3 Consumption", value: "4 ml / analysis - 3.0L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},

{
  productId: "039",
  name: "OPTICS-1000 Silica-Lr",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Silica-(Lr).pdf",
  introduction:
    "The initial reaction of the silica with the diammonium molybdate in such acidic conditions ensures that only the B-molybdosilicic acid is formed. Then the solution is treated with tartaric acid to destroy the phosphomolybdic acid, which is formed under the same conditions. Finally, the molybdomolybdic acid is reduced to the molybdenum blue complex, which absorbs at 810 nm. If some of the B-silicomolybdic acid is formed the molybdenum blue reduction product of this form absorbs at a lower wavelength, near to 730 nm. Hence, it is important to ensure that only the B-isomer be formed in the initial stage.",
  features: [
    "Because only the B-form of the silico-molybdic acid is formed the method has a fairly good sensitivity at the lower end as required by power plants and the electronics industry to ensure that the water is pure. The new formulation of Reagent #1 also speeds up the time required for the complete reaction. In addition, although the first reagent is relatively expensive very small volumes of reagent are required.",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 100 ppb / 500 ppb. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Full Scale Repeatability", value: "±2%" },
    { name: "Analysis time", value: "around 15 minutes" },
    { name: "Calibration", value: "two point" },
    { name: "LED Wavelength", value: "810 nm" },
    { name: "Reagent 1 Consumption", value: "0.37 ml / analysis - 0.3L / month" },
    { name: "Reagent 2 Consumption", value: "0.37 ml / analysis - 0.3L / month" },
    { name: "Reagent 3 Consumption", value: "0.37 ml / analysis - 0.3L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},

{
  productId: "040",
  name: "OPTICS-1000 Total Chromium",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Total-Chromium.pdf",
  introduction:
    "Cerium sulfate is added, which oxidizes the sample and converts all forms of chromium to chromium VI. Then diphenylcarbohydrazide is added which reacts with the chromium VI to produce a reddish-purple color.",
  features: [
    "The method is very simple, very specific and is very sensitive because of the high absorbance of the diphenylcarbazide-chromium(VI) complex formed. Chromium (III) can be measuring calculating the difference between Cr Total and Cr (VI).",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 200 ppb. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Analysis time", value: "around 10 minutes" },
    { name: "Calibration", value: "two point" },
    { name: "LED Wavelength", value: "545 nm" },
    { name: "Reagent 1 Consumption", value: "2.5 ml / analysis - 0.2L / month" },
    { name: "Reagent 2 Consumption", value: "0.8 ml / analysis - 0.75L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},
{
  productId: "041",
  name: "OPTICS-1000 Total Hardness",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Total-Hardness.pdf",
  introduction:
    "The calcium and magnesium complexes with the Erichrome Black-T to give a blue-violet colored complex. This, when titrated by the addition of EDTA, is broken up as the calcium EDTA/ Magnesium ESTA complexes are more stable and when excess EDTA is present the Erichrome Black -T-EDTA complex is formed which is a rose colored complex.",
  features: [
    "The complexometric titration of both the calcium and magnesium, which are the main contributors to the hardness of water, gives a very sharp end point because at the end-point neither the Ca-EBT nor the EDTA-EBT complexes exist.",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 100 ppm /250 ppm/ 500ppm / 1000 ppm. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Analysis time", value: "around 20 minutes" },
    { name: "Calibration", value: "One point" },
    { name: "LED Wavelength", value: "650 nm" },
    { name: "Reagent 1 Consumption", value: "0.37 ml / analysis - 0.3L / month" },
    { name: "Reagent 2 Consumption", value: "0.37 ml / analysis - 0.3L / month" },
    { name: "Reagent 3 Consumption", value: "0.37 ml / analysis - 0.3L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},
{
  productId: "042",
  name: "OPTICS-1000 Zinc",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Zinc.pdf",
  introduction:
    "The method relies upon the direct reaction of zinc ion to react with the Vanadomolybdate reagent to form a yellow colored complex.",
  features: [
    "The method appears to be specific for zinc and is especially useful when measuring the higher concentrations of phosphate. Although the complex is yellow in color the autoblanking before the addition of the single reagent compensates for any background yellow color present in the sample. The other obvious advantage is that only a single reagent is used and the quantity of reagent added is very small (1 ml).",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 2ppm / 5ppm / 10ppm / 20ppm / 60ppm. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2%" },
    { name: "Repeatability", value: "±2%" },
    { name: "Analysis time", value: "around 10 minutes" },
    { name: "Calibration", value: "Two point" },
    { name: "LED Wavelength", value: "435 nm" },
    { name: "Reagent 1 Consumption", value: "0.9 ml / analysis - 0.75L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},
{
  productId: "043",
  name: "OPTICS-1000 Alkalinity",
  img: "../productImages/img026.png",
  dataSheetLink: "../productsDataSheets/Optics-1000-Alkalinity.pdf",
  introduction:
    "The sample is titrated with hydrochloric acid to a colorimetric end point corresponding to a specific pH. Phenolphthalein alkalinity is determined by titration to a pH of 8.3, as evidenced by the color change of phenolphthale in indicator, and indicates the total hydroxide and one half the carbonate present.",
  features: [
    "The method is specific for alkalinity, and thanks to the accuracy of the system of Advance Analytik® the repeatability achieved is really high.",
  ],
  attributes:[
    { name: "Range", value: "From 0 to 100 ppm / 250 ppm / 500 ppm / 1000ppm. (Adjustable higher concentrations with internal dilution.)" },
    { name: "Accuracy", value: "±2% FC" },
    { name: "Repeatability", value: "±2% FC" },
    { name: "Reproducability", value: "±2% FC" },
    { name: "Detection Time", value: "Due to titration chemistry technique, the limit detection depends on the FS. It is 0.0075 * FS" },
    { name: "Analysis Time", value: "around 20 minutes" },
    { name: "Calibration", value: "One point" },
    { name: "LED Wavelength", value: "625 nm" },
    { name: "Reagent 1 Consumption", value: "1 ml / analysis - 0.75L / month" },
    { name: "Reagent 2 Consumption", value: "4 ml / analysis - 3.0L / month (Monthly consumption calculated assuming 1 analysis per hour)" },
],
},
{
  productId: "044",
  name: "VizSens O3",
  img: "../productImages/vizsens-o3.png",
  dataSheetLink: "../productsDataSheets/Vizsens-O3.pdf",
  introduction:
    "VizSens-O3 electrode is a 2-electrode measurement system using the coating method. The detection part adopts a special permeable membrane technology, which has the characteristics of resisting chemical (mainly surfactant) interference and reducing pH dependence. \n Fast speed, stable performance, low cost and low maintenance, providing users with reliable and accurate data.",
  features: [
    "Basically not affected by PH.",
    "Internal processing of digital signal data, free from electromagnetic interference.",
    "Stable work and fast response.",
    "Low cost and less maintenance."
  ],
  attributes:[
    { name: "Measurement Range", value: "0~20 ppm" },
    { name: "Precision Range", value: "0~2ppm: Less than 1%" },
    { name: "pH Range", value: "2~11" },
    { name: "Flow rate", value: "In the flow cell: 250~500ml/min, the flow rate has little effect on it." },
    { name: "Response time", value: "T90: about 15s (up to 90% of the measured value)" },
    { name: "Slope calibration", value: "On the measuring device, determined by analytical methods" },
    { name: "Temp compensation", value: "Integrated automatic temp. compensation" },
    { name: "Material", value: "PVC-U, Semipermeable membrane, ABS" },
    { name: "Operating temp", value: "Measuring water temp.: 0~45 °C (no condensation in water), \n Ambient room temp.: 0~55 °C" },
    { name: "Size", value: "Diameter 25mm * length 220mm" },
    { name: "Cable length", value: "Standard:10m, the maximum may be extended to 100m" },
],
},
{
  productId: "045",
  name: "Gaz CEMS",
  img: "../productImages/gaz-cems.png",
  dataSheetLink: "../productsDataSheets/Gaz-CEMS.pdf",
  introduction:
  "Gaz-CEMS is an advanced online gas analyzer designed to deliver accurate and reliable monitoring even in harsh conditions with dust, moisture, and tar-laden gases. Using Ultraviolet Differential Absorption Spectroscopy Technology (DOAS), a single analyzer can simultaneously measure multiple gases such as SOx, NOx, CO, CO₂, O₂, and many more with minimal cross-interference and high precision. Its fully automated operation, intelligent data management, and wide measurement range ensure low maintenance costs and seamless integration with centralized control systems.",
features: [
  "Low cross-interference: Differential optical analysis minimizes interference from dust, moisture, and other background gases, ensuring reliable readings.",
  "Control unit: Fully automated testing, sampling, calibration, fault handling, and other operations.",
  "Gas analysis unit: Internal gas sensing unit can simultaneously measure the volume concentration of multi-component gases such as SOx, NOx, CO, CO₂, O₂, etc.",
  "Low maintenance and operation cost: Touch screen interface with online monitoring and display of system operation status; no manual supervision required, significantly reducing operating costs.",
  "Intelligent data management: Data can be transmitted to the centralized control system through multiple interfaces, providing a real-time basis for remote monitoring and on-site process adjustment.",
  "Wide measurement range: Capable of measuring both low and high gas concentrations with high precision."
],

attributes: [
  { name: "Components", value: "SO, SO₂, NO, NO₂, CO, CO₂, O₂" },
  { 
    name: "Measuring Technology", 
    value: "For SO, SO₂, NO, NO₂, CO, CO₂: Ultraviolet Differential Absorption Spectroscopy Technology (DOAS); For O₂: Electrochemical / Zirconia" 
  },
  { 
    name: "Range", 
    value: "SO: 0–1000 ppm; SO₂: 0–1000 ppm; NO: 0–1000 ppm; NO₂: 0–1000 ppm; CO: 0–1000 ppm; CO₂: 0–1000 ppm; O₂: 0–25%" 
  },
  { name: "Response Time", value: "< 60 seconds" },
  { name: "Repeatability", value: "< 1%" },
  { name: "Linear Error", value: "< ±1% F.S." },
  { name: "24h Zero Drift", value: "< ±2% F.S." },
  { name: "24h Range Drift", value: "< ±2% F.S." },
  { name: "Sample Gas Flow Range", value: "1.5 L/min ± 0.2 L/min" },
  { name: "Sample Gas Pressure Range", value: "Current ambient pressure ± 10 kPa" },
  { name: "Sample Gas Humidity Range", value: "≤ 85%" },
  { name: "Operating Temperature", value: "-15 to +55 °C" },
  { name: "Power Supply", value: "AC (220 ± 22) V, (50 ± 1) Hz" },
  { name: "Warm-up Time", value: "≥ 120 minutes" },
  { name: "Enclosure", value: "Safe Area" },
  { name: "Communication", value: "RS232 / RS485, 4–20 mA" },
  { 
    name: "Automatic Zeroing and Calibration", 
    value: "Built-in air pump to achieve automatic air zeroing and calibration (depending on configuration)" 
  },
  { 
    name: "Self-Diagnosis", 
    value: "With self-diagnosis function, the analyzer status can be checked online" 
  }
]

},
{
  productId: "046",
  name: "Gaz SPM",
  img: "../productImages/gaz-spm.png",
  dataSheetLink: "../productsDataSheets/Gaz-SPM.pdf",
  introduction:
  "The Gaz-SPM Dust Analyser is a next generation online monitoring instrument designed for real-time, uninterrupted tracking of smoke emissions from pollution sources. Engineered to withstand harsh environmental conditions—including wind, rain, lightning, dust, and extreme temperatures—it ensures reliable long-term performance. Industries benefiting from this technology include cement, thermal power, steel, metallurgy, oil refining, aluminum, petrochemical, papermaking, and glass manufacturing. For cutting-edge air quality and emission monitoring solutions, Advance Analytik delivers precision-driven analytical instrumentation tailored to industrial compliance and efficiency needs.",
     features: [
  "Provides 24/7 real-time and continuous monitoring of smoke and dust emissions.",
  "Designed to withstand extreme environmental conditions including wind, rain, lightning, dust, and temperature fluctuations.",
  "Utilizes advanced optical measurement technology for precise smoke concentration analysis.",
  "Ensures compliance with environmental regulations for industrial emission monitoring.",
  "Delivers highly accurate and stable measurement data with minimal drift.",
  "Equipped with self-diagnostics for reliable and error-free operation.",
  "Seamlessly integrates with CEMS and industrial monitoring systems.",
  "Detects a wide range of particulate concentrations with high sensitivity.",
  "Supports remote monitoring and real-time data transmission."
],
attributes: [
  { name: "Working Principle", value: "Laser backscatter" },
  { name: "Measurement Object", value: "Industrial waste gas, smoke" },
  { name: "Mechanical Properties", value: "Full metal shell; Dimensions: 186 × 200 × 182 mm (H × W × D)" },
  { name: "Weight & Protection", value: "3 kg, IP65" },
  { name: "Optical Properties", value: "Working wavelength: 650 ± 20 nm" },
  { 
    name: "Measuring Performance", 
    value: "Measuring range: 0–60, 100, 500, 1000, 2000 mg/m³; Zero drift: ±2% FS / 24 h; Span drift: ±2% FS / 24 h; Response time: ≤ 10 s" 
  },
  { name: "Power Requirements", value: "DC 24 V / 0.5 A" },
  { name: "Environmental Conditions", value: "Working temperature: 0 to +60 °C" },
  { name: "Analog Output", value: "4–20 mA" },
  { name: "Digital Output", value: "RS485" },
  { name: "Flue Diameter", value: "0.2–20 m" }
]


},{
  productId: "047",
  name: "Gaz-AQMS-O3",
  img: "../productImages/gaz-aqms-o3.png",
  dataSheetLink: "../productsDataSheets/Gaz-AQMS-O3.pdf",
  introduction:
    "Ozone analyzer adopts ultraviolet spectrometry principle and combines with advanced microprocessor technology. It provides accurate and reliable detection of O3 at ppb* ppm level to meet the requirement of ambient gas monitoring. \n UV absorption Ozone analyzer is developed based on Beer-Lambert technology. It is applied to monitor low concentration O3 in ambient air.",
features: [
  "Measurement range: 0–20 ppm (auto-ranging)",
  "Dual measurement range with automatic range selection",
  "Ultraviolet spectrometry measurement principle",
  "Microprocessor-based multi-functional operation",
  "Task software for real-time monitoring of operational data",
  "Continuous self-checking with alarm function",
  "Automatic self-check for light source intensity decay",
  "Bidirectional RS-232 port for remote control",
  "Digital output of operating parameters",
  "Optimized response time using self-adaptive signal filter technology",
  "Temperature and pressure compensation function",
  "USB and Ethernet communication interfaces",
  "Color display with touchscreen operation",
  "Large internal memory with automatic storage of historical data"
],

attributes: [
  { name: "Range", value: "0–20 ppm (auto-ranging)" },
  { name: "Concentration Units", value: "mg/m³, µg/m³, ng/m³, ppm, ppb, ppt" },
  { name: "Lower Detection Limit", value: "< 0.5 ppb" },
  { name: "Linearity", value: "< 1% of full scale" },
  { name: "Precision", value: "0.1 ppm" },
  { name: "Response Time", value: "30 seconds to 95%" },
  { name: "STP Reference", value: "0 °C, 20 °C, 25 °C at 101.3 kPa" },
  { name: "Sample Flow Rate", value: "500 cc/min" },
  { name: "Temperature Range", value: "0–40 °C" },
  { name: "Power Supply", value: "100–240 VAC, 50–60 Hz (auto-ranging)" },
  { name: "Power Consumption", value: "260 VA (max at start-up); 150 VA (nominal)" },
  { name: "Dimensions", value: "429 × 175 × 538 mm" },
  { name: "Rack Spacing", value: "3.5 RU" },
  { name: "Weight", value: "17.2 kg" }
]},
{
  productId: "048",
  name: "Gaz-PGA",
  img: "../productImages/gaz-pga-o3.png",
  dataSheetLink: "../productsDataSheets/Gaz-PGA.pdf",
 introduction:
  "Gaz-PGA series products are portable multi-gas detection instruments with high sensitivity for industrial use. They are suitable for gas leakage rescue, underground pipelines or mines, and similar applications, and can effectively ensure the safety of workers and protect production equipment from damage. The instruments can detect different gases based on various sensor types and offer rich functionality, simple operation, easy portability, and strong shock resistance. Equipped with high-resolution touch LCD technology, the display is intuitive, clear, and convenient to operate.",

  features: [
  "Large color screen with menu-driven operation",
  "High-resolution touchscreen LCD display",
  "Rapid detection of gas leak points",
  "Adjustable measurement range",
  "Fast preheating with quick response time",
  "Audible and vibration alarm signals",
  "Convenient and fast zero adjustment",
  "Detection of up to 8 gases in free combination",
  "High-temperature sampling gun provided for very high gas temperature applications"
],


attributes: [
  { name: "Product Name", value: "Portable Multi-Gas Detector" },
  { name: "Parameters", value: "O₃, CO₂, CH₄, NO, NO₂, O₂, H₂S, CO, SO₂, NOx" },
  { name: "Sampling Mode", value: "Built-in pump suction type" },
  { name: "Response Time", value: "≤ 30 s" },
  { name: "Indication Error", value: "≤ 3% FS" },
  { name: "Working Environment", value: "Temperature: −10 °C to 55 °C; Relative humidity: ≤ 93% (non-condensing)" },
  { name: "Preheating Time", value: "≤ 90 s" },
  { name: "Storage Environment", value: "Temperature: −10 °C to 55 °C; Relative humidity: ≤ 93% (no condensation)" },
  { name: "Indication Mode", value: "LCD color touch display" },
  { name: "Charging Time", value: "Not less than 10 hours" },
  { name: "Continuous Working Time", value: "Not less than 15 hours" },
  { name: "Battery Specification", value: "DC 7.2 V, 26 Ah lithium-ion rechargeable battery" },
  { name: "Weight", value: "About 4.75 kg" },
  { name: "Size", value: "293 × 110 × 210 mm" }
]},
  // Add more products as necessary
];

function loadProductData() {
  const productId = document.querySelector('.selectedproductpopup').getAttribute('data-product-id');
  const product = products.find(p => p.productId === productId);

  if (product) {
      document.getElementById('product-name').innerText = product.name;
      document.getElementById('product-image').src = product.img;
      document.getElementById('product-introduction').innerText = product.introduction;
      document.getElementById('product-datasheet').href = product.dataSheetLink;
      document.getElementById('product-datasheet').setAttribute('download', product.name + " Data Sheet");

      // Populate features
      const featuresList = document.getElementById('product-features');
      featuresList.innerHTML = '';
      product.features.forEach(feature => {
          const li = document.createElement('li');
          li.innerText = feature;
          featuresList.appendChild(li);
      });

      // Populate specifications
      const specificationsTable = document.getElementById('product-specifications');
      specificationsTable.innerHTML = '';
      product.attributes.forEach(attribute => {
          const row = document.createElement('tr');
          const nameCell = document.createElement('td');
          nameCell.innerText = attribute.name;
          const valueCell = document.createElement('td');
          valueCell.innerText = attribute.value;
          row.appendChild(nameCell);
          row.appendChild(valueCell);
          specificationsTable.appendChild(row);
      });
  } else {
      console.error('Product not found');
  }
}
 


// Function to toggle between Features and Specifications
function toggleContent(contentType) {
  const featuresTab = document.getElementById('features-tab');
  const specificationsTab = document.getElementById('specifications-tab');
  const featuresContent = document.getElementById('features-content');
  const specificationsContent = document.getElementById('specifications-content');

  if (contentType === 'features') {
      featuresTab.classList.add('active');
      specificationsTab.classList.remove('active');
      featuresContent.style.display = 'block';
      specificationsContent.style.display = 'none';
  } else if (contentType === 'specifications') {
      featuresTab.classList.remove('active');
      specificationsTab.classList.add('active');
      featuresContent.style.display = 'none';
      specificationsContent.style.display = 'block';
  }
}

// Ensure the content is loaded after the DOM is ready
document.addEventListener('DOMContentLoaded', loadProductData);

// Function to open the quote popup

        // JavaScript functions to handle the popup
        function openQuotePopup() {
            document.getElementById('request-quote-popup').style.display = 'flex'; // Show popup using flexbox for centering
            const productName = document.getElementById('product-name').innerText;
            document.getElementById('selected-product-name').innerText = productName;
        }

        function closeQuotePopup() {
            document.getElementById('request-quote-popup').style.display = 'none';
        }





