import React from 'react';
import { useState, createContext } from 'react';

export const calculatorContext = createContext(null);

const CalculatorContextProvider = ({children}) => {

    // Input data
    const [throad_diameter, setThroadDiameter] = useState(0);
    const [exit_diameter, setExitDiameter] = useState(0);
    const [head_cap_r, setHeadCapacityRatio] = useState(0);
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

    // Funciones matematicas
    const diff = (funct, x)=> {
        return (funct(x + 0.00000001)-funct(x + 0.00000001))/(2*0.00000001);
    }

    // Redondeo a x decimales de precision
    const round = (x, digit) => {
        const mod = Math.pow(10,digit);
        return Math.round(x/mod)*mod;
    }

    // Optimizacion de una funcion
    const solve = (funct, init) => {
        let error = 1;
        let preddiccion = init;
        let prev = preddiccion;

        while(error > 0.0000000000000001){
            preddiccion -= funct(preddiccion) / diff(funct, preddiccion);
            error = Math.abs(1 - prev/preddiccion);
            prev = preddiccion;
        }

        return preddiccion;
    }

    // Calculo del numero de Mach
    const MatchCalculate = (M)=>{
        if(area_ratio<1){
            return NaN;
        }else {
            return Math.pow((1+j*M*M)/i,i/j) - Math.pow(M * area_ratio, 2);
        }
    } 

    const PreasureCalculate = (M)=> {
        return 1 / (1 + j * M * M);
    }

    const calculateData = ()=>{
        setI(head_cap_r + 1)/2;
        setJ(head_cap_r - 1)/2;

        let MachInit = 100;

        setAreaRatio(Math.pow(throad_diameter/exit_diameter,2));
        setExitMachNumber(round(solve(MatchCalculate, MachInit), -4));
        setThroadArea(Math.PI * throad_diameter * throad_diameter / 4);

        const gMe = PreasureCalculate(MachInit);
        setExitTemp((gMe * stagnation_temp) - 273.15);


    }

    return(
        <calculatorContext.Provider
            value={{
                throad_diameter,
                setThroadDiameter,
                exit_diameter,
                setExitDiameter,
                head_cap_r, 
                setHeadCapacityRatio,
                gas_constant,
                setGasConstant,
                stagnation_preasure,
                setStagnationPreasure,
                stagnation_temp,
                setStagnationTemp,
                area_ratio,
                setAreaRatio,
                throad_area,
                setThroadArea,
                throad_preasure,
                setThroadPreasure,
                throad_temp,
                setThoradTemp,
                exit_mach_n,
                setExitMachNumber,
                exit_preasure,
                setExitPreasure,
                exit_temp,
                setExitTemp,
                exit_velocity,
                setExitVelocity,
                mass_flow_r, 
                setMassFlowRate,
                diff,
                round,
                solve,
                calculateData
            }}
        >
            {children}
        </calculatorContext.Provider>
    );
};

export default CalculatorContextProvider;