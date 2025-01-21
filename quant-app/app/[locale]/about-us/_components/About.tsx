"use client"

import { Button, Grid2, Typography, useMediaQuery } from "@mui/material"
import { useTranslations } from "next-intl";
import Image from "next/image"
import { useState } from "react";

const About = () => {
  const t = useTranslations("about-us");
  const mediumScreen = useMediaQuery("(max-width:950px)");

  const aboutUsPartialText = t("AboutUsTextStaticParagraph")
  const aboutUsFullText = <>
    {t("AboutUsTextStaticParagraph")}
    <br />
    {t("ExpandableAboutUsTextParagraphFirstPart")}
    <br />
    {t("ExpandableAboutUsTextParagraphSecondPart")}
    <br />
    {t("ExpandableAboutUsTextParagraphThirdPart")}
  </>

  const [expandAboutUsText, setExpandAboutUsText] = useState(false);
  const toggleExpand = () => {
    setExpandAboutUsText(!expandAboutUsText);
  };

  return (
    <div className="px-[5%]">
      <Image
        width={0}
        height={0}
        className="
        w-[55%] float-left mr-[-23%] mb-[-13%] translate-y-[-7%] translate-x-[-8%] 
        max-[550px]:w-[65%] max-[550px]:mr-[-28%] max-[550px]:mb-[-17%]
        "
        src="/images/app-phone.png"
        alt="Iphone"
        unoptimized={true}
      />
      <Grid2
        container
        wrap="nowrap"
        direction={mediumScreen ? 'column' : 'row'}
        gap="5px"
        className="pt-[40px] max-[950px]:pt-[0] pb-[20px]"
      >
        <Grid2 width="fit-content" className="flex items-center">
          <Typography
            className="!font-clash !font-semibold !text-white !mb-[-4%] !text-[64px]
            max-[550px]:!text-[35px]
            max-[1080px]:!text-[50px]
            "
            variant="h1"
          >
            {t("AboutUs")}
          </Typography>
        </Grid2>
        <Grid2 className="ml-3 max-[950px]:ml-0 flex items-center translate-y-[10%]">
          <Typography
            className="text-white !font-clash !text-[18px] 
            max-[1080px]:!text-[16px] 
            max-[550px]:!text-[11px] 
            max-[400px]:!text-[10px]
            "
          >
            {t("WhereInnovationsMeetsVision")}
            <br />
            {t("CraftingDigitalExperiencesThatInspire")}
          </Typography>
        </Grid2>
      </Grid2>
      <Typography className="!font-clash !text-[24px] !text-justify !text-white
      max-[950px]:!text-[20px]
      max-[550px]:!text-[14px]
      max-[400px]:!text-[12px]
      ">
        {mediumScreen && !expandAboutUsText ? aboutUsPartialText : aboutUsFullText}
      </Typography>

      <Grid2
        container
        className="justify-center"
        sx={{
          mt: "20px",
          display: mediumScreen ? "flex" : "none",
        }}
      >
        {expandAboutUsText ? (
          <Button
            onClick={() => toggleExpand()}
            sx={{
              border: "1px solid white",
              backgroundColor: "transparent",
              width: "120px",
              height: "30px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                color: "white",
                fontSize: "14px",
              }}
            >
              {t("Collapse")}
            </Typography>
          </Button>
        ) : (
          <Button
            onClick={() => toggleExpand()}
            sx={{
              backgroundColor: "#6A65FF",
              width: "120px",
              height: "30px",
            }}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                color: "white",
                fontSize: "14px",
                width: "fit-content",
                borderRadius: "5px",
              }}
            >
              {t("ReadMore")}
            </Typography>
          </Button>
        )}

      </Grid2>

      <span className="about-info-img"></span>
      <span className="about-info-img-2"></span>
      <span className="about-info-img-3 -z-10"></span>
    </div>
  )
}

export default About