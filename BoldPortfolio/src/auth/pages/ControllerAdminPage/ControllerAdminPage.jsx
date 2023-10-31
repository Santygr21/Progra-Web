import React from 'react';
import { FormAdmin } from '../../components';

export function ControllerAdminPage() {
  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h1>Admin Control Panel</h1>
      <FormAdmin onFormSubmit={handleFormSubmit} />
    </div>
  );
}