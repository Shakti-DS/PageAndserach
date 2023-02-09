import * as React from "react";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import { favicon, stagingBaseurl } from "../../sites-global/global";

import "../index.css";
import { Link } from "@yext/pages/components";
import getDirectionUrl from "../components/commons/GetDirection";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "city",
    filter: {
      savedFilterIds: ["dm_stores-directory_address_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      // "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.googlePlaceId",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.mainPhone",
      // "dm_directoryChildren.what3WordsAddress",
      "dm_directoryChildren.yextDisplayCoordinate",
      "dm_directoryChildren.id",
      //seo section
      // "c_canonical",
      // "c_metaDescription",
      // "c_metaTitle",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  if (document.dm_directoryParents) {
    document?.dm_directoryParents?.map((i: any) => {
      if (i.meta.entityType.id == "pizza_country") {
        currentUrl = `${i.slug}/${document.slug.toString()}.html`;
      } else if (i.meta.entityType.id == "pizza_region") {
        let url = `${document.dm_directoryParents[1].slug}/${
          i.slug
        }/${document.slug.toString()}.html`;
        currentUrl = url;
      }
    });
    return `/${currentUrl}`;
  } else {
    return `/${document.slug.toString()}.html`;
  }
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  // let metaDescription = document.c_metaDescription
  //     ? document.c_metaDescription
  //     : "Visit your " + document.name + "Get the real Papa John's taste now – order fresh cooked pizza, sides, drinks and desserts online for delivery or takeaway. Better ingredients. Better pizza";
  // let metaTitle = document.c_metaTitle
  //     ? document.c_metaTitle
  //     : "Visit " + document.name + " | Order Pizza: Delivery Or Takeaway | ";

  return {
    title: "city",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
}) => {
  const {
    name,
    dm_directoryParents,
    dm_directoryChildren,
    address,
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    _site,
  } = document;

  let templateData = { document: document };

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const childrenDivs =
    dm_directoryChildren &&
    dm_directoryChildren?.map((entity: any) => {
      var origin: any = null;
      if (entity.address.city) {
        origin = entity.address.city;
      } else if (entity.address.region) {
        origin = entity.address.region;
      } else {
        origin = entity.address.country;
      }

      let url = "";
      if (!entity.slug) {
        let slugString = entity.id + " " + entity.name;
        let slug = slugString;
        // console.log('slug', slug);
        url = `${slug}.html`;
      } else {
        url = `${entity.slug?.toString()}.html`;
      }

        return (
          
        <div className="w-full sm:w-1/2 xl:w-1/3 px-[15px]">
          <div className="near-location">
            <h4>
              <a key={entity.slug} href={`${stagingBaseurl}/${url}`}>
                {entity.name}
              </a>
            </h4>
            <div className="store-address">
              <p>
                {entity.address.line1 ? entity.address.line1 : ""},{" "}
                {entity.address.line2 ? entity.address.line2 : ""}
                <br /> {entity.address.city ? entity.address.city : ""},{" "}
                {entity.address.postalCode ? entity.address.postalCode : ""},{" "}
                <br />
                {entity.address.countryCode
                  ? regionNames.of(entity.address.countryCode)
                  : ""}{" "}
                <br />
              </p>
            </div>

            {entity.mainPhone ? (
              <>
                <div className="store-phone">
                  <p>
                    <Link
                      href={`tel:${entity.mainPhone}`}
                      rel="noopener noreferrer"
                      eventName={`phone`}
                    >
                      {entity.mainPhone}
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="store-link">
              <Link
                data-ya-track="directions"
                className="direction"
                onClick={() => {
                  getDirectionUrl(entity);
                }}
                href="javascript:void(0);"
                rel="noopener noreferrer"
                eventName={`getdirections"`}
                // conversionDetails={conversionDetailsDirection}
              >
                Get Directions
              </Link>
              <Link
                className="view-details"
                href={`${stagingBaseurl}/${url}`}
                rel="noopener noreferrer"
                eventName={`storeViewDetails`}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={address}
      ></BreadCrumbs>

      <h3 className="sec_heading mt-12" style={{ textAlign: "center" }}>
        Available Stores in {name}
        {document.dm_directoryParents[2].name
          ? document.dm_directoryParents[2].name
          : ""}
        , {document.dm_directoryParents[1].name}
      </h3>
      <div className="directory-country nearby-sec">
        <div className="container">
          <div className="flex  flex-wrap justify-center -mx-[15px]">
            {childrenDivs}
          </div>
        </div>
      </div>
    </>
  );
};
export default City;
