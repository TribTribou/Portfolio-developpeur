import React from 'react';
import ModalP2 from './ModaleP2';
import ModalP3 from './ModaleP3';
import ModalP4 from './ModaleP4';
import ModalP5 from './ModaleP5';
import ModalP6 from './ModaleP6';
import ModalP7 from './ModaleP7';

function ModalLauncher({ selectedProject, onClose }) {
  // Utilisez une logique conditionnelle pour déterminer quelle modale afficher
  switch (selectedProject) {
    case 'P2':
      return <ModalP2 onClose={onClose} />;
    case 'P3':
      return <ModalP3 onClose={onClose} />;
    case 'P4':
      return <ModalP4 onClose={onClose} />;
    case 'P5':
      return <ModalP5 onClose={onClose} />;
    case 'P6':
      return <ModalP6 onClose={onClose} />;
    case 'P7':
      return <ModalP7 onClose={onClose} />;
    default:
      return null;
  }
}

export default ModalLauncher;
