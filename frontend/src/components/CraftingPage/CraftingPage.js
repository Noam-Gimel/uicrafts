import React, { useState } from "react";
import cn from './CraftingPage.module.css';
import { Button } from "primereact/button";
import { CraftingPanel } from "../CraftingPanel/CraftingPanel";
import { ExampleButton } from "../Buttons/ExampleButton/ExampleButton";
import { ButtonProvider } from "../../context/ButtonContext";

export function CraftingPage() {
    const [innerFrameColor, setInnerFrameColor] = useState('var(--widget-dark)');

    const onBackgroundChange = () => {
        if(innerFrameColor === 'var(--widget-light)') {
            setInnerFrameColor('var(--widget-dark)');
        } else {
            setInnerFrameColor('var(--widget-light)');
        }
    }

    return (
    <ButtonProvider>
        <div className={cn.Container}>
            <div className={cn.buttonDesignWrapper}>
                <div className={cn.buttonFrame}>
                    <div className={cn.switchContainer}>
                        <Button className={cn.ResetToDefaultButton} label="Reset to default" icon='pi pi-refresh' text/>
                        <label className={cn.lightSwitch}>
                            <input type="checkbox" onChange={onBackgroundChange}/>
                            <span className={cn.switchSlider}></span>
                        </label>
                    </div>
                    <div className={cn.buttonInnerFrame} style={{ backgroundColor: innerFrameColor }}>
                        <ExampleButton />
                    </div>
                </div>
            </div>
            <div className={cn.settingsBarWrapper}>
                <CraftingPanel />
            </div>
        </div>
    </ButtonProvider>
    );
}

