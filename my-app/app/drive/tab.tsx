import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['Nom du fichier', 'Poids', 'Date de dernière modification', 'Type', 'Propriétaire'];

// Vos propres données
const myData = [
  { id: 1, 'Nom du fichier': 'Fichier1.txt', Poids: '1.2 MB', 'Date de dernière modification': '2022-01-01', Type: 'Fichier texte', 'Propriétaire': 'John' },
  { id: 2, 'Nom du fichier': 'Image.jpg', Poids: '3.5 MB', 'Date de dernière modification': '2021-12-15', Type: 'Image JPEG', 'Propriétaire': 'Jane' },
  { id: 3, 'Nom du fichier': 'Document.docx', Poids: '800 KB', 'Date de dernière modification': '2023-03-20', Type: 'Document Word', 'Propriétaire': 'Alice' },
  { id: 4, 'Nom du fichier': 'Présentation.pptx', Poids: '2.1 MB', 'Date de dernière modification': '2023-05-10', Type: 'Présentation PowerPoint', 'Propriétaire': 'Bob' },
  { id: 5, 'Nom du fichier': 'Vidéo.mp4', Poids: '50 MB', 'Date de dernière modification': '2024-03-25', Type: 'Fichier vidéo', 'Propriétaire': 'Charlie' }
];

export default function CustomDataGrid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={myData}
        columns={VISIBLE_FIELDS.map(field => ({ field, headerName: field, width: 150 }))}
        disableColumnFilter
      />
    </div>
  );
}
