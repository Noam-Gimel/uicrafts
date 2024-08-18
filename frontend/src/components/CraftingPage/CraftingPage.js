import React, { useState } from "react";
import cn from './CraftingPage.module.css';
import { SettingsBar } from "../Settings/settings";
import { ExampleButton } from "../Buttons/ExampleButton/ExampleButton";
import { ButtonProvider } from "../../context/ButtonContext";


export function CraftingPage() {
    

  return (
    <ButtonProvider>
        <div className={cn.Container}>
            <div className={cn.buttonDesignWrapper}>
                <ExampleButton />
            </div>
            <div className={cn.settingsBarWrapper}>
                <SettingsBar />
            </div>
        </div>
    </ButtonProvider>
  );
}

