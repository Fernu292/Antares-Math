import React from 'react';
import Nav_Bar from './Navigation_bar';
import { useContext } from 'react';
import { calculatorContext } from '../Context/Calculator_context';

const Calculator = ()=>{

    const {
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
        calculateData
     } = useContext(calculatorContext);

    return (
        <div className='calculator'>
            <Nav_Bar />
            <div className='blur blur_calc'></div>
            <div className='content_calculator container'>
                <div className='input_data'>
                    <h1>Input data</h1>
                    <ul>
                        <li>
                            <p>Throad diameter (mm)</p>
                            <input 
                                type="number" 
                                onInput = {e => setThroadDiameter(e.target.value)}
                                value={throad_diameter}
                    
                            />
                        </li>
                        <li>
                            <p>Exit diameter (mm)</p>
                            <input 
                                type="number"
                                value = {exit_diameter}
                                onInput = {e => setExitDiameter(e.target.value)}
                            />
                        </li>
                        <li>
                            <p>Heat capacity ratio</p>
                            <input 
                                type="number"
                                value = {head_cap_r}
                                onInput = {e => setHeadCapacityRatio(e.target.value)}
                            />
                        </li>
                        <li>
                            <p>Gas constant (J/kgºK)</p>
                            <input 
                                type="number"
                                value = {gas_constant}
                                onInput = {e => setGasConstant(e.target.value)}
                            />
                        </li>
                        <li>
                            <p>Stagnation pressure (bar)</p>
                            <input 
                                type="number"
                                value = {stagnation_preasure}
                                onInput = {e => setStagnationPreasure(e.target.value)}
                            />
                        </li>
                        <li>
                            <p>Stagnation temperature (K)</p>
                            <input 
                                type="number"
                                value = {stagnation_temp}
                                onInput = {e => setStagnationTemp(e.target.value)}
                            />
                        </li>
                    </ul>
                    <button 
                        className='btn'
                        onClick = {calculateData()}
                    >Calculate</button>
                </div>

                <div className='output_data'>
                    <h1>Output data</h1>
                    <ul>
                        <li>
                            <p>Area ratio</p>
                            <p className='data'>{area_ratio}</p>
                        </li>
                        <li>
                            <p>Throat area (mm^2)</p>
                            <p className='data'>{throad_area}</p>
                        </li>
                        <li>
                            <p>Throat pressure (bar)</p>
                            <p className='data'>{throad_preasure}</p>
                            
                        </li>
                        <li>
                            <p>Throat temperature (ºC)</p>
                            <p className='data'>{throad_temp}</p>
                            
                        </li>
                        <li>
                            <p>Exit Mach number</p>
                            <p className='data'>{exit_mach_n}</p>
                          
                        </li>
                        <li>
                            <p>Exit pressure (bar)</p>
                            <p className='data'>{exit_preasure}</p>
                            
                        </li>
                        <li>
                            <p>Exit temperature (ºC)</p>
                            <p className='data'>{exit_temp}</p>
                           
                        </li>
                        <li>
                            <p>Exit velocity (m/s)</p>
                            <p className='data'>{exit_velocity}</p>
                            
                        </li>
                        <li>
                            <p>Chocking mass flow rate (kg/s)</p>
                            <p className='data'>{mass_flow_r}</p>
                          
                        </li>
                    </ul>
                </div>

            </div>
           
        </div>
    );
};

export default Calculator;