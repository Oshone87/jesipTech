import { Wrench, Shield, RefreshCcw, Snowflake } from 'lucide-react';

export const services = [
    {
        id: "industrial-equipment-maintenance",
        title: "Industrial Equipment Maintenance",
        icon: Wrench,
        summary: "Comprehensive maintenance for rotary and static equipment ensuring optimal performance.",
        description: "Our core expertise lies in the maintenance, optimization, and repair of critical industrial machinery. We ensure that industrial operations maintain high efficiency and safety standards with minimal downtime.",
        features: [
            "Pumps and Compressors",
            "Turbines and Heat Exchangers",
            "Pressure Vessels",
            "Rotary & Static Mechanical Systems"
        ]
    },
    {
        id: "welding-and-fabrication",
        title: "Welding & Fabrication Services",
        icon: Shield,
        summary: "Precision welding and structural fabrication for industrial and commercial sectors.",
        description: "We provide high-quality welding and fabrication services tailored to heavy industry, manufacturing, and construction. Using advanced techniques, our team guarantees structural integrity and durability in all components.",
        features: [
            "MIG, TIG & Arc Welding",
            "Pipes and Tanks Fabrication",
            "Structural Frames",
            "Oil, Gas & Manufacturing Components"
        ]
    },
    {
        id: "hvac-and-refrigeration",
        title: "HVAC & Refrigeration Systems",
        icon: Snowflake,
        summary: "Advanced temperature control, ventilation, and cooling solutions for varied environments.",
        description: "We provide complete installation, insulation, and maintenance of specialized climate control solutions. From massive industrial chillers to hygiene-compliant extraction systems.",
        features: [
            "Cold Rooms & Chillers",
            "Kitchen Extractors & Ventilation",
            "Split Systems & HVAC Units",
            "Commercial & Industrial Cooling"
        ]
    },
    {
        id: "conveyor-and-material-handling",
        title: "Conveyor & Material Handling Systems",
        icon: RefreshCcw,
        summary: "Automated logistics and robust mechanical components for seamless distribution.",
        description: "Streamline your warehouse and factory operations with our dependable installation and maintenance of conveyor systems, enhancing automation and ensuring smooth material handling.",
        features: [
            "Belt Conveyors",
            "Roller Conveyors",
            "Automated Material Handling",
            "Factory & Warehouse Logistics"
        ]
    }
];
