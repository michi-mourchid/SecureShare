import * as React from 'react';
import Button from '@mui/material/Button';
import PermanentDrawerLeft from './DrawerContent'; // Importer le composant tiroir
import DisableFilteringGridSomeColumns from './tab';
import BasicModal from './ModalPopup'

export default function SecondLayout() {
  return (
    <>
      <title>Drive</title>
      <meta name="Drive" content="Contune du drive d'un client" />
      
      <div className="bg-background">
        <div>
            <PermanentDrawerLeft/>
        </div>
        <div className="text-white" style={{backgroundColor: '#2D446D', width: 'calc(100vw - 290px)', position: 'fixed', left: '270px'}}>
          <DisableFilteringGridSomeColumns/>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <BasicModal/>
        </div>
      </div>
    </>
  );
}
