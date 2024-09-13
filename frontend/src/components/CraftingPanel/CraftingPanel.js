import React, { useState, useContext } from "react";
import './craftingPanel.css';
import { Button } from "primereact/button";
import DropdownMenu from "../OptionItemsMenu/DropdownMenu";
import { ButtonContext } from "../../context/ButtonContext";
import { TextHandler } from "./craftingComponents/GeneralHandler/GeneralHandler";
import { GeneralHandler } from "./craftingComponents/GeneralHandler/GeneralHandler";
import { EffectHandler } from "./craftingComponents/EffectHandler/EffectHandler";
import { ExportModal } from "../ExportModal/ExportModal";
 

export function CraftingPanel() {

  const [activeTab, setActiveTab] = useState('General');
  const [isExportLoading, setIsExportLoading] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  
  // Handles modal closure 
  const onExportModalHide = () => {
    if (showExportModal) {
      setShowExportModal(false);
    }
  };

  const handleExport = () => {
    setIsExportLoading(true);

    setTimeout(() => {
      setIsExportLoading(false);
      setShowExportModal(true);
    }, 2000);
  }


  return (
    <div className="crafting-panel-wrapper">
      <ExportModal showExportModal={showExportModal} onExportModalHide={onExportModalHide} />
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
              className={`tab-button ${activeTab === 'Extra' ? 'active' : ''}`}
              onClick={() => setActiveTab('Extra')}
            >
              Extra
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
              <div className="settings-option">
                <EffectHandler />
              </div>
            </div>
          )}
          {activeTab === 'Extra' && (
            <DropdownMenu />
          )}
        </div>
      </div>
      <div className="export-button-wrapper">
        <Button onClick={handleExport} loading={isExportLoading} label="Export Code" className="export-button" icon='pi pi-file-export' iconPos="right" />
      </div>
    </div>
  );
}

