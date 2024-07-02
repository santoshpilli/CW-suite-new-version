
// import React from "react";
// import PageSEO from "../components/common/PageSEO";
// import { MetaData } from "../components/common/Helper";
// import RenderSections from "../components/renderSections";
// // import menuData from './menudata.json'
// import menuData from './menu.json'
// import LoadingAnimation from "../custom/animate";

// import Layout from "../hoc/Layout";
// import axios from "axios";
// import Custom404 from "./404"
// import CustomPages from "../custom";

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const pathSegments = query.index || [];
//   const path = `/${pathSegments.join("/")}`;


//   let matchedMenuItem = null;
//   for (const menuItem of menuData) {
//     if (menuItem.slug === path) {
//       matchedMenuItem = menuItem;
//       break;
//     }
//     if (menuItem.children) {
//       for (const childItem of menuItem.children) {
//         if (childItem.slug === path) {
//           matchedMenuItem = childItem;
//           break;
//         }
//         if (childItem.subchildren) {
//           for (const subChildItem of childItem.subchildren) {
//             if (subChildItem.slug === path) {
//               matchedMenuItem = subChildItem;
//               break;
//             }
//           }
//           if (matchedMenuItem) {
//             break;
//           }
//         }
//       }
//       if (matchedMenuItem) {
//         break;
//       }
//     }
//   }
//   const { type, menuId, slug } = matchedMenuItem || {};

//   if (!matchedMenuItem) {
//     return {
//       notFound: true,
//     };
//   }

//   if (type === 'custom') {
//     return {
//       props: {
//         type,
//         data: null,
//         slug
//       },
//     };
//   } else {
//     try {
//       let tempSlug = path.substring(1);

//       const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?slug=${tempSlug}`;
//       const headers = {
//         'Content-Type': 'application/json',
//       };
//       const response = await axios.get(finalUrl, headers);

//       const data = response.data?.documents[0];

//       if (!data) {
//         return {
//           notFound: true,
//         };
//       }

//       return {
//         props: {
//           type,
//           data,
//           slug
//         },
//       };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return {
//         notFound: true,
//       };
//     }
//   }
// }


// export default function Home({ type, data, slug }) {
//   if (!data && type !== 'custom') {
//     return <Custom404 />;
//   }

//   return (
//     <>
//       <PageSEO
//         title={data?.pageTitle}
//         canonicalTag={""}
//         metatitleTag={MetaData[0].titleTag}
//         metaDes={MetaData[0].metaDescription}
//       />

//       {data === null && type === "page" ? <Layout> <LoadingAnimation /> </Layout> :
//         type === 'page' && <RenderSections data={data} />
//       }

//       {type === 'post' && <PostComponent />}
//       {type === 'form' && <Layout><h2>Form component</h2></Layout>}
//       {type === 'custom' && <CustomPages type={type} slug={slug} />}
//       {data === null && type !== 'custom' && <Custom404 />}
//     </>
//   );
// }




import React from "react";
import useSWR from "swr";
import PageSEO from "../components/common/PageSEO";
import { MetaData } from "../components/common/Helper";
import RenderSections from "../components/renderSections";
import menuData from './menu.json';
import LoadingAnimation from "../custom/animate";
import Layout from "../hoc/Layout";
import Custom404 from "./404";
import CustomPages from "../custom";
import axios from "axios";


const fetcher = async (url) => {
  const response = await axios.get(url, {
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.data || !response.data.documents[0]) {
    throw new Error('No data found');
  }
  return response.data.documents[0];
};

const findMenuItem = (path) => {
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
  return matchedMenuItem;
};

export async function getServerSideProps(context) {
  const { query } = context;
  const pathSegments = query.index || [];
  const path = `/${pathSegments.join("/")}`;


  const matchedMenuItem = findMenuItem(path);
  

  const { type, slug } = matchedMenuItem || {};

  return {
    props: {
      path,
      type,
      slug,
      matchedMenuItem,
    },
  };
}

export default function Home({ path, type, slug, matchedMenuItem }) {
  const { data, error } = useSWR(
    matchedMenuItem && type !== 'custom' ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?slug=${path.substring(1)}` : null,
    fetcher
  );

 

  if (!matchedMenuItem) {
    return <Custom404 />;
  }

  if (error) {
    console.error('Error fetching data:', error);
    return <Custom404 />;
  }

  return (
    <>
      <PageSEO
        title={data?.pageTitle}
        canonicalTag={""}
        metatitleTag={MetaData[0].titleTag}
        metaDes={MetaData[0].metaDescription}
      />

      {!data && type === "page" ? <Layout> <LoadingAnimation /> </Layout> :
        type === 'page' && <RenderSections data={data} />
      }

      {type === 'post' && <PostComponent />}
      {type === 'form' && <Layout><h2>Form component</h2></Layout>}
      {type === 'custom' && <CustomPages type={type} slug={slug} />}
      {!data && type !== 'custom' && <Custom404 />}
    </>
  );
}








