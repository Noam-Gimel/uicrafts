import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import cn from './ExportModal.module.css';

export function ExportModal({ showExportModal, onExportModalHide }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // HTML and CSS code as examples
  const htmlCode = `<div>\n  <h1>Hello World</h1>\n</div>`;
  const cssCode = `.dialog {
    width: 50vw;
  }
  
  .codeContainer {
    max-height: 400px; /* Limit the height to create a scrollable area */
    overflow-y: auto; /* Enables scrolling when code overflows */
    padding: 10px;
    background-color: #1e1e1e;
    color: #d4d4d4;
    border-radius: 8px;
  }
  
  .codeBlock {
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    white-space: pre-wrap; /* Preserve whitespace formatting */
  }
  
  .lineNumber {
    display: inline-block;
    width: 30px;
    text-align: right;
    padding-right: 10px;
    user-select: none; /* Prevent line numbers from being selected */
    color: #888888;
  }
  
  .copyButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
  `;

  // Function to copy the code of the active tab
  const copyCodeToClipboard = () => {
    const code = activeIndex === 0 ? htmlCode : cssCode;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <Dialog
      header="Some Header"
      visible={showExportModal}
      onHide={onExportModalHide}
      className={cn.dialog}
      draggable={false} /* Make the modal static */
      resizable={false} /* Prevent resizing */
      style={{ background: 'black' }}
    >
      <div className={cn.content}>
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="HTML">
            <div className={cn.codeContainer}>
              <pre className={cn.codeBlock}>
                {htmlCode.split('\n').map((line, index) => (
                  <div key={index}>
                    <span className={cn.lineNumber}>{index + 1}</span> {line}
                  </div>
                ))}
              </pre>
            </div>
          </TabPanel>
          <TabPanel header="CSS">
            <div className={cn.codeContainer}>
              <pre className={cn.codeBlock}>
                {cssCode.split('\n').map((line, index) => (
                  <div key={index}>
                    <span className={cn.lineNumber}>{index + 1}</span> {line}
                  </div>
                ))}
              </pre>
            </div>
          </TabPanel>
        </TabView>
        <div className={cn.copyButton}>
          <Button label="Copy" iconPos='right' icon="pi pi-copy" onClick={copyCodeToClipboard} />
        </div>
      </div>
    </Dialog>
  );
}