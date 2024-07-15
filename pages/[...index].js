// [...index].js




// import React, { useState, useEffect } from "react";
// import PageSEO from "../components/common/PageSEO";
// import { MetaData } from "../components/common/Helper";
// import RenderSections from "../components/renderSections";
// import LoadingAnimation from "../custom/animate";
// import Layout from "../hoc/Layout";
// import axios from "axios";
// import Custom404 from "./404";
// import CustomPages from "../custom";

// export async function getStaticPaths() {
//   console.log("calling11============>")

//   const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
//   const menuData = JSON.parse(response.data.documents[0].content);
//   console.log("menuData============>", menuData)

//   const paths = menuData.map(menuItem => {
//     const paths = [];
//     if (menuItem.children) {
//       menuItem.children.forEach(childItem => {
//         if (childItem.subchildren) {
//           childItem.subchildren.forEach(subChildItem => {
//             paths.push({ params: { index: subChildItem.slug.split('/').filter(Boolean) } });
//           });
//         } else {
//           paths.push({ params: { index: childItem.slug.split('/').filter(Boolean) } });
//         }
//       });
//     } else {
//       paths.push({ params: { index: menuItem.slug.split('/').filter(Boolean) } });
//     }
//     return paths;
//   }).flat();

//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps(context) {

//   const { params } = context;
//   const pathSegments = params.index || [];
//   const path = `/${pathSegments.join("/")}`;


//   const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
//   const menuData = JSON.parse(response.data.documents[0].content);


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
//       revalidate: 86400, // Revalidate every 24 hours
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
//         revalidate: 86400, // Revalidate every 24 hours
//       };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return {
//         notFound: true,
//         revalidate: 86400, // Revalidate every 24 hours
//       };
//     }
//   }
// }

// export default function Home({ type, data, slug }) {
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await axios.get("/api/getmenuData");
//         const menuData = JSON.parse(response.data.documents[0].content);
//         setMenuData(menuData);
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

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



// pages/[...index].js
// main code
import React, { useState } from "react";
import PageSEO from "../components/common/PageSEO";
import { MetaData } from "../components/common/Helper";
import RenderSections from "../components/renderSections";
import LoadingAnimation from "../custom/animate";
import Layout from "../hoc/Layout";
import axios from "axios";
import Custom404 from "./404";
import CustomPages from "../custom";
import Sidebar from "../components/Home/Sidebar";
import Navbar from "../components/Home/Navbar";

export async function getStaticPaths() {


  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
  const menuData = JSON.parse(response.data.documents[0].content);


  const paths = menuData
    .map((menuItem) => {
      const paths = [];
      if (menuItem.children) {
        menuItem.children.forEach((childItem) => {
          if (childItem.subchildren) {
            childItem.subchildren.forEach((subChildItem) => {
              paths.push({ params: { index: subChildItem.slug.split("/").filter(Boolean) } });
            });
          } else {
            paths.push({ params: { index: childItem.slug.split("/").filter(Boolean) } });
          }
        });
      } else {
        paths.push({ params: { index: menuItem.slug.split("/").filter(Boolean) } });
      }
      return paths;
    })
    .flat();

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const { params } = context;
  const pathSegments = params.index || [];
  const path = `/${pathSegments.join("/")}`;

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
  const menuData = JSON.parse(response.data.documents[0].content);

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

  if (!matchedMenuItem) {
    return {
      notFound: true,
    };
  }

  if (type === "custom") {
    return {
      props: {
        type,
        data: null,
        slug,
        menuData,
      },
      revalidate: 300, // Revalidate every 24 hours
    };
  } else {
    try {
      let tempSlug = path.substring(1);
      const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?slug=${tempSlug}`;
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.get(finalUrl, headers);
      const data = response.data?.documents[0];

      if (!data) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          type,
          data,
          slug,
          menuData,
        },
        revalidate: 300, // Revalidate every 24 hours
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        notFound: true,
        revalidate: 300, // Revalidate every 24 hours
      };
    }
  }
}

export default function Home({ type, data, slug, menuData }) {
  console.log(menuData, 'fdfkldfk')
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  if (!data && type !== "custom") {
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

      <Layout {...{ isSidebarOpen }}>
        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} menuData={menuData} />
        <Navbar className="sticky-bar" menuData={menuData} setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
        {data === null && type === "page" ? (

          <LoadingAnimation />


        ) : (
          type === "page" && <RenderSections data={data} />
        )}
        {type === "post" && <PostComponent />}
        {type === "form" && (

          <h2></h2>

        )}
        {type === "custom" && <CustomPages type={type} slug={slug} />}
        {data === null && type !== "custom" && <Custom404 />}
      </Layout>





    </>
  );
}



































