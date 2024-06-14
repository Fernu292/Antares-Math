import React, { useState, useEffect, createContext } from 'react';

export const calculatorContext = createContext(null);

const CalculatorContextProvider = ({ children }) => {
    // Input data
    const [throad_diameter, setThroadDiameter] = useState(0);
    const [exit_diameter, setExitDiameter] = useState(0);
    const [heat_cap_r, setHeatCapacityRatio] = useState(0);
    const [gas_constant, setGasConstant] = useState(0);
    const [stagnation_preasure, setStagnationPreasure] = useState(0);
    const [stagnation_temp, setStagnationTemp] = useState(0);

    // Output data
    const [area_ratio, setAreaRatio] = useState(0);
    const [throad_area, setThroadArea] = useState(0);
    const [throad_preasure, setThroadPreasure] = useState(0);
    const [throad_temp, setThoradTemp] = useState(0);
    const [exit_mach_n, setExitMachNumber] = useState(0);
    const [exit_preasure, setExitPreasure] = useState(0);
    const [exit_temp, setExitTemp] = useState(0);
    const [exit_velocity, setExitVelocity] = useState(0);
    const [mass_flow_r, setMassFlowRate] = useState(0);

    // Constantes
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [gMe, setGMe] = useState(0);

    // Funciones matemáticas
    const diff = (funct, x) => {
        return (funct(x + 0.000001) - funct(x - 0.000001)) / (0.000002);
    }

    // Redondeo a x decimales de precisión
    const round = (x, digit) => {
        const mod = Math.pow(10, digit);
        return Math.round(x * mod) / mod;
    }

    // Optimización de una función
    const solve = (funct, init) => {
        let error = 1;
        let preddiccion = init;
        let prev = preddiccion;

        while (error >= 0.000001) {
            preddiccion -= funct(preddiccion) / diff(funct, preddiccion);
            error = Math.abs(1 - prev / preddiccion);
            prev = preddiccion;
        }

        return preddiccion;
    }

    // Cálculo del número de Mach
    const MatchCalculate = (M) => {
        if (area_ratio < 1) {
            return NaN;
        } else {
            return Math.pow((1 + j * M * M) / i, i / j) - Math.pow(M * area_ratio, 2);
        }
    }

    // Cálculo de la presión
    const PreasureCalculate = (M) => {
        return 1 / (1 + j * M * M);
    }

    // Hace el cálculo general y lo configura
    const calculateData = () => {
        const iValue = (heat_cap_r + 1) / 2;
        const jValue = (heat_cap_r - 1) / 2;
        setI(iValue);
        setJ(jValue);

        const newAreaRatio = Math.pow(exit_diameter / throad_diameter, 2);
        const newThroadArea = Math.PI * throad_diameter * throad_diameter / 4;

        let MachInit = 100;
        const newExitMachNumber = round(solve((M) => MatchCalculate(M, newAreaRatio, iValue, jValue), MachInit), 4);
        const newGMe = PreasureCalculate(newExitMachNumber);

        const newExitTemp = (newGMe * stagnation_temp) - 273.15;
        const newExitVelocity = Math.sqrt(heat_cap_r * gas_constant * (newExitTemp+273.15)) * newExitMachNumber;
        const newExitPreasure = Math.pow(newGMe, 0.5 * heat_cap_r / jValue) * stagnation_preasure;

        const newThroadTemp = PreasureCalculate(1) * stagnation_temp - 273.15;
        const newThroadPreasure = Math.pow(PreasureCalculate(1), 0.5 * (heat_cap_r / jValue)) * stagnation_preasure;
        const newMassFlowRate = Math.sqrt(heat_cap_r / (gas_constant * stagnation_temp)) * newThroadArea * stagnation_preasure * Math.pow(iValue, -2 * iValue / jValue) * 0.1;

        // Update all states together
        setAreaRatio(newAreaRatio);
        setThroadArea(newThroadArea);
        setExitMachNumber(newExitMachNumber);
        setGMe(newGMe);
        setExitTemp(newExitTemp);
        setExitVelocity(newExitVelocity);
        setExitPreasure(newExitPreasure);
        setThoradTemp(newThroadTemp);
        setThroadPreasure(newThroadPreasure);
        setMassFlowRate(newMassFlowRate);
    }

    // Recalcular datos cada vez que los inputs cambien
    useEffect(() => {
        if (throad_diameter > 0 && exit_diameter > 0 && heat_cap_r > 0 && gas_constant > 0 && stagnation_preasure > 0 && stagnation_temp > 0) {
            calculateData();
        }
    }, [throad_diameter, exit_diameter, heat_cap_r, gas_constant, stagnation_preasure, stagnation_temp]);

    return (
        <calculatorContext.Provider
            value={{
                throad_diameter,
                setThroadDiameter,
                exit_diameter,
                setExitDiameter,
                heat_cap_r,
                setHeatCapacityRatio,
                gas_constant,
                setGasConstant,
                stagnation_preasure,
                setStagnationPreasure,
                stagnation_temp,
                setStagnationTemp,
                area_ratio,
                throad_area,
                throad_preasure,
                throad_temp,
                exit_mach_n,
                exit_preasure,
                exit_temp,
                exit_velocity,
                mass_flow_r,
                calculateData
            }}
        >
            {children}
        </calculatorContext.Provider>
    );
};

export default CalculatorContextProvider;
