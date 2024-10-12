import React, { useState, useContext } from "react";
import './craftingPanel.css';
import { Button } from "primereact/button";
import DropdownMenu from "../OptionItemsMenu/DropdownMenu";
import { ButtonContext } from "../../context/ButtonContext";
import { TextHandler } from "./craftingComponents/GeneralHandler/GeneralHandler";
import { GeneralHandler } from "./craftingComponents/GeneralHandler/GeneralHandler";
import { EffectHandler } from "./craftingComponents/EffectHandler/EffectHandler";
 

export function CraftingPanel() {

  const [activeTab, setActiveTab] = useState('General');

  return (
    <div className="settings-bar">
      <div className="settings-bar-header">
        <h2 className="settings-title">Crafting Zone</h2>
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'General' ? 'active' : ''}`}
            onClick={() => setActiveTab('General')}
          >
            General
          </button>
          <button
            className={`tab-button ${activeTab === 'Effect' ? 'active' : ''}`}
            onClick={() => setActiveTab('Effect')}
          >
            Effect
          </button>
          <button
            className={`tab-button ${activeTab === 'Advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('Advanced')}
          >
            Advanced
          </button>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'General' && (
          <div className="settings-options">
            <GeneralHandler />
          </div>
        )}
        {activeTab === 'Effect' && (
          <div className="settings-options">
              <EffectHandler />
          </div>
        )}
        {activeTab === 'Advanced' && (
            <DropdownMenu />
        )}
      </div>
    </div>
  );
}

