import * as React from 'react';
import Button from '@mui/material/Button';
import PermanentDrawerLeft from './DrawerContent'; // Importer le composant tiroir
import DisableFilteringGridSomeColumns from './tab';

export default function SecondLayout() {
  return (
    <>
      <title>Drive</title>
      <meta name="description" content="Generated by create next app for Seconde Page" />
      <div className="bg-background">
        <div style={{top: '64px' }}>
          <PermanentDrawerLeft/>
        </div>
        <div className="text-white" style={{backgroundColor: '#2983F0', width: 'calc(100vw - 290px)', position: 'fixed', left: '270px'}}>
          <DisableFilteringGridSomeColumns/>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <Button variant="contained" style={{ backgroundColor: '#0066CC', color: 'white' }}>
              Ajouter un document
            </Button>
          </div>
      </div>
    </>
  );
}
