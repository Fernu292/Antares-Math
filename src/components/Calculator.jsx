import React from 'react';
import Nav_Bar from './Navigation_bar';
import { useContext } from 'react';
import { calculatorContext } from '../Context/Calculator_context';

const Calculator = () => {
    const {
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
                                onInput={e => setThroadDiameter(parseFloat(e.target.value))}
                                value={isNaN(throad_diameter)?"":throad_diameter}
                            />
                        </li>
                        <li>
                            <p>Exit diameter (mm)</p>
                            <input 
                                type="number"
                                value={isNaN(exit_diameter)?"":exit_diameter}
                                onInput={e => setExitDiameter(parseFloat(e.target.value))}
                            />
                        </li>
                        <li>
                            <p>Heat capacity ratio</p>
                            <input 
                                type="number"
                                value={isNaN(heat_cap_r)?"":heat_cap_r}
                                onInput={e => setHeatCapacityRatio(parseFloat(e.target.value))}
                            />
                        </li>
                        <li>
                            <p>Gas constant (J/kgºK)</p>
                            <input 
                                type="number"
                                value={isNaN(gas_constant)?"":gas_constant}
                                onInput={e => setGasConstant(parseFloat(e.target.value))}
                            />
                        </li>
                        <li>
                            <p>Stagnation pressure (bar)</p>
                            <input 
                                type="number"
                                value={isNaN(stagnation_preasure)?"":stagnation_preasure}
                                onInput={e => setStagnationPreasure(parseFloat(e.target.value))}
                            />
                        </li>
                        <li>
                            <p>Stagnation temperature (K)</p>
                            <input 
                                type="number"
                                value={isNaN(stagnation_temp)?"":stagnation_temp}
                                onInput={e => setStagnationTemp(parseFloat(e.target.value))}
                            />
                        </li>
                    </ul>
                    <button 
                        className='btn'
                        onClick={calculateData}
                    >Calculate</button>
                </div>

                <div className='output_data'>
                    <h1>Output data</h1>
                    <ul>
                        <li>
                            <p>Area ratio</p>
                            <p className='data'>{isNaN(area_ratio) ? "N/A" : area_ratio.toString()}</p>
                        </li>
                        <li>
                            <p>Throat area (mm^2)</p>
                            <p className='data'>{isNaN(throad_area) ? "N/A" : throad_area.toString()}</p>
                        </li>
                        <li>
                            <p>Throat pressure (bar)</p>
                            <p className='data'>{isNaN(throad_preasure) ? "N/A" : throad_preasure.toString()}</p>
                        </li>
                        <li>
                            <p>Throat temperature (ºC)</p>
                            <p className='data'>{isNaN(throad_temp) ? "N/A" : throad_temp.toString()}</p>
                        </li>
                        <li>
                            <p>Exit Mach number</p>
                            <p className='data'>{isNaN(exit_mach_n) ? "N/A" : exit_mach_n.toString()}</p>
                        </li>
                        <li>
                            <p>Exit pressure (bar)</p>
                            <p className='data'>{isNaN(exit_preasure) ? "N/A" : exit_preasure.toString()}</p>
                        </li>
                        <li>
                            <p>Exit temperature (ºC)</p>
                            <p className='data'>{isNaN(exit_temp) ? "N/A" : exit_temp.toString()}</p>
                        </li>
                        <li>
                            <p>Exit velocity (m/s)</p>
                            <p className='data'>{isNaN(exit_velocity) ? "N/A" : exit_velocity.toString()}</p>
                        </li>
                        <li>
                            <p>Chocking mass flow rate (kg/s)</p>
                            <p className='data'>{isNaN(mass_flow_r) ? "N/A" : mass_flow_r.toString()}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
