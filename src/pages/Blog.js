import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  text-align: center;
  background: red;
`;

const Blog = () => {
  const { t } = useTranslation();
  return <Heading>{t("blog")}</Heading>;
};

export default Blog;
