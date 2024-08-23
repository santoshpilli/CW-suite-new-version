import React from 'react';
import axios from 'axios';
import Layout from '../hoc/Layout';
import RenderSections from '../../components/renderSections';
import CustomPages from '../custom/home';
import ContactUs from '../resources/contact';
import { getStaticData } from './page.server';
import Custom404 from '../../app/404';


export default async  function HomePage({params}) {
  const data1 = await getStaticData(params);
  const { type, data , slug, menuData, notFound } = data1;
  return (
    <Layout menuData={menuData} setSidebarOpen={false} isSidebarOpen={false}>
      {notFound ? (
        <Custom404 />
      ) : (
        <>
          {data === null && type === 'page' ? (
            <LoadingAnimation />
          ) : (
            type === 'page' && <RenderSections data={data} />
          )}
          {type === 'post' && <PostComponent />}
          {type === 'form' && <ContactUs />}
          {type === 'custom' && <CustomPages type={type} slug={slug} />}
        </>
      )}
    </Layout>
  );
}


export async function generateStaticParams() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
    const menuData = JSON.parse(response.data.documents[0].content);

    const paths = menuData.flatMap((menuItem) => {
      const paths = [];
      if (menuItem.children) {
        menuItem.children.forEach((childItem) => {
          if (childItem.subchildren) {
            childItem.subchildren.forEach((subChildItem) => {
              if (!subChildItem.slug.startsWith('http')) {
                paths.push({ slug: subChildItem.slug.split("/").filter(Boolean) });
              }
            });
          } else if (!childItem.slug.startsWith('http')) {
            paths.push({ slug: childItem.slug.split("/").filter(Boolean) });
          }
        });
      } else if (!menuItem.slug.startsWith('http')) {
        paths.push({ slug: menuItem.slug.split("/").filter(Boolean) });
      }

      return paths;
    });
    return paths;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}


export const revalidate = 3600;