const products = [
  {
    productId: "001",
    name: "Viz Solo",
    img: "../productImages/img001.png",
    dataSheetLink: "../productsDataSheets/new_product001-Solo-Transmitter.pdf",
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
    name: "Viz Duo",
    img: "../productImages/img001A.png",
    dataSheetLink: "../productsDataSheets/new_product002-Duo-Transmitter.pdf",
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
    name: "Viz Multi",
    img: "../productImages/img002.png",
    dataSheetLink: "../productsDataSheets/new_product003-Multi-Transmitter.pdf",
    introduction:
      "Viz Multi-parameter transmitter cansimultaneously monitor multiple different parameters according to customers’ different needs, including Temperature / PH / ORP  / Conductivity/ Dissolved oxygen/Turbidity /Sludge   concentration/Chlorophyll/ Blue-green algae / COD / NO3 /  Ionic ammonia nitrogen / Transparency / Residual chlorine and other parameters. It is widely used in water quality monitoring in wastewater treatment plants, waterworks, water stations, surface water, and industrial fields  The transmitter software interface parameter display i adaptive, the operation interface menu is simple to set up, the   user operation is convenient; the sensor is plug and play; the  electrode installation and replacement is fast and convenient;  various data transmission modes are optional, and the data  storage and export are available.",
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
    dataSheetLink: "../productsDataSheets/new_product004-pH-Sensor-Analog.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product005-orp-Analog.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product006-Ec-Analog.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product007-pH-Digital.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product008-EC-Digital.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product009-ODO-Sensor.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product010-RCL.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product011-UVCOD.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product012-SS.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product013-turb.pdf",
    introduction:
      "The VizSens-Turb is a highly capable turbidity sensor known for its accurate and stable measurements. Equipped with advanced infrared scattered light technology, it offers excellent repeatability and reliability. With a built-in self- diagnosis function and optional automatic cleaning, it ensures data accuracy while reducing maintenance efforts. The sensor's digital technology provides high anti-jamming capacity and enables seamless integration with other equipment. The VizSens-Turb is a user- friendly solution with plug-and-play installation, making it suitable for a wide range of applications in different industries.",
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
    dataSheetLink: "../productsDataSheets/new_product014-turb-Lo.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product015-CPHL.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product016-BGA.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product018-OIW.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product018-NH4N.pdf",
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
    dataSheetLink: "../productsDataSheets/new_product019-NO3N.pdf",
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
    name: "OPTICS-1000",
    img: "../productImages/img026.png",
    dataSheetLink: "../productsDataSheets/product020-optics1000.pdf",
    introduction:
      "The OPTICS-1000 Analyzer by  Advance Analytik is a cutting-edge water quality analysis instrument designed for precise and efficient measurement of various  compounds in water samples. This highperformance analyzer offers a range of features and benefits, making it ideal for a wide range of applications.",
    features: [
      "Conducts multi-compound analysis simultaneously.",
      "High selectivity and accuracy for specific compound detection.",
      "Utilizes high-resolution and sensitive optical sensors for accurate measurements.",
      "Effective mathematical treatment FTLS for advanced data processing.",
      "Unaffected by interference from turbidity, color, salinity, etc.",
      "Boasts a low detection limit and wide dynamic range.",
      "Conducts non-destructive analysis in a short period.",
      "Range of UV visible spectroscopy - 180 NM to 750 NM Full spectroscopy dual beam measurement.",
      "Suitable for both indoor and outdoor use.",
      "Durable stainless-steel construction (IP65 optional) for harsh environments.",
      "Crafted from high-quality materials for long-lasting performance.",
      "Minimal maintenance with no regular spare parts replacements.",
      "Optional multiplexing system for simultaneous analysis of multiple samples.",
      "User-friendly integrated touch screen for easy operation.",
      "Requires calibration only once a year, reducing downtime and effort.",
    ],
    attributes: [
      { name: "Flow", value: "0...2 L/min" },
      { name: "Pressure", value: "≤ 0.5 bars" },
      { name: "Temperature", value: "5 ... 35°C" },
      { name: "Display",value: "8.5’’ TFT colour screen 16/9 (LED backlight)" },
      { name: "Resolution", value: "800 x 480 px" },
      { name: "Material", value: "Glass to glass" },
      { name: "Memory", value: "16 GB SD card" },
      { name: "Data transfer", value: "USB type A" },
      { name: "Operating temperature", value: "5 ... 55°C" },
      { name: "Operating humidity", value: "< 90 % RH" },
      { name: "Voltage", value: "100 ... 240 VAC (50 - 60 Hz) or 24 VDC (Universal)"},
      { name: "Consumption", value: "< 20 W (60 W max.)" },
      { name: "Installation", value: "Wall Mounted / Set / Portable (Optional handles)" },
      { name: "Material", value: "SS316L" },
      { name: "Dimensions", value: "430x340x195 mm" },
      { name: "Weight", value: "± 15kg" },
      { name: "Protection class", value: "IP65" },
      { name: "Area Classification", value: "Safe" },
      { name: "Analog",value: "4-20 mA isolated (Active or Passive) / 500 Ω max" },
      { name: "Relay",value: "Programmable limit or fault alarms / 5A (NO) 3A (NC) @ 277 VAC"},
      { name: "Digital",value: "RS485 / Modbus (Slave or Master) - Show value, calibration status, fault status..." },
      { name: "Type", value: "ENCLOSURE" },
      { name: "Material", value: "Type" },
      { name: "Dimensions", value: "Dimensions (HxWxD)" },
      { name: "Weight", value: "Weight" },
      { name: "Protection class", value: "Protection class" },
      { name: "Area Classification", value: "Area Classification" },
      { name: "Flow", value: "SAMPLE CONDITION" },
      { name: "Pressure", value: "Pressure" },
      { name: "Temperature", value: "Temperature" },
      { name: "Display", value: "CONTROLLER" },
      { name: "Resolution", value: "Resolution" },
      { name: "Touch screen", value: "Touch screen" },
      { name: "Memory", value: "Memory" },
      { name: "Data transfer", value: "Data transfer" },
      { name: "Operating temperature", value: "Operating temperature" },
      { name: "Operating humidity", value: "Operating humidity" },
      { name: "Analog", value: "COMMUNICATION OUTPUT" },
      { name: "Relay", value: "Relay" },
      { name: "Digital", value: "Digital" },
      { name: "Voltage", value: "POWER SUPPLY" },
      { name: "Consumption", value: "Consumption" },
    ],
  },
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
