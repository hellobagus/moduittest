/** @format */

import type { ReactElement } from 'react';
import DashboardLayout from '../layouts/Dashboard';
import BasicTableTwo from '../components/tables/BasicTableTwo';

const ProjectsPage = () => {
  return (
    <div className='min-h-screen h-full'>
      <BasicTableTwo></BasicTableTwo>
    </div>
  );
};

ProjectsPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default ProjectsPage;
