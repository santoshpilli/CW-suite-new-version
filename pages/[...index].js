
import React from "react";
import PageSEO from "../components/common/PageSEO";
import { MetaData } from "../components/common/Helper";
import RenderSections from "../components/renderSections";
// import menuData from './menudata.json'
import menuData from './menu.json'
import LoadingAnimation from "../custom/animate";

import Layout from "../hoc/Layout";
import axios from "axios";
import Custom404 from "./404"
import CustomPages from "../custom";


export async function getServerSideProps(context) {
  const { query } = context;
  const pathSegments = query.index || [];
  const path = `/${pathSegments.join("/")}`;

  let matchedMenuItem = null;
  for (const menuItem of menuData) {
    if (menuItem.slug === path) {
      matchedMenuItem = menuItem;
      break;
    }
    if (menuItem.children) {
      for (const childItem of menuItem.children) {
        if (childItem.slug === path) {
          matchedMenuItem = childItem;
          break;
        }
        if (childItem.subchildren) {
          for (const subChildItem of childItem.subchildren) {
            if (subChildItem.slug === path) {
              matchedMenuItem = subChildItem;
              break;
            }
          }
          if (matchedMenuItem) {
            break;
          }
        }
      }
      if (matchedMenuItem) {
        break;
      }
    }
  }
  const { type, menuId, slug } = matchedMenuItem || {};
  if (type === 'custom') {
    return {
      props: {
        type,
        data: null,
        slug
      },
    };
  } else {
    try {
      const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?menuId=${menuId}`;
      const headers = {
        'Content-Type': 'application/json',
      };
      const response = await axios.get(finalUrl, headers);
      // let data = null
      // setTimeout(() => {
      const data = response.data;

      // }, 3000);

      return {
        props: {
          type,
          data,
          slug

        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          data: null,
          type: null,
          slug: null

        },
      };
    }
  }
}

export default function Home({ type, data, slug }) {
  // const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}`;



  return (
    <>
      <PageSEO
        title={data?.pageTitle}
        canonicalTag={""}
        metatitleTag={MetaData[0].titleTag}
        metaDes={MetaData[0].metaDescription}
      />


      {data === null && type === "page" ? <Layout> <LoadingAnimation /> </Layout> :
        type === 'page' && <RenderSections data={data} />
      }
      {/* {type === 'page' && <RenderSections data={data} />} */}

      {type === 'post' && <PostComponent />}
      {type === 'form' && <Layout><h2>Form component</h2></Layout>}
      {type === 'custom' && <CustomPages type={type} slug={slug} />}
      {data === null && type !== 'custom' && <Custom404 />}
    </>
  );
}





