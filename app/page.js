
import React from 'react';
import axios from 'axios';
import Layout from './hoc/Layout';
import Homepage from './custom/home'

export default async function HomePageComponent() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
    const menuData = JSON.parse(response.data.documents[0].content);

    return (
      <Layout menuData={menuData} setSidebarOpen={false} isSidebarOpen={false}>
        <Homepage />
      </Layout>
    );
  } catch (error) {
    return <h2>Error loading homepage</h2>;
  }
}

export const revalidate = 3600;
