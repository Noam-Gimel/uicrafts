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
                    <div className={cn.UpperContainer}>
                        <Button className={cn.ResetToDefaultButton} label="Reset to default" icon='pi pi-refresh' text/>
                        <label className={cn.lightSwitch}>
                            <input type="checkbox" onChange={onBackgroundChange}/>
                            <span className={cn.switchSlider}></span>
                        </label>
                    </div>
                    <div className={cn.buttonInnerFrame} style={{ backgroundColor: innerFrameColor }}>
                        <ExampleButton />
                    </div>
                    <div className={cn.LowerContainer}>
                        <div className={cn.RatingWrapper}>
                            <i className="pi pi-thumbs-up" style={{ fontSize: '1.3rem' }} />
                            <i className="pi pi-thumbs-down" style={{ fontSize: '1.3rem' }} />
                        </div>
                        <div className={cn.SubmitIssueWrapper}>
                            <p>Having a problem? You can <a>Submit an issue</a></p>
                        </div>
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

