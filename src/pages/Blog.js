import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  text-align: center;
  background: red;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Blog = () => {
  const { t } = useTranslation();
  return <Heading>{t("blog")}</Heading>;
};

export default Blog;
